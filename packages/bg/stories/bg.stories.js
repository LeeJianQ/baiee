import ByBg from '../src/bg.vue'

export default {
  title: 'ByBg',
  component: ByBg
}

const Template = (args, { argTypes }) => ({
  components: { ByBg },
  props: Object.keys(argTypes),
  template:
  '<div style="width: 750px; height: 100vh;"><by-bg></by-bg></div>',
});

/* 复制模版函数 */
export const Bg = Template.bind({});

/* props 属性 */
Bg.args = {};