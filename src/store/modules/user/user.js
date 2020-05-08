import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default{
  state: {
    user: {
      username: '',
      email: ''
    }
  },
  mutations:{
  	setUser(state, data){
  		state.user = data
  	},
  },
  actions:{
  	async getMe(ctx, token){
  		return new Promise((resolve, reject)=>{
        ctx.commit('isLoading', true)
        const token = localStorage.getItem('token')
        axios.get('http://localhost:4000/user/me', {headers:{"token": token }})
        .then((res)=>{
          axios.defaults.headers.common['Authorazation'] = token
          ctx.commit('auth_success', token)
          ctx.commit('setUser', res.data)
          ctx.commit('isLoading', false)
          resolve(res)
        })
        .catch((e)=>{
          localStorage.removeItem('token');
          delete axios.defaults.headers.common['Authorazation']
          ctx.commit('auth_error')
          reject(e)
        })
      })
  	}
  },
  getters:{
    USER(state){
      return state.user
    }
  }
}