function convert() {
  const hexInputValue = document.getElementById("hexInput").value;
  const binaryResult = document.getElementById("binaryResult");

  if (isValidHexInput(hexInputValue)) {
    const parsedBinary = parseInt(hexInputValue, 16);
    const binaryValue = parsedBinary.toString(2).padStart(4, "0");

    binaryResult.textContent = `Binary number: ${binaryValue}`;
  } else {
    binaryResult.textContent = "Invalid Hexadecimal Number!";
  }
}

function isValidHexInput(input) {
  const validHexChars = "0123456789ABCDEF";

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    if (validHexChars.indexOf(char) === -1) {
      return false;
    }

    return input.length > 0;
  }
}
