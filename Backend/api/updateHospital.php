<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['Hospital_ID'];
$name = $data['Hospital_Name'];

$sql = "UPDATE hospital_dataset 
SET Hospital_Name='$name' 
WHERE Hospital_ID=$id";

$conn->query($sql);

?>