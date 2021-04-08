<template>
  <table class="nuancier">
    <thead>
      <tr>
        <th>Teinte</th>
        <template v-for="(value, name) in colors[0]" :key="name">
          <th>{{name}}</th>
        </template> 
      </tr>
    </thead>
    <tbody class="text-smaller">
      <template v-for="(color, i) in colors" :key="i">
        <tr>
          <td @click="doCopy" :style="'color:'+color.Hex+'; background-color:'+color.Hex">{{color.Hex}}</td>
          <template v-for="(value, name) in color" :key="i+name">
            <td @click="doCopy">{{value}}</td>
          </template>
        </tr>
      </template> 
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'couleurs',
  props: {
    colors: Array
  },
  methods: {
    selectText(element) {
      let range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    },
    doCopy: function (element) {
      this.validated = true;
      this.selectText(element.target); // e.g. <div ref="text">
      document.execCommand("copy");
      this.message = 'signature copiée'
    }
  }
}
</script>