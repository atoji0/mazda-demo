<script setup lang="ts">
import { useRouter } from "vue-router";
import { useCommonStore } from "@/store/common";
const router = useRouter();

const logout = (values: any) => {
  useCommonStore().clearUser();
  router.push("/");
};
</script>

<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary" @click="logout">Back Home</a-button>
    </template>
  </a-result>
</template>
