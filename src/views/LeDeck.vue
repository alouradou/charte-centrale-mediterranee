<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/le-deck/logo-Centrale-Marseille-Le-Deck.png" alt="logo Centrale Marseille Le Deck">
            </h1>
          </div>
          <p class="pt-6">
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <div class="pb-6"><h2>Logo</h2></div>
          <div class="chapter grid grid-cols-3 gap-6">
            <div>
              <img class="light" src="../assets/img/le-deck/logo-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="ledeck">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-jaune-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="dark">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-bleu-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="black">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
          </div>
          <div class="col-span-full">
            <h3>Pictogrammes</h3>
            <div class="grid grid-cols-3 gap-6">
            <img class="light" src="../assets/img/le-deck/picto-Le-Deck.png" alt="picto">
            <img class="ledeck" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/le-deck/picto-jaune-Le-Deck.png" alt="">
            </div>
          </div>
          <div class="pt-6"><h2>Couleurs</h2></div>
          <Couleurs :colors="colors"></Couleurs>
          <Signature 
            class="pt-6"
            logoUrl="img/logo-le-deck.png"
            :logoWidth="113"
            :logoHeight="57"
            color1="#000f9f"
            color2="#d4b718">
          </Signature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Couleurs from '@/components/tableau-couleurs'
import Signature from '@/components/signature'

export default {
  name: 'Deck',
  data () {
    return {
      colors: [
      {
        Pantone:'BLUE 072',
        CMJN:'100, 90, 12, 2',
        RVB:'0, 15, 159',
        Hex:' #000f9f'
      },
      {
        Pantone:'103',
        CMJN:'31, 28, 100, 0',
        RVB:'212, 187, 24',
        Hex:'#d4b718'
      },
      {
        Pantone:'10% de 2374',
        CMJN:'7, 5, 3, 0',
        RVB:'239, 240, 244',
        Hex:' #eff0f4'
      }]
    }
  },
  components: {
    Couleurs,
    Signature
  }
}
</script>