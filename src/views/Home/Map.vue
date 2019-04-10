<template>
  <div id='Map'>
    <div class='location'>广西南宁高新区创新路23号4#楼B座1楼中关村信息谷雨林空间</div>
  </div>
</template>

<style scoped lang="less">
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
#Map {
  position: relative;
  height: 300px;
  background: url("../../assets/map.png") no-repeat;
  background-size: 100% 100%;
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
