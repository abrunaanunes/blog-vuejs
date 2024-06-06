<script setup>
  import { ref } from 'vue'
  import Footer from '../components/Footer.vue'
  import PostCard from '../components/PostCard.vue'
  import Author from '../components/Author.vue'
  import Statistic from '../components/Statistic.vue'
  import Category from '../components/Category.vue'
  import { posts, authors } from '../../database/database.js'
</script>

<template>
  <section class="bg-[#f3f8f7] px-36 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="col-span-1 md:col-span-2">
      <h3><span class="bg-[#034c46] text-white"> Novidades </span> do Mês</h3>
      <div class="grid grid-cols-1 gap-8">
        <PostCard v-for="post in posts.filter((item) => (item.is_featured)).slice(0,2)" :key="post.id" :postCard="post"></PostCard>
      </div>
    </div>

    <div class="col-span-1">
      <h3><span class="bg-[#034c46] text-white"> Populares </span> da Semana</h3>
      <div class="grid grid-cols-1 gap-8">
        <PostCard v-for="post in posts.slice(4,6)" :key="post.id" :small="true" :postCard="post"></PostCard>
      </div>
    </div>
  </section>

  <section class="px-36 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="col-span-1 md:col-span-2">
      <h3><span class="bg-[#034c46] text-white"> Novidades </span> do Mês</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PostCard v-for="post in posts.slice(8,14)" :key="post.id" :column="true" :postCard="post"></PostCard>
      </div>
    </div>

    <!-- Top Authors -->
    <div class="col-span-1 flex flex-col gap-24">
      <div>
        <h3><span class="bg-[#034c46] text-white"> Top </span> Authors</h3>
        <div class="grid grid-cols-1 gap-8">
          <Author v-for="author in authors" :key="author.id" :author="author"></Author>
        </div>
      </div>

      <!-- Categories -->
      <div>
        <Category></Category>
      </div>

      <!-- Today's update -->
      <Statistic></Statistic>

    </div>
  </section>

  <Footer></Footer>
</template>