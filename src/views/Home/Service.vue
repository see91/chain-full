<template>
  <a
    id='Service'
    name='service'
  >
    <div class='service-area'>
      <Ptitle>服务行业</Ptitle>
      <el-carousel
        type="card"
        height="390px"
        :interval='0'
        class='service-area-center'
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
          desc: '通过区块链技术解决票据的电子化、便捷化及自动化过程 '
        }
      ]
    };
  },
  components: {
    Ptitle
  },
};
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
  }
}

.el-carousel__item {
  .flex();
  flex-direction: column;
  justify-content: space-around;
  min-height: 390px;
  border-radius: 10px;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    .flex();
    height: 30%;
    padding: 20px 10%;
    flex-direction: column;
    justify-content: space-around;
    p {
      width: 100%;
      &:nth-child(1) {
        text-align: left;
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        line-height: 36px;
      }
      &:nth-child(2) {
        font-size: 18px;
        font-weight: 400;
        color: #666666;
        line-height: 27px;
      }
    }
  }
}
</style>
