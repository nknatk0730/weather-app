export const convertWindSpeed = (speedInMetersPerSecond: number) => {
  const speedInKilometersPerHour = speedInMetersPerSecond * 3.6; //Conversion from m/s to km/h
  return `${speedInKilometersPerHour.toFixed(0)}km/h`
}