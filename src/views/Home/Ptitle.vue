<template>
  <div id='p-title'>
    <p class='title'><slot/></p>
    <p class='line' />
  </div>
</template>

<style scoped lang="less">
#p-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 24px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .line {
    width: 80px;
    height: 6px;
    margin-top: 20px;
    background-color: #ed802d;
  }
}
</style>
