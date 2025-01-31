function convertText() {
  // Ambil teks dari input
  const inputText = document.getElementById("inputText").value.toLowerCase();
  let output = "";

  // Loop melalui setiap karakter
  for (let i = 0; i < inputText.length; i++) {
    const char = inputText[i];
    if (char >= "a" && char <= "z") {
      // Konversi huruf ke angka (a=1, b=2, ..., z=26)
      const number = char.charCodeAt(0) - 96;
      output += number + " ";
    } else if (char === " ") {
      // Jika spasi, tambahkan spasi ke output
      output += " ";
    } else {
      // Jika bukan huruf, abaikan
      output += char;
    }
  }

  // Tampilkan hasil
  document.getElementById("output").textContent = output.trim();
}