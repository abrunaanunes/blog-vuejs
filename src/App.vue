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
  <div class="bg-[#034c46] px-6 lg:px-36 py-2 flex flex-row items-center justify-end gap-6">
    <a href="mailto:contato@blogbook.com.br" class="text-white text-sm uppercase text-right cursor-pointer hover:opacity-45 flex flex-row gap-2 items-center">
      <fa-icon icon="envelope" class="text-md text-white"></fa-icon>
      <p class="hidden md:block">contato@blogbook.com.br</p>
    </a>
    <RouterLink to="/map" class="text-white text-sm uppercase text-right flex flex-row gap-2 items-center">
      <fa-icon icon="map" class="text-md text-white"></fa-icon>
      <p class="hidden md:block">Mapa do site</p>
    </RouterLink>
  </div>
  <header class="w-full px-6 lg:px-36 py-6 flex flex-row justify-between border-b border-gray-100 shadow-sm dark:border-none dark:bg-[#161B22] dark:text-gray-400">
    <RouterLink to="/"><h1 class="font-medium"><span class="bg-[#034c46] text-white">Blog</span>book</h1></RouterLink>

    <form class="max-w-md mx-auto" @submit.prevent="submit">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
      <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="Pesquisar..." required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Buscar</button>
      </div>
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
