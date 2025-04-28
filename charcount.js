const textBox = document.querySelector("textarea[id='favorite']");
const divcount = document.querySelector("div[id='char-count']")

function checkCount(event){
    let currentText = event.target.value;
    console.log(currentText);
    let textBoxCount = currentText.length;
    console.log(textBoxCount);
    let charCount = (120 - textBoxCount);
    console.log(charCount);
    let lastChar = (textBoxCount - 1);
    console.log(lastChar);

    if (textBoxCount > 70){
        divcount.textContent = charCount;
    } else {
        divcount.textContent = "";
    };

    if (textBoxCount > 120) {
        textBox.value = currentText.substring(1, lastChar);
    };

};

textBox.addEventListener("keyup", checkCount);