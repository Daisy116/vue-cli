<script>
import { ref } from 'vue';
export default {
  setup() {
    const isOpen = ref(false);
    const handleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {isOpen, handleOpen};
  }
}
</script>

<template>
  <header :class="{openMenu: isOpen}">
        <nav>
          <a @click="handleOpen" id="moblie_menu" href="javascript:;"></a>
          <div>
            <router-link to="/">回首頁 ｜ </router-link>

            <router-link to="/rwd">RWD</router-link>
            <router-link to="/vuejs">VUEJS</router-link>
            <router-link to="/reactjs">REACTJS</router-link>
            <router-link to="/html5">HTML5</router-link>
            <router-link to="/nodejs">NODEJS</router-link>
          </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
// h6 {
//   color: greenyellow;
//   font-size: 40px;
// }
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
  @media screen and (max-width: 640px) {
    transition: height 0.2s;
    height: 37px;
    overflow: hidden;
    &.openMenu {
      height: 232px;
    }
  }
  > nav {
    position: relative;
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 232px;
    }
    > .Title {
      line-height: 97px;
      font-size: 18px;
      float: left;
      color: #fff;
      margin-right: 20px;
      @media screen and (max-width: 1044px) {
        margin-left: 5%;
      }
      @media screen and (max-width: 640px) {
        line-height: 37px;
      }
    }
    > div {
      width: 100%;
      height: 100%;
      @media screen and (max-width: 640px) {
        clear: both;
        width: 100%;
        height: 195px;
      }
      > a {
        display: block;
        line-height: 37px;
        font-size: 15px;
        float: left;
        color: #fff;
        padding: 0 10px;
        @media screen and (max-width: 640px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 37px;
          text-align: center;
        }
      }
    }
  }
}
a#moblie_menu {
  display: none;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 37px;
    height: 37px;
    background-image: url("~@/assets/images/menu.jpg");
    background-position: 50% 50%;
    background-size: 95% auto;
    background-repeat: no-repeat;
  }
}
</style>