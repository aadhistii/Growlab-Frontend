<template>
  <header class="sticky-top bg-white">
    <nav class="container navbar navbar-expand-xl navbar-nav navbar-light">
      <div class="container-fluid">
        <router-link to="/">
          <img src="@/assets/logo.png" class="me-xxl-5 mx-xl-3 my-3 ms-0 ps-0">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
            <li class="nav-item dropdown me-xxl-5 mx-xl-3 border-0">
              <router-link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Solusi Kami
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Review CV</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item me-xxl-5 mx-xl-3">
              <a class="nav-link" aria-current="page" href="#">Bagaimana Kami Bekerja</a>
            </li>
            <li class="nav-item me-xxl-5 mx-xl-3">
              <a class="nav-link" href="#">Testimonial</a>
            </li>
            <li class="nav-item me-xxl-5 mx-xl-3">
              <a class="nav-link" href="#">Harga</a>
            </li>
          </ul>
          <div class="button-wrapper">
            <router-link to="/log-sign-in" class="btn btn-outline-dark me-2">Masuk</router-link>
            <router-link to="/log-sign-in" class="btn btn-primary">Daftar</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
@import '../Header/header.scss';
</style>
