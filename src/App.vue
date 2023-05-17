<template>
    <Header></Header>
  <div>
    <router-view />
  </div>
    <!-- 
      基础语法
      <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  
  <p>{{ msg }}</p>
  <button @click="setMsg">修改msg</button>

  <p>{{ user.username }}{{ user.age }}</p>
  <button @click="setAge">设置年龄age</button>

  <p>{{ list }}</p>
  <button @click="setList">设置list</button>

  <p @click="reSetMsg">计算属性事件</p>

  <HelloWorld msg="Vite + Vue" :title="childTitle" :parentArr="parentArr" @clickEmit="changeChildTitle" /> -->
</template>

<script setup>
import Header from './components/Header.vue'
/*
// 基础语法
 import HelloWorld from './components/HelloWorld.vue'
import {reactive, ref,computed,watch} from 'vue'

// 组件传值
let childTitle = reactive({
  a:'123'
})
let parentArr = reactive([1,2,3,4,5])

let msg = ref('')
function setMsg(){
  msg.value = '设置msg'
}

// 组件方法
function changeChildTitle(item,index){
  childTitle.a = '123'
  childTitle.a = item + '-' + childTitle.a
}

let user = reactive({
  age:12,
  username:'黄黄'
})
function setAge(){
  user.age = 34
}

let list = reactive([])
function setList(){
  list.push(1)
}

// 计算属性
const reMsg = computed({
  get:()=>{
    console.log('computed-get');
    return msg.value + '123123'
  },
  set:(value)=>{
    msg.value = '3-3-3' + value
  }
})
function reSetMsg(){
  reMsg.value = '小白'
}

// 监听
watch(msg,(newV,oldV)=>{
  console.log('msg-watch值',newV,oldV);
})
watch(list,(newV,oldV)=>{
  console.log('list-watch值',newV,oldV);
})
watch(user,(newV,oldV)=>{
  console.log('user-watch值',newV,oldV);
}) */
</script>

<style scoped>
</style>
