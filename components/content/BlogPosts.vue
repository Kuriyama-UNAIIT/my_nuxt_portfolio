<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div class=" w-42">date</div>
        <div>title</div>
      </div>
      <ul>
        <li v-for="post in posts" :key="post.path">
          <NuxtLink :to="post.path" class="column hover-highlight">
            <div>{{ post.date }}</div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const { data: allPosts } = await useAsyncData(() => {
  return queryCollection('content')
    .select('path', 'title', 'date')
    .where('path', 'LIKE', '/blog/%')
    .order('date', 'DESC')
    .all()
})

const posts = allPosts.value.slice(0, props.limit || allPosts.length)

</script>

<style scoped>
@import "tailwindcss";

.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
