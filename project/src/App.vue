<template>
  <div class="main-container" @toggle="toggleTheme"
    :class="{ 'dark-mode': !isToggled, 'light-mode': isToggled }">
    <NavInfo @toggle="toggleTheme"
      :class="{ 'dark-mode': !isToggled, 'light-mode': isToggled }" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import NavInfo from './components/NavInfo.vue'

let isToggled = ref(true)
function toggleTheme() {
  isToggled.value = !isToggled.value
}
</script>

<style lang="scss">
* {
  font-family: $main-font;
}
.main-container {
  height: 100vh;
  &.dark-mode,
  &.dark-mode main > *,
  &.dark-mode main > * > *,
  &.dark-mode main > * > * > input,
  &.dark-mode .country-container,
  &.dark-mode .countries .country .details,
  &.dark-mode .go-back {
    @include dark-mode-body;
  }
  &.dark-mode .go-back,
  &.dark-mode .country-details .borders li
  {
    box-shadow: 0px 0px 15px 3px $very-dark-blue-text !important;
  }
  &.dark-mode main>*>*>input[type="search"]::placeholder {
    color: $White;
    opacity: 0.7;
  }
}
.main-container {
  height: 100vh;
  &,
  & main > *,
  & .countries .country .details {
    transition: all 0.1s ease-out;
  }
}

</style>