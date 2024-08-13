import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isToggled = ref(
    JSON.parse(localStorage.getItem("isToggled") || "false")
  );

  // Watch for changes to isToggled and update localStorage
  watch(isToggled, (newValue) => {
    localStorage.setItem("isToggled", JSON.stringify(newValue));
  });

  // Function to toggle the theme
  function toggleTheme() {
    isToggled.value = !isToggled.value; // Toggle the state
  }

  return { isToggled, toggleTheme }; // Return the state and toggle function
});
