import { IFlyBehavior } from "../interface/IFlyBehavior";

export class FlyWithWings implements IFlyBehavior {
    fly(): void {
        console.log("I can fly")
    }
    
}