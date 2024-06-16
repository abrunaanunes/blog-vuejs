<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        small: {
            type: Boolean,
            default: false
        },
        column: {
            type: Boolean,
            default: false
        },
        postCard: {
            type: Object,
            default: {}
        }
    })
</script>

<template>
    <div class="w-full bg-white grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-md cursor-pointer dark:bg-[#161B22]" :class="{'grid !grid-cols-1 !p-5 !pr-0 border border-gray-200 dark:border-gray-600': column}" @click="$router.push({path: '/post/' + postCard?.slug})">
        <img v-if="!!postCard?.cover_image" :src="postCard.cover_image" class="col-span-1 rounded-md w-full h-full object-cover" :class="{'!h-64': column}"/>
        <div v-else class="col-span-1 bg-gray-200 rounded-md w-full h-full" :class="{'!h-64': column}"></div>
        <div class="col-span-2 flex flex-col gap-4 justify-between" :class="{'!gap-2': small}">
            <span class="w-fit bg-[#dff1f0] text-sm text-[#222222] px-2 py-1 rounded-sm">{{postCard?.category?.name ?? 'News'}}</span>
            <h1 :class="{'!text-lg !leading-6 !mb-1': small}">{{postCard?.title}}</h1>
            <div class="w-fit hidden md:flex md:flex-row text-md text-[#777777] md:divide-x-2 md:divide-gray-200 gap-2" :class="{'hidden': small}">
                <span>{{ postCard?.author?.name }}</span>
                <span>02 december 2022</span>
                <span :class="{'hidden': column}">3 min. to read</span>
            </div>
            <p class="text-base lg:text-lg text-[#555555]" :class="{'hidden': small}">{{ postCard?.description }}</p>
        </div>
    </div>
</template>