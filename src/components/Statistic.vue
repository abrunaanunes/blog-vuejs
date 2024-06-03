<script setup>
    import { posts } from '../../database/database.js'
</script>

<template>
    <div>
        <h3><span class="bg-[034c46] text-white"> Novidades </span> de Dia</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">{{ posts?.length ?? 0 }}</p>
            <p>Publicações</p>
          </div>
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">14</p>
            <p>New Posts</p>
          </div>
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">14</p>
            <p>New Posts</p>
          </div>
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[034c46]">14</p>
            <p>New Posts</p>
          </div>
        </div>
      </div>
</template>