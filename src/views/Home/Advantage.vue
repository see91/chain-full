<template>
  <div id='Advantage'>
    <div class='advantage-area'>
      <Ptitle>公司优势</Ptitle>
      <ul class='advantage-list'>
        <li
          v-for="(l,index) in advantageList"
          :key='index'
        >
          <img
            :src='l.src'
            alt=""
          >
          <p>{{l.title}}</h2>
            <p>{{l.desc}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Ptitle from './Ptitle'
export default {
  data () {
    return {
      advantageList: [
        {
          src: require('@/assets/team.png'),
          title: '十余年经验开发技术团队',
          desc: '从事软件和分布式开发10余年的专业技术与产品团队'
        },
        {
          src: require('@/assets/technology.png'),
          title: '十多年互联网行业技术沉淀',
          desc: '团队10年深耕于互联网与大数据行业，拥有互联网行业技术沉淀'
        },
        {
          src: require('@/assets/qualification.png'),
          title: '获得多项荣誉资质',
          desc: '获区块链标准委员会、『AI+分布式』科技推动示范单位等荣誉'
        },
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
#Advantage {
  .flex();
  flex-direction: column;
  height: 587px;
  background-color: #fff;
  .advantage-area {
    .flex();
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  .advantage-list {
    .flex();
    width: 100%;
    justify-content: space-between;
    li {
      .flex();
      width: 20%;
      min-height: 315px;
      padding: 20px 5%;
      flex-direction: column;
      justify-content: space-around;
      background-color: #f7f7f7;
      border-radius: 10px;
      img {
        width: 110px;
        height: 100px;
      }
      p {
        &:nth-child(2) {
          font-size: 20px;
          font-weight: 500;
          line-height: 29px;
          color: #333333;
        }
        &:nth-child(3) {
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          color: #666666;
        }
      }
    }
  }
}
</style>
