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
          :class="{_active:l.path===path}"
        >{{l.name}}</a>
      </ul>
      <span
        class="header-button"
        @click.stop="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right">
        <ul
          style="height: 240px;"
          :style="{'height': langsSelectorIsOpen ? `${40 * 5}px` : '0'}"
        >
          <li
            v-for="(item,index) in nav"
            :key='index'
            @click="jumpTo($event,item.path)"
          >
            <a>
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: null,
      topActive: false,
      langsSelectorIsOpen: false,
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
    closeLangsSelector () {
      this.langsSelectorIsOpen = !this.langsSelectorIsOpen
    },
    toggleMenu () {
      this.closeLangsSelector()
      if (!this.menuIsOpen) {
        this.menuIsOpen = true
      } else {
        this.menuIsOpen = false
      }
    },
    jumpTo (e, router) {
      e.target.href = router
      this.closeLangsSelector()
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
  z-index: 99;
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
    .header-button {
      display: none;
      float: right;
      cursor: pointer;
      span {
        background-color: #fff;
        display: block;
        margin: 7px 0;
        width: 30px;
        height: 2px;
      }
    }
    .nav-right {
      position: absolute;
      height: 0;
      top:0;
      left:0;
      right:0;
      ul {
        background-color: #1e1c1a;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 80px;
        width: 100%;
        -webkit-transition: height 0.6s;
        transition: height 0.6s;

        li {
          float: none;
          line-height: 30px;
          margin-left: 0;
          border: none !important;
          font-size: 14px;
          -webkit-transition: color 0.4s;
          transition: color 0.4s;
          padding: 5px 15px;
          position: relative;
          a {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 860px) {
    background-color: #1e1c1a;
    .nav {
      display: none !important;
    }
    .header-button {
      display: block !important;
    }
  }
}
</style>
