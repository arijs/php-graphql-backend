<?php

use Siler\GraphQL\DateTimeScalar;

$queryType = [
	'allLocal' => function ($root, $args) {
		// $roomName = $args['roomName'];
		// $room = $roomByName($roomName);
		// $messages = R::find('message', 'room_id = ?', [$room['id']]);
		// return $messages;
		return json_encode($args);
	},
];

return [
	'Query' => $queryType,
	'DateTime' => new DateTimeScalar,
];
