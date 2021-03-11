<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'ivu-collapse'
export default {
    name:'collapse',
    props:{
        value:{
            type:[Array,String]
        }
    },
    data(){
        return {
            // 设置实现内部状态，用于实现V-model
            currentValue : this.value
        }
    },
    computed:{
        classes(){
            return `${prefixCls}`
        }
    },
    watch:{
        // 从外部改变 Value 时，更新内部的数据
        value(val){
            this.currentValue 
        }
    }
};
</script>

<style>
</style>