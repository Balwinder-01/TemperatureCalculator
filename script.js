function Output(targetUnit) {
    var temperature = parseFloat(document.getElementById("temperature").value);

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
        return;
    }

    var convertedValue;
    var unitLabel;

    if (targetUnit === "celsius") {
        convertedValue = temperature;
        unitLabel = "Celsius";
    } else if (targetUnit === "fahrenheit") {
        convertedValue = (temperature * 9 / 5) + 32;
        unitLabel = "Fahrenheit";
    } else if (targetUnit === "kelvin") {
        convertedValue = temperature + 273.15;
        unitLabel = "Kelvin";
    } else if (targetUnit === "rankine") {
        convertedValue = (temperature + 273.15) * 9 / 5;
        unitLabel = "Rankine";
    }

    var resultElements = document.getElementsByClassName("result")[0].getElementsByTagName("p");

    for (var i = 0; i < resultElements.length; i++) {
        resultElements[i].classList.remove("active");
        resultElements[i].style.display = "none";
    }

    var activeElement = document.getElementById("converted-" + targetUnit);
    activeElement.innerHTML = unitLabel + ": " + convertedValue.toFixed(2);
    activeElement.classList.add("active");
    activeElement.style.display = "block";
}