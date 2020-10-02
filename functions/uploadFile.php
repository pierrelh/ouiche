<?php

  include_once($_SERVER['DOCUMENT_ROOT']."/functions/filter.php");
  $filtered = array_map('map_entities', $_POST);

  include_once($_SERVER['DOCUMENT_ROOT']."/functions/createSlug.php");
  $uuid = createSlug($_POST['title']);

  include_once($_SERVER['DOCUMENT_ROOT']."/functions/connexion.php");
  $db = connect();
  $selectSql = "INSERT INTO words 
                            (word_uuid,
                            word_libelle,
                            word_citation,
                            word_file_url,
                            word_file_extention)
                VALUES ($1, $2, $3, $4, $5)";
  $result =  pg_query_params($db, $selectSql, array($uuid,
                                                    $filtered['title'],
                                                    $filtered['quote'],
                                                    $_POST['file_url'],
                                                    ('extention')));
    print $result;

?>
