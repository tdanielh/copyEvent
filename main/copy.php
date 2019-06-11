<?php 
$url = $_GET['url'];
$filename = $_GET['docId'];
var_dump(file_get_contents($url));
file_put_contents('snapshots/'.$filename.'.html', file_get_contents($url));
?>