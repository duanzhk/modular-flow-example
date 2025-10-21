import { _decorator, Component, Node } from 'cc';
import { CocosCore } from 'dzkcc-mflow/libs';
const { ccclass, property } = _decorator;

@ccclass('Lancher')
export class Lancher extends CocosCore {
    start() {
        // mf.core.getManager('HomeMgr').test1()
        // mf.core.getManager('RankMgr').test2()
        // mf.gui.open('UITest1')
        mf.gui.openAndPush('UITest1', 'grouptest')

    }
}

