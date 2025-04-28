const textBox = document.querySelector("textarea[id='favorite']");
const divcount = document.querySelector("div[id='char-count']")

function checkCount(event){
    let currentText = event.target.value;
    let textBoxCount = currentText.length;
    let charCount = (120 - textBoxCount);

    if (textBoxCount > 70){
        divcount.textContent = charCount;
    } else {
        divcount.textContent = "";
    };

};

textBox.addEventListener("keyup", checkCount);