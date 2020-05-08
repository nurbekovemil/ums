<template>
    <v-container>
        <v-card
            class="mx-auto my-7 py-5"
            max-width="400"
        >
        <v-row justify="space-around">
        <v-avatar size="100">
          <img
            src="@/assets/logo-2.png"
            alt="login"
            class="mx-auto"
          >
        </v-avatar>
        </v-row>
        <v-row>
            <v-card-title class="mx-auto">login</v-card-title>   
        </v-row>
        <v-row>
            <v-col class="mx-5">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  :error="false"
                  prepend-inner-icon="mdi-email"
                  label="E-mail"
                  outlined
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
             <v-col class="mx-5">
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  prepend-inner-icon="mdi-lock"
                  label="Password"
                  outlined
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>

            <v-btn class="mx-auto" outlined depressed color="indigo" @click="login">Login<v-icon>mdi-login</v-icon></v-btn>
        </v-row>
  </v-card>
     <v-alert type="error" transition="slide-y-transition" :value="errLogin" width="400" class="mx-auto">
        {{errLoginText}}
    </v-alert>
</v-container>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength,  email } from 'vuelidate/lib/validators'
    import { mapGetters, mapActions} from 'vuex'


  export default {
    mixins: [validationMixin],
    validations: {
      email: { 
        required,
        email,
    },
      password: {
        required,
        minLength: minLength(6),

        }
    },
    data(){
      return {
        email : "",
        password : "",
        errLogin: false,
        errLoginText: ''

      }
    },
    computed:{
        ...mapGetters(['isLoggedIn']),
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.password.$model) return errors
            !this.$v.password.minLength && errors.push('Меньше чем 6')
            !this.$v.password.required && errors.push('Пароль is required')
            return errors
        },
    },
    methods:{
    	...mapActions(['Login']),
    	async login(){
            this.$v.$touch()
            if (this.$v.$invalid) return
            let data= {
                email: this.email,
                password: this.password
            }
    		this.Login(data)
            .then(()=>{
    			this.$router.push('/dashboard');
    		})
        .catch((err)=>{
          this.errLogin = true
          setTimeout(() => (this.errLogin = false), 4000)
          this.errLoginText = err.data.message
          console.log('error: ',err.data.message)
    		})
    	},
    },
    mounted(){
      console.log(this.isLoggedIn)
    }
}
</script>