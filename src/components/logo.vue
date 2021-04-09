<template>
  <div class="container light">
    <div class="content">
      <div id="le-logo" class="chapter md:grid md:grid-cols-2 md:gap-6">
        <div>
          <h1 class="pt-6">La charte graphique</h1>
          <p>Moderne, sobre, élégant, épuré, le nouveau logo construit par l’illusion d’un cercle dans un carré, évoque la modélisation du monde par les sciences et invite à inventer demain. Le plan transversal amène de la dynamique, du mouvement et suggère la complexité du monde.</p>
          <p>Le logo de centrale Marseille est décliné en plusieurs versions pour s'adapter aux différents contextes d'utilisation. Le choix de la version à utiliser ne doit dépendre que des contraintes d'affichage ou d'impression.</p>
          <p class="pt-6">
            <a class="btn end col-span-1 valid" :href="path+'zip/centrale-marseille-charte-graphique.zip'">Kit à télécharger</a>
          </p>
        </div>
        <div>
          <p>
            <myPlyr url="video/prez-logo.mp4" poster="img/vignettePrezLogo.png"></myPlyr>
          </p>
          <p>Vidéo de lancement du logo (janvier 2021)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myPlyr from '@/components/myPlyr'
import { publicPath } from './../../vue.config.js'


export default {
  name: 'logo',
  data () {
    return {
      path: publicPath
    }
  },
  components: {
    myPlyr
  }
}
</script>
