<?php

declare(strict_types=1);

namespace App\Util;

use function array_key_exists;
use function implode;

class Dsn
{
    public static function fromArray(array $db)
    {
        $dsn = [];
        $keys = ['host', 'port', 'dbname'];
        foreach ($keys as $k) {
            if (array_key_exists($k, $db)) {
                $dsn[] = "{$k}={$db[$k]}";
            }
        }
        $driver = array_key_exists('driver', $db)
            ? $db['driver']
            : 'mysql';

        return $driver . ':' . implode(';', $dsn);
    }
}
