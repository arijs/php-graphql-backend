<?php

namespace App;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Laminas\Stratigility\MiddlewarePipe;
use Siler\Stratigility\RequestHandlerDecorator;
use Closure;
use Exception;

class RequestHandler {

	private ServerRequestInterface $request;

	public function __construct(
		ServerRequestInterface $request
	) {
		$this->request = $request;
	}

	public function pipeline(callable $handler, MiddlewarePipe $pipeline): Closure
	{
		if ($pipeline === null || !($pipeline instanceof MiddlewarePipe)) {
			throw new Exception("MiddlewarePipe not found");
		}
		$request = $this->request;

		return static function (array $pathParams) use ($request, $handler, $pipeline) {
			return $pipeline->process($request, new RequestHandlerDecorator($handler, $pathParams));
		};
	}

	public function handler(callable $handler): Closure {
		$request = $this->request;

		return static function (array $pathParams) use ($request, $handler) {
			return $handler($request, $pathParams);
		};
	}

}
