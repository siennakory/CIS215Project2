<?php
require ('dbconfig.php');
$db = connectDB();



function duplicate_check($db){
    $email = $_GET("emailVal");
    $select = $db->prepare('SELECT * FROM project_data WHERE email LIKE ?;');
    $select->execute(array($email));
    $check = $select->fetch();
    if ($check == false) {
       return true;
    }else {
        return false;
    }; 

$var = duplicate_check($db);

$return = array(
    "check" => $var
);

echo json_encode($return);

}
?>