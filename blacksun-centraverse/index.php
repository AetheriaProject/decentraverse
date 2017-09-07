<?php

$DefaultTile = "";

$ReqType = $_POST['RT']; //0 :: Display; 1 :: SetTile; 2:: GetTile
$x = $_POST['x'];
$y = $_POST['y'];
$IpfsSet = $_POST['IpfsSet'];

$lndfileloc = "./land/" + $x + "." + $y + ".lnd";

switch(ReqType)
{
	case 1:
		if (strpos($IpfsSet, "Qm") === 0 && strlen($str) === 46) // if not it goes strait to break because it was not a valid IPFS entry.
		{
			file_put_contents($lndfileloc, $IpfsSet);
			echo 'success';
		}
		break;
	case 2:
		if(!file_exists ($lndfileloc))
		{
			echo $DefaultTile;
		}
		else 
		{
			echo file_get_contents($lndfileloc);
		}
		break;
	default:
}
