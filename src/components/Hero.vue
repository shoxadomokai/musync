<template>
  <main class="hero">
    <!-- <div class="black" style="background-color: black; width: 100%"></div>
    <div class="blue" style="background-color: blue; width: 100%"></div>-->
    <div class="hero__text">
      <div>
        <img src="@/assets/black.svg" alt="musync logo" />
        <h1>
          Listen to your favourite songs
          <span>anywhere</span>, anytime.
        </h1>
        <div class="buttons">
          <button class="primary-button">Start Listening Now</button>
          <button class="secondary-button">Learn More</button>
        </div>
        <SocialMedia />
      </div>
    </div>
    <div class="hero__image">
      <img src="@/assets/plant.png" alt="plant" />
    </div>
  </main>
</template>

<script>
import SocialMedia from "./SocialMedia";
export default {
  components: {
    SocialMedia
  },
  data() {
    return {
      scrollTop: ""
    };
  },
  methods: {
    scrollAnimation() {
      this.scrollTop = document.scrollingElement.scrollTop + "px";
      document.documentElement.style.setProperty("--scrollPos", this.scrollTop);
    }
  },
  created() {
    window.addEventListener("scroll", this.scrollAnimation);
  }
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background-color: var(--primary-color);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
  grid-gap: 1rem;
  overflow: hidden;
}
.hero__text {
  padding: 3rem 0 3rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.hero .hero__text img {
  height: 3rem;
  width: auto;
}
.hero .hero__text h1 {
  font-size: 4rem;
  padding: 1rem 0;
}
.hero .hero__text h1 > span {
  position: relative;
  z-index: 1;
}
.hero .hero__text h1 > span::before {
  position: absolute;
  height: 1rem;
  width: 100%;
  bottom: 10px;
  z-index: -1;
  background-image: url("../assets/spectrum.svg");
  background-position: left bottom 5px;
  background-size: 50vw 0.2em;
  background-position-x: var(--scrollPos);
  content: "";
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.buttons > button:not(:first-of-type) {
  margin: 0 1rem;
}
.buttons > button:first-of-type {
  margin: 2rem 0;
}
.hero__image {
  width: 100%;
  min-height: 60vh;
  margin: 3rem 0 0 0;
  background-image: url("../assets/hero-image.png");
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}
.hero__image img {
  position: absolute;
  right: 0;
  bottom: 0;
  height: auto;
  width: 75%;
}

/* responsive layout */
@media screen and (max-width: 1000px) {
  .hero__text {
    padding: 8rem 3rem;
    padding-bottom: 1rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
  }
  .hero__image {
    width: 100vw;
  }
}
</style>
