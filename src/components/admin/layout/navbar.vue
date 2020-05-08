<template>
	<v-navigation-drawer v-model="drawer" class="purple darken-4 " dark app>
		<!-- avatar item -->
		<v-list-item two-line >
			<v-list-item-avatar>
			          <img src="https://randomuser.me/api/portraits/men/81.jpg">
			</v-list-item-avatar>
			<v-list-item-content>
			    <v-list-item-title>{{profile.username}}</v-list-item-title>
			    <v-list-item-subtitle>{{profile.email}}</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<!-- end avatar item -->
		<v-divider></v-divider>

		<v-list v-for="item in menus" :key="item.title" class="pb-0" dense nav>
			<!-- list group -->
			<v-list-group :prepend-icon="item.icon" color="white" v-if="item.child">
				<template v-slot:activator>
                    <v-list-item-title class="font-weight-regular">{{item.title}}</v-list-item-title>
                </template>

                <v-list-item v-for="child in item.child" :key="child.title" router :to="child.route" exact>
                    
                    <v-list-item-icon>
                      <v-icon v-text="child.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="child.title" class="font-weight-regular"></v-list-item-title>
                  
                </v-list-item>
            </v-list-group>
            <!-- end list group -->
            <!-- list item -->
            <v-list-item v-else router :to="item.route" exact>

                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                      <v-list-item-title class="font-weight-regular">{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                
            </v-list-item>
            <!-- end list item -->
		</v-list>
	</v-navigation-drawer>
</template>
<script>
	export default {
		name:'d-navbar',
		props: {
			drawer: {
				type: Boolean,
				default: ()=>{
					return true
				}
			},
			profile: {
				type: Object,
				default: ()=>{
					return {
						username:'test',
						email:'test'
					}
				}
			}
		},
		data: ()=>({
			menus: [
		        {
		        	icon: 'mdi-view-dashboard',
		        	title:'Dashboard', 
		        	route: '/dashboard', 
		        	menuchild: false
		        },
		        {
		        	icon: 'mdi-school',
		        	title: 'Universty', 
		        	menuchild: true,
		        	child:[
		        		{
		        			icon:'mdi-format-list-bulleted-square', 
		        			title: 'All universities', 
		        			route: '/dashboard/universities'
		        		},
		        		{
		        			icon:'mdi-plus', 
		        			title: 'Add university', 
		        			route: '/dashboard/adduniversity'
		        		}
		        	]
		        },
		        {
		        	icon: 'mdi-sitemap',
		        	title: 'Faculty', 
		        	menuchild: true,
		        	child:[
		        		{
		        			icon:'mdi-format-list-bulleted-square', 
		        			title: 'All faculties', 
		        			route: '/dashboard/faculties'
		        		},
		        		{
		        			icon:'mdi-plus', 
		        			title: 'Add faculty', 
		        			route: '/dashboard/addfaculty'
		        		}
		        	]
		        },
		        {
		        	icon: 'mdi-account-multiple',
		        	title:'Student',
		        	menuchild: true,
		        	child:[
		        		{
		        			icon:'mdi-format-list-bulleted-square',
		        			title:'All students',
		        			route:'/dashboard/allstudents'
		        		},
		        		{
		        			icon:'mdi-plus',
		        			title:'Add student',
		        			route:'/dashboard/addstudent'
		        		}
		        	]
		        }
		    ],


		})
	}
</script>