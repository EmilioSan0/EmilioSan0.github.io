function makeBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
  }
  
  function setStyle() {
    let text = document.getElementById("userText");
    if (document.getElementById("fancy").checked) {
      text.style.fontWeight = "bold";
      text.style.color = "blue";
      text.style.textDecoration = "underline";
    } else {
      text.style.fontWeight = "normal";
      text.style.color = "black";
      text.style.textDecoration = "none";
    }
  }
  
  function mooText() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
  
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
  
    textArea.value = sentences.join(". ");
  }
  