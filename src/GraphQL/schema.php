<?php

declare(strict_types=1);

use Siler\GraphQL;

$typeDefs = file_get_contents(__DIR__ . '/schema.graphqls');
$resolvers = include __DIR__ . '/resolvers.php';

/**
 * @psalm-suppress InvalidArgument
 */
return GraphQL\schema($typeDefs, $resolvers);
