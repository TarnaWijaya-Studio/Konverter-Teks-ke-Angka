function convertToNumbers() {
  const inputText = document.getElementById('inputText').value;
  let outputText = '';

  for (let char of inputText) {
    if (char === ' ') {
      outputText += ' ';
    } else if (char >= 'a' && char <= 'z') {
      outputText += (char.charCodeAt(0) - 96) + ' ';
    } else if (char >= 'A' && char <= 'Z') {
      outputText += `A${char.charCodeAt(0) - 64} `;
    } else if (char >= '0' && char <= '9') {
      outputText += `N${char} `;
    } else {
      outputText += `U+${char.codePointAt(0).toString(16).toUpperCase()} `;
    }
  }

  document.getElementById('outputText').value = outputText.trim();
}

function convertToText() {
  const inputText = document.getElementById('inputText').value.trim();
  let outputText = '';
  let matches = inputText.match(/A\d+|\d+|N\d|U\+\w+| /g);

  for (let match of matches) {
    if (match === ' ') {
      outputText += ' ';
    } else if (/^\d+$/.test(match)) {
      outputText += String.fromCharCode(parseInt(match) + 96);
    } else if (/^A\d+$/.test(match)) {
      outputText += String.fromCharCode(parseInt(match.substring(1)) + 64);
    } else if (/^N\d$/.test(match)) {
      outputText += match.substring(1);
    } else if (/^U\+\w+$/.test(match)) {
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