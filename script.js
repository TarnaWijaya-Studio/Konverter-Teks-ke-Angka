function convertToNumbers() {
  const inputText = document.getElementById('inputText').value;
  let outputText = '';

  for (let char of inputText) {
    const codePoint = char.codePointAt(0);

    if (char === ' ') {
      outputText += ' ';
    } else if (char >= 'a' && char <= 'z') {
      outputText += (codePoint - 96) + ' ';
    } else if (char >= 'A' && char <= 'Z') {
      outputText += `A${codePoint - 64} `;
    } else if (char >= '0' && char <= '9') {
      outputText += `N${char} `;
    } else {
      outputText += `U+${codePoint.toString(16).toUpperCase()} `;
    }
  }

  document.getElementById('outputText').value = outputText.trim();
}

function convertToText() {
  const inputText = document.getElementById('inputText').value.trim();
  let outputText = '';

  // Memperbaiki regex agar menangkap semua format Unicode yang mungkin
  let matches = inputText.match(/A\d+|\d+|N\d+|U\+[0-9A-F]+| /g) || [];

  for (let match of matches) {
    if (match === ' ') {
      outputText += ' ';
    } else if (/^\d+$/.test(match)) {
      outputText += String.fromCharCode(parseInt(match) + 96);
    } else if (/^A\d+$/.test(match)) {
      outputText += String.fromCharCode(parseInt(match.substring(1)) + 64);
    } else if (/^N\d+$/.test(match)) {
      outputText += match.substring(1);
    } else if (/^U\+[0-9A-F]+$/i.test(match)) {
      outputText += String.fromCodePoint(parseInt(match.substring(2), 16));
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