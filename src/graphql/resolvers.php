<?php

declare(strict_types=1);

use App\Util\Dsn;
use RedBeanPHP\R;
use Siler\GraphQL\DateTimeScalar;

use function Siler\Config\config;

$db = config('db');

R::setup(
    Dsn::fromArray($db),
    $db['username'],
    $db['password'],
);

function fnCreateResolver($tableName)
{
    return function ($root, $args) use ($tableName) {
        $input = $args['input'];
        $object = R::load($tableName, 0);
        foreach ($input as $ik => $iv) {
            $object[$ik] = $iv;
        }
        R::store($object);

        return $object;
    };
}

function filterString($field, $filter)
{
    if (empty($filter)) {
        return [
            'search' => '',
            'bindings' => [],
        ];
    }
    $search = [];
    $bindings = [];
    // echo '{"die":3,"error": "string filter init"';
    // echo ', "field": '.json_encode($field);
    // echo ', "filter": '.json_encode(var_export($filter, true));
    // echo '}';
    // die;
    if (array_key_exists('eq', $filter)) {
        $search[] = "{$field} = ?";
        $bindings[] = $filter['eq'];
    }
    if (array_key_exists('ne', $filter)) {
        $search[] = "{$field} != ?";
        $bindings[] = $filter['ne'];
    }
    if (array_key_exists('in', $filter)) {
        $in = $filter['in'];
        $ins = R::genSlots($in);
        $search[] = "{$field} IN ({$ins})";
        $bindings = array_merge($bindings, array_values($in));
    }
    if (array_key_exists('nin', $filter)) {
        $nin = $filter['nin'];
        $nins = R::genSlots($nin);
        $search[] = "{$field} NOT IN ({$nins})";
        $bindings = array_merge($bindings, array_values($nin));
    }
    if (array_key_exists('like', $filter)) {
        $search[] = "{$field} LIKE ?";
        $bindings[] = $filter['like'];
    }
    if (array_key_exists('unlike', $filter)) {
        $search[] = "{$field} NOT LIKE ?";
        $bindings[] = $filter['unlike'];
    }
    if (array_key_exists('regex', $filter)) {
        $search[] = "{$field} REGEXP ?";
        $bindings[] = $filter['regex'];
    }
    if (array_key_exists('nregex', $filter)) {
        $search[] = "{$field} NOT REGEXP ?";
        $bindings[] = $filter['nregex'];
    }
    // echo '{"die":4,"error": "string filter end"';
    // echo ', "field": '.json_encode($field);
    // echo ', "filter": '.json_encode($filter);
    // echo ', "search": '.json_encode($search);
    // echo ', "bindings": '.json_encode($bindings);
    // // echo ', "in": '.json_encode($nin);
    // // echo ', "ins": '.json_encode($nins);
    // echo '}';
    // die;

    return [
        'search' => $search,
        'bindings' => $bindings,
    ];
}

function filterID($field, $filter)
{
    return is_null($filter)
        ? [
            'search' => [],
            'bindings' => [],
        ]
        : [
            'search' => ["{$field} = ?"],
            'bindings' => [$filter],
        ];
}

function filterInput($map, $filter)
{
    $search = [];
    $bindings = [];
    if (empty($filter)) {
        // echo '{"die":1.1,"error": "empty filter"}';
        // die;
        return [
            'search' => $search,
            'bindings' => $bindings,
        ];
    }
    $i = 0;
    foreach ($map as $field => $type) {
        // if ($i >= 0) {
        //     echo '{"die":1.125,"error": "first filter from map", ';
        //     echo "\"field\": \"{$field}\", ";
        //     echo "\"type\": \"{$type}\", ";
        //     echo '"is_callable": '.(is_callable($type)?'true':'false').', ';
        //     echo '"search": '.json_encode($search).', ';
        //     echo '"bindings": '.json_encode($bindings).', ';
        //     echo '"times": '.$i.', "obj":';
        //     echo json_encode($map);
        //     echo ', "filters": ';
        //     echo json_encode($filter);
        //     echo '}';
        //     die;
        // }
        $i++;
        if (!is_callable($type)) {
            echo '{"die":1.15,"error": "type is not callable", ';
            echo "\"field\": \"{$field}\", ";
            echo "\"type\": \"{$type}\", ";
            echo '"times": ' . $i . ', "obj":';
            echo json_encode(var_export($map, true));
            echo '}';
            die;
            // throw new \Exception("FilterInput: type is not callable ({$type}, {$field})");
        }
        if (!array_key_exists($field, $filter)) {
            // echo '{"die":1.2,"error": "filter does not have key $field", ';
            // echo "\"field\": \"{$field}\", ";
            // echo "\"type\": \"{$type}\", ";
            // echo '"times": '.$i.', "obj":';
            // echo json_encode(var_export($map, true));
            // echo '}';
            // die;
            continue;
        }
        $combine = call_user_func($type, $field, $filter[$field]);
        // echo '{"die":1.3,"error": "first filter result", ';
        // echo "\"field\": \"{$field}\", ";
        // echo "\"type\": \"{$type}\", ";
        // echo '"times": '.$i.', "combine":';
        // echo json_encode($combine);
        // echo '}';
        // die;
        $search = array_merge($search, array_values($combine['search']));
        $bindings = array_merge($bindings, array_values($combine['bindings']));
    }

    // echo '{"die":2,"error": "created filter", "times": '.$i.', ';
    // echo '"search": '.json_encode($search).', ';
    // echo '"bindings": '.json_encode($bindings).' ';
    // echo '}';
    // die;
    return [
        'search' => $search,
        'bindings' => $bindings,
    ];
}

function fnCreateAll($tableName, $filterInputMap)
{
    return static function ($root, $args) use ($tableName, $filterInputMap) {
        $search = [];
        $bindings = [];
        if (array_key_exists('filter', $args)) {
            // echo '{"die":1,"error": "has filter", "obj":';
            // echo json_encode($filterInputMap);
            // echo ', "filters": ';
            // echo json_encode($args['filter']);
            // echo '}';
            // die;
            $filter = filterInput($filterInputMap, $args['filter']);
            // echo '{"die":3,"error": "created filter", "map":';
            // echo json_encode($filterInputMap);
            // echo ', "filter": ';
            // echo json_encode($filter);
            // echo '}';
            // die;
            $search = $filter['search'];
            $bindings = $filter['bindings'];
        }

        return R::find($tableName, implode(' AND ', $search), $bindings);
    };
}

$queryType = [
    'allLocal' => fnCreateAll('locais', [
        'id' => 'filterID',
        'nome' => 'filterString',
    ]),
    'allTipoLocal' => fnCreateAll('tipo_local', [
        'id' => 'filterID',
        'nome' => 'filterString',
    ]),
];

$mutationType = [
    'createTipoLocal' => fnCreateResolver('tipo_local'),
    'createLocal' => fnCreateResolver('locais'),
];

return [
    'Query' => $queryType,
    'Mutation' => $mutationType,
    'DateTime' => new DateTimeScalar(),
];
