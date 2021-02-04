<template>
  <div :id="$options.name" class="chapter md:grid md:grid-cols-2 md:gap-6">
    <div class="col-span-full">
      <h2>Gabarits</h2>
    </div>
    <div>
      <ul>
        <li><a href="" disabled>Word</a> <span class="text-smaller">(à venir)</span></li>
        <li><a href="" disabled>PowerPoint</a> <span class="text-smaller">(à venir)</span></li>
        <li><a href="" disabled>Keynote</a> <span class="text-smaller">(à venir)</span></li>
        <li><a href="" disabled>Libre Office</a> <span class="text-smaller">(à venir)</span></li>
        <li><a href="" disabled>Reveal.js</a> <span class="text-smaller">(à venir)</span></li>
        <li><a href="" disabled>LaTeX</a> <span class="text-smaller">(à venir)</span></li>
      </ul>
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