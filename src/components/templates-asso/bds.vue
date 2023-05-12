<template>
  <table style="border-top: 1px solid #1A2248" width="439" height="134" cellspacing="2" cellpadding="2" border="0">
    <tbody>
    <tr>
      <td valign="top">
            <span style="font-family: Roboto, Arial,Sans-Serif; font-size: 10pt; margin-top: 0pt;margin-right: 10pt;">
                <img v-if="data.logo" alt="" v-bind:src="data.logo" height="108" border="0">
             </span>
      </td>
      <td valign="top"><span style="font-family: Verdana,Arial,Sans-Serif,serif; font-size: 10pt; color: black;margin-top: 0pt"> <strong>
            <span v-if="data.line1" v-bind:style="'color:'+data.mainColor"><br>{{data.line1}}</span><span v-else v-bind:style="'color:'+data.mainColor"><br>Prénom NOM</span></strong><br>
                      <span v-if="data.line2">{{data.line2}}</span><span v-else>Poste</span> - Bureau des Sports <br>
                      <span v-if="data.line3">{{data.line3}}</span><span v-else>Élève-ingénieur - École Centrale de Marseille</span><br>
                    </span>
        <table width="241" height="37">
          <tbody>
          <tr>
            <td align="left"><a v-bind:href="'mailto:'+data.mail"><img alt="" src="https://images2.imgbox.com/4a/72/eTylV1bv_o.png" height="25" border="0"></a><br>
            </td>
            <td nowrap="" align="left"><a v-bind:href="data.website" target="XnMvYHz-hYhrEYJfTFlmd_A" rel="noopener noreferrer"><img alt="" src="https://images2.imgbox.com/d5/67/c3wYTtYe_o.png" height="25" border="0"></a><br>
            </td>
            <td nowrap="" align="left"><a v-bind:href="data.linkedin" target="MwOjAUe9m68Xb8bXgrMMGc5" rel="noopener noreferrer"><img alt="" src="https://images2.imgbox.com/4a/a0/MJXI5TLE_o.png" height="25" border="0"></a><br>
            </td>
            <td align="left"><a v-bind:href="'tel:'+data.telephone1"><img alt="" src="https://images2.imgbox.com/7d/fd/jNaIgJvb_o.png" height="25"></a></td>
            <td align="left"><a v-bind:href="'tel:'+data.telephone1" style="font-size:9pt;font-family: Verdana, Arial,Sans-Serif;white-space: nowrap"> <font color="black">{{ data.tel1_formatted }}</font><br></a> </td>
          </tr>
          </tbody>
        </table>
        <br>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "bds",
  props: ["asso","data"],
  data () {
    return {
      asso: this.asso,
      line1: this.data.line1,
      line2: this.data.line2,
      line3: this.data.line3,
      mainColor: this.data.mainColor,
      telephone1: this.data.telephone1,
      tel1_formatted: this.data.tel1_formatted,
      logo: this.data.logo,
      facebook: this.data.facebook,
      website: this.data.website,
      linkedin: this.data.linkedin,
      mail: this.data.mail,
      youtube: this.data.youtube,
    }
  }
}
</script>

<style scoped>

</style>
