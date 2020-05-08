<template>
  <v-row justify="center">
    <v-dialog v-model="isDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">University</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <!-- edit -->
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                v-model="dataItem.title"
                :readonly="!isEdit"
                label="Title"
                dense
                ></v-text-field>              
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                v-model="dataItem.description"
                :readonly="!isEdit"
                label="Description"
                dense
                ></v-text-field>              
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                v-model="dataItem.email"
                :readonly="!isEdit"
                label="E-mail"
                dense
                ></v-text-field>              
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                v-model="dataItem.website"
                :readonly="!isEdit"
                label="Website"
                dense
                ></v-text-field>              
              </v-col>
            </v-row>
            <!-- edit end -->

          </v-container>
        </v-card-text>
        <v-card-actions>  
          <v-spacer></v-spacer>
          <v-btn 
            color="blue" 
            class="mr-4" 
            text 
            @click="cancel(isEdit), close(isEdit)"
            >
            {{!isEdit ? 'close' : 'cancel'}}
          </v-btn>
          <v-btn color="success" class="mr-4" v-if="isEdit" @click="update(dataItem)">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <v-snackbar v-model="snackbar" :color="color">
      {{info}}
        </v-snackbar>
  </v-row>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: ()=>({
     snackbar: false,
     info: '',
     color: ''
    }),
    computed: {
      ...mapGetters(['isDialog', 'dataItem', 'isEdit', 'isDelete'])
    },
    methods: {
      ...mapActions(['CLOSE','UPDATE']),
      cancel(editing){
        if(!editing) return
          this.CLOSE()
      },
      close(editing){
        if(editing) return
          this.CLOSE()
      },
      update_info(info, color){
        this.snackbar = true
        this.info = info.message
        this.color = color
        setTimeout(()=>{
          this.snackbar = !this.snackbar
        }, 4000)
      },
      update(data){
        this.UPDATE(data)
        .then((res)=>{
          this.CLOSE()
          this.update_info(res, 'success')
        })
        .catch((err)=>{
          this.update_info(err, 'error')
        })
      }
    },
  }
</script>