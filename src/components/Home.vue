<template>
  <div>
    <div>
      <button @click="getCurrentPosition">
        get your current position
      </button>
      <p>lat: {{ currentLocation.latitude }}</p>
      <p>lng: {{ currentLocation.longitude }}</p>
    </div>
    <AR v-if="!!currentLocation.latitude" />
  </div>
</template>

<script>
import AR from "./AR";

export default {
  name: "Home",
  data: function() {
    return {
      currentLocation: { latitude: null, longitude: null }
    };
  },
  components: {
    AR
  },
  methods: {
    getCurrentPosition: function() {
      navigator.geolocation.getCurrentPosition(
        function(pos) {
          const { latitude, longitude } = pos.coords;
          this.currentLocation.latitude = latitude;
          this.currentLocation.longitude = longitude;
        }.bind(this),
        function(err) {
          console.log("err: ", err);
        }
      );
    }
  }
};
</script>

<style></style>
