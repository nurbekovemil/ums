<template>
	<div class="d-appbar">    
	    <v-app-bar app class="purple darken-4" flat dense dark>
      		<v-app-bar-nav-icon @click="isDrawer" />
      		<v-toolbar-title>UMS</v-toolbar-title>
      		<v-spacer></v-spacer>

	      	<v-btn icon>
	        	<v-icon>mdi-heart</v-icon>
	      	</v-btn>

	      	<v-btn icon>
	        <v-icon>mdi-magnify</v-icon>
	      	</v-btn>
	      	<v-menu
		      v-model="isVisible"
		      offset-y
		    >
		    <template v-slot:activator="{ on }">
		      	<v-avatar
		      		size="36" 		          
		      		v-on="on">
			      <img
			        src="https://randomuser.me/api/portraits/men/81.jpg"
			        alt="John"
			      >
			    </v-avatar>
		        <v-btn

		      </template>
		      <v-list>
		        <v-list-item
		          v-for="(item, index) in appbarmenus"
		          :key="index"
		          @click=""
		        >
		          <v-list-item-content>
		            <v-list-item-title v-text="item.title"></v-list-item-title>
		          </v-list-item-content>
		          <v-list-item-icon>
		            <v-icon v-text="item.icon"></v-icon>
		          </v-list-item-icon>
		        </v-list-item>
		      </v-list>
		    </v-menu>
    	</v-app-bar>
    </div>
</template>
<script>
	export default {
		name:'d-navbar',
		props:{
			drawer: {
				type: Boolean,
				default:()=>{
					return true
				}
			}
		},
		methods: {
			isDrawer(){
				this.$emit('isDrawer')
			}
		},
		data: ()=>({
			appbarmenus:[
				{title:'Profile', icon:'mdi-account'},
				{title:'Setting', icon:'mdi-account-settings'},
				{title:'Logout', icon:'mdi-logout-variant'},
			],
			isVisible: false
		})
	}
</script>