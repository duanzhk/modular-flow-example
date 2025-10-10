System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BasegrassGoup, _decorator, _dec, _class, _crd, ccclass, property, grassGoup;

  function _reportPossibleCrUseOfBasegrassGoup(extras) {
    _reporterNs.report("BasegrassGoup", "db://assets/src/views/BasegrassGoup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BasegrassGoup = _unresolved_2.BasegrassGoup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66a08fSCVVK/JzpO7FKOmse", "grassGoup", undefined); //@ts-ignore


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("grassGoup", grassGoup = (_dec = ccclass('grassGoup'), _dec(_class = class grassGoup extends (_crd && BasegrassGoup === void 0 ? (_reportPossibleCrUseOfBasegrassGoup({
        error: Error()
      }), BasegrassGoup) : BasegrassGoup) {
        onEnter(args) {}

        onExit() {}

        onPause() {}

        onResume() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad702ee6b713e56424dfc24a092b249fd6d43b45.js.map