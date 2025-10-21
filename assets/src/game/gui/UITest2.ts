
//@ts-ignore
import { BaseUITest2 } from 'db://assets/src/views/BaseUITest2';
import { _decorator, Button } from 'cc';
import { view } from 'dzkcc-mflow/core';
const { ccclass, property } = _decorator;

@view()
@ccclass('UITest2')
export class UITest2 extends BaseUITest2 {
    @property({ type: Button })
    button: Button;
    onEnter(args?: any): void {
        this.hp.string = "我是test2"
        this.button.node.on(Button.EventType.CLICK, () => {
            // mf.core.getManager('RankMgr').test2();
            // mf.gui.close('UITest2')
            mf.gui.closeAndPop('grouptest')
        });
    }
    onExit(): void {
        super.onExit()
        this.button.node.off(Button.EventType.CLICK)
    }
    onPause(): void { }
    onResume(): void { }
}