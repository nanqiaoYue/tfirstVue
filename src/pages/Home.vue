<template>
  <div class="container">
    <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
    <home-header></home-header>
    <div class="content">
      <ul class="cont_ul">
        <list
          v-for="item in items"
          :price="item.price"
          :title="item.title"
          :img="item.img">
          <!-- 通过v-bind（简写为“:”）绑定 props 来从父组件给子组件传值 -->
        </list>
      </ul>
    </div>
  </div>
</template>

<style>
  .container {
    max-width: 640px;
    margin: 0 auto;
    overflow-x: hidden;
  }
  .cont_ul {
    padding-top: 0.05rem;
    margin: 0 -0.12rem;
  }
  .cont_ul:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }
</style>

<script>
  /* 导入要用到的子组件 */
  import HomeHeader from '../components/HomeHeader.vue'
  import List from '../components/List.vue'

  export default {
    data(){
      return{
        /*items: [
          { price: "129.00", title: "大学" },
          { price: "256.00", title: "中庸" },
          { price: "399.00", title: "论语" },
          { price: "998.00", title: "孟子" },
          { price: "99.00", title: "道德经" },
          { price: "89.00", title: "老子" },
          { price: "188.00", title: "金刚经" },
          { price: "209.00", title: "易筋经" },
        ]*/
        items: []
      }
    },
    /* 在components字段中，包含导入的子组件  */
    components: {
      HomeHeader,
      List
    },

    // 在组件创建完成时，执行的钩子函数
    created(){
      // 在main.js里导入并使用vue-resource之后，就可以通过this.$http来使用vue-resource了，这里我们用到了get方法
      this.$http.get('/get/books').then((data)=>{
        // 由于请求成功返回的是Promise对象，我们要从data.body.data拿到books数组
        this.items = data.body.data;  //紫色 data 是参数 data
      });
    }
  }
</script>
