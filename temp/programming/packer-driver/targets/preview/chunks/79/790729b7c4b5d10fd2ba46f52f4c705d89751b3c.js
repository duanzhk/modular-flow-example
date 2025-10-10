System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, Component, UIRoot;

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }],
    execute: function () {
      __checkObsolete__(['Component']);

      _export("UIRoot", UIRoot = class UIRoot extends Component {
        onLoad() {// 初始化UI根节点
        }

      });
    }
  };
});
//# sourceMappingURL=790729b7c4b5d10fd2ba46f52f4c705d89751b3c.js.map