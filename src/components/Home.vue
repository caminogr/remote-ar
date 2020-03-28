<template>
  <div>
    <div>
      <button @click="getCurrentPosition">
        get your current position
      </button>
      <p>lat: {{ currentLocation.latitude }}</p>
      <p>lng: {{ currentLocation.longitude }}</p>
    </div>
    <router-link to="ar">AR</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      currentLocation: { latitude: null, longitude: null }
    };
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
