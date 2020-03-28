<template>
  <a-scene
    vr-mode-ui="enabled: false"
    embedded
    arjs="sourceType: webcam; debugUIEnabled: false;"
  >
    <a-text
      value="This content will always face you."
      look-at="[gps-camera]"
      scale="120 120 120"
      gps-entity-place="latitude: `${currentLocation.latitude}`; longitude: `${currentLocation.longitude}`;"
    ></a-text>

    <a-entity
      look-at="[gps-camera]"
      gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
      scale="5 5 5"
      position="50 150 0"
      gps-entity-place="latitude: `${currentLocation.latitude}`; longitude: `${currentLocation.longitude}`;"
    />

    <a-camera gps-camera rotation-reader> </a-camera>
  </a-scene>
</template>

<script>
export default {
  name: "AR",
  props: {
    currentLocation: Object
  }
};
</script>

<style></style>
