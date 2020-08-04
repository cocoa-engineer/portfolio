<template>
  <div>
    <v-dialog v-model="dialogPortfolio" width="500">
      <v-card>
        <v-card-title>ポートフォリオサイト</v-card-title>
        <v-card-text>
          現在閲覧されているポートフォリオサイトです。
          <br />
          <br />開発環境
          <ul>
            <li>OS : mac</li>
            <li>言語 : HTML, CSS, JavaScript</li>
            <li>フレームワーク : Vue.js, Vuetify</li>
            <li>インフラ : Firebase</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogPortfolio = false"
            >閉じる</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogPortfolio: false
    };
  },
  methods: {
    open() {
      this.dialogPortfolio = true;
    },
    close() {
      this.dialogPortfolio = false;
    }
  }
};
</script>
