<template>
  <section class="todo-list">
    <h-1 class="todo-list__title">To vue list</h-1>
    <ul class="todo-list__list">
      <todo-item :todo="todo" :key="todo.id" v-for="todo in todos"></todo-item>
    </ul>
  </section>
</template>

<script src="./TodoList.js"></script>
<style lang="scss" scoped src="./TodoList.scss"></style>
