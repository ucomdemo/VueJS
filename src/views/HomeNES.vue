<template>
  <div class="nes-container">
    <div class="nes-content">
      <!-- Header -->
      <div class="header-section">
        <h1 class="title-with-icon">
          <img src="/cat_bat.png" alt="Cat Bat" style="width: 48px; height: 48px; image-rendering: pixelated;">
          <span>待辦事項管理</span>
        </h1>
        <p class="nes-text is-primary">管理您的日常任務 - NES Theme</p>
      </div>

      <!-- Add Todo Form -->
      <div class="nes-container is-rounded with-title">
        <p class="title">新增待辦事項</p>
        <form @submit.prevent="addNewTodo" class="add-todo-form">
          <div class="nes-field">
            <input 
              v-model="newTodoText" 
              type="text" 
              class="nes-input" 
              placeholder="輸入新的待辦事項..." 
              required
            >
          </div>
          <button type="submit" class="nes-btn is-primary">新增</button>
        </form>
      </div>

      <!-- Todo Statistics -->
      <div class="stats-row">
        <div class="nes-container is-rounded with-title stat-card">
          <p class="title">總計</p>
          <p class="stat-number is-primary">{{ todoStore.todosCount }}</p>
        </div>
        <div class="nes-container is-rounded with-title stat-card">
          <p class="title">待完成</p>
          <p class="stat-number is-warning">{{ todoStore.pendingTodos.length }}</p>
        </div>
        <div class="nes-container is-rounded with-title stat-card">
          <p class="title">已完成</p>
          <p class="stat-number is-success">{{ todoStore.completedTodos.length }}</p>
        </div>
      </div>

      <!-- Todo List -->
      <div class="nes-container is-rounded with-title">
        <p class="title">待辦事項清單</p>
        <div v-if="todoStore.todos.length === 0" class="empty-state">
          <p class="nes-text is-disabled">尚無待辦事項</p>
        </div>
        <div v-else class="todo-list">
          <div 
            v-for="todo in todoStore.todos" 
            :key="todo.id" 
            class="todo-item"
            :class="{ 'completed': todo.completed }"
          >
            <label class="todo-checkbox">
              <input 
                type="checkbox" 
                :checked="todo.completed" 
                @change="todoStore.toggleTodo(todo.id)"
                class="nes-checkbox"
              >
              <span v-if="editingId !== todo.id">{{ todo.text }}</span>
            </label>
            
            <div v-if="editingId === todo.id" class="edit-form">
              <div class="nes-field">
                <input 
                  v-model="editingText"
                  @blur="saveEdit(todo.id)"
                  @keyup.enter="saveEdit(todo.id)"
                  @keyup.escape="cancelEdit"
                  class="nes-input is-small"
                  :ref="el => editInput = el"
                >
              </div>
            </div>
            
            <div class="todo-actions">
              <button 
                v-if="editingId !== todo.id"
                @click="startEditing(todo.id, todo.text)"
                class="nes-btn is-small"
                :disabled="todo.completed"
              >
                編輯
              </button>
              <button 
                @click="todoStore.deleteTodo(todo.id)"
                class="nes-btn is-small is-error"
              >
                刪除
              </button>
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
  if (editInput.value) {
    editInput.value.focus()
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
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.nes-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Press Start 2P', cursive;
}

.nes-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header-section {
  text-align: center;
  margin-bottom: 1rem;
}

.title-with-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.add-todo-form {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
}

.add-todo-form .nes-field {
  flex: 1;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  margin: 1rem 0 0.5rem 0;
}

.stat-number.is-primary {
  color: #209cee;
}

.stat-number.is-warning {
  color: #f7d51d;
}

.stat-number.is-success {
  color: #92cc41;
}

.empty-state {
  text-align: center;
  padding: 2rem;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 4px solid #212529;
  border-radius: 0;
  background: white;
}

.todo-item.completed {
  opacity: 0.6;
  background: #f0f0f0;
}

.todo-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  cursor: pointer;
}

.todo-item.completed .todo-checkbox span {
  text-decoration: line-through;
  color: #999;
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
}

.edit-form {
  flex: 1;
}

.edit-form .nes-field {
  margin: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .nes-container {
    padding: 1rem;
  }
  
  .title-with-icon {
    font-size: 1rem;
    flex-direction: column;
  }
  
  .add-todo-form {
    flex-direction: column;
  }
  
  .stats-row {
    grid-template-columns: 1fr;
  }
  
  .todo-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .todo-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
