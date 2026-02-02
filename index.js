let f = 9;

function convertToCelsius(f) {
  return (f - 32) * 5 / 9;
}

function describeTemperature(f) {
  let celsius = convertToCelsius(f);

  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

let celsius = convertToCelsius(f);
let description = describeTemperature(f);

console.log("Fahrenheit:", f);
console.log("Celsius:", celsius);
console.log("Feels like:", description);
