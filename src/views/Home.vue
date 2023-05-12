<template>
  <div :id="$options.name">
    <intro></intro>
    
    <sum></sum>

  </div> 
</template>

<script>
// @ is an alias to /src
import intro from '../components/intro.vue'
import sum from '../components/summary.vue'
export default {
  name: 'Home',
  components: {
    intro,
    sum
  }
}
</script>