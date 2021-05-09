<?php

namespace App\Routes;

use Psr\Http\Message\ServerRequestInterface;
use Siler\Diactoros;

class Admin {
	function __invoke (ServerRequestInterface $request) {
		return Diactoros\json(['user' => $request->getAttribute('user')]);
	}
}
