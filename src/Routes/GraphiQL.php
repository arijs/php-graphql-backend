<?php

declare(strict_types=1);

namespace App\Routes;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Siler\Diactoros;

use function file_get_contents;

class GraphiQL
{
    public function __invoke(ServerRequestInterface $request): ResponseInterface
    {
        return Diactoros\html(
            // GraphQL\graphiql('http://localhost:8181/___graphql')
            file_get_contents(__DIR__ . '/../graphiql-ex.html'),
        );
    }
}
