import { createApp } from 'vue'
import App from './App.vue'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee, faGlobe,
  faExternalLinkAlt, faPhone, faPrint, faMapMarker, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faGithubSquare, faLinkedin, faGlobe, faGithub, faExternalLinkAlt, faPhone, faPrint, faMapMarker, faEnvelope);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
