import { Duck } from "./Duck";
import { FlyWithWings } from "./DuckTypes/FlyWithWings";
import { Quack } from "./DuckTypes/Quack";

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    public display(): void {
        console.log("I'm a real Mallard duck");
    }
}