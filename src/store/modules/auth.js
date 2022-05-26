export const state = {
    status: false
}

export const mutations = {
    AUTH_SUCCESS(state){
        state.status = true
    },
    AUTH_LOGOUT(state){
        state.status = false
    },
}

export const actions = {
    authentication({ commit }, authData){
        if(authData.status){
            localStorage.setItem('session-token', authData.token)
            axios.defaults.headers.common['XUniqueAuth'] = authData.token
            commit('AUTH_SUCCESS')
        }else{
            localStorage.removeItem('session-token')
            delete axios.defaults.headers.common['XUniqueAuth']
            commit('AUTH_LOGOUT')           
        }
        
    }
}

export const getters = {
    auth: state => state.status,
    
}