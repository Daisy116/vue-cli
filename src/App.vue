<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    // 用useRoute()拿網址上的route跟routerArr做比對！
    const routerArr = ["/", "/about", "/course"];
    const route = useRoute();
    const page = ref(0);

    // 用watch監控網址，若網址改變了，文字顏色也同時要改變！
    watch(
      // 第一個參數帶要監控的變數，這裡監控route.path！！！
      ()=> route.path, 
      ()=> {
        // 不只可以監控"/", "/about", "/course"，連"/course/:id"都可以監控到！！！
        // console.log(route.path);
        let i = routerArr.indexOf(route.path);
        if (i === -1) {
          let y = route.path.includes('/course/');
          if (y) {
            i = 3;  
          }
          // console.log("includes的結果",y);
        }
        page.value = i;
        console.log("indexOf的結果：", i);
      }
    );

    return {page};
  }
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/course" :class="{active: page === 3}">課程</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
html, body {
    background-color: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bolder;
    color: aliceblue;
    font-size: 20px;

    &.router-link-exact-active,
    &.active {
      color: #42b983;
    }
  }
}
</style>
