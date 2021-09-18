<?php

declare(strict_types=1);

namespace App\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Siler\Diactoros;
use Siler\Http\Request;

class Auth implements MiddlewareInterface
{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $token = Request\get('token');

        if (empty($token)) {
            return Diactoros\json('no user', 401);
        }

        $user = "get_user_by_token:$token";
        $request = $request->withAttribute('user', $user);

        return $handler->handle($request);
    }
}

/*
PHP Fatal error:  Declaration of
App\Middleware\Auth::process(
    Psr\Http\Message\ServerRequestInterface $request, Psr\Http\Server\RequestHandlerInterface $handler
) must
be compatible with
Psr\Http\Server\MiddlewareInterface::process(
    Psr\Http\Message\ServerRequestInterface $request, Psr\Http\Server\RequestHandlerInterface $handler
): Psr\Http\Message\ResponseInterface in /mnt/d/dev/ddsoft/siler/Middleware/Auth.php on line 12
*/
