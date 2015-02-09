/**
 * @file 后台脚本
 * @author Wang Yi(wangyi25@baidu.com)
 * @date Mon Feb 09 2015
 */

/**
 * 在日志发送前进行捕获，并将数据传递给内容脚本
 */
chrome.webRequest.onBeforeRequest.addListener(
    beforeRequestHandler,
    {urls: [LOG_URL.DEV, LOG_URL.ONLINE]},
    ['requestBody']
);

/**
 * webRequest.beforeRequest事件处理
 * 在请求发出前将其捕获
 *
 * @param {Object} detail 捕获的请求信息
 */
function beforeRequestHandler(detail) {
    var requestBody = detail.requestBody;
    var tabId = detail.tabId;
    var logData = JSON.parse(decodeURIComponent(requestBody.formData.logData));
    chrome.tabs.sendMessage(tabId, logData);
}