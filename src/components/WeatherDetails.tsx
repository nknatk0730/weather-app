import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

export interface WeatherDetailProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export const WeatherDetails = (props: WeatherDetailProps) => {
  const {
    visability = '25km',
    humidity = '61%',
    windSpeed = '7 km/h',
    sunrise = '6:20',
    sunset = '18:48',
  } = props;
  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Visibility"
        value={visability}
      />
      <SingleWeatherDetail
        icon={<FiDroplet />}
        information="Humidity"
        value={humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind speed"
        value={windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air Pressure"
        value={humidity}
      />
      <SingleWeatherDetail
        icon={<LuSunrise />}
        information="Sunrise"
        value={sunrise}
      />
      <SingleWeatherDetail
        icon={<LuSunset />}
        information="Sunset"
        value={sunset}
      />
    </>
  )
}

export interface SingleWeatherDetail {
  information: string;
  icon: React.ReactNode;
  value: string;
}

const SingleWeatherDetail = (props: SingleWeatherDetail) => {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">
        {props.information}
      </p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  )
}