import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default{
  actions: {
  	async Login(ctx, data){
      return new Promise((resolve, reject)=>{
        axios.post("http://localhost:4000/user/login", data)
        .then((res)=>{
          const token = res.data.token;
          ctx.commit('auth_success', token);
          localStorage.setItem('token',token);
          axios.defaults.headers.common['Authorazation'] = token;
          return resolve(res);
        })
        .catch(err=>{
          ctx.commit('auth_error')
          localStorage.removeItem('token');
          return reject(err.response)
        })
      })
    },
    async Logout(ctx){
      return new Promise((resolve, reject)=>{
        ctx.commit('auth_logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorazation']
        resolve()
      })
    },
  },
}
