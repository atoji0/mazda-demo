import { ref, Ref } from "vue";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import i18n from "../locales";
import { errorDialog } from "../util/utils";
import { message } from "ant-design-vue";
import * as ExcelJS from "exceljs";
import saveAs from "file-saver";

import AsAdjustmentSearchCondition from "../models/AsAdjustmentSearchCondition";
import AsAdjustmentSearchList from "../models/AsAdjustmentSearchCondition";
import ASAdjustmentResultTableLayout from "../views/layout/ASAdjustmentResultTableLayout";

class SearchUICondition {
  sonList: string = "";
  aicList: string = "";
  transferDestinationSonList: string = "";
  transferDestinationAicList: string = "";
  productionAdjustmentRequestTransferTimeFromTo: [Dayjs | null, Dayjs | null] = [null, null];
  finalLineOffDatePlanFromTo: [Dayjs | null, Dayjs | null] = [null, null];
  transferDestinationFinalLineOffDatePlanFromTo: [Dayjs | null, Dayjs | null] = [null, null];
  assemblyScheduleAdjustmentUploadDateTimeFrom: Dayjs | null = null;
  assemblyScheduleAdjustmentUploadDateTimeTo: Dayjs | null = null;
}

class AsAdjustmentService {
  private URL = "/api/asAdjustment/";

  private _searchOption = ref<AsAdjustmentSearchCondition>(new AsAdjustmentSearchCondition());
  private _searchUICondition = ref<SearchUICondition>(new SearchUICondition());
  private _searchCondition = ref<AsAdjustmentSearchCondition>(new AsAdjustmentSearchCondition());
  private _results = ref<AsAdjustmentSearchList[]>([]);
  private _targetSons = ref<string[]>([]);
  private _excludedLineOffDateFromTo = ref<[Dayjs | null, Dayjs | null]>([null, null]);

  get searchOption(): Ref<Partial<AsAdjustmentSearchCondition>> {
    return this._searchOption;
  }

  get searchUICondition(): Ref<SearchUICondition> {
    return this._searchUICondition;
  }

  get searchCondition(): Ref<Partial<AsAdjustmentSearchCondition>> {
    return this._searchCondition;
  }

  get results(): Ref<AsAdjustmentSearchList[]> {
    return this._results;
  }

  get targetSons(): Ref<string[]> {
    return this._targetSons;
  }

  get excludedLineOffDateFromTo(): Ref<[Dayjs | null, Dayjs | null]> {
    return this._excludedLineOffDateFromTo;
  }

  public initCondition(): void {
    axios.post<AsAdjustmentSearchCondition>(this.URL + "searchCondition").then((res) => {
      this._searchOption.value = res.data;
    });
  }

  public executeAdjustment(): void {
    this._searchUICondition.value.assemblyScheduleAdjustmentUploadDateTimeFrom = dayjs();
    axios.post<AsAdjustmentSearchList[]>(this.URL + "searchList").then((res) => {
      this._results.value = res.data;
    });
  }

  public searchResults(): void {
    let errorMessages: string[] = [];

    // エラーチェック
    if (this.checkLength(this._searchUICondition.value.aicList, 10)) {
      errorMessages.push(i18n.global.t("message.error.length", { columnName: "AIC(From)", length: 10 }));
    }
    if (this.checkLength(this._searchUICondition.value.sonList, 10)) {
      errorMessages.push(i18n.global.t("message.error.length", { columnName: "SON(From)", length: 10 }));
    }
    if (this.checkLength(this._searchUICondition.value.transferDestinationSonList, 10)) {
      errorMessages.push(i18n.global.t("message.error.length", { columnName: "AIC(To)", length: 10 }));
    }
    if (this.checkLength(this._searchUICondition.value.transferDestinationAicList, 10)) {
      errorMessages.push(i18n.global.t("message.error.length", { columnName: "SON(To)", length: 10 }));
    }
    if (errorMessages.length == 0) {
      // エラーがなければ、検索実行
      axios.post<AsAdjustmentSearchList[]>(this.URL + "searchList").then((res) => {
        this._results.value = res.data;
      });
    } else {
      // エラーがあれば、ダイアログ表示
      errorDialog(errorMessages);
    }
  }

  public clearResults(): void {
    this._searchCondition.value = new AsAdjustmentSearchCondition();
    this._searchUICondition.value = new SearchUICondition();
    this._results.value = [];
  }

  public clearSons(): void {
    this._targetSons.value = [];
    this._excludedLineOffDateFromTo.value = [null, null];
  }

  public uploadSon(file: File): Boolean {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const arrayBuf = reader.result;
      var workbook = new ExcelJS.Workbook();
      if (typeof arrayBuf !== "string" && arrayBuf != null) {
        workbook.xlsx.load(arrayBuf).then(() => {
          const ws = workbook.getWorksheet(1);
          const data = ws.getColumn(1).values;
          if (data.length > 1 && data[1] == "SON") {
            this._targetSons.value = [];
            for (var i = 2; i < data.length; i++) {
              this._targetSons.value.push(String(data[i]));
            }
            message.info(i18n.global.t("message.info.importSon", { num: this._targetSons.value.length }), 3);
          }
        });
      }
    };
    return false;
  }

  public downloadExcel(): void {
    axios.get("src/assets/asAdjustment.xlsx", { responseType: "blob" }).then((response) => {
      saveAs(new Blob([response.data], { type: "application/octet-stream" }), "test.xlsx");
    });
  }

  public downloadResult(): void {
    var headerList: string[] = [];
    ASAdjustmentResultTableLayout.forEach((data) => {
      if (data.title != undefined) {
        headerList.push(data.title?.toString());
      }
    });
    var rows: any[] = [];
    rows.push(headerList);
    this._results.value.forEach((json) => {
      rows.push(Object.values(json));
    });
    var workbook = new ExcelJS.Workbook();
    const ws = workbook.addWorksheet("Data");
    ws.addRows(rows);
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: "application/octet-stream" }), "test.xlsx");
    });
  }

  private checkLength(checkStr: string, len: number): boolean {
    if (checkStr.length > 0) {
      let strList: string[] = checkStr.split("\n");
      for (let str of strList) {
        if (str.length != len) {
          return true;
        }
      }
    }
    return false;
  }
}
export default new AsAdjustmentService();
