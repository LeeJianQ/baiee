<template>
  <div class="by-bus-wishing-rules">
    <div class="bus-wishing-rules">
      <ul>
        <li v-for="(item, key) in rules" :key="key">
          <a>{{key}}</a>
          {{item}}
        </li>
      </ul>
    </div>
    <by-close @click="handleClose" class="rules-close" />
    <by-bg />
  </div>
</template>

<script>
import ByBg from '../../bg'
import ByClose from '../../close'
  export default {
    name: 'ByBusWishingRules',
    components: {
      ByBg,
      ByClose
    },
    props: {
      rules: {
        type: Number,
        default: function () {
          return [
            '活动时间：2021年2月1日 - 2021年2月28日',
            '活动时间：2021年2月1日 - 2021年2月28日',
            '活动时间：2021年2月1日 - 2021年2月28日',
            '活动时间：2021年2月1日 - 2021年2月28日',
            '活动时间：2021年2月1日 - 2021年2月28日'
          ]
        }
      }
    },
    methods: {
      handleClose () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="less" scoped>
.by-bus-wishing-rules{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .bus-wishing-rules{
    position: absolute;
    width: 626vw * 2/15;
    height: 532vw * 2/15;
    top: 50%;
    left: 50%;
    padding: 118vw * 2/15 33vw * 2/15 44vw * 2/15;
    transform: translate(-50%, -50%);
    z-index: 5000;
    background: url('./images/bg.png') center center no-repeat;
    background-size: contain;
    ul {
      list-style-type: none;
      padding: unset;
      height: 360vw * 2/15;
      overflow-y: auto;
      li{
        margin: 25vw * 2/15 0;
        font-size: 24vw * 2/15;
        font-weight: 400;
        color: #FDEEB7;
        a {
          display: inline-block;
          text-align: center;
          width: 32vw * 2/15;
          height: 32vw * 2/15;
          border-radius: 50%;
          font-size: 24vw * 2/15;
          color: #C6212A;
          background-color: #FDEEB7;
        }
      }
    }
  }
  .rules-close{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5000;
    bottom: 15vh;
  }
}
</style>