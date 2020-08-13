<template>
  <div class="home" id="home">
    <v-parallax dark height="700" src="@/assets/img/home.jpg" class>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1>Cocoa Portfolio</h1>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
h1 {
  font-size: 5em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  color: aliceblue;
}
</style>
