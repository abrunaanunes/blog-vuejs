<script setup>
  import { reactive } from "vue"
  import { useRouter } from 'vue-router'
  import { useDark, useToggle } from "@vueuse/core";

  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const router = useRouter()

  const form = reactive({
    query: ''
  })

  const submit = () => {
    router.push({ path: `/search/${form.query}` })
  }
</script>


<template>
  <div class="bg-[#034c46] py-2 px-36 flex flex-row items-center justify-end gap-6">
    <a href="mailto:contato@blogbook.com.br" class="text-white text-sm uppercase text-right cursor-pointer hover:opacity-45 flex flex-row gap-2 items-center">
      <fa-icon icon="envelope" class="text-md text-white"></fa-icon>
      contato@blogbook.com.br
    </a>
    <RouterLink to="/map" class="text-white text-sm uppercase text-right flex flex-row gap-2 items-center">
      <fa-icon icon="map" class="text-md text-white"></fa-icon>
      Mapa do site
    </RouterLink>
  </div>
  <header class="w-full px-36 py-6 flex flex-row justify-between border-b border-gray-100 shadow-sm dark:border-none dark:bg-[#161B22] dark:text-gray-400">
    <RouterLink to="/"><h1 class="font-medium"><span class="bg-[#034c46] text-white">Blog</span>book</h1></RouterLink>

    <form class="flex flex-items justify-center items-center" @submit.prevent="submit">
      <input class="border border-gray-200 p-2 dakr:bg-[#0D1117]" type="text" placeholder="Pesquisar por artigos..." v-model="form.query">
      <button class="bg-[#034c46] text-white h-full p-2 uppercase font-medium" type="submit">Buscar</button>
    </form>

    <nav class="flex flex-row gap-6 items-center list-none">
        <RouterLink to="/about">Conheça a BlogBook</RouterLink>
    </nav>

    <button @click="toggleDark()">
      <fa-icon icon="moon" class="text-2xl text-gray-600 block dark:hidden"></fa-icon>
      <fa-icon icon="sun" class="text-2xl text-white hidden dark:block"></fa-icon>
    </button>
  </header>
  <main>
    <RouterView />
  </main>
</template>
