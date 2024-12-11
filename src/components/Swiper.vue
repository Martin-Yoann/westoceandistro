<template>
    <div class="swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper" :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }">
                <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
                    <img :src="slide.image" :alt="slide.title" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next" @click="next()"></div>
            <div class="swiper-button-prev" @click="prev()"></div>
        </div>
        <div class="swiper-detail">
            <div class="swiper-detail-title">
                We ensure only best services for our clients
            </div>
            <!-- <div class="swiper-detail-button" @click="openZoho()">
                <p>Click Me</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    name: 'Swiper',
    props: {
        slides: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
            speed: 1000,
            loop: true,
            autoplay: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: true,
                disableOnInteraction: true,
                autoplayDisableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        this.zohobtn = document.getElementById('zsiq_float');
    },
    methods: {
        destroySwiper() {
            if (this.swiper) {
                this.swiper.destroy
            }
        },
        next() {
            this.swiper.slideNext();
        },
        prev() {
            this.swiper.slidePrev();
        },
        openZoho() {
            console.log('open zoho customer service')
            if (this.zohobtn) this.zohobtn.click();
            else console.warn('Zoho button not found!');
        },
    }
};
</script>

<style scoped lang="scss">
.swiper-container {
    width: 100%;
    height: 90vh;
    padding-bottom: 3vh;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.swiper-detail {

    width: 40%;
    height: 20%;
    padding-top: 5%;
    background-color: black;
    opacity: 0.5;
    position: absolute;
    left: 30%;
    top: 35%;
    z-index: 999;
    color: #fff;
    border-radius: 5px;

    .swiper-detail-title {
        z-index: 999999;
        height: 5vh;
        font-size: 25px;
        color: #fff;
        font-weight: 700;
    }

    .swiper-detail-button {
        font-size: 18px;
        display: inline-block;
        width: 185px;
        height: 40px;
        line-height: 10px;
        text-align: center;
        background-color: #fff;
        color: #000;
        border-radius: 5px;
        margin-top: 30px;
        cursor: pointer;
        z-index: 9999999;

        p {
            text-decoration: none;
            color: #272323;
            font-weight: 600;
        }
    }

    .swiper-detail-button :hover {
        color: #000;
    }

}

.swiper-slide {
    -webkit-transition-timing-function: linear;
    /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

}

.swiper-slide {
    img {
        width: 100%;
    }
}

.swiper-pagination {}

.swiper-button-next {
    color: #fff;
}

.swiper-button-prev {
    color: #fff;
}

@media (max-width: 767px) {

    /* 针对移动端的样式 */
    .swiper {
        height: 30vh;

        .swiper-container {
            height: 30vh;
        }

        .swiper-detail {
            background: none;
            color: #fff;
            opacity: 1;
            width: 60%;
            left: 20%;

            .swiper-detail-title {
                font-size: 18px;
                margin-top: 5%;

            }

            .swiper-detail-button {
                background: none;
                color: #fff;
                border: 1px solid #fbf7f7;
                width: 55%;
                margin-top: 15%;
                height: 15px;
                padding-bottom: 20px;
            }

            .swiper-detail-button p {
                color: #fff;
                margin-bottom: 10px;
            }
        }
    }
}
</style>