<template>
  <div :class="itemClasses">
    <div :class="headerClass" @click="toggle">
      <p>icon</p>
      <slot></slot>
    </div>
    <div :class="contentClasses">
      <div :class="boxClasses" v-show="isActive">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = "ivu-collapse";
export default {
  name: "panel",
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      index: 0,
      isActive: false,
    };
  },
  methods: {
    toggle() {
      // 访问父链执行方法
      this.$parent.toggle({
        // 优先使用 name，未定义时使用 index
        // index 和 isactive 都在 collapse.vue 中设置
        name: this.name || this.index,
        isActive: this.isActive,
      });
    },
  },
  // 动态设置 css 相关类名
  computed: {
    itemClasses() {
      return [`${prefixCls}`, { [`${prefixCls}-item-active`]: this.isActive }];
    },
    headerClass(){
        return 
    }
  },
};
</script>

<style>
</style>