<template>
  <div class="layout">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Layout',
  components: { Header, Footer }
}
</script>

<style lang="scss" scoped>
.layout {
  margin: 0 100px;
}
</style>
