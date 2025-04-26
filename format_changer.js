const formatChanger = document.querySelector("button[id='format_button']");

formatChanger.addEventListener("click",(event)=>{
    let formatValue = document.querySelector("select[name='format_changer']").value;
    if (formatValue == "night") {
        document.querySelector("link").setAttribute("href","format1.css");
    }else if(formatValue == "none"){
        document.querySelector("link").setAttribute("href","none.css");
    }else if(formatValue == "forset"){
        document.querySelector("link").setAttribute("href","format2.css");
    }else if(formatValue == "hacker"){
        document.querySelector("link").setAttribute("href","format3.css");
    }else if(formatValue == "why"){
        document.querySelector("link").setAttribute("href","format4.css");
    };
});