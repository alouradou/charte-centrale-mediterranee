<template>
  <div class="container intro">
    <div class="content md:grid md:grid-cols-4 md:gap-6">
      <div id="marque" class="text md:col-span-2">
        <h1 class="pt-6">Alumni</h1>
      </div>
      <div class="md:col-span-2 align-center text-center p-6">
        <menu3 class="align-self-center menu"></menu3>
        <!-- <myPlyr url="video/logo.mp4"></myPlyr> -->
      </div>
    </div>
  </div>
</template>

<script>
  import menu3 from '@/components/menu3'
  // import myPlyr from '@/components/myPlyr'

  export default {
    name: 'intro',
    components: {
      menu3,
//      myPlyr
    }
  }
</script>
