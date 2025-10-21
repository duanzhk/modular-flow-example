/**
 * 自动生成的全局类型声明文件
 * ⚠️ 请勿手动修改此文件！
 * 重新生成：在 Cocos Creator 编辑器中运行 mflow-tools -> Generate API type hints/生成API类型提示
 */

// Manager 导入
import type { HomeMgr } from '../src/game/managers/HomeMgr';
import type { RankMgr } from '../src/game/managers/RankMgr';

// View 导入
import type { UITest1 } from '../src/game/gui/UITest1';
import type { UITest2 } from '../src/game/gui/UITest2';

declare global {
    /**
     * Manager 注册表 - 全局类型声明
     * 用于 getManager<ManagerClass>() 的类型推断
     */
    interface ManagerRegistry {
        HomeMgr: typeof HomeMgr;
        RankMgr: typeof RankMgr;
    }

    /**
     * UI 注册表 - 全局类型声明
     * 用于 open<UIClass>() 的类型推断
     */
    interface UIRegistry {
        UITest1: typeof UITest1;
        UITest2: typeof UITest2;
    }

}
