<?php

namespace App\Routes;

use Psr\Http\Message\ServerRequestInterface;
use Siler\Diactoros;
use Siler\GraphQL as SGraphQL;
use Siler\Encoder\Json;
use App\Util\Cors;

class GraphQL {
	function __invoke (ServerRequestInterface $request) {
		$body = Json\decode($request->getBody()->getContents());

		// validate request body
		if (empty($body)) return Diactoros\json('request body is empty', 400);
		if (!is_array($body)) return Diactoros\json('request body is not an object', 400);
		if (!array_key_exists('query', $body)) return Diactoros\json('"query" not found on request', 400);
		if (!array_key_exists('operationName', $body)) return Diactoros\json('"operationName" not found on request', 400);
		// if (!array_key_exists('variables', $body)) return Diactoros\json('"variables" not found on request', 400);

		$schema = include __DIR__.'/../graphql/schema.php';

		$data = SGraphQL\execute($schema, $body);

		return Cors::inject(Diactoros\json($data));
	}
}
