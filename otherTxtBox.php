<?php
function main(){
    return_value(other_check());
}

function other_check(){
    $option = $_GET("radVal");
    $option_value = "none";

    if ($option == "ot") {
         $option_value = "ot";
    };

    return $option_value;
}

function return_value($option_value){
    $option_array = array(
        "option_value" => $option_value
    );

    echo json_encode($option_array);

}

main();





?>