System.register(["__unresolved_0", "cc", "dzkcc-mflow/libs"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CocosCore, _decorator, _dec, _class, _crd, ccclass, property, example;

  function _reportPossibleCrUseOfCocosCore(extras) {
    _reporterNs.report("CocosCore", "dzkcc-mflow/libs", _context.meta, extras);
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
      CocosCore = _dzkccMflowLibs.CocosCore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "858batDGQ1FWabb0Y3JIIMj", "example", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("example", example = (_dec = ccclass('example'), _dec(_class = class example extends (_crd && CocosCore === void 0 ? (_reportPossibleCrUseOfCocosCore({
        error: Error()
      }), CocosCore) : CocosCore) {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9bd506b1c7614d4f053f8b7dc7c411b2eaa66534.js.map