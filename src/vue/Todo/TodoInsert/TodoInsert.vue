<template>
  <form @submit="addItem" class="todo-insert">
    <input-item
      icon="create"
      name="title"
      placeholder="Add a ToVue item..."
      v-model="title"
    />
    <button-item tone="confirm" class="todo-insert__action">
      Aggiungi
    </button-item>
  </form>
</template>

<script src="./TodoInsert.js"></script>
<style lang="scss" scoped src="./TodoInsert.scss"></style>
