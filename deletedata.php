<?php

    function main(){
        require "dbconfig.php";
        $db = connectDB();
        $email = $_GET["myemail"];
        
        returnJSON(exisitingEmails($db, $email));
    };


    function exisitingEmails($db, $email){
        $select_emails = $db->prepare("SELECT email FROM project_data");
        $select_emails->execute();
        $select_array = $select_emails->fetchAll();
        $email_array = array();
        $delete_success = "We do not have this email in our database. Your data could not be deleted. Please try a different email.";
    
        foreach ($select_array as $array){
            array_push($email_array, $array["email"]);
        };
    
        if (in_array($email, $email_array)){
            $prepared_stat = $db->prepare("DELETE FROM project_data WHERE email=?");
            $prepared_stat->execute(array($email));
            $delete_success = "You data has been successfully deleted!";
        };

        return($delete_success);
        };

    function returnJSON($msg){
        $return = array(
            "msg" => $msg
        );

        echo json_encode($return);
    };
    
    main();
?>