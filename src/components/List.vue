<template>
  <li class="sec_li">
    <router-link to="/detail" class="lp_li_a">
      <div class="lp_li_imgWrap">
        <img :src="img" alt="Display"/>
      </div>
      <p class="lp_li_name">{{ title }}</p>
      <p class="lp_li_price">￥{{ price }}元</p>
    </router-link>
  </li>
</template>

<style scoped>
  .sec_li{
    float: left;
    width: 50%;
    margin-bottom: 0.1rem;
  }

  .lp_li_a{
    display: block;
    height: 100px;
    text-align: center;
    padding: 0.2rem 0;
    magin: 0 0 0.05rem;
    background-color: #fff;
  }

  .lp_li_imgWrap{
    padding: 0.24rem 0;
  }

  .lp_li_imgWrap > img{
    width: auto;
    height: 2.3rem;
  }

  .lp_li_name{
    height: 0.5rem;
    line-height: 1rem;
    font-size: 16px;
    color: #333;
  }

  .lp_li_price{
    height: 0.5rem;
    line-height: 1.9rem;
    font-size: 16px;
    color: #fb3b3b;
  }
</style>


<script>
  export default {
    // 接收父组件传过来的以下几个属性
    props: ['price', 'title', 'img']
  }
</script>
