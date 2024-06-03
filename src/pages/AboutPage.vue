<script setup>
  import { ref } from 'vue'
  import Footer from '../components/Footer.vue'
  import PostCard from '../components/PostCard.vue'
  import Author from '../components/Author.vue'
  import BreadCrumb from '../components/BreadCrumb.vue'
</script>

<template>
  <section class="px-36 py-12">
    <BreadCrumb class="mb-8" :pages="[{link: '/about', title: 'Conheça a TechBook'}]"></BreadCrumb>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:col-span-2">
        <h3><span class="bg-[#034c46] text-white">Conheça </span> nossa história</h3>
        <p>Nosso blog é dedicado a profissionais, entusiastas e curiosos pelo mundo do desenvolvimento de software. Aqui, exploramos as últimas tendências, ferramentas e melhores práticas que moldam o futuro da tecnologia.</p>
      </div>
    </div>
  </section>

  <Footer></Footer>
</template>