<template lang="html">
  <div
    class="modal"
    :class="[checkActivation, checkDesktopMode, checkPosition]"
  >
    <icon-item
      @click.native="closeModal"
      class="modal__close"
      name="close"
    />
    <div class="modal__window">
      <header v-if="title" class="modal__header">
        <H-3 class="modal__title">
          {{ title }}
        </H-3>
        <icon-item
          @click.native="closeModal"
          class="modal__close-inside"
          name="close"
        />
      </header>
      <div class="modal__contents" :class="[checkTitle, checkPadding]">
        <icon-item
          @click.native="closeModal"
          class="modal__close-inside"
          name="close"
          v-if="!title"
        />
        <slot/>
      </div>
      <footer v-if="hasFooter" class="modal__footer grid">
        <button-item tone="cancel" @click="closeModal">
          Cancel
        </button-item>
        <button-item tone="confirm" @click="confirmModal">
          Confirm
        </button-item>
      </footer>
    </div>
  </div>
</template>

<script src="./ModalItem.js"></script>
<style lang="scss" src="./ModalItem.scss"></style>
