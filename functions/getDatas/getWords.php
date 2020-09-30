<?php

include_once($_SERVER['DOCUMENT_ROOT']."/functions/connexion.php");
$db = connect();

$sqlRequest = "SELECT *
               FROM words
               ORDER BY word_id ASC";
$result = pg_query($db, $sqlRequest);
if (!empty($result)) {
  $val = pg_fetch_all($result);
  print json_encode($val);
}else {
    print "false";
}

?>
