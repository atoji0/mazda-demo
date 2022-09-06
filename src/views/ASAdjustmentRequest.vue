<script setup lang="ts">
import SearchSelect from "../components/SearchSelect.vue";
import SearchTextArea from "../components/SearchTextArea.vue";
import SearchDateRange from "../components/SearchDateRange.vue";
import SearchDateTime from "../components/SearchDateTime.vue";
import ASAdjustmentResultTableLayout from "./layout/ASAdjustmentResultTableLayout";
import service from "../services/AsAdjustmentService";

const searchOption = service.searchOption;
const searchUICondition = service.searchUICondition;
const searchCondition = service.searchCondition;
const resultList = service.results;
const sonList = service.targetSons;
const excludedLineOffDateFromTo = service.excludedLineOffDateFromTo;
const downloadExcel = () => service.downloadExcel();
const uploadSon = (file: File) => service.uploadSon(file);
const executeAdjustment = () => service.executeAdjustment();
const searchResults = () => service.searchResults();
const clearResults = () => service.clearResults();
const downloadResult = () => service.downloadResult();
const clearSons = () => service.clearSons();

service.initCondition();
</script>

<template>
  <a-typography-title :level="5">Upload</a-typography-title>
  <a-row align="middle">
    <a-col :span="7">
      <a-space>
        <a-button size="small" @click="downloadExcel">Template D/L</a-button>
        <a-upload :before-upload="uploadSon" :showUploadList="false">
          <a-button size="small">Excel data loading to screen</a-button>
        </a-upload>
      </a-space>
    </a-col>
    <a-col :span="4">RowCount: {{ sonList.length }}</a-col>
    <a-col :span="9">
      <a-space>
        Excluded Line-off Date:
        <a-range-picker size="small" :disabled="sonList.length == 0" v-model:value="excludedLineOffDateFromTo" format="YYYYMMDD" />
      </a-space>
    </a-col>
    <a-col :span="4">
      <a-space>
        <a-button size="small" :disabled="sonList.length == 0" @click="clearSons">Clear</a-button>
        <a-button size="small" type="primary" :disabled="sonList.length == 0" @click="executeAdjustment">Adjustment</a-button>
      </a-space>
    </a-col>
  </a-row>
  <a-typography-title :level="5" style="padding: 10px 2px 0px">Search</a-typography-title>
  <a-row>
    <a-col :span="8">
      <SearchSelect title="Plant" v-model:value="searchCondition.globalPlantCodeList" :options="searchOption.globalPlantCodeList" />
      <SearchSelect
        title="Plant Code"
        v-model:value="searchCondition.vehicleProductionPlantCodeList"
        :options="searchOption.vehicleProductionPlantCodeList"
      />
      <SearchSelect
        title="Assembly Line"
        v-model:value="searchCondition.vehicleAssemblyLineCodeList"
        :options="searchOption.vehicleAssemblyLineCodeList"
      />
      <SearchSelect title="Prod Month" v-model:value="searchCondition.productionPlanMonthList" :options="searchOption.productionPlanMonthList" />
      <SearchSelect title="Carline Item" v-model:value="searchCondition.carLineItemCodeList" :options="searchOption.carLineItemCodeList" />
      <SearchSelect
        title="Instructions"
        v-model:value="searchCondition.assemblyScheduleAdjustmentInstructionCategoryList"
        :options="searchOption.assemblyScheduleAdjustmentInstructionCategoryList"
      />
      <SearchSelect
        title="Result"
        v-model:value="searchCondition.assemblyScheduleAdjustmentResultErrorFlagList"
        :options="searchOption.assemblyScheduleAdjustmentResultErrorFlagList"
      />
      <SearchSelect title="Status" :options="searchOption.globalPlantCodeList" />
      <SearchDateRange title="Transfer Date" v-model:value="searchUICondition.productionAdjustmentRequestTransferTimeFromTo" />
      <SearchSelect
        title="Update User"
        v-model:value="searchCondition.assemblyScheduleAdjustmentUploadUserIdList"
        :options="searchOption.assemblyScheduleAdjustmentUploadUserIdList"
      />
      <SearchDateTime
        title="Update Date"
        v-model:value1="searchUICondition.assemblyScheduleAdjustmentUploadDateTimeFrom"
        v-model:value2="searchUICondition.assemblyScheduleAdjustmentUploadDateTimeTo"
      />
    </a-col>
    <a-col :span="8">
      <a-typography-title :level="5" style="padding: 0px 20px">From</a-typography-title>
      <SearchSelect title="Area" v-model:value="searchCondition.areaList" :options="searchOption.areaList" />
      <SearchSelect title="Dist" v-model:value="searchCondition.distributorCodeList" :options="searchOption.distributorCodeList" />
      <SearchSelect title="DLR" v-model:value="searchCondition.vehicleExportDealerCodeList" :options="searchOption.vehicleExportDealerCodeList" />
      <SearchSelect title="Order Type" v-model:value="searchCondition.vehicleOrderTypeList" :options="searchOption.vehicleOrderTypeList" />
      <SearchTextArea title="SON" v-model:value="searchUICondition.sonList" />
      <SearchSelect title="Base Spec" v-model:value="searchCondition.baseSpecificationCodeList" :options="searchOption.baseSpecificationCodeList" />
      <SearchTextArea title="AIC" v-model:value="searchUICondition.aicList" />
      <SearchSelect
        title="AIC Special Order Code"
        v-model:value="searchCondition.distributionSpecialOrderCodeList"
        :options="searchOption.distributionSpecialOrderCodeList"
      />
      <SearchDateRange title="Line-off Date (Plan)" v-model:value="searchUICondition.finalLineOffDatePlanFromTo" />
    </a-col>
    <a-col :span="8">
      <a-typography-title :level="5" style="padding: 0px 20px">To</a-typography-title>
      <SearchSelect title="Area" v-model:value="searchCondition.transferDestinationAreaList" :options="searchOption.transferDestinationAreaList" />
      <SearchSelect
        title="Dist"
        v-model:value="searchCondition.transferDestinationDistributorCodeList"
        :options="searchOption.transferDestinationDistributorCodeList"
      />
      <SearchSelect
        title="DLR"
        v-model:value="searchCondition.transferDestinationVehicleExportDealerCodeList"
        :options="searchOption.transferDestinationVehicleExportDealerCodeList"
      />
      <SearchSelect
        title="Order Type"
        v-model:value="searchCondition.transferDestinationVehicleOrderTypeList"
        :options="searchOption.transferDestinationVehicleOrderTypeList"
      />
      <SearchTextArea title="SON" v-model:value="searchUICondition.transferDestinationSonList" />
      <SearchSelect
        title="Base Spec"
        v-model:value="searchCondition.transferDestinationBaseSpecificationCodeList"
        :options="searchOption.transferDestinationBaseSpecificationCodeList"
      />
      <SearchTextArea title="AIC" v-model:value="searchUICondition.transferDestinationAicList" />
      <SearchSelect
        title="AIC Special Order Code"
        v-model:value="searchCondition.transferDestinationDistributionSpecialOrderCodeList"
        :options="searchOption.transferDestinationDistributionSpecialOrderCodeList"
      />
      <SearchDateRange title="Line-off Date (Plan)" v-model:value="searchUICondition.transferDestinationFinalLineOffDatePlanFromTo" />
    </a-col>
  </a-row>
  <a-row style="padding: 10px 2px">
    <a-col :span="12">
      <a-space>
        <a-button size="small" type="primary" @click="searchResults">Search</a-button>
        <a-button size="small" @click="clearResults">Clear</a-button>
        <a-button size="small" :disabled="resultList.length == 0" @click="downloadResult">Direct download to Excel</a-button>
      </a-space>
    </a-col>
  </a-row>
  <a-typography-title :level="5">List</a-typography-title>
  <a-table
    size="small"
    :dataSource="resultList"
    :columns="ASAdjustmentResultTableLayout"
    cellpadding="2"
    :style="{ lineHeight: '100%' }"
    :scroll="{ x: '8000px', y: '280px' }"
    :pagination="false"
    bordered
  />
</template>

<style>
.ant-table-tbody > tr > td {
  padding: 1px 4px !important;
}
td.column-right {
  text-align: right !important;
}
</style>
