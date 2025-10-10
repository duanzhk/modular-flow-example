
import { _decorator,Component, } from 'cc';
import { BaseView } from "dzkcc-mflow/libs";
const { ccclass, property, disallowMultiple } = _decorator;
@disallowMultiple()
export abstract class BasegrassGoup extends BaseView {
    /** @internal */
    private static readonly __path__: string = "db://assets/model/helloWorld/grass/grassGoup.prefab";
    
}