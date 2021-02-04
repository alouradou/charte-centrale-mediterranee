<template>
  <div class="container intro">
    <div class="content md:grid md:grid-cols-4 md:gap-6">
      <div id="marque" class="text md:col-span-2">
        <h1>Nous avons un monde <br>à transformer</h1>
        <p><strong>Centrale Marseille forme des managers scientifiques, acteurs de la transformation des organisations et du monde et empreints d’un grand sens des responsabilités.</strong></p>
        <p>École engagée, ambitieuse, exigeante et source d’innovation, elle fait aujourd’hui place forte aux problématiques et enjeux du monde de demain en mettant la science et la technique au service du bien commun.</p>
        <menu3 class="menu"></menu3>
      </div>
      <div class="align-middle md:col-span-2 end">
        <vue-plyr>
          <video>
            <source
              size='720'
              src='../assets/video/logo.mp4'
              type='video/mp4'
            />
          </video>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script>
  import menu3 from '@/components/menu3'

  export default {
    name: 'intro',
    components: {
      menu3
    }
  }
</script>
