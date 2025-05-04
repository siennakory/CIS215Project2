const otherRad = document.querySelector("select [id='gender']");

otherRad.addEventListener("blur", optionCheck);

async function optionCheck(event) {
    let optVal = event.target.value;
    console.log(optVal);

    const sendOpt = await fetch (`otherTxtBox.php?radVal=${optVal}`);
    console.log(sendOpt);

    let optChecked = await sendOpt.json();
    console.log(optChecked);

    let radioVal = sendOpt["option_value"];
    console.log(radioVal);

    if (radioVal == "ot") {
         document.getElementById("other_input").removeAttribute("hidden");
    }else{
        document.getElementById("other_input").setAttribute("hidden");
    };
}

