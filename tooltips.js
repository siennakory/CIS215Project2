const passTip = document.querySelector("input[id='pw-id']");
const nameTip = document.querySelector("input[id='name-id']");
const emailTip = document.querySelector("input[id='email-id']");

passTip.addEventListener("focus", tooltip("enter password", "password-div"));
passTip.addEventListener("blur", rmTooltip("password-div"));

nameTip.addEventListener("focus", tooltip("enter name", "password-div"));
nameTip.addEventListener("blur", rmTooltip("password-div"));

emailTip.addEventListener("focus", tooltip("enter name", "password-div"));
emailTip.addEventListener("blur", rmTooltip("password-div"));

function tooltip(msg, id) {
    console.log("This is running");
    let tipBox = document.querySelector(`div[id='${id}']`);

    tipBox.textContent = msg;
}

function rmTooltip(id){
    console.log("tooltip romoved");
    let tipBox = document.querySelector(`div[id='${id}']`);

    tipBox.textContent = "";
}