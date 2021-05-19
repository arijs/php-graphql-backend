<?php

declare(strict_types=1);

namespace App;

use Closure;
use Exception;
use Laminas\Stratigility\MiddlewarePipe;
use Psr\Http\Message\ServerRequestInterface;
use Siler\Stratigility\RequestHandlerDecorator;

class RequestHandler
{
    private ServerRequestInterface $request;

    public function __construct(
        ServerRequestInterface $request
    ) {
        $this->request = $request;
    }

    public function pipeline(callable $handler, MiddlewarePipe $pipeline): Closure
    {
        if ($pipeline === null || !($pipeline instanceof MiddlewarePipe)) {
            throw new Exception('MiddlewarePipe not found');
        }
        $request = $this->request;

        return static fn (array $pathParams) => $pipeline->process(
            $request,
            new RequestHandlerDecorator($handler, $pathParams),
        );
    }

    public function handler(callable $handler): Closure
    {
        $request = $this->request;

        return static fn (array $pathParams) => $handler($request, $pathParams);
    }
}
