<template>
  <main>
    <section class="intro">
      <div class="intro-header">
        <h4>MEET</h4>
        <p>THE</p>
        <h4>TEAM</h4>
      </div>
    </section>
    <section class="intro-text">
      <div class="intro-text__icon">
        <img src="../assets/Arrow.svg" alt />
      </div>
      <p class="intro-text__subtitle">WE ALL NEED TEAMS</p>
      <div class="intro-text__quote">
        <span class="intro-text__quote-quotation">""</span>
        <h1 class="intro-text__quote-description">
          Talent wins games, but teamwork and intelligence win championships.
        </h1>
        <p class="intro-text__quote-author">- Michael Jordan</p>
        <a class="intro-text__quote-button" href="#"
          >Help us win championships</a
        >
      </div>
    </section>
    <TeamSlider />
  </main>
</template>

<script>
import TeamSlider from "@/components/TeamSlider";
export default {
  components: {
    TeamSlider
  }
};
</script>

<style scoped>
.intro {
  height: 90vh;
  background-image: url("../assets/team-bg.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.intro-header {
  margin: 3rem;
  font-size: 15rem;
  letter-spacing: 8rem;
  color: rgba(0, 0, 0, 0.1);
  font-weight: 900;
}
.intro-header p {
  font-size: 3rem;
}
.intro-text {
  text-align: center;
  padding: 3rem;
  position: sticky;
  top: 0;
  min-height: 120vh;
}
.intro-text__icon {
  margin-top: -20vh;
}
p.intro-text__subtitle {
  margin: 2rem 0;
  font-weight: 900;
  letter-spacing: 1.5;
}
.intro-text__quote {
  margin: 3rem 0;
}
span.intro-text__quote-quotation {
  font-size: 9.1875rem;
  font-weight: 900;
  line-height: 1;
  position: relative;
}
span.intro-text__quote-quotation::before,
span.intro-text__quote-quotation::after {
  content: "";
  height: 3px;
  width: calc(50vw - 3rem - 9.1875rem);
  background-color: black;
  position: absolute;
  top: calc(9.1875rem / 2.5);
}
span.intro-text__quote-quotation::after {
  left: calc(9.1875rem + 2rem);
}
span.intro-text__quote-quotation::before {
  right: calc(9.1875rem + 2rem);
}
h1.intro-text__quote-description {
  font-size: 2.625rem;
  font-weight: 900;
  font-family: "Montserrat";
}
p.intro-text__quote-author {
  font-size: 1rem;
  margin: 3.75rem;
  font-style: italic;
  margin-bottom: calc(3.75rem + 3rem);
}
.intro-text__quote-button {
  text-decoration: none;
  color: white;
  padding: 2rem 3.88rem;
  background-color: var(--secondary-color);
  font-weight: bold;
  margin: 3rem;
  position: relative;
  transition: 0.2s all ease;
  border: 5px solid transparent;
}
.intro-text__quote-button:before,
.intro-text__quote-button:after {
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
.intro-text__quote-button:hover {
  border: 5px solid var(--secondary-color);
  background-color: transparent;
  color: #333;
}
.intro-text__quote-button:hover:before,
.intro-text__quote-button:hover:after {
  position: absolute;
  content: "";
  height: 70%;
  width: 5px;
  background-color: white;
  top: 50%;
}
.intro-text__quote-button:hover:before {
  left: -5px;
  transform: translateY(-50%);
}
.intro-text__quote-button:hover:after {
  left: 100%;
  transform: translateY(-50%);
}
</style>
