<script setup>
  import BreadCrumb from '../components/BreadCrumb.vue'
  import Footer from '../components/Footer.vue'
  import PostCard from '../components/PostCard.vue'
  import Category from '../components/Category.vue'
  import { posts } from '../../database/database.js'
  import { onMounted, ref } from 'vue'

  const props = defineProps({
    query: {
      type: String,
      default: '',
    }
  })

  const searched = ref([])

  onMounted(() => {
    searched.value = posts.filter((item) => (item.title.includes(props.query)))
  })
</script>

<template>
  <section class="px-12 md:px-36 py-12">
    <BreadCrumb class="mb-8" :pages="[{link: '/', title: 'Pesquisando por...'}]"></BreadCrumb>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:col-span-2">
        <h3 class="mb-6"><span class="bg-[#034c46] text-white">Resultados </span> da Busca "{{query}}"</h3>
        <div v-if="searched.length != 0">
          <PostCard  v-for="post in searched" :key="post.id" :postCard="post"></PostCard>
        </div>
        <div v-else class="p-5 bg-gray-200 text-gray-400 font-sm flex items-center gap-3">
            <fa-icon icon="exclamation-circle"></fa-icon> Nenhum resultado encontrado!
        </div>
      </div>

      <div class="col-span-1">
        <Category></Category>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>