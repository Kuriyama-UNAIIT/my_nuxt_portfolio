<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb-4">
        {{ error.statusCode }}
      </h1>
      <h2 class="text-xl text-gray-500 dark:text-gray-400">
        {{ error.statusMessage }}
      </h2>
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true
  }
})
</script>
