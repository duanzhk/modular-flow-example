System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, __awaiter, assetManager, Prefab, Asset, SpriteFrame, sp, ResLoader, DefaultBundle;

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      Prefab = _cc.Prefab;
      Asset = _cc.Asset;
      SpriteFrame = _cc.SpriteFrame;
      sp = _cc.sp;
    }, function (_unresolved_) {
      __awaiter = _unresolved_.__awaiter;
    }],
    execute: function () {
      __checkObsolete__(['assetManager', 'Prefab', 'Asset', 'SpriteFrame', 'sp']);

      DefaultBundle = "resources";

      _export("ResLoader", ResLoader = class ResLoader {
        loadAsset(path, type, nameOrUrl) {
          if (nameOrUrl === void 0) {
            nameOrUrl = DefaultBundle;
          }

          //TODO: bundle.release和assetManager.releaseAsset的区别?
          if (assetManager.assets.has(path)) {
            var asset = assetManager.assets.get(path);
            return Promise.resolve(asset);
          }

          return new Promise((resolve, reject) => {
            assetManager.loadBundle(nameOrUrl, (err, bundle) => {
              if (err) {
                reject(err);
              } else {
                bundle.load(path, type, (err, data) => {
                  if (err) {
                    reject(err);
                  } else {
                    data.addRef();
                    resolve(data);
                  }
                });
              }
            });
          });
        }

        loadPrefab(path, nameOrUrl) {
          if (nameOrUrl === void 0) {
            nameOrUrl = DefaultBundle;
          }

          return this.loadAsset(path, Prefab, nameOrUrl);
        }

        loadSpriteFrame(ref, path, nameOrUrl) {
          if (nameOrUrl === void 0) {
            nameOrUrl = DefaultBundle;
          }

          return __awaiter(this, void 0, void 0, function* () {
            var sf = yield this.loadAsset(path, SpriteFrame, nameOrUrl);

            if (ref === null || ref === void 0 ? void 0 : ref.isValid) {
              ref.spriteFrame = sf;
              return Promise.resolve(sf);
            } else {
              // 没有引用到的资源，释放掉
              this.release(path, SpriteFrame, nameOrUrl);
              return Promise.reject(new Error("Sprite is not valid"));
            }
          });
        }

        loadSpine(ref, path, nameOrUrl) {
          if (nameOrUrl === void 0) {
            nameOrUrl = DefaultBundle;
          }

          return __awaiter(this, void 0, void 0, function* () {
            var spine = yield this.loadAsset(path, sp.SkeletonData);

            if (ref === null || ref === void 0 ? void 0 : ref.isValid) {
              ref.skeletonData = spine;
              return Promise.resolve(spine);
            } else {
              // 没有引用到的资源，释放掉
              this.release(path, sp.SkeletonData, nameOrUrl);
              return Promise.reject(new Error("Spine is not valid"));
            }
          });
        }

        release(pathOrAsset, type, nameOrUrl) {
          if (nameOrUrl === void 0) {
            nameOrUrl = DefaultBundle;
          }

          if (typeof pathOrAsset === "string") {
            var bundle = assetManager.getBundle(nameOrUrl);
            var asset = bundle === null || bundle === void 0 ? void 0 : bundle.get(pathOrAsset, type);
            asset === null || asset === void 0 ? void 0 : asset.decRef();

            if ((asset === null || asset === void 0 ? void 0 : asset.refCount) === 0) {
              bundle === null || bundle === void 0 ? void 0 : bundle.release(pathOrAsset, type);
            }
          } else if (pathOrAsset instanceof Asset) {
            pathOrAsset.decRef();

            if (pathOrAsset.refCount === 0) {
              assetManager.releaseAsset(pathOrAsset);
            }
          }
        }

      });
    }
  };
});
//# sourceMappingURL=a0d22e54c671172a900c9d62d949ac7f079a00e6.js.map