<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Header -->
        <div class="text-center mb-4">
          <h1 class="display-4 text-primary">
            <img src="/cat_bat.png" alt="Cat Bat" class="me-2" style="width: 48px; height: 48px;">
            待辦事項管理
          </h1>
          <p class="lead text-muted">管理您的日常任務</p>
        </div>

        <!-- Add Todo Form -->
        <div class="card mb-4">
          <div class="card-body">
            <form @submit.prevent="addNewTodo" class="d-flex gap-2">
              <input 
                v-model="newTodoText" 
                type="text" 
                class="form-control" 
                placeholder="輸入新的待辦事項..." 
                required
              >
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-plus-circle"></i> 新增
              </button>
            </form>
          </div>
        </div>

        <!-- Todo Statistics -->
        <div class="row mb-4">
          <div class="col-md-4">
            <div class="card text-center bg-light">
              <div class="card-body">
                <h5 class="card-title">總計</h5>
                <h2 class="text-primary">{{ todoStore.todosCount }}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center bg-light">
              <div class="card-body">
                <h5 class="card-title">待完成</h5>
                <h2 class="text-warning">{{ todoStore.pendingTodos.length }}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center bg-light">
              <div class="card-body">
                <h5 class="card-title">已完成</h5>
                <h2 class="text-success">{{ todoStore.completedTodos.length }}</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Todo List -->
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="bi bi-list-check"></i> 待辦事項清單
            </h5>
          </div>
          <div class="card-body">
            <div v-if="todoStore.todos.length === 0" class="text-center text-muted py-4">
              <i class="bi bi-clipboard2-x display-1"></i>
              <p class="mt-2">尚無待辦事項</p>
            </div>
            <div v-else class="list-group list-group-flush">
              <div 
                v-for="todo in todoStore.todos" 
                :key="todo.id" 
                class="list-group-item d-flex justify-content-between align-items-center border-0 border-bottom"
              >
                <div class="d-flex align-items-center flex-grow-1">
                  <input 
                    type="checkbox" 
                    :checked="todo.completed" 
                    @change="todoStore.toggleTodo(todo.id)"
                    class="form-check-input me-3"
                  >
                  <span 
                    v-if="editingId !== todo.id"
                    :class="{ 'text-decoration-line-through text-muted': todo.completed }"
                    @dblclick="startEditing(todo.id, todo.text)"
                    class="flex-grow-1 cursor-pointer"
                  >
                    {{ todo.text }}
                  </span>
                  <input 
                    v-else
                    v-model="editingText"
                    @blur="saveEdit(todo.id)"
                    @keyup.enter="saveEdit(todo.id)"
                    @keyup.escape="cancelEdit"
                    class="form-control flex-grow-1"
                    :ref="el => editInput = el"
                  >
                </div>
                <div class="btn-group btn-group-sm">
                  <button 
                    v-if="editingId !== todo.id"
                    @click="startEditing(todo.id, todo.text)"
                    class="btn btn-outline-secondary"
                    :disabled="todo.completed"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button 
                    @click="todoStore.deleteTodo(todo.id)"
                    class="btn btn-outline-danger"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()
const newTodoText = ref('')
const editingId = ref(null)
const editingText = ref('')
const editInput = ref(null)

const addNewTodo = () => {
  todoStore.addTodo(newTodoText.value)
  newTodoText.value = ''
}

const startEditing = async (id, text) => {
  editingId.value = id
  editingText.value = text
  await nextTick()
  if (editInput) {
    editInput.focus()
  }
}

const saveEdit = (id) => {
  if (editingText.value.trim()) {
    todoStore.updateTodo(id, editingText.value)
  }
  cancelEdit()
}

const cancelEdit = () => {
  editingId.value = null
  editingText.value = ''
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.form-check-input:checked {
  background-color: #28a745;
  border-color: #28a745;
}
</style>