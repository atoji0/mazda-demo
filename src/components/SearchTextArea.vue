<script setup lang="ts">
defineProps<{ title: string; value?: string }>();

const emit = defineEmits(["update:value"]);

const updateValue = (value: string) => {
  emit("update:value", value);
};
</script>

<template>
  <a-row>
    <a-col :span="10" style="padding: 0px 10px; text-align: right">{{ title }} :</a-col>
    <a-col :span="14">
      <a-textarea size="small" v-model:value="value" allow-clear @input="updateValue($event.target.value)" />
    </a-col>
  </a-row>
</template>
