<script setup>
  import { ref } from 'vue'
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  import PostCard from './PostCard.vue'
  import Author from './Author.vue'
</script>

<template>
  <Header></Header>

  <section class="bg-[#f3f8f7] px-36 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="col-span-1 md:col-span-2">
      <h3 class="text-2xl font-medium mb-10"><span class="bg-[#2faaa1] text-white"> Featured </span> This Month</h3>
      <div class="grid grid-cols-1 gap-8">
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </div>

    <div class="col-span-1">
      <h3><span class="bg-[#2faaa1] text-white"> Popular </span> Posted</h3>
      <div class="grid grid-cols-1 gap-8">
        <PostCard :small="true"></PostCard>
        <PostCard :small="true"></PostCard>
        <PostCard :small="true"></PostCard>
      </div>
    </div>
  </section>

  <section class="px-36 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="col-span-1 md:col-span-2">
      <h3><span class="bg-[#2faaa1] text-white"> Featured </span> This Month</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PostCard :column="true"></PostCard>
        <PostCard :column="true"></PostCard>
        <PostCard :column="true"></PostCard>
        <PostCard :column="true"></PostCard>
      </div>
    </div>

    <!-- Top Authors -->
    <div class="col-span-1 flex flex-col gap-24">
      <div>
        <h3><span class="bg-[#2faaa1] text-white"> Top </span> Authors</h3>
        <div class="grid grid-cols-1 gap-8">
          <Author></Author>
          <Author></Author>
          <Author></Author>
        </div>
      </div>

      <!-- Categories -->
      <div>
        <h3><span class="bg-[#2faaa1] text-white">Categories</span></h3>
        <ul class="list-none divide-opacity-55 divide-y">
          <li class="flex flex-row justify-between text-lg text-[#1C1C1C] py-2">Lifestyle <span>09</span></li>
          <li class="flex flex-row justify-between text-lg text-[#1C1C1C] py-2">Lifestyle <span>09</span></li>
          <li class="flex flex-row justify-between text-lg text-[#1C1C1C] py-2">Lifestyle <span>09</span></li>
          <li class="flex flex-row justify-between text-lg text-[#1C1C1C] py-2">Lifestyle <span>09</span></li>
          <li class="flex flex-row justify-between text-lg text-[#1C1C1C] py-2">Lifestyle <span>09</span></li>
        </ul>
      </div>

      <!-- Today's update -->
      <div>
        <h3><span class="bg-[#2faaa1] text-white"> Today's </span> Update</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[#2faaa1]">14</p>
            <p>New Posts</p>
          </div>
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[#2faaa1]">14</p>
            <p>New Posts</p>
          </div>
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[#2faaa1]">14</p>
            <p>New Posts</p>
          </div>
          <div class="bg-[#f3f8f7] rounded-md p-8 flex flex-col justify-center items-center gap-2">
            <p class="text-4xl font-medium text-[#2faaa1]">14</p>
            <p>New Posts</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <Footer></Footer>
</template>