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
              <md-filled-text-field 
                v-model="newTodoText" 
                label="輸入新的待辦事項..."
                class="flex-grow-1"
                required
              ></md-filled-text-field>
              <md-filled-button type="submit">
                <span class="material-icons" slot="icon">add_circle</span>
                新增
              </md-filled-button>
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
                <h2 style="color: #f57c00;">{{ todoStore.pendingTodos.length }}</h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center bg-light">
              <div class="card-body">
                <h5 class="card-title">已完成</h5>
                <h2 style="color: #4caf50;">{{ todoStore.completedTodos.length }}</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Todo List -->
        <div class="card">
          <div class="card-header">
            <h5 class="mb-0" style="display: flex; align-items: center; gap: 8px;">
              <span class="material-icons">checklist</span>
              <span>待辦事項清單</span>
            </h5>
          </div>
          <div class="card-body">
            <div v-if="todoStore.todos.length === 0" class="text-center text-muted py-4">
              <span class="material-icons" style="font-size: 64px;">assignment_late</span>
              <p class="mt-2">尚無待辦事項</p>
            </div>
            <div v-else>
              <div 
                v-for="todo in todoStore.todos" 
                :key="todo.id" 
                class="list-item"
              >
                <div class="d-flex align-items-center flex-grow-1">
                  <md-checkbox
                    :checked="todo.completed" 
                    @change="todoStore.toggleTodo(todo.id)"
                    style="margin-right: 16px;"
                  ></md-checkbox>
                  <span 
                    v-if="editingId !== todo.id"
                    :class="{ 'text-decoration-line-through text-muted': todo.completed }"
                    @dblclick="startEditing(todo.id, todo.text)"
                    class="flex-grow-1 cursor-pointer"
                  >
                    {{ todo.text }}
                  </span>
                  <md-filled-text-field
                    v-else
                    v-model="editingText"
                    @blur="saveEdit(todo.id)"
                    @keyup.enter="saveEdit(todo.id)"
                    @keyup.escape="cancelEdit"
                    class="flex-grow-1"
                    :ref="el => editInput = el"
                  ></md-filled-text-field>
                </div>
                <div class="btn-group">
                  <md-outlined-button 
                    v-if="editingId !== todo.id"
                    @click="startEditing(todo.id, todo.text)"
                    :disabled="todo.completed"
                  >
                    <span class="material-icons" slot="icon">edit</span>
                  </md-outlined-button>
                  <md-outlined-button 
                    @click="todoStore.deleteTodo(todo.id)"
                    style="--md-outlined-button-container-color: #ffebee; --md-outlined-button-label-text-color: #c62828;"
                  >
                    <span class="material-icons" slot="icon">delete</span>
                  </md-outlined-button>
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

.display-4 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

h5 {
  margin: 0;
  color: inherit;
}

md-filled-text-field {
  width: 100%;
}

md-filled-button, md-outlined-button {
  --md-filled-button-container-color: var(--md-sys-color-primary);
  --md-filled-button-label-text-color: var(--md-sys-color-on-primary);
}
</style>