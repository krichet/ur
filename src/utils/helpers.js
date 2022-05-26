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

let str = '<script type="text/javascript" src="https://ads4.krushmedia.com/?c=rtb&m=js&type=s2c&key=fe5c1687e1d07343abc02fb6be1555a7&domain=uniquerewards.com"></script> <script type="text/javascript" src="11111"></script><div class="rocket">testdivcone</div>'

export const displayAds = () => {

  let scriptTag = findTag('<script')
  let divtTag = findTag('<div>')

  let src = getSrcJs(str)

  console.log(src)
  
}

const findTag = (tag) => {
  return str.indexOf(tag)
}

const getSrcJs = (str) => {
  var regex = /src=".*?" | <div.*<\/div>/g
  return str.match(regex)
}
