import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default{
  actions: {
    async Register(ctx, data){
      return new Promise((resolve, reject)=>{
        axios.post('http://localhost:4000/user/signup', data)
        .then((res)=>{
          const token = res.data.token;
          ctx.commit('auth_success', token)
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorazation'] = token;
          resolve(res)
        })
        .catch((e)=>{
          ctx.commit('auth_error')
          localStorage.removeItem('token')
          reject(e)
        })
      })
    },
  }
}
