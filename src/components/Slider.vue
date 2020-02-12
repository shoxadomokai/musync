<template>
  <main class="slider-container">
    <div class="text">
      <h4>Gallery</h4>
      <h1>Worth a Thousand Words...</h1>
    </div>
    <img class="phone" src="../assets/slider/iPhone.png" alt />
    <carousel-3d
      :controls-visible="true"
      :width="280"
      :height="488"
      :space="200"
      :display="5"
      :loop="true"
    >
      <slide class="slide" :key="n" v-for="n in 6" :index="n - 1">
        <img :src="require(`../assets/slider/0${n}.jpg`)" alt />
      </slide>
    </carousel-3d>
  </main>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style scoped>
.slider-container {
  max-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(253, 111, 77, 1) 0%,
    rgba(222, 88, 165, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 5vw;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.slider-container .text {
  /* margin-bottom: 5rem; */
  padding: 3rem 5vw;
  color: white;
}
.slider-container .text h4 {
  margin: 15px;
}
.slider-container .text h1 {
  font-size: 2rem;
}
img.phone {
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 310px;
  height: auto;
  z-index: 50;
}
.slide img {
  position: absolute;
  top: 16px;
}
.carousel-3d-container {
  padding: 0;
  margin: 0;
  position: relative;
}
.carousel-3d-slide {
  background-color: transparent;
  border: none;
}
</style>
