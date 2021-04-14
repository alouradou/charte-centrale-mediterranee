<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/alumni/logo-Centrale-Marseille-Alumni.png" alt="logo Centrale Marseille Alumni">
            </h1>
          </div>
          <div class="pt-6">
            <h3>Centrale Marseille et ses marques filles</h3>
            <p>Toutes les activités portées par Centrale Marseille s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
            Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>          
            <h3>Alumni</h3>
            <p>L’orange de Centrale Marseille Alumni marque l’énergie bienveillante de l’association et reste le témoin des multiples souvenirs et histoires faits sur le campus car elle correspond exactement au orange de l’ancienne charte. Cette volonté de continuité marque la pérennité des engagements et des missions de l’association des diplômés de Centrale Marseille.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <div class="pb-6"><h2>Logo</h2></div>
          <div class="chapter grid grid-cols-3 gap-6">
            <div class="light">
              <img src="../assets/img/alumni/logo-Centrale-Marseille-Alumni.png" alt="logo">
            </div>
            <div class="alumni">
              <img src="../assets/img/alumni/logo-blanc-Centrale-Marseille-Alumni.png" alt="logo">
            </div>
            <div class="light">
              <img src="../assets/img/alumni/logo-orange-Centrale-Marseille-Alumni.png" alt="logo">
            </div>
            <div class="dark">
              <img src="../assets/img/alumni/logo-blanc-Centrale-Marseille-Alumni.png" alt="logo">
            </div>
            <div class="end light">
              <img src="../assets/img/alumni/logo-bleu-Centrale-Marseille-Alumni.png" alt="logo">
            </div>
            <div class="end black">
              <img src="../assets/img/alumni/logo-blanc-Centrale-Marseille-Alumni.png" alt="logo">
            </div>
          </div>
          <div class="col-span-full">
            <h3>Pictogrammes</h3>
            <div class="grid grid-cols-6 gap-6">
            <img class="light" src="../assets/img/alumni/picto-Centrale-Marseille-Alumni.png" alt="picto">
            <img class="alumni" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/alumni/picto-orange-logo-Centrale-Marseille-Alumni.png" alt="">
            </div>
          </div>
          <div class="pt-6"><h2>Couleurs</h2></div>
          <Couleurs :colors="colors"></Couleurs>
          <Signature 
            class="pt-6"
            logoUrl="img/logo-alumni.png"
            :logoWidth="113"
            :logoHeight="57"
            color1="#000f9f"
            color2="#eb7708">
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
  name: 'Alumni',
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
        Pantone:'716',
        CMJN:'2, 62, 99, 0',
        RVB:'235, 119, 8',
        Hex:'#eb7708'
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