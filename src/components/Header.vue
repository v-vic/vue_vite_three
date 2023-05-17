<template>
    <div class="header" :class="{hidden:store.state.isFullScreen}">
        <div class="logo" @click="router.push('/')">
            <img src="../assets/img/logo_rect.jpg" alt="logo">
        </div>
        <a-input-search v-model:value="data.value" placeholder="请搜索商品" class="input_search" @search="onSearch" />
        <a-menu v-model:selectedKeys="data.current" class="menu" mode="horizontal">
            <a-menu-item key="help">
                <template #icon>
                    <QuestionCircleOutlined />
                </template>
                帮助
            </a-menu-item>
            <a-menu-item key="salesroom">
                <template #icon>
                    <ShopOutlined />
                </template>
                门店
            </a-menu-item>
            <a-sub-menu key="account">
                <template #icon>
                    <UserOutlined/>
                </template>
                <template #title>账户</template>
            </a-sub-menu>
            <a-sub-menu key="buycart">
                <template #icon>
                    <CarOutlined />
                </template>
                <template #title>购物车</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { reactive } from 'vue';
import { ShopOutlined,UserOutlined,CarOutlined,QuestionCircleOutlined } from '@ant-design/icons-vue';
import {useStore} from 'vuex'

const store = useStore()
const router = useRouter()

const data = reactive({
    value: "",
    current: ["help"]
})

const onSearch = () => {
    console.log('点击')
}

</script>

<style scoped lang="less">
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 40px;
    background: #fff;
    box-shadow: 0 0 10px #ccc;
    transition: all .5s;
}
.header.hidden{
    transform: translate(0,-100%);
}
.logo{
    margin-right: 40px;
    img{
        height: 30px;
    }
}
.menu{
    height: 40px;
}
.input_search{
    margin-top: 5px;
    display: flex;
    flex: 1;
    align-items: center;
}
</style>