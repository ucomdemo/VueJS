import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // State
  const todos = ref([
    {
      id: 1,
      text: '學習 Vue.js',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 2,
      text: '建立待辦事項應用',
      completed: true,
      createdAt: new Date()
    }
  ])

  const nextId = ref(3)

  // Actions
  const addTodo = (text) => {
    if (text.trim()) {
      todos.value.push({
        id: nextId.value++,
        text: text.trim(),
        completed: false,
        createdAt: new Date()
      })
    }
  }

  const deleteTodo = (id) => {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
    }
  }

  const toggleTodo = (id) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  const updateTodo = (id, newText) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo && newText.trim()) {
      todo.text = newText.trim()
    }
  }

  // Getters
  const completedTodos = computed(() => 
    todos.value.filter(todo => todo.completed)
  )

  const pendingTodos = computed(() => 
    todos.value.filter(todo => !todo.completed)
  )

  const todosCount = computed(() => todos.value.length)

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    completedTodos,
    pendingTodos,
    todosCount
  }
})