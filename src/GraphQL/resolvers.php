<?php

declare(strict_types=1);

use App\Util\Dsn;
use RedBeanPHP\R;
use Siler\GraphQL\DateTimeScalar;

use function Siler\Config\config;

/** @var array<string> $db */
$db = config('db');
$db_dsn = Dsn::fromArray($db);

// echo '{"die":0,"error": "db dsn"';
// echo ', "db": '.json_encode($db);
// echo ', "db_dsn": '.json_encode($db_dsn);
// echo '}';
// die;

R::setup(
    $db_dsn,
    $db['username'],
    $db['password'],
);

function fnCreateResolver(string $tableName): Closure
{
    return function (array $_root, array $args) use ($tableName) {
        /** @var array $input */
        $input = $args['input'];
        $object = R::load($tableName, 0);
        foreach ($input as $ik => $iv) {
            $object[$ik] = $iv;
        }
        R::store($object);

        return $object;
    };
}

/**
 * @param array<string|array<string>> $filter
 *
 * @return array{bindings: array<array<string>|mixed>, search: ""|list<non-empty-string>}
 */
function filterString(string $field, array $filter): array
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

/**
 * @return array<array<string>>
 */
function filterID(string $field, ?string $filter): array
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

/**
 * @param array<string> $map
 * @param array<string|array<string>> $filter
 *
 * @return array<string|array<string>>
 */
function filterInput(array &$map, array $filter): array
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

/**
 * @param array<?string> $item
 *
 * @return string|null
 */
function sortInputItem(array $item, bool $debug = false)
{
    $field = array_key_exists('field', $item) ? strtolower($item['field']) : null;
    $order = array_key_exists('order', $item) ? $item['order'] : null;
    $result = empty($field) ? null : (
        empty($order) ? $field : (
        "{$field} {$order}"));
    if ($debug) {
        echo '{"die":4.1,"error": "sortInputItem", "item":';
        echo json_encode($item);
        echo ', "field": ';
        echo json_encode($field);
        echo ', "order": ';
        echo json_encode($order);
        echo ', "result": ';
        echo json_encode($result);
        echo '}';
        die;
    }

    return $result;
}

/**
 * @param array<?string|array<?string>> $input
 *
 * @return array<string>|null
 */
function sortInput(array $input)
{
    $list = [];
    /**
     * @psalm-suppress InvalidArgument
     */
    $direct = sortInputItem($input);
    if (!empty($direct)) {
        $list[] = $direct;
    }
    foreach ($input as $item) {
        if (!is_array($item)) {
            continue;
        }
        $item = sortInputItem($item);
        if (!empty($item)) {
            $list[] = $item;
        }
    }

    return array_key_exists(0, $list) ? $list : null;
}

/**
 * @param array<string> $filterInputMap
 */
function fnCreateAll(string $tableName, array &$filterInputMap): Closure
{
    return static function ($root, $args) use ($tableName, &$filterInputMap) {
        $search = [];
        $bindings = [];
        $sorting = null;
        $offset = null;
        $limit = null;
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
        if (array_key_exists('sort', $args)) {
            $sorting = sortInput($args['sort']);
            $sorting = 'ORDER BY ' . implode(', ', $sorting);
            // echo '{"die":4,"error": "created sorting", "args[sort]":';
            // echo json_encode($args['sort']);
            // echo ', "sorting": ';
            // echo json_encode($sorting);
            // echo '}';
            // die;
        }
        if (array_key_exists('limit', $args)) {
            $limit = "LIMIT {$args['limit']}";
        } else {
            $limit = "LIMIT 20";
        }
        if (array_key_exists('skip', $args)) {
            $offset = "OFFSET {$args['skip']}";
        }
        $snippet = implode(' ', array_filter([$sorting, $limit, $offset]));

        if (array_key_exists('_singleCol', $args)) {
            $cond = '';
            if (count($search)) {
                $cond = ' WHERE '.implode(' AND ', $search);
            }
            return R::getCol( "SELECT ${args['_singleCol']} FROM ${tableName}${cond}", $bindings );
        } else {
            return R::find($tableName, implode(' AND ', $search), $bindings, $snippet);
        }
    };
}

$tipoLocalFilterFields = [
    'id' => 'filterID',
    'nome' => 'filterString',
];
$queryAllTipoLocal = fnCreateAll('tipo_local', $tipoLocalFilterFields);

$filterLocalByTipo = static function ($field, $filter) use (&$queryAllTipoLocal) {
    // $allTipoLocal = $queryType['allTipoLocal'];
    // $queryTypeInspect = var_export($queryAllTipoLocal, true);
    $tipos = $queryAllTipoLocal([], ['filter' => $filter, '_singleCol' => 'id']);

    // echo '{"die":6,"error": "search local by type", "field":';
    // echo json_encode($field);
    // echo ', "queryTypeInspect": ';
    // echo json_encode($queryTypeInspect);
    // echo ', "filter": ';
    // echo json_encode($filter);
    // echo ', "tipos": ';
    // echo json_encode($tipos);
    // echo '}';
    // die;

    $ins = R::genSlots($tipos);
    $search = ["id_tipo IN ({$ins})"];
    $bindings = array_values($tipos);

    return [
        'search' => $search,
        'bindings' => $bindings,
    ];
};

$localFilterFields = [
    'codigo_postal' => 'filterString',
    'id' => 'filterID',
    'id_dentro_de' => 'filterID',
    'dentro_de' => null,
    'nome' => 'filterString',
    'sigla' => 'filterString',
    'tipo' => $filterLocalByTipo,
];
$queryAllLocal = fnCreateAll('locais', $localFilterFields);

$filterLocalByDentroDe = static function ($field, $filter) use (&$queryAllLocal) {
    // $allTipoLocal = $queryType['allTipoLocal'];
    // $queryTypeInspect = var_export($queryAllTipoLocal, true);
    $locais = $queryAllLocal([], ['filter' => $filter, '_singleCol' => 'id']);

    // echo '{"die":6,"error": "search local by type", "field":';
    // echo json_encode($field);
    // echo ', "queryTypeInspect": ';
    // echo json_encode($queryTypeInspect);
    // echo ', "filter": ';
    // echo json_encode($filter);
    // echo ', "tipos": ';
    // echo json_encode($tipos);
    // echo '}';
    // die;

    $ins = R::genSlots($locais);
    $search = ["id_dentro_de IN ({$ins})"];
    $bindings = array_values($locais);

    return [
        'search' => $search,
        'bindings' => $bindings,
    ];
};

$localFilterFields['dentro_de'] = $filterLocalByDentroDe;

$queryType = [
    'allLocal' => $queryAllLocal,
    'allTipoLocal' => $queryAllTipoLocal,
];

$localType = [
    'tipo' => function ($local) {
        $tipoObj = R::findOne('tipo_local', 'id = ?', [$local['id_tipo']]);
        // echo '{"die":5,"error": "search tipo from local", "local[id_tipo]":';
        // echo json_encode($local['id_tipo']);
        // echo ', "tipoObj": ';
        // echo json_encode($tipoObj);
        // echo '}';
        // die;
        return $tipoObj;
    },
    'dentro_de' => function ($local) {
        $dentro = R::findOne('locais', 'id = ?', [$local['id_dentro_de']]);
        return $dentro;
    },
];

$mutationType = [
    'createTipoLocal' => fnCreateResolver('tipo_local'),
    'createLocal' => fnCreateResolver('locais'),
];

return [
    'Query' => $queryType,
    'Mutation' => $mutationType,
    'DateTime' => new DateTimeScalar(),
    'Local' => $localType,
];
