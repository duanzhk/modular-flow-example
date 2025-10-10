System.register(["__unresolved_0", "reflect-metadata"], function (_export, _context) {
  "use strict";

  var ServiceLocator, App;
  return {
    setters: [function (_unresolved_) {
      ServiceLocator = _unresolved_.ServiceLocator;
    }, function (_reflectMetadata) {}],
    execute: function () {
      /**
       * 对外暴露的全局app对像，用于访问基础能力，为上层业务提供了简洁的访问方式
       *
       * @class App
       */
      _export("App", App = class App {
        static get core() {
          return ServiceLocator.getService('core');
        }

        static get gui() {
          return ServiceLocator.getService('UIManager');
        }

        static get res() {
          return ServiceLocator.getService('ResLoader');
        }

        static get event() {
          return ServiceLocator.getService('EventManager');
        }

      });

      App.log = null;
      App.config = null;
      App.http = null;
      App.socket = null;
      App.storage = null;
      App.audio = null;
      App.timer = null; //例挂载到全局对象

      globalThis.mf = App;
    }
  };
});
//# sourceMappingURL=262ef01ee11646e77a107aaa54071716840d7a71.js.map