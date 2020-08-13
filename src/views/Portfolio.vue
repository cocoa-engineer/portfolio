<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio</h1>

    <article>これまでに開発したアプリです。</article>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center">
        <template>
          <v-col cols="12" md="4">
            <div class="imgWrap">
              <v-card @click="showDialogYoutube()">
                <v-img :src="youtubeimage" height="225px">
                  <v-card-title class="title gray--text justify-center">
                    <v-text>
                      <p class="mt-0 subheading font-weight-bold">Youtubeまとめアプリ</p>

                      <div class="description">
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >Youtubeの動画を、様々なジャンルから検索できるアプリです。</p>
                      </div>
                    </v-text>
                  </v-card-title>
                </v-img>
                <youtube-dialog ref="dialogYoutube"></youtube-dialog>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="imgWrap">
              <v-card @click="showDialogWarikan()">
                <v-img :src="warikanimage" height="225px">
                  <v-card-title class="title gray--text justify-center">
                    <v-text>
                      <p class="mt-0 subheading font-weight-bold">多め ni 割り勘</p>
                      <div class="description">
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >多め、少なめで割り勘するときに便利なアプリです。</p>
                      </div>
                    </v-text>
                  </v-card-title>
                </v-img>
                <warikan-dialog ref="dialogWarikan"></warikan-dialog>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="imgWrap">
              <v-card @click="showDialogShout()">
                <v-img :src="shoutimage" height="225px">
                  <v-card-title class="title gray--text justify-center">
                    <v-text>
                      <p class="mt-0 subheading font-weight-bold">Shout</p>
                      <div class="description">
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >心の声を思いっきり叫ぶアプリです。</p>
                      </div>
                    </v-text>
                  </v-card-title>
                </v-img>
                <shout-dialog ref="dialogShout"></shout-dialog>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="imgWrap">
              <v-card @click="showDialogPortfolio()">
                <v-img :src="siteimage" height="225px">
                  <v-card-title class="title gray--text justify-center">
                    <v-text>
                      <p class="mt-0 subheading font-weight-bold">ポートフォリオサイト</p>
                    </v-text>
                  </v-card-title>
                </v-img>
                <po-dialog ref="dialogPortfolio"></po-dialog>
              </v-card>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DialogYoutube from "@/components/DialogYoutube.vue";
import DialogWarikan from "@/components/DialogWarikan.vue";
import DialogShout from "@/components/DialogShout.vue";
import DialogPortfolio from "@/components/DialogPortfolio.vue";
export default {
  name: "portfolio",
  data() {
    return {
      dialogYoutube: false,
      dialogWarikan: false,
      dialogShout: false,
      dialogPortfolio: false,
      youtubeimage: require("@/assets/img/youtube.png"),
      warikanimage: require("@/assets/img/warikan.png"),
      shoutimage: require("@/assets/img/shout.png"),
      siteimage: require("@/assets/img/home.jpg"),
      transparent: "rgba(0, 0, 0, 0)"
    };
  },
  components: {
    youtubeDialog: DialogYoutube,
    warikanDialog: DialogWarikan,
    shoutDialog: DialogShout,
    poDialog: DialogPortfolio
  },
  methods: {
    showDialogYoutube() {
      this.$refs.dialogYoutube.open();
    },
    showDialogWarikan() {
      this.$refs.dialogWarikan.open();
    },
    showDialogShout() {
      this.$refs.dialogShout.open();
    },
    showDialogPortfolio() {
      this.$refs.dialogPortfolio.open();
    }
  }
};
</script>
<style scoped>
#portfolio {
  width: 100%;
  background-color: #00336d;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  color: white;
}
#portfolio h1 {
  font-size: 2em;
  margin-bottom: 60px;
}
#portfolio article {
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin-bottom: 30px;
}
.description {
  margin-top: 120px !important;
}
.imgWrap {
  overflow: hidden;
}
.v-card {
  transition: 0.4s all;
}
.v-card:hover {
  transform: scale(1.1);
  transition: 0.4s all;
}
</style>
