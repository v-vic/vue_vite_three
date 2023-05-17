<template>
  
</template>

<script setup>
import * as api from '@/api'
import {useRoute} from 'vue-router'

const route = useRoute()

const res = api.getProducts()
console.log(res)

</script>

<style>

</style>