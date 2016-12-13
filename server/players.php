<?php

  include_once("db.inc.php");

  $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);

  $query_str = "select * from $table_players";
  $query = $conn->prepare($query_str);

  $query->execute();

	$row = $query->fetchAll(PDO::FETCH_ASSOC);
	header('Content-type: application/json');
  $result = "{ players: [";
  foreach ($row as $key => $value) {
    $result .= "\"" . $value['player-name'] . "\",";
  }
  $result .= "]}";
  echo $result;
	$conn = null;

 ?>
