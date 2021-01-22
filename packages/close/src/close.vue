<template>
  <div class="by-close" :style="style">
  </div>
</template>

<script>
  export default {
    name: 'ByClose',
    props: {
      size: {
        type: [Number, String],
        default: 70
      }
    },
    computed: {
      style () {
        return {
          width: (this.size*2/15) + 'vw',
          height: (this.size*2/15) + 'vw'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.by-close{
  background: url('./images/close.png') center center no-repeat;
  background-size: contain;
}
</style>