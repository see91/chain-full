<template>
  <a id='Advantage' name='advantage'>
    <div class='advantage-area'>
      <Ptitle>Our products</Ptitle>
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
  </a>
</template>

<script>
import Ptitle from './Ptitle'
export default {
  data () {
    return {
      advantageList: [
        {
          src: require('@/assets/team.png'),
          title: 'payment solutions',
          desc: 'We offer fully secure and easy ways to integrate Online Gateway and Virtual Terminal, that all your business can accept online payments and process payments over the mobile equipments.'
        },
        {
          src: require('@/assets/technology.png'),
          title: 'online digital marketing for banks',
          desc: 'With offices in Beijing and Bangkok, we deliver high performance online digital marketing strategies for banks.'
        },
        {
          src: require('@/assets/qualification.png'),
          title: 'E-CRM platform',
          desc: 'E-CRM Systems can save you time and money by offering better transaction quality, speed and accuracy of service by improving cash flow management for businesses.'
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
#Advantage {
  .flex();
  flex-direction: column;
  background-color: #fff;
  .advantage-area {
    .flex();
    margin: 50px 0;
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  .advantage-list {
    .flex();
    width: 100%;
    margin-top: 50px;
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
        text-align: center;
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
    @media screen and(max-width: 860px) {
      flex-direction: column;
      li{
        width: 100%;
        margin-top: 30px;
      }
    }
  }
}
</style>
