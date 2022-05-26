const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const offers = require('./data/offers')


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}


app.post('/service/getOffers',(req, res) => {
  const ipp = req.body.ipp
  const offersLength = offers.length
  const _offers = ipp > offersLength ? offers : paginate(offers,req.body.ipp,req.body.page)
  const _res = {
    error: "0",
    result: {
      offers: _offers,
      total: [
        {
          offers_cnt: offersLength
        }
      ]
    }
  }
  res.status(200).send(_res)
})

app.get('/service/getPaymentMethods',(req, res) => {
  const _res = {
    "error":"0",
    "errorMessage":"",
    "result":{
       "paymentMethods":[
          {
             "method":"bitcoin",
             "minAmount":20,
             "enabled":"1",
             "bitcoinAddress":"17WfQt4GEicZRNjHx4rfYr1mBE1dAxgR23"
          },
          {
             "method":"check",
             "minAmount":50,
             "enabled":"0"
          },
          {
             "method":"paypal",
             "minAmount":50,
             "enabled":"2"
          }
       ]
    }
 }
  res.status(200).send(_res)
})

app.post('/service/sendPin',(req, res) => {
  console.log(req.body)
  const _res = {
      "error":"0",
      "errorMessage":"",
      "result":{
         "success":"true"
      }
  }
  res.status(200).send(_res)
})

app.post('/service/makePaymentRequest',(req, res) => {
  console.log(req.body)
  const _res = {
      "error":"0",
      "error_message":"",
      "result":{
         "success":"true"
      }
  }
  const _resErr = {
      "error":"120",
      "error_message":"Bitcoin address is empty or has wrong symbols"
  }
  setTimeout(() => {
    res.status(200).send(_res)
  }, 1000);
  
})


app.get('/service/checkAuth',(req, res) => {
  // console.log(req.body)
  // console.log(req.headers)
  if(req.headers.xuniqueauth){
    const _res = {
      "error":"0",
      "errorMessage":"",
      "result":{
         "authorized":true,
         "member_type":"2",
         "available_amount":"19.5",
         "pending_amount":10,
         "uid":"639839"
      }
   } 
   res.status(200).send(_res)  
  }else{
    const _res = {
      'error_code': '106',
      'error_message': "Error: Authorization is required."
    }
    res.status(401).send(_res)
   } 
})

app.post('/service/getUserBalanceSummary',(req, res) => {
    const _res = {
      "error":"0",
      "errorMessage":"",
      "result":{
       "balance":[
        {
         "regBonus":[
            {
             "status":"paid",
             "count":"3",
             "amount":"15.00"
            }
         ]
        },
        {
         "emailRead":[
            {
             "status":"paid",
             "count":"9",
             "amount":"0.06"
            }
         ]
        },
        {
         "clickCash":[
            
         ]
        },
        {
         "offerSurvey":[
            {
             "status":"current",
             "count":"1",
             "amount":"22.00"
            },
            {
             "status":"paid",
             "count":"9",
             "amount":"5.39"
            }
         ]
        },
        {
         "shopCash":[
            
         ]
        },
        {
         "miscCash":[
            
         ]
        },
        {
         "refCash":[
            {
             "status":"paid",
             "count":"10",
             "amount":"6.46"
            }
         ]
        },
        {
         "videoCash":[
            {
             "status":"paid",
             "count":"30",
             "amount":"0.72"
            }
         ]
        },
        {
         "radioCash":[
            {
             "status":"paid",
             "count":"4",
             "amount":"0.02"
            }
         ]
        },
        {
         "taskCash":[
            {
             "status":"paid",
             "count":"3",
             "amount":"0.03"
            }
         ]
        },
        {
         "ofwalCash":[
            {
             "status":"paid",
             "count":"3",
             "amount":"0.65"
            }
         ]
        },
        {
         "gameCash":[
            {
             "status":"current",
             "count":"4",
             "amount":"0.1007"
            }
         ]
        }
       ]
      }
    }
    res.status(200).send(_res)
})


app.post('/service/getUserBalanceDetail',(req, res) => {
  console.log(req.body)
  // console.log(req.headers)
  let _res
  if(req.body.earnType && req.body.earnType === 'offerSurvey'){
    if(Number(req.body.page) === 1 ){
     _res = 
        {
        "error":"0",
        "errorMessage":"",
        "result":{
        "total transactions":"100",
        "balance of offerSurvey":[
          {
          "date":"2015-03-17 11:58:33",
          "label":"UniqueRewards Profile Survey",
          "amount":"0.50",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2012-12-25 10:05:59",
          "label":"UniqueRewards contest payment",
          "amount":"1.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-10-03 09:53:50",
          "label":"Uniquerewards user's balance correction",
          "amount":"1.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-10-03 09:53:23",
          "label":"Uniquerewards user's balance correction",
          "amount":"13.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-10-03 09:52:51",
          "label":"Uniquerewards user's balance correction",
          "amount":"-7.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-09-30 03:20:50",
          "label":"Uniquerewards user's balance correction",
          "amount":"-7.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-09-30 03:19:36",
          "label":"Uniquerewa* Connection #0 to host uniquerewards left intact rds user's balance correction",
          "amount":"9.50",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-09-30 03:19:06",
          "label":"Uniquerewards user's balance correction",
          "amount":"5.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2011-09-29 11:05:47",
          "label":"Uniquerewards user's balance correction",
          "amount":"-10.61",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          },
          {
          "date":"2008-08-30 00:00:00",
          "label":"FreePay",
          "amount":"0.00",
          "status":"paid",
          "IsReversed":"Accepted",
          "refid":null
          }
        ]
        }
    } 
    }else
      if(Number(req.body.page) === 1 ){
        _res = {}
      }
     else{
      _res = {}
     }
    return res.status(200).send(_res)
  }

  res.status(200).send({})

})



app.listen(3000, () => {
  console.log('Server started on port 3000')
})

