/*

    КОПИРУЕТ СВОЙСТВА ИЗ objectFrom В objectTo - ТОЛЬКО ТЕ , КОТОРЫЕ ЕСТЬ В objectTo

*/
export const copyExactProperties = (objectFrom,objectTo) =>{
    Object.keys( objectFrom ).forEach(key => {
        if(objectTo.hasOwnProperty(key)){
          objectTo[key] = objectFrom[key]
        }                 
    })
}

//pull banners of ads

export const getExtAds = (mode, cnt) => {
    axios
    .post('/service/getAds', {
      mode,
      cnt
    })
    .then(response => {
      const _response = JSON.parse(response.request.responseText)
      if (_response.error && _response.error === "0") { 
      
      console.log(_response.result.adsList[0].src)

      }
    },
    reject => {
        if (reject.response) {              
            console.log(reject.response.data.errorMessage)
        }
    }      
  )           
}

let str = '<script type="text/javascript" src="https://ads4.krushmedia.com/?c=rtb&m=js&type=s2c&key=fe5c1687e1d07343abc02fb6be1555a7&domain=uniquerewards.com"></script> <script type="text/javascript" src="https://ads4.krushmedia.com/?c=rtb&m=js&type=s2c&key=fe5c1687e1d07343abc02fb6be1555a7&domain=uniquerewards.com"></script> <script type="text/javascript" src="https://ads4.krushmedia.com/?c=rtb&m=js&type=s2c&key=fe5c1687e1d07343abc02fb6be1555a7&domain=uniquerewards.com"></script>  <script type="text/javascript"> var infolinks_pid = 2033479; var infolinks_wsid = 0; </script>   <div class="rocket">testdivcone</div> <div class="rocket">testdivcone</div>'

export const displayAds = () => {

  let regexScript = /<script.*?script>/g
  let regexDiv = /<div.*?div>/g

  let scripts = [...findTags(regexScript)]
  let divs = [...findTags(regexDiv)]

  addBanner(scripts, divs)
  
}

const findTags = (regex) => {
  return str.matchAll(regex)
}

const addBanner = (js, divs) => {

  divs.forEach(element => {
    let divString = element[0]
    let div = document.createElement('div')    
    div.innerHTML = divString
    
    document.body.append(div)
  })

  js.forEach(element => {

    if(element[0].match(/src="(.*?)"/)) {
      
      let src = element[0].match(/src="(.*?)"/)
      
      let script = document.createElement('script')
      script.src = src[1]
      document.body.append(script)

    }

    else {

      let scriptContent = element[0].match(/<script.*>(.*?)<\/script>/)

      let script = document.createElement('script')
      script.innerHTML = scriptContent[1]
      document.body.append(script)

    }
  })

}


