<template>
  <div id="footer">
    <v-row align="center" justify="center">
      <v-btn
        href="https://github.com/cocoa-engineer"
        target="_blank"
        color="white"
        class="mx-5"
        text
        icon
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn
        href="https://twitter.com/CocoaEngineer"
        target="_blank"
        color="rgb(29,161,242)"
        class="mx-5"
        text
        icon
      >
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
    </v-row>
    <p>© 2020 cocoa-engineer</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  background-color: black;
  text-align: center;
  height: 20%;
}
p {
  margin-bottom: 0;
  color: aliceblue;
}
</style>
