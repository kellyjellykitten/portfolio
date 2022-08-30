<template>
    <section>
        <div class="about">
            <!-- Name -->
            <h2 class="name">
                {{ profile.firstname }}
                <span class="lastname"> {{ profile.lastname }}</span>
            </h2>
            <!-- Contact -->
            <section class="contact">
                <p class="content">
                    <a class="small-icon" href="https://goo.gl/maps/NX5MMQkGjWT8okNV8" title="Location" target="_blank"><font-awesome-icon icon="map-marker" /></a>
                    <span> {{ profile.location }} </span>
                    <!-- <span>&#8226;</span> -->
                </p>
                <p class="content">
                    <a class="small-icon" href="tel:352-682-1895" title="Phone" target="_blank"><font-awesome-icon icon="phone" /></a>
                    <span> {{ profile.phone }} </span>
                </p>
                <p class="content">
                    <a class="small-icon" href="mailto:kellybackwards@gmail.com" title="Email" target="_blank"><font-awesome-icon icon="envelope" /></a>
                    <span> {{ profile.email }} </span>
                </p>
                <br>
            </section>
            <!-- Summary -->
            <section class="summary">
                <p class="summary">{{ profile.summary }}</p>
                <br>
            </section>
            <!-- Links -->
            <section class="links">
                <a class="icon" :href="profile.github" title="GitHub" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
                <a class="icon" :href="profile.linkedin" title="LinkedIn" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                <a class="icon" @click="print" title="Print"><font-awesome-icon icon="print" /></a>
            </section>
        </div>
        <!-- Printer friendly About section -->
        <div class="about--printer-friendly">
            <h1>{{ profile.firstname }} {{ profile.lastname }}</h1>   
            <p><font-awesome-icon icon="map-marker" />  {{ profile.location }}</p>     
            <p><font-awesome-icon icon="phone" />  {{ profile.phone }}</p>
            <p><font-awesome-icon icon="envelope" />  {{ profile.email }}</p>
            <p><font-awesome-icon :icon="['fab', 'github']" />  {{ profile.github }}</p>
            <p><font-awesome-icon :icon="['fab', 'linkedin']" />  {{ profile.linkedin }}</p>
            <hr>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'About',
        props: ['profile'],
        methods: {
            print() {
                window.print()
            }
        }
    }
</script>

<style>
    .about--printer-friendly {
        display: none;
    }
    .icon {
        border: 3px solid var(--main-color);
        border-radius: 50%;
        margin-right: 2rem;
        padding: 10px 15px;
        color: var(--main-color);       
        font-size: 2rem;
    }
    .small-icon {
        margin-right: 0.5rem;
        padding: 5px 10px;
        color: var(--main-color);       
        font-size: 1.25rem;
    }
    .icon:hover {
        background-color: var(--main-color-white);
        color: rgb(240, 235, 235);
    }
    .small-icon:hover {
        background-color: var(--main-color-white);
        color: rgb(240, 235, 235);
    }
    h2.name {
        color: var(--main-color-light);
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }
    p.content {
        color: var(--main-color-light);
    }
    p.summary {
        color: var(--main-color-light);
        max-width: 100ch;
    }
    @media print {
        p {
            margin: 0;
        }
        br {
            display: none;
        }
        .about {
            display: none;
        }
        .about--printer-friendly {
            display: inline;
            text-align: left;
        }
    }
  
</style>
