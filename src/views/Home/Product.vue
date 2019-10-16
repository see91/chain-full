<template>
  <a
    id='product'
    name='product'
  >
    <div class='product-area'>
      <Ptitle>Company's advantages</Ptitle>
      <p class='product-intr'>Marco Pay is a leading international company focuses on payment and digital marketing solutions, based in China and Thailand</p>
      <div class='product-f'>
        <div class='product-f-item product-f-item-1' />
        <ul class='product-r'>
          <li>
            <!-- <h2>分布式价值网络系统</h2> -->
            <p>Marco Pay is an innovative digital payment solutions company that enables ewallet and payment apps integration with merchants globally.</p>
          </li>
          <!-- <li>
            <h2>安全支付产品</h2>
            <p>基于浏览器的安全插件，便于用户安全地管理帐户，并有效便捷地使用帐户做各种交易的签名操作。</p>
          </li> -->
        </ul>
      </div>

      <div class='product-f product-f-2'>
        <div class='product-f-item product-f-item-2' />
        <ul class='product-r'>
          <li>
            <!-- <h2>应用管理平台</h2> -->
            <p>Marco Pay company marketing solutions also provide a CRM platform to manage relationships with customers and merchants. By using this platform, every merchants can easily do their online marketing events and accept digital payment such as wechat pay and alipay.</p>
          </li>
          <!-- <li>
            <h2>多方协作自治模式DAOs 激励体系</h2>
            <p>运行在链全区块链分布式系统上的DAOs (分布式自治组织），可以实现积分所有权、契约义务和业务逻辑规则的计算机算法，通过智能合约运营，在虚拟利益相关者之间自行分配价值。</p>
          </li> -->
        </ul>
      </div>
    </div>
  </a>
</template>

<script>
import Ptitle from './Ptitle'
export default {
  name: 'Product',
  data () {
    return {

    }
  },
  components: {
    Ptitle
  }
}
</script>

<style scoped lang="less">
.flex() {
  display: flex;
  align-items: center;
  justify-content: center;
}
#product {
  .flex();
  align-items: unset;
  background-color: #f7f7f7;
  padding: 80px 0;
  .product-area {
    .flex();
    width: 80%;
    flex-direction: column;
    .product-intr {
      font-size: 14px;
      margin-top: 30px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 24px;
      text-align: center;
    }
    .product-f {
      .flex();
      width: 100%;
      margin-top: 50px;
      justify-content: space-between;
      .product-f-item {
        width: 290px;
        height: 265px;
      }
      .product-f-item-1 {
        background: url("~@/assets/p1.png") no-repeat;
        background-size: 100% 100%;
      }
      .product-f-item-2 {
        background: url("~@/assets/p2.png") no-repeat;
        background-size: 100% 100%;
      }
      .product-r {
        .flex();
        flex-direction: column;
        width: 70%;
        height: 100%;
        align-items: flex-start;
        justify-content: space-around;
        li {
          position: relative;
          h2 {
            font-size: 20px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 29px;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
          }
          &::after {
            content: "";
            width: 20px;
            height: 20px;
            background: rgba(237, 128, 45, 0.5);
            border-radius: 50%;
            position: absolute;
            top: 3px;
            left: -30px;
          }
          &::before {
            content: "";
            width: 10px;
            height: 10px;
            background-color: #ed802d;
            border-radius: 50%;
            position: absolute;
            z-index: 2;
            top: 8px;
            left: -25px;
          }
        }
      }
      @media screen and(max-width:860px) {
        .product-f-item {
          display: none;
        }
        .product-r {
          width: 100%;
        }
      }
    }
    .product-f-2 {
      flex-direction: row-reverse;
    }
  }
}
</style>
