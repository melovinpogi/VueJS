<template>
  <div id="create-task">
    <h2>Add a New Task</h2>
    <v-alert v-show="alert" error dismissible v-model="alert">
      {{ msg }}
    </v-alert>
    <form v-on:submit.prevent="submitForm">
      <v-container fluid>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Task Name:</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
                  label="Label Text"
                  v-model="task.name"
                  hint= "At least 3 characters"
                  required>
              </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Task Description:</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field label="Label Text"
                          v-model="task.description"
                          counter
                          multi-line
                          max="120"
                          hint= "At least 3 characters"
                          required>
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Project:</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-select
               label="Select Project"
               persistent-hint
               :items="options"
               v-model="task.project"
               single-line
               required
               item-value="text">
           </v-select>
          </v-flex>
        </v-layout>
        <v-btn light info type="submit">
          Submit
      </v-btn>
   <v-snackbar
       :timeout="timeout"
       :top="y === 'top'"
       :bottom="y === 'bottom'"
       :right="x === 'right'"
       :left="x === 'left'"
       :multi-line="mode === 'multi-line'"
       :vertical="mode === 'vertical'"
       v-model="snackbar">
     {{ msg }}
       <v-btn flat class="blue--text" v-on:click.native="snackbar = false">Close</v-btn>
     </v-snackbar>
      </v-container>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // store to object
        task: {
          name: "",
          description: "",
          project: ""
        },
        options: [
          {
            value: 1,
            text: 'Option 1'
          },
          {
            value: 2,
            text: 'Option 2'
          },
          {
            value: 3,
            text: 'Option 3'
          }
        ],
        submit: false,
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        msg: '',
        alert: false
      }
    },
    methods: {
      submitForm () {
        if (this.task.project == ""  ){
            this.alert = true
            this.msg = "Please select project"
            return false;
        }
        // hide alertmsg
        this.alert = false
        // Post to database
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
              title: this.task.name,
              body: this.task.description,
              id: 1,
              userId: 1
        }).then(response => {
              // Show success
              this.snackbar = true
              this.msg = "Task Successfully added!"
              this.task.name =""
              this.task.description = ""
              this.task.project = ""

        }, response => {
              // error callback
              this.alert = true
              this.msg = response.statusText
        });
      }
    },
    watch: {

    },
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
