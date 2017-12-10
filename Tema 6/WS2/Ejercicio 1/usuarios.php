<?php
$variable = $_GET['user'];
if (($variable == 'Belinda') || ($variable == 'Pablo') || ($variable == 'Antonio') || ($variable == 'Angel')) {
  echo '{
	       "validar": "si"
       }';
} else {
  echo '{
      	"validar": "no"
      }';
}
?>