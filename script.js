document.getElementById('convertButton').addEventListener('click', function() {
    const inputValue = document.getElementById('inputValue').value;
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    
    let decimalValue;

    // Konversi dari basis asal ke desimal
    if (fromBase === 2) {
        decimalValue = parseInt(inputValue, 2);
    } else if (fromBase === 10) {
        decimalValue = parseInt(inputValue, 10);
    } else if (fromBase === 8) {
        decimalValue = parseInt(inputValue, 8);
    } else if (fromBase === 16) {
        decimalValue = parseInt(inputValue, 16);
    }

    // Konversi dari desimal ke basis tujuan
    let result;
    if (toBase === 2) {
        result = decimalValue.toString(2);
    } else if (toBase === 10) {
        result = decimalValue.toString(10);
    } else if (toBase === 8) {
        result = decimalValue.toString(8);
    } else if (toBase === 16) {
        result = decimalValue.toString(16).toUpperCase();
    }

    document.getElementById('result').textContent = result;
});