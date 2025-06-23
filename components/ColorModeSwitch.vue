<template>
  <button @click="toggleMode">
    <div class="flex justify-center items-center rounded-2xl p-2 hover-highlight">
      <span class="material-symbols-outlined">
        {{ iconId }}
      </span>
    </div>
  </button>
</template>

<script setup>
const colorMode = useColorMode()
const iconId = computed(() => {
  if (colorMode.value === 'dark') {
    return 'dark_mode'
  } else {
    return 'light_mode'
  }
})
const toggleMode = () => {
  if (colorMode.value === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>

<style scoped>
@import "tailwindcss";

.material-symbols-outlined {
  @apply text-4xl md:text-2xl;
}
</style>