const formatChanger = document.querySelector("button[id='format_button']");

formatChanger.addEventListener("click",(event)=>{
    const formatValue = event.target.value;
    if (formatValue = "night") {
        document.querySelector("link").setAttribute("herf","format1.css");
    };
});