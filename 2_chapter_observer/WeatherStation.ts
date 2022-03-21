import { CurrentConditionsDisplay } from "./DisplayTypes/CurrentConditionsDisplay";
import { ForecastDisplay } from "./DisplayTypes/ForecastDisplay";
import { HeatIndexDisplay } from "./DisplayTypes/HeatIndexDisplay";
import { StatisticsDisplay } from "./DisplayTypes/StatisticsDisplay";
import { WeatherData } from "./WeatherData";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const computeHeatIndex = new HeatIndexDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
