<template>
  <section class="todo-list">
    <h-1 class="todo-list__title">To vue list</h-1>
    <ul class="todo-list__list">
      <todo-item
        :key="todo.id"
        :todo="todo"
        v-bind:todos="todos"
        v-for="todo in todos"
        v-on:delete-todo="deleteItem"
      />
    </ul>
  </section>
</template>

<script src="./TodoList.js"></script>
<style lang="scss" scoped src="./TodoList.scss"></style>
