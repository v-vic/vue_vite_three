<template>
    <div class="homeswiper">
        <div class="swiperBg" :style="{ background: data.bgColor }"></div>
        <a-carousel arrows autoplay :beforeChange="changeFn">
            <template #prevArrow>
                <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                    <left-circle-outlined />
                </div>
            </template>
            <template #nextArrow>
                <div class="custom-slick-arrow" style="right: 10px">
                    <right-circle-outlined />
                </div>
            </template>
            <div class="swiper_item" v-for="item, index in props.banner" :key="index">
                <div class="swiper_box">
                    <div class="swiper_left">
                        <h3 :style="{ color: item.text_color }">{{ item.desktop_sub_title || item.sub_title }}</h3>
                        <h1 :style="{ color: item.text_color }">{{ item.desktop_title || item.title }}</h1>
                    </div>
                    <div class="banner_right">
                        <img :src="item.imgsrc" alt="">
                    </div>
                </div>
            </div>
        </a-carousel>
    </div>
</template>

<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { reactive, defineProps } from 'vue'

const props = defineProps({ banner: Array })
console.log(props)
const data = reactive({
    bgColor: props.banner[0].bg_color
})


function changeFn(from, to) {
    // console.log(to)
    data.bgColor = props.banner[to].bg_color
}
</script>

<style scoped lang="less">
.homeswiper {
    position: relative;
}

.swiperBg {
    position: absolute;
    display: block;
    width: 100%;
    height: 575px;
    background-color: rgba(255, 0, 0, 0.849);
    transform-origin: 0 0;
    transform: skew(0, -8deg);
    transition: all .5s;
}

.swiper_item {
    height: 575px;

    .swiper_box {
        display: flex;
        min-width: 1200px;
        justify-content: center;
    }

    .swiper_left {
        width: 340px;
        // padding-left: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 100px;

        h3 {
            font-size: 30px;
            font-weight: 900;
        }

        h1 {
            font-size: 60px;
            font-weight: 900;
            margin: 0;
            line-height: initial;
        }
    }

    .banner_right {
        margin-top: 45px;
        transform-origin: 0 100%;
        transform: skew(0, -8deg);
        overflow: hidden;
        border-radius: 20px;
        border-bottom-right-radius: 80px;

        img {
            transform-origin: 0 100%;
            transform: skew(0, 8deg);
            border-radius: 20px;
        }
    }
}


/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 575px;
    line-height: 160px;
    //   background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>