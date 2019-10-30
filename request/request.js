/**
 * @method request
 * @description ajax 请求 promise
 */

const request = (url, options = {}) => {
  let xhr;
  if (typeof url === "object") {
    options = url;
  } else {
    options.url = url
  }

  const {method = 'GET', data = null, headers = {}} = options;

  /**
   * @description 检测浏览器是否支持 XMLHttpRequest
   */
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
  }

  /**
   * @description 代理被创建，但尚未调用 open() 方法
   */
  if (xhr.readyState === 0) {
    typeof options.beforeSend === 'function' && options.beforeSend()
  }

  const isJSON = str => {
    if (typeof str == 'string') {
      try {
        const obj = JSON.parse(str);
        if (typeof obj === 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  };

  return new Promise(function (resolve, reject) {

    xhr.onreadystatechange = function () {

      /**
       * @description open() 方法已经被调用
       */
      if (xhr.readyState === 1) {

      }

      /**
       * @description send() 方法已经被调用，并且头部和状态已经可获得
       */
      if (xhr.readyState === 2) {

      }

      /**
       * @description 下载中； responseText 属性已经包含部分数据
       */
      if (xhr.readyState === 3) {

      }

      /**
       * @description 下载操作已完成
       */
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const result = xhr.responseText;
          resolve(isJSON(result) ? JSON.parse(result) : result);
        } else {
          const result = {
            error: xhr.statusText,
            message: xhr.statusText,
            path: options.url,
            status: xhr.status,
            timestamp: new Date() * 1
          };
          resolve(result);
        }
      }
    };
    xhr.open(method.toUpperCase(), options.url);

    /**
     * @description Header 设置
     */
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }

    /**
     * @description 超时设置
     */
    xhr.timeout = 2000;

    if (typeof options.ontimeout === 'function') {
      xhr.ontimeout = function (e) {
        options.ontimeout(e);
      };
    }

    if (typeof options.onerror === 'function') {
      xhr.onerror = function (e) {
        options.onerror(e);
      };
    }

    if (typeof options.onabort === 'function') {
      xhr.onabort = function (e) {
        options.onabort(e);
      };
    }

    if (typeof options.onload === 'function') {
      xhr.onload = function (e) {
        options.onload(e);
      };
    }

    if (typeof options.onloadend === 'function') {
      xhr.onloadend = function (e) {
        options.onloadend(e);
      };
    }

    if (typeof options.onloadstart === 'function') {
      xhr.onloadstart = function (e) {
        options.onloadstart(e);
      };
    }

    if (typeof options.onprogress === 'function') {
      xhr.onprogress = function (e) {
        options.onprogress(e);
      };
    }
    xhr.send(data);
  });
};