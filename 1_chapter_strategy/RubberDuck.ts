import { Duck } from "./Duck";
import { FlyNoWay } from "./DuckTypes/FlyNoWay";
import { Quack } from "./DuckTypes/Quack";

export class RubberDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyNoWay();
    }

    public display(): void {
        console.log("I'm a real Rubber duck");
    }
}