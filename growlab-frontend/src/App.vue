<template>
  <Header/>
  <Home/>
</template>

<style>
* {
  color: #34364A;
}
</style>

<script>
import Header from "./components/Header.vue"
import Home from "./components/Home.vue"
import LogSignIn from "./components/LogSignIn.vue"
import "../node_modules/tailwindcss/tailwind.css"

// const routes = {
//   '/': Home,
//   '/testimonial': Testimonial,
//   '/harga': Harga,
// }

export default {
  name: 'App',
  mounted() {
    document.title = "Growlab"
  },
  components: {
    Header,
    Home,
    LogSignIn,
  },
}
</script>