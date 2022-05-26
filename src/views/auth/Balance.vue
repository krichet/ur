<template>
    <div>
        <UserInfo />
        <div class="wrapper wrapper_long">
            <AsideLeft />
            <div class="main-cont">
                <div class="main-cont__white">
                    <div class="line-main-title">
                        <div class="line-main-title__left">
                            <h1 class="main-title text-center">Balance</h1>
                            <p class="sub-text-title text-center">Updated 09/01/15, 5:00 PM</p>
                            <h2 class="sub-title">Current Earnings</h2>
                        </div>
                        <div class="line-main-title__right"><a href="#" class="button button_big button_history">Payment
                                history</a></div>
                    </div>
                    <div class="table-history">
                        <div class="tr">
                            <div class="th col1"></div>
                            <div class="th col2">Transactions</div>
                            <div class="th col3">Rewards</div>
                            <div class="th col4">Details</div>
                        </div>
                        
                        <div 
                            class="tr"
                            v-for="earning in this.userBalanceSummary.current.data"
                        >
                            <div class="td" v-text="earning.label"></div>
                            <div class="td col2" v-text="earning.count"></div>
                            <div class="td col3">
                                <p class="table-history__price">$ {{earning.amount}}</p>
                            </div>
                            <div class="td col4">
                                <router-link 
                                    :to="'balance-details/current/' + toKebabCase(earning.earnType)" 
                                    v-if="earning.details"
                                    class="link-view"
                                >
                                    view details
                                </router-link>
                            </div>
                        </div>
                        <div class="tr total">
                            <div class="td">Total:</div>
                            <div class="td col2">{{this.userBalanceSummary.current.total.count}}</div>
                            <div class="td col3">
                                <p class="table-history__price">$ {{this.userBalanceSummary.current.total.amount}}</p>
                            </div>
                            <div class="td col4"></div>
                        </div>
                    </div>
                    <div class="line-show-offers">
                        <p class="line-show-offers__text">You only need to complete 5 more offers to cash out!</p>
                        <router-link :to="{name: 'offers'}" class="button button_big">Show Offers</router-link>
                    </div>
                    <h2 class="sub-title sub-title_top">Ordered Earnings</h2>
                    <div class="table-history">
                        <div class="tr">
                            <div class="th col1"></div>
                            <div class="th col2">Transactions</div>
                            <div class="th col3">Rewards</div>
                            <div class="th col4">Details</div>
                        </div>
                        
                        <div 
                            class="tr"
                            v-for="earning in this.userBalanceSummary.ordered.data"
                        >
                            <div class="td" v-text="earning.label"></div>
                            <div class="td col2" v-text="earning.count"></div>
                            <div class="td col3">
                                <p class="table-history__price">$ {{earning.amount}}</p>
                            </div>
                            <div class="td col4">
                                <router-link 
                                    :to="'balance-details/ordered/' + toKebabCase(earning.earnType)" 
                                    v-if="earning.details"
                                    class="link-view"
                                >
                                    view details
                                </router-link>
                            </div>
                        </div>
                        <div class="tr total">
                            <div class="td">Total:</div>
                            <div class="td col2">{{this.userBalanceSummary.ordered.total.count}}</div>
                            <div class="td col3">
                                <p class="table-history__price">$ {{this.userBalanceSummary.ordered.total.amount}}</p>
                            </div>
                            <div class="td col4"></div>
                        </div>
                    </div>
                    <h2 class="sub-title sub-title_top">Paid Earnings</h2>
                    <div class="table-history">
                        <div class="tr">
                            <div class="th col1"></div>
                            <div class="th col2">Transactions</div>
                            <div class="th col3">Rewards</div>
                            <div class="th col4">Details</div>
                        </div>
                        
                        <div 
                            class="tr"
                            v-for="earning in this.userBalanceSummary.paid.data"
                        >
                            <div class="td" v-text="earning.label"></div>
                            <div class="td col2" v-text="earning.count"></div>
                            <div class="td col3">
                                <p class="table-history__price">$ {{earning.amount}}</p>
                            </div>
                            <div class="td col4">
                                <router-link 
                                    :to="'balance-details/paid/' + toKebabCase(earning.earnType)" 
                                    v-if="earning.details"
                                    class="link-view"
                                >
                                    view details
                                </router-link>
                            </div>
                        </div>
                        <div class="tr total">
                            <div class="td">Total:</div>
                            <div class="td col2">{{this.userBalanceSummary.paid.total.count}}</div>
                            <div class="td col3">
                                <p class="table-history__price">$ {{this.userBalanceSummary.paid.total.amount}}</p>
                            </div>
                            <div class="td col4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import kebabCase from 'lodash/kebabCase'
    export default {
        data(){
            return {
                userBalanceSummary: {
                    current:  {
                        data: [],
                        total: {
                            amount: 0,
                            count: 0
                        }
                    },
                    ordered:  {
                        data: [],
                        total: {
                            amount: 0,
                            count: 0
                        }
                    },
                    paid:  {
                        data: [],
                        total: {
                            amount: 0,
                            count: 0
                        }
                    },
                },
                earnTypes: [
                    {
                        name: 'regBonus',
                        label: 'Signup Bonus',
                        details: false, // details: false - означает, что он не входит в список пар-ров earnType передаваемых в /service/getUserBalanceDetail для получения деталей по балансу этого вида заработка и соответственно не выводится в таблицу
                    },
                    {
                        name: 'emailRead',
                        label: 'SMailings Read',
                        details: false,
                    },
                    {
                        name: 'clickCash',
                        label: 'Earnings For Clicks',
                        details: false,
                    },
                    {
                        name: 'videoCash',
                        label: 'Video Earnings',
                        details: false,
                    },
                    {
                        name: 'taskCash',
                        label: 'Cash Tasks Earnings',
                        details: false,
                    },
                    {
                        name: 'offerSurvey',
                        label: 'Cash Offers/Surveys Earnings',
                        details: true,
                    },
                    {
                        name: 'ofwalCash', 
                        label: 'OfferWall Earnings',
                        details: true,
                    },
                    {
                        name: 'shopCash', 
                        label: 'Cash Shopping Earnings',
                        details: true,
                    },
                    {
                        name: 'gameCash',
                        label: 'Paid to Games',
                        details: true,
                    },
                    {
                        name: 'miscCash', 
                        label: 'Miscellaneous Earnings',
                        details: true,
                    },
                    {
                        name: 'refCash', 
                        label: 'Referral Rewards',
                        details: true,
                    }
                ]            
            }
        },
        methods:{
            getUserBalanceSummary(){
                 axios
                    .post('/service/getUserBalanceSummary')
                    .then(response => {
                            try {
                                const _response = JSON.parse(response.request.responseText)
                                console.log('_response /service/getUserBalanceSummary: ',_response)
                                if (_response && _response.error === "0") {                    
                                    // _response.result.balance
                                    console.log('this.userBalanceSummary: ',this.userBalanceSummary)
                                    Object.keys( this.userBalanceSummary ).forEach(_earnType =>{
                                        this.userBalanceSummary[_earnType].data = _response.result.balance.reduce((acc,cur)=>{
                                                            let _a = {} 
                                                            const earnType = Object.keys(cur)[0]
                                                            if(cur[earnType].length > 0){		
                                                                // const details = this.earnTypes.find(type => type.name === earnType)
                                                                const _data = cur[earnType].find(item => item.status === _earnType)
                                                                const _data2 = this.earnTypes.find(type => type.name === earnType)
                                                                // проверяем, чтобы находился в актуальном списке 
                                                                // к примеру radioCash - depricated 
                                                                if(_data && _data2){
                                                                    _a = {
                                                                        earnType,
                                                                        ..._data,
                                                                        ..._data2
                                                                        }
                                                                    acc.push(_a)		
                                                                }			
                                                            }
                                                            return acc		
                                                        },[])
                                        console.log('this.userBalanceSummary[_earnType].data: ',this.userBalanceSummary[_earnType].data)
                                        this.userBalanceSummary[_earnType].total = this.userBalanceSummary[_earnType].data.reduce((acc,cur)=>{
                                            acc.amount += Number(cur.amount)
                                            acc.count += Number(cur.count)
                                            return acc	
                                        },{amount: 0, count: 0})
                                    })
                                    console.log('this.userBalanceSummary: ',this.userBalanceSummary)
                                }
                            } catch (e) {
                                console.log('RESPONSE PARSING ERROR /service/getUserBalanceSummary: ', e.message)                               
                            }
                            
                        })
                        .catch(reject => {
                            if (reject.response) {
                                console.log('REJECTED /service/getUserBalanceSummary')
                                console.log(reject.response.data)
                                console.log(reject.response.status)
                                console.log(reject.response.headers)
                            }
                        }
                    )
                },
                toKebabCase: s => kebabCase(s)
        },
        mounted(){
            this.getUserBalanceSummary()
        }
    }
</script>
