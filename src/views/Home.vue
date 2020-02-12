<template>
  <div class="home">
    <Hero />
    <Sync />
    <LoseYourself />
    <Devices />
    <Slider />
    <Join id="about" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Sync from "@/components/Sync.vue";
import LoseYourself from "@/components/LoseYourself.vue";
import Devices from "@/components/Devices.vue";
import Slider from "@/components/Slider.vue";
import Join from "@/components/Join.vue";

export default {
  name: "home",
  components: {
    Hero,
    Sync,
    LoseYourself,
    Devices,
    Slider,
    Join
  }
};
</script>
