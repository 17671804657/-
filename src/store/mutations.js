//直接更新state的多个方法的对象
import Vue from "vue";
import {
    INCREMENT_FOOD_COUNT,
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS,
    RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO,
    DECREMENT_FOOD_COUNT
} from './mutation-types'
import {county} from "mockjs/src/mock/random/address";

export default {
    [RECEIVE_ADDRESS](state, {address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, {shops}) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state, {userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.info = {}
    },

    [RECEIVE_INFO](state,{info}) {
        state.info = info
    },
    [RECEIVE_GOODS](state,{goods}) {
        state.goods = goods
    },
    [RECEIVE_RATINGS](state,{ratings}) {
        state.ratings = ratings
    },
    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){        //数据第一次增加
            //food.count = 1  //新增属性（没有数据绑定）
            /*
            * 对象
            * 属性名
            * 属性值
            * */
            Vue.set(food,'count',1) //让新增的属性也有数据绑定
            state.shopCart.push(food) // 添加到购物车
        }else{
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state,{food}){
        if(food.count){//只有有值才去减
            food.count--
            if(food.count===0) {// 如果数量减为0, 从购物车中移除
                state.shopCart.splice(state.shopCart.indexOf(food), 1)
            }

        }
    },


}

