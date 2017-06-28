// import the components
import createProject from './components/createProject.vue'
import createTask from './components/CreateTask.vue'

export default [
  // routes objects
  { path: '/', component: createProject },
  { path: '/task', component: createTask }
]
