<template>
  <div class="homepage">
    <HomeSwiper :banner="data.banner"></HomeSwiper>
    <div class="live">
      <h1>乐享生活100+</h1>
      <div class="live_list">
        <div class="live_item" v-for="item, index in data.sports" :key="index">
          <div class="live_btn">
            <img :src="item.menuThumbnail" :alt="item.displayName">
            <h3>{{ item.displayName }}</h3>
          </div>
        </div>
      </div>
      <a-button type="primary" size="large" @click="router.push('/product')">立即享受生活</a-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import * as api from '@/api'
import HomeSwiper from '@/components/Home/HomeSwiper.vue'
import {useRouter} from 'vue-router'
const res = await api.getHomePage()
console.log(res)
const data = reactive({
  banner: res.banner,
  sports: res.sports.slice(0, 10)
})

const router = useRouter()

</script>

<style scoped lang="less">
.homepage {
  // padding-top: 40px;
  height: 575px;
  position: relative;
}

.live {
  width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom:40px;

  h1 {
    font-size: 30px;
  }

  .live_list {
    display: flex;
    flex-wrap: wrap;

    .live_item {
      width: 240px;
    }

    .live_btn {
      display: flex;
      width: 200px;
      height: 73px;
      background-color: #fff;
      border-radius: 8px 8px 25px 8px;
      margin-bottom: 30px;
      box-shadow: 5px 5px 5px #ccc;
      justify-content: center;
      position: relative;
      align-items: center;

      img {
        position: absolute;
        width: 80px;
        height: 80px;
        left: -15px;
        top: -15px;
      }

      h3 {
        font-weight: 900;
        font-size: 20px;
      }
    }
    .live_btn:hover{
      img{
        transform: scale(1.2);
      }
    }
  }
}
</style>