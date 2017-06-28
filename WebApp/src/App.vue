<template>
  <v-app>
      <v-navigation-drawer></v-navigation-drawer>
      <v-toolbar></v-toolbar>
      <main>
         <v-container fluid>
           <router-view></router-view>
         </v-container>
      </main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
 // import templates
 import createProject from './components/CreateProject.vue'
 import createTask from './components/CreateTask.vue'

  export default {
    // register components
    components: {
      'create-project': createProject,
      'create-task': createTask
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
