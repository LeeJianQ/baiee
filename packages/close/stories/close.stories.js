import ByClose from '../src/close.vue'

export default {
  title: 'ByClose',
  component: ByClose
}

const Template = (args, { argTypes }) => ({
  components: { ByClose },
  props: Object.keys(argTypes),
  template:
  '<div style="backgroundColor: cornflowerblue"><by-close></by-close></div>',
});

/* 复制模版函数 */
export const Close = Template.bind({});

/* props 属性 */
Close.args = {};