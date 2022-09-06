import type { ColumnsType } from "ant-design-vue/es/table";

const ASAdjustmentResultTableLayout: ColumnsType = [
  {
    title: "No",
    dataIndex: "lineNumber",
    className: "column-right",
    width: "20px",
  },
  {
    title: "Result",
    dataIndex: "result",
    width: "30px",
  },
  {
    title: "Message",
    dataIndex: "message",
    width: "100px",
  },
  {
    title: "Plant",
    dataIndex: "globalPlantCode",
    width: "30px",
  },
  {
    title: "Plant Code",
    dataIndex: "vehicleProductionPlantCode",
    width: "30px",
  },
  {
    title: "Assembly Line",
    dataIndex: "vehicleAssemblyLineCode",
    width: "40px",
  },
  {
    title: "Prod Month",
    dataIndex: "productionPlanMonth",
    width: "40px",
  },
  {
    title: "Carline Item",
    dataIndex: "carLineItemCode",
    width: "50px",
  },
  {
    title: "SON",
    dataIndex: "son",
    width: "90px",
  },
  {
    title: "Area",
    dataIndex: "area",
    width: "30px",
  },
  {
    title: "Dist",
    dataIndex: "distributorCode",
    width: "30px",
  },
  {
    title: "DLR",
    dataIndex: "mcVehicleExportDealerCode",
    width: "30px",
  },
  {
    title: "Order Type",
    dataIndex: "vehicleOrderType",
    width: "30px",
  },
  {
    title: "AIC Special Order Code",
    dataIndex: "orderAllocationPriority",
    width: "50px",
  },
  {
    title: "Line-off Date(Plan)",
    dataIndex: "finalLineOffDatePlan",
    width: "40px",
  },
  {
    title: "Base Spec",
    dataIndex: "baseSpecificationCode",
    width: "30px",
  },
  {
    title: "AIC",
    dataIndex: "aic",
    width: "45px",
  },
  {
    title: "Product First ELM Code",
    dataIndex: "primaryElementCode",
    width: "80px",
  },
  {
    title: "Order Priority",
    dataIndex: "orderAllocationPriority",
    width: "40px",
  },
  {
    title: "ReqProdDate(From)",
    dataIndex: "vehicleOrderExpectDeliveryDateFrom",
    width: "38px",
  },
  {
    title: "ReqProdDate(To)",
    dataIndex: "vehicleOrderExpectDeliveryDateTo",
    width: "38px",
  },
  {
    title: "Prod Irregular Name1",
    dataIndex: "productionPlanIrregularityItemName1",
    width: "30px",
  },
  {
    title: "Prod Irregular Name2",
    dataIndex: "productionPlanIrregularityItemName2",
    width: "30px",
  },
  {
    title: "Prod Irregular Name3",
    dataIndex: "productionPlanIrregularityItemName3",
    width: "30px",
  },
  {
    title: "Prod Irregular Name4",
    dataIndex: "productionPlanIrregularityItemName4",
    width: "30px",
  },
  {
    title: "Prod Irregular Name5",
    dataIndex: "productionPlanIrregularityItemName5",
    width: "30px",
  },
  {
    title: "Prod Irregular Name6",
    dataIndex: "productionPlanIrregularityItemName6",
    width: "30px",
  },
  {
    title: "Prod Irregular Name7",
    dataIndex: "productionPlanIrregularityItemName7",
    width: "30px",
  },
  {
    title: "Prod Irregular Name8",
    dataIndex: "productionPlanIrregularityItemName8",
    width: "30px",
  },
  {
    title: "Prod Irregular Name9",
    dataIndex: "productionPlanIrregularityItemName9",
    width: "30px",
  },
  {
    title: "Prod Irregular Name10",
    dataIndex: "productionPlanIrregularityItemName10",
    width: "30px",
  },
  {
    title: "Prod Leveling Name1",
    dataIndex: "productionPlanLevelingItemName1",
    width: "30px",
  },
  {
    title: "Prod Leveling Name2",
    dataIndex: "productionPlanLevelingItemName2",
    width: "30px",
  },
  {
    title: "Prod Leveling Name3",
    dataIndex: "productionPlanLevelingItemName3",
    width: "30px",
  },
  {
    title: "Prod Leveling Name4",
    dataIndex: "productionPlanLevelingItemName4",
    width: "30px",
  },
  {
    title: "Prod Leveling Name5",
    dataIndex: "productionPlanLevelingItemName5",
    width: "30px",
  },
  {
    title: "Prod Leveling Name6",
    dataIndex: "productionPlanLevelingItemName6",
    width: "30px",
  },
  {
    title: "Prod Leveling Name7",
    dataIndex: "productionPlanLevelingItemName7",
    width: "30px",
  },
  {
    title: "Prod Leveling Name8",
    dataIndex: "productionPlanLevelingItemName8",
    width: "30px",
  },
  {
    title: "Prod Leveling Name9",
    dataIndex: "productionPlanLevelingItemName9",
    width: "30px",
  },
  {
    title: "Prod Leveling Name10",
    dataIndex: "productionPlanLevelingItemName10",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio 10 Gr",
    dataIndex: "productionPlanIrregularityItemName10",
    width: "100px",
  },
  {
    title: "Prod Leveling Prio 10 Gr",
    dataIndex: "productionPlanIrregularityItemName10",
    width: "100px",
  },
  {
    title: "SON",
    dataIndex: "transferDestinationSon",
    width: "90px",
  },
  {
    title: "Area",
    dataIndex: "transferDestinationArea",
    width: "30px",
  },
  {
    title: "Dist",
    dataIndex: "transferDestinationDistributorCode",
    width: "30px",
  },
  {
    title: "DLR",
    dataIndex: "transferDestinationMcVehicleExportDealerCode",
    width: "30px",
  },
  {
    title: "Order Type",
    dataIndex: "transferDestinationVehicleOrderType",
    width: "30px",
  },
  {
    title: "AIC Special Order Code",
    dataIndex: "transferDestinationOrderAllocationPriority",
    width: "50px",
  },
  {
    title: "Line-off Date(Plan)",
    dataIndex: "transferDestinationFinalLineOffDatePlan",
    width: "30px",
  },
  {
    title: "Base Spec",
    dataIndex: "transferDestinationBaseSpecificationCode",
    width: "30px",
  },
  {
    title: "AIC",
    dataIndex: "transferDestinationAic",
    width: "40px",
  },
  {
    title: "Product First ELM Code",
    dataIndex: "transferDestinationPrimaryElementCode",
    width: "80px",
  },
  {
    title: "Order Priority",
    dataIndex: "transferDestinationOrderAllocationPriority",
    width: "40px",
  },
  {
    title: "ReqProdDate(From)",
    dataIndex: "transferDestinationVehicleOrderExpectDeliveryDateFrom",
    width: "38px",
  },
  {
    title: "ReqProdDate(To)",
    dataIndex: "transferDestinationVehicleOrderExpectDeliveryDateTo",
    width: "38px",
  },
  {
    title: "Instructions",
    dataIndex: "assemblyScheduleAdjustmentInstructionCategory",
    width: "30px",
  },
  {
    title: "Volume",
    dataIndex: "assemblyScheduleAdjustmentVolume",
    width: "30px",
  },
  {
    title: "Upload User",
    dataIndex: "assemblyScheduleAdjustmentUploadUserId",
    width: "30px",
  },
  {
    title: "Upload Date",
    dataIndex: "assemblyScheduleAdjustmentUploadTime",
    width: "30px",
  },
  {
    title: "Status",
    dataIndex: "productionAdjustmentRequestTransferFlag",
    width: "30px",
  },
  {
    title: "Transfer Date",
    dataIndex: "productionAdjustmentRequestTransferTime",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio1",
    dataIndex: "productionPlanIrregularityPriority1",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio2",
    dataIndex: "productionPlanIrregularityPriority2",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio3",
    dataIndex: "productionPlanIrregularityPriority3",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio4",
    dataIndex: "productionPlanIrregularityPriority4",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio5",
    dataIndex: "productionPlanIrregularityPriority5",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio6",
    dataIndex: "productionPlanIrregularityPriority6",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio7",
    dataIndex: "productionPlanIrregularityPriority7",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio8",
    dataIndex: "productionPlanIrregularityPriority8",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio9",
    dataIndex: "productionPlanIrregularityPriority9",
    width: "30px",
  },
  {
    title: "Prod Irregular Prio10",
    dataIndex: "productionPlanIrregularityPriority10",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio1",
    dataIndex: "productionPlanLevelingPriority1",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio2",
    dataIndex: "productionPlanLevelingPriority2",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio3",
    dataIndex: "productionPlanLevelingPriority3",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio4",
    dataIndex: "productionPlanLevelingPriority4",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio5",
    dataIndex: "productionPlanLevelingPriority5",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio6",
    dataIndex: "productionPlanLevelingPriority6",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio7",
    dataIndex: "productionPlanLevelingPriority7",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio8",
    dataIndex: "productionPlanLevelingPriority8",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio9",
    dataIndex: "productionPlanLevelingPriority9",
    width: "30px",
  },
  {
    title: "Prod Leveling Prio10",
    dataIndex: "productionPlanLevelingPriority10",
    width: "30px",
  },
];
export default ASAdjustmentResultTableLayout;
