<template>
  <header id="theHeader">
    <div class="container">
      <div class="content grid gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-6">
        <div class="col-span-1 logo-container">
          <a id="logo" :href="path">
            <img src="../assets/img/logo-med.png" alt="Logo">
          </a>
        </div>
        <div class="end text-left sm:col-span-3 lg:col-span-4">
          <nav id="nav" class="nav-horizontal">
            <button :class="{ active:isOpened }" class="burger-button" @click="toggleBurger" type="button" role="button" aria-label="open/close navigation"><i></i></button>
            <ul :class="{ opened:isOpened }">
              <li>
                <router-link to="/">Centrale Méditerranée</router-link>
              </li>
              <li>
                <router-link to="/fondation">La fondation</router-link>
              </li>
              <li>
                <router-link to="/executive-education">Executive Education</router-link>
              </li>
              <li>
                <router-link to="/le-deck">Le Deck</router-link>
              </li>
              <li>
                <router-link to="/alumni">Alumni</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'theHeader',
  data () {
    return {
      isOpened: false
    }
  },
  computed: {
    path: function () {
      return process.env.NODE_ENV === 'production'
        ? '/signature/'
        : '/'
    }
  },
  methods: {
    toggleBurger: function () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>
