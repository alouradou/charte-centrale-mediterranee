<template>
  <div :id="$options.name">
    <AlumniSum></AlumniSum>
    <div class="container">
      <div class="content">
        <h2>Couleurs</h2>
        <AlumniCouleurs :colors="colors"></AlumniCouleurs>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <Signature 
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
import AlumniSum from '@/components/alumni/summary'
import AlumniCouleurs from '@/components/tableau-couleurs'
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
    AlumniSum,
    AlumniCouleurs,
    Signature
  }
}
</script>