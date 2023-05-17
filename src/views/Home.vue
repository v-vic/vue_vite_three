<template>
    <div>
        <asyncHome></asyncHome>
    </div>
    <Suspense>
        <template #fallback>
            <loading></loading>
        </template>
        <template #default>
            <asyncHome></asyncHome>
        </template>
    </Suspense>
</template>
<script setup>
import loading from '@/components/loading.vue'
import { defineAsyncComponent } from 'vue';
// 异步组件
const asyncHome = defineAsyncComponent(()=>import('@/components/home.vue'))
</script>
<style lang="less" scoped>
</style>