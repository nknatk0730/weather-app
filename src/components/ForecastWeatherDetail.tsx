import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { Container } from "./Container"
import { WeatherDetailProps, WeatherDetails } from "./WeatherDetails"
import { WeatherIcon } from "./WeatherIcon"

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export const ForecastWeatherDetail = (props: ForecastWeatherDetailProps) => {
  const {
    weatherIcon = '02d',
  date = '19.09',
  day = 'Tuesday',
  temp = 9,
  feels_like = 8, 
  temp_min = 1,
  temp_max = 10,
  description = 'description to description'
  } = props;
  return (
    <Container className="gap-4">
      {/* left */}
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon iconName={weatherIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>
        {/*  */}
        <div className="flex flex-col px-4">
          <span className="text-5xl">{convertKelvinToCelsius(temp ?? 0)}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(feels_like ?? 0)}°</span>
          </p>
          <p className="capitalize">{description}</p>
        </div>
      </section>
      {/* right */}
      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}