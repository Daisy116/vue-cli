<template>
  <div class="about">
    <div class="navbar">
      <nav>
        <h3>This is About page</h3>
        <router-link to="/about/guide">Guide</router-link>
        <router-link to="/about/changelog">Changelog</router-link>
        <router-link to="/about/github">Github</router-link>
        <router-link to="/about/reference">Reference</router-link>
      </nav>
    </div>
    <main>
      <!-- 這裡放router-view！！！ -->
      <router-view />
    </main>
  </div>
</template>

<style>
  body, html {
    height: 100%;
  }
  .about {
    height: 100%;
  }
  .navbar {
    background-color: darkcyan;
    float: left;
    height: 91vh;
  }
  .navbar nav {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .navbar a {
    margin: 10px 0;
  }

  .router-link-active {
    color: darkorange;
  }
</style>
