<?php declare(strict_types=1);

namespace App;

use Laminas\Stratigility\MiddlewarePipe;
use Siler\Diactoros;
use Siler\Route;
use Siler\HttpHandlerRunner;
use App\Middleware;
use App\Routes;

// use Siler\{Route, Http\Response};
// use function Siler\Config\config;

// Route\get('/', static function () {
//     $hw = new Greeter((string)config('app.name'));
//     Response\json($hw->greet());
// });

// if (!Route\did_match()) {
//     Response\json('Not found', 404);
// }

$ppAuth = new MiddlewarePipe();

$ppAuth->pipe(new Middleware\Auth);

$request = Diactoros\request();

$rh = new RequestHandler($request);

$response = Route\matching([
	Route\get('/', $rh->handler(new Routes\Home), $request),
	Route\get('/admin', $rh->pipeline(new Routes\Admin, $ppAuth), $request),
	Route\get('/secret', $rh->pipeline(new Routes\Secret, $ppAuth), $request),
	Route\get('/___graphql', $rh->handler(new Routes\GraphiQL), $request),
	Route\post('/___graphql', $rh->handler(new Routes\GraphQL), $request),
	Diactoros\json('not found', 404),
]);

HttpHandlerRunner\sapi_emit($response);
