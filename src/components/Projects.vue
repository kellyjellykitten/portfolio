<template>
    <section>
        <hr>
        <h2>Projects</h2>        
        <div class="project" v-for="project in projects" :key="project.id">
            <h3><a :href="project.source" target="_blank">{{ project.name }} <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>{{ project.description }} <em>({{ project.start }})</em></p>
            <figure v-if="project.preview_url">
                <a :href="'assets/project_previews/' + project.preview_url"><img :src="'assets/project_previews/' + project.preview_url" :alt="project.name + 'Demo Image'"></a>
                <figcaption>
                <a :href="project.source" target="_blank">Source</a> | 
                <a :href="project.website" target="_blank">Website</a> 
                <span v-if="project.trello">
                    | <a :href="project.trello" target="_blank">Trello</a>
                </span>
                <span v-if="project.youtube">
                    | <a :href="project.youtube" target="_blank">Demo Video</a>
                </span>
               </figcaption>
            </figure>
        </div>
        <div class="project">
            <h3><a href="https://github.com/kellyjellykitten/sidescroller" target="_blank">Side Scroller Game <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>A side scroller game built using Python and Pygame. <em>(2020)</em></p>
            <figure>
                <iframe width="515" height="295" src="https://www.youtube.com/embed/mIr4OlAwQek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>
                    <a href="https://github.com/kellyjellykitten/sidescroller" target="_blank">Source</a> |
                    <a href="https://youtu.be/mIr4OlAwQek" target="_blank">Demo Video</a> |
                    <a href="#">Download Executable</a>
                </figcaption>
            </figure>
        </div>
        <!-- Printer friendly Project Section -->
        <ul class="project--printer-friendly" v-for="project in projects" :key="project.id">
            <li>
                <p><strong>{{ project.name }}</strong> ({{ project.start }}) - {{ project.description }}</p>
                <p>Source: <a :href="project.source">{{ project.source }}</a></p>
            </li>
        </ul>
        <ul class="project--printer-friendly">
            <li>
                <p><strong>Side Scroller Game</strong> (2020)</p>
                <p>Source: <a href="https://github.com/kellyjellykitten/sidescroller">https://github.com/kellyjellykitten/sidescroller</a></p>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {
        name: 'Projects',
        props: ['projects']
    }
</script>
<style scoped>
    h3 a {
        text-decoration: none;
        color: black;
    }    
    img {                
        width: auto;
        height: auto;
        max-height: 25vh;
        max-width: 55vh;
        margin: 1rem;
    }
    .project {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    .project--printer-friendly {
        display: none;
    }
    @media screen and (max-width: 600px) {
        figure {
            text-align: center;
            margin: 0;
        }
        img {            
            max-width: 40vh;
        }
    }
    @media print {
        p, a {
            margin: 0;
        }
        .project {
            display: none; 
        }
        .project--printer-friendly {
            display: block;
        }
    }
</style>