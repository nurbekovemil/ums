<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Username</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>
      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>
      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data: ()=>({
      name : "",
      email : "",
      password : "",
    }),
    methods: {
      ...mapActions(['Register']),
      async register() {
        let data = {
          username: this.name,
          email: this.email,
          password: this.password,
        }
        this.Register(data)
        .then(()=>{
          this.$router.push('/dashboard')
        })
        .catch((e)=>{
          console.log(e)
        })
      }
    }
  }
</script>