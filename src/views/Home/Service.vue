<template>
  <a
    id='Service'
    name='service'
  >
    <div class='service-area'>
      <Ptitle>服务行业</Ptitle>
      <el-carousel
        type='card'
        height="390px"
        :interval='0'
        arrow='always'
        indicator-position='outside'
        class='service-area-center serviceCard'
      >
        <el-carousel-item
          v-for="(l,index) in serviceList"
          :key='index'
          class='service-list-item'
        >
          <img
            :src='l.src'
            alt=""
          >
          <div class='list-bottom'>
            <p>{{l.title}}</h2>
              <p>{{l.desc}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        height="390px"
        :interval='0'
        arrow='always'
        class='service-area-center serviceCard_none'
      >
        <el-carousel-item
          v-for="(l,index) in serviceList"
          :key='index'
          class='service-list-item'
        >
          <img
            :src='l.src'
            alt=""
          >
          <div class='list-bottom'>
            <p>{{l.title}}</h2>
              <p>{{l.desc}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </a>
</template>

<script>
import Ptitle from './Ptitle'
export default {
  data () {
    return {
      max: true,
      serviceList: [
        {
          src: require('@/assets/Bank.png'),
          title: '银行',
          desc: '银行用户大数据统计与分析，利用大数据画像给用户提供千人千面的定制化服务 '
        },
        {
          src: require('@/assets/Food.png'),
          title: '食品',
          desc: '食品安全溯源，从食品的生产、运输、存储与使用全过程都上链记录与追踪，确保食品的安全与有效 '
        },
        {
          src: require('@/assets/Bill.png'),
          title: '票据',
          desc: '从万物互联到万物互信，所有物联网设置都有一个唯一可信的身份，接入的设备通过区块链来认证身份信息'
        },
        {
          src: require('@/assets/Internet.png'),
          title: '物联网',
          desc: '传统溯源方式的最大问题是上网信息是可编辑与修改的，通过区块链的不可窜改特性来记录商品流通情况，更加可信，通用 '
        },
        {
          src: require('@/assets/Traceability.png'),
          title: '商品溯源',
          desc: '通过区块链技术解决票据的电子化、便捷化及自动化过程 '
        },
        {
          src: require('@/assets/Copyright.png'),
          title: '版权',
          desc: '版权的推广需要易操作，可追溯，低费用，区块链版权的解决方案是推广版权的最优选择 '
        },
        {
          src: require('@/assets/Game.png'),
          title: '游戏',
          desc: '游戏行业的积分，点卡、装备、交易等上链可保证用户的利益，区块链的特性也会产生新的游戏模式与体验 '
        }
      ]
    }
  },
  components: {
    Ptitle
  }
}
</script>

<style scoped lang="less">
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

#Service {
  .flex();
  justify-content: space-around;
  min-height: 630px;
  background-color: #f7f7f7;
  .service-area {
    width: 80%;
    .service-area-center {
      margin-top: 30px;
    }
    .serviceCard {
      @media screen and (max-width: 860px) {
        display: none !important;
      }
    }
    .serviceCard_none {
      @media screen and (min-width: 860px) {
        display: none !important;
      }
    }
  }
}

.el-carousel__item {
  .flex();
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #fff;
  img {
    width: 100%;
    height: 50%;
  }
  div {
    .flex();
    height: 30%;
    padding: 20px 10%;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    p {
      width: 100%;
      &:nth-child(1) {
        text-align: left;
        font-weight: 500;
        color: #333333;
        line-height: 36px;
      }
      &:nth-child(2) {
        font-weight: 400;
        color: #666666;
        line-height: 27px;
      }
    }
  }
}
</style>
