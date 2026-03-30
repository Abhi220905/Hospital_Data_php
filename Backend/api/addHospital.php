<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['Hospital_Name'];
$city = $data['City'];
$dept = $data['Department'];
$beds = $data['Beds_Available'];
$doctors = $data['Doctors_Count'];
$rating = $data['Rating'];

$sql = "INSERT INTO hospital_dataset 
(Hospital_Name, City, Department, Beds_Available, Doctors_Count, Rating)
VALUES ('$name', '$city', '$dept', $beds, $doctors, $rating)";

$conn->query($sql);

?>