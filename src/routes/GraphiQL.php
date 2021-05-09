<?php

namespace App\Routes;

use Psr\Http\Message\ServerRequestInterface;
use Siler\GraphQL;
use Siler\Diactoros;

class GraphiQL {
	function __invoke (ServerRequestInterface $request) {
		return Diactoros\html(
			// GraphQL\graphiql('http://localhost:8181/___graphql')
			file_get_contents(__DIR__.'/../graphiql.html')
		);
	}
}
