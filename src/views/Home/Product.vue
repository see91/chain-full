<template>
  <a id='product' name='product'>
    <div class='product-area'>
      <Ptitle>专注于分布式网络与人工智能及5G通讯技术融合</Ptitle>
      <p class='product-intr'>通过区块链的分布式技术与人工智能技术结合，通过充分利用大型企业GPU/FPGA服务器集群、中小型企业分散空余的GPU服务器计算资源以及个人闲置GPU计算资源，搭建一个人工智能的分布式计算平台，通过链全网络把所有人工智能的算力连接起来，为全球各地的分布式商业应用提供基础设施。</p>
      <div class='product-f'>
        <div class='product-f-item product-f-item-1' />
        <ul class='product-r'>
          <li>
            <h2>分布式价值网络系统</h2>
            <p>提供了基于混合共识双链的分布式区块链技术，使智能设备传输的高效运转和分布式的验证数据保存分隔，互相依存并互相作用，融合5G的技术设备和基站可以实现效率、安全、公平性的完美统一。</p>
          </li>
          <li>
            <h2>安全支付产品</h2>
            <p>基于浏览器的安全插件，便于用户安全地管理帐户，并有效便捷地使用帐户做各种交易的签名操作。</p>
          </li>
        </ul>
      </div>

      <div class='product-f product-f-2'>
        <div class='product-f-item product-f-item-2' />
        <ul class='product-r'>
          <li>
            <h2>应用管理平台</h2>
            <p>管理用户所有上链的商业应用，智能合约全生命周期管理工具，包括合约编译、合约部署、合约管理的功能，应用的日常管理、上链数据统计、上链接口调用等应用相关全生命周期管理。</p>
          </li>
          <li>
            <h2>多方协作自治模式DAOs 激励体系</h2>
            <p>运行在链全区块链分布式系统上的DAOs (分布式自治组织），可以实现积分所有权、契约义务和业务逻辑规则的计算机算法，通过智能合约运营，在虚拟利益相关者之间自行分配价值。</p>
          </li>
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
      }
      .product-f-item-2 {
        background: url("~@/assets/p2.png") no-repeat;
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
    }
    .product-f-2 {
      flex-direction: row-reverse;
    }
  }
}
</style>
