const email = document.querySelector("input[type='email']");

email.addEventListener("keyup", emailCheck);
async function emailCheck(event) {
    let msgBox = document.querySelector("span");
    let emailGrab = event.target.input;
    const emailSend = await fetch (`email.php?emailVal=${emailGrab}`);
    let emailChecked = await emailSend.json();

    if (emailChecked == false) {
        msgBox.textContent = "email allready exists";
    };
}