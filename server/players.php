<?php

  include_once("db.inc.php");

  $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);

  $query_str = "SELECT * FROM $table_players ORDER BY `player-name` ASC LIMIT 0 , 100";
  $query = $conn->prepare($query_str);

  $query->execute();

	$row = $query->fetchAll(PDO::FETCH_ASSOC);
	header('Content-type: application/json');
  $result = "{ \"players\": [";
  foreach ($row as $key => $value) {
    $result .= "\"" . trim($value['player-name']) . "\",";
  }
  $result = rtrim($result, ",");
  $result .= "]}";
  echo $result;
	$conn = null;

 ?>
