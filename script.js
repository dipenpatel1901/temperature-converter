let celsiusInput = document.getElementById('cd')
let fahrenheitInput = document.getElementById('fd');
let formula = document.getElementById('formula');

celsiusInput.addEventListener('input',()=>{
 let celsius = celsiusInput.value;
 let celToFahren = Number(celsius) * (9 / 5) + 32;
 fahrenheitInput.value = celToFahren.toFixed(2);
 formula.innerHTML = `(${celsius}°C × 9/5) + 32 = <span style="font-weight:600">${celToFahren.toFixed(2)}°F</span>`;
});

fahrenheitInput.addEventListener('input',()=>{
    let fahrenheit = fahrenheitInput.value;
    let fahToCel = Number(fahrenheit -32) * (5/9);
    celsiusInput.value = fahToCel.toFixed(2);
    formula.innerHTML = `(${fahToCel.toFixed(2)}°C × 9/5) + 32 = <span style="font-weight:600">${fahrenheit}°F</span>`;
})
