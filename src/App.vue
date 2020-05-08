<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  	name: 'App',
  	created() {
    	this.$http.interceptors.response.use(undefined, function (err) {
	      	return new Promise(function (resolve, reject) {
	        	if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
	          		this.$store.dispatch("logout")
	        	}
	        	throw err;
	      	})
    	})
    },
}
</script>
