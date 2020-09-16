<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="请选择计划日期">
      <a-date-picker
        v-model:value="form.date"
        show-time
        type="date"
        placeholder="请选择计划日期"
        style="width: 100%;"
      />
    </a-form-item>
    <a-form-item label="请选择耗时">
      <a-input-number
        id="inputNumber"
        v-model:value="form.time"
        :min="1"
        :max="10"
        @change="onChange"
      />
    </a-form-item>
    <a-form-item label="请输入待办事项">
      <a-textarea v-model:value="form.textarea" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">创建</a-button>
      <a-button style="margin-left: 10px;">取消</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
  import { reactive, toRefs } from "vue";
  import moment from "moment";
  export default {
    setup(props, ctx) {
      const state = reactive({
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        form: {
          date: moment(Date.now()),

          textarea: "",
          time: 1,
        },
      });

      const onSubmit = () => {
        ctx.emit('handlePlan',state.form)
      };

      return {
        ...toRefs(state),
        onSubmit
      };
    },
  };
</script>
