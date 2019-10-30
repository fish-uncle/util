/**
 * @method agent
 * @description 代理，观察者
 */

const agent = function () {
  this.handlers = {};
};

agent.prototype = {
  constructor: EventTarget,

  /**
   * @description 添加代理对象
   */
  addHandler: function (type, handler) {
    if (typeof this.handlers[type] === "undefined") {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler)
  },

  /**
   * @description 触发代理
   */
  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (this.handlers[event.type] instanceof Array) {
      let handlers = this.handlers[event.type], i, len;
      for (i = 0, len = handlers.length; i < len; i++) {
        handlers[i](event);
      }
    }
  },

  /**
   * @description 移除代理对象
   */
  removeHandler: function (type, handler) {
    if (this.handlers[type] instanceof Array) {
      let handlers = this.handlers[type], i, len;
      for (i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i] === handler) {
          break;
        }
      }
      handlers.splice(i, 1);
    }
  }
};