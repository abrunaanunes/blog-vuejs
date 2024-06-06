<script setup>
    import { categories } from '../../database/database.js'
</script>

<template>
    <h3><span class="bg-[#034c46] text-white">Categorias</span></h3>
    <ul class="list-none divide-opacity-45 divide-y">
        <li v-for="category in categories" :key="category.id" class="flex flex-row justify-between text-lg text-[#1C1C1C] dark:text-gray-600 py-2">{{category.name}} <span>09</span></li>
    </ul>
</template>