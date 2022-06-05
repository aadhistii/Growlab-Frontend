<template>
  <header
    class="sticky top-0 flex flex-col max-w-screen-3xl p-5 bg-white mx-auto my-3 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <a class="flex flex-row items-center mr-[100px] justify-between lg:justify-start" href="index.html">
      <img src="../assets/logo.png" class="cursor-pointer px-5">
    </a>
    <nav class="flex-col gap-16 items-center flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row lg:pl-2">
      <a class="text-center px-4 py-2 mt-2 text-lg text-silver md:mt-0 hover:text-shamrock fill-shamrock focus:outline-none focus:shadow-outline"
        href="#">Solusi kami
        <span class="inline-block align-middle hover:fill-inherit"><ChevronDownIcon class="w-5 h-5 fill-silver"/></span>
        </a>
      <a class="text-center px-4 py-2 mt-2 text-lg text-silver md:mt-0 hover:text-shamrock focus:outline-none focus:shadow-outline"
        href="#">Bagaimana kami bekerja</a>
      <a class="text-center px-4 py-2 mt-2 text-lg text-silver md:mt-0 hover:text-shamrock focus:outline-none focus:shadow-outline"
        href="#">Testimonial</a>
      <a class="text-center px-4 py-2 mt-2 text-lg text-silver md:mt-0 hover:text-shamrock focus:outline-none focus:shadow-outline"
        href="#">Harga</a>
      <div class="inline-flex items-center gap-5 list-none lg:ml-auto mx-5">
        <button type="button" onclick="login()"
          class="items-center block px-6 py-2 text-lg font-semibold text-center text-cyprus transition duration-500 ease-in-out transform border-2 shadow-md border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Masuk
        </button>
        <button type="button" onclick=""
          class="items-center block px-6 py-2.5 text-lg font-semibold text-center text-white transition duration-500 ease-in-out transform shadow-md bg-shamrock rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shamrock">
          Daftar
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/solid'
// import LogSignIn from './LogSignIn.vue';

// login(){
//   this.$router.push({name:LogSignIn})
// }
</script>