<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --primary-color: #fff568;
  --secondary-color: #6937b3;
  --tertiary-color: #c0a9e2;
  outline: none;
  border: none;
}
button {
  cursor: pointer;
  background: none;
}
.primary-button {
  background-color: black;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1rem;
  padding: 1.2rem 2rem;
  transition: 0.3s all ease;
  border: 5px solid transparent;
  position: relative;
  min-height: 4rem;
}
.primary-button:before,
.primary-button:after {
  position: absolute;
  content: "";
  height: 70%;
  width: 5px;
  background-color: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s all ease;
}
.primary-button:hover {
  border: 5px solid black;
  background-color: transparent;
  color: #333;
}
.primary-button:hover:before {
  position: absolute;
  content: "";
  height: 70%;
  width: 5px;
  background-color: var(--primary-color);
  top: 50%;
  left: -5px;
  transform: translateY(-50%);
}
.primary-button:hover:after {
  position: absolute;
  content: "";
  height: 70%;
  width: 5px;
  background-color: var(--primary-color);
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
}
.secondary-button {
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1rem;
  padding: 1.2rem 2rem;
  position: relative;
  z-index: 1;
  transition: 0.3s all ease;
  /* min-height: 4rem; */
}
.secondary-button:hover {
  color: var(--primary-color);
}
.secondary-button:hover::before {
  width: 100%;
}
.secondary-button::before {
  z-index: -1;
  transition: 0.3s all ease;
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 10px;
  background-color: var(--secondary-color);
}
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3 {
  font-family: PrimaryFont;
}

@font-face {
  font-family: PrimaryFont;
  src: url("assets/fonts/MontserratAlternates-Medium.otf");
}
@media screen and (max-width: 500px) {
  html {
    font-size: 62.5%;
  }
}
</style>
