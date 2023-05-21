<script>
import CourseTitle from  "@/components/CourseTitle.vue";
import CourseList from  "@/components/CourseList.vue";
import { ref } from 'vue';

export default {
    components: {
        CourseTitle,
        CourseList
    },
    setup() {
        const isOpen = ref(true);
        const HandleShow = () => {
            isOpen.value = !isOpen.value;
        };

        return {isOpen, HandleShow};
    }
}
</script>
<template>
    <CourseTitle :HandleShow="HandleShow" />
    <CourseList :isOpen="isOpen" />
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html, body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: slategray;
}
#app {
    width: 400px;
    overflow: hidden;
    border: 1px solid #42b983;
    border-radius: 10px;
}
</style>