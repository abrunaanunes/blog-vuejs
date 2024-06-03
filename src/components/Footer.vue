<script setup>
    import { posts } from '../../database/database.js'
</script>

<template>
    <header class="w-full bg-[#f3f8f7] px-36 py-24 mt-12 grid grid-cols-1 md:grid-cols-6 gap-24">
        <div class="col-span-2">
            <h1 class="font-medium mb-6"><span class="bg-[#034c46] text-white">Blog</span>book</h1>

            <p class="text-[#555555] flex flex-col gap-2 list-none">Fique por dentro das novidades da área de programação e tecnologia.</p>
        </div>
        <div class="col-span-2">
            <p class="text-lg text-[#222222] font-medium mb-6">Categorias</p>

            <ul class="text-[#555555] flex flex-col gap-2 list-none">
                <li v-for="category in posts.reduce((categories, post) => categories.concat(post.category), []).slice(0,3)" >
                    <RouterLink :to="category.slug">{{category.name}}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="col-span-1">
            <p class="text-lg text-[#222222] font-medium mb-6 whitespace-nowrap">Acesso Rápido</p>

            <ul class="text-[#555555] flex flex-col gap-2 list-none">
                <li class="whitespace-nowrap"><RouterLink to="/faq">FAQ</RouterLink></li>
                <li class="whitespace-nowrap"><RouterLink to="/suport">Suporte</RouterLink></li>
                <li class="whitespace-nowrap"><RouterLink to="/contact">Entre em contato</RouterLink></li>
            </ul>
        </div>
    </header>
</template>