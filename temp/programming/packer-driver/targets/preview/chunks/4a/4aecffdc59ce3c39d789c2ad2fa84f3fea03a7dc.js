System.register([], function (_export, _context) {
  "use strict";

  var ServiceLocator;
  return {
    setters: [],
    execute: function () {
      //ServiceLocator：管理跨领域基础服务
      _export("ServiceLocator", ServiceLocator = class ServiceLocator {
        static regService(key, provider) {
          if (typeof provider === 'function') {
            // 注册工厂函数（延迟执行）
            this.services.set(key, {
              factory: provider
            });
          } else {
            // 直接注册实例
            this.services.set(key, {
              factory: () => provider,
              instance: provider
            });
          }
        }

        static getService(key) {
          var entry = this.services.get(key);
          if (!entry) throw new Error("Service " + key + " not registered!"); // 单例模式：若已有实例，直接返回

          if (entry.instance) return entry.instance; // 执行工厂函数，创建实例并缓存

          var instance = entry.factory();
          entry.instance = instance; // 缓存实例（单例）

          return instance;
        }

        static remove(key) {
          this.services.delete(key);
        }

        static clear() {
          this.services.clear();
        }

      });

      ServiceLocator.services = new Map();
    }
  };
});
//# sourceMappingURL=4aecffdc59ce3c39d789c2ad2fa84f3fea03a7dc.js.map