import { createRouter } from 'vue-router'
import ToDoList from '../views/ToDoList.vue'
import { createMemoryHistory } from 'vue-router'
import Quizz from '@/views/Quizz.vue'

const routes = [
    { path: '/', component: ToDoList },
    { path: '/quizz', component: Quizz },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router