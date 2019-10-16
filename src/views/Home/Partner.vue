<template>
  <div id='Partner'>
    <div class='partner-area'>
      <Ptitle>Our clients and partners</Ptitle>
      <ul class='list'>
        <li
          v-for="l in list"
          :key="l.name"
        >
          <img
            :src="require(`@/assets/bank/${l.name}.png`)"
            alt=""
          >
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
      list: [
        {
          name: 'boc'
        },
        {
          name: 'boz'
        },
        {
          name: 'brcb'
        },
        {
          name: 'ccb'
        },
        {
          name: 'cmb'
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
#Partner {
  .flex();
  flex-direction: column;
  background-color: #fff;
  .partner-area {
    .flex();
    margin: 50px 0;
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    .list {
      max-width: 1100px;
      margin-top: 50px;
      .flex();
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        margin-top: 10px;
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
