<template>
    <section>
        <div class="about">
            <!-- Name -->
            <h1 class="name">
                {{ profile.firstname }}
                <span class="lastname"> {{ profile.lastname }}</span>
            </h1>
            <!-- Contact -->
            <section class="contact">
                <span>{{ profile.location }} </span>
                <span>&#8226;</span>
                <span> {{ profile.phone }} </span>
                <span>&#8226;</span>
                <span> {{ profile.email }} </span>
            </section>
            <!-- Summary -->
            <section class="summary">
                <p>{{ profile.summary }}</p>
            </section>
            <!-- Links -->
            <section class="links">
                <a class="icon" :href="profile.github" title="GitHub"><font-awesome-icon :icon="['fab', 'github']" /></a>
                <a class="icon" :href="profile.linkedin" title="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            </section>
        </div>
        <!-- Printer friendly About section -->
        <div class="about--printer-friendly">
            <h1>{{ profile.firstname }} {{ profile.lastname }}</h1>        
            <p><font-awesome-icon icon="phone" />  {{ profile.phone }}</p>
            <p><font-awesome-icon icon="envelope" />  {{ profile.email }}</p>
            <p><font-awesome-icon :icon="['fab', 'github']" />  {{ profile.github }}</p>
            <hr>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'About',
        props: ['profile']
    }
</script>

<style>
    .about--printer-friendly {
        display: none;
    }
    .icon {
        border: 1px solid var(--main-color);
        border-radius: 50%;
        margin-right: 0.5rem;
        padding: 8px 10px;
        color: var(--main-color);       
        font-size: 1.25em;;
    }
    .icon:hover {
        background-color: var(--main-color);
        color: rgb(94, 88, 88);
    }
    @media print {
        p {
            margin: 0;
        }
        .about {
            display: none;
        }
        .about--printer-friendly {
            display: inline;
            text-align: left;
        }
    }
    img {
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
  .avatar {
    border-radius: 50%;
    border: 7.5px solid var(--main-color-light);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
  }
</style>
