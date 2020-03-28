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
          switch (err.code) {
            case 1:
              alert("位置情報の利用が許可されていません。");
              break;
            default:
              alert("予期せぬ理由で位置情報の取得に失敗しました。");
              break;
          }
        }
      );
    }
  }
};
</script>

<style></style>
