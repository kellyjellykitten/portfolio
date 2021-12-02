<template>
    <section>        
        <hr>
        <h2>Education</h2>        
        <section v-for="school in schools" :key="school.id">
            <h3>{{ school.school }}</h3>
            <h4>{{ school.degree }}</h4>            
            <span class="date-range">{{ school.start }} - {{ school.end }}</span>
            <p>{{ school.major }}</p>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'Education',
        props: ['schools']
    }
</script>

<style>
</style>