import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { AbstractManager, manager } from 'dzkcc-mflow/core'

@manager()
@ccclass('RankMgr')
export class RankMgr extends AbstractManager {
    initialize(): void {
        // throw new Error('Method not implemented.');
    }

    test2() {
        console.log('my is rank mgr');
    }
}

