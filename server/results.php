<?php

  include_once("db.inc.php");

  $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);

  $query_str = "select * from $table";
  $query = $conn->prepare($query_str);

  $query->execute();

	$result = $query->fetchAll(PDO::FETCH_ASSOC);
  echo "<hr/>";
  foreach ($result as $key => $value) {
    $data_json = json_decode($value['data'], true);
    echo "<b>SESSION:</b> " . $value['session'] . "<br/>";
    echo "<b>JUDGE:</b> " . $value['judge'] . "<br/>";
    echo "<b>TEAM A:</b> " . $value['team-name-A'] . "<br/>";
    echo "<b>TEAM B:</b> " . $value['team-name-B'] . "<br/>";
    //echo "<b>DATA:</b> " . $value['data'] . "<br/><hr/>";
    foreach ($data_json['results'] as $key => $value) {
      echo "<b>" . $key . ":</b> " . (is_array($value) ? $value['value'] : $value)  . "<br/>";
    }
    echo "<hr/>";
    //var_dump($data_json['results']);
  }

    # code...


	// header('Content-type: application/json');
	// echo $result;

	$conn = null;

 ?>
