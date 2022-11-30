<template>
  <vue-plyr>
    <video :data-poster="posterlink">
      <source
        :size="'1920'"
        :src="videolink"
        :type="'video/mp4'"
      />
    </video>
  </vue-plyr>
</template>

<script>

export default {

  name: 'myPlyr',
  props: ['size', 'url', 'type', 'poster'],
  computed: {
    videolink: function () {
      return '/' + this.url
    },
    posterlink: function () {
      return '/' + this.poster
    }
  }
}
</script>