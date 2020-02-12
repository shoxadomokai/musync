<template>
  <main>
    <section class="one-column__text">
      <h1>
        Lose yourself to over
        <br />
        <span>60million</span> songs
      </h1>
      <div class="buttons">
        <img
          class="app-button"
          src="../assets/google-badge.png"
          alt="playstore logo"
        />
        <img
          class="app-button"
          src="../assets/apple-badge.png"
          alt="apple logo"
        />
      </div>
    </section>
    <div class="one-column__image">
      <img src="@/assets/girl.png" alt />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  background-color: #f49ac1;
  padding: 8rem 9vw;
  padding-bottom: 0;
  text-align: center;
  background-image: url("../assets/waves.svg");
  /* background-size: cover; */
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.one-column__text {
  margin-bottom: 5rem;
}
.one-column__text h1 {
  font-size: 4rem;
  position: relative;
  z-index: 2;
}
.one-column__text h1 > span {
  position: relative;
  z-index: 1;
}
.one-column__text h1 > span::before {
  position: absolute;
  height: 1.2rem;
  width: 100%;
  bottom: 10px;
  z-index: -1;
  background-image: url("../assets/spectrum.svg");
  background-position: left bottom 5px;
  background-size: 50vw 0.2em;
  background-position-x: var(--scrollPos);
  content: "";
  transition: 0.3s height;
}
.one-column__image {
  width: 100%;
}
.one-column__image img {
  width: 50%;
  margin-bottom: -5px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.buttons > img {
  margin: 0.5rem;
}
img.app-button {
  height: 4rem;
  cursor: pointer;
}
@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4) and (orientation: portrait) {
  .one-column__image img {
    width: 100%;
    margin-bottom: -5px;
  }
}
</style>
