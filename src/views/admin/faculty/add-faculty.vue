<template>
  <form>
    <h1>Add stuent</h1>
  	<v-row>
      <!-- faculty name -->
  		<v-col cols="12" md="6">
  			<v-text-field
		      v-model="title"
		      :error-messages="titleErrors"
		      label="Title"
		      outlined
		      required
		      @input="$v.title.$touch()"
		      @blur="$v.title.$touch()"
		    ></v-text-field>
  		</v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          label="Университет"
          
          outlined
        ></v-select>
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
      title: '',
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
