<script setup>
    import { onMounted, ref } from 'vue'
    import Footer from '../components/Footer.vue'
    import Author from '../components/Author.vue'
    import BreadCrumb from '../components/BreadCrumb.vue'
    import { posts } from '../../database/database.js'

    const props = defineProps({
    slug: {
        type: String,
        required: true
    }
    })

    const post = ref(null)

    onMounted(() => {
        post.value = posts.find((item) => (item.slug == props.slug))
    })
</script>

<template>
  <section class="px-36 py-12">
    <BreadCrumb class="mb-8" :pages="[{link: post?.category?.slug, title: post?.category?.name}, {link: '/about', title: post?.title}]"></BreadCrumb>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:col-span-2">
       <div class="mb-6">
         <h3>{{ post?.title }}</h3>
          <p class="italic text-gray-600 mb-4">{{ post?.description }}</p>

          <img class="w-full h-48 object-cover rounded-md" :src="post?.cover_image">

       </div>
        <div>{{ post?.content }}</div>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>