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
          <div class="pt-6">
            <h3>Centrale Marseille et ses marques filles</h3>
              <p>Toutes les activités portées par Centrale Marseille s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
              Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>  
            <h3>Le Deck</h3>
            <p>À Centrale Marseille, entreprendre c’est faire germer des idées lumineuses et responsables. À mi-chemin entre le jaune et le vert clair, cette nuance fraiche reflète bien l’esprit de notre pré-incubateur qui forme nos élèves à imaginer demain.</p>
          </div>
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
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck.png" alt="logo blanc">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-jaune-Centrale-Marseille-Le-Deck.png" alt="logo jaune">
            </div>
            <div class="dark">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck.png" alt="logo blanc">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-bleu-Centrale-Marseille-Le-Deck.png" alt="logo bleu">
            </div>
            <div class="black">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck.png" alt="logo blanc">
            </div>
          </div>
          <div class="pt-6"><h3>Version longue</h3></div>
          <div class="chapter grid grid-cols-3 gap-6">
            <div>
              <img class="light" src="../assets/img/le-deck/logo-Centrale-Marseille-Le-Deck-+-signature.png" alt="logo">
            </div>
            <div class="ledeck">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck-+-signature.png" alt="logo blanc">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-jaune-Centrale-Marseille-Le-Deck-+-signature.png" alt="logo jaune">
            </div>
            <div class="dark">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck-+-signature.png" alt="logo blanc">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-bleu-Centrale-Marseille-Le-Deck-+-signature.png" alt="logo bleu">
            </div>
            <div class="black">
              <img src="../assets/img/le-deck/logo-blanc-Centrale-Marseille-Le-Deck-+-signature.png" alt="logo blanc">
            </div>
          </div>
          <div class="chapter grid grid-cols-2 gap-6">
            <h3 class="col-span-full mt-6 mb-0">Version horizontale</h3>
            <div class="light ">
              <img src="../assets/img/le-deck/logo-2-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="end ledeck">
              <img src="../assets/img/le-deck/logo-2-blanc-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="light">
              <img src="../assets/img/le-deck/logo-2-jaune-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="end dark">
              <img src="../assets/img/le-deck/logo-2-blanc-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="end light">
              <img src="../assets/img/le-deck/logo-2-bleu-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
            <div class="end black">
              <img src="../assets/img/le-deck/logo-2-blanc-Centrale-Marseille-Le-Deck.png" alt="logo">
            </div>
          </div>
          <div class="col-span-full pt-6">
            <h3>Pictogrammes</h3>
            <div class="grid grid-cols-6 gap-6">
            <img class="light" src="../assets/img/le-deck/picto-Le-Deck.png" alt="picto">
            <img class="ledeck" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/le-deck/picto-jaune-Centrale-Marseille-Le-Deck.png" alt="">
            </div>
          </div>
          <div class="pt-6"><h2>Couleurs</h2></div>
          <Couleurs :colors="colors"></Couleurs>
          <Signature 
            class="pt-6"
            logoUrl="img/logo-Le-deck.png"
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