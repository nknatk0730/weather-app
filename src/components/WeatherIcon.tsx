import { cn } from "@/utils/cn"
import Image from "next/image"

export const WeatherIcon = (props: React.HTMLProps<HTMLDivElement> & {iconName: string}) => {
  return (
    <div {...props} className={cn('relative h-20 w-20')}>
      <Image
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
        alt="weather-icon"
        width={100}
        height={100}
        className="absolute h-full w-full"
      />
    </div>
  )
}