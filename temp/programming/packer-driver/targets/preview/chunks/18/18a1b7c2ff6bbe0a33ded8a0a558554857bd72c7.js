System.register(["__unresolved_0", "cc", "dzkcc-mflow/libs"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BaseView, _dec, _class, _class2, _crd, ccclass, property, disallowMultiple, BasegrassGoup;

  function _reportPossibleCrUseOfBaseView(extras) {
    _reporterNs.report("BaseView", "dzkcc-mflow/libs", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_dzkccMflowLibs) {
      BaseView = _dzkccMflowLibs.BaseView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9597aUrY3NOiLk+lHgS2jIv", "BasegrassGoup", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property,
        disallowMultiple
      } = _decorator);

      _export("BasegrassGoup", BasegrassGoup = (_dec = disallowMultiple(), _dec(_class = (_class2 = class BasegrassGoup extends (_crd && BaseView === void 0 ? (_reportPossibleCrUseOfBaseView({
        error: Error()
      }), BaseView) : BaseView) {}, _class2.__path__ = "db://assets/model/helloWorld/grass/grassGoup.prefab", _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18a1b7c2ff6bbe0a33ded8a0a558554857bd72c7.js.map