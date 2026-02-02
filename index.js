
function convertToCelsius(f) { 
  return (f - 32) * 5 / 9; 
}

function describeTemperature(f) {
  const celsius = convertToCelsius(f);

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

const fahrenheitInput = prompt(
  "Type in a temperature in Fahrenheit for it to be converted to Celsius:"
);

const fahrenheit = Number(fahrenheitInput);

const celsius = convertToCelsius(fahrenheit);
const description = describeTemperature(fahrenheit);

alert(`That is ${celsius}C, which feels ${description}.`);


