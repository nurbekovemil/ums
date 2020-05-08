<template>
	<div>
		<v-row no-gutters>
	      <v-col
	        v-for="item in GET_UNIVERSITIES"
	        :key="item.id"
	        cols="12"
	        sm="6"
	        class="pa-1"
	      >
         <v-card
		    class="mx-auto"
		    max-width="100%"
		    
		  >
		    <v-list-item three-line>
		      <v-list-item-content>
		        <div class="overline mb-4">OVERLINE</div>
		        <v-list-item-title class="headline mb-1">{{item.title}}</v-list-item-title>
		        <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
		      </v-list-item-content>

		      <v-list-item-avatar
		        tile
		        size="80"
		        color="grey"
		      ></v-list-item-avatar>
		    </v-list-item>

		    <v-card-actions>
		      <v-spacer></v-spacer>

              <v-btn icon @click="view(item)"> 
                <v-icon>mdi-eye</v-icon>
              </v-btn>

              <v-btn icon @click="edit(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
		    </v-card-actions>
		  </v-card>
	      </v-col>
	    </v-row>

	</div>
</template>

<script>
	import {mapGetters, mapActions } from 'vuex'
	export default {
		name:"universities-list",
		computed: {
			...mapGetters(['GET_UNIVERSITIES'])
		},
		methods: {
			...mapActions(['ALL_UNIVERSITIES','EDIT','VIEW']),
			view(data){
				this.VIEW(data)
			},
			edit(data){
				this.EDIT(data)
			}
		},
		async mounted(){
			this.ALL_UNIVERSITIES()

		}
	}
</script>