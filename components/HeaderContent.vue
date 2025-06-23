<template>
  <div class="flex justify-between items-start md:items-stretch">
      <NuxtLink to="/" class="hidden md:block text-xl font-semibold p-4 hover-highlight">
        Akito Kuriyama
      </NuxtLink>
      <HeaderMenu />
      <ClientOnly>
        <ColorModeSwitch />
      </ClientOnly>
  </div>
</template>
