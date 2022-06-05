<template>
  <Header />
  <hr class="my-0">

  <body class="bg-light max-height">
    <!-- <Option></Option> -->

    <!-- Reviewer Wrapper -->
    <div class="p-5 container d-flex gap-4">

      <!-- Filters -->
      <div class="col-4 p-2 border-0">
        <div class="d-flex">
          <h2 class="me-auto">Filter</h2>
          <a class="my-auto text-decoration-none" href="">RESET</a>
        </div>

        <div class="card gap-1 p-4 border-0">

          <!-- Rating -->
          <h4>Rating</h4>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="1" v-model="rate">
            <label class="form-check-label ms-2">4-5</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="2" v-model="rate">
            <label class="form-check-label ms-2">2-3</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="3" v-model="rate">
            <label class="form-check-label ms-2">1</label>
          </div>

          <!-- <p>rate: {{ rate }}</p> -->
          <!-- End Rating -->

          <hr>

          <!-- Harga -->
          <h4>Harga</h4>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="100" v-model="price">
            <label class="form-check-label ms-2">Rp 99.000 - 119.000</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="120" v-model="price">
            <label class="form-check-label ms-2">Rp 120.000 - 159.000</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="160" v-model="price">
            <label class="form-check-label ms-2">Rp 160.000 - 259.000</label>
          </div>
          <!-- End Harga -->

        </div>
        <!-- End Filters -->

      </div>

      <!-- Reviewers -->
      <div class="border-0 w-100 p-2">
        <p class="mt-2">Menampilkan {{ }} reviewer CV terbaik dengan harga terbaik</p>
        <!-- !Looping di sini! -->
        <div class="card px-4 py-2 border-0">
          <div class="d-flex flex-row pt-3">
            <img src="@/assets/img/people-1.png" class="profpic my-auto">
            <div class="w-100 m-auto px-4">
              <h3 class="my-1">Puspita Melati</h3>
              <p class="my-1 mb-2">Penulis resume profesional</p>
              <div class="pill-wrapper d-flex gap-2 my-1 fw-small">
                <span class="rounded-pill px-2 pill-1">Recruiter</span>
                <span class="rounded-pill px-2 pill-2">Profesional Writer</span>
                <span class="rounded-pill px-2 pill-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#FFC33C"
                    class="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  4.9
                </span>
              </div>
            </div>
          </div>
          <div class="info m-2 fw-small d-flex">
            <div class="m-2 d-flex gap-4">
              <a class="my-auto" href="">Detail harga</a>
              <a class="my-auto" href="">Detail Reviewer</a>
              <a class="my-auto" href="">Lihat Testimonial</a>
              <a class="my-auto" href="">Kebijakan</a>
            </div>
            <div class="m-auto me-0 d-flex gap-2">
              <router-link to="" class="btn btn-light fw-small">KIRIM PESAN</router-link>
              <router-link to="/payment" class="btn btn-primary fw-small">PILIH</router-link>
            </div>
          </div>
        </div>
        <!-- !Looping di sini! -->
      </div>
      <!-- End Reviewers -->

    </div>
    <!-- End Reviewer Wrapper -->

  </body>

</template>



<!-- !Ganti Select bagian option awal -->
<!-- <select>Pilih dong</select> -->

<!-- id="check1" name="option1" -->



<script>
import Header from '../../components/Header/header.vue'
// import Payment

// const ratings = [1.0, 2.0, 3.0, 4.0, 5.0]
// const prices = [99000, 120000, 160000, 260000]

export default {
  name: 'cari',
  components: {
    Header
  },
  data() {
    return {
      rate: [],
      price: []
    }
  },
  methods: {
    pemesanan() {

    }
  },
  computed: {
    // rating(rate) {
    //   if (rate <= 1.0) {
    //     return "1"
    //   } else if (rate <= 3.0) {
    //     return "2-3"
    //   } else {
    //     return "4-5"
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
@import '../cari-reviewer/cari-reviewer.scss';
</style>