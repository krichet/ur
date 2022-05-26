<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white">
                    <div class="line-main-title">
                        <h1 class="main-title text-center my-4">Balance Details</h1>
                        <div 
                            class="my-3 text-capitalize h3 text-center" 
                            v-text="requestData.status">
                        </div>
                    </div>
                    <div class="d-flex justify-content-end align-items-center mt-4">
                        <ul class="select-number-views">
                            <li 
                                class="select-number-views__item"
                                :class="{'active': navItem.active}"
                                v-for="navItem in balanceDetailsNav"                              
                                :disabled="navItem.disabled" 
                                @click.prevent="navNumber(navItem)"
                            >
                                <a 
                                    href="#" 
                                    class="select-number-views__link"
                                    :class="{'disabled': navItem.disabled}"
                                    v-text="navItem.label"
                                ></a></li>
                        </ul>
                    </div>
                    <div class="table-history">
                        <div class="tr">
                            <div class="th col1"></div>
                            <div class="th col2">Amount</div>
                            <div class="th col3">Date</div>
                        </div>
                        <div 
                            class="tr"
                            v-for="earning in userBalanceDetail"
                        >
                            <div class="td" v-text="earning.label"></div>
                            <div class="td col2" v-text="earning.amount"></div>
                            <div class="td col3" v-text="earning.date"></div>
                        </div>
                    </div>
                    <Paginate
                        v-model="requestData.page"
                        :page-count="pageCount"
                        :click-handler="paginationStep"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination-numbers'">
                    </Paginate>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import camelCase from 'lodash/camelCase'
    import Paginate from 'vuejs-paginate'
    export default {
        components: {
            Paginate
        },
        data(){
            return {
                requestData: {
                    page: 1,
                    ipp: 20,
                    status: '',
                    earnType : ''
                },
                balanceDetailsNav: [
                    {
                        label: '20',
                        active: true,
                        disabled: false,
                        ipp: 20,
                    },
                    {
                        label: '40',
                        active: false,
                        disabled: false,
                        ipp: 40,
                    },
                    {
                        label: '60',
                        active: false,
                        disabled: false,
                        ipp: 60,
                    },
              ],
              userBalanceDetail: [],
              totalTransactions: 0         
            }
        },
        computed: {
            pageCount(){
                return Math.ceil(this.totalTransactions / this.requestData.ipp)
            }
        },
        methods:{
            getUserBalanceDetail(_requestData){
                 this.requestData = {...this.requestData, ..._requestData}
                 return axios
                        .post('/service/getUserBalanceDetail',this.requestData)
                            .then(response => {
                                    try {
                                        const _response = JSON.parse(response.request.responseText)
                                        console.log('_response /service/getUserBalanceDetail: ',_response)
                                        if (_response ){
                                            if(_response.error === "0") {                    
                                                Object.keys(_response.result).forEach(key => {
                                                    if(Array.isArray(_response.result[key])){
                                                        this.userBalanceDetail = _response.result[key]
                                                    }else{
                                                        this.totalTransactions = _response.result[key]
                                                    }
                                                })
                                                return Promise.resolve()
                                            }else{
                                                return Promise.reject(err)
                                            }
                                        }
                                        return Promise.reject('Parsing error')
                                    } catch (e) {
                                        console.log('RESPONSE PARSING ERROR /service/getUserBalanceDetail: ', e.message)                               
                                    }
                                    
                                })
                            .catch(reject => {
                                    if (reject.response) {
                                        console.log('REJECTED /service/getUserBalanceDetail')
                                        console.log(reject.response.data)
                                        console.log(reject.response.status)
                                        console.log(reject.response.headers)
                                    }
                                    return Promise.reject(reject)
                                }
                            )
            },
            paginationStep(page){
                this.getUserBalanceDetail({page})
            },
            navNumber(navItem){
                this.requestData.page = 1
                navItem.disabled = true
                this.balanceDetailsNav.forEach(nav => nav.active = false)
                navItem.active = true
                const {ipp} = navItem
                this.getUserBalanceDetail({ipp})
                    .then(data => {})
                    .catch(err => {})
                    .finally(()=>{
                        navItem.disabled = false        
                    })
            }
        },
        mounted(){
            const { status } = this.$route.params
            const earnType = camelCase( this.$route.params.earnType )
            this.getUserBalanceDetail({ status, earnType })
            // console.log(this.$route.params.earnType) // status: "current"
        }
    }
</script>

<style lang="scss">
    .pagination-numbers{
		list-style: none;
		padding: 0;
		margin: 20px 0;
		display: flex;
		
		li{
				display: flex;
				justify-content: center;
				align-items: center;
			a{
				outline: none;
				color: #007bff;
				background-color: #fff;
				/* border: 1px solid #eef0f3; */
				padding: .25rem .5rem;
				font-size: .875rem;
			
				border-radius: 50%;
				
								
				&:hover{
					z-index: 2;
					color: #0056b3;
					text-decoration: none;
					/* background-color: #e9ecef; 
					border-color: #dee2e6; */
				}
			}
			
			&.active{
				a{
					color: #fff;
					background-color: #007bff;
					border: 1px solid #007bff;

				}			
			}
		}
	}
</style>