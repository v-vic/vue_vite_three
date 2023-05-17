<template>
    <div>
        <div @click="addPort">添加商品</div>
        <div>商品数量{{ store.state.count }}</div>
        <div @click="asyncAdd">异步添加</div>

    </div>
</template>
<script setup>
import {useStore} from 'vuex'

let store = useStore()

function addPort(){
    store.commit('increment',2)
}
function asyncAdd(){
    store.dispatch('asyncadd',4)
}

</script>