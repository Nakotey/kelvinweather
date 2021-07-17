// Temperature in Kelvin
const kelvin = 293;
// Converting kelvin to celsius
const celsius = kelvin - 273;
// Converting celsius to farenheit
let fahrenheit = celsius * (9/5) + 32;
//Running down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//Converting Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees in Newton.`)
