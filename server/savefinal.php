<?php

  // $dbtype     = "mysql";
  // $dbhost     = "";
  // $dbname     = "";
  // $dbuser     = "";
  // $dbpass     = "";
  // $table = 'lazzaroni';

  // $conn = new SafePDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

  // $query = "insert into $table_comments ($fields_comment) values (:type, :name, :email, :comment, NOW())";
  //
  // $query->bindParam(':name', $name, PDO::PARAM_STR, 50);
  // $query->bindParam(':email', $email, PDO::PARAM_STR, 50);
  //
  // $query->execute();

  $request_body = file_get_contents('php://input');
  $data = json_encode($request_body);
  // $results = array("result" => $_POST['judging']);
  // $result = json_encode($results);
  header('Content-type: application/json');
  echo urldecode($data);

 ?>
