<template>
  <SliderFrame>
    <div slot-scope="{ next, prev, activeIndex, goToIndex }">
      <Slide class="bg">
        <div class="tabs">
          <div
            :title="team[n - 1]"
            :key="n"
            v-for="n in 2"
            class="tab"
            @click="goToIndex(n - 1)"
            :class="{ active: activeIndex === n - 1 }"
          >
            <img
              width="60px"
              :src="require(`../assets/teams/thumbnails/0${n}.jpg`)"
              alt="avatar"
            />
          </div>
        </div>
        <slider-slide>
          <slide-1 />
        </slider-slide>
        <slider-slide>
          <slide-2 />
        </slider-slide>
      </Slide>
    </div>
  </SliderFrame>
</template>

<script>
import SliderFrame from "@/components/SliderFrame";
import Slide from "@/components/Slide.vue";
import SliderSlide from "@/components/SliderSlide.vue";
import Slide1 from "@/components/Slide1.vue";
import Slide2 from "@/components/Slide2.vue";

export default {
  components: {
    SliderFrame,
    Slide,
    Slide1,
    Slide2,
    SliderSlide
  },
  data() {
    return {
      team: ["Shox Adomokai", "New Member"]
    };
  }
};
</script>

<style scoped>
.bg {
  background-color: #27323a;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.tabs {
  position: absolute;
  bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
}
.tab {
  height: calc(100vw / 10);
  width: calc(100vw / 10);
  max-height: 60px;
  max-width: 60px;
  background-size: cover;
  filter: grayscale(100%);
  cursor: pointer;
  transition: 0.3s all ease;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}
.tab:hover {
  filter: grayscale(0);
}
.active {
  border: 0.2rem solid var(--secondary-color);
  filter: grayscale(0);
  transform: scale(1.1);
  transition: 0.3 all ease;
  border-radius: 5px;
  z-index: 999;
}
</style>
