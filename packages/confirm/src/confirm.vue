<template>
  <div class="by-confirm" v-show="showConfirm">
    <div class="by-confirm-main" :style="{backgroundColor: confirmBgColor}">
      <h5 class="by-confirm-title">{{ confirmTitle }}</h5>
      <div class="by-comfirm-content">{{ confirmMessage }}</div>
      <div class="by-confirm-btn">
        <div class="by-confirm-btn-esc" @click="handleEsc">取消</div>
        <div class="by-confirm-btn-entry" @click="handleEntry">确定</div>
      </div>
    </div>
    <by-bg />
  </div>
</template>

<script>
  import ByBg from '../../bg'
  export default {
    name: 'ByConfirm',
    components: {
      ByBg
    },
    props: {
      showConfirm: {
        type: Boolean,
        default: false
      },
      confirmTitle: {
        type: String,
        default: '提示'
      },
      confirmMessage: {
        type: String,
        default: '是否确认许愿？（确认后无法修改愿望）'
      },
      confirmBgColor: {
        type: String,
        default: 'rgba(253, 232, 186, 1)'
      },
      btnStyle: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      handleEntry () {
        this.$emit('entry')
      },
      handleEsc () {
        this.$emit('esc')
      }
    }
  }
</script>

<style lang="less" scoped>
.by-confirm{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .by-confirm-main{
    position: absolute;
    text-align: center;
    width: 560vw * 2/15;
    height: 250vw * 2/15;
    box-shadow: 0px 0px 30vw * 2/15 0px rgba(75, 10, 6, 0.3);
    border-radius: 20vw * 2/15;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
    .by-confirm-title{
      margin: 20vw * 2/15;
      font-size: 30vw * 2/15;
    }
    .by-comfirm-content{
      font-size: 26vw * 2/15;
    }
    .by-confirm-btn{
      display: flex;
      justify-content: center;
      .by-confirm-btn-esc, .by-confirm-btn-entry{
        margin: 55vw * 2/15;
        width: 160vw * 2/15;
        height: 60vw * 2/15;
        line-height: 60vw * 2/15;
        background: linear-gradient(0deg, #FEA861 0%, #FCDABD 100%);
        box-shadow: 0px 0px 20vw * 2/15 0px rgba(75, 10, 6, 0.2);
        border-radius: 30vw * 2/15;
        font-size: 29vw * 2/15;
        font-weight: 500;
        color: #C2181A;
      }
    }
  }
}
</style>