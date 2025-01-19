import { createRouter } from 'vue-router'
import ToDoList from '../views/ToDoList.vue'
import { createMemoryHistory } from 'vue-router'
import Quiz from '@/views/Quiz.vue'

const routes = [
    { path: '/', component: ToDoList },
    { path: '/quiz', component: Quiz },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router