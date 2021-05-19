<?php

declare(strict_types=1);

namespace App\Routes;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Siler\Diactoros;

class Admin
{
    public function __invoke(ServerRequestInterface $request): ResponseInterface
    {
        return Diactoros\json(['user' => $request->getAttribute('user')]);
    }
}
