import { IDisplayElement } from "../interface/IDisplayElement";
import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class StatisticsDisplay implements IObserver, IDisplayElement {
    private maxTemp: number = 0;
    private minTemp: number = 200;
    private sumTemp: number = 0;
    private numReadings: number = 0;
    private weatherDate: ISubject;

    constructor(weatherData: ISubject) {
        this.weatherDate = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.sumTemp += temp;
        this.numReadings++;
        if(temp > this.maxTemp) this.maxTemp = temp;
        if(temp < this.minTemp) this.minTemp = temp;
        this.display();
    }

    public display(): void {
        console.log("Avg/Max/Min temperature = " + (this.sumTemp / this.numReadings)
        + "/" + this.maxTemp + "/" + this.minTemp);
    }
}