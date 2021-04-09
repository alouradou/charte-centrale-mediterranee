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
          <p class="pt-6">L’orange de <strong>Centrale Marseille Alumni</strong> marque l’énergie chaleureuse et bienveillante de l’association. Cette couleur témoigne des multiples souvenirs et histoires faits sur le campus. 
          Les diplômés centraliens sont unies par leurs passations à l’école. Ils se sont créé des liens qui se manifestent dans leurs activités professionnelles et amicales et qui perdurent aussi par la vivacité de l’association.
          Chaque génération d’ingénieur à des savoir-faire propres. Par l’échange de ses savoirs et compétences, de nouvelles idées émergent. Ainsi, le réseau d’Alumni permet de tisser des liens intergénérationnels qui font naître des solutions aux défis du monde.
          </p>
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
            <div class="grid grid-cols-5">
            <img class="light" src="../assets/img/alumni/picto-Centrale-Marseille-Alumni.png" alt="picto">
            <img class="alumni" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/alumni/picto-orange-logo-Centrale-Marseille-Alumni.png" alt="">
            <img class="dark" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/picto-bleu-zExcl.png" alt="picto">
            </div>
          </div>
          <div class="pt-6"><h2>Couleurs</h2></div>
          <Couleurs :colors="colors"></Couleurs>
          <Signature 
            class="pt-6"
            logoUrl="img/logo-alumni.png"
            :logoWidth="101"
            :logoHeight="51"
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