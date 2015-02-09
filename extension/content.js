/**
 * @file 内容脚本，运行于已加载应用页面
 * @author Wang Yi(wangyi25@baidu.com)
 * @date Mon Feb 09 2015
 */

/**
 * 接受来自后台脚本捕获的日志数据
 */
chrome.runtime.onMessage.addListener(messageHandler);

/**
 * runtime.message事件处理
 * 处理后台脚本发送的日志数据，并打印在console中
 *
 * @param {Object} data 消息数据
 * @param {MessageSender} sender
 * @param {Function} sendResponse 发送消息响应函数
 */
function messageHandler(data, sender, sendResponse) {
    // TODO: 格式化+配色
    console.log(data);
}