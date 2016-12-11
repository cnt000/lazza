<?php

  include_once("db.inc.php");

  $conn = new SafePDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

  $query_str = "insert into $table values (:session, :judge, :data, NOW())";

  $query = $conn->prepare($query_str);

  $request_body = file_get_contents('php://input');
  $data = json_encode($request_body, true);
  $json = urldecode($data);
  $new_json = str_replace('json=', "", $json);
  $asd = trim($new_json, "\"");
  $manage = json_decode($asd, true);

  $judge = "";
  foreach ($manage['fields'] as $key => $value) {
    if($value['id'] == "judge") {
      $judge = $value['value'];
    }
  }
  $session = $manage['session'];
  $query->bindParam(':session', $session, PDO::PARAM_STR, 100);
  $query->bindParam(':judge', $session, PDO::PARAM_STR, 100);
  $query->bindParam(':data', $new_json, PDO::PARAM_STR, 5000);

  $query->execute();

  echo $session;
  echo $judge;
  print_r($asd);
  //header('Content-type: application/json');




  class SafePDO extends PDO {

  	public static function exception_handler($exception) {
  		// Output the exception details
  		print_r($exception->getMessage());
  		print('Uncaught exception: ');
  	}

  	public function __construct($dsn, $username='', $password='', $driver_options=array()) {

  		// Temporarily change the PHP exception handler while we . . .
  		set_exception_handler(array(__CLASS__, 'exception_handler'));

  		// . . . create a PDO object
  		parent::__construct($dsn, $username, $password, $driver_options);

  		// Change the exception handler back to whatever it was before
  		restore_exception_handler();
  	}

  }

 ?>
