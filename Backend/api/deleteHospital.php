<?php
header("Access-Control-Allow-Origin: *");

include("../config/db.php");

$id = $_GET['id'];

$conn->query("DELETE FROM hospital_dataset WHERE Hospital_ID=$id");

?>