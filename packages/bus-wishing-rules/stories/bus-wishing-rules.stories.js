import ByBusWishingRules from '../src/bus-wishing-rules.vue'

export default {
  title: 'ByBusWishingRules',
  component: ByBusWishingRules
}

const Template = (args, { argTypes }) => ({
  components: { ByBusWishingRules },
  props: Object.keys(argTypes),
  data () {
    return {
      showState: true
    }
  },
  template:
  '<by-bus-wishing-rules :show="showState" @close="showState = false"></by-bus-wishing-rules>',
});

/* 复制模版函数 */
export const BusWishingRules = Template.bind({});

/* props 属性 */
BusWishingRules.args = {
  show: true
};