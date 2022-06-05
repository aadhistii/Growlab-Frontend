<template>

  <head>
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
  </head>

  <body class="text-center container">

    <router-link to="/">
      <img class="m-3" src="../../assets/logo.png" alt="">
    </router-link>

    <main class="text-start d-flex flex-row justify-content-center">

      <div>
        <img class="sapiens" src="../../assets/img/sapiens.png">
      </div>

      <div class="card p-5 border-0 rounded-5">
        <form class="form-signin">
          <h3>Masuk/Daftar</h3>
          <p>Perjalanan karirmu dimulai dari sini.</p>

          <div class="form-floating">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label class="phone" for="floatingInput">Nomor Ponsel atau Email</label>
          </div>

          <div class="checkbox my-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>

          <button class="w-100 btn btn-lg btn-outline-dark" type="submit">Sign in</button>
          <div class="d-flex flex-row my-3">
            <hr class="d-inline-flex w-50">
            <p class="text-center w-25 my-0 my-auto">
              atau
            </p>
            <hr class="d-inline-flex w-50">
          </div>
          <button class="w-100 btn btn-lg btn-outline-dark my-2" type="submit">
            <span><img class="" src="../../assets/icon/apple.png" alt=""></span>
            Apple
          </button>
          <button class="w-100 btn btn-lg btn-outline-dark g-signin2 my-2" data-onsuccess="onSignIn">
            <span><img class="" src="../../assets/icon/google.png" alt=""></span>
            Google
          </button>
          <button class="w-100 btn btn-lg btn-outline-dark my-2" type="submit">
            <span><img class="" src="../../assets/icon/facebook.png" alt=""></span>
            Facebook
          </button>
        </form>
      </div>
    </main>
  </body>
</template>

<!-- <script src="https://apis.google.com/js/platform.js" async defer></script> -->

<script>
export default {
  name: 'signin',
  data() {
    return {
      email: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "./log-sign-in";
</style>