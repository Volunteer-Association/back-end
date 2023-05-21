/** url地址 */
let baseURL = "";
if (process.env.NODE_ENV == "development") {
  // 开发环境
  baseURL = "http://localhost:8001";
} else {
  // 生产测试环境
  baseURL = "https://www.chenguihui.com/admin/"
}

export default baseURL;