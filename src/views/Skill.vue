<template>
  <div class="skill" id="skill">
    <h1>Skill</h1>
    <FadeIn>
      <v-container>
        <v-row class="fill-height d-flex">
          <template>
            <v-col cols="12" md="4">
              <v-card flat class="mx-auto">
                <v-card-title class="title">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <v-title class="subheading text-left mb-8"
                      >フロントエンド</v-title
                    >

                    <v-text>
                      <ul class="font-weight-light mb-6">
                        <li>
                          <v-avatar size="36">
                            <img :src="htmlicon" /> </v-avatar
                          >HTML5
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="cssicon" /> </v-avatar
                          >CSS
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="jsicon" /> </v-avatar
                          >JavaScript
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="jqicon" /> </v-avatar
                          >jQuery
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="vueicon" /> </v-avatar
                          >Vue.js
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="vueicon" /> </v-avatar
                          >Vuex
                        </li>
                      </ul>
                    </v-text>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card flat>
                <v-card-title class="title">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="subheading text-left mb-8">
                      バックエンド
                    </p>

                    <div>
                      <ul class="font-weight-light">
                        <li>
                          <v-avatar size="36"> <img :src="rbicon" /> </v-avatar
                          >Ruby
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="rbicon" /> </v-avatar
                          >Ruby on Rails
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="awsicon" /> </v-avatar
                          >AWS
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="dcicon" /> </v-avatar
                          >Docker
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="ciicon" /> </v-avatar
                          >CircleCI
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="ticon" /> </v-avatar
                          >Terraform
                        </li>
                      </ul>
                    </div>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card flat>
                <v-card-title class="title">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="subheading text-left mb-8">
                      資格
                    </p>

                    <div>
                      <ul class="font-weight-light">
                        <li>
                          <v-avatar size="36"> <img :src="rbicon" /> </v-avatar
                          >Ruby Silver
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="rbicon" /> </v-avatar
                          >Ruby Gold
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="cpicon" /> </v-avatar
                          >AWS 認定クラウドプラクティショナー
                        </li>
                        <li>
                          <v-avatar size="36"> <img :src="saicon" /> </v-avatar
                          >AWS 認定 ソリューションアーキテクト –
                          アソシエイト(SAA-C02)
                        </li>
                      </ul>
                    </div>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </FadeIn>
  </div>
</template>
<script>
import FadeIn from "../components/FadeIn";
export default {
  name: "skill",
  data() {
    return {
      htmlicon: require("@/assets/img/icon/html.png"),
      cssicon: require("@/assets/img/icon/css.png"),
      jsicon: require("@/assets/img/icon/js.png"),
      jqicon: require("@/assets/img/icon/jq.png"),
      vueicon: require("@/assets/img/icon/vue.png"),
      fbicon: require("@/assets/img/icon/firebase.png"),
      cpicon: require("@/assets/img/icon/aws-certified-cloud-practitioner.png"),
      saicon: require("@/assets/img/icon/aws-certified-solutions-architect-associate.png"),
      rbicon: require("@/assets/img/icon/ruby.png"),
      awsicon: require("@/assets/img/icon/aws.png"),
      dcicon: require("@/assets/img/icon/docker.png"),
      ciicon: require("@/assets/img/icon/circleci.png"),
      ticon: require("@/assets/img/icon/t.png")
    };
  },
  components: {
    FadeIn
  }
};
</script>
<style scoped>
#skill {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
#skill h1 {
  font-size: 2em;
  margin-bottom: 60px;
  text-align: center;
}
#skill p {
  text-align: center;
}
ul {
  list-style: none;
}
.v-avatar {
  margin-right: 5px;
}
</style>
