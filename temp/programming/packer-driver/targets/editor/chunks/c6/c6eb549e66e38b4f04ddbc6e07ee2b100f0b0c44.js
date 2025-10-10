System.register(["cc", "__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, Component, AbstractCore, autoRegister, ServiceLocator, UIManager, ResLoader, Broadcaster, Core, CocosCore;

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_) {
      AbstractCore = _unresolved_.AbstractCore;
    }, function (_unresolved_2) {
      autoRegister = _unresolved_2.autoRegister;
    }, function (_unresolved_3) {
      ServiceLocator = _unresolved_3.ServiceLocator;
    }, function (_unresolved_4) {
      UIManager = _unresolved_4.UIManager;
    }, function (_unresolved_5) {
      ResLoader = _unresolved_5.ResLoader;
    }, function (_unresolved_6) {
      Broadcaster = _unresolved_6.Broadcaster;
    }, function (_unresolved_7) {}],
    execute: function () {
      __checkObsolete__(['Component']);

      Core = class Core extends AbstractCore {
        initialize() {
          console.log('Core fromework initialize'); // 注册框架基础服务

          ServiceLocator.regService('EventManager', new Broadcaster());
          ServiceLocator.regService('ResLoader', new ResLoader());
          ServiceLocator.regService('UIManager', new UIManager()); // 注册业务模块（通过装饰器自动注册）
          // 推迟到构造函数执行完毕

          queueMicrotask(() => autoRegister(this));
        }

      };

      _export("CocosCore", CocosCore = class CocosCore extends Component {
        onLoad() {
          ServiceLocator.regService('core', new Core());
        }

      });
    }
  };
});
//# sourceMappingURL=c6eb549e66e38b4f04ddbc6e07ee2b100f0b0c44.js.map