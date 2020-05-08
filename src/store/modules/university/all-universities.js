import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
	state: {
		univers: null
	},
	actions:{
		async ALL_UNIVERSITIES({commit}){
			const token = localStorage.getItem('token');
			return new Promise((resolve, reject)=>{
				axios.get('http://localhost:4000/university/all', {headers:{"token":token}})
				.then((res)=>{
					commit('SET_UNIVERS', res.data)
					resolve(res)
				})
				.catch((err)=>{
					reject(err)
				})
			})
		}
	},
	mutations: {
		SET_UNIVERS(state, data){
			state.univers = data
		}
	},
	getters:{
		GET_UNIVERSITIES(state){
			return state.univers
		}
	}
}