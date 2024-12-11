<template>
  <div id="app">
    <nav :class="{ sticky: isSticky }">
      <div class="navLeft">
        <router-link to="/">HOME</router-link>
      </div>
      <div class="navLogo">
        <!-- <img src="@/assets/home.png" alt=""> -->
        <router-link to="/">
          <!-- westseainc -->
        </router-link>
      </div>
      <div class="navRight">
        <!-- <router-link to="/about">About</router-link> -->
        <!-- <router-link to="/Product">Product</router-link> -->
        <!-- <router-link to="/News">News</router-link> -->
        <!-- <router-link to="/Contact">Contact</router-link> -->
        <!-- <router-link to="/about">持续更新肿</router-link> -->
      </div>
    </nav>
    <router-view />
    <DetailView />
  </div>
</template>

<script>
import DetailView from '@/components/Detail.vue';
export default {
  name: 'APP',
  components: {
    DetailView
  },
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const offset = window.scrollY; 
      this.isSticky = offset > 100; 
    },
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000A8;
  width: 100%;
  height: auto;
}

nav {
  height: 5vh;
  line-height: 5vh;
  padding: 20px;
  background: black;
  transform: translateY(1deg);
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 3px 3px #ccc;
  display: flex;
  justify-content: space-around;
  position: relative;

  .navLeft {
    position: absolute;
    left: 0;
  }

  .navRight {
    position: absolute;
    right: 2%;
  }

  .navLogo {
    cursor: pointer;
    color: #fff;
    font-size: 18px;

    img {
      width: 170px;
      height: 40px;
    }
  }

  a {
    margin-left: 2vh;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #c2c7f2;
    }
  }
}

@media (min-width: 1200px) {
  nav.sticky {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 3s ease-in-out;
    transform: translateY(-1deg);

    .navRight {
      margin-right: 2%;
    }

    .navLogo {
      margin-right: 2%;
    }
  }

  a:hover {
    color: gold;
    margin-top: 5px;
  }
}

@media (max-width: 767px) {

  /* 针对移动端的样式 */
  nav {
    &.router-link-exact-active {
      color: white;
    }
    .navLeft{
      font-size: 17px;
      font-weight: 600;
    }
    .navRight {
      margin-top: 2px;

    }

    .navLogo {
      font-size: 20px;
      font-weight: 600;
      margin-left: -2vw;
    }

  }
}
</style>
