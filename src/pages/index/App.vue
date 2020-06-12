<template>
  <div>
    <h1>hello {{title}}</h1>
    <h2><img src="@/assets/logo.png" alt=""></h2>
    <ul>
      <li v-for="(good,index) in goods" :key="index">
        {{index+1}} .
        {{good.text}} |
        {{good.price}}
        <button
          @click="addCart(index)"
        >添加购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "superMarket",
      goods: [
        { text: "程序高级设计", price: 89 },
        { text: "jquery原理", price: 30 },
        { text: "vue原理", price: 40 }
      ]
    };
  },
  methods: {
    addCart(i) {
      console.log(i);
    }
  }
};
</script>

<style lang="scss" scoped>
  h1{
    color: red;
  }
</style>