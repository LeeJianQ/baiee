import ByConfirm from '../src/confirm.vue'

export default {
  title: 'ByConfirm',
  component: ByConfirm
}

const Template = (args, { argTypes }) => ({
  components: { ByConfirm },
  props: Object.keys(argTypes),
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleEntry () {
      this.show = false
    },
    handleEsc () {
      this.show = false
    }
  },
  template:
  `<div>
    <by-confirm :show-confirm="show" @esc="handleEsc" @entry="handleEntry"></by-confirm>
    <button @click="show=true">点我</button>
  </div>`,
});

/* 复制模版函数 */
export const Confirm = Template.bind({});

/* props 属性 */
Confirm.args = {
  showConfirm: true
};