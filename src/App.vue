<template>
  <theHeader></theHeader>
  <section>
    <router-view/>  
  </section>
</template>


<script>
import theHeader from './components/header'
export default {
  name: 'Home',
  components: {
    theHeader
  }
} 
</script>

<style lang="scss">

@import "./assets/sass/knacss.scss";

</style>
