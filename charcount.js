const textBox = document.querySelector("textarea[id='favorite']");
const divcount = document.querySelector("div[id='char-count']")

function checkCount(event){
    let currentText = event.target.value;
    console.log(currentText);
    let textBoxCount = currentText.length;
    console.log(textBoxCount);
    let charCount = (120 - textBoxCount);
    console.log(charCount);

    if (textBoxCount > 70){
        divcount.textContent = charCount;
    } else {
        divcount.textContent = "";
    };

    if (textBoxCount > 120) {
        textBox.value = currentText.substring(1, 120);
    };

};

textBox.addEventListener("keyup", checkCount);