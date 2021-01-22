import ByBusWishingRules from '../src/bus-wishing-rules.vue'

export default {
  title: 'ByBusWishingRules',
  component: ByBusWishingRules
}

const Template = (args, { argTypes }) => ({
  components: { ByBusWishingRules },
  props: Object.keys(argTypes),
  template:
  '<by-bus-wishing-rules></by-bus-wishing-rules>',
});

/* 复制模版函数 */
export const BusWishingRules = Template.bind({});

/* props 属性 */
BusWishingRules.args = {};