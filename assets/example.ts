import { CocosCore} from "dzkcc-mflow/libs";
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('example')
export class example extends CocosCore {
    start() {
        //测试1
        // mf.gui.open('UITest1')
        // mf.core.getManager('HomeMgr').test1();

        //测试2
        mf.gui.openAndPush('UITest1', 'grouptest')
    }

    update(deltaTime: number) {
        
    }
}

