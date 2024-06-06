<script setup>
    import { posts, categories, authors } from '../../database/database.js'
</script>

<template>
    <div>
        <h3><span class="bg-[#034c46] text-white"> Estatísticas </span> do Dia</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-[#f3f8f7] dark:bg-[#0D1117] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">{{ posts?.length ?? 0 }}</p>
            <p>Publicações</p>
          </div>
          <div class="bg-[#f3f8f7] dark:bg-[#0D1117] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">{{ authors?.length ?? 0 }}</p>
            <p>Autores</p>
          </div>
          <div class="bg-[#f3f8f7] dark:bg-[#0D1117] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">{{ categories?.length ?? 0 }}</p>
            <p>Categorias</p>
          </div>
          <div class="bg-[#f3f8f7] dark:bg-[#0D1117] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">11</p>
            <p>Leitores</p>
          </div>
        </div>
      </div>
</template>