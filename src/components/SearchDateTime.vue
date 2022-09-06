<script setup lang="ts">
import { Dayjs } from "dayjs";

defineProps<{ title: string; value1?: Dayjs | null; value2?: Dayjs | null }>();

const emit = defineEmits<{
  (e: "update:value1", value1?: Dayjs | null): void;
  (e: "update:value2", value2?: Dayjs | null): void;
}>();

const handleChange1 = (value1?: Dayjs | null) => {
  emit("update:value1", value1);
};
const handleChange2 = (value2?: Dayjs | null) => {
  emit("update:value2", value2);
};
</script>

<template>
  <a-row>
    <a-col :span="10" style="padding: 0px 10px; text-align: right">{{ title }} :</a-col>
    <a-col :span="14">
      <a-date-picker size="small" v-model:value="value1" show-time @change="handleChange1(value1)" />
      -
      <a-date-picker size="small" v-model:value="value2" show-time @change="handleChange2(value2)" />
    </a-col>
  </a-row>
</template>
