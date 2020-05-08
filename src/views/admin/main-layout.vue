<template>
  <div>
        <navbar :drawer="drawer" :profile="USER"/>
        <appbar :drawer="drawer" 
        @isDrawer="isDrawer"/>
         <v-content>
          <v-progress-linear
            :active="isLoading"
            :indeterminate="isLoading"
            absolute
            height="4"
            color="indigo accent-4"
            top
      ></v-progress-linear>
          <v-breadcrumbs :items="breadcrumb">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <v-container>
                <transition
                  name="fade"
                  mode="out-in"
                >
                  <router-view/>
                </transition>
          </v-container>
        </v-content>
  </div>
</template>
<script>

  import {mapGetters, mapActions} from 'vuex'
  import navbar from '@/components/admin/layout/navbar.vue'
  import appbar from '@/components/admin/layout/appbar.vue'

export default {
  name: 'Admin',
  data: ()=>({
    drawer: true,
    breadcrumb: [],
  }),
  components:{
    navbar,
    appbar
  },
  computed: {
    ...mapGetters(['USER', 'isLoading', 'isLoggedIn'])
  },
  methods: {
    ...mapActions(['getMe']),
    isDrawer(){
      this.drawer = !this.drawer
    },
    updateBreadcrumb(){
      this.breadcrumb = this.$route.meta.breadcrumb
    },
    userUpdate(){
      this.getMe().catch((err)=>{
        this.$router.push('/login')
      })
    }
  },
  async mounted(){
    this.updateBreadcrumb();
    this.userUpdate();
  },
  watch: {
    '$route'(){
      this.updateBreadcrumb();
      this.userUpdate();
    }
  }
}
</script>
