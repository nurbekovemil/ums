import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
	state: {
		delete: false,
		edit: false,
		dataItem:[{
			title: '',
			description: '',
			email: '',
			website: ''
		}],
		dialog: false,
	},
	actions:{
		async UPDATE({dispatch, commit}, data){
			const token = localStorage.getItem('token')
			return new Promise((resolve, reject)=>{
				axios.post('http://localhost:4000/university/update', data, {headers: {"token": token}})
				.then((res)=>{
					dispatch('ALL_UNIVERSITIES')
					resolve(res.data)
				})
				.catch((err)=>{
					reject(err)
				})
			})
		},
		CLOSE({commit}){
			commit('CLOSE')

		},
		VIEW({commit}, data){
			commit('SET_DATA', data)
			commit('VIEW')
		},
		EDIT({commit}, data){
			commit('SET_DATA', data)
			commit('EDIT')
		},
	},
	mutations: {
		CLOSE(state){
			state.edit = false
			state.dialog = false
			state.dataItem = {}
		},
		SET_DATA(state, data){
			state.dataItem = {
				_id: data._id,
				title: data.title,
				description: data.description,
				email: data.email,
				website: data.website
			}
		},
		VIEW(state){
			state.dialog = true
		},
		EDIT(state){
			state.edit = true
			state.dialog = true
		}
	},
	getters:{
		isDialog(state){
			return state.dialog
		},
		dataItem(state){
			return state.dataItem
		},
		isEdit(state){
			return state.edit
		},
		isDelete(state){
			return state.delete
		}
	}
}