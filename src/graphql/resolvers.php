<?php

declare(strict_types=1);

use RedBeanPHP\R;
use Siler\GraphQL\DateTimeScalar;

use function Siler\Config\config;

$db = config('db');

R::setup(
    "mysql:host={$db['hostname']};dbname={$db['database']}",
    $db['username'],
    $db['password'],
);

$queryType = [
    'allLocal' => fn ($root, $args) => R::find('local'),
];

return [
    'Query' => $queryType,
    'DateTime' => new DateTimeScalar(),
];

/*
 *
 * json:
 * {"806b3ff0-3eec-4d8a-a5a8-1e514f911881":
 * {"id":"806b3ff0-3eec-4d8a-a5a8-1e514f911881",
 * "createdBy":null,"createdDate":null,
 * "lastModifiedBy":null,"lastModifiedDate":null,
 * "tipo":"CONTINENTE","sigla":null,
 * "nome":"Am\u00e9rica do Sul","contato":"",
 * "codigo_postal":"","obsId":null,"dentroDeId":null}}
 *
 * php:
 * array (
  '806b3ff0-3eec-4d8a-a5a8-1e514f911881' =>
  RedBeanPHP\OODBBean::__set_state(array(
     'properties' =>
    array (
      'id' => '806b3ff0-3eec-4d8a-a5a8-1e514f911881',
      'createdBy' => NULL,
      'createdDate' => NULL,
      'lastModifiedBy' => NULL,
      'lastModifiedDate' => NULL,
      'tipo' => 'CONTINENTE',
      'sigla' => NULL,
      'nome' => 'América do Sul',
      'contato' => '',
      'codigo_postal' => '',
      'obsId' => NULL,
      'dentroDeId' => NULL,
    ),
     '__info' =>
    array (
      'type' => 'local',
      'sys.id' => 'id',
      'sys.orig' =>
      array (
        'id' => '806b3ff0-3eec-4d8a-a5a8-1e514f911881',
        'createdBy' => NULL,
        'createdDate' => NULL,
        'lastModifiedBy' => NULL,
        'lastModifiedDate' => NULL,
        'tipo' => 'CONTINENTE',
        'sigla' => NULL,
        'nome' => 'América do Sul',
        'contato' => '',
        'codigo_postal' => '',
        'obsId' => NULL,
        'dentroDeId' => NULL,
      ),
      'tainted' => false,
      'changed' => false,
      'changelist' =>
      array (
      ),
      'model' => NULL,
      'data.bundle' =>
      array (
      ),
    ),
     'beanHelper' =>
    RedBeanPHP\BeanHelper\SimpleFacadeBeanHelper::__set_state(array(
    )),
     'fetchType' => NULL,
     'withSql' => '',
     'withParams' =>
    array (
    ),
     'aliasName' => NULL,
     'via' => NULL,
     'noLoad' => false,
     'all' => false,
  )),
)
 *
 */
