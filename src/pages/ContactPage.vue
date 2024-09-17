<script setup>
  import { computed, reactive } from 'vue'
  import { vMaska } from "maska"
  import BreadCrumb from '../components/BreadCrumb.vue'
  import Footer from '../components/Footer.vue'
  import { required, requiredIf, helpers, maxLength, minLength } from '@vuelidate/validators'
	import useVuelidate from '@vuelidate/core'
  import ValidationMessage from "../components/ValidationMessage.vue"

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

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    content: '',
  })

  const phoneRegex = helpers.regex(/\([1-9]\d\)\s9?\d{4}-\d{4}/, /\d/) // Regex para fone fixo ou celular
  const rules = computed(() => {
    return {
      name: { required: helpers.withMessage('Preencha o campo', required), maxLengthValue: helpers.withMessage('O campo não pode ultrapassar 50 caracteres', maxLength(50)), minLengthValue: helpers.withMessage('O campo não atingiu o mínimo de caracteres', minLength(4)) },
      email: { required: helpers.withMessage('Preencha o campo', required), maxLengthValue: helpers.withMessage('O campo não pode ultrapassar 50 caracteres', maxLength(50)), minLengthValue: helpers.withMessage('O campo não atingiu o mínimo de caracteres', minLength(4)) },
      phone: { phoneRegex: helpers.withMessage('Preencha o campo corretamente', phoneRegex) },
      subject: { required: helpers.withMessage('Preencha o campo', required), maxLengthValue: helpers.withMessage('O campo não pode ultrapassar 50 caracteres', maxLength(50)), minLengthValue: helpers.withMessage('O campo não atingiu o mínimo de caracteres', minLength(4)) },
      content: { required: helpers.withMessage('Preencha o campo', required), maxLengthValue: helpers.withMessage('O campo não pode ultrapassar 50 caracteres', maxLength(50)), minLengthValue: helpers.withMessage('O campo não atingiu o mínimo de caracteres', minLength(4)) },
    }
  })

  const v$ = useVuelidate(rules, form, { $autoDirty : true })
  const submit = () => {
    if(!v$.$invalid) {
      form.name = form.email = form.phone = form.subject = form.content = ''
      alert('Formulário enviado com sucesso!')
    }
  }

</script>

<template>
  <section class="px-6 lg:px-36 py-12">
    <BreadCrumb class="mb-8" :pages="[{link: '/contact', title: 'Entre em contato'}]"></BreadCrumb>
    <h3><span class="bg-[#034c46] text-white">Entre </span> em Contato</h3>
  </section>

  <section class="bg-[#f3f8f7] px-72 py-32">
    <div class="mb-12">
      <p class="text-4xl md:text-6xl font-medium text-center mb-6">Vamos <span class="text-[#034c46]">nos conectar!</span></p>
      <p class="text-center">Para perguntas gerais, complete o formulário abaixo e logo entraremos em contato.</p>
    </div>

    <form @submit.prevent="submit" class="grid grid-cols-1 gap-6">
      <div class="col-span-1 flex flex-col gap-1">
        <label class="">Nome *</label>
        <input autocomplete="off" autofocus class="border border-[#85aaa6] rounded-md p-2 text-gray-800" type="text" v-model="form.name"/>
        <validation-message :show="v$.name.$invalid" v-for="error of v$.name.$errors" :key="error.$uid" :text="error.$message" />
      </div>

      <div class="col-span-1 flex flex-col gap-1">
        <label class="">E-mail *</label>
        <input autocomplete="off" autofocus class="border border-[#85aaa6] rounded-md p-2 text-gray-800" type="email" v-model="form.email"/>
        <validation-message :show="v$.email.$invalid" v-for="error of v$.email.$errors" :key="error.$uid" :text="error.$message" />
      </div>

      <div class="col-span-1 flex flex-col gap-1">
        <label class="">Celular </label>
        <input autocomplete="off" autofocus class="border border-[#85aaa6] rounded-md p-2 text-gray-800" type="text" v-model="form.phone" v-maska data-maska='["(##) ####-####", "(##) #####-####"]'/>
        <validation-message :show="v$.phone.$invalid" v-for="error of v$.phone.$errors" :key="error.$uid" :text="error.$message" />
      </div>

      <div class="col-span-1 flex flex-col gap-1">
        <label class="">Assunto * </label>
        <input autocomplete="off" autofocus class="border border-[#85aaa6] rounded-md p-2" type="text" v-model="form.subject"/>
        <validation-message :show="v$.subject.$invalid" v-for="error of v$.subject.$errors" :key="error.$uid" :text="error.$message" />
      </div>

      <div class="col-span-1 flex flex-col gap-1">
        <label class="">Como podemos te ajudar? *</label>
        <input autocomplete="off" autofocus class="border border-[#85aaa6] rounded-md p-2" type="text" v-model="form.content"/>
        <validation-message :show="v$.content.$invalid" v-for="error of v$.content.$errors" :key="error.$uid" :text="error.$message" />
      </div>

      <p class="text-sm text-gray-500">
        A BlogBook precisa das informações de contato que você nos fornece para comunicar informações sobre produtos e serviços. Você pode deixar de receber essas comunicações quando quiser. Para obter mais informações, confira nossa Política de Privacidade.
      </p>

      <div class="col-span-1 flex">
        <button class="bg-[#034c46] p-2 w-full text-white rounded-md text-md font-medium hover:opacity-45 disabled:cursor-not-allowed" type="submit" :disabled="v$.$invalid">Enviar</button>
      </div>
    </form>
  </section>
  <Footer class="!mt-0 border-t border-gray-200"></Footer>
</template>