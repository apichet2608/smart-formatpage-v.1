// Exported function to handle CSV export
import Papa from "papaparse";
import { formatDateForexport } from "./formatCreateDate";

export const handleExportCSV = (data, name) => {
  if (data.length > 0) {
    const csvDay = Papa.unparse(data);
    const currentDateTime = formatDateForexport(Date.now());
    const fileName = `${name}_${currentDateTime}.csv`;
    const csvdata = new Blob([csvDay], {
      type: "text/csv;charset=utf-8;",
    });
    const csvURLDay = window.URL.createObjectURL(csvdata);
    const tempLinkDay = document.createElement("a");
    tempLinkDay.href = csvURLDay;
    tempLinkDay.setAttribute("download", fileName);
    tempLinkDay.click();
  }
};
