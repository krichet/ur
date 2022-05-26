import {copyExactProperties} from 'utils/helpers'

export const state = {
    data:{
        token: localStorage.getItem('session-token') || '',
        member_type: 1,
        available_amount: 0,
        pending_amount: 0, 
        avatar: '',
        avatarDefault: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M0ZGNDU2Njk3QTBCRTYxMThGOTBBRUJEMEJGRkI5NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NThFNkQ0QTU4QUUzMTFFNjgwMTNCNzk1NkNGQzM3RUEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NThFNkQ0QTQ4QUUzMTFFNjgwMTNCNzk1NkNGQzM3RUEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBOTRFOUU2NkIxNkRFNjExOTQxN0Y0MkJEQzU0MUYxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRkY0NTY2OTdBMEJFNjExOEY5MEFFQkQwQkZGQjk2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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",
        pwd: "",
        bdate: "",
        bdd: "",
        bdm: "",
        bdy: "",
        city: "",
        conf: "",
        country: "",
        email: "",
        fname: "",
        gender: "",
        lname: "",
        locked: "",
        notif: "",
        optin: "",
        optin1: "",
        paygrp: "",
        phone: "",
        state: "",
        street: "",
        uid: "",
        zip: "",
        fp_val: "",
        'g-recaptcha-response': "",
        refid: "",
        bid: "",
        subid1: "",
        subid2: "",
        subid3: ""
    },   
    /*
        ФОРМА КОМПОНЕНТОВ:
          - РЕГИСТРАЦИИ Register.vue
          - ВЫВОД ДАННЫХ ЮЗЕРА В ПРОФИЛЬ Profile.vue 



    */
    // form:{
    //     email: '',
    //     pwd: '',
    //     fname: '',
    //     lname: '',
    //     country: '',
    //     street: '',
    //     city: '',
    //     state: '',
    //     zip: '',
    //     phone: '',
    //     web: '',
    //     gender: '',
    //     bdate: '',
    //     fp_val: '',
    //     'g-recaptcha-response': '',
    //     optin: '',
    //     optin1: '',
    //     notif: '',
    //     conditions: ''       
    // },
    register: {
        step: 1,
        IS_SIGNUP2: '',
    }
}

export const mutations = {
    GET_BASE_REGISTER_CONFIG(state, newData){
        console.log('GET_BASE_REGISTER_CONFIG')
        state.register.IS_SIGNUP2 = newData
    },
    CHANGE_REGISTRATION_STEP(state, newData){
        state.register.step = newData
    },
    // UPDATE_USER_FORM(state, newData) {
    //     let form = state.form
    //     Object.keys(newData).forEach(key => {
    //         if(form.hasOwnProperty(key)){       
    //             form[key] = newData[key].value
    //         }       
    //     })
    // },
    /*

      ОБНОВЛЯЕМ ТОЛЬКО ТЕ ПОЛЯ user.data, КОТОРЫЕ ЕСТЬ В newData

    */
    UPDATE_USER_DATA(state, newData){
        // let data = state.data
        // Object.keys(newData).forEach(key => {
        //     if(data.hasOwnProperty(key)){
        //         data[key] = newData[key]
        //     }       
        // }) 
        copyExactProperties(newData,state.data)   
    },
    RESET_USER_DATA(state){
        console.log('RESET_DATA')
        let data = state.data
        Object.keys(data).forEach(key => {
            if(data.hasOwnProperty(key)){
              data[key] = ''
            }
        })
    }
  }

  export const actions = {
    getBaseRegisterConfig({ commit }, newData){
      commit('GET_BASE_REGISTER_CONFIG', newData)
    },
    changeRegistrationStep({ commit }, newData){
      commit('CHANGE_REGISTRATION_STEP', newData)
    },
    // updateUserForm: ({ commit }, newData) => {
    //   console.log('newData: ',newData)
    //   commit('UPDATE_USER_FORM', newData)
    // },
    updateUserData({ commit }, newData){
      commit('UPDATE_USER_DATA',newData)
    },
    resetUserData({commit}){
      commit('RESET_USER_DATA')
    },
    getUserData({ commit }){
      return axios
          .get('/service/getUserInfo')
          .then(response => {
                  try {
                      const _response = JSON.parse(response.request.responseText)
                      console.log('_RESPONESE: ',_response)
                      if (_response && _response.error === "0") {                    
                        commit('UPDATE_USER_DATA', _response.result[0])
                        return Promise.resolve(_response.result[0])
                      }
                      return Promise.reject('ACTION getUserData: NO RESULT')
                  } catch (e) {
                      console.log('RESPONSE PARSING ERROR from ACTION getUserData: ', e.message)
                      return Promise.reject(e.message)
                  }
                  
            })
            .catch(reject => {
                  if (reject.response) {
                      console.log('REJECTED')
                      console.log(reject.response.data)
                      console.log(reject.response.status)
                      console.log(reject.response.headers)
                  }
                  return Promise.reject(`REJECTED: ${reject.response}`)
              }
          )
    }  
  }

  export const  getters = {
    user: state => state.data,
    pwd: state => state.data.pwd,
    token: state => state.data.token,
    uid: state => state.data.uid,
    fname: state => state.data.fname
  }