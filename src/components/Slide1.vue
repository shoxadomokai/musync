<template>
  <section id="testProfile">
    <div class="name-background">
      <h1 class="first-name">Shox <br /><span>Adomokai</span></h1>
    </div>
    <div class="profile-grid">
      <div class="image">
        <img src="../assets/teams/01.png" alt="picture of spider-man" />
        <!-- <h1>IMAGE GOES HERE</h1> -->
      </div>
      <div class="text">
        <div class="info">
          <h1 class="name">Shox Adomokai</h1>
          <h2 class="job">DIGITAL STRATEGIST</h2>
          <p class="about">
            Shox is a digital strategist who loves all things design and
            development. He likes to be part of the creative process that brings
            new ideas to life as well as part of the execution. He is also
            passionate about charity work and is involed in several charitable
            organisations.
          </p>
        </div>
        <div class="achievements">
          <h2 class="achievements__header">Achievements</h2>
          <ul class="achievements-list">
            <li class="achievements-list-items">
              Leadership role in the team that grew our reach from 10,000 kids
              in 2017 to 7000+ kids in 2019.
            </li>
            <li class="achievements-list-items">
              Advised companies as a digital strategist about the benefits of
              emerging technologies in employee and customer satisfcation.
            </li>
            <li class="achievements-list-items">
              Brand Strategist at Corporate Luxury.
            </li>
            <li class="achievements-list-items">
              Successfully designed and deployed websites for clients as a
              freelance software developer
            </li>
          </ul>
        </div>
        <div class="stats">
          <div class="donut-chart"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    date(yearStarted) {
      let currentYear = new Date().getFullYear();
      currentYear = parseInt(currentYear, 10);
      return (
        currentYear -
        yearStarted +
        " " +
        (currentYear - yearStarted < 2 ? "year" : "years")
      );
    }
  }
};
</script>

<style scoped>
#testProfile {
  /* min-height: 900px; */
  padding: 10vh 17vw;
  position: relative;
}
#testProfile .name-background h1 {
  font-family: "Montserrat";
  font-size: 12.36vw;
  color: rgba(255, 255, 255, 0.04);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.63rem;
}
#testProfile .name-background h1 span {
  text-align: right;
  display: block;
}

#testProfile .profile-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 17vw;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
#testProfile .profile-grid .image img {
  max-height: 100vh;
  height: auto;
  width: 100%;
}
#testProfile .profile-grid .text {
  padding: 7.5rem 0;
  max-height: 100vh;
}
#testProfile .profile-grid .info .name {
  color: white;
  font-size: 2.25rem;
}
#testProfile .profile-grid .info .job {
  color: var(--secondary-color);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
#testProfile .profile-grid .info .about {
  color: #c0a9e2;
  font-size: 0.85rem;
  font-weight: 400;
}
.achievements {
  margin: 2rem 0;
}
.achievements__header {
  font-size: 1rem;
  color: var(--secondary-color);
}
.achievements-list {
  list-style: none;
  margin: 0.5rem 0;
  color: #c0a9e2;
  font-size: 0.8rem;
}
.achievements-list-items {
  position: relative;
  margin: 0.5rem;
  margin-left: 2rem;
}
.achievements-list-items:before {
  position: absolute;
  content: "";
  width: 0.8rem;
  height: 0.8rem;
  background-image: url("../assets/achievement-tick.svg");
  background-size: contain;
  background-repeat: no-repeat;
  left: -2rem;
  top: 3px;
}
@media screen and (max-width: 1024px) {
  #testProfile .profile-grid .image {
    margin: auto;
    text-align: center;
  }
  #testProfile .profile-grid .image img {
    width: 80%;
    text-align: center;
  }
  #testProfile .profile-grid {
    padding: 0;
  }
  #testProfile .profile-grid .text {
    padding: 5rem;
  }
  #testProfile .name-background h1 {
    font-size: 10vh;
    writing-mode: vertical-rl;
    letter-spacing: 2;
  }
}
</style>
