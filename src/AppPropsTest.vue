<script>
import PropsTest from "@/components/PropsTest.vue";
import { reactive, ref } from 'vue';

export default {
    components: {
        PropsTest,
    },
    setup() {
        // 宣告各種不同型別的資料，練習用props傳遞
        const str = ref("Hello VVV");
        const bool = ref(true);
        const num = ref(0);
        const arr = reactive(["Mike", "Andy", "Jacky", "Snake"]);
        const obj = reactive({
            age: 12,
            name: "Sally",
            sex: "girl",
            isMarry: false
        });
        const handleFn = () => {
            console.log("被點擊");
            console.log(obj.name);
        };

        return {
            str,
            bool,
            num,
            arr,
            obj,
            handleFn
        };
    }
}
</script>

<template>
    <PropsTest 
        :str="str"
        :bool="bool"
        :num="num"
        :arr="arr"
        :obj="obj"
        :handleFn="handleFn"
    />
</template>

<style>

</style>