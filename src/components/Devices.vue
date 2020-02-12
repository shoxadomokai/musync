<template>
  <main class="devices">
    <div class="column" id="laptop">
      <div class="text">
        <h4>Desktop</h4>
        <h1>
          See More. Do More.
          <br />Hear More
        </h1>
        <button class="learn-button">Learn More</button>
      </div>
      <img src="../assets/laptop.png" alt="laptop view" />
    </div>
    <div class="column" id="mobile">
      <img src="../assets/mobile.png" alt="mobile view" />
      <div class="text">
        <h4>Mobile</h4>
        <h1>
          The music you love.
          <br />On the go
        </h1>
        <button class="learn-button">Learn More</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main.devices {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 3vw;
}
.column {
  width: 100%;
  text-align: center;
  background-color: #fafafa;
}
.column h4 {
  margin: 5rem 0 1rem 0;
}
.column h1 {
  margin: 1rem 0;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 500;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
}
.column .text {
  margin-bottom: 5rem;
}
#mobile img {
  width: 30%;
}
#laptop img {
  width: 50%;
}
.learn-button {
  color: var(--secondary-color);
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  position: relative;
  z-index: 1;
  transition: 0.3s all ease;
}
.learn-button:hover {
  color: white;
}
.learn-button:hover::before {
  width: 100%;
}
.learn-button::before {
  z-index: -1;
  transition: 0.3s all ease;
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background-color: var(--secondary-color);
}
</style>
