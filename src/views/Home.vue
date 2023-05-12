<template>
  <div :id="$options.name">
    <div class="container">
      <div class="content md:grid md:grid-cols-3 md:gap-6">
        <div class="text col-span-3">
          <signature
              :logoWidth="101"
              :logoHeight="53"
              logoUrl="img/logo.png"
              color1="#000f9f"
              color2="#4d5f80"></signature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import intro from '../components/intro.vue'
import sum from '../components/summary.vue'
import signature from "@/components/signature.vue";
export default {
  name: 'Home',
  components: {
    // intro,
    // sum
    signature
  }
}
</script>
