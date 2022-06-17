<template>

  <div >
<Header></Header>
    <router-viwe></router-viwe>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/header.vue"
import Footer from "./components/Footer/footer.vue"
export default {
  name: '',
  components: {
    Header,
    Footer,
}
}
</script>

<style lang="less">

</style>
