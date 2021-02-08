<template>
  <vue-plyr>
    <video>
      <source
        :size="'1920'"
        :src="videolink"
        :type="'video/mp4'"
      />
    </video>
  </vue-plyr>
</template>

<script>
import { publicPath } from './../../vue.config.js'

export default {

  name: 'myPlyr',
  props: ['size', 'url', 'type'],
  computed: {
    videolink: function () {
      return publicPath + this.url
    }
  }
}
</script>