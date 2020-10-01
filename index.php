<?php

  require __DIR__ . '/pages/header.php';
  require __DIR__ . '/pages/single.php';
  require __DIR__ . '/pages/index.php';
  //Routing and get the keyword from the url
  $keyword = $_SERVER['REQUEST_URI'];
  if ($keyword != "" || $keyword != "/") {
    //If a keyword is in the url
    echo  "<script type='text/javascript'>
            singleVueUpdateKeyword(".$keyword.");
          </script>";
    
  }
  
?>
