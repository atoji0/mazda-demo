<script setup lang="ts">
import { ref } from "vue";
import { UnorderedListOutlined } from "@ant-design/icons-vue";
import { format } from "date-fns";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { routers } from "../router";
import { Lang } from "../locales";
import srcLogo from "../assets/logo.png";
import { Role, useCommonStore } from "@/store/common";

const commonStore = useCommonStore();
const router = useRouter();
const i18n = useI18n();

const title = import.meta.env.VITE_TITLE;
const menuOpenKeys = ref<string[]>();
const menuSelectedKeys = ref<string[]>([""]);
const selectLang = ref<string>(Lang[0].key);
const updateTime = format(new Date(), "yyyy/MM/dd HH:mm:SS") + "(JST)";

const goToPath = (path: string, isNewCollapsed: boolean) => {
  commonStore.isMenuCollapsed = isNewCollapsed;
  router.push(path);
};

const changeLang = (lang: string) => {
  i18n.locale.value = lang;
};
</script>

<template>
  <a-layout style="height: 100vh">
    <a-layout-sider :collapsed="commonStore.isMenuCollapsed" collapsedWidth="0" width="250" :trigger="null">
      <a-menu v-model:selectedKeys="menuSelectedKeys" v-model:openKeys="menuOpenKeys" width="250" theme="dark" mode="inline" :inlineIndent="10">
        <template v-for="item in routers" :key="item.meta?.key">
          <a-sub-menu
            v-if="
              item.meta?.key != null &&
              commonStore.role != Role.None &&
              (item.meta?.isAdmin == undefined || (item.meta?.isAdmin && commonStore.role == Role.Admin))
            "
            :key="item.meta?.key"
          >
            <template #title>{{ $t(String(item.meta?.title)) }}</template>
            <template v-for="subItem in item.children" :key="subItem.meta?.key">
              <a-menu-item :key="subItem.meta?.key" v-if="subItem.meta?.key != null" @click="goToPath(subItem.path, true)">
                {{ $t(String(subItem.meta?.title)) }}
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', height: '50px', lineHeight: '43px', padding: '0px 3px', fontSize: '20px' }">
        <a-row justify="end">
          <a-col :span="6" style="white-space: nowrap">
            <UnorderedListOutlined @click="() => (commonStore.isMenuCollapsed = !commonStore.isMenuCollapsed)" style="padding: 10px" />
            {{ title }}
          </a-col>
          <a-col :span="8">
            <div style="text-align: right; font-size: 16px; white-space: nowrap">
              WSS : {{ commonStore.userID == "" ? "(None)" : commonStore.userID }} &nbsp;&nbsp; {{ updateTime }}
            </div>
          </a-col>
          <a-col :span="3" offset="1">
            <a-select style="width: 100px" v-model:value="selectLang" @change="changeLang(selectLang)">
              <a-select-option v-for="item in Lang" :value="item.key">{{ item.name }}</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <div style="text-align: right; margin: 0px 10px 0 0; white-space: nowrap"><img :width="130" :src="srcLogo" /></div>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-breadcrumb separator=">" :style="{ margin: '8px 12px', padding: '4px' }">
        <a-breadcrumb-item>
          <router-link to="" @click="goToPath('/', false)">{{ $t("menu.Home") }}</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="router.currentRoute.value.meta.title != null">
          <router-link to=""></router-link>
          {{ $t(String(router.currentRoute.value.meta.title)) }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ margin: '0px 8px', padding: '8px', background: '#fff' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
