import { IQuackBehavior } from "../interface/IQuackBehavior";

export class Squack implements IQuackBehavior {
    quack(): void {
        console.log("Squeak");
    }
    
}