import { IObserver } from "./interface/IObserver";
import { ISubject } from "./interface/ISubject";

export class WeatherData implements ISubject {
    private observers: Array<IObserver>;
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = new Array();
    }

    public registerObserver(o: IObserver): void {
        this.observers.push(o);
    }

    public removeObserver(o: IObserver): void {
        const i = this.observers.indexOf(o);
        if(i > 0) {
            this.observers.splice(i);
        }
    }

    public notifyObserver(): void {
        for (let i = 0; i < this.observers.length; i++) {
            const observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure); 
        }
    }

    public measurementsChanged(): void {
        this.notifyObserver();
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged()
    }
}