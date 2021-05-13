<?php declare(strict_types=1);

namespace App;

if (preg_match('/\.(?:js|html|png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
	return false;    // serve the requested resource as-is.
}

require_once __DIR__ . '/../bootstrap.php';
require_once __DIR__ . '/../index.php';
