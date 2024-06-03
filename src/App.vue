<script setup>
</script>

<template>
  <div class="bg-[#034c46] py-2 px-36">
    <RouterLink to="/map" class="text-white text-sm uppercase text-right">Mapa do site</RouterLink>
  </div>
  <header class="w-full px-36 py-6 flex flex-row justify-between border-b border-gray-100 shadow-sm">
    <RouterLink to="/"><h1 class="font-medium"><span class="bg-[#034c46] text-white">Blog</span>book</h1></RouterLink>

    <nav class="flex flex-row gap-6 items-center list-none">
        <RouterLink to="/about">Conheça a TechBook</RouterLink>

    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
