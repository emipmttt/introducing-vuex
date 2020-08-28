import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    parkings: [
      { name: "A", vehicles: 0 },
      { name: "B", vehicles: 0 },
      { name: "C", vehicles: 0 },
      { name: "D", vehicles: 0 },
    ],
  },

  mutations: {
    addVehicle(state, name) {
      let parkings = state.parkings
      var index = parkings.findIndex(el => name == el.name);
      parkings[index].vehicles++
      state.parkings = parkings;
    }
  },

  getters: {
    vehicles(state) {
      var vehicles = 0;

      state.parkings.forEach((element) => {
        vehicles += element.vehicles;
      });

      return vehicles;
    }
  }

})
