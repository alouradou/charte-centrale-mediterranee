<template>
  <div id="le-logo" class="chapter md:grid md:grid-cols-2 md:gap-6">
    <div class="col-span-full">
      <h1>La charte graphique</h1>
      <h2>Le logo </h2>
    </div>
    <div>
      <p>Moderne, sobre, élégant, épuré, le nouveau logo construit par l’illusion d’un cercle dans un carré, évoque la modélisation du monde par les sciences et invite à inventer demain. Le plan transversal amène de la dynamique, du mouvement et suggère la complexité du monde.</p>
      <p>Le logo de centrale Marseille est décliné en plusieurs versions pour s'adapter aux différents contextes d'utilisation. Le choix de la version à utiliser ne doit dépendre que des contraintes d'affichage ou d'impression.</p>
    </div>
    <div>
      <p>
        <myPlyr url="video/prez-logo.mp4"></myPlyr>
      </p>
      <p>Vidéo de lancement du logo (janvier 2021)</p>
    </div>
  </div>
</template>

<script>
import myPlyr from '@/components/myPlyr'

export default {
  name: 'logo',
  components: {
    myPlyr
  }
}
</script>
