function convertToNumbers() {
  const inputText = document.getElementById('inputText').value;
  let outputText = '';

  for (let char of inputText) {
    if (char === ' ') {
      outputText += ' ';
    } else if (char >= 'a' && char <= 'z') {
      outputText += (char.charCodeAt(0) - 96) + ' ';
    } else if (char >= 'A' && char <= 'Z') {
      outputText += (char.charCodeAt(0) - 64) + ' ';
    } else {
      outputText += `[${char.codePointAt(0)}]`;
    }
  }

  document.getElementById('outputText').value = outputText.trim();
}

function convertToText() {
  const inputText = document.getElementById('inputText').value.trim();
  let outputText = '';
  let matches = inputText.match(/\d+|.*?| /g);

  for (let match of matches) {
    if (match === ' ') {
      outputText += ' ';
    } else if (/^\d+$/.test(match)) {
      outputText += String.fromCharCode(parseInt(match) + 96);
    } else if (/^\d+$/.test(match)) {
      outputText += String.fromCodePoint(parseInt(match.replace(/|/g, '')));
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