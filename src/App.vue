<template>
  <div id="app">
    
    <Navigation />
    
    <main id="resume">
      <div class="small-avatar" @click="toggleEclipse">
        <img v-if="!eclipseMode" :src="data.avatar_url" alt="Profile picture" title="Click to see my cat!" />
        <img v-if="eclipseMode" src="https://i.ibb.co/gdX0QT6/avatar.jpg" alt="My cat, Eclipse" title="Click again to go back to my picture!" />
      </div>
      <About id="about" :profile="data" />
      <br>
      <Experience id="experience" v-if="data.experience" :experience="data.experience" />
      <br>
      <Education id="education" v-if="data.education" :schools="data.education" :skills="data.skills" />
      <br>
      <Projects id="projects" v-if="data.projects" :projects="data.projects" />
    </main>
  </div>
</template>

<script>
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Navigation from './components/Navigation.vue'

import kelly from './data/kelly-resume.json';

export default {
  name: 'App',
  components: {
    About,
    Experience,
    Education,
    Projects,
    Navigation
  },
  data() {
    return {
      data: kelly,
      darkMode: false,
      eclipseMode: false,
    }
  },
  methods: {
    check(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    },
    toggleEclipse() {
      this.eclipseMode = !this.eclipseMode
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
  @import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

  :root {
      --main-color: #f3f3f3;
      --main-color-medium: #a6dbaf;
      --main-color-light: rgb(1, 5, 1);
      --main-color-white: rgb(42, 119, 71);
  }
  [data-theme="dark"] {
      --main-color: #2b352c;
      --main-color-medium: #516b56;
      --main-color-light: #d4e0d4;
      --main-color-white: #153a23;
  }
  a:hover {
    cursor: pointer;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    background: radial-gradient(circle at bottom, var(--main-color-medium), var(--main-color));
    margin: 0;
    background-attachment: fixed;
    font-family: 'Rubik', sans-serif;
    overflow: hidden;
  }
  header {
    display: flex;
    justify-content: center;
  }
  hr {
    display: none;
  }
 
  img {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
  h1, h2, h3, h4 {
    font-family: 'Rubik', sans-serif;
  }
  h2 {
    margin-top: 45px;
    font-weight: bold;
  }
  h3 {
    font-size: 130%;
  }
  h3, h4 {
    margin: 5px 0;
  }
  h4 {
    color: var(--main-color-light);
    font-size: 115%;
  }
  .avatar {
    border-radius: 50%;
    border: 5px solid var(--main-color-light);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
  }
  .date-range {
    /* color: var(--main-color); */
    font-size: 100%;
  }
  .small-avatar {
    display: none;
  }
  .link {
    display: block;
    padding: 1px 15px;
  }
  .toggle-mobile {
    display: none;
  }
  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }
  .theme-switch input {
    display:none;
  }
  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }
  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }
  input:checked + .slider {
    background-color: #66bb6a;
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  #app {
    display: flex;
    height: 100vh;
  }
  #resume {
    margin: 0;
    padding: 30px 60px 30px 60px;
    /* color: whitesmoke;
    background-color: rgb(1, 17, 8); */
    overflow-y: auto;
    flex: 1;
  }

  @media screen and (max-width: 750px) {
    header {
      justify-content: left;
    }
    hr {
      margin: 50px;
      color: lightgrey;
      display: block;
    }
    nav {
      margin-top: 5px;
    }
    h4 { 
      color: var(--main-color-light);
      font-size: 95%;
      text-align: center;
      margin-top: 10px;
    }

    .small-avatar {
      display: block;
      border-radius: 50%;
      border: 5px solid var(--main-color-light);
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
      position: relative;
      overflow: hidden;
      width: 150px;
      height: 150px;
      margin-top: 15px;
    }
    #app {
      flex-direction: column;
    }
    #resume {
      padding: 30px;
    }
  }

  @media print {    
    header, nav, footer {
      display: none;
    }
    a {
        text-decoration: none;
        color: black;
    }
    h2 {
      margin-bottom: 5px;
    }
    p, ul, h3, h4 {
      margin: 0;
      font-size: 10pt;
    }
    #resume {
      display: block;
      overflow: visible;
      height: 100%;
    }
  }
</style>

