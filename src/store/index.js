import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import userLogin from './modules/user/user-login'
import userSignup from './modules/user/user-signup'
import user from './modules/user/user'
import allUniversities from './modules/university/all-universities'
import addUniversity from './modules/university/add-university'
import viewItemUniversity from './modules/university/view-item-university'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    	token: localStorage.getItem('token') || '',
		loading: false
	},
	mutations:{
		isLoading(state, data){
      		state.loading = data
    	},
    	auth_success(state, token){
	      state.token = token
	      
	    },
	    auth_logout(state){
	      state.token =  ''
	    },
	    auth_error(state){
	      state.token = ''
	    }
	},
	modules: {
	    userLogin,
	    userSignup,
	    user,
	    allUniversities,
	    addUniversity,
	    viewItemUniversity
	},
	getters:{
		isLoading(state){
			return state.loading
		},
		isLoggedIn(state){
			if(!state.token) return false
			return true
		}
	}
})
