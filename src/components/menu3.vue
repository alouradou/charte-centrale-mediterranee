<template>
  <nav id="menu-3" class="nav-horizontal">
    <ul>
      <li class="justify-self-center"><a class="btn" href="#" v-scroll-to="'#la-charte'">Présentation</a></li>
      <li class="justify-self-center"><a class="btn" href="#" v-scroll-to="'#le-logo'">La charte graphique</a></li>
      <li class="justify-self-center"><a class="btn valid" :href="path+'zip/centrale-marseille-charte-graphique.zip'">Kit à télécharger</a></li>
    </ul>
  </nav>
</template>

<script>
import { publicPath } from './../../vue.config.js'
export default {

  name: 'menu3',

  data () {
    return {
      path: publicPath
    }
  }
}
</script>