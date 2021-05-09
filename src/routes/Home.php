<?php

namespace App\Routes;

use Siler\Diactoros;

class Home {
	function __invoke () {
		return Diactoros\json('welcome');
	}
}
