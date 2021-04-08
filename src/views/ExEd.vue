<template>
  <div :id="$options.name">
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="col-span-full"><h2>Couleurs</h2></div>
        <Couleurs class="text col-span-3" :colors="colors"></Couleurs>
      </div>
    </div>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <Signature 
          class="text col-span-3"
          logoUrl="img/logo-ex-ed.png"
          :logoWidth="101"
          :logoHeight="62"
          color1="#000f9f"
          color2="#250e62">
        </Signature>
      </div>
    </div>
  </div>
</template>

<script>
import Couleurs from '@/components/tableau-couleurs'
import Signature from '@/components/signature'

export default {
  name: 'ExecutiveEducation',
  components: {
    Couleurs,
    Signature
  },
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
        Pantone:'2755',
        CMJN:'100, 100, 30, 22',
        RVB:'37, 14, 98',
        Hex:'#250e62'
      },
      {
        Pantone:'10% de 2374',
        CMJN:'7, 5, 3, 0',
        RVB:'239, 240, 244',
        Hex:' #eff0f4'
      }]
    }
  },
}
</script>