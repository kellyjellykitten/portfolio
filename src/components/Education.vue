<template>
    <section>        
        <hr>
        <h2>Education</h2>        
        <section v-for="school in schools" :key="school.id" class="light">
            <h3>{{ school.school }}</h3>
            <h4>{{ school.degree }}</h4>            
            <span class="date-range">{{ school.start }} - {{ school.end }}</span>
            <p>{{ school.major }}</p>
        </section>
        <h2>Skills</h2>
        <section class="light">
            <div class="category-group" v-for="(skills, category) in categories" :key="category.id">
                <h3>{{ category }}</h3>
                <div class="skill-container">
                    <section class="skill-card" v-for="skill in skills" :key="skill.id">
                        <div class="image-container">
                            <a :href="skill.url" :title="skill.title" target="_blank"><img :src="'assets/' + skill.image_url" :alt="skill.name"></a>
                        </div>
                        <h5>{{ skill.name }}</h5>             
                    </section>
                </div>
            </div> 
            <!-- Printer friendly skill section -->
            <div class="category-group--printer-friendly" v-for="(skills, category) in categories" :key="category.id">
                <strong>{{ category }}</strong>
                <div v-for="(skill, index) in skills" :key="skill.id">
                    <span class="category-group-skill">
                        {{ skill.name }}           
                    </span>
                    <span class="category-group-comma" v-if="index != skills.length - 1">,</span> 
                </div>
            </div>            
        </section>       
    </section>
</template>

<script>
    export default {
        name: 'Education',
        props: ['schools', 'skills'],
        methods: {            
            groupBy(array, property) {
                return array.reduce(function(groups, obj) {
                    let key = obj[property];
                    if(!groups[key]) {
                        groups[key] = [];
                    }
                    groups[key].push(obj);
                    return groups;
                }, {});                
            }
        },
        computed: {
            categories() {
                return this.groupBy(this.skills, "category");
            }
        },
    }
</script>

<style>
    h5 {
        font-weight: normal;
        font-size: 17px;
        margin: 5px;
    }
    h2 {
        color: var(--main-color-light);
    }
    section.light {
        color: var(--main-color-light);
    }
    .category-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }
    .category-group--printer-friendly {
        display: none;
    }
    .skill-container {
        display: flex;
        flex-flow: row wrap;
    }
    .skill-card {
        /* border-radius: 3px;
        border: 1px solid midnightblue; */
        margin: 7px;
        word-wrap: break-word;
        width: 120px;
        /* display: flex;
        flex-direction: column; */
        justify-content: space-between;
    }
    .image-container {
        display: flex;
        justify-content: center;
    }
    .image-container > img {
        height: 100%;
        width: 100%;
        background-position: 50% 50%;
        background-size: cover;
        object-fit: cover;
        margin: 5px;
    }
    @media print {
        .category-group {
            display: none;
        }
        .category-group--printer-friendly {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .category-group--printer-friendly div {
            display: flex;
            flex-direction: row;
        }
        .category-group-skill {
            margin-left: 0.25rem;
        }
    }
</style>