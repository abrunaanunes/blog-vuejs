<script setup>
  import BreadCrumb from '../components/BreadCrumb.vue'
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
    }
  ]
</script>

<template>
  <section class="px-36 py-12">
    <BreadCrumb class="mb-8" :pages="[{link: '/map', title: 'Mapa do site'}]"></BreadCrumb>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-1 md:col-span-2">
        <h3><span class="bg-[#034c46] text-white">Mapa </span> do Site</h3>
        <div class="mt-6">
          <ul>
            <li v-for="item, idx in map" :key="idx">
              <RouterLink v-if="item.url && item.sub.length == 0" :to="item.url">{{item.title}}</RouterLink>
              <div v-else>
                {{item.title}}
                <ul>
                  <li v-for="sub, idx in item.sub" :key="idx">
                    <RouterLink v-if="item.url && item.sub.length == 0" :to="item.url">{{item.title}}</RouterLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>