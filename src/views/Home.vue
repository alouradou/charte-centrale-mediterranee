<template>
  <div :id="$options.name">

    <intro></intro>
    
    <sum></sum>

  </div> 
</template>

<script>
// @ is an alias to /src
import intro from '@/components/intro'
import sum from '@/components/summary'

export default {
  name: 'Home',
  components: {
    intro,
    sum
  }
}
</script>