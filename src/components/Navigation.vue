<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <!-- Desktop -->
            <ul v-show="!mobile" class="navigation">
                <div class="avatar" @click="toggleEclipse">
                    <img v-if="!eclipseMode" :src="data.avatar_url" alt="Profile picture" title="Click to see my cat!" />
                    <img v-if="eclipseMode" src="https://i.ibb.co/gdX0QT6/avatar.jpg" alt="My cat, Eclipse" title="Click again to go back to my picture!" />
                </div>
                <br>
                <h4>Toggle Dark Mode</h4>
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox">
                            <input type="checkbox" @change="check" id="checkbox" />
                            <div class="slider round"></div>
                        </label>
                    </div>
                <br>
                <!-- About -->
                <li class="nav-item">
                    <a class="link" href="#about">About</a>
                </li>
                <!-- Experience -->
                <li class="nav-item">
                    <a class="link" href="#experience">Experience</a>
                </li>
                <!-- Education -->
                <li class="nav-item">
                    <a class="link" href="#education">Education &amp; Skills</a>
                </li>
                <!-- Projects -->
                <li class="nav-item">
                    <a class="link" href="#projects">Projects</a>
                </li>
                <br>
                <a href="https://github.com/kellyjellykitten/portfolio" target="_blank" title="Source Code">Source Code</a>
            </ul>
            <!-- Mobile -->
            <div id="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" id="dropdown-nav">
                    <!-- About -->
                    <li class="nav-item">
                        <a class="link" href="#about">About</a>
                    </li>
                    <!-- Experience -->
                    <li class="nav-item">
                        <a class="link" href="#experience">Experience</a>
                    </li>
                    <!-- Education -->
                    <li class="nav-item">
                        <a class="link" href="#education">Education &amp; Skills</a>
                    </li>
                    <!-- Projects -->
                    <li class="nav-item">
                        <a class="link" href="#projects">Projects</a>
                    </li>
                </ul>
            </transition>
        </nav>    
    </header>
</template>

<script>
import kelly from '../data/kelly-resume.json';
export default {
    name: 'Navigation',
    data() {
        return {
            data: kelly,
            darkMode: false,
            eclipseMode: false,
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
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
        },
        toggleMobileNav() {
            console.log('clicked bars')
            this.mobileNav = !this.mobileNav
        },
        updateScroll() {
            const scrollPosition = window.scrollY
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return
            }
            this.scrolledNav = false
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return
            }
            this.mobile = false;
            this.mobileNav = false;
            return
        }
    }
}
</script>

<style scoped>

header {
    display: flex;
    justify-content: center;
}

nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex;
    text-align: center;
    padding: 0;
}
nav li a {
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--main-color-light);
    margin: 20px;
}
nav li a:active {
    color: white;
}
nav li a:hover {
    color: var(--main-color-white);
}
.link {
    display: block;
    padding: 1px 15px;
}
.navigation  {
    padding-top: 2rem;
    min-width: 300px;
    z-index: 1;
    box-shadow: 5px 0 12px gray;
    text-align: center;
    min-height: 100%;
  }
#icon {
    padding: 10px 10px 10px;
    align-items: center;
    display: flex;
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
}
.icon-active {
    transform: rotate(180deg)
}
#dropdown-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px;
    height: 100%;
    top: 0;
    bottom: 0;
    color: var(--main-color-light);
    z-index: 1;      
    box-shadow: 0 2px 10px gray;
}
#dropdown-nav li {
    color: red;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}
.mobile-nav-enter-to {
    transform: translateX(0);
}
.scrolled-nav {
    background-color: radial-gradient(circle at bottom, var(--main-color-medium), var(--main-color));
    box-shadow: 5px 0 12px gray;
}
</style>


