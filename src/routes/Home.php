<?php

declare(strict_types=1);

namespace App\Routes;

use Psr\Http\Message\ResponseInterface;
use Siler\Diactoros;

class Home
{
    public function __invoke(): ResponseInterface
    {
        return Diactoros\json('welcome');
    }
}
