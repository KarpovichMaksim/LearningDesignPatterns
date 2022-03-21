import { IDisplayElement } from "../interface/IDisplayElement";
import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherDate: ISubject;

    constructor(weatherData: ISubject) {
        this.weatherDate = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }

    public display(): void {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity} humidity`);
    }
}