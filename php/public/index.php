<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$url = 'https://jsonplaceholder.typicode.com/comments?postId=3'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$characters = $data;
echo $characters;


?>
