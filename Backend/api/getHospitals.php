<?php
header("Content-Type: application/json");
include("../config/db.php");

$sql = "SELECT * FROM hospital_dataset";
$result = $conn->query($sql);

$data = [];

while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>