function convertToNumbers() {
  const inputText = document.getElementById('inputText').value.toLowerCase();
  let outputText = '';

  for (let char of inputText) {
    if (char === ' ') {
      outputText += ' '; // Menjaga spasi
    } else if (char >= 'a' && char <= 'z') {
      outputText += (char.charCodeAt(0) - 96) + ' '; // Konversi huruf ke angka
    }
  }

  document.getElementById('outputText').value = outputText.trim();
}

function convertToText() {
  const inputText = document.getElementById('inputText').value.trim();
  const numbers = inputText.split(' ');
  let outputText = '';

  for (let num of numbers) {
    if (num === '') {
      outputText += ' '; // Menjaga spasi
    } else {
      outputText += String.fromCharCode(parseInt(num) + 96); // Konversi angka ke huruf
    }
  }

  document.getElementById('outputText').value = outputText;
}

function copyResult() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
  alert('Hasil berhasil disalin!');
}