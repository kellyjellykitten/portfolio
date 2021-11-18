<template>
  <body class="text-center">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Navbar />
      <About />
      <Resume />
      <Projects />
    </div>
  </body>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Resume,
    Projects
  }
}
</script>

<style>
</style>

