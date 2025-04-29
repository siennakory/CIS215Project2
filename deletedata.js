const deleteButton = document.querySelector("button[id='delete-button']");
let deleteSuccessMsg = document.querySelector("div[id='delete-success']").textContent;

deleteButton.addEventListener("click", checkEmail);

async function checkEmail(){
    let userEmail = document.querySelector("input[id='delete-data']").value;

    const sendEmail = await fetch(`deletedata.php?myemail=${userEmail}`);
    console.log(sendEmail);

    let deleteData = await sendEmail.json();
    console.log(deleteData);

    deleteSuccessMsg = deleteData["msg"];
};