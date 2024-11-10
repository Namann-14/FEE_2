function generateRandom() {
    const minValue = parseInt(document.getElementById("min-value").value);
    const maxValue = parseInt(document.getElementById("max-value").value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid minimum and maximum values.");
        return;
    }
    if (minValue > maxValue) {
        alert("Minimum value should be less than the maximum value.");
        return;
    }
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById("random-result").textContent = `Generated Number: ${randomNumber}`;
}
