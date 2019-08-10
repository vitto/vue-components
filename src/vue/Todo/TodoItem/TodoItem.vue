<template lang="html">
  <li class="todo-item" :class="todoStatus">
    <checkbox-item
      :checked="todo.isComplete"
      class="todo-item__checkbox"
      v-on:click.self="toggleCompletion"
    >
      {{ todo.title }}
    </checkbox-item>
    <button-item
      class="todo-item__delete"
      icon="delete"
      state="small"
      tone="danger"
      v-on:click.self="$emit('delete-todo', todo.id)"
    />
  </li>
</template>

<script src="./TodoItem.js"></script>
<style lang="scss" src="./TodoItem.scss"></style>
