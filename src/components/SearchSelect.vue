<script setup lang="ts">
import { computed } from "vue";
import type { SelectProps } from "ant-design-vue";

const props = defineProps<{ value?: string[]; title: string; options?: string[] }>();

let options2 = computed(() => {
  var optionList: SelectProps["options"] = [{ label: "ALL", value: "ALL" }];
  if (props.options != undefined) {
    for (var option of props.options) {
      optionList.push({ label: option, value: option });
    }
  }
  return optionList;
});

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
}>();

const handleChange = (value: string[]) => {
  if (value.includes("ALL")) {
    value.splice(value.indexOf("ALL"), 1);
    if (props.options != undefined) {
      value = props.options;
    }
  }
  emit("update:value", value);
};
</script>

<template>
  <a-row>
    <a-col :span="10" style="padding: 0px 10px; text-align: right">{{ title }} :</a-col>
    <a-col :span="14">
      <a-select
        v-model:value="value"
        mode="multiple"
        :options="options2"
        style="width: 100%"
        size="small"
        placeholder="Select Item..."
        max-tag-count="responsive"
        @change="handleChange"
        allowClear
      />
    </a-col>
  </a-row>
</template>
