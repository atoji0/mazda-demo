<script setup lang="ts">
import loginService from "@/services/LoginService";
import { useRouter } from "vue-router";

const loginForm = loginService.loginForm;
const router = useRouter();
const login = (values: any) => loginService.login(values, router);
</script>

<template>
  <a-typography-title :level="4">Dummy Login</a-typography-title>
  <a-form
    :model="loginForm"
    name="basic"
    autocomplete="off"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    style="padding: 15px 10px; max-width: 300px"
    @finish="login"
  >
    <a-form-item label="UserID" name="userID" :rules="[{ required: true, message: 'Please input UserID.' }]">
      <a-input v-model:value="loginForm.userID" placeholder="UserID" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">Login</a-button>
    </a-form-item>
  </a-form>
</template>
