import { IQuackBehavior } from "../interface/IQuackBehavior";

export class MuteQuack implements IQuackBehavior {
    quack(): void {
        console.log("<< Silence >>");
    }
    
}