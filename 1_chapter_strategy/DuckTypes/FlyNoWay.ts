import { IFlyBehavior } from "../interface/IFlyBehavior";

export class FlyNoWay implements IFlyBehavior {
    fly(): void {
        console.log("I can't fly")
    }
    
}