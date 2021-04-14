<template>
  <header id="theHeader">
    <div class="container">
      <div class="content grid gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-6">
        <div class="col-span-1 logo-container">
          <a id="logo" :href="path">
            <img src="../assets/img/logo.png" alt="Logo">
          </a>
        </div>
        <div class="end text-left sm:col-span-3 lg:col-span-4">
          <nav id="nav" class="nav-horizontal">
            <button :class="{ active:isOpened }" class="burger-button" @click="toggleBurger" type="button" role="button" aria-label="open/close navigation"><i></i></button>
            <ul :class="{ opened:isOpened }">
              <li>
                <router-link to="/">La marque</router-link>
              </li>
              <li>
                <router-link to="/charte-graphique">La charte graphique</router-link>
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
              <li>
                <router-link to="/le-deck">Le Deck</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { publicPath } from './../../vue.config.js'

export default {
  name: 'theHeader',
  data () {
    return {
      isOpened: false,
      path: publicPath
    }
  },
  methods: {
    toggleBurger: function () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>