<script setup>
    defineProps(['show', 'text'])
</script>

<template>
    <span v-if="show" class="w-fit rounded-md p-1 bg-red-100 dark:bg-[#161B22] text-xs text-red-400 text-left block mt-2">{{text}}<br></span>
</template>
