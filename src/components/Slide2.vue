<template>
  <section id="profile">
    <div class="team-member">
      <div class="team-member_text">
        <h1 class="team-member__name">
          Join Our
          <br />Team
        </h1>
        <p class="team-member__description">
          This project is opensource and will require the help of you and other
          likeminded individuals to make it possible.
          <br />
          <br />So we have left a free space in the teams page just for you.
          Help us win championships.
        </p>
        <div class="team-member__funfacts">
          <div class="fact">
            <p>Age:</p>
            <h1>Tell Us</h1>
          </div>
          <div class="fact">
            <p>Height:</p>
            <h1>Tell Us</h1>
          </div>
          <div class="fact">
            <p>Total Experience:</p>
            <h1>Tell Us</h1>
          </div>
        </div>
      </div>

      <div class="team-member__image">
        <img src="../assets/teams/02.png" alt="picture of spider-man" />
      </div>

      <div class="team-member__stats">
        <article class="stat">
          <p>Design</p>
          <h1>??</h1>
        </article>
        <article class="stat">
          <p>UI/UX?</p>
          <h1>??</h1>
        </article>
        <article class="stat">
          <p>Development</p>
          <h1>??</h1>
        </article>
        <article class="stat">
          <p>Content Writing</p>
          <h1>??</h1>
        </article>
        <article class="stat">
          <p>Marketing</p>
          <h1>??</h1>
        </article>
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

<style scoped></style>
