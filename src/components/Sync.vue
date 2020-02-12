<template>
  <main>
    <div class="two-column">
      <div class="two-column__text">
        <h1>
          Sync your
          <br />
          <span>favourite playlists...</span>
        </h1>
        <p>
          Keep your playlists updated automatically accross all your music
          platforms. Never lose access to the songs you love
        </p>
      </div>
      <div class="two-column__image">
        <img src="@/assets/streaming_tiles.png" alt />
      </div>
    </div>
    <div class="three-column">
      <article class="content">
        <div data-text="01" class="box">
          <!-- <h2>01</h2> -->
          <div class="heading">
            <div class="icon">
              <img src="@/assets/integrate.svg" alt />
            </div>
            <h4>Integrate</h4>
          </div>
          <p>
            Transfer playlists, albums, artists or tracks between all streaming
            services.
          </p>
        </div>
      </article>
      <article class="content">
        <div data-text="02" class="box">
          <!-- <h2>02</h2> -->
          <div class="heading">
            <div class="icon">
              <img src="@/assets/synchronize.svg" alt />
            </div>
            <h4>Synchronise</h4>
          </div>
          <p>
            Keep playlists automatically synchronized between streaming
            platforms
          </p>
        </div>
      </article>
      <article class="content">
        <div data-text="03" class="box">
          <!-- <h2>03</h2> -->
          <div class="heading">
            <div class="icon">
              <img src="@/assets/automate.svg" alt />
            </div>
            <h4>Automate</h4>
          </div>
          <p>
            Transfer playlists, albums, artists or tracks between all streaming
            services.
          </p>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  min-height: 100vh;
  background-color: #27282c;
  color: #797979;
}
.two-column {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  overflow: hidden;
  padding: 0rem 3rem;
  margin-bottom: 8rem;
}
.two-column__text {
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.two-column__text h1 {
  font-size: 3rem;
  padding: 1rem 0;
  padding-top: 10rem;
  color: white;
  position: relative;
  z-index: 2;
}
.two-column__text h1::before {
  content: "";
  position: absolute;
  background-image: url("../assets/ellipses.png");
  background-size: contain;
  height: 8rem;
  width: 8rem;
  bottom: 1.6rem;
  left: -4rem;
  z-index: -1;
}
.two-column__text h1 > span {
  position: relative;
  z-index: 1;
}
.two-column__text h1 > span::before {
  position: absolute;
  height: 1.2rem;
  width: 100%;
  bottom: 2px;
  z-index: -1;
  background-image: url("../assets/spectrum.svg");
  background-position: left bottom 5px;
  background-size: 50vw 0.2em;
  background-position-x: var(--scrollPos);
  content: "";
}
.two-column__text p {
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 1rem 0;
}
.two-column__image {
  width: 100%;
  min-width: 50vw;
}
.two-column__image > img {
  width: 100%;
}
.three-column {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 0rem 9vw;
  padding-bottom: 5vw;
}
.box {
  position: relative;
  margin: 2rem 0;
}
.box:before {
  font-size: 5rem;
  position: absolute;
  right: 2rem;
  top: -1rem;
  content: attr(data-text);
  font-weight: 800;
  color: var(--tertiary-color);
  opacity: 0.1;
  transition: 0.5s ease;
}
.box h4 {
  font-size: 20px;
  transition: 0.5s ease;
  color: var(--tertiary-color);
}
.box .heading {
  display: flex;
  margin-bottom: 10px;
  height: 40px;
  align-items: center;
}
.box .heading .icon {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: linear-gradient(145deg, #232428, #2a2b2f);
  box-shadow: 5px 5px 10px #191a1d, -5px -5px 10px #35363b;
  margin-right: 2rem;
  display: grid;
  place-items: center;
}
.icon img {
  width: 20px;
  height: auto;
}
.content .box p {
  line-height: 1.5;
  transition: 0.5s ease;
  font-size: 1.3rem;
}
.content:hover .box p {
  margin-bottom: 30px;
  color: white;
}
@media screen and (max-width: 1000px) {
  .two-column {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, 1fr);
  }
  .two-column__text {
    margin: 0;
    padding: 0;
  }
}
</style>
