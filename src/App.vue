<template>
  <div id="app">
    <header>
      <nav class="fullsize-navbar">
        <div class="avatar">
          <img :src="data.avatar_url" alt="Profile picture" />
        </div>
        <ul class="navbar-nav mr-auto">
          <!-- About -->
          <li class="nav-item">
            <a href="#about">About</a>
          </li>
          <!-- Experience -->
          <li class="nav-item">
            <a href="#experience">Experience</a>
          </li>
          <!-- Education -->
          <li class="nav-item">
            <a href="#education">Education</a>
          </li>
          <!-- Projects -->
          <li class="nav-item">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main id="resume">
            <About id="about" :profile="data" />
            <Experience id="experience" v-if="data.experience" :experience="data.experience" />
            <Education id="education" v-if="data.education" :schools="data.education" />
            <Projects id="projects" v-if="data.projects" :projects="data.projects" />
          </main>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'

import kelly from './data/kelly-resume.json';

export default {
  name: 'App',
  components: {
    About,
    Experience,
    Education,
    Projects
  },
  data() {
    return {
      data: kelly
    }
  }
}
</script>

<style scoped>
  a:hover {
    cursor: pointer;
  }
  header {
    
    justify-content: center;
  }
  .avatar {
    border-radius: 50%;
    border: 7.5px solid var(--main-color-light);
    margin: 0 auto;
    width: 200px;
    height: 200px;
  }
   .date-range {
    color: var(--main-color);
  }
  .fullsize-navbar  {
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  #app {
    margin: 0;
    text-align: center;
    color: white;
    background-color: rgb(1, 12, 1);
  }
</style>

