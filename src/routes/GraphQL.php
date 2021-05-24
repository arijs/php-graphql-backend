<?php

declare(strict_types=1);

namespace App\Routes;

use App\Util\Cors;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Siler\Diactoros;
use Siler\Encoder\Json;
use Siler\GraphQL as SGraphQL;
use Throwable;

use function array_key_exists;
use function is_array;

class GraphQL
{
    public function __invoke(ServerRequestInterface $request): ResponseInterface
    {
        $body = Json\decode($request->getBody()->getContents());

        // validate request body
        if (empty($body)) {
            return Diactoros\json('request body is empty', 400);
        }
        if (!is_array($body)) {
            return Diactoros\json('request body is not an object', 400);
        }
        if (!array_key_exists('query', $body)) {
            return Diactoros\json('"query" not found on request', 400);
        }
        // if (!array_key_exists('operationName', $body))
        //  return Diactoros\json('"operationName" not found on request', 400);
        // if (!array_key_exists('variables', $body))
        //  return Diactoros\json('"variables" not found on request', 400);

        $schema = include __DIR__ . '/../GraphQL/schema.php';

        try {
            $data = SGraphQL\execute($schema, $body);
        } catch (Throwable $e) {
            $data = $e->getMessage();
        }

        return Cors::inject(Diactoros\json($data));
    }
}
