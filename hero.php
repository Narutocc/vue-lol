<?php
	$data = file_get_contents("http://ossweb-img.qq.com/upload/qqtalk/lol_hero/hero_104.js");
	echo $_GET['callback'].'('.$data.')';
?>