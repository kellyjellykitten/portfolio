<template>
    <section>
        <hr>
        <h2>Projects</h2>
        <div class="project">
            <h3><a href="http://wordingo.kellylloyd.kiwi/" target="_blank">Wordingo <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>A Wordle clone built with Vue.js, Vite, and Tailwind CSS. <em>(2022)</em></p>
            <figure>
                <img src="https://media.giphy.com/media/krUBihK8QinVNsiVtU/giphy.gif" alt="Wordingo Demo Image">
                <figcaption>
                    <a href="https://github.com/kellyjellykitten/wordingo" target="_blank">Source</a> |
                    <a href="http://wordingo.kellylloyd.kiwi/" target="_blank">Website</a>
                </figcaption>
            </figure>
        </div>        
        <div class="project">
            <h3><a href="https://github.com/kellyjellykitten/fino" target="_blank">Photo Caption Contest <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>A Vue.js web application utilizing Node.js + Express, PostgreSQL, and Bootstrap in which users may register for an account to submit captions to various photos. <em>(2021)</em></p>
            <figure>
                <iframe width="515" height="295" src="https://www.youtube.com/embed/3PPVcqsIKdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>
                    <a href="https://github.com/kellyjellykitten/fino" target="_blank">Source</a> |
                    <a href="https://youtu.be/3PPVcqsIKdo" target="_blank">Demo Video</a> |
                    <a href="https://trello.com/b/oIFMhrzW" target="_blank">Trello Board</a>
                </figcaption>
            </figure>
        </div>
        <div class="project" v-for="project in projects" :key="project.id">
            <h3><a :href="project.source" target="_blank">{{ project.name }} <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>{{ project.description }} <em>({{ project.start }})</em></p>
            <figure v-if="project.preview_url">
                <a :href="'assets/project_previews/' + project.preview_url"><img :src="'assets/project_previews/' + project.preview_url" :alt="project.name + 'Demo Image'"></a>
                <figcaption>
                <a :href="project.source" target="_blank">Source</a> | 
                <a :href="project.website" target="_blank">Website</a> 
                
               </figcaption>
            </figure>
        </div>
        <div class="project">
            <h3><a href="https://github.com/kellyjellykitten/sidescroller" target="_blank">Side Scroller Game <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>A side scroller game built using Python and Pygame that increases in speed over time while tracking player scores. <em>(2020)</em></p>
            <figure>
                <iframe width="515" height="295" src="https://www.youtube.com/embed/mIr4OlAwQek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>
                    <a href="https://github.com/kellyjellykitten/sidescroller" target="_blank">Source</a> |
                    <a href="https://youtu.be/mIr4OlAwQek" target="_blank">Demo Video</a> |
                    <!-- <a href="#">Download Executable</a> -->
                </figcaption>
            </figure>
        </div>
        <div class="project">
            <h3><a href="https://github.com/kellyjellykitten/connect4" target="_blank">Connect Four <font-awesome-icon :icon="['fas', 'external-link-alt']" /></a></h3>
            <p>Coded in Python using Pygame modules, this game tracks and positions two player input and determines the winner in consideration of the varying win positions. <em>(2020)</em></p>
            <figure>
                <img src="https://media.giphy.com/media/8viErrOZhI4UQS5Qlb/giphy.gif" alt="Connect Four Demo Image">
                <figcaption>
                    <a href="https://github.com/kellyjellykitten/connect4" target="_blank">Source</a> |
                    <!--<a href="#">Download Executable</a>-->
                </figcaption>
            </figure>
        </div>
        <!-- Printer friendly Project Section -->
         <ul class="project--printer-friendly">
            <li>
                <p><strong>Wordingo</strong> (2022)</p>
                <p>Source: <a href="https://github.com/kellyjellykitten/wordingo">https://github.com/kellyjellykitten/wordingo</a></p>
            </li>
        </ul>
        <ul class="project--printer-friendly">
            <li>
                <p><strong>Photo Caption Contest</strong> (2021)</p>
                <p>Source: <a href="https://github.com/kellyjellykitten/fino">https://github.com/kellyjellykitten/fino</a></p>
            </li>
        </ul>
        <ul class="project--printer-friendly">
            <li>
                <p><strong>Pathfinding Visualizer</strong> (2021)</p>
                <p>Source: <a href="https://github.com/kellyjellykitten/algorithmvisualizer/tree/modaltest2">https://github.com/kellyjellykitten/algorithmvisualizer</a></p>
            </li>
        </ul>
        <ul class="project--printer-friendly">
            <li>
                <p><strong>Side Scroller Game</strong> (2020)</p>
                <p>Source: <a href="https://github.com/kellyjellykitten/sidescroller">https://github.com/kellyjellykitten/sidescroller</a></p>
            </li>
        </ul>
        <ul class="project--printer-friendly">
            <li>
                <p><strong>Connect Four</strong> (2020)</p>
                <p>Source: <a href="https://github.com/kellyjellykitten/connect4">https://github.com/kellyjellykitten/connect4</a></p>
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
        color: var(--main-color-light);
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
        color: var(--main-color-light);
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
        h2 {
            font-size: 1rem;
        }
        .project {
            display: none; 
        }
        .project--printer-friendly {
            display: block;
        }
    }
</style>