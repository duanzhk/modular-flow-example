System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BaseView, ccclass, property;

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseView", BaseView = class BaseView extends Component {
        constructor() {
          super(...arguments);
          /** @internal */

          this.__isIView__ = true;
          /** @internal */

          this.__group__ = undefined;
          this._eventHandlers = [];
          this._loaderHandlers = [];
        }

        get event() {
          if (!this._eventProxy) {
            this._eventProxy = new Proxy(mf.event, {
              get: (target, prop) => {
                if (prop === 'on' || prop === 'once') {
                  return (keyOrHandler, listener, context, args) => {
                    var handlers = Array.isArray(keyOrHandler) ? keyOrHandler : [keyOrHandler];
                    handlers.forEach(handler => {
                      if (typeof handler === 'object') {
                        this._eventHandlers.push({
                          key: handler.key,
                          listener: handler.listener
                        });
                      } else {
                        this._eventHandlers.push({
                          key: keyOrHandler,
                          listener: listener
                        });
                      }
                    });
                    return Reflect.get(target, prop).apply(target, [keyOrHandler, listener, context, args]);
                  };
                }

                return Reflect.get(target, prop);
              }
            });
          }

          return this._eventProxy;
        }

        get res() {
          if (!this._loaderProxy) {
            this._loaderProxy = new Proxy(mf.res, {
              get: (target, prop) => {
                //劫持所有load相关方法
                if (prop.startsWith('load')) {
                  return (path, type, nameOrUrl) => {
                    return Reflect.get(target, prop).apply(target, [path, type, nameOrUrl]).then(asset => {
                      this._loaderHandlers.push({
                        path,
                        asset
                      });

                      return asset;
                    });
                  };
                }

                return Reflect.get(target, prop);
              }
            });
          }

          return this._loaderProxy;
        }

        onExit() {
          // 自动清理所有事件监听
          this._eventHandlers.forEach(_ref => {
            var {
              key,
              listener
            } = _ref;
            //@ts-ignore
            mf.event.off(key, listener);
          });

          this._eventHandlers = [];
        }

        onDestroy() {
          // 自动清理加载的资源
          this._loaderHandlers.forEach(_ref2 => {
            var {
              path,
              asset
            } = _ref2;
            mf.res.release(path, asset.constructor); // mf.res.release(asset);
          });

          this._loaderHandlers = [];
        }

        getManager(ctor) {
          // 业务组件避免直接依赖底层服务定位器，所以使用app.core统一对外接口，方便后续架构演进
          return mf.core.getManager(ctor);
        }

        getModel(ctor) {
          // 业务组件避免直接依赖底层服务定位器，所以使用app.core统一对外接口，方便后续架构演进
          return mf.core.getModel(ctor);
        }

      });
    }
  };
});
//# sourceMappingURL=0cc9001c80e5c6cd35dbd239647597296936a982.js.map