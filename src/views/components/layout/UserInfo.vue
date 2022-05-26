<template>
    <div>
        <div v-if="auth" class="line-user-info">
            <div class="wrapper wrapper_long">
                <p 
                    class="line-user-info__button d-flex justify-content-center align-items-center"
                >{{currentUserType}} member</p>
                <div class="line-user-info__right">
                    <div class="box-balance">
                        <div class="strip-percent">
                            <p class="strip-percent__label">Balance:</p>
                            <div class="box-pending__range">
                                <div class="box-pending__range-cont">
                                    <div 
                                        class="box-pending__range-active" 
                                        :style="{width: availableAmountWidth}"
                                    >
                                        <div 
                                            :class="availableAmountClass">
                                            <span 
                                                class="box-pending__persent"
                                                v-text="availableAmount"
                                            ></span>
                                        </div>
                                    </div>
                                    <p class="box-pending__total">$20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-pending">
                        <div class="strip-percent">
                            <p class="strip-percent__label">Pending:</p>
                            <div class="box-pending__range">
                                <div class="box-pending__range-cont">
                                    <div class="box-pending__range-active" style="width:54%;">
                                        <div 
                                            :class="pendingAmountClass"
                                        >
                                            <span 
                                                class="box-pending__persent"
                                                v-text="pendingAmount"
                                            ></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link :to="{name: 'withdraw'}" class="button button-withdraw">
                        Withdraw
                    </router-link>
                </div>
            </div>
        </div> 
    </div>      
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
      return {
          withdrawRange: 20,
          memberType: [
              {
                  id: 1,
                  name: 'Basic'
              },
              {
                  id: 2,
                  name: 'Advanced'
              }
          ],
          availableAmountClass: 'box-pending__range-active-cont',
          pendingAmountClass: 'box-pending__range-active-cont'
      }
  },
  computed:{
    ...mapGetters(['auth','user']),
    currentUserType(){
        const _user = this.memberType.find(type => Number(type.id) === Number(this.user.member_type) )
        return _user ? _user.name : 'Basic'
    },
    availableAmount(){
        if(Number( this.user.available_amount ) === 0){
            this.availableAmountClass = 'box-pending__range-active-cont-no-image'
            return '$ 0'
        }
        return '$ ' + this.user.available_amount
    },
    availableAmountWidth(){
        if(Number( this.user.available_amount >= this.withdrawRange)){
            this.availableAmountClass = 'box-pending__range-active-cont-no-after'
            return '107%'
        }
        // СЧИТАЕМ НЕ ОТ 100% А ОТ 107 ПОТОМУ, ЧТО КРИВАЯ ВЁРСТКА
        let balance = Number( this.user.available_amount ) * 107 / this.withdrawRange
        return ( balance < this.withdrawRange ? this.withdrawRange : balance ) + '%'
    },
    pendingAmount(){
        if(Number( this.user.pending_amount ) === 0){
            this.pendingAmountClass = 'box-pending__range-active-cont-no-image'
            return '$ 0'
        }
        return '$ ' + this.user.pending_amount
    }
  }
}
</script>