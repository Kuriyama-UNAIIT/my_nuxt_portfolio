<template>
  <nav>
    <ul class="flex flex-col md:flex-row h-full items-center">
      <li class="flex h-full">
        <NuxtLink to="/" class="text-2xl md:text-base px-8 py-4 hover-highlight">
          Top
        </NuxtLink>
      </li>
      <li class="flex h-full">
        <NuxtLink to="/about" class="text-2xl md:text-base px-8 py-4 hover-highlight">
          About
        </NuxtLink>
      </li>
      <li class="flex h-full">
        <NuxtLink to="/projects" class="text-2xl md:text-base px-8 py-4 hover-highlight">
          Projects
        </NuxtLink>
      </li>
      <li class="flex h-full">
        <NuxtLink to="/blog" class="text-2xl md:text-base px-8 py-4 hover-highlight">
          Blog
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
