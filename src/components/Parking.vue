<template>
  <div class="card">
    Estacionamiento: {{name}}
    <br />
    <strong>{{parking.vehicles}} vehiculos</strong>
    <br />
    <button @click="addVehicle(name)">Agregar Vehiculo</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    name: String,
  },
  computed: {
    ...mapState(["parkings"]),
    parking() {
      return this.parkings.find((el) => el.name == this.name);
    },
  },
  methods: {
    ...mapMutations(["addVehicle"]),
  },
};
</script>

<style>
.card {
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
}
</style>