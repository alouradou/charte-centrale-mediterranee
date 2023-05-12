<template>
  <div id="typo" class="chapter md:grid md:grid-cols-2 md:gap-6">
    <div class="col-span-full">
      <h2>Typographie</h2>
    </div>
    <div>
      <h3>Typographie à utiliser</h3>
      <p>La Barlow est la typographie à utiliser sur les supports numériques (web, présentations, app…). Elle est sous licence libre (SIL Open Font License 1.1) ce qui permet une large diffusion sur tous les postes de l'école.</p>
      <p>Elle existe en Normal, Semi-Condensed et Condensed.</p>
      <p>Vous pouvez la télécharger directement sur le <a href="https://tribby.com/fonts/barlow">site de l'auteur</a>. Elle est aussi disponible sur Google Font : </p>
        <ul>
        <li><a href="https://fonts.google.com/specimen/Barlow#standard-styles">Barlow Normal</a></li>
        <li><a href="https://fonts.google.com/specimen/Barlow+Semi+Condensed">Barlow Semi-Condensed</a></li>
      </ul>
      <p><a class="btn info align-middle" :href="path+'zip/Barlow.zip'">Telecharger la typographie</a></p>
    </div>
    <div>
      <h3>Communication institutionnelle</h3>
      <p>La typographie <a href="https://www.linotype.com/fr/620/itc-conduit-famille.html">Conduit ITC Std</a> a été utilisée pour composer notre logo, elle reste la typographie officielle de la communication institutionnelle de Centrale Marseille (notamment sur les supports papier). Mais la licence ne permet pas une installation sur tous les postes de l'école. Si elle n'est pas sur votre poste, merci d'utiliser la Barlow comme typographie de substitution.</p>
      <div>
        <myPlyr url="video/typo.mp4"></myPlyr>
      </div>
    </div>
  </div>
</template>

<script>
import myPlyr from '@/components/myPlyr.vue'
export default {

  name: 'typographie',
  data () {
    return {
      path: '/'
    }
  },
  components: {
    myPlyr
  }

}
</script>
