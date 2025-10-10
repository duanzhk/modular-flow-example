System.register(["cc", "__unresolved_0", "__unresolved_1", "reflect-metadata"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, __awaiter, director, Node, Sprite, Widget, Input, input, instantiate, ServiceLocator, CcocosUIManager, UIManager, _uiRoot, UIRoot, _uiMask, UIMask;

  function addWidget(node) {
    var widget = node.getComponent(Widget) || node.addComponent(Widget);
    widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
    widget.left = widget.right = widget.top = widget.bottom = 0;
  }

  function setLayer(node) {
    node.layer = UIRoot.layer;
    node.children.forEach(child => {
      setLayer(child);
    });
  }

  function addChild(node) {
    UIRoot.addChild(node);
    setLayer(node);
  }

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Widget = _cc.Widget;
      Input = _cc.Input;
      input = _cc.input;
      instantiate = _cc.instantiate;
    }, function (_unresolved_) {
      __awaiter = _unresolved_.__awaiter;
    }, function (_unresolved_2) {
      ServiceLocator = _unresolved_2.ServiceLocator;
    }, function (_reflectMetadata) {}],
    execute: function () {
      __checkObsolete__(['director', 'Node', 'Sprite', 'Widget', 'Input', 'input', 'instantiate']);

      UIRoot = new Proxy({}, {
        get(target, prop) {
          if (!_uiRoot) {
            var canvas = director.getScene().getChildByPath('Canvas');
            director.addPersistRootNode(canvas);
            _uiRoot = new Node('__UIRoot__');
            _uiRoot.layer = canvas.layer;

            _uiRoot.setParent(canvas);

            addWidget(_uiRoot);
          }

          return Reflect.get(_uiRoot, prop);
        }

      });
      UIMask = new Proxy({}, {
        get(target, prop) {
          if (!_uiMask) {
            _uiMask = new Node('__UIMask__');
            addChild(_uiMask);
            addWidget(_uiMask);

            _uiMask.setPosition(0, 0);

            _uiMask.addComponent(Sprite).color.set(0, 0, 0, 0.5);
          }

          var value = Reflect.get(_uiMask, prop); // 如果是放的话，可能要绑定原始实例上下文

          return typeof value === 'function' ? value.bind(_uiMask) : value; // return Reflect.get(_uiMask, prop)
        },

        set(target, p, newValue, receiver) {
          if (p === 'active') {
            _uiMask.active = newValue;
            return true;
          }

          return Reflect.set(_uiMask, p, newValue, receiver);
        }

      }); // 接口隔离，实现具体的CcocosUIManager

      CcocosUIManager = class CcocosUIManager {
        getTopView() {
          return this.internalGetTopView();
        }

        open(viewType, args) {
          var vt = viewType;
          return this.internalOpen(vt, args);
        }

        close(viewortype, destory) {
          this.internalClose(viewortype, destory);
        }

        openAndPush(viewType, group, args) {
          var vt = viewType;
          return this.internalOpenAndPush(vt, group, args);
        }

        closeAndPop(group, destroy) {
          this.internalCloseAndPop(group, destroy);
        }

        clearStack(group, destroy) {
          this.internalClearStack(group, destroy);
        }

      };

      _export("UIManager", UIManager = class UIManager extends CcocosUIManager {
        constructor() {
          super();
          this._cache = new Map();
          this._groupStacks = new Map();
          UIMask.on(Node.EventType.TOUCH_END, event => {
            var view = this.getTopView();

            if ('__group__' in view) {
              if (view.__group__ != undefined) {
                this.closeAndPop(view.__group__, false);
              } else {
                this.close(view, false);
              }
            }
          });
        }

        _getPrefabPath(viewType) {
          var prototype = Object.getPrototypeOf(viewType); // 沿着原型链向上查找直到找到定义__path__的基类。注意通过类只能找到静态属性。

          while (prototype) {
            if (prototype.hasOwnProperty('__path__')) {
              return prototype.__path__;
            }

            prototype = Object.getPrototypeOf(prototype);
          }

          throw new Error("Prefab path not found for " + viewType.constructor.name);
        } // 调整Mask层级


        _adjustMaskLayer() {
          var children = UIRoot.children;

          if (children.length == 1) {
            UIMask.active = false;
            return;
          }

          UIMask.active = true;
          UIMask.setSiblingIndex(Math.max(children.length - 2, 0));
        }

        _blockInput(block) {
          function blocker(event) {
            event.propagationImmediateStopped = true;
          }

          if (block) {
            for (var eventType in Input.EventType) {
              input.on(Input.EventType[eventType], blocker);
            }
          } else {
            for (var _eventType in Input.EventType) {
              input.off(Input.EventType[_eventType], blocker);
            }
          }
        }

        _load(viewType, args) {
          return __awaiter(this, void 0, void 0, function* () {
            var target;

            if (this._cache.has(viewType.name)) {
              target = this._cache.get(viewType.name);
            } else {
              var prefabPath = this._getPrefabPath(viewType);

              var ResMgr = ServiceLocator.getService('ResLoader');
              var prefab = yield ResMgr.loadPrefab(prefabPath);
              target = instantiate(prefab);

              this._cache.set(viewType.name, target);
            }

            return target.getComponent(viewType);
          });
        }

        _remove(viewortype, destroy) {
          var _a;

          if (typeof viewortype == 'function') {
            var cached = this._cache.get(viewortype.name);

            if (!cached) {
              console.warn("No cached view found for " + viewortype.name);
              return;
            }

            this._remove(cached.getComponent(viewortype), destroy);

            return;
          }

          if ('__group__' in viewortype) {
            viewortype.__group__ = undefined;
          }

          viewortype.onExit();
          viewortype.node.removeFromParent();

          if (destroy) {
            var cacheKey = viewortype.constructor.name;
            (_a = this._cache.get(cacheKey)) === null || _a === void 0 ? void 0 : _a.destroy();

            this._cache.delete(cacheKey);
          }
        }

        internalGetTopView() {
          var target = UIRoot.children.reverse()[0];

          if (!target) {
            return undefined;
          }

          var comps = target.components;

          for (var i = 0; i < comps.length; i++) {
            var comp = comps[i];

            if ("__isIView__" in comp) {
              if (comp.__isIView__) {
                return comp;
              }
            }
          }

          console.warn("No view found in " + target.name);
          return undefined;
        }

        internalOpen(viewType, args) {
          return __awaiter(this, void 0, void 0, function* () {
            this._blockInput(true);

            var view = yield this._load(viewType, args);
            addChild(view.node);

            this._adjustMaskLayer();

            view.onEnter(args);

            this._blockInput(false);

            return view;
          });
        }

        internalClose(viewortype, destroy) {
          this._remove(viewortype, destroy);

          this._adjustMaskLayer();
        }

        internalOpenAndPush(viewType, group, args) {
          return __awaiter(this, void 0, void 0, function* () {
            this._blockInput(true);

            var view = yield this._load(viewType, args);
            var stack = this._groupStacks.get(group) || [];

            this._groupStacks.set(group, stack);

            var top = stack[stack.length - 1];

            if (top) {
              top.onPause();
              top.node.removeFromParent();
            }

            if ('__group__' in view) {
              view.__group__ = group;
            }

            stack.push(view);
            addChild(view.node);

            this._adjustMaskLayer();

            view.onEnter(args);

            this._blockInput(false);

            return view;
          });
        }

        internalCloseAndPop(group, destroy) {
          var stack = this._groupStacks.get(group);

          if (!stack) {
            console.warn("No stack found for group " + group);
            return;
          }

          if (stack.length == 0) {
            console.warn("Stack is empty for group " + group);
            return;
          }

          this._remove(stack.pop(), destroy);

          var top = stack[stack.length - 1];

          if (top) {
            top.onResume();
            addChild(top.node);
          }

          this._adjustMaskLayer();
        }

        internalClearStack(group, destroy) {
          var stack = this._groupStacks.get(group);

          if (!stack) {
            console.warn("No stack found for group " + group);
            return;
          }

          while (stack.length > 0) {
            var view = stack.pop();

            if (view) {
              this._remove(view, destroy);
            }
          }
        }

      });
    }
  };
});
//# sourceMappingURL=9404c500d49878c020e26f7f8e288427f293ac3f.js.map