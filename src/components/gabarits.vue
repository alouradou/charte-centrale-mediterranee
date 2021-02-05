<template>
  <div :id="$options.name" class="chapter md:grid md:grid-cols-2 md:gap-6">
    <div class="col-span-full">
      <h2>Gabarits</h2>
    </div>
    <div>
      <h3>Présentations</h3>
      <ul>
        <li><a href="/charte_graphique/zip/ppt.zip">PowerPoint</a> <span class="text-smaller">(565 Ko)</span></li>

        <li><a href="/charte_graphique/zip/papier-entete-centrale-marseille-word.zip">Word</a> <span class="text-smaller">(270 Ko)</span></li>

        <li><a href="" disabled>Keynote</a> <span class="text-smaller">(à venir)</span></li>

        <li><a href="" disabled>Libre Office</a> <span class="text-smaller">(à venir)</span></li>

        <li><a href="" disabled>Reveal.js</a> <span class="text-smaller">(à venir)</span></li>

        <li><a href="" disabled>LaTeX</a> <span class="text-smaller">(à venir)</span></li>
      </ul>
    </div>
    <div>
      <h3>Fonds pour visioconférence</h3>
      <p><span class="text-smaller">(à venir)</span></p>
      <h3>Intro vidéo</h3>
      <p><span class="text-smaller">(à venir)</span></p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'gabarits',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>