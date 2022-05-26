import axios from 'axios'
window.axios = axios

const REMOTE = 'https://new.uniquerewards.com/api/service.php'
const LOCAL = 'https://new.uniquerewards.com/api/service.php'
const AUTH_TOKEN = localStorage.getItem('session-token') || ''


axios.defaults.baseURL = LOCAL
// axios.defaults.baseURL = REMOTE
axios.defaults.headers.common['XUniqueAuth'] = AUTH_TOKEN

/*

    INTERCEPTORS.REQUEST НА НАЛИЧИЕ ТОКЕНА НЕ СТАВИТСЯ ТАК, КАК INTERCEPTORS ВЫСТАВЛЯЕТСЯ ГЛОБАЛЬНО ДЛЯ ВСЕХ ЗАПРОСОВ В ТОМ ЧИСЛЕ ДЛЯ ЛОГИНА И РЕГИСТРАЦИИ НЕАВТОРИЗОВАННЫХ ПОЛЬЗОВАТЕЛЕЙ

*/
axios.interceptors.request.use((config) => {
  /*
  
    ЕСЛИ AXIOS ПРОСТАВИТ СЛЕШ НА ЗАКРЫТИЕ АДРЕСНОЙ СТРОКИ - ОБРЕЗАЕМ ЕГО

  */
  config.url = config.url.replace(/\/$/,'')
  return config;
});


axios.interceptors.response.use(function (response) {
  // console.log('INTERCEPTORS RESPONSE: ',response)
  return response;
}, function (error) {
  // console.log('INTERCEPTORS ERROR--',error)
  // console.log(error.response.data)
  // console.log(error.response.status)
  // console.log(error.response.headers)
  // console.log('--INTERCEPTORS ERROR')
  return Promise.reject(error);
})

export default axios