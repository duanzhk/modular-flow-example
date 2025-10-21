import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { AbstractManager, manager } from 'dzkcc-mflow/core'

@manager()
@ccclass('HomeMgr')
export class HomeMgr extends AbstractManager {
    initialize(): void {
        // throw new Error('Method not implemented.');
    }

    test1() {
        console.log('my is home mgr');
    }
}

