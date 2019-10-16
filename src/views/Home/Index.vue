<template>
  <div id="home">
    <section class='banner'>
      <div class='banner-top-area'>
        <p class='t-color t-first'><span class='t-first-mark'>Marco Pay</span>a leading international company focuses on solutions for payment and digital marketing </p>
        <!-- <p class='t-color'>利用区块链与人工智能，让计算更快捷，存储更安全，交易更隐私</p> -->
        <!-- <div class='banner-fun'>
          <div>
            Get started
          </div>
          <div>
            Learn more
          </div>
        </div> -->
      </div>
      <ul class='banner-card'>
        <li
          v-for="l in introduction"
          :key='l.bg'
        >
          <!-- <i
            class='introduction-bg'
            :class='setClass(l.bg)'
          /> -->
          <p>{{l.desc}}</p>
        </li>
      </ul>
    </section>
    <Product />
    <Advantage />
    <Partner />
    <!-- <Service />
    <Map /> -->
  </div>
</template>

<script>
import Product from './Product'
import Advantage from './Advantage'
import Service from './Service'
import Map from './Map'
import Partner from './Partner'

export default {
  name: 'Home',
  data () {
    return {
      introduction: [
        {
          bg: 'd1',
          desc: 'Six years of development experience in Fintech'
        },
        {
          bg: 'd2',
          desc: 'Accompolished many large scale mobile marketing events for the banking industry'
        },
        {
          bg: 'd3',
          desc: 'Master core operational skills in payment solutions'
        }
      ]
    }
  },
  methods: {
    setClass (key) {
      return `${key}_bg`
    }
  },
  components: {
    Product, Advantage, Service, Map, Partner
  }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.t-color {
  color: rgb(218, 189, 189);
  font-size: 18px;
}
.size {
  background-size: 100% 100%;
}
#home {
  position: relative;
  top: -80px;
  .banner {
    .flex();
    position: relative;
    height: 720px;
    padding-top: 80px;
    flex-direction: column;
    .banner-top-area {
      position: relative;
      z-index: 2;
      .flex();
      height: 30%;
      flex-direction: column;
      justify-content: space-around;
      .t-first {
        font-size: 36px;
        line-height: 50px;
        text-align: center;
        .t-first-mark {
          font-size: 50px;
          font-weight: bold;
          color: rgba(237, 128, 45, 1);
        }
      }
      .banner-fun {
        .flex();
        div {
          .flex();
          width: 180px;
          height: 50px;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
          &:nth-child(1) {
            margin-right: 40px;
            background-color: #ed802d;
          }
          &:nth-child(2) {
            border: 1px solid #fff;
          }
        }
      }
      @media screen and (max-width: 860px) {
        padding: 0 10%;
      }
    }
    .banner-card {
      .flex();
      position: absolute;
      width: 80%;
      height: 150px;
      bottom: -50px;
      background-color: #fff;
      border-radius: 10px;
      li {
        .flex();
        width: 30%;
        height: 80%;
        overflow: hidden;
        padding: 0 30px;
        vertical-align: middle;
        border-right: 2px solid rgba(237, 128, 45, 1);
        .introduction-bg {
          min-width: 35px;
          height: 38px;
          margin-right: 20px;
        }
        .d1_bg {
          background: url("~@/assets/d1.png") no-repeat;
          .size();
        }
        .d2_bg {
          background: url("~@/assets/d2.png") no-repeat;
          .size();
        }
        .d3_bg {
          background: url("~@/assets/d3.png") no-repeat;
          .size();
        }
        p {
          font-size: 20px;
          font-weight: 500;
          line-height: 25px;
          color: rgba(51, 51, 51, 1);
        }
        &:nth-child(3) {
          border: none;
        }
        @media screen and(max-width: 860px) {
          flex-wrap: wrap;
          height: 70%;
          padding: 0 5px;
          text-align: center;
          .introduction-bg {
            margin-right: 0;
          }
          p {
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      height: 100%;
      filter: blur(5px);
      background: url("~@/assets/banner.png") no-repeat;
      background-size: 100% 100%;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
