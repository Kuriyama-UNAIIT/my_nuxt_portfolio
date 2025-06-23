<template>
  <BlogPosts v-slot="{posts}" :limit="props.limit">
    <div v-for="post in posts" :key="post.path">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>
