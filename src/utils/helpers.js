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

        displayAds(_response.result.adsList)

      }
    },
    reject => {
        if (reject.response) {              
            console.log(reject.response.data.errorMessage)
        }
    }      
  )
  
}


export const displayAds = (banners) => {
let regexScript = /<script[\s\S]+<\/script>/gi
  // let regexScript = /<script.*?<\/script>/gi
  // let regexScript = /<SCRIPT[\s\S]+<\/SCRIPT>/g
  let regexDiv = /<div.*?div>/g

  banners.forEach(banner => {
    
    let scripts = findTags(regexScript, banner)
    let divs = findTags(regexDiv, banner)
    // console.log(scripts)

    addBanner(scripts, divs, banner)

  })
  
}

const findTags = (regex, banner) => {    
    // console.log(banner.src.match(regex))
    return [...banner.src.matchAll(regex)]
}

const setBannerPosition = (banner) => {

  switch(banner.mode) {
    case '1':
      return 'left-banner_ext'
      break
    case '2':
      return 'right-banner_ext'
      break
    case '3':
      return 'top-banner_ext'
      break
    case '4':
      return 'bottom-banner1_ext'
      break    
    case '5':
      return 'bottom-banner2_ext'
      break        
    case '6':
      return 'bottom-banner3_ext'
      break    
    case '7':
      return 'bottom-video-banner_ext'
      break      
    //in case mode is undefined   
    default:
      return 'bottom-banner2_ext'
  }


}

const addBanner = (js, divs, banner) => {
  // console.log(setBannerPosition(banner))
  let bannerPosition = document.getElementsByClassName(setBannerPosition(banner))[0]
  // console.log(bannerPosition)

  if (bannerPosition) {

    divs.forEach(element => {
      let divString = element[0]
      let div = document.createElement('div')    
      div.innerHTML = divString
      
      bannerPosition.append(div)
    })
  
    js.forEach(element => {
  
      if(element[0].match(/src=".*?"/)) {
        
        let src = element[0].match(/src="(.*?)"/)
        // console.log(src)
        
        let script = document.createElement('script')
        script.src = src[1]
        bannerPosition.append(script)
  
      }
  
      else {
        
        let scriptContent = element[0].match(/<script.*?>([\s\S]+)<\/script>/i)
        // console.log(scriptContent)
  
        let script = document.createElement('script')
        script.innerHTML = scriptContent[1]      
        bannerPosition.append(script)
        
  
      }
  
    })

  }

  

}


