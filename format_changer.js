const formatChanger = document.querySelector("button[id='format_button']");

formatChanger.addEventListener("click",(event)=>{
    let formatValue = document.querySelector("select[id='format_select']").value;
    console.log(formatValue)
    if (formatValue = "1") {
        document.querySelector("link").setAttribute("href","");
        console.log("night");
    }else if(formatValue = "0"){
        document.querySelector("link").setAttribute("href","none.css");
        console.log("0");
    };
});