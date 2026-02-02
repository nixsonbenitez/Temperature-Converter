let f = 100;

function convertToCelsius(f){ 
  return (f - 32) * 5/9; 
}

function describeTempature(f){
  const celsius = convertToCelsius(f);

  if (celsius < 0) {
  return "very cold";
}
else if (celsius < 20){
  return "cold";
}
else if (celsius < 30){
  return "warm";
}
else if (celsius < 40){
  return "hot";
}
else if (celsius >= 40){
  return "very Hot";
}
}

console.log(describeTempature(f));