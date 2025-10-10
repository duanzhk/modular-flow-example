
//@ts-ignore
import { BasegrassGoup } from 'db://assets/src/views/BasegrassGoup';
import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('grassGoup')
export class grassGoup extends BasegrassGoup {
    onEnter(args?: any): void { }
    onExit(): void { }
    onPause(): void { }
    onResume(): void { }
}