<template>
  <div :id="$options.name">
    <Sum></Sum>
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
          logoUrl="img/logo-alumni.png"
          :logoWidth="101"
          :logoHeight="51"
          color1="#000f9f"
          color2="#eb7708">
        </Signature>
      </div>
    </div>
  </div>
</template>

<script>
import Sum from '@/components/alumni/summary'
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
    Sum,
    Couleurs,
    Signature
  }
}
</script>