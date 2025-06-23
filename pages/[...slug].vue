<template>
  <article class="max-w-none prose dark:prose-invert
    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
    prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <template v-if="page">
      <h1>{{ page.title }}</h1>
      <hr />
      <div class="grid grid-cols-6 gap-16">
        <div :class="{ 'col-span-6 md:col-span-4': page.toc, 'col-span-6': !page.toc }">
          <ContentRenderer :value="page" />
        </div>
        <div class="hidden md:col-span-2 md:block" v-if="page.toc">
          <aside class="sticky top-8">
            <div class="font-semibold mb-2">
              Table of Contents
            </div>
            <nav>
              <TocLinks :links="page.body.toc.links" :active-id="activeId" />
            </nav>
          </aside>
        </div>
      </div>
    </template>
  </article>
</template>

<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content')
    .where('path', '==', route.path)
    .first()
})

const activeId = ref(null)
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })

  const elements = document.querySelectorAll('h2, h3')

  for (const element of elements) {
    observer.observe(element)
  }

  onBeforeMount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})

try {
  useHead({
    title: page.value.title
  })
} catch (error) {
  showError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

</script>
