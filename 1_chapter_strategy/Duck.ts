import { IFlyBehavior } from './interface/IFlyBehavior';
import { IQuackBehavior } from './interface/IQuackBehavior';

export abstract class Duck {
    flyBehavior: IFlyBehavior;
    quackBehavior: IQuackBehavior;
    
    public Duck() {}

    public setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }

    abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public swim(): void {
        console.log("All ducks float, even decoys!");
    }
}