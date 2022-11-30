<template>
  <div class="container light">
    <div class="content">
      <div id="marque" class="chapter md:grid md:grid-cols-2 md:gap-6">
        <div class="col-span-full">
          <h1 class="pt-6 mb-0">La Marque centrale Marseille</h1>
        </div>
        <div>
          <p>
            La <strong>marque Centrale Marseille</strong> est notre nouveau point d'appui commun pour guider notre façon de parler de l’école et du projet à venir pour Centrale Marseille. Elle répond à notre besoin de cohérence autour de ce qui nous rassemble. La <strong>nouvelle identité</strong> est le reflet de la marque et soutient certains de nos messages. 
          </p>
        </div>
        <p class="justify-self-center align-self-center">
          <a class="btn valid" :href="path+'zip/centrale-marseille-charte-graphique.zip'">Kit à télécharger</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'intro',
    computed: {
      path: function () {
        return process.env.NODE_ENV === 'production'
        ? '/charte_graphique/'
        : '/'
      }
    }
  }
</script>
