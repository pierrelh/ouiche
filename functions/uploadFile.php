<?php

  include_once($_SERVER['DOCUMENT_ROOT']."/functions/filter.php");
  $filtered = array_map('map_entities', $_POST);

  include_once($_SERVER['DOCUMENT_ROOT']."/functions/createSlug.php");
  $uuid = createSlug('test');

  include_once($_SERVER['DOCUMENT_ROOT']."/functions/connexion.php");
  $db = connect();
  $selectSql = "INSERT INTO words 
                            (word_uuid,
                            word_libelle,
                            word_citation,
                            word_file_url)
                VALUES ($1, $2, $3, $4, $5)";
  $result =  pg_query_params($db, $selectSql, array($filtered['file_name'],
                                                    $_POST['file_url'],
                                                    $_POST['file_image'],
                                                    $filtered['file_author'],
                                                    $filtered['file_album']));


?>
