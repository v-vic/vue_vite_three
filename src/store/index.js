import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        count: 0,
        isFullScreen:false,
      }
    },
    // 同步操作
    mutations: {
      increment (state,payload) {
        state.count += payload
      },
      // 鼠标滚动，设置全屏
      setFullScreen(state,value){
        state.isFullScreen = value
      }
    },
    // 操作方法
    getters:{
        totalPrice(state){
            return state.count * 100
        }
    },
    // 异步操作
    actions:{
        asyncadd(store,payload=10){
            setTimeout(() => {
                store.commit('increment',payload)
            }, 1000);
        }
    }
  })

  export default store