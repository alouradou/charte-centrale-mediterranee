<template>
  <div id="couleurs" class="chapter md:grid md:grid-cols-3 md:gap-6">
    <div class="col-span-full">
      <h2>Couleurs</h2>
    </div>
    <div class="col-span-full">
      <h3>Teintes principales</h3>
    </div>
    <div class="col-span-2">
      
      <tableauColor :colors="colorPrimary"></tableauColor>
      <br>
      <h3>Teintes secondaires</h3>
      <tableauColor :colors="colorSecondary"></tableauColor>
    </div>
    <div class="col-span-1">
      <p>Un bleu en teinte dominante, bleu comme la science, Marseille et la France vues de l’international. Un bleu institutionnel, sérieux qui renforce la dimension scientifique de la marque, avec force et dynamisme. Un bleu de haute mer qui nous éloigne des côtes récréatives. Un bleu foncé qui permet le contraste et la distinction.</p>
      <p>Un gris en contrepoint met en valeur le bleu, engage notre sérieux, notre sobriété et apporte une touche design.</p>
    </div>
  </div>
</template>

<script>
  import tableauColor from '@/components/tableau-couleurs.vue'
export default {
  name: 'couleurs',
  components: {
    tableauColor
  },
  data () {
    return {
      colorPrimary: [{
        Pantone:'BLUE 072',
        CMJN:'100, 90, 12, 2',
        RVB:'0, 15, 159',
        Hex:' #000f9f'
      },
      {
        Pantone:'2374',
        CMJN:'76, 58, 30, 14',
        RVB:'77, 95, 128',
        Hex:'#4d5f80'
      },
      {
        Pantone:'10% de 2374',
        CMJN:'7, 5, 3, 0',
        RVB:'239, 240, 244',
        Hex:' #eff0f4'
      }],
      colorSecondary: [
        {
          RVB:'18, 140, 56',
          Hex:'#128c38'
        },
        {
          RVB:'220, 22, 47',
          Hex:'#dc162f'
        },
        {
          RVB:'247, 175, 23',
          Hex:'#f7af17'
        },
        {
          RVB:'97, 52, 138',
          Hex:'#61348a'
        },
        {
          RVB:'36, 135, 185',
          Hex:'#2487b9'
        },
      ]
    }
  }
}
</script>