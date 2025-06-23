<template>
  <div class="flex flex-col min-h-lvh">
    <header class="border-b-1">
      <div class="container mx-auto max-w-4xl">
        <HeaderContent />
      </div>
    </header>
    <main>
      <div class="container mx-auto max-w-4xl p-8">
        <slot></slot>
      </div>
    </main>
    <footer class="border-t-1 mt-auto">
      <div class="container mx-auto max-w-4xl">
        <FooterContent />
      </div>
    </footer>
  </div>
</template>
