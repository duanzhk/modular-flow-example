
//@ts-ignore
import { BaseUITest1 } from 'db://assets/src/views/BaseUITest1';
import { _decorator, Button, Vec2 } from 'cc';
import { view } from 'dzkcc-mflow/core';
const { ccclass, property } = _decorator;

@view()
@ccclass('UITest1')
export class UITest1 extends BaseUITest1 {
    @property({type: Button})
    button: Button;
    onEnter(args?: any): void { 
        mf.core.getManager('HomeMgr').test1();
        this.button.node.on(Button.EventType.CLICK, () => {
            // mf.core.getManager('RankMgr').test2();
            // mf.gui.open('UITest2')
            
            mf.gui.openAndPush('UITest2', 'grouptest')
        });
    }
    onExit(): void { }
    onPause(): void { }
    onResume(): void { }


}