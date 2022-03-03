import { IQuackBehavior } from "../interface/IQuackBehavior";

export class Quack implements IQuackBehavior {
    quack(): void {
        console.log("Quack");
    }
    
}