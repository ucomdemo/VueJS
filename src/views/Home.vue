<template>
  <div class="container mt-4">
    <div class="content-wrapper">
      <!-- Header -->
      <div class="text-center mb-4">
        <h1 class="page-title">
          <img src="/cat_bat.png" alt="Cat Bat" class="title-icon">
          待辦事項管理
        </h1>
        <p class="page-subtitle">管理您的日常任務</p>
      </div>

      <!-- Add Todo Form -->
      <div class="card mb-4">
        <div class="card-body">
          <form @submit.prevent="addNewTodo" class="add-form">
            <md-filled-text-field 
              v-model="newTodoText" 
              label="輸入新的待辦事項..."
              required
              class="todo-input"
            ></md-filled-text-field>
            <md-filled-button type="submit">
              <span class="material-icons" slot="icon">add_circle</span>
              新增
            </md-filled-button>
          </form>
        </div>
      </div>

      <!-- Todo Statistics -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-body">
            <h5 class="stat-title">總計</h5>
            <h2 class="stat-value stat-primary">{{ todoStore.todosCount }}</h2>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-body">
            <h5 class="stat-title">待完成</h5>
            <h2 class="stat-value stat-warning">{{ todoStore.pendingTodos.length }}</h2>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-body">
            <h5 class="stat-title">已完成</h5>
            <h2 class="stat-value stat-success">{{ todoStore.completedTodos.length }}</h2>
          </div>
        </div>
      </div>

      <!-- Todo List -->
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">
            <span class="material-icons">checklist</span> 待辦事項清單
          </h5>
        </div>
        <div class="card-body">
          <div v-if="todoStore.todos.length === 0" class="empty-state">
            <span class="material-icons empty-icon">event_note</span>
            <p>尚無待辦事項</p>
          </div>
          <div v-else class="todo-list">
            <div 
              v-for="todo in todoStore.todos" 
              :key="todo.id" 
              class="todo-item"
            >
              <div class="todo-content">
                <md-checkbox 
                  :checked="todo.completed" 
                  @change="todoStore.toggleTodo(todo.id)"
                ></md-checkbox>
                <span 
                  v-if="editingId !== todo.id"
                  :class="{ 'text-decoration-line-through text-muted': todo.completed }"
                  @dblclick="startEditing(todo.id, todo.text)"
                  class="todo-text cursor-pointer"
                >
                  {{ todo.text }}
                </span>
                <md-filled-text-field 
                  v-else
                  v-model="editingText"
                  @blur="saveEdit(todo.id)"
                  @keyup.enter="saveEdit(todo.id)"
                  @keyup.escape="cancelEdit"
                  class="todo-edit-input"
                  :ref="el => editInput = el"
                ></md-filled-text-field>
              </div>
              <div class="todo-actions">
                <md-icon-button 
                  v-if="editingId !== todo.id"
                  @click="startEditing(todo.id, todo.text)"
                  :disabled="todo.completed"
                >
                  <span class="material-icons">edit</span>
                </md-icon-button>
                <md-icon-button 
                  @click="todoStore.deleteTodo(todo.id)"
                >
                  <span class="material-icons">delete</span>
                </md-icon-button>
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
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2.5rem;
  color: #1976d2;
  margin: 0 0 0.5rem 0;
}

.title-icon {
  width: 48px;
  height: 48px;
}

.page-subtitle {
  color: #666;
  font-size: 1.125rem;
  margin: 0;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-body {
  padding: 1.5rem;
}

.add-form {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.todo-input {
  flex: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.stat-title {
  font-size: 1rem;
  color: #666;
  margin: 0 0 0.5rem 0;
}

.stat-value {
  font-size: 2rem;
  margin: 0;
}

.stat-primary { color: #1976d2; }
.stat-warning { color: #f57c00; }
.stat-success { color: #388e3c; }

.card-header {
  background: #f5f5f5;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.card-title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: #999;
}

.empty-icon {
  font-size: 4rem;
  color: #ccc;
}

.empty-state p {
  margin: 1rem 0 0 0;
}

.todo-list {
  display: flex;
  flex-direction: column;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item:hover {
  background-color: #f8f9fa;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.todo-text {
  flex: 1;
}

.text-muted {
  color: #999;
}

.todo-edit-input {
  flex: 1;
}

.todo-actions {
  display: flex;
  gap: 0.25rem;
}

.cursor-pointer {
  cursor: pointer;
}
</style>