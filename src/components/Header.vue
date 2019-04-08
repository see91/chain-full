<template>
  <div id='header'>
    <div class='_w'>
      <router-link
        to='/'
        class='logo'
      />
      <ul class='nav'>
        <router-link
          tag='li'
          v-for="(l,index) in nav"
          :to='l.path'
          :key='index'
          :class="{_active:l.path===path}"
        >{{l.name}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: null,
      nav: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/product',
          name: '公司产品'
        },
        {
          path: '/advantage',
          name: '公司优势'
        },
        {
          path: '/industry',
          name: '服务行业'
        },
        {
          path: '/contact',
          name: '联系方式'
        }
      ]
    }
  },
  mounted () {
    this.path = this.$route.path
  }
}
</script>

<style scoped lang="less">
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
@A: 100%;
#header {
  .flex();
  position: relative;
  z-index: 1;
  width: @A;
  height: 80px;
  ._w {
    .flex();
    width: 80%;
    height: @A;
    justify-content: space-between;
    .logo {
      width: 152px;
      height: 50px;
      background: url("~@/assets/logo.png") no-repeat;
    }
    .nav {
      .flex();
      height: @A;
      li {
        .flex();
        margin-right: 46px;
        height: @A;
        color: #fff;
        cursor: pointer;
      }
      ._active {
        border-bottom: 2px solid #ffffff;
      }
    }
  }
}
</style>
