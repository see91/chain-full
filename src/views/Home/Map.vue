<template>
  <div id='Map'>
    <baidu-map
      class='bm-view'
      :center='center'
      :zoom="zoom"
    >
      <bm-marker
        :position="center"
        :dragging="true"
        @click="infoWindowOpen"
      >
        <bm-info-window
          :show="show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
        >{{location}}</bm-info-window>
      </bm-marker>
    </baidu-map>

    <div class='location'>{{location}}</div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  mounted () {
  },
  data () {
    return {
      center: { lng: 108.286769, lat: 22.866809 },
      zoom: 15,
      show: true,
      location: '广西南宁高新区创新路23号4#楼B座1楼中关村信息谷雨林空间'
    }
  },
  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
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
#Map {
  position: relative;
  height: 300px;
  background-size: 100% 100%;
  .bm-view {
    width: 100%;
    height: 300px;
  }
  .location {
    .flex();
    position: absolute;
    width: 100%;
    height: 80px;
    bottom: -80px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
  }
  @media screen and(max-width: 860px) {
    display: flex;
    justify-content: center;
    .location {
      text-align: center;
      width: 80%;
    }
  }
}
</style>
