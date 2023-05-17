<template>
    <div class="loading" v-show="data.loading">
        <loading></loading>
    </div>
    <div class="product" v-show="!data.loading">
        <div class="prod_list" :class="{ hidden: store.state.isFullScreen }">
            <h1>
                <SketchOutlined />产品推荐
            </h1>
        </div>
        <div class="scence_list" :class="{ hidden: store.state.isFullScreen }">
            <h3>
                <RadarChartOutlined />切换使用场景
            </h3>
        </div>
    </div>
</template>

<script setup>
import * as api from '@/api'
import { useRoute } from 'vue-router'
import { reactive, onMounted } from 'vue';
import loading from '@/components/loading.vue'
import { SketchOutlined, RadarChartOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
const route = useRoute()
const store = useStore()

onMounted(async () => {
    const res = await api.getProducts()
    console.log(res)
    data.loading = false
})

const data = reactive({
    loading: true,
    product: []
})

// 监听鼠标滚动事件
window.addEventListener('mousewheel', (e) => {
    if (e.deltaY > 0) {
        store.commit('setFullScreen', true)
    }
    if (e.deltaY < 0) {
        store.commit('setFullScreen', false)
    }
})

</script>

<style lang="less" scoped>
.position{
    width: 300px;
    height: 100vh;
    padding: 50px 20px 0;
    // z-index:8;
    position: fixed;
    transition: all .5s;
    top: 0;
}
.prod_list {
    background: rgba(255, 255, 255, .8);
    left: 0;
    .position()
}

.scence_list {
    background: rgba(255, 255, 255, .8);
    right: 0;
    text-align: right;
    .position()
}

.prod_list.hidden {
    transform: translate(-100%, 0);
}

.scence_list.hidden {
    transform: translate(100%, 0);
}
</style>