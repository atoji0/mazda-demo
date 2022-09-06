<script setup lang="ts">
import { Dayjs } from "dayjs";

defineProps<{ title: string; value?: [Dayjs | null, Dayjs | null] }>();

const emit = defineEmits<{
  (e: "update:value", value: [Dayjs, Dayjs]): void;
}>();

const handleChange = (value: [Dayjs, Dayjs]) => {
  emit("update:value", value);
};
</script>

<template>
  <a-row>
    <a-col :span="10" style="padding: 0px 10px; text-align: right">{{ title }} :</a-col>
    <a-col :span="14">
      <a-range-picker v-model:value="value" size="small" format="YYYYMMDD" @change="handleChange" />
    </a-col>
  </a-row>
</template>
