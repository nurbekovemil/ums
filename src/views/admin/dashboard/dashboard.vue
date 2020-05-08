<template>
	<div class="dashboard">
		<v-row no-gutters>
      <v-col
        v-for="n in 4"
        :key="n"
        cols="12"
        sm="3"
        class="pa-1"
      >
      <v-card
	    class="px-auto mx-auto"
	    max-width="100%"
	    outlined
	    >
	    <v-list-item three-line>
	    <v-avatar color="indigo" size="75">
	      <v-icon dark size="50">mdi-account-circle</v-icon>
	    </v-avatar>
	      <v-list-item-content class="pl-4">
	        <v-list-item-title class="headline">Total Students</v-list-item-title>
	        <v-list-item-subtitle >655</v-list-item-subtitle>
	        <div class="overline">OVERLINE</div>
	      </v-list-item-content>
	    </v-list-item>
	  </v-card>

      </v-col>
    </v-row>
	  	
  </div>
</template>

<script>
	export default {
		name: "Dashbord",
	}
</script>