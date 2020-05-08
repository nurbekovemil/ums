import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
	actions: {
		ADD_UNIVERSITY(ctx, data){
			ctx.commit('isLoading', true)
			const token = localStorage.getItem('token')
			return new Promise((resolve, reject)=>{
				axios.post('http://localhost:4000/university/add', data, {headers: {"token": token}})
				.then((res)=>{
					ctx.commit('isLoading', false)
					axios.defaults.headers.common['Authorazation'] = token;
					resolve(res.data.meassage)
				})
				.catch((err)=>{
					ctx.commit('isLoading', false)
					reject(err)
				})
			})
		}
	},
}