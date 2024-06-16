<script setup>
  import BreadCrumb from '../components/BreadCrumb.vue'
  import Footer from '../components/Footer.vue'

  const map = [
    {
      title: 'Home Page',
      url: '/',
      sub: []
    },
    {
      title: 'Conheça a BlogBook',
      url: '/about',
      sub: [],
    },
    {
      title: 'Entre em contato',
      url: '/contact',
      sub: [],
    },
    {
      title: 'Categorias',
      url: null,
      sub: [
        {
            title: 'Linguagens de Programação',
            url: '/category/linguagens-de-programacao',
            sub: []
        },
        {
            title: 'Inteligência Artificial',
            url: '/category/inteligencia-artificial',
            sub: []
        },
        {
            title: 'DevOps',
            url: '/category/devops',
            sub: []
        },
        {
            title: 'Segurança',
            url: '/category/seguranca',
            sub: []
        },
        {
            title: 'Big Data',
            url: '/category/big-data',
            sub: []
        }
      ]
    }
  ]
</script>

<template>
  <section class="px-12 md:px-36 py-12">
    <BreadCrumb class="mb-8" :pages="[{link: '/map', title: 'Mapa do site'}]"></BreadCrumb>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:col-span-2">
        <h3 class="mb-6"><span class="bg-[#034c46] text-white">Mapa </span> do Site</h3>
        <ul>
          <li class="list-disc" v-for="item, idx in map" :key="idx">
            <RouterLink v-if="item.url && item.sub.length == 0" :to="item.url">{{item.title}}</RouterLink>
            <div v-else>
              {{item.title}}
              <ul class="ml-4">
                <li class="list-disc" v-for="sub, idx in item.sub" :key="idx">
                  <RouterLink :to="sub.url">{{sub.title}}</RouterLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>