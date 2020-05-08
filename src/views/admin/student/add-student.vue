<template>
  <form>
    <h1>Add stuent</h1>
  	<v-row>
      <!-- firstname -->
  		<v-col cols="12" md="6">
  			<v-text-field
		      v-model="firstname"
		      :error-messages="nameErrors"
		      label="First Name"
		      outlined
		      required
		      @input="$v.firstname.$touch()"
		      @blur="$v.firstname.$touch()"
		    ></v-text-field>
  		</v-col>
      <!-- last name -->
      <v-col cols="12" md="6">
        <v-text-field
          v-model="lastname"
          :error-messages="nameErrors"
          label="Last Name"
          outlined
          required
          @input="$v.lastname.$touch()"
          @blur="$v.lastname.$touch()"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Дата рождения"
                  prepend-icon="mdi-calendar"
                  outlined
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
  		<v-col cols="12" md="6">
  			<v-text-field
		      v-model="email"
		      :error-messages="emailErrors"
		      label="E-mail"
		      outlined
		      required
		      @input="$v.email.$touch()"
		      @blur="$v.email.$touch()"
		    ></v-text-field>
  		</v-col>
        <v-col cols="12" md="6">
        <v-text-field
            v-model="website"
            label="University web site"
            hint="www.example.com"
            persistent-hint
            outlined
          ></v-text-field>
      </v-col>
  	</v-row>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import { mapActions } from 'vuex'

  export default {
    mixins: [validationMixin],

    validations: {
      title: { required, maxLength: maxLength(10) },
      email: { required, email },
    },

    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      title: '',
      email: '',
      website:'',
      description: ''
    }),
    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.title.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      ...mapActions(['']),
      submit () {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.ADD_UNIVERSITY({
          title: this.title,
          email: this.email,
          description: this.description,
          website: this.wesite
        })
      .then((res)=>{
          alert('yes')
        })
      .catch((err)=>{
          alert('no')
        })
      },
    },
  }
</script>
