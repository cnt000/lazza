<?php

  include_once("db.inc.php");

  $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);


  $request_body = file_get_contents('php://input');
  $json = urldecode(json_encode($request_body, true));
  $json_trimmed = trim($json, "\"");
  $manage = json_decode($json_trimmed, true);

  $judge = "";
  $session = $manage['session'];
  
  foreach ($manage['fields'] as $key => $value) {
    if($value['id'] == "judge") {
      $judge = $value['value'];
    }
  }

  $query_str = "insert into $table (session, judge, data, saved) values (:session, :judge, :data, NOW())";
  $query = $conn->prepare($query_str);

  $query->bindParam(':session', $session, PDO::PARAM_STR, 100);
  $query->bindParam(':judge', $judge, PDO::PARAM_STR, 100);
  $query->bindParam(':data', $json_trimmed, PDO::PARAM_STR);

  $query->execute();

  echo $session . "SAVED\n";
  echo "JUDGE: " . $judge . "\n\n";
  print_r($manage);
  //header('Content-type: application/json');

 ?>
