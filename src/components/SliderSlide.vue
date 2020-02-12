<template>
  <transition :name="transition">
    <div v-show="active" class="SliderSlide">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      transition: ""
    };
  },
  methods: {
    // Deactivate and hide the slide and
    // also activate the correct transition.
    hide(direction) {
      this.transition = `SliderSlide--transition-${direction}`;
      this.active = false;
    },
    // Activate and show the slide and
    // also activate the correct transition.
    show(direction) {
      this.transition = `SliderSlide--transition-${direction}`;
      this.active = true;
    }
  }
};
</script>

<style>
.SliderSlide--transition-left-enter-active,
.SliderSlide--transition-left-leave-active,
.SliderSlide--transition-right-enter-active,
.SliderSlide--transition-right-leave-active {
  transition-duration: 2s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
  width: 100%;
}

.SliderSlide--transition-left-leave-active,
.SliderSlide--transition-right-leave-active {
  top: 0;
  position: absolute;
}

.SliderSlide--transition-left-enter,
.SliderSlide--transition-right-leave-active {
  opacity: 0;
  transform: translate(100vw, 0);
}
.SliderSlide--transition-left-leave-active,
.SliderSlide--transition-right-enter {
  opacity: 0;
  transform: translate(-100vw, 0);
}

#profile {
  min-height: 100vh;
  position: relative;
  z-index: 0;
}
#profile:before {
  content: "";
  position: absolute;
  left: 0;
  width: 10vw;
  height: 100%;
  background-color: var(--secondary-color);
  z-index: -1;
}
.team-member {
  display: grid;
  padding: 0 5rem;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, auto)); */
  grid-template-columns: 1fr 1fr auto;
  grid-gap: 2rem;
}
.team-member_text {
  margin: 8rem 0;
  width: fit-content;
}
.team-member_text h1.team-member__name {
  font-size: 5rem;
  font-weight: 900;
  color: white;
  line-height: 1;
  text-transform: uppercase;
  /* font-family: "Montserrat"; */
}
.team-member_text p.team-member__description {
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
  padding: 2rem 0;
  color: #9da3a6;
  text-align: justify;
}
.team-member_text .team-member__funfacts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1rem;
  padding: 2rem 0;
  color: white;
}
.team-member_text .team-member__funfacts .fact p {
  font-size: 0.8rem;
}
.team-member_text .team-member__funfacts .fact h1 {
  font-size: 2rem;
}
.team-member__image img {
  /* min-width: 40vw; */
  /* width: 100%; */
  text-align: center;
  height: auto;
  max-height: 100vh;
}
.team-member__stats {
  padding: 8rem 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  text-align: right;
  color: white;
}
.team-member__stats h1 {
  font-size: 1.3rem;
}
.team-member__stats p {
  font-size: 0.8rem;
}
@media screen and (max-width: 1300px) {
  #profile:before {
    width: 20vw;
  }
  .team-member_text {
    padding: 0 3rem;
  }
  .team-member {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
  .team-member__stats {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    grid-column: span 2;
    justify-content: space-evenly;
    text-align: center;
    color: white;
  }
}
@media screen and (max-width: 800px) {
  #profile:before {
    background-color: transparent;
  }
  .team-member_text {
    position: relative;
    z-index: 0;
  }
  .team-member_text:before {
    content: "";
    position: absolute;
    left: 0;
    width: 10vw;
    height: 100%;
    background-color: var(--secondary-color);
    z-index: -1;
  }
}
@media screen and (max-width: 500px) {
  .team-member_text p.team-member__description {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  .team-member__stats {
    grid-column: span 1;
  }
  .team-member__stats .stat {
    padding: 1rem;
  }
  .team-member__stats h1 {
    font-size: 1.6rem;
  }
  .team-member__stats p {
    font-size: 1.2rem;
  }
}
</style>
