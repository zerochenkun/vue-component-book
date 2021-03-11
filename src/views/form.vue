<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <iForm ref="form" :model="formValidate">
      <iFormItem label="用户名" prop="name" :rules="ruleValidate">
        <iInput v-model="formValidate.name"></iInput>
      </iFormItem>
      <iFormItem label="邮箱" prop="mail">
        <iInput v-model="formValidate.mail"></iInput>
      </iFormItem>
    </iForm>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import iForm from "../components/form/form.vue";
import iFormItem from "../components/form/form-item.vue";
import iInput from "../components/input/input.vue";
export default {
  name: "i-form",
  components: {
    iForm,
    iFormItem,
    iInput,
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate()
      },
    handleReset() {
      this.$refs.form.resetFields()
    },
  },
};
</script>

<style>
</style>