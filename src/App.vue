<template>
  <div id="app">
    <h1>Comunicación entre componentes</h1>

    <h2>Estacionamiento</h2>
    Vehiculos totales: {{vehicles}}
    <br />
    <Parking
      @addVehicle="updateParking(index)"
      :name="parking.name"
      v-for="(parking, index) in parkings"
      :key="parking.name"
    />
  </div>
</template>

<script>
import Parking from "@/components/Parking";

import { mapState, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Parking,
  },
  computed: {
    ...mapState(["parkings"]),
    ...mapGetters(["vehicles"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
