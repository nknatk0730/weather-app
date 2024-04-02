export const metersToKilometers = (visibilityInMeters: number) => {
  const visibilityInKilometers = visibilityInMeters /1000;
  return `${visibilityInKilometers.toFixed(0)}km`; // Round to 0 decimal places and add 'km' unit
}