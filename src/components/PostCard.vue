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
        }
    })
</script>

<template>
    <div class="w-full bg-white grid grid-cols-3 gap-6 p-4 rounded-md" :class="{'!grid-cols-1 !p-0': column}">
        <div class="col-span-1 bg-gray-200 rounded-md w-full h-full" :class="{'!h-64': column}"></div>
        <div class="col-span-2 flex flex-col gap-4 justify-between" :class="{'!gap-2': small}">
            <span class="w-fit bg-[#dff1f0] text-sm text-[#222222] px-2 py-1 rounded-sm">Lifestyle</span>
            <h3 class="text-4xl text-gray-900" :class="{'!text-lg !leading-6 !mb-1': small}">Set video playback speed with javascript</h3>
            <div class="w-fit flex flex-row text-md text-[#777777] divide-x-2 divide-gray-200" :class="{'hidden': small}">
                <span class="px-2">Jesica koli</span>
                <span class="px-2">02 december 2022</span>
                <span class="px-2">3 min. to read</span>
            </div>
            <p class="text-lg text-[#555555]" :class="{'hidden': small}">Did you come here for something in particular or just general Riker-bashing</p>
        </div>
    </div>
</template>