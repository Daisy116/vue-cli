<script>
import EmitTest from "@/components/EmitTest.vue";
import EventBack from "@/components/EventBack.vue";
import SlotsTitle from "@/components/SlotsTitle.vue";

import { ref } from 'vue';
export default {
    components: {
        EmitTest,
        EventBack,
        SlotsTitle,
    },
    setup() {
        const isAnima = ref(false);
        const handleAnma = () => {
            isAnima.value = !isAnima.value;
        };

        const handleCallBack = (num) => {
            console.log("Time is over", num.value);
        };
        return {handleCallBack, isAnima, handleAnma};
    }
}
</script>

<template>
    <!-- <EmitTest @TimeOut="handleCallBack" />

    <button @click="handleAnma">click產生動畫</button>
    <transition name="fade">
        <div v-if="isAnima" id="box"></div>
    </transition>
    <br>
    <transition name="bounce">
        <div v-if="isAnima" id="box"></div>
    </transition> -->

    <!-- <EventBack /> -->

    <!-- <SlotsTitle /> -->
    <slots-title>標題1</slots-title>
    <p>vnfdo iohoehrfiurhfoehn mkfldjo i</p>
    <slots-title>標題2</slots-title>
    <p>vnfdo iohoehrfiurhfoehn mkfldjo i</p>
    <slots-title>標題3</slots-title>
    <p>vnfdo iohoehrfiurhfoehn mkfldjo i</p>
</template>



<style lang="scss" scoped>
    #box {
        width: 100px;
        height: 100px;
        background-color: crimson;

        margin: auto;
    }
    
    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-to {
        opacity: 1;
    }
    .fade-leave-from {
        opacity: 1;
    }
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }


    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }
</style>