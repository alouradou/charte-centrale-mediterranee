<template>
  <table height="134" border="0" cellpadding="2" cellspacing="2" width="439">
    <tbody>
    <tr>
      <td valign="top">
              <span style="font-family: Verdana,Arial, Sans-Serif,serif; font-size: 10pt; color: #000000;margin-top: 0pt;">
                <a v-bind:href="data.website">
                  <img alt=""
                       v-bind:src="data.logo"
                       height="100" border="0">
                </a>
              </span>
      </td>
      <td valign="top">
              <span style="font-family: Verdana,Arial, Sans-Serif,serif; font-size: 10pt; color: #000000;margin-top: 0;">
                <span style="color: #666666;"><br/>
                  <b v-if="data.line1" v-bind:style="'color:'+data.mainColor">{{data.line1}}</b>
                  <b v-else v-bind:style="'color:'+data.mainColor">FOCEEN</b>

                  <br/>
                  <span v-if="data.line2">{{data.line2}}</span>
                  <span v-else>École centrale de Marseille</span>
                  <br/>
                  <span v-if="data.line2&&!data.line3">École centrale de Marseille</span>
                  <span v-if="data.line3">{{data.line3}}</span>
                  <br v-else/>
                </span>
              </span>
        <span style="font-family: Verdana,Arial, Sans-Serif,serif; font-size: 10pt; color: #000000;margin-top: 0;"></span>
        <table height="37">
          <tbody>
          <tr>
            <td align="left"><a
                v-bind:href="'mailto:'+data.mail"><img
                alt=""
                src="http://alouradou.perso.centrale-marseille.fr/images/foceen/at.png"
                height="25" border="0"></a><br/>
            </td>
            <td align="left" nowrap="nowrap"><span
                style="color: #666666;font-size:9pt;font-family: Verdana, Arial,Sans-Serif,serif;white-space: nowrap;"></span><a
                v-bind:href="data.linkedin"><img
                alt=""
                src="http://alouradou.perso.centrale-marseille.fr/images/foceen/linkedin.png"
                height="25" border="0"></a><br/>
            </td>
            <td align="left">
              <a v-if="data.tel1" v-bind:href="data.tel1">
                <img alt=""
                     src="http://alouradou.perso.centrale-marseille.fr/images/foceen/tel.png"
                     height="25">
              </a>
              <a v-else href="tel:+33491054772">
                <img alt=""
                     src="http://alouradou.perso.centrale-marseille.fr/images/foceen/tel.png"
                     height="25">
              </a>
            </td>
            <td align="left">
              <a v-if="data.tel1" v-bind:href="data.tel1" style="font-family:Verdana, Arial, Sans-Serif,serif; font-size: 10pt;color: #000000; margin-top: 0;">
                      <span style="color: #666666;font-size:9pt;white-space: nowrap;">
                        <font color="#333466">
                          {{ data.tel1_formatted }}
                        </font><br/>
                      </span>
              </a>
              <a v-else href="tel:+33491054772" style="font-family:Verdana, Arial, Sans-Serif,serif; font-size: 10pt;color: #000000; margin-top: 0;">
                      <span style="color: #666666;font-size:9pt;white-space: nowrap;">
                        <font color="#333466">
                          +33 (0)4 91 05 47 72
                        </font><br/>
                      </span>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
        <br/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "foceen",
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
      tel1: this.data.tel1,
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
