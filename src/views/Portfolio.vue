<template>
  <div class="portfolio" id="portfolio">
    <h1>Portfolio</h1>

    <article>これまでに開発したアプリです。</article>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template>
          <v-col cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="showDialogWarikan()"
              >
                <v-img :src="warikanimage" height="225px">
                  <v-card-title class="title gray--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left font-weight-bold">
                        多め ni 割り勘
                      </p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >
                          多め、少なめで割り勘するときに便利なアプリ
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
                <warikan-dialog ref="dialogWarikan"></warikan-dialog>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="showDialogShout()"
              >
                <v-img :src="shoutimage" height="225px">
                  <v-card-title class="title gray--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left font-weight-bold">
                        Shout
                      </p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-thin font-italic text-left"
                        >
                          心の声を思いっきり叫ぶアプリ
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
                <shout-dialog ref="dialogShout"></shout-dialog>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                @click="showDialogPortfolio()"
              >
                <v-img :src="siteimage" height="225px">
                  <v-card-title class="title gray--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left font-weight-bold">
                        ポートフォリオサイト
                      </p>
                    </v-row>
                  </v-card-title>
                </v-img>
                <po-dialog ref="dialogPortfolio"></po-dialog>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DialogWarikan from "@/components/DialogWarikan.vue";
import DialogShout from "@/components/DialogShout.vue";
import DialogPortfolio from "@/components/DialogPortfolio.vue";
export default {
  name: "portfolio",
  data() {
    return {
      dialogWarikan: false,
      dialogShout: false,
      dialogPortfolio: false,
      warikanimage: require("@/assets/img/warikan.png"),
      shoutimage: require("@/assets/img/shout.png"),
      siteimage: require("@/assets/img/home.jpg"),
      transparent: "rgba(0, 0, 0, 0)"
    };
  },
  components: {
    warikanDialog: DialogWarikan,
    shoutDialog: DialogShout,
    poDialog: DialogPortfolio
  },
  methods: {
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
  background-color: #eef9ff;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
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
.v-card {
  transition: opacity 0.6 ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.4s;
}
</style>
