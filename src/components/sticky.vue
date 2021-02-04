<template>
</template>

<script>
export default {

  name: 'sticky',

  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleNavClass(){
        if(this.active == false){
          return 'nav'
        } else {
          return 'sticky-nav'
        }

    }
  },
  mounted(){
  window.document.onscroll = () => {
      let navBar = document.getElementById('nav');
      if(window.scrollY > navBar.offsetTop){
        this.active = true;
        } else {
        this.active = false;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>