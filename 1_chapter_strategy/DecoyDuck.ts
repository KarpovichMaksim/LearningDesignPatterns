import { Duck } from "./Duck";
import { FlyNoWay } from "./DuckTypes/FlyNoWay";
import { MuteQuack } from "./DuckTypes/MuteQuack";

export class DecoyDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new MuteQuack();
        this.flyBehavior = new FlyNoWay();
    }

    public display(): void {
        console.log("I'm a real Decoy duck");
    }
}