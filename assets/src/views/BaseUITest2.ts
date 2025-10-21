
import { _decorator,Component,Label } from 'cc';
import { BaseView } from "dzkcc-mflow/libs";
const { ccclass, property, disallowMultiple } = _decorator;
@disallowMultiple()
export abstract class BaseUITest2 extends BaseView {
    /** @internal */
    private static readonly __path__: string = "db://assets/resources/UITest2";
    @property({ type: Label }) hp:Label = null!;
}