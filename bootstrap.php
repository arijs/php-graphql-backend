<?php declare(strict_types=1);

namespace App;

use Monolog\Handler\StreamHandler;
use Siler\Config;
use Siler\Monolog as Log;

require_once __DIR__ . '/vendor/autoload.php';

Config\load(__DIR__ . '/etc', '/*.{ini,php}');
Log\handler(new StreamHandler('php://stdout'));
