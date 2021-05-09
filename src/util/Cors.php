<?php

namespace App\Util;

use Psr\Http\Message\ResponseInterface;

class Cors {
	public static function inject(
		ResponseInterface $response,
		string $origin = '*',
		string $headers = 'Content-Type',
		string $methods = 'GET, POST, PUT, DELETE'
	) {
		return $response
			->withAddedHeader('Access-Control-Allow-Origin', $origin)
			->withAddedHeader('Access-Control-Allow-Headers', $headers)
			->withAddedHeader('Access-Control-Allow-Methods', $methods);
	}
}
