/*
 * @Author: zhangjianfei
 * @Email:
 * @Date: 2021-04-24 21:16:47
 * @LastEditors: zhangjianfei
 * @LastEditTime: 2021-04-24 21:19:56
 * @Description:
 */
import { ReportHandler } from "web-vitals";
// 做一些埋点上报
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
