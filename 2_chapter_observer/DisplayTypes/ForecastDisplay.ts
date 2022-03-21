import { IDisplayElement } from "../interface/IDisplayElement";
import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export class ForecastDisplay implements IObserver, IDisplayElement {
    private currentPressure: number = 29.92;
    private lastPressure: number;
    private weatherDate: ISubject;

    constructor(weatherData: ISubject) {
        this.weatherDate = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temp: number, humidity: number, pressure: number): void {
        this.currentPressure = pressure;
        this.lastPressure = this.currentPressure;
        this.display();
    }

    public display(): void {
        console.log("Forecast: ");
		if (this.currentPressure > this.lastPressure) {
			console.log("Improving weather on the way!");
		} else if (this.currentPressure === this.lastPressure) {
			console.log("More of the same");
		} else if (this.currentPressure < this.lastPressure) {
			console.log("Watch out for cooler, rainy weather");
		}
    }
}