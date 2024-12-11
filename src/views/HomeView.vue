<template>
  <div class="home">
    <SwiperView :slides="slides"></SwiperView>
    <!-- <div class="banner">
      <img src="@/assets/banner.jpg" alt="">
    </div> -->
    <div class="main">
      <div class="left">
        
        <img :src="require('@/assets/master.jpg')"  alt="">
      </div>
      <div class="right">
        <h1>Strategic, purpose-driven business service crafted for your success.</h1>
        <!-- <p>As we are committed to delivering unparalleled service and exceptional results, guided by our extensive
          experience and expertise.</p> -->
        <!-- <button>Contact Us</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// import DetailView from '@/components/Detail.vue'
import SwiperView from '@/components/Swiper.vue'
export default {
  name: 'HomeView',
  components: {
    SwiperView
  }, data() {
    return {
      slides: [
        {
          title: 'Home',
          subtitle: 'Home',
          image: require('../assets/banner.jpg')
        },
        {
          title: 'Home',
          subtitle: 'Home',
          image: require('../assets/banner1.jpg')
        }, {
          title: 'Home',
          subtitle: 'Home',
          image: require('../assets/banner2.jpg')
        }, {
          title: 'Home',
          subtitle: 'Home',
          image: require('../assets/banner3.jpg')
        }, {
          title: 'Home',
          subtitle: 'Home',
          image: require('../assets/banner5.jpg')
        },
      ],

    }
  }
}
</script>


<style lang="scss">
.banner {
  width: 100%;
  height: 95vh;
  padding-bottom: 3vh;
  overflow: hidden;
}

.banner img {

  width: 100%;
}

.main {
  width: 100%;
  height: 80vh;
  display: flex;
  margin-top: 10vh;
  justify-content: center;
}


.right {
  width: 40%;
  padding-left: 5%;
  padding-right: 5%;
  text-align: left;
}

.right h1 {
  width: 80%;
  margin-top: 10%;
  text-align: center;
}

.right p {
  font-size: 18px;
  margin-top: 5%;
}

.right button {
  width: 200px;
  height: 45px;
  background: white;
  margin-top: 10%;
  margin-left: 25%;
  cursor: pointer;
  border-radius: 5px;
}

.right button :hover {
  background: black;
  color: #fff;
  border: 1px;
}

.left {
  width: 50%;

}

.left img {
  width: 80%;
  border-top-left-radius: 10%;
  border-bottom-right-radius: 10%;
}

@media (max-width: 767px) {
  .main {
    flex-direction: column;
    margin-top: 5vh;
    height: 80%;
    .left {
      height: 30%;
      width: 100%;

      img {
        border-bottom-left-radius: 5%;
        border-top-right-radius: 5%;
        border-top-left-radius: 5%;
        border-bottom-right-radius: 5%;
      }
    }
    .right{
      width: 90%;
      height: 50%;
      padding-left: 5%;
      padding-right: 5%;
      text-align: left;
      margin-top: 5%;
      padding-bottom: 5vh;
      h1{
        width: 100%;
        font-size: 23px;
      }
      p{
        font-weight: 600;
      }
      button{
        font-weight: 700;
        font-size: 17px;
      }
    }
  }

}
</style>
