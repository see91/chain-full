<template>
  <div id='Footer'>
    <div class='footer-area'>
      <p>Copyright 2019.All rights reserved.</p>
      <a href='mailto:hezuo@digitalchainall.com'>hezuo@digitalchainall.com</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
#Footer {
  .flex();
  height: 99px;
  background: rgba(30, 28, 26, 1);
  .footer-area {
    .flex();
    width: 80%;
    justify-content: space-between;
    p,
    a {
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      line-height: 20px;
    }
  }
}
</style>
