<template>
  <main class="join">
    <img src="@/assets/black.svg" alt="musync logo" />
    <h1>Working with musync</h1>
    <p class="join__text">
      Musync is a personal project by Shox Adomokai. The service is built with
      VueJS and NodeJS. It is my plan to make it opensource so everyone who
      believes in the project can contribute to it.
    </p>
    <ul class="social-list">
      <li class="social-list__items twitter">
        <a
          href="https://twitter.com/azterikcz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Twitter</h3>
          <div class="cta-text">
            <p>
              @azterikcz
              <br />
              <br />Follow Me
            </p>
          </div>
        </a>
      </li>
      <li class="social-list__items linkedin">
        <a
          href="https://www.linkedin.com/in/peter-adomokai-4a674385/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>LinkedIn</h3>
          <div class="cta-text">
            <p>
              peter-adomokai
              <br />
              <br />Connect with Me
            </p>
          </div>
        </a>
      </li>
      <li class="social-list__items behance">
        <a
          href="https://www.behance.net/ShoxAdomokai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Behance</h3>
          <div class="cta-text">
            <p>
              ShoxAdomokai
              <br />
              <br />Appreciate
            </p>
          </div>
        </a>
      </li>
      <li class="social-list__items github">
        <a
          href="https://github.com/shoxadomokai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Github</h3>
          <div class="cta-text">
            <p>
              shoxadomokai
              <br />
              <br />Follow Me
            </p>
          </div>
        </a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.join {
  padding: 10rem 5vw;
  text-align: center;
}
.join img {
  width: 20%;
}
.join h1 {
  font-size: 4rem;
  padding: 1rem 0;
}
.join p.join__text {
  font-size: 1rem;
  padding: 1rem 0;
  width: 60%;
  margin: auto;
}
.join ul.social-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  text-align: center;
}
.join ul.social-list li.social-list__items {
  margin: 2rem 2rem;
  cursor: pointer;
}
.join ul.social-list li.social-list__items a {
  text-decoration: none;
  color: inherit;
}
.join ul.social-list li.social-list__items .cta-text {
  margin: 0.5rem 0;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1rem;
  height: 33.3%;
}
.join ul.social-list li.social-list__items .cta-text p {
  transition: 0.2s transform ease;
}
.join ul.social-list li.social-list__items h3 {
  color: var(--secondary-color);
}
.join ul.social-list li.social-list__items:hover h3 {
  color: #333;
}
.join ul.social-list li.social-list__items:hover .cta-text p {
  transform: translateY(-2rem);
}
@media screen and (max-width: 1200px) {
  .join p {
    width: 100%;
    font-size: 1.2rem;
  }
}
</style>
