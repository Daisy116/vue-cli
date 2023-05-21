<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }

import Article from  "@/components/Article.vue";
import Aside from  "@/components/Aside.vue";
import Main from  "@/components/Main.vue";
export default {
  components: {
    Article,
    Aside,
    Main,
  }
}

</script>

<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <Article />
  <Aside />
  <Main />
</template>


