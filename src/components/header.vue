<template>
  <header id="header">
    <div class="container">
      <div class="content grid sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-6">
        <div class="col-span-1">
          <a id="logo" href="/#/">
            <img src="../assets/img/logo.png" alt="Logo">
          </a>
        </div>
        
        <nav id="nav" class="end nav-horizontal text-right col-span-5">
          <button :class="{ active:isOpened }" class="burger-button" @click="toggleBurger" type="button" role="button" aria-label="open/close navigation"><i></i></button>
          <ul :class="{ opened:isOpened }">
            <li>
              <router-link to="/">La marque Centrale Marseille</router-link>
            </li>
            <li>
              <router-link to="/fondation">La fondation</router-link>
            </li>
            <li>
              <router-link to="/alumni">Alumni</router-link>
            </li>
            <li>
              <router-link to="/exectutive-education">Executive Education</router-link>
            </li>
<!--             <li>
              <router-link to="/deck">Le deck</router-link>
            </li> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggleBurger: function () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>
