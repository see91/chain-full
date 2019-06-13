<template>
  <a
    id='Footer'
    name='contact'
  >
    <div class='footer-area'>
      <p>Copyright 2019.All rights reserved.
        <a
          href='http://www.beian.miit.gov.cn'
          target='_blank'
        >桂ICP备19004242号</a>
      </p>
      <a href='mailto:hezuo@digitalchainall.com'>cooperation@digitalchainall.com</a>
    </div>
  </a>
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
    @media screen and (max-width: 860px) {
      flex-direction: column;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
