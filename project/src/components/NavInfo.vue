<template>
  <div class="nav-info">
    <p>Where in the World?</p>
    <div class="toggle-theme" @click="handleClick">
      <MoonIcon :fill="isToggled ? 'white' : 'black'" />
      <span> {{ isDarkMode }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.nav-info {
  transition: all 0.3s ease;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $White;
  box-shadow: 0px 5px 10px 5px $dark-gray;
  p {
    font-size: 24px;
    font-weight: 800;
  }

  .toggle-theme {
    padding: 20px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
      width: 30px;
    }
  }
  &.dark-mode {
    @include dark-mode;
  }
}
</style>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import MoonIcon from "./icons/MoonSharp.vue";
const isDarkMode = "Dark Mode";
const isToggled = ref(false);

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

function handleClick() {
  isToggled.value = !isToggled.value; // Toggle the state
  emit("toggle");
}
</script>
