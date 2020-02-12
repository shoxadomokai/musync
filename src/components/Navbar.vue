<template>
  <main>
    <nav :class="{ active: isActive }">
      <ul @click="isActive = false">
        <li>
          <router-link tag="a" to="/" data-text="Home">Home</router-link>
        </li>
        <li>
          <router-link tag="a" to="/about" data-text="About">About</router-link>
        </li>
        <li>
          <router-link tag="a" to="/team" data-text="Team">Team</router-link>
        </li>
        <li>
          <router-link tag="a" to="/contact" data-text="Contact"
            >Contact</router-link
          >
        </li>
      </ul>
      <SocialMedia class="socialMedia" />
    </nav>
    <div class="navigation">
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
      <span
        class="hamburger"
        @click="isActive = !isActive"
        :class="{ active: isActive }"
      >
        <div class="line"></div>
      </span>
    </div>
  </main>
</template>

<script>
import SocialMedia from "@/components/SocialMedia";
export default {
  components: {
    SocialMedia
  },
  data() {
    return {
      isActive: false
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      let winScroll = document.scrollingElement.scrollTop;
      let height =
        document.scrollingElement.scrollHeight -
        document.scrollingElement.clientHeight;
      let scrolled = (winScroll / height) * 100 + "%";
      document.documentElement.style.setProperty("--scrollProgress", scrolled);
    });
  }
};
</script>

<style scoped>
.router-link-exact-active {
  color: var(--secondary-color);
  position: relative;
}
.router-link-exact-active:after {
  content: "You are Here:";
  font-size: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.1rem;
  color: #333;
  font-weight: 300;
  width: 100%;
  /* bottom: 0rem; */
  /* transform: translateY(50%); */
  /* left: 10px; */
}
.hamburger {
  cursor: pointer;
  transition: 0.3s all ease;
  width: 30px;
  height: 30px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
}
.line {
  width: 30px;
  background-color: black;
  height: 0.2rem;
  position: relative;
  opacity: 1;
  transform: rotate(0);
  transition: 0.5s all ease;
}
.hamburger:hover .line {
  background-color: var(--secondary-color);
}
.line:before,
.line:after {
  transition: 0.5s all ease;
  width: inherit;
  background-color: inherit;
  height: 0.2rem;
  content: "";
  position: absolute;
}
.line:after {
  top: -0.5rem;
}
.line:before {
  top: 0.5rem;
}
.active.hamburger .line {
  background-color: transparent;
}
.active.hamburger .line:after {
  background-color: var(--secondary-color);
  transform: rotate(45deg);
  top: 0;
}
.active.hamburger .line:before {
  background-color: var(--secondary-color);
  transform: rotate(-45deg);
  top: 0;
}
.navigation {
  padding: 0 3rem;
  position: fixed;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  z-index: 99999;
  height: 4vh;
}
.navigation .progress {
  height: 100%;
  width: calc(50vw - 6rem);
  background-color: black;
  position: relative;
}
.progress-bar {
  height: 100%;
  width: var(--scrollProgress);
  background-color: var(--secondary-color);
  position: absolute;
  top: 0;
  left: 0;
}
nav.active {
  height: 100vh;
}
nav {
  height: 0;
  width: 100vw;
  position: fixed;
  background-color: var(--primary-color);
  z-index: 1000;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: 0.6s height ease;
}
nav ul {
  position: relative;
}
nav ul li {
  text-align: center;
  list-style: none;
}
nav ul li a {
  font-size: 3rem;
  text-decoration: none;
  color: #333;
  padding: 1rem 20px;
  display: inline-flex;
  font-weight: 700;
  transition: 0.5s;
}
nav ul:hover li a {
  color: #0002;
  position: relative;
}
nav ul li:hover a {
  color: var(--secondary-color);
}
nav ul li a:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: rgb(0, 0, 0, 0.1);
  border-radius: 50%;
  /* z-index: 0; */
  opacity: 0;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 500px;
  transition: 0.5s letter-spacing, left 0.5s;
}
nav ul li a:hover:before {
  content: attr(data-text);
  opacity: 1;
  letter-spacing: 10px;
  left: 50%;
}
.socialMedia {
  position: absolute;
  bottom: 2rem;
  text-align: center;
}
</style>
