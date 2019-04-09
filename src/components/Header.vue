<template>
  <div
    id='header'
    :class="{hactive:topActive}"
  >
    <div class='_w'>
      <router-link
        to='/'
        class='logo'
      />
      <ul class='nav'>
        <a
          v-for="(l,index) in nav"
          :href='l.path'
          :key='index'
          @click="changeActive"
          :class="{_active:l.path===path}"
        >{{l.name}}</a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: null,
      topActive: false,
      nav: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/#product',
          name: '公司产品'
        },
        {
          path: '/#advantage',
          name: '公司优势'
        },
        {
          path: '/#service',
          name: '服务行业'
        },
        {
          path: '/#contact',
          name: '联系方式'
        }
      ]
    }
  },
  mounted () {
    this.path = this.$route.path
    window.onscroll = () => {
      this.topActive = Boolean(document.documentElement.scrollTop > 80)
    }
  },
  methods: {
    changeActive (x) {
      console.log(x, '--');
    }
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
.hactive {
  background-color: #1e1c1a;
}
#header {
  .flex();
  position: fixed;
  z-index: 3;
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
      a {
        .flex();
        margin-right: 46px;
        height: @A;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
      }
      ._active {
        border-bottom: 2px solid #ffffff;
      }
    }
  }
}
</style>
