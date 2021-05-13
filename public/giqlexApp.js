
var giqRequire = {
  moduleMap: {
    "object-assign": function(target) {
      var hop = Object.prototype.hasOwnProperty;
      for (var i = 1, c = arguments.length; i < c; i++) {
        var source = arguments[i];
        for (var k in source) if (hop.call(source, k)) {
          target[k] = source[k];
        }
      }
      return target;
    }
  },
  require: function(str) {
    var module = giqRequire.moduleMap[str];
    if (!module) console.warn(`Require("${str}"): module not found`);
    return module;
  },
  global: window
};
    
var giqlexApp = (function (exports, React$1, ReactDOM) {
  'use strict';

  
  var require = giqRequire.require;
  var global = giqRequire.global;
  var process = {
    env: {
      NODE_ENV: 'development'
    }
  };
      

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty$2(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof$3(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$3 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$3 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$3(obj);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn$1(this, result);
    };
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;

  function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
  var MAX_ARRAY_LENGTH = 10;
  var MAX_RECURSIVE_DEPTH = 2;
  /**
   * Used to print values in error messages.
   */

  function inspect(value) {
    return formatValue(value, []);
  }

  function formatValue(value, seenValues) {
    switch (_typeof$2(value)) {
      case 'string':
        return JSON.stringify(value);

      case 'function':
        return value.name ? "[function ".concat(value.name, "]") : '[function]';

      case 'object':
        if (value === null) {
          return 'null';
        }

        return formatObjectValue(value, seenValues);

      default:
        return String(value);
    }
  }

  function formatObjectValue(value, previouslySeenValues) {
    if (previouslySeenValues.indexOf(value) !== -1) {
      return '[Circular]';
    }

    var seenValues = [].concat(previouslySeenValues, [value]);
    var customInspectFn = getCustomFn(value);

    if (customInspectFn !== undefined) {
      // $FlowFixMe(>=0.90.0)
      var customValue = customInspectFn.call(value); // check for infinite recursion

      if (customValue !== value) {
        return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
      }
    } else if (Array.isArray(value)) {
      return formatArray(value, seenValues);
    }

    return formatObject(value, seenValues);
  }

  function formatObject(object, seenValues) {
    var keys = Object.keys(object);

    if (keys.length === 0) {
      return '{}';
    }

    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return '[' + getObjectTag(object) + ']';
    }

    var properties = keys.map(function (key) {
      var value = formatValue(object[key], seenValues);
      return key + ': ' + value;
    });
    return '{ ' + properties.join(', ') + ' }';
  }

  function formatArray(array, seenValues) {
    if (array.length === 0) {
      return '[]';
    }

    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return '[Array]';
    }

    var len = Math.min(MAX_ARRAY_LENGTH, array.length);
    var remaining = array.length - len;
    var items = [];

    for (var i = 0; i < len; ++i) {
      items.push(formatValue(array[i], seenValues));
    }

    if (remaining === 1) {
      items.push('... 1 more item');
    } else if (remaining > 1) {
      items.push("... ".concat(remaining, " more items"));
    }

    return '[' + items.join(', ') + ']';
  }

  function getCustomFn(object) {
    var customInspectFn = object[String(nodejsCustomInspectSymbol)];

    if (typeof customInspectFn === 'function') {
      return customInspectFn;
    }

    if (typeof object.inspect === 'function') {
      return object.inspect;
    }
  }

  function getObjectTag(object) {
    var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

    if (tag === 'Object' && typeof object.constructor === 'function') {
      var name = object.constructor.name;

      if (typeof name === 'string' && name !== '') {
        return name;
      }
    }

    return tag;
  }

  function devAssert(condition, message) {
    var booleanCondition = Boolean(condition);

    if (!booleanCondition) {
      throw new Error(message);
    }
  }

  /**
   * The `defineToJSON()` function defines toJSON() and inspect() prototype
   * methods, if no function provided they become aliases for toString().
   */

  function defineToJSON(classObject) {
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
    classObject.prototype.toJSON = fn;
    classObject.prototype.inspect = fn;

    if (nodejsCustomInspectSymbol) {
      classObject.prototype[nodejsCustomInspectSymbol] = fn;
    }
  }

  function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

  /**
   * Return true if `value` is object-like. A value is object-like if it's not
   * `null` and has a `typeof` result of "object".
   */
  function isObjectLike(value) {
    return _typeof$1(value) == 'object' && value !== null;
  }

  /**
   * Represents a location in a Source.
   */

  /**
   * Takes a Source and a UTF-8 character offset, and returns the corresponding
   * line and column as a SourceLocation.
   */
  function getLocation(source, position) {
    var lineRegexp = /\r\n|[\n\r]/g;
    var line = 1;
    var column = position + 1;
    var match;

    while ((match = lineRegexp.exec(source.body)) && match.index < position) {
      line += 1;
      column = position + 1 - (match.index + match[0].length);
    }

    return {
      line: line,
      column: column
    };
  }

  /**
   * Render a helpful description of the location in the GraphQL Source document.
   */

  function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
  }
  /**
   * Render a helpful description of the location in the GraphQL Source document.
   */

  function printSourceLocation(source, sourceLocation) {
    var firstLineColumnOffset = source.locationOffset.column - 1;
    var body = whitespace(firstLineColumnOffset) + source.body;
    var lineIndex = sourceLocation.line - 1;
    var lineOffset = source.locationOffset.line - 1;
    var lineNum = sourceLocation.line + lineOffset;
    var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    var columnNum = sourceLocation.column + columnOffset;
    var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
    var lines = body.split(/\r\n|[\n\r]/g);
    var locationLine = lines[lineIndex]; // Special case for minified documents

    if (locationLine.length > 120) {
      var sublineIndex = Math.floor(columnNum / 80);
      var sublineColumnNum = columnNum % 80;
      var sublines = [];

      for (var i = 0; i < locationLine.length; i += 80) {
        sublines.push(locationLine.slice(i, i + 80));
      }

      return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
        return ['', subline];
      }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
    }

    return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
    ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
  }

  function printPrefixedLines(lines) {
    var existingLines = lines.filter(function (_ref) {
      _ref[0];
          var line = _ref[1];
      return line !== undefined;
    });
    var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
      var prefix = _ref2[0];
      return prefix.length;
    }));
    return existingLines.map(function (_ref3) {
      var prefix = _ref3[0],
          line = _ref3[1];
      return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
    }).join('\n');
  }

  function whitespace(len) {
    return Array(len + 1).join(' ');
  }

  function lpad(len, str) {
    return whitespace(len - str.length) + str;
  }

  /**
   * A GraphQLError describes an Error found during the parse, validate, or
   * execute phases of performing a GraphQL operation. In addition to a message
   * and stack trace, it also includes information about the locations in a
   * GraphQL document and/or execution result that correspond to the Error.
   */

  function GraphQLError( // eslint-disable-line no-redeclare
  message, nodes, source, positions, path, originalError, extensions) {
    // Compute list of blame nodes.
    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var node = _nodes[0];
      _source = node && node.loc && node.loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return getLocation(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(getLocation(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if (isObjectLike(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(this, {
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsey values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: _locations || undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: Boolean(_locations)
      },
      path: {
        // Coercing falsey values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path || undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: Boolean(path)
      },
      nodes: {
        value: _nodes || undefined
      },
      source: {
        value: _source || undefined
      },
      positions: {
        value: _positions || undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsey values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: _extensions || undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: Boolean(_extensions)
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError && originalError.stack) {
      Object.defineProperty(this, 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  GraphQLError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: GraphQLError
    },
    name: {
      value: 'GraphQLError'
    },
    toString: {
      value: function toString() {
        return printError(this);
      }
    }
  });
  /**
   * Prints a GraphQLError to a string, representing useful location information
   * about the error's position in the source.
   */

  function printError(error) {
    var output = error.message;

    if (error.nodes) {
      for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
        var node = _error$nodes2[_i2];

        if (node.loc) {
          output += '\n\n' + printLocation(node.loc);
        }
      }
    } else if (error.source && error.locations) {
      for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
        var location = _error$locations2[_i4];
        output += '\n\n' + printSourceLocation(error.source, location);
      }
    }

    return output;
  }

  /**
   * Produces a GraphQLError representing a syntax error, containing useful
   * descriptive information about the syntax error's position in the source.
   */

  function syntaxError(source, position, description) {
    return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
  }

  /**
   * The set of allowed kind values for AST nodes.
   */
  var Kind = Object.freeze({
    // Name
    NAME: 'Name',
    // Document
    DOCUMENT: 'Document',
    OPERATION_DEFINITION: 'OperationDefinition',
    VARIABLE_DEFINITION: 'VariableDefinition',
    SELECTION_SET: 'SelectionSet',
    FIELD: 'Field',
    ARGUMENT: 'Argument',
    // Fragments
    FRAGMENT_SPREAD: 'FragmentSpread',
    INLINE_FRAGMENT: 'InlineFragment',
    FRAGMENT_DEFINITION: 'FragmentDefinition',
    // Values
    VARIABLE: 'Variable',
    INT: 'IntValue',
    FLOAT: 'FloatValue',
    STRING: 'StringValue',
    BOOLEAN: 'BooleanValue',
    NULL: 'NullValue',
    ENUM: 'EnumValue',
    LIST: 'ListValue',
    OBJECT: 'ObjectValue',
    OBJECT_FIELD: 'ObjectField',
    // Directives
    DIRECTIVE: 'Directive',
    // Types
    NAMED_TYPE: 'NamedType',
    LIST_TYPE: 'ListType',
    NON_NULL_TYPE: 'NonNullType',
    // Type System Definitions
    SCHEMA_DEFINITION: 'SchemaDefinition',
    OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
    // Type Definitions
    SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
    OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
    FIELD_DEFINITION: 'FieldDefinition',
    INPUT_VALUE_DEFINITION: 'InputValueDefinition',
    INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
    UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
    ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
    ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
    INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
    // Directive Definitions
    DIRECTIVE_DEFINITION: 'DirectiveDefinition',
    // Type System Extensions
    SCHEMA_EXTENSION: 'SchemaExtension',
    // Type Extensions
    SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
    OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
    INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
    UNION_TYPE_EXTENSION: 'UnionTypeExtension',
    ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
    INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
  });
  /**
   * The enum type representing the possible kind values of AST nodes.
   */

  /**
   * The `defineToStringTag()` function checks first to see if the runtime
   * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
   * is defined as a `Symbol` instance. If both conditions are met, the
   * Symbol.toStringTag property is defined as a getter that returns the
   * supplied class constructor's name.
   *
   * @method defineToStringTag
   *
   * @param {Class<any>} classObject a class such as Object, String, Number but
   * typically one of your own creation through the class keyword; `class A {}`,
   * for example.
   */
  function defineToStringTag(classObject) {
    if (typeof Symbol === 'function' && Symbol.toStringTag) {
      Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
        get: function get() {
          return this.constructor.name;
        }
      });
    }
  }

  /**
   * A representation of source input to GraphQL.
   * `name` and `locationOffset` are optional. They are useful for clients who
   * store GraphQL documents in source files; for example, if the GraphQL input
   * starts at line 40 in a file named Foo.graphql, it might be useful for name to
   * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
   * line and column in locationOffset are 1-indexed
   */
  var Source = function Source(body, name, locationOffset) {
    this.body = body;
    this.name = name || 'GraphQL request';
    this.locationOffset = locationOffset || {
      line: 1,
      column: 1
    };
    this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive');
    this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive');
  }; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(Source);

  /**
   * Produces the value of a block string from its parsed raw value, similar to
   * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
   *
   * This implements the GraphQL spec's BlockStringValue() static algorithm.
   */
  function dedentBlockStringValue(rawString) {
    // Expand a block string's raw value into independent lines.
    var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

    var commonIndent = getBlockStringIndentation(lines);

    if (commonIndent !== 0) {
      for (var i = 1; i < lines.length; i++) {
        lines[i] = lines[i].slice(commonIndent);
      }
    } // Remove leading and trailing blank lines.


    while (lines.length > 0 && isBlank(lines[0])) {
      lines.shift();
    }

    while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
      lines.pop();
    } // Return a string of the lines joined with U+000A.


    return lines.join('\n');
  } // @internal

  function getBlockStringIndentation(lines) {
    var commonIndent = null;

    for (var i = 1; i < lines.length; i++) {
      var line = lines[i];
      var indent = leadingWhitespace(line);

      if (indent === line.length) {
        continue; // skip empty lines
      }

      if (commonIndent === null || indent < commonIndent) {
        commonIndent = indent;

        if (commonIndent === 0) {
          break;
        }
      }
    }

    return commonIndent === null ? 0 : commonIndent;
  }

  function leadingWhitespace(str) {
    var i = 0;

    while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
      i++;
    }

    return i;
  }

  function isBlank(str) {
    return leadingWhitespace(str) === str.length;
  }
  /**
   * Print a block string in the indented block form by adding a leading and
   * trailing blank line. However, if a block string starts with whitespace and is
   * a single-line, adding a leading blank line would strip that whitespace.
   */


  function printBlockString(value) {
    var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isSingleLine = value.indexOf('\n') === -1;
    var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
    var hasTrailingQuote = value[value.length - 1] === '"';
    var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
    var result = ''; // Format a multi-line block quote to account for leading space.

    if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
      result += '\n' + indentation;
    }

    result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

    if (printAsMultipleLines) {
      result += '\n';
    }

    return '"""' + result.replace(/"""/g, '\\"""') + '"""';
  }

  /**
   * An exported enum describing the different kinds of tokens that the
   * lexer emits.
   */
  var TokenKind = Object.freeze({
    SOF: '<SOF>',
    EOF: '<EOF>',
    BANG: '!',
    DOLLAR: '$',
    AMP: '&',
    PAREN_L: '(',
    PAREN_R: ')',
    SPREAD: '...',
    COLON: ':',
    EQUALS: '=',
    AT: '@',
    BRACKET_L: '[',
    BRACKET_R: ']',
    BRACE_L: '{',
    PIPE: '|',
    BRACE_R: '}',
    NAME: 'Name',
    INT: 'Int',
    FLOAT: 'Float',
    STRING: 'String',
    BLOCK_STRING: 'BlockString',
    COMMENT: 'Comment'
  });
  /**
   * The enum type representing the token kinds values.
   */

  /**
   * Given a Source object, this returns a Lexer for that source.
   * A Lexer is a stateful stream generator in that every time
   * it is advanced, it returns the next token in the Source. Assuming the
   * source lexes, the final Token emitted by the lexer will be of kind
   * EOF, after which the lexer will repeatedly return the same EOF token
   * whenever called.
   */

  function createLexer(source, options) {
    var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
    var lexer = {
      source: source,
      options: options,
      lastToken: startOfFileToken,
      token: startOfFileToken,
      line: 1,
      lineStart: 0,
      advance: advanceLexer,
      lookahead: lookahead
    };
    return lexer;
  }

  function advanceLexer() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }

  function lookahead() {
    var token = this.token;

    if (token.kind !== TokenKind.EOF) {
      do {
        // Note: next is only mutable during parsing, so we cast to allow this.
        token = token.next || (token.next = readToken(this, token));
      } while (token.kind === TokenKind.COMMENT);
    }

    return token;
  }
  /**
   * Helper function for constructing the Token object.
   */

  function Tok(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  } // Print a simplified form when appearing in JSON/util.inspect.


  defineToJSON(Tok, function () {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  });

  function printCharCode(code) {
    return (// NaN/undefined represents access beyond the end of the file.
      isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
      code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
      "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
    );
  }
  /**
   * Gets the next token from the source starting at the given position.
   *
   * This skips over whitespace until it finds the next lexable token, then lexes
   * punctuators immediately or calls the appropriate helper function for more
   * complicated tokens.
   */


  function readToken(lexer, prev) {
    var source = lexer.source;
    var body = source.body;
    var bodyLength = body.length;
    var pos = positionAfterWhitespace(body, prev.end, lexer);
    var line = lexer.line;
    var col = 1 + pos - lexer.lineStart;

    if (pos >= bodyLength) {
      return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
    }

    var code = body.charCodeAt(pos); // SourceCharacter

    switch (code) {
      // !
      case 33:
        return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
      // #

      case 35:
        return readComment(source, pos, line, col, prev);
      // $

      case 36:
        return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
      // &

      case 38:
        return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
      // (

      case 40:
        return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
      // )

      case 41:
        return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
      // .

      case 46:
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
        }

        break;
      // :

      case 58:
        return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
      // =

      case 61:
        return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
      // @

      case 64:
        return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
      // [

      case 91:
        return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
      // ]

      case 93:
        return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
      // {

      case 123:
        return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
      // |

      case 124:
        return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
      // }

      case 125:
        return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
      // A-Z _ a-z

      case 65:
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80:
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 95:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
      case 106:
      case 107:
      case 108:
      case 109:
      case 110:
      case 111:
      case 112:
      case 113:
      case 114:
      case 115:
      case 116:
      case 117:
      case 118:
      case 119:
      case 120:
      case 121:
      case 122:
        return readName(source, pos, line, col, prev);
      // - 0-9

      case 45:
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return readNumber(source, pos, code, line, col, prev);
      // "

      case 34:
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, line, col, prev, lexer);
        }

        return readString(source, pos, line, col, prev);
    }

    throw syntaxError(source, pos, unexpectedCharacterMessage(code));
  }
  /**
   * Report a message that an unexpected character was encountered.
   */


  function unexpectedCharacterMessage(code) {
    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
    }

    if (code === 39) {
      // '
      return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
    }

    return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
  }
  /**
   * Reads from body starting at startPosition until it finds a non-whitespace
   * character, then returns the position of that character for lexing.
   */


  function positionAfterWhitespace(body, startPosition, lexer) {
    var bodyLength = body.length;
    var position = startPosition;

    while (position < bodyLength) {
      var code = body.charCodeAt(position); // tab | space | comma | BOM

      if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
        ++position;
      } else if (code === 10) {
        // new line
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
      } else if (code === 13) {
        // carriage return
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }

        ++lexer.line;
        lexer.lineStart = position;
      } else {
        break;
      }
    }

    return position;
  }
  /**
   * Reads a comment token from the source file.
   *
   * #[\u0009\u0020-\uFFFF]*
   */


  function readComment(source, start, line, col, prev) {
    var body = source.body;
    var code;
    var position = start;

    do {
      code = body.charCodeAt(++position);
    } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
    code > 0x001f || code === 0x0009));

    return new Tok(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
  }
  /**
   * Reads a number token from the source file, either a float
   * or an int depending on whether a decimal point appears.
   *
   * Int:   -?(0|[1-9][0-9]*)
   * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
   */


  function readNumber(source, start, firstCode, line, col, prev) {
    var body = source.body;
    var code = firstCode;
    var position = start;
    var isFloat = false;

    if (code === 45) {
      // -
      code = body.charCodeAt(++position);
    }

    if (code === 48) {
      // 0
      code = body.charCodeAt(++position);

      if (code >= 48 && code <= 57) {
        throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
      }
    } else {
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }

    if (code === 46) {
      // .
      isFloat = true;
      code = body.charCodeAt(++position);
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }

    if (code === 69 || code === 101) {
      // E e
      isFloat = true;
      code = body.charCodeAt(++position);

      if (code === 43 || code === 45) {
        // + -
        code = body.charCodeAt(++position);
      }

      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    } // Numbers cannot be followed by . or e


    if (code === 46 || code === 69 || code === 101) {
      throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    }

    return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
  }
  /**
   * Returns the new position in the source after reading digits.
   */


  function readDigits(source, start, firstCode) {
    var body = source.body;
    var position = start;
    var code = firstCode;

    if (code >= 48 && code <= 57) {
      // 0 - 9
      do {
        code = body.charCodeAt(++position);
      } while (code >= 48 && code <= 57); // 0 - 9


      return position;
    }

    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }
  /**
   * Reads a string token from the source file.
   *
   * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
   */


  function readString(source, start, line, col, prev) {
    var body = source.body;
    var position = start + 1;
    var chunkStart = position;
    var code = 0;
    var value = '';

    while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
    code !== 0x000a && code !== 0x000d) {
      // Closing Quote (")
      if (code === 34) {
        value += body.slice(chunkStart, position);
        return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
      } // SourceCharacter


      if (code < 0x0020 && code !== 0x0009) {
        throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
      }

      ++position;

      if (code === 92) {
        // \
        value += body.slice(chunkStart, position - 1);
        code = body.charCodeAt(position);

        switch (code) {
          case 34:
            value += '"';
            break;

          case 47:
            value += '/';
            break;

          case 92:
            value += '\\';
            break;

          case 98:
            value += '\b';
            break;

          case 102:
            value += '\f';
            break;

          case 110:
            value += '\n';
            break;

          case 114:
            value += '\r';
            break;

          case 116:
            value += '\t';
            break;

          case 117:
            {
              // uXXXX
              var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

              if (charCode < 0) {
                var invalidSequence = body.slice(position + 1, position + 5);
                throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
              }

              value += String.fromCharCode(charCode);
              position += 4;
              break;
            }

          default:
            throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
        }

        ++position;
        chunkStart = position;
      }
    }

    throw syntaxError(source, position, 'Unterminated string.');
  }
  /**
   * Reads a block string token from the source file.
   *
   * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
   */


  function readBlockString(source, start, line, col, prev, lexer) {
    var body = source.body;
    var position = start + 3;
    var chunkStart = position;
    var code = 0;
    var rawValue = '';

    while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
      // Closing Triple-Quote (""")
      if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
        rawValue += body.slice(chunkStart, position);
        return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
      } // SourceCharacter


      if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
        throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
      }

      if (code === 10) {
        // new line
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
      } else if (code === 13) {
        // carriage return
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }

        ++lexer.line;
        lexer.lineStart = position;
      } else if ( // Escape Triple-Quote (\""")
      code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
        rawValue += body.slice(chunkStart, position) + '"""';
        position += 4;
        chunkStart = position;
      } else {
        ++position;
      }
    }

    throw syntaxError(source, position, 'Unterminated string.');
  }
  /**
   * Converts four hexadecimal chars to the integer that the
   * string represents. For example, uniCharCode('0','0','0','f')
   * will return 15, and uniCharCode('0','0','f','f') returns 255.
   *
   * Returns a negative number on error, if a char was invalid.
   *
   * This is implemented by noting that char2hex() returns -1 on error,
   * which means the result of ORing the char2hex() will also be negative.
   */


  function uniCharCode(a, b, c, d) {
    return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
  }
  /**
   * Converts a hex character to its integer value.
   * '0' becomes 0, '9' becomes 9
   * 'A' becomes 10, 'F' becomes 15
   * 'a' becomes 10, 'f' becomes 15
   *
   * Returns -1 on error.
   */


  function char2hex(a) {
    return a >= 48 && a <= 57 ? a - 48 // 0-9
    : a >= 65 && a <= 70 ? a - 55 // A-F
    : a >= 97 && a <= 102 ? a - 87 // a-f
    : -1;
  }
  /**
   * Reads an alphanumeric + underscore name from the source.
   *
   * [_A-Za-z][_0-9A-Za-z]*
   */


  function readName(source, start, line, col, prev) {
    var body = source.body;
    var bodyLength = body.length;
    var position = start + 1;
    var code = 0;

    while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
    code >= 48 && code <= 57 || // 0-9
    code >= 65 && code <= 90 || // A-Z
    code >= 97 && code <= 122) // a-z
    ) {
      ++position;
    }

    return new Tok(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
  }

  /**
   * The set of allowed directive location values.
   */
  var DirectiveLocation = Object.freeze({
    // Request Definitions
    QUERY: 'QUERY',
    MUTATION: 'MUTATION',
    SUBSCRIPTION: 'SUBSCRIPTION',
    FIELD: 'FIELD',
    FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
    FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
    INLINE_FRAGMENT: 'INLINE_FRAGMENT',
    VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
    // Type System Definitions
    SCHEMA: 'SCHEMA',
    SCALAR: 'SCALAR',
    OBJECT: 'OBJECT',
    FIELD_DEFINITION: 'FIELD_DEFINITION',
    ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
    INTERFACE: 'INTERFACE',
    UNION: 'UNION',
    ENUM: 'ENUM',
    ENUM_VALUE: 'ENUM_VALUE',
    INPUT_OBJECT: 'INPUT_OBJECT',
    INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
  });
  /**
   * The enum type representing the directive location values.
   */

  /**
   * Given a GraphQL source, parses it into a Document.
   * Throws GraphQLError if a syntax error is encountered.
   */
  function parse$1(source, options) {
    var parser = new Parser(source, options);
    return parser.parseDocument();
  }
  /**
   * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
   * that value.
   * Throws GraphQLError if a syntax error is encountered.
   *
   * This is useful within tools that operate upon GraphQL Values directly and
   * in isolation of complete GraphQL documents.
   *
   * Consider providing the results to the utility function: valueFromAST().
   */

  function parseValue(source, options) {
    var parser = new Parser(source, options);
    parser.expectToken(TokenKind.SOF);
    var value = parser.parseValueLiteral(false);
    parser.expectToken(TokenKind.EOF);
    return value;
  }

  var Parser =
  /*#__PURE__*/
  function () {
    function Parser(source, options) {
      var sourceObj = typeof source === 'string' ? new Source(source) : source;
      sourceObj instanceof Source || devAssert(0, "Must provide Source. Received: ".concat(inspect(sourceObj)));
      this._lexer = createLexer(sourceObj);
      this._options = options || {};
    }
    /**
     * Converts a name lex token into a name parse node.
     */


    var _proto = Parser.prototype;

    _proto.parseName = function parseName() {
      var token = this.expectToken(TokenKind.NAME);
      return {
        kind: Kind.NAME,
        value: token.value,
        loc: this.loc(token)
      };
    } // Implements the parsing rules in the Document section.

    /**
     * Document : Definition+
     */
    ;

    _proto.parseDocument = function parseDocument() {
      var start = this._lexer.token;
      return {
        kind: Kind.DOCUMENT,
        definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
        loc: this.loc(start)
      };
    }
    /**
     * Definition :
     *   - ExecutableDefinition
     *   - TypeSystemDefinition
     *   - TypeSystemExtension
     *
     * ExecutableDefinition :
     *   - OperationDefinition
     *   - FragmentDefinition
     */
    ;

    _proto.parseDefinition = function parseDefinition() {
      if (this.peek(TokenKind.NAME)) {
        switch (this._lexer.token.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition();

          case 'fragment':
            return this.parseFragmentDefinition();

          case 'schema':
          case 'scalar':
          case 'type':
          case 'interface':
          case 'union':
          case 'enum':
          case 'input':
          case 'directive':
            return this.parseTypeSystemDefinition();

          case 'extend':
            return this.parseTypeSystemExtension();
        }
      } else if (this.peek(TokenKind.BRACE_L)) {
        return this.parseOperationDefinition();
      } else if (this.peekDescription()) {
        return this.parseTypeSystemDefinition();
      }

      throw this.unexpected();
    } // Implements the parsing rules in the Operations section.

    /**
     * OperationDefinition :
     *  - SelectionSet
     *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
     */
    ;

    _proto.parseOperationDefinition = function parseOperationDefinition() {
      var start = this._lexer.token;

      if (this.peek(TokenKind.BRACE_L)) {
        return {
          kind: Kind.OPERATION_DEFINITION,
          operation: 'query',
          name: undefined,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }

      var operation = this.parseOperationType();
      var name;

      if (this.peek(TokenKind.NAME)) {
        name = this.parseName();
      }

      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: operation,
        name: name,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }
    /**
     * OperationType : one of query mutation subscription
     */
    ;

    _proto.parseOperationType = function parseOperationType() {
      var operationToken = this.expectToken(TokenKind.NAME);

      switch (operationToken.value) {
        case 'query':
          return 'query';

        case 'mutation':
          return 'mutation';

        case 'subscription':
          return 'subscription';
      }

      throw this.unexpected(operationToken);
    }
    /**
     * VariableDefinitions : ( VariableDefinition+ )
     */
    ;

    _proto.parseVariableDefinitions = function parseVariableDefinitions() {
      return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
    }
    /**
     * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
     */
    ;

    _proto.parseVariableDefinition = function parseVariableDefinition() {
      var start = this._lexer.token;
      return {
        kind: Kind.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
        directives: this.parseDirectives(true),
        loc: this.loc(start)
      };
    }
    /**
     * Variable : $ Name
     */
    ;

    _proto.parseVariable = function parseVariable() {
      var start = this._lexer.token;
      this.expectToken(TokenKind.DOLLAR);
      return {
        kind: Kind.VARIABLE,
        name: this.parseName(),
        loc: this.loc(start)
      };
    }
    /**
     * SelectionSet : { Selection+ }
     */
    ;

    _proto.parseSelectionSet = function parseSelectionSet() {
      var start = this._lexer.token;
      return {
        kind: Kind.SELECTION_SET,
        selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
        loc: this.loc(start)
      };
    }
    /**
     * Selection :
     *   - Field
     *   - FragmentSpread
     *   - InlineFragment
     */
    ;

    _proto.parseSelection = function parseSelection() {
      return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    /**
     * Field : Alias? Name Arguments? Directives? SelectionSet?
     *
     * Alias : Name :
     */
    ;

    _proto.parseField = function parseField() {
      var start = this._lexer.token;
      var nameOrAlias = this.parseName();
      var alias;
      var name;

      if (this.expectOptionalToken(TokenKind.COLON)) {
        alias = nameOrAlias;
        name = this.parseName();
      } else {
        name = nameOrAlias;
      }

      return {
        kind: Kind.FIELD,
        alias: alias,
        name: name,
        arguments: this.parseArguments(false),
        directives: this.parseDirectives(false),
        selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
        loc: this.loc(start)
      };
    }
    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */
    ;

    _proto.parseArguments = function parseArguments(isConst) {
      var item = isConst ? this.parseConstArgument : this.parseArgument;
      return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
    }
    /**
     * Argument[Const] : Name : Value[?Const]
     */
    ;

    _proto.parseArgument = function parseArgument() {
      var start = this._lexer.token;
      var name = this.parseName();
      this.expectToken(TokenKind.COLON);
      return {
        kind: Kind.ARGUMENT,
        name: name,
        value: this.parseValueLiteral(false),
        loc: this.loc(start)
      };
    };

    _proto.parseConstArgument = function parseConstArgument() {
      var start = this._lexer.token;
      return {
        kind: Kind.ARGUMENT,
        name: this.parseName(),
        value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
        loc: this.loc(start)
      };
    } // Implements the parsing rules in the Fragments section.

    /**
     * Corresponds to both FragmentSpread and InlineFragment in the spec.
     *
     * FragmentSpread : ... FragmentName Directives?
     *
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */
    ;

    _proto.parseFragment = function parseFragment() {
      var start = this._lexer.token;
      this.expectToken(TokenKind.SPREAD);
      var hasTypeCondition = this.expectOptionalKeyword('on');

      if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
        return {
          kind: Kind.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(false),
          loc: this.loc(start)
        };
      }

      return {
        kind: Kind.INLINE_FRAGMENT,
        typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }
    /**
     * FragmentDefinition :
     *   - fragment FragmentName on TypeCondition Directives? SelectionSet
     *
     * TypeCondition : NamedType
     */
    ;

    _proto.parseFragmentDefinition = function parseFragmentDefinition() {
      var start = this._lexer.token;
      this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
      // the grammar of FragmentDefinition:
      //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

      if (this._options.experimentalFragmentVariables) {
        return {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          variableDefinitions: this.parseVariableDefinitions(),
          typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }

      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }
    /**
     * FragmentName : Name but not `on`
     */
    ;

    _proto.parseFragmentName = function parseFragmentName() {
      if (this._lexer.token.value === 'on') {
        throw this.unexpected();
      }

      return this.parseName();
    } // Implements the parsing rules in the Values section.

    /**
     * Value[Const] :
     *   - [~Const] Variable
     *   - IntValue
     *   - FloatValue
     *   - StringValue
     *   - BooleanValue
     *   - NullValue
     *   - EnumValue
     *   - ListValue[?Const]
     *   - ObjectValue[?Const]
     *
     * BooleanValue : one of `true` `false`
     *
     * NullValue : `null`
     *
     * EnumValue : Name but not `true`, `false` or `null`
     */
    ;

    _proto.parseValueLiteral = function parseValueLiteral(isConst) {
      var token = this._lexer.token;

      switch (token.kind) {
        case TokenKind.BRACKET_L:
          return this.parseList(isConst);

        case TokenKind.BRACE_L:
          return this.parseObject(isConst);

        case TokenKind.INT:
          this._lexer.advance();

          return {
            kind: Kind.INT,
            value: token.value,
            loc: this.loc(token)
          };

        case TokenKind.FLOAT:
          this._lexer.advance();

          return {
            kind: Kind.FLOAT,
            value: token.value,
            loc: this.loc(token)
          };

        case TokenKind.STRING:
        case TokenKind.BLOCK_STRING:
          return this.parseStringLiteral();

        case TokenKind.NAME:
          if (token.value === 'true' || token.value === 'false') {
            this._lexer.advance();

            return {
              kind: Kind.BOOLEAN,
              value: token.value === 'true',
              loc: this.loc(token)
            };
          } else if (token.value === 'null') {
            this._lexer.advance();

            return {
              kind: Kind.NULL,
              loc: this.loc(token)
            };
          }

          this._lexer.advance();

          return {
            kind: Kind.ENUM,
            value: token.value,
            loc: this.loc(token)
          };

        case TokenKind.DOLLAR:
          if (!isConst) {
            return this.parseVariable();
          }

          break;
      }

      throw this.unexpected();
    };

    _proto.parseStringLiteral = function parseStringLiteral() {
      var token = this._lexer.token;

      this._lexer.advance();

      return {
        kind: Kind.STRING,
        value: token.value,
        block: token.kind === TokenKind.BLOCK_STRING,
        loc: this.loc(token)
      };
    }
    /**
     * ListValue[Const] :
     *   - [ ]
     *   - [ Value[?Const]+ ]
     */
    ;

    _proto.parseList = function parseList(isConst) {
      var _this = this;

      var start = this._lexer.token;

      var item = function item() {
        return _this.parseValueLiteral(isConst);
      };

      return {
        kind: Kind.LIST,
        values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
        loc: this.loc(start)
      };
    }
    /**
     * ObjectValue[Const] :
     *   - { }
     *   - { ObjectField[?Const]+ }
     */
    ;

    _proto.parseObject = function parseObject(isConst) {
      var _this2 = this;

      var start = this._lexer.token;

      var item = function item() {
        return _this2.parseObjectField(isConst);
      };

      return {
        kind: Kind.OBJECT,
        fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
        loc: this.loc(start)
      };
    }
    /**
     * ObjectField[Const] : Name : Value[?Const]
     */
    ;

    _proto.parseObjectField = function parseObjectField(isConst) {
      var start = this._lexer.token;
      var name = this.parseName();
      this.expectToken(TokenKind.COLON);
      return {
        kind: Kind.OBJECT_FIELD,
        name: name,
        value: this.parseValueLiteral(isConst),
        loc: this.loc(start)
      };
    } // Implements the parsing rules in the Directives section.

    /**
     * Directives[Const] : Directive[?Const]+
     */
    ;

    _proto.parseDirectives = function parseDirectives(isConst) {
      var directives = [];

      while (this.peek(TokenKind.AT)) {
        directives.push(this.parseDirective(isConst));
      }

      return directives;
    }
    /**
     * Directive[Const] : @ Name Arguments[?Const]?
     */
    ;

    _proto.parseDirective = function parseDirective(isConst) {
      var start = this._lexer.token;
      this.expectToken(TokenKind.AT);
      return {
        kind: Kind.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(isConst),
        loc: this.loc(start)
      };
    } // Implements the parsing rules in the Types section.

    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */
    ;

    _proto.parseTypeReference = function parseTypeReference() {
      var start = this._lexer.token;
      var type;

      if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
        type = this.parseTypeReference();
        this.expectToken(TokenKind.BRACKET_R);
        type = {
          kind: Kind.LIST_TYPE,
          type: type,
          loc: this.loc(start)
        };
      } else {
        type = this.parseNamedType();
      }

      if (this.expectOptionalToken(TokenKind.BANG)) {
        return {
          kind: Kind.NON_NULL_TYPE,
          type: type,
          loc: this.loc(start)
        };
      }

      return type;
    }
    /**
     * NamedType : Name
     */
    ;

    _proto.parseNamedType = function parseNamedType() {
      var start = this._lexer.token;
      return {
        kind: Kind.NAMED_TYPE,
        name: this.parseName(),
        loc: this.loc(start)
      };
    } // Implements the parsing rules in the Type Definition section.

    /**
     * TypeSystemDefinition :
     *   - SchemaDefinition
     *   - TypeDefinition
     *   - DirectiveDefinition
     *
     * TypeDefinition :
     *   - ScalarTypeDefinition
     *   - ObjectTypeDefinition
     *   - InterfaceTypeDefinition
     *   - UnionTypeDefinition
     *   - EnumTypeDefinition
     *   - InputObjectTypeDefinition
     */
    ;

    _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
      // Many definitions begin with a description and require a lookahead.
      var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

      if (keywordToken.kind === TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return this.parseSchemaDefinition();

          case 'scalar':
            return this.parseScalarTypeDefinition();

          case 'type':
            return this.parseObjectTypeDefinition();

          case 'interface':
            return this.parseInterfaceTypeDefinition();

          case 'union':
            return this.parseUnionTypeDefinition();

          case 'enum':
            return this.parseEnumTypeDefinition();

          case 'input':
            return this.parseInputObjectTypeDefinition();

          case 'directive':
            return this.parseDirectiveDefinition();
        }
      }

      throw this.unexpected(keywordToken);
    };

    _proto.peekDescription = function peekDescription() {
      return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
    }
    /**
     * Description : StringValue
     */
    ;

    _proto.parseDescription = function parseDescription() {
      if (this.peekDescription()) {
        return this.parseStringLiteral();
      }
    }
    /**
     * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
     */
    ;

    _proto.parseSchemaDefinition = function parseSchemaDefinition() {
      var start = this._lexer.token;
      this.expectKeyword('schema');
      var directives = this.parseDirectives(true);
      var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
      return {
        kind: Kind.SCHEMA_DEFINITION,
        directives: directives,
        operationTypes: operationTypes,
        loc: this.loc(start)
      };
    }
    /**
     * OperationTypeDefinition : OperationType : NamedType
     */
    ;

    _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
      var start = this._lexer.token;
      var operation = this.parseOperationType();
      this.expectToken(TokenKind.COLON);
      var type = this.parseNamedType();
      return {
        kind: Kind.OPERATION_TYPE_DEFINITION,
        operation: operation,
        type: type,
        loc: this.loc(start)
      };
    }
    /**
     * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
     */
    ;

    _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('scalar');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.SCALAR_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        loc: this.loc(start)
      };
    }
    /**
     * ObjectTypeDefinition :
     *   Description?
     *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
     */
    ;

    _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('type');
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();
      return {
        kind: Kind.OBJECT_TYPE_DEFINITION,
        description: description,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields,
        loc: this.loc(start)
      };
    }
    /**
     * ImplementsInterfaces :
     *   - implements `&`? NamedType
     *   - ImplementsInterfaces & NamedType
     */
    ;

    _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
      var types = [];

      if (this.expectOptionalKeyword('implements')) {
        // Optional leading ampersand
        this.expectOptionalToken(TokenKind.AMP);

        do {
          types.push(this.parseNamedType());
        } while (this.expectOptionalToken(TokenKind.AMP) || // Legacy support for the SDL?
        this._options.allowLegacySDLImplementsInterfaces && this.peek(TokenKind.NAME));
      }

      return types;
    }
    /**
     * FieldsDefinition : { FieldDefinition+ }
     */
    ;

    _proto.parseFieldsDefinition = function parseFieldsDefinition() {
      // Legacy support for the SDL?
      if (this._options.allowLegacySDLEmptyFields && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
        this._lexer.advance();

        this._lexer.advance();

        return [];
      }

      return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
    }
    /**
     * FieldDefinition :
     *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
     */
    ;

    _proto.parseFieldDefinition = function parseFieldDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      var args = this.parseArgumentDefs();
      this.expectToken(TokenKind.COLON);
      var type = this.parseTypeReference();
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.FIELD_DEFINITION,
        description: description,
        name: name,
        arguments: args,
        type: type,
        directives: directives,
        loc: this.loc(start)
      };
    }
    /**
     * ArgumentsDefinition : ( InputValueDefinition+ )
     */
    ;

    _proto.parseArgumentDefs = function parseArgumentDefs() {
      return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
    }
    /**
     * InputValueDefinition :
     *   - Description? Name : Type DefaultValue? Directives[Const]?
     */
    ;

    _proto.parseInputValueDef = function parseInputValueDef() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      this.expectToken(TokenKind.COLON);
      var type = this.parseTypeReference();
      var defaultValue;

      if (this.expectOptionalToken(TokenKind.EQUALS)) {
        defaultValue = this.parseValueLiteral(true);
      }

      var directives = this.parseDirectives(true);
      return {
        kind: Kind.INPUT_VALUE_DEFINITION,
        description: description,
        name: name,
        type: type,
        defaultValue: defaultValue,
        directives: directives,
        loc: this.loc(start)
      };
    }
    /**
     * InterfaceTypeDefinition :
     *   - Description? interface Name Directives[Const]? FieldsDefinition?
     */
    ;

    _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('interface');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();
      return {
        kind: Kind.INTERFACE_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        fields: fields,
        loc: this.loc(start)
      };
    }
    /**
     * UnionTypeDefinition :
     *   - Description? union Name Directives[Const]? UnionMemberTypes?
     */
    ;

    _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('union');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var types = this.parseUnionMemberTypes();
      return {
        kind: Kind.UNION_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        types: types,
        loc: this.loc(start)
      };
    }
    /**
     * UnionMemberTypes :
     *   - = `|`? NamedType
     *   - UnionMemberTypes | NamedType
     */
    ;

    _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
      var types = [];

      if (this.expectOptionalToken(TokenKind.EQUALS)) {
        // Optional leading pipe
        this.expectOptionalToken(TokenKind.PIPE);

        do {
          types.push(this.parseNamedType());
        } while (this.expectOptionalToken(TokenKind.PIPE));
      }

      return types;
    }
    /**
     * EnumTypeDefinition :
     *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
     */
    ;

    _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('enum');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var values = this.parseEnumValuesDefinition();
      return {
        kind: Kind.ENUM_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        values: values,
        loc: this.loc(start)
      };
    }
    /**
     * EnumValuesDefinition : { EnumValueDefinition+ }
     */
    ;

    _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
      return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
    }
    /**
     * EnumValueDefinition : Description? EnumValue Directives[Const]?
     *
     * EnumValue : Name
     */
    ;

    _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      return {
        kind: Kind.ENUM_VALUE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        loc: this.loc(start)
      };
    }
    /**
     * InputObjectTypeDefinition :
     *   - Description? input Name Directives[Const]? InputFieldsDefinition?
     */
    ;

    _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('input');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var fields = this.parseInputFieldsDefinition();
      return {
        kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description: description,
        name: name,
        directives: directives,
        fields: fields,
        loc: this.loc(start)
      };
    }
    /**
     * InputFieldsDefinition : { InputValueDefinition+ }
     */
    ;

    _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
      return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
    }
    /**
     * TypeSystemExtension :
     *   - SchemaExtension
     *   - TypeExtension
     *
     * TypeExtension :
     *   - ScalarTypeExtension
     *   - ObjectTypeExtension
     *   - InterfaceTypeExtension
     *   - UnionTypeExtension
     *   - EnumTypeExtension
     *   - InputObjectTypeDefinition
     */
    ;

    _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
      var keywordToken = this._lexer.lookahead();

      if (keywordToken.kind === TokenKind.NAME) {
        switch (keywordToken.value) {
          case 'schema':
            return this.parseSchemaExtension();

          case 'scalar':
            return this.parseScalarTypeExtension();

          case 'type':
            return this.parseObjectTypeExtension();

          case 'interface':
            return this.parseInterfaceTypeExtension();

          case 'union':
            return this.parseUnionTypeExtension();

          case 'enum':
            return this.parseEnumTypeExtension();

          case 'input':
            return this.parseInputObjectTypeExtension();
        }
      }

      throw this.unexpected(keywordToken);
    }
    /**
     * SchemaExtension :
     *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
     *  - extend schema Directives[Const]
     */
    ;

    _proto.parseSchemaExtension = function parseSchemaExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('schema');
      var directives = this.parseDirectives(true);
      var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

      if (directives.length === 0 && operationTypes.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.SCHEMA_EXTENSION,
        directives: directives,
        operationTypes: operationTypes,
        loc: this.loc(start)
      };
    }
    /**
     * ScalarTypeExtension :
     *   - extend scalar Name Directives[Const]
     */
    ;

    _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('scalar');
      var name = this.parseName();
      var directives = this.parseDirectives(true);

      if (directives.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.SCALAR_TYPE_EXTENSION,
        name: name,
        directives: directives,
        loc: this.loc(start)
      };
    }
    /**
     * ObjectTypeExtension :
     *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
     *  - extend type Name ImplementsInterfaces? Directives[Const]
     *  - extend type Name ImplementsInterfaces
     */
    ;

    _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('type');
      var name = this.parseName();
      var interfaces = this.parseImplementsInterfaces();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();

      if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.OBJECT_TYPE_EXTENSION,
        name: name,
        interfaces: interfaces,
        directives: directives,
        fields: fields,
        loc: this.loc(start)
      };
    }
    /**
     * InterfaceTypeExtension :
     *   - extend interface Name Directives[Const]? FieldsDefinition
     *   - extend interface Name Directives[Const]
     */
    ;

    _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('interface');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var fields = this.parseFieldsDefinition();

      if (directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.INTERFACE_TYPE_EXTENSION,
        name: name,
        directives: directives,
        fields: fields,
        loc: this.loc(start)
      };
    }
    /**
     * UnionTypeExtension :
     *   - extend union Name Directives[Const]? UnionMemberTypes
     *   - extend union Name Directives[Const]
     */
    ;

    _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('union');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var types = this.parseUnionMemberTypes();

      if (directives.length === 0 && types.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.UNION_TYPE_EXTENSION,
        name: name,
        directives: directives,
        types: types,
        loc: this.loc(start)
      };
    }
    /**
     * EnumTypeExtension :
     *   - extend enum Name Directives[Const]? EnumValuesDefinition
     *   - extend enum Name Directives[Const]
     */
    ;

    _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('enum');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var values = this.parseEnumValuesDefinition();

      if (directives.length === 0 && values.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.ENUM_TYPE_EXTENSION,
        name: name,
        directives: directives,
        values: values,
        loc: this.loc(start)
      };
    }
    /**
     * InputObjectTypeExtension :
     *   - extend input Name Directives[Const]? InputFieldsDefinition
     *   - extend input Name Directives[Const]
     */
    ;

    _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
      var start = this._lexer.token;
      this.expectKeyword('extend');
      this.expectKeyword('input');
      var name = this.parseName();
      var directives = this.parseDirectives(true);
      var fields = this.parseInputFieldsDefinition();

      if (directives.length === 0 && fields.length === 0) {
        throw this.unexpected();
      }

      return {
        kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
        name: name,
        directives: directives,
        fields: fields,
        loc: this.loc(start)
      };
    }
    /**
     * DirectiveDefinition :
     *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
     */
    ;

    _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
      var start = this._lexer.token;
      var description = this.parseDescription();
      this.expectKeyword('directive');
      this.expectToken(TokenKind.AT);
      var name = this.parseName();
      var args = this.parseArgumentDefs();
      var repeatable = this.expectOptionalKeyword('repeatable');
      this.expectKeyword('on');
      var locations = this.parseDirectiveLocations();
      return {
        kind: Kind.DIRECTIVE_DEFINITION,
        description: description,
        name: name,
        arguments: args,
        repeatable: repeatable,
        locations: locations,
        loc: this.loc(start)
      };
    }
    /**
     * DirectiveLocations :
     *   - `|`? DirectiveLocation
     *   - DirectiveLocations | DirectiveLocation
     */
    ;

    _proto.parseDirectiveLocations = function parseDirectiveLocations() {
      // Optional leading pipe
      this.expectOptionalToken(TokenKind.PIPE);
      var locations = [];

      do {
        locations.push(this.parseDirectiveLocation());
      } while (this.expectOptionalToken(TokenKind.PIPE));

      return locations;
    }
    /*
     * DirectiveLocation :
     *   - ExecutableDirectiveLocation
     *   - TypeSystemDirectiveLocation
     *
     * ExecutableDirectiveLocation : one of
     *   `QUERY`
     *   `MUTATION`
     *   `SUBSCRIPTION`
     *   `FIELD`
     *   `FRAGMENT_DEFINITION`
     *   `FRAGMENT_SPREAD`
     *   `INLINE_FRAGMENT`
     *
     * TypeSystemDirectiveLocation : one of
     *   `SCHEMA`
     *   `SCALAR`
     *   `OBJECT`
     *   `FIELD_DEFINITION`
     *   `ARGUMENT_DEFINITION`
     *   `INTERFACE`
     *   `UNION`
     *   `ENUM`
     *   `ENUM_VALUE`
     *   `INPUT_OBJECT`
     *   `INPUT_FIELD_DEFINITION`
     */
    ;

    _proto.parseDirectiveLocation = function parseDirectiveLocation() {
      var start = this._lexer.token;
      var name = this.parseName();

      if (DirectiveLocation[name.value] !== undefined) {
        return name;
      }

      throw this.unexpected(start);
    } // Core parsing utility functions

    /**
     * Returns a location object, used to identify the place in
     * the source that created a given parsed object.
     */
    ;

    _proto.loc = function loc(startToken) {
      if (!this._options.noLocation) {
        return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
      }
    }
    /**
     * Determines if the next token is of a given kind
     */
    ;

    _proto.peek = function peek(kind) {
      return this._lexer.token.kind === kind;
    }
    /**
     * If the next token is of the given kind, return that token after advancing
     * the lexer. Otherwise, do not change the parser state and throw an error.
     */
    ;

    _proto.expectToken = function expectToken(kind) {
      var token = this._lexer.token;

      if (token.kind === kind) {
        this._lexer.advance();

        return token;
      }

      throw syntaxError(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
    }
    /**
     * If the next token is of the given kind, return that token after advancing
     * the lexer. Otherwise, do not change the parser state and return undefined.
     */
    ;

    _proto.expectOptionalToken = function expectOptionalToken(kind) {
      var token = this._lexer.token;

      if (token.kind === kind) {
        this._lexer.advance();

        return token;
      }

      return undefined;
    }
    /**
     * If the next token is a given keyword, advance the lexer.
     * Otherwise, do not change the parser state and throw an error.
     */
    ;

    _proto.expectKeyword = function expectKeyword(value) {
      var token = this._lexer.token;

      if (token.kind === TokenKind.NAME && token.value === value) {
        this._lexer.advance();
      } else {
        throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
      }
    }
    /**
     * If the next token is a given keyword, return "true" after advancing
     * the lexer. Otherwise, do not change the parser state and return "false".
     */
    ;

    _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
      var token = this._lexer.token;

      if (token.kind === TokenKind.NAME && token.value === value) {
        this._lexer.advance();

        return true;
      }

      return false;
    }
    /**
     * Helper function for creating an error when an unexpected lexed token
     * is encountered.
     */
    ;

    _proto.unexpected = function unexpected(atToken) {
      var token = atToken || this._lexer.token;
      return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
    }
    /**
     * Returns a possibly empty list of parse nodes, determined by
     * the parseFn. This list begins with a lex token of openKind
     * and ends with a lex token of closeKind. Advances the parser
     * to the next lex token after the closing token.
     */
    ;

    _proto.any = function any(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      var nodes = [];

      while (!this.expectOptionalToken(closeKind)) {
        nodes.push(parseFn.call(this));
      }

      return nodes;
    }
    /**
     * Returns a list of parse nodes, determined by the parseFn.
     * It can be empty only if open token is missing otherwise it will always
     * return non-empty list that begins with a lex token of openKind and ends
     * with a lex token of closeKind. Advances the parser to the next lex token
     * after the closing token.
     */
    ;

    _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
      if (this.expectOptionalToken(openKind)) {
        var nodes = [];

        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));

        return nodes;
      }

      return [];
    }
    /**
     * Returns a non-empty list of parse nodes, determined by
     * the parseFn. This list begins with a lex token of openKind
     * and ends with a lex token of closeKind. Advances the parser
     * to the next lex token after the closing token.
     */
    ;

    _proto.many = function many(openKind, parseFn, closeKind) {
      this.expectToken(openKind);
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    };

    return Parser;
  }();

  function Loc(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  } // Print a simplified form when appearing in JSON/util.inspect.


  defineToJSON(Loc, function () {
    return {
      start: this.start,
      end: this.end
    };
  });
  /**
   * A helper function to describe a token as a string for debugging
   */

  function getTokenDesc(token) {
    var value = token.value;
    return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
  }

  var QueryDocumentKeys = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
    // or removed in the future.
    'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
    InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields']
  };
  var BREAK = Object.freeze({});
  /**
   * visit() will walk through an AST using a depth first traversal, calling
   * the visitor's enter function at each node in the traversal, and calling the
   * leave function after visiting that node and all of its child nodes.
   *
   * By returning different values from the enter and leave functions, the
   * behavior of the visitor can be altered, including skipping over a sub-tree of
   * the AST (by returning false), editing the AST by returning a value or null
   * to remove the value, or to stop the whole traversal by returning BREAK.
   *
   * When using visit() to edit an AST, the original AST will not be modified, and
   * a new version of the AST with the changes applied will be returned from the
   * visit function.
   *
   *     const editedAST = visit(ast, {
   *       enter(node, key, parent, path, ancestors) {
   *         // @return
   *         //   undefined: no action
   *         //   false: skip visiting this node
   *         //   visitor.BREAK: stop visiting altogether
   *         //   null: delete this node
   *         //   any value: replace this node with the returned value
   *       },
   *       leave(node, key, parent, path, ancestors) {
   *         // @return
   *         //   undefined: no action
   *         //   false: no action
   *         //   visitor.BREAK: stop visiting altogether
   *         //   null: delete this node
   *         //   any value: replace this node with the returned value
   *       }
   *     });
   *
   * Alternatively to providing enter() and leave() functions, a visitor can
   * instead provide functions named the same as the kinds of AST nodes, or
   * enter/leave visitors at a named key, leading to four permutations of
   * visitor API:
   *
   * 1) Named visitors triggered when entering a node a specific kind.
   *
   *     visit(ast, {
   *       Kind(node) {
   *         // enter the "Kind" node
   *       }
   *     })
   *
   * 2) Named visitors that trigger upon entering and leaving a node of
   *    a specific kind.
   *
   *     visit(ast, {
   *       Kind: {
   *         enter(node) {
   *           // enter the "Kind" node
   *         }
   *         leave(node) {
   *           // leave the "Kind" node
   *         }
   *       }
   *     })
   *
   * 3) Generic visitors that trigger upon entering and leaving any node.
   *
   *     visit(ast, {
   *       enter(node) {
   *         // enter any node
   *       },
   *       leave(node) {
   *         // leave any node
   *       }
   *     })
   *
   * 4) Parallel visitors for entering and leaving nodes of a specific kind.
   *
   *     visit(ast, {
   *       enter: {
   *         Kind(node) {
   *           // enter the "Kind" node
   *         }
   *       },
   *       leave: {
   *         Kind(node) {
   *           // leave the "Kind" node
   *         }
   *       }
   *     })
   */

  function visit(root, visitor) {
    var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

    /* eslint-disable no-undef-init */
    var stack = undefined;
    var inArray = Array.isArray(root);
    var keys = [root];
    var index = -1;
    var edits = [];
    var node = undefined;
    var key = undefined;
    var parent = undefined;
    var path = [];
    var ancestors = [];
    var newRoot = root;
    /* eslint-enable no-undef-init */

    do {
      index++;
      var isLeaving = index === keys.length;
      var isEdited = isLeaving && edits.length !== 0;

      if (isLeaving) {
        key = ancestors.length === 0 ? undefined : path[path.length - 1];
        node = parent;
        parent = ancestors.pop();

        if (isEdited) {
          if (inArray) {
            node = node.slice();
          } else {
            var clone = {};

            for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
              var k = _Object$keys2[_i2];
              clone[k] = node[k];
            }

            node = clone;
          }

          var editOffset = 0;

          for (var ii = 0; ii < edits.length; ii++) {
            var editKey = edits[ii][0];
            var editValue = edits[ii][1];

            if (inArray) {
              editKey -= editOffset;
            }

            if (inArray && editValue === null) {
              node.splice(editKey, 1);
              editOffset++;
            } else {
              node[editKey] = editValue;
            }
          }
        }

        index = stack.index;
        keys = stack.keys;
        edits = stack.edits;
        inArray = stack.inArray;
        stack = stack.prev;
      } else {
        key = parent ? inArray ? index : keys[index] : undefined;
        node = parent ? parent[key] : newRoot;

        if (node === null || node === undefined) {
          continue;
        }

        if (parent) {
          path.push(key);
        }
      }

      var result = void 0;

      if (!Array.isArray(node)) {
        if (!isNode(node)) {
          throw new Error('Invalid AST Node: ' + inspect(node));
        }

        var visitFn = getVisitFn(visitor, node.kind, isLeaving);

        if (visitFn) {
          result = visitFn.call(visitor, node, key, parent, path, ancestors);

          if (result === BREAK) {
            break;
          }

          if (result === false) {
            if (!isLeaving) {
              path.pop();
              continue;
            }
          } else if (result !== undefined) {
            edits.push([key, result]);

            if (!isLeaving) {
              if (isNode(result)) {
                node = result;
              } else {
                path.pop();
                continue;
              }
            }
          }
        }
      }

      if (result === undefined && isEdited) {
        edits.push([key, node]);
      }

      if (isLeaving) {
        path.pop();
      } else {
        stack = {
          inArray: inArray,
          index: index,
          keys: keys,
          edits: edits,
          prev: stack
        };
        inArray = Array.isArray(node);
        keys = inArray ? node : visitorKeys[node.kind] || [];
        index = -1;
        edits = [];

        if (parent) {
          ancestors.push(parent);
        }

        parent = node;
      }
    } while (stack !== undefined);

    if (edits.length !== 0) {
      newRoot = edits[edits.length - 1][1];
    }

    return newRoot;
  }

  function isNode(maybeNode) {
    return Boolean(maybeNode && typeof maybeNode.kind === 'string');
  }
  /**
   * Creates a new visitor instance which maintains a provided TypeInfo instance
   * along with visiting visitor.
   */

  function visitWithTypeInfo(typeInfo, visitor) {
    return {
      enter: function enter(node) {
        typeInfo.enter(node);
        var fn = getVisitFn(visitor, node.kind,
        /* isLeaving */
        false);

        if (fn) {
          var result = fn.apply(visitor, arguments);

          if (result !== undefined) {
            typeInfo.leave(node);

            if (isNode(result)) {
              typeInfo.enter(result);
            }
          }

          return result;
        }
      },
      leave: function leave(node) {
        var fn = getVisitFn(visitor, node.kind,
        /* isLeaving */
        true);
        var result;

        if (fn) {
          result = fn.apply(visitor, arguments);
        }

        typeInfo.leave(node);
        return result;
      }
    };
  }
  /**
   * Given a visitor instance, if it is leaving or not, and a node kind, return
   * the function the visitor runtime should call.
   */

  function getVisitFn(visitor, kind, isLeaving) {
    var kindVisitor = visitor[kind];

    if (kindVisitor) {
      if (!isLeaving && typeof kindVisitor === 'function') {
        // { Kind() {} }
        return kindVisitor;
      }

      var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

      if (typeof kindSpecificVisitor === 'function') {
        // { Kind: { enter() {}, leave() {} } }
        return kindSpecificVisitor;
      }
    } else {
      var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

      if (specificVisitor) {
        if (typeof specificVisitor === 'function') {
          // { enter() {}, leave() {} }
          return specificVisitor;
        }

        var specificKindVisitor = specificVisitor[kind];

        if (typeof specificKindVisitor === 'function') {
          // { enter: { Kind() {} }, leave: { Kind() {} } }
          return specificKindVisitor;
        }
      }
    }
  }

  /* eslint-disable no-redeclare */
  // $FlowFixMe
  var find$1 = Array.prototype.find ? function (list, predicate) {
    return Array.prototype.find.call(list, predicate);
  } : function (list, predicate) {
    for (var _i2 = 0; _i2 < list.length; _i2++) {
      var value = list[_i2];

      if (predicate(value)) {
        return value;
      }
    }
  };

  /* eslint-disable no-redeclare */
  // $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
  var objectValues = Object.values || function (obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };

  /* eslint-disable no-redeclare */
  // $FlowFixMe workaround for: https://github.com/facebook/flow/issues/5838
  var objectEntries = Object.entries || function (obj) {
    return Object.keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  };

  /**
   * Creates a keyed JS object from an array, given a function to produce the keys
   * for each value in the array.
   *
   * This provides a convenient lookup for the array items if the key function
   * produces unique results.
   *
   *     const phoneBook = [
   *       { name: 'Jon', num: '555-1234' },
   *       { name: 'Jenny', num: '867-5309' }
   *     ]
   *
   *     // { Jon: { name: 'Jon', num: '555-1234' },
   *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
   *     const entriesByName = keyMap(
   *       phoneBook,
   *       entry => entry.name
   *     )
   *
   *     // { name: 'Jenny', num: '857-6309' }
   *     const jennyEntry = entriesByName['Jenny']
   *
   */
  function keyMap(list, keyFn) {
    return list.reduce(function (map, item) {
      map[keyFn(item)] = item;
      return map;
    }, Object.create(null));
  }

  /**
   * Creates an object map with the same keys as `map` and values generated by
   * running each value of `map` thru `fn`.
   */
  function mapValue(map, fn) {
    var result = Object.create(null);

    for (var _i2 = 0, _objectEntries2 = objectEntries(map); _i2 < _objectEntries2.length; _i2++) {
      var _ref2 = _objectEntries2[_i2];
      var _key = _ref2[0];
      var _value = _ref2[1];
      result[_key] = fn(_value, _key);
    }

    return result;
  }

  function toObjMap(obj) {
    /* eslint-enable no-redeclare */
    if (Object.getPrototypeOf(obj) === null) {
      return obj;
    }

    var map = Object.create(null);

    for (var _i2 = 0, _objectEntries2 = objectEntries(obj); _i2 < _objectEntries2.length; _i2++) {
      var _ref2 = _objectEntries2[_i2];
      var key = _ref2[0];
      var value = _ref2[1];
      map[key] = value;
    }

    return map;
  }

  /**
   * Creates a keyed JS object from an array, given a function to produce the keys
   * and a function to produce the values from each item in the array.
   *
   *     const phoneBook = [
   *       { name: 'Jon', num: '555-1234' },
   *       { name: 'Jenny', num: '867-5309' }
   *     ]
   *
   *     // { Jon: '555-1234', Jenny: '867-5309' }
   *     const phonesByName = keyValMap(
   *       phoneBook,
   *       entry => entry.name,
   *       entry => entry.num
   *     )
   *
   */
  function keyValMap(list, keyFn, valFn) {
    return list.reduce(function (map, item) {
      map[keyFn(item)] = valFn(item);
      return map;
    }, Object.create(null));
  }

  /**
   * A replacement for instanceof which includes an error warning when multi-realm
   * constructors are detected.
   */
  // See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
  // See: https://webpack.js.org/guides/production/
  var instanceOf = process.env.NODE_ENV === 'production' ? // eslint-disable-next-line no-shadow
  function instanceOf(value, constructor) {
    return value instanceof constructor;
  } : // eslint-disable-next-line no-shadow
  function instanceOf(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }

    if (value) {
      var valueClass = value.constructor;
      var className = constructor.name;

      if (className && valueClass && valueClass.name === className) {
        throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
      }
    }

    return false;
  };

  /**
   * Returns the first argument it receives.
   */
  function identityFunc(x) {
    return x;
  }

  function invariant(condition, message) {
    var booleanCondition = Boolean(condition);

    if (!booleanCondition) {
      throw new Error(message || 'Unexpected invariant triggered');
    }
  }

  /**
   * Returns true if a value is undefined, or NaN.
   */
  function isInvalid(value) {
    return value === undefined || value !== value;
  }

  /**
   * Produces a JavaScript value given a GraphQL Value AST.
   *
   * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
   * will reflect the provided GraphQL value AST.
   *
   * | GraphQL Value        | JavaScript Value |
   * | -------------------- | ---------------- |
   * | Input Object         | Object           |
   * | List                 | Array            |
   * | Boolean              | Boolean          |
   * | String / Enum        | String           |
   * | Int / Float          | Number           |
   * | Null                 | null             |
   *
   */
  function valueFromASTUntyped(valueNode, variables) {
    switch (valueNode.kind) {
      case Kind.NULL:
        return null;

      case Kind.INT:
        return parseInt(valueNode.value, 10);

      case Kind.FLOAT:
        return parseFloat(valueNode.value);

      case Kind.STRING:
      case Kind.ENUM:
      case Kind.BOOLEAN:
        return valueNode.value;

      case Kind.LIST:
        return valueNode.values.map(function (node) {
          return valueFromASTUntyped(node, variables);
        });

      case Kind.OBJECT:
        return keyValMap(valueNode.fields, function (field) {
          return field.name.value;
        }, function (field) {
          return valueFromASTUntyped(field.value, variables);
        });

      case Kind.VARIABLE:
        {
          var variableName = valueNode.name.value;
          return variables && !isInvalid(variables[variableName]) ? variables[variableName] : undefined;
        }
    } // Not reachable. All possible value nodes have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected value node: ' + inspect(valueNode));
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function isType(type) {
    return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
  }
  function assertType(type) {
    if (!isType(type)) {
      throw new Error("Expected ".concat(inspect(type), " to be a GraphQL type."));
    }

    return type;
  }
  /**
   * There are predicates for each kind of GraphQL type.
   */

  // eslint-disable-next-line no-redeclare
  function isScalarType(type) {
    return instanceOf(type, GraphQLScalarType);
  }
  // eslint-disable-next-line no-redeclare
  function isObjectType(type) {
    return instanceOf(type, GraphQLObjectType);
  }
  function assertObjectType(type) {
    if (!isObjectType(type)) {
      throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Object type."));
    }

    return type;
  }
  // eslint-disable-next-line no-redeclare
  function isInterfaceType(type) {
    return instanceOf(type, GraphQLInterfaceType);
  }
  function assertInterfaceType(type) {
    if (!isInterfaceType(type)) {
      throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Interface type."));
    }

    return type;
  }
  // eslint-disable-next-line no-redeclare
  function isUnionType(type) {
    return instanceOf(type, GraphQLUnionType);
  }
  // eslint-disable-next-line no-redeclare
  function isEnumType(type) {
    return instanceOf(type, GraphQLEnumType);
  }
  // eslint-disable-next-line no-redeclare
  function isInputObjectType(type) {
    return instanceOf(type, GraphQLInputObjectType);
  }
  // eslint-disable-next-line no-redeclare
  function isListType(type) {
    return instanceOf(type, GraphQLList);
  }
  // eslint-disable-next-line no-redeclare
  function isNonNullType(type) {
    return instanceOf(type, GraphQLNonNull);
  }
  /**
   * These types may be used as input types for arguments and directives.
   */

  function isInputType(type) {
    return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
  }
  /**
   * These types may be used as output types as the result of fields.
   */

  function isOutputType(type) {
    return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
  }
  /**
   * These types may describe types which may be leaf values.
   */

  function isLeafType(type) {
    return isScalarType(type) || isEnumType(type);
  }
  /**
   * These types may describe the parent context of a selection set.
   */

  function isCompositeType(type) {
    return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
  }
  /**
   * These types may describe the parent context of a selection set.
   */

  function isAbstractType(type) {
    return isInterfaceType(type) || isUnionType(type);
  }
  /**
   * List Type Wrapper
   *
   * A list is a wrapping type which points to another type.
   * Lists are often created within the context of defining the fields of
   * an object type.
   *
   * Example:
   *
   *     const PersonType = new GraphQLObjectType({
   *       name: 'Person',
   *       fields: () => ({
   *         parents: { type: GraphQLList(PersonType) },
   *         children: { type: GraphQLList(PersonType) },
   *       })
   *     })
   *
   */

  // eslint-disable-next-line no-redeclare
  function GraphQLList(ofType) {
    if (this instanceof GraphQLList) {
      this.ofType = assertType(ofType);
    } else {
      return new GraphQLList(ofType);
    }
  } // Need to cast through any to alter the prototype.

  GraphQLList.prototype.toString = function toString() {
    return '[' + String(this.ofType) + ']';
  }; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


  defineToStringTag(GraphQLList);
  defineToJSON(GraphQLList);
  /**
   * Non-Null Type Wrapper
   *
   * A non-null is a wrapping type which points to another type.
   * Non-null types enforce that their values are never null and can ensure
   * an error is raised if this ever occurs during a request. It is useful for
   * fields which you can make a strong guarantee on non-nullability, for example
   * usually the id field of a database row will never be null.
   *
   * Example:
   *
   *     const RowType = new GraphQLObjectType({
   *       name: 'Row',
   *       fields: () => ({
   *         id: { type: GraphQLNonNull(GraphQLString) },
   *       })
   *     })
   *
   * Note: the enforcement of non-nullability occurs within the executor.
   */

  // eslint-disable-next-line no-redeclare
  function GraphQLNonNull(ofType) {
    if (this instanceof GraphQLNonNull) {
      this.ofType = assertNullableType(ofType);
    } else {
      return new GraphQLNonNull(ofType);
    }
  } // Need to cast through any to alter the prototype.

  GraphQLNonNull.prototype.toString = function toString() {
    return String(this.ofType) + '!';
  }; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


  defineToStringTag(GraphQLNonNull);
  defineToJSON(GraphQLNonNull);
  /**
   * These types wrap and modify other types
   */

  function isWrappingType(type) {
    return isListType(type) || isNonNullType(type);
  }
  /**
   * These types can all accept null as a value.
   */

  function isNullableType(type) {
    return isType(type) && !isNonNullType(type);
  }
  function assertNullableType(type) {
    if (!isNullableType(type)) {
      throw new Error("Expected ".concat(inspect(type), " to be a GraphQL nullable type."));
    }

    return type;
  }
  /* eslint-disable no-redeclare */

  function getNullableType(type) {
    /* eslint-enable no-redeclare */
    if (type) {
      return isNonNullType(type) ? type.ofType : type;
    }
  }
  /* eslint-disable no-redeclare */

  function getNamedType(type) {
    /* eslint-enable no-redeclare */
    if (type) {
      var unwrappedType = type;

      while (isWrappingType(unwrappedType)) {
        unwrappedType = unwrappedType.ofType;
      }

      return unwrappedType;
    }
  }
  /**
   * Used while defining GraphQL types to allow for circular references in
   * otherwise immutable type definitions.
   */

  function resolveThunk(thunk) {
    // $FlowFixMe(>=0.90.0)
    return typeof thunk === 'function' ? thunk() : thunk;
  }

  function undefineIfEmpty(arr) {
    return arr && arr.length > 0 ? arr : undefined;
  }
  /**
   * Scalar Type Definition
   *
   * The leaf values of any request and input values to arguments are
   * Scalars (or Enums) and are defined with a name and a series of functions
   * used to parse input from ast or variables and to ensure validity.
   *
   * If a type's serialize function does not return a value (i.e. it returns
   * `undefined`) then an error will be raised and a `null` value will be returned
   * in the response. If the serialize function returns `null`, then no error will
   * be included in the response.
   *
   * Example:
   *
   *     const OddType = new GraphQLScalarType({
   *       name: 'Odd',
   *       serialize(value) {
   *         if (value % 2 === 1) {
   *           return value;
   *         }
   *       }
   *     });
   *
   */


  var GraphQLScalarType =
  /*#__PURE__*/
  function () {
    function GraphQLScalarType(config) {
      var parseValue = config.parseValue || identityFunc;
      this.name = config.name;
      this.description = config.description;
      this.serialize = config.serialize || identityFunc;
      this.parseValue = parseValue;

      this.parseLiteral = config.parseLiteral || function (node) {
        return parseValue(valueFromASTUntyped(node));
      };

      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
      typeof config.name === 'string' || devAssert(0, 'Must provide name.');
      config.serialize == null || typeof config.serialize === 'function' || devAssert(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));

      if (config.parseLiteral) {
        typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || devAssert(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
      }
    }

    var _proto = GraphQLScalarType.prototype;

    _proto.toConfig = function toConfig() {
      return {
        name: this.name,
        description: this.description,
        serialize: this.serialize,
        parseValue: this.parseValue,
        parseLiteral: this.parseLiteral,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || []
      };
    };

    _proto.toString = function toString() {
      return this.name;
    };

    return GraphQLScalarType;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLScalarType);
  defineToJSON(GraphQLScalarType);

  /**
   * Object Type Definition
   *
   * Almost all of the GraphQL types you define will be object types. Object types
   * have a name, but most importantly describe their fields.
   *
   * Example:
   *
   *     const AddressType = new GraphQLObjectType({
   *       name: 'Address',
   *       fields: {
   *         street: { type: GraphQLString },
   *         number: { type: GraphQLInt },
   *         formatted: {
   *           type: GraphQLString,
   *           resolve(obj) {
   *             return obj.number + ' ' + obj.street
   *           }
   *         }
   *       }
   *     });
   *
   * When two types need to refer to each other, or a type needs to refer to
   * itself in a field, you can use a function expression (aka a closure or a
   * thunk) to supply the fields lazily.
   *
   * Example:
   *
   *     const PersonType = new GraphQLObjectType({
   *       name: 'Person',
   *       fields: () => ({
   *         name: { type: GraphQLString },
   *         bestFriend: { type: PersonType },
   *       })
   *     });
   *
   */
  var GraphQLObjectType =
  /*#__PURE__*/
  function () {
    function GraphQLObjectType(config) {
      this.name = config.name;
      this.description = config.description;
      this.isTypeOf = config.isTypeOf;
      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
      this._fields = defineFieldMap.bind(undefined, config);
      this._interfaces = defineInterfaces.bind(undefined, config);
      typeof config.name === 'string' || devAssert(0, 'Must provide name.');
      config.isTypeOf == null || typeof config.isTypeOf === 'function' || devAssert(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat(inspect(config.isTypeOf), "."));
    }

    var _proto2 = GraphQLObjectType.prototype;

    _proto2.getFields = function getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }

      return this._fields;
    };

    _proto2.getInterfaces = function getInterfaces() {
      if (typeof this._interfaces === 'function') {
        this._interfaces = this._interfaces();
      }

      return this._interfaces;
    };

    _proto2.toConfig = function toConfig() {
      return {
        name: this.name,
        description: this.description,
        interfaces: this.getInterfaces(),
        fields: fieldsToFieldsConfig(this.getFields()),
        isTypeOf: this.isTypeOf,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || []
      };
    };

    _proto2.toString = function toString() {
      return this.name;
    };

    return GraphQLObjectType;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLObjectType);
  defineToJSON(GraphQLObjectType);

  function defineInterfaces(config) {
    var interfaces = resolveThunk(config.interfaces) || [];
    Array.isArray(interfaces) || devAssert(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
    return interfaces;
  }

  function defineFieldMap(config) {
    var fieldMap = resolveThunk(config.fields) || {};
    isPlainObj(fieldMap) || devAssert(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
    return mapValue(fieldMap, function (fieldConfig, fieldName) {
      isPlainObj(fieldConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object"));
      !('isDeprecated' in fieldConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
      fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || devAssert(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat(inspect(fieldConfig.resolve), "."));
      var argsConfig = fieldConfig.args || {};
      isPlainObj(argsConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
      var args = objectEntries(argsConfig).map(function (_ref) {
        var argName = _ref[0],
            arg = _ref[1];
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          extensions: arg.extensions && toObjMap(arg.extensions),
          astNode: arg.astNode
        };
      });
      return _objectSpread({}, fieldConfig, {
        name: fieldName,
        description: fieldConfig.description,
        type: fieldConfig.type,
        args: args,
        resolve: fieldConfig.resolve,
        subscribe: fieldConfig.subscribe,
        isDeprecated: Boolean(fieldConfig.deprecationReason),
        deprecationReason: fieldConfig.deprecationReason,
        extensions: fieldConfig.extensions && toObjMap(fieldConfig.extensions),
        astNode: fieldConfig.astNode
      });
    });
  }

  function isPlainObj(obj) {
    return isObjectLike(obj) && !Array.isArray(obj);
  }

  function fieldsToFieldsConfig(fields) {
    return mapValue(fields, function (field) {
      return {
        description: field.description,
        type: field.type,
        args: argsToArgsConfig(field.args),
        resolve: field.resolve,
        subscribe: field.subscribe,
        deprecationReason: field.deprecationReason,
        extensions: field.extensions,
        astNode: field.astNode
      };
    });
  }

  function argsToArgsConfig(args) {
    return keyValMap(args, function (arg) {
      return arg.name;
    }, function (arg) {
      return {
        description: arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        extensions: arg.extensions,
        astNode: arg.astNode
      };
    });
  }

  /**
   * Interface Type Definition
   *
   * When a field can return one of a heterogeneous set of types, a Interface type
   * is used to describe what types are possible, what fields are in common across
   * all types, as well as a function to determine which type is actually used
   * when the field is resolved.
   *
   * Example:
   *
   *     const EntityType = new GraphQLInterfaceType({
   *       name: 'Entity',
   *       fields: {
   *         name: { type: GraphQLString }
   *       }
   *     });
   *
   */
  var GraphQLInterfaceType =
  /*#__PURE__*/
  function () {
    function GraphQLInterfaceType(config) {
      this.name = config.name;
      this.description = config.description;
      this.resolveType = config.resolveType;
      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
      this._fields = defineFieldMap.bind(undefined, config);
      typeof config.name === 'string' || devAssert(0, 'Must provide name.');
      config.resolveType == null || typeof config.resolveType === 'function' || devAssert(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(inspect(config.resolveType), "."));
    }

    var _proto3 = GraphQLInterfaceType.prototype;

    _proto3.getFields = function getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }

      return this._fields;
    };

    _proto3.toConfig = function toConfig() {
      return {
        name: this.name,
        description: this.description,
        fields: fieldsToFieldsConfig(this.getFields()),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || []
      };
    };

    _proto3.toString = function toString() {
      return this.name;
    };

    return GraphQLInterfaceType;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLInterfaceType);
  defineToJSON(GraphQLInterfaceType);

  /**
   * Union Type Definition
   *
   * When a field can return one of a heterogeneous set of types, a Union type
   * is used to describe what types are possible as well as providing a function
   * to determine which type is actually used when the field is resolved.
   *
   * Example:
   *
   *     const PetType = new GraphQLUnionType({
   *       name: 'Pet',
   *       types: [ DogType, CatType ],
   *       resolveType(value) {
   *         if (value instanceof Dog) {
   *           return DogType;
   *         }
   *         if (value instanceof Cat) {
   *           return CatType;
   *         }
   *       }
   *     });
   *
   */
  var GraphQLUnionType =
  /*#__PURE__*/
  function () {
    function GraphQLUnionType(config) {
      this.name = config.name;
      this.description = config.description;
      this.resolveType = config.resolveType;
      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
      this._types = defineTypes.bind(undefined, config);
      typeof config.name === 'string' || devAssert(0, 'Must provide name.');
      config.resolveType == null || typeof config.resolveType === 'function' || devAssert(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(inspect(config.resolveType), "."));
    }

    var _proto4 = GraphQLUnionType.prototype;

    _proto4.getTypes = function getTypes() {
      if (typeof this._types === 'function') {
        this._types = this._types();
      }

      return this._types;
    };

    _proto4.toConfig = function toConfig() {
      return {
        name: this.name,
        description: this.description,
        types: this.getTypes(),
        resolveType: this.resolveType,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || []
      };
    };

    _proto4.toString = function toString() {
      return this.name;
    };

    return GraphQLUnionType;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLUnionType);
  defineToJSON(GraphQLUnionType);

  function defineTypes(config) {
    var types = resolveThunk(config.types) || [];
    Array.isArray(types) || devAssert(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
    return types;
  }

  /**
   * Enum Type Definition
   *
   * Some leaf values of requests and input values are Enums. GraphQL serializes
   * Enum values as strings, however internally Enums can be represented by any
   * kind of type, often integers.
   *
   * Example:
   *
   *     const RGBType = new GraphQLEnumType({
   *       name: 'RGB',
   *       values: {
   *         RED: { value: 0 },
   *         GREEN: { value: 1 },
   *         BLUE: { value: 2 }
   *       }
   *     });
   *
   * Note: If a value is not provided in a definition, the name of the enum value
   * will be used as its internal value.
   */
  var GraphQLEnumType
  /* <T> */
  =
  /*#__PURE__*/
  function () {
    function GraphQLEnumType(config) {
      this.name = config.name;
      this.description = config.description;
      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
      this._values = defineEnumValues(this.name, config.values);
      this._valueLookup = new Map(this._values.map(function (enumValue) {
        return [enumValue.value, enumValue];
      }));
      this._nameLookup = keyMap(this._values, function (value) {
        return value.name;
      });
      typeof config.name === 'string' || devAssert(0, 'Must provide name.');
    }

    var _proto5 = GraphQLEnumType.prototype;

    _proto5.getValues = function getValues() {
      return this._values;
    };

    _proto5.getValue = function getValue(name) {
      return this._nameLookup[name];
    };

    _proto5.serialize = function serialize(value) {
      var enumValue = this._valueLookup.get(value);

      if (enumValue) {
        return enumValue.name;
      }
    };

    _proto5.parseValue = function parseValue(value)
    /* T */
    {
      if (typeof value === 'string') {
        var enumValue = this.getValue(value);

        if (enumValue) {
          return enumValue.value;
        }
      }
    };

    _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
    /* T */
    {
      // Note: variables will be resolved to a value before calling this function.
      if (valueNode.kind === Kind.ENUM) {
        var enumValue = this.getValue(valueNode.value);

        if (enumValue) {
          return enumValue.value;
        }
      }
    };

    _proto5.toConfig = function toConfig() {
      var values = keyValMap(this.getValues(), function (value) {
        return value.name;
      }, function (value) {
        return {
          description: value.description,
          value: value.value,
          deprecationReason: value.deprecationReason,
          extensions: value.extensions,
          astNode: value.astNode
        };
      });
      return {
        name: this.name,
        description: this.description,
        values: values,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || []
      };
    };

    _proto5.toString = function toString() {
      return this.name;
    };

    return GraphQLEnumType;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLEnumType);
  defineToJSON(GraphQLEnumType);

  function defineEnumValues(typeName, valueMap) {
    isPlainObj(valueMap) || devAssert(0, "".concat(typeName, " values must be an object with value names as keys."));
    return objectEntries(valueMap).map(function (_ref2) {
      var valueName = _ref2[0],
          value = _ref2[1];
      isPlainObj(value) || devAssert(0, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat(inspect(value), "."));
      !('isDeprecated' in value) || devAssert(0, "".concat(typeName, ".").concat(valueName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
      return {
        name: valueName,
        description: value.description,
        value: 'value' in value ? value.value : valueName,
        isDeprecated: Boolean(value.deprecationReason),
        deprecationReason: value.deprecationReason,
        extensions: value.extensions && toObjMap(value.extensions),
        astNode: value.astNode
      };
    });
  }

  /**
   * Input Object Type Definition
   *
   * An input object defines a structured collection of fields which may be
   * supplied to a field argument.
   *
   * Using `NonNull` will ensure that a value must be provided by the query
   *
   * Example:
   *
   *     const GeoPoint = new GraphQLInputObjectType({
   *       name: 'GeoPoint',
   *       fields: {
   *         lat: { type: GraphQLNonNull(GraphQLFloat) },
   *         lon: { type: GraphQLNonNull(GraphQLFloat) },
   *         alt: { type: GraphQLFloat, defaultValue: 0 },
   *       }
   *     });
   *
   */
  var GraphQLInputObjectType =
  /*#__PURE__*/
  function () {
    function GraphQLInputObjectType(config) {
      this.name = config.name;
      this.description = config.description;
      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
      this._fields = defineInputFieldMap.bind(undefined, config);
      typeof config.name === 'string' || devAssert(0, 'Must provide name.');
    }

    var _proto6 = GraphQLInputObjectType.prototype;

    _proto6.getFields = function getFields() {
      if (typeof this._fields === 'function') {
        this._fields = this._fields();
      }

      return this._fields;
    };

    _proto6.toConfig = function toConfig() {
      var fields = mapValue(this.getFields(), function (field) {
        return {
          description: field.description,
          type: field.type,
          defaultValue: field.defaultValue,
          extensions: field.extensions,
          astNode: field.astNode
        };
      });
      return {
        name: this.name,
        description: this.description,
        fields: fields,
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || []
      };
    };

    _proto6.toString = function toString() {
      return this.name;
    };

    return GraphQLInputObjectType;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLInputObjectType);
  defineToJSON(GraphQLInputObjectType);

  function defineInputFieldMap(config) {
    var fieldMap = resolveThunk(config.fields) || {};
    isPlainObj(fieldMap) || devAssert(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
    return mapValue(fieldMap, function (fieldConfig, fieldName) {
      !('resolve' in fieldConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
      return _objectSpread({}, fieldConfig, {
        name: fieldName,
        description: fieldConfig.description,
        type: fieldConfig.type,
        defaultValue: fieldConfig.defaultValue,
        extensions: fieldConfig.extensions && toObjMap(fieldConfig.extensions),
        astNode: fieldConfig.astNode
      });
    });
  }

  /* eslint-disable no-redeclare */
  // $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
  var isFinitePolyfill = Number.isFinite || function (value) {
    return typeof value === 'number' && isFinite(value);
  };

  /* eslint-disable no-redeclare */
  // $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
  var isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };

  // 32-bit signed integer, providing the broadest support across platforms.
  //
  // n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
  // they are internally represented as IEEE 754 doubles.

  var MAX_INT = 2147483647;
  var MIN_INT = -2147483648;

  function serializeInt(value) {
    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    }

    var num = value;

    if (typeof value === 'string' && value !== '') {
      num = Number(value);
    }

    if (!isInteger(num)) {
      throw new TypeError("Int cannot represent non-integer value: ".concat(inspect(value)));
    }

    if (num > MAX_INT || num < MIN_INT) {
      throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(inspect(value)));
    }

    return num;
  }

  function coerceInt(value) {
    if (!isInteger(value)) {
      throw new TypeError("Int cannot represent non-integer value: ".concat(inspect(value)));
    }

    if (value > MAX_INT || value < MIN_INT) {
      throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(inspect(value)));
    }

    return value;
  }

  var GraphQLInt = new GraphQLScalarType({
    name: 'Int',
    description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
    serialize: serializeInt,
    parseValue: coerceInt,
    parseLiteral: function parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        var num = parseInt(ast.value, 10);

        if (num <= MAX_INT && num >= MIN_INT) {
          return num;
        }
      }

      return undefined;
    }
  });

  function serializeFloat(value) {
    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    }

    var num = value;

    if (typeof value === 'string' && value !== '') {
      num = Number(value);
    }

    if (!isFinitePolyfill(num)) {
      throw new TypeError("Float cannot represent non numeric value: ".concat(inspect(value)));
    }

    return num;
  }

  function coerceFloat(value) {
    if (!isFinitePolyfill(value)) {
      throw new TypeError("Float cannot represent non numeric value: ".concat(inspect(value)));
    }

    return value;
  }

  var GraphQLFloat = new GraphQLScalarType({
    name: 'Float',
    description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
    serialize: serializeFloat,
    parseValue: coerceFloat,
    parseLiteral: function parseLiteral(ast) {
      return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : undefined;
    }
  }); // Support serializing objects with custom valueOf() or toJSON() functions -
  // a common way to represent a complex value which can be represented as
  // a string (ex: MongoDB id objects).

  function serializeObject(value) {
    if (isObjectLike(value)) {
      if (typeof value.valueOf === 'function') {
        var valueOfResult = value.valueOf();

        if (!isObjectLike(valueOfResult)) {
          return valueOfResult;
        }
      }

      if (typeof value.toJSON === 'function') {
        // $FlowFixMe(>=0.90.0)
        return value.toJSON();
      }
    }

    return value;
  }

  function serializeString(rawValue) {
    var value = serializeObject(rawValue); // Serialize string, boolean and number values to a string, but do not
    // attempt to coerce object, function, symbol, or other types as strings.

    if (typeof value === 'string') {
      return value;
    }

    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }

    if (isFinitePolyfill(value)) {
      return value.toString();
    }

    throw new TypeError("String cannot represent value: ".concat(inspect(rawValue)));
  }

  function coerceString(value) {
    if (typeof value !== 'string') {
      throw new TypeError("String cannot represent a non string value: ".concat(inspect(value)));
    }

    return value;
  }

  var GraphQLString = new GraphQLScalarType({
    name: 'String',
    description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
    serialize: serializeString,
    parseValue: coerceString,
    parseLiteral: function parseLiteral(ast) {
      return ast.kind === Kind.STRING ? ast.value : undefined;
    }
  });

  function serializeBoolean(value) {
    if (typeof value === 'boolean') {
      return value;
    }

    if (isFinitePolyfill(value)) {
      return value !== 0;
    }

    throw new TypeError("Boolean cannot represent a non boolean value: ".concat(inspect(value)));
  }

  function coerceBoolean(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError("Boolean cannot represent a non boolean value: ".concat(inspect(value)));
    }

    return value;
  }

  var GraphQLBoolean = new GraphQLScalarType({
    name: 'Boolean',
    description: 'The `Boolean` scalar type represents `true` or `false`.',
    serialize: serializeBoolean,
    parseValue: coerceBoolean,
    parseLiteral: function parseLiteral(ast) {
      return ast.kind === Kind.BOOLEAN ? ast.value : undefined;
    }
  });

  function serializeID(rawValue) {
    var value = serializeObject(rawValue);

    if (typeof value === 'string') {
      return value;
    }

    if (isInteger(value)) {
      return String(value);
    }

    throw new TypeError("ID cannot represent value: ".concat(inspect(rawValue)));
  }

  function coerceID(value) {
    if (typeof value === 'string') {
      return value;
    }

    if (isInteger(value)) {
      return value.toString();
    }

    throw new TypeError("ID cannot represent value: ".concat(inspect(value)));
  }

  var GraphQLID = new GraphQLScalarType({
    name: 'ID',
    description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    serialize: serializeID,
    parseValue: coerceID,
    parseLiteral: function parseLiteral(ast) {
      return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : undefined;
    }
  });
  var specifiedScalarTypes = Object.freeze([GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID]);

  /**
   * Test if the given value is a GraphQL directive.
   */

  // eslint-disable-next-line no-redeclare
  function isDirective(directive) {
    return instanceOf(directive, GraphQLDirective);
  }
  /**
   * Directives are used by the GraphQL runtime as a way of modifying execution
   * behavior. Type system creators will usually not create these directly.
   */

  var GraphQLDirective =
  /*#__PURE__*/
  function () {
    function GraphQLDirective(config) {
      this.name = config.name;
      this.description = config.description;
      this.locations = config.locations;
      this.isRepeatable = config.isRepeatable != null && config.isRepeatable;
      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      config.name || devAssert(0, 'Directive must be named.');
      Array.isArray(config.locations) || devAssert(0, "@".concat(config.name, " locations must be an Array."));
      var args = config.args || {};
      isObjectLike(args) && !Array.isArray(args) || devAssert(0, "@".concat(config.name, " args must be an object with argument names as keys."));
      this.args = objectEntries(args).map(function (_ref) {
        var argName = _ref[0],
            arg = _ref[1];
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          extensions: arg.extensions && toObjMap(arg.extensions),
          astNode: arg.astNode
        };
      });
    }

    var _proto = GraphQLDirective.prototype;

    _proto.toString = function toString() {
      return '@' + this.name;
    };

    _proto.toConfig = function toConfig() {
      return {
        name: this.name,
        description: this.description,
        locations: this.locations,
        args: argsToArgsConfig(this.args),
        isRepeatable: this.isRepeatable,
        extensions: this.extensions,
        astNode: this.astNode
      };
    };

    return GraphQLDirective;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLDirective);
  defineToJSON(GraphQLDirective);

  /**
   * Used to conditionally include fields or fragments.
   */
  var GraphQLIncludeDirective = new GraphQLDirective({
    name: 'include',
    description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
    locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
    args: {
      if: {
        type: GraphQLNonNull(GraphQLBoolean),
        description: 'Included when true.'
      }
    }
  });
  /**
   * Used to conditionally skip (exclude) fields or fragments.
   */

  var GraphQLSkipDirective = new GraphQLDirective({
    name: 'skip',
    description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
    locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
    args: {
      if: {
        type: GraphQLNonNull(GraphQLBoolean),
        description: 'Skipped when true.'
      }
    }
  });
  /**
   * Constant string used for default reason for a deprecation.
   */

  var DEFAULT_DEPRECATION_REASON = 'No longer supported';
  /**
   * Used to declare element of a GraphQL schema as deprecated.
   */

  var GraphQLDeprecatedDirective = new GraphQLDirective({
    name: 'deprecated',
    description: 'Marks an element of a GraphQL schema as no longer supported.',
    locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
    args: {
      reason: {
        type: GraphQLString,
        description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).',
        defaultValue: DEFAULT_DEPRECATION_REASON
      }
    }
  });
  /**
   * The full list of specified directives.
   */

  var specifiedDirectives = Object.freeze([GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective]);

  /**
   * Converts an AST into a string, using one set of reasonable
   * formatting rules.
   */

  function print(ast) {
    return visit(ast, {
      leave: printDocASTReducer
    });
  } // TODO: provide better type coverage in future

  var printDocASTReducer = {
    Name: function Name(node) {
      return node.value;
    },
    Variable: function Variable(node) {
      return '$' + node.name;
    },
    // Document
    Document: function Document(node) {
      return join(node.definitions, '\n\n') + '\n';
    },
    OperationDefinition: function OperationDefinition(node) {
      var op = node.operation;
      var name = node.name;
      var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
      var directives = join(node.directives, ' ');
      var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
      // the query short form.

      return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
    },
    VariableDefinition: function VariableDefinition(_ref) {
      var variable = _ref.variable,
          type = _ref.type,
          defaultValue = _ref.defaultValue,
          directives = _ref.directives;
      return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
    },
    SelectionSet: function SelectionSet(_ref2) {
      var selections = _ref2.selections;
      return block$2(selections);
    },
    Field: function Field(_ref3) {
      var alias = _ref3.alias,
          name = _ref3.name,
          args = _ref3.arguments,
          directives = _ref3.directives,
          selectionSet = _ref3.selectionSet;
      return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
    },
    Argument: function Argument(_ref4) {
      var name = _ref4.name,
          value = _ref4.value;
      return name + ': ' + value;
    },
    // Fragments
    FragmentSpread: function FragmentSpread(_ref5) {
      var name = _ref5.name,
          directives = _ref5.directives;
      return '...' + name + wrap(' ', join(directives, ' '));
    },
    InlineFragment: function InlineFragment(_ref6) {
      var typeCondition = _ref6.typeCondition,
          directives = _ref6.directives,
          selectionSet = _ref6.selectionSet;
      return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
    },
    FragmentDefinition: function FragmentDefinition(_ref7) {
      var name = _ref7.name,
          typeCondition = _ref7.typeCondition,
          variableDefinitions = _ref7.variableDefinitions,
          directives = _ref7.directives,
          selectionSet = _ref7.selectionSet;
      return (// Note: fragment variable definitions are experimental and may be changed
        // or removed in the future.
        "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
      );
    },
    // Value
    IntValue: function IntValue(_ref8) {
      var value = _ref8.value;
      return value;
    },
    FloatValue: function FloatValue(_ref9) {
      var value = _ref9.value;
      return value;
    },
    StringValue: function StringValue(_ref10, key) {
      var value = _ref10.value,
          isBlockString = _ref10.block;
      return isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
    },
    BooleanValue: function BooleanValue(_ref11) {
      var value = _ref11.value;
      return value ? 'true' : 'false';
    },
    NullValue: function NullValue() {
      return 'null';
    },
    EnumValue: function EnumValue(_ref12) {
      var value = _ref12.value;
      return value;
    },
    ListValue: function ListValue(_ref13) {
      var values = _ref13.values;
      return '[' + join(values, ', ') + ']';
    },
    ObjectValue: function ObjectValue(_ref14) {
      var fields = _ref14.fields;
      return '{' + join(fields, ', ') + '}';
    },
    ObjectField: function ObjectField(_ref15) {
      var name = _ref15.name,
          value = _ref15.value;
      return name + ': ' + value;
    },
    // Directive
    Directive: function Directive(_ref16) {
      var name = _ref16.name,
          args = _ref16.arguments;
      return '@' + name + wrap('(', join(args, ', '), ')');
    },
    // Type
    NamedType: function NamedType(_ref17) {
      var name = _ref17.name;
      return name;
    },
    ListType: function ListType(_ref18) {
      var type = _ref18.type;
      return '[' + type + ']';
    },
    NonNullType: function NonNullType(_ref19) {
      var type = _ref19.type;
      return type + '!';
    },
    // Type System Definitions
    SchemaDefinition: function SchemaDefinition(_ref20) {
      var directives = _ref20.directives,
          operationTypes = _ref20.operationTypes;
      return join(['schema', join(directives, ' '), block$2(operationTypes)], ' ');
    },
    OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
      var operation = _ref21.operation,
          type = _ref21.type;
      return operation + ': ' + type;
    },
    ScalarTypeDefinition: addDescription(function (_ref22) {
      var name = _ref22.name,
          directives = _ref22.directives;
      return join(['scalar', name, join(directives, ' ')], ' ');
    }),
    ObjectTypeDefinition: addDescription(function (_ref23) {
      var name = _ref23.name,
          interfaces = _ref23.interfaces,
          directives = _ref23.directives,
          fields = _ref23.fields;
      return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block$2(fields)], ' ');
    }),
    FieldDefinition: addDescription(function (_ref24) {
      var name = _ref24.name,
          args = _ref24.arguments,
          type = _ref24.type,
          directives = _ref24.directives;
      return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
    }),
    InputValueDefinition: addDescription(function (_ref25) {
      var name = _ref25.name,
          type = _ref25.type,
          defaultValue = _ref25.defaultValue,
          directives = _ref25.directives;
      return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
    }),
    InterfaceTypeDefinition: addDescription(function (_ref26) {
      var name = _ref26.name,
          directives = _ref26.directives,
          fields = _ref26.fields;
      return join(['interface', name, join(directives, ' '), block$2(fields)], ' ');
    }),
    UnionTypeDefinition: addDescription(function (_ref27) {
      var name = _ref27.name,
          directives = _ref27.directives,
          types = _ref27.types;
      return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
    }),
    EnumTypeDefinition: addDescription(function (_ref28) {
      var name = _ref28.name,
          directives = _ref28.directives,
          values = _ref28.values;
      return join(['enum', name, join(directives, ' '), block$2(values)], ' ');
    }),
    EnumValueDefinition: addDescription(function (_ref29) {
      var name = _ref29.name,
          directives = _ref29.directives;
      return join([name, join(directives, ' ')], ' ');
    }),
    InputObjectTypeDefinition: addDescription(function (_ref30) {
      var name = _ref30.name,
          directives = _ref30.directives,
          fields = _ref30.fields;
      return join(['input', name, join(directives, ' '), block$2(fields)], ' ');
    }),
    DirectiveDefinition: addDescription(function (_ref31) {
      var name = _ref31.name,
          args = _ref31.arguments,
          repeatable = _ref31.repeatable,
          locations = _ref31.locations;
      return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
    }),
    SchemaExtension: function SchemaExtension(_ref32) {
      var directives = _ref32.directives,
          operationTypes = _ref32.operationTypes;
      return join(['extend schema', join(directives, ' '), block$2(operationTypes)], ' ');
    },
    ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
      var name = _ref33.name,
          directives = _ref33.directives;
      return join(['extend scalar', name, join(directives, ' ')], ' ');
    },
    ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
      var name = _ref34.name,
          interfaces = _ref34.interfaces,
          directives = _ref34.directives,
          fields = _ref34.fields;
      return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block$2(fields)], ' ');
    },
    InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
      var name = _ref35.name,
          directives = _ref35.directives,
          fields = _ref35.fields;
      return join(['extend interface', name, join(directives, ' '), block$2(fields)], ' ');
    },
    UnionTypeExtension: function UnionTypeExtension(_ref36) {
      var name = _ref36.name,
          directives = _ref36.directives,
          types = _ref36.types;
      return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
    },
    EnumTypeExtension: function EnumTypeExtension(_ref37) {
      var name = _ref37.name,
          directives = _ref37.directives,
          values = _ref37.values;
      return join(['extend enum', name, join(directives, ' '), block$2(values)], ' ');
    },
    InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
      var name = _ref38.name,
          directives = _ref38.directives,
          fields = _ref38.fields;
      return join(['extend input', name, join(directives, ' '), block$2(fields)], ' ');
    }
  };

  function addDescription(cb) {
    return function (node) {
      return join([node.description, cb(node)], '\n');
    };
  }
  /**
   * Given maybeArray, print an empty string if it is null or empty, otherwise
   * print all items together separated by separator if provided
   */


  function join(maybeArray, separator) {
    return maybeArray ? maybeArray.filter(function (x) {
      return x;
    }).join(separator || '') : '';
  }
  /**
   * Given array, print each item on its own line, wrapped in an
   * indented "{ }" block.
   */


  function block$2(array) {
    return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
  }
  /**
   * If maybeString is not null or empty, then wrap with start and end, otherwise
   * print an empty string.
   */


  function wrap(start, maybeString, end) {
    return maybeString ? start + maybeString + (end || '') : '';
  }

  function indent(maybeString) {
    return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
  }

  function isMultiline(string) {
    return string.indexOf('\n') !== -1;
  }

  function hasMultilineItems(maybeArray) {
    return maybeArray && maybeArray.some(isMultiline);
  }

  /**
   * Copyright (c) 2016, Lee Byron
   * All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @flow
   * @ignore
   */

  /**
   * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
   * is a *protocol* which describes a standard way to produce a sequence of
   * values, typically the values of the Iterable represented by this Iterator.
   *
   * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
   * it can be utilized by any version of JavaScript.
   *
   * @external Iterator
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
   */

  /**
   * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
   * is a *protocol* which when implemented allows a JavaScript object to define
   * their iteration behavior, such as what values are looped over in a
   * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
   * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
   * implement the Iterable protocol, including `Array` and `Map`.
   *
   * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
   * it can be utilized by any version of JavaScript.
   *
   * @external Iterable
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
   */

  // In ES2015 environments, Symbol exists
  var SYMBOL /*: any */ = typeof Symbol === 'function' ? Symbol : void 0;

  // In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
  var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator;

  /**
   * Returns true if the provided object implements the Iterator protocol via
   * either implementing a `Symbol.iterator` or `"@@iterator"` method.
   *
   * @example
   *
   * var isIterable = require('iterall').isIterable
   * isIterable([ 1, 2, 3 ]) // true
   * isIterable('ABC') // true
   * isIterable({ length: 1, 0: 'Alpha' }) // false
   * isIterable({ key: 'value' }) // false
   * isIterable(new Map()) // true
   *
   * @param obj
   *   A value which might implement the Iterable protocol.
   * @return {boolean} true if Iterable.
   */
  /*:: declare export function isIterable(obj: any): boolean; */
  function isIterable(obj) {
    return !!getIteratorMethod(obj)
  }

  /**
   * Returns true if the provided object implements the Array-like protocol via
   * defining a positive-integer `length` property.
   *
   * @example
   *
   * var isArrayLike = require('iterall').isArrayLike
   * isArrayLike([ 1, 2, 3 ]) // true
   * isArrayLike('ABC') // true
   * isArrayLike({ length: 1, 0: 'Alpha' }) // true
   * isArrayLike({ key: 'value' }) // false
   * isArrayLike(new Map()) // false
   *
   * @param obj
   *   A value which might implement the Array-like protocol.
   * @return {boolean} true if Array-like.
   */
  /*:: declare export function isArrayLike(obj: any): boolean; */
  function isArrayLike(obj) {
    var length = obj != null && obj.length;
    return typeof length === 'number' && length >= 0 && length % 1 === 0
  }

  /**
   * Returns true if the provided object is an Object (i.e. not a string literal)
   * and is either Iterable or Array-like.
   *
   * This may be used in place of [Array.isArray()][isArray] to determine if an
   * object should be iterated-over. It always excludes string literals and
   * includes Arrays (regardless of if it is Iterable). It also includes other
   * Array-like objects such as NodeList, TypedArray, and Buffer.
   *
   * @example
   *
   * var isCollection = require('iterall').isCollection
   * isCollection([ 1, 2, 3 ]) // true
   * isCollection('ABC') // false
   * isCollection({ length: 1, 0: 'Alpha' }) // true
   * isCollection({ key: 'value' }) // false
   * isCollection(new Map()) // true
   *
   * @example
   *
   * var forEach = require('iterall').forEach
   * if (isCollection(obj)) {
   *   forEach(obj, function (value) {
   *     console.log(value)
   *   })
   * }
   *
   * @param obj
   *   An Object value which might implement the Iterable or Array-like protocols.
   * @return {boolean} true if Iterable or Array-like Object.
   */
  /*:: declare export function isCollection(obj: any): boolean; */
  function isCollection(obj) {
    return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
  }

  /**
   * If the provided object implements the Iterator protocol, its Iterator object
   * is returned. Otherwise returns undefined.
   *
   * @example
   *
   * var getIterator = require('iterall').getIterator
   * var iterator = getIterator([ 1, 2, 3 ])
   * iterator.next() // { value: 1, done: false }
   * iterator.next() // { value: 2, done: false }
   * iterator.next() // { value: 3, done: false }
   * iterator.next() // { value: undefined, done: true }
   *
   * @template T the type of each iterated value
   * @param {Iterable<T>} iterable
   *   An Iterable object which is the source of an Iterator.
   * @return {Iterator<T>} new Iterator instance.
   */
  /*:: declare export var getIterator:
    & (<+TValue>(iterable: Iterable<TValue>) => Iterator<TValue>)
    & ((iterable: mixed) => void | Iterator<mixed>); */
  function getIterator(iterable) {
    var method = getIteratorMethod(iterable);
    if (method) {
      return method.call(iterable)
    }
  }

  /**
   * If the provided object implements the Iterator protocol, the method
   * responsible for producing its Iterator object is returned.
   *
   * This is used in rare cases for performance tuning. This method must be called
   * with obj as the contextual this-argument.
   *
   * @example
   *
   * var getIteratorMethod = require('iterall').getIteratorMethod
   * var myArray = [ 1, 2, 3 ]
   * var method = getIteratorMethod(myArray)
   * if (method) {
   *   var iterator = method.call(myArray)
   * }
   *
   * @template T the type of each iterated value
   * @param {Iterable<T>} iterable
   *   An Iterable object which defines an `@@iterator` method.
   * @return {function(): Iterator<T>} `@@iterator` method.
   */
  /*:: declare export var getIteratorMethod:
    & (<+TValue>(iterable: Iterable<TValue>) => (() => Iterator<TValue>))
    & ((iterable: mixed) => (void | (() => Iterator<mixed>))); */
  function getIteratorMethod(iterable) {
    if (iterable != null) {
      var method =
        (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator'];
      if (typeof method === 'function') {
        return method
      }
    }
  }

  /**
   * Given an object which either implements the Iterable protocol or is
   * Array-like, iterate over it, calling the `callback` at each iteration.
   *
   * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
   * However `forEach` adheres to the behavior of [Array#forEach][] described in
   * the ECMAScript specification, skipping over "holes" in Array-likes. It will
   * also delegate to a `forEach` method on `collection` if one is defined,
   * ensuring native performance for `Arrays`.
   *
   * Similar to [Array#forEach][], the `callback` function accepts three
   * arguments, and is provided with `thisArg` as the calling context.
   *
   * Note: providing an infinite Iterator to forEach will produce an error.
   *
   * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   *
   * @example
   *
   * var forEach = require('iterall').forEach
   *
   * forEach(myIterable, function (value, index, iterable) {
   *   console.log(value, index, iterable === myIterable)
   * })
   *
   * @example
   *
   * // ES6:
   * for (let value of myIterable) {
   *   console.log(value)
   * }
   *
   * // Any JavaScript environment:
   * forEach(myIterable, function (value) {
   *   console.log(value)
   * })
   *
   * @template T the type of each iterated value
   * @param {Iterable<T>|{ length: number }} collection
   *   The Iterable or array to iterate over.
   * @param {function(T, number, object)} callback
   *   Function to execute for each iteration, taking up to three arguments
   * @param [thisArg]
   *   Optional. Value to use as `this` when executing `callback`.
   */
  /*:: declare export var forEach:
    & (<+TValue, TCollection: Iterable<TValue>>(
        collection: TCollection,
        callbackFn: (value: TValue, index: number, collection: TCollection) => any,
        thisArg?: any
      ) => void)
    & (<TCollection: {length: number}>(
        collection: TCollection,
        callbackFn: (value: mixed, index: number, collection: TCollection) => any,
        thisArg?: any
      ) => void); */
  function forEach(collection, callback, thisArg) {
    if (collection != null) {
      if (typeof collection.forEach === 'function') {
        return collection.forEach(callback, thisArg)
      }
      var i = 0;
      var iterator = getIterator(collection);
      if (iterator) {
        var step;
        while (!(step = iterator.next()).done) {
          callback.call(thisArg, step.value, i++, collection);
          // Infinite Iterators could cause forEach to run forever.
          // After a very large number of iterations, produce an error.
          /* istanbul ignore if */
          if (i > 9999999) {
            throw new TypeError('Near-infinite iteration.')
          }
        }
      } else if (isArrayLike(collection)) {
        for (; i < collection.length; i++) {
          if (collection.hasOwnProperty(i)) {
            callback.call(thisArg, collection[i], i, collection);
          }
        }
      }
    }
  }

  /////////////////////////////////////////////////////
  //                                                 //
  //                 ASYNC ITERATORS                 //
  //                                                 //
  /////////////////////////////////////////////////////

  /**
   * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
   * is a *protocol* which when implemented allows a JavaScript object to define
   * an asynchronous iteration behavior, such as what values are looped over in
   * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
   * loop or `iterall`'s {@link forAwaitEach} function.
   *
   * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
   * it can be utilized by any version of JavaScript.
   *
   * @external AsyncIterable
   * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
   * @template T The type of each iterated value
   * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
   *   A method which produces an AsyncIterator for this AsyncIterable.
   */

  /**
   * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
   * is a *protocol* which describes a standard way to produce and consume an
   * asynchronous sequence of values, typically the values of the
   * {@link AsyncIterable} represented by this {@link AsyncIterator}.
   *
   * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
   * also as a `next()` method, however instead of an IteratorResult,
   * calling this method returns a {@link Promise} for a IteratorResult.
   *
   * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
   * it can be utilized by any version of JavaScript.
   *
   * @external AsyncIterator
   * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
   */

  // In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
  SYMBOL && SYMBOL.asyncIterator;

  /**
   * Returns true if a value is null, undefined, or NaN.
   */
  function isNullish(value) {
    return value === null || value === undefined || value !== value;
  }

  /**
   * Produces a GraphQL Value AST given a JavaScript value.
   *
   * A GraphQL type must be provided, which will be used to interpret different
   * JavaScript values.
   *
   * | JSON Value    | GraphQL Value        |
   * | ------------- | -------------------- |
   * | Object        | Input Object         |
   * | Array         | List                 |
   * | Boolean       | Boolean              |
   * | String        | String / Enum Value  |
   * | Number        | Int / Float          |
   * | Mixed         | Enum Value           |
   * | null          | NullValue            |
   *
   */

  function astFromValue(value, type) {
    if (isNonNullType(type)) {
      var astValue = astFromValue(value, type.ofType);

      if (astValue && astValue.kind === Kind.NULL) {
        return null;
      }

      return astValue;
    } // only explicit null, not undefined, NaN


    if (value === null) {
      return {
        kind: Kind.NULL
      };
    } // undefined, NaN


    if (isInvalid(value)) {
      return null;
    } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
    // the value is not an array, convert the value using the list's item type.


    if (isListType(type)) {
      var itemType = type.ofType;

      if (isCollection(value)) {
        var valuesNodes = [];
        forEach(value, function (item) {
          var itemNode = astFromValue(item, itemType);

          if (itemNode) {
            valuesNodes.push(itemNode);
          }
        });
        return {
          kind: Kind.LIST,
          values: valuesNodes
        };
      }

      return astFromValue(value, itemType);
    } // Populate the fields of the input object by creating ASTs from each value
    // in the JavaScript object according to the fields in the input type.


    if (isInputObjectType(type)) {
      if (!isObjectLike(value)) {
        return null;
      }

      var fieldNodes = [];

      for (var _i2 = 0, _objectValues2 = objectValues(type.getFields()); _i2 < _objectValues2.length; _i2++) {
        var field = _objectValues2[_i2];
        var fieldValue = astFromValue(value[field.name], field.type);

        if (fieldValue) {
          fieldNodes.push({
            kind: Kind.OBJECT_FIELD,
            name: {
              kind: Kind.NAME,
              value: field.name
            },
            value: fieldValue
          });
        }
      }

      return {
        kind: Kind.OBJECT,
        fields: fieldNodes
      };
    }

    /* istanbul ignore else */
    if (isLeafType(type)) {
      // Since value is an internally represented value, it must be serialized
      // to an externally represented value before converting into an AST.
      var serialized = type.serialize(value);

      if (isNullish(serialized)) {
        return null;
      } // Others serialize based on their corresponding JavaScript scalar types.


      if (typeof serialized === 'boolean') {
        return {
          kind: Kind.BOOLEAN,
          value: serialized
        };
      } // JavaScript numbers can be Int or Float values.


      if (typeof serialized === 'number') {
        var stringNum = String(serialized);
        return integerStringRegExp.test(stringNum) ? {
          kind: Kind.INT,
          value: stringNum
        } : {
          kind: Kind.FLOAT,
          value: stringNum
        };
      }

      if (typeof serialized === 'string') {
        // Enum types use Enum literals.
        if (isEnumType(type)) {
          return {
            kind: Kind.ENUM,
            value: serialized
          };
        } // ID types can use Int literals.


        if (type === GraphQLID && integerStringRegExp.test(serialized)) {
          return {
            kind: Kind.INT,
            value: serialized
          };
        }

        return {
          kind: Kind.STRING,
          value: serialized
        };
      }

      throw new TypeError("Cannot convert value to AST: ".concat(inspect(serialized)));
    } // Not reachable. All possible input types have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected input type: ' + inspect(type));
  }
  /**
   * IntValue:
   *   - NegativeSign? 0
   *   - NegativeSign? NonZeroDigit ( Digit+ )?
   */

  var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;

  var __Schema = new GraphQLObjectType({
    name: '__Schema',
    description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
    fields: function fields() {
      return {
        types: {
          description: 'A list of all types supported by this server.',
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Type))),
          resolve: function resolve(schema) {
            return objectValues(schema.getTypeMap());
          }
        },
        queryType: {
          description: 'The type that query operations will be rooted at.',
          type: GraphQLNonNull(__Type),
          resolve: function resolve(schema) {
            return schema.getQueryType();
          }
        },
        mutationType: {
          description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
          type: __Type,
          resolve: function resolve(schema) {
            return schema.getMutationType();
          }
        },
        subscriptionType: {
          description: 'If this server support subscription, the type that subscription operations will be rooted at.',
          type: __Type,
          resolve: function resolve(schema) {
            return schema.getSubscriptionType();
          }
        },
        directives: {
          description: 'A list of all directives supported by this server.',
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Directive))),
          resolve: function resolve(schema) {
            return schema.getDirectives();
          }
        }
      };
    }
  });
  var __Directive = new GraphQLObjectType({
    name: '__Directive',
    description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
    fields: function fields() {
      return {
        name: {
          type: GraphQLNonNull(GraphQLString),
          resolve: function resolve(obj) {
            return obj.name;
          }
        },
        description: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.description;
          }
        },
        locations: {
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__DirectiveLocation))),
          resolve: function resolve(obj) {
            return obj.locations;
          }
        },
        args: {
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
          resolve: function resolve(directive) {
            return directive.args;
          }
        }
      };
    }
  });
  var __DirectiveLocation = new GraphQLEnumType({
    name: '__DirectiveLocation',
    description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
    values: {
      QUERY: {
        value: DirectiveLocation.QUERY,
        description: 'Location adjacent to a query operation.'
      },
      MUTATION: {
        value: DirectiveLocation.MUTATION,
        description: 'Location adjacent to a mutation operation.'
      },
      SUBSCRIPTION: {
        value: DirectiveLocation.SUBSCRIPTION,
        description: 'Location adjacent to a subscription operation.'
      },
      FIELD: {
        value: DirectiveLocation.FIELD,
        description: 'Location adjacent to a field.'
      },
      FRAGMENT_DEFINITION: {
        value: DirectiveLocation.FRAGMENT_DEFINITION,
        description: 'Location adjacent to a fragment definition.'
      },
      FRAGMENT_SPREAD: {
        value: DirectiveLocation.FRAGMENT_SPREAD,
        description: 'Location adjacent to a fragment spread.'
      },
      INLINE_FRAGMENT: {
        value: DirectiveLocation.INLINE_FRAGMENT,
        description: 'Location adjacent to an inline fragment.'
      },
      VARIABLE_DEFINITION: {
        value: DirectiveLocation.VARIABLE_DEFINITION,
        description: 'Location adjacent to a variable definition.'
      },
      SCHEMA: {
        value: DirectiveLocation.SCHEMA,
        description: 'Location adjacent to a schema definition.'
      },
      SCALAR: {
        value: DirectiveLocation.SCALAR,
        description: 'Location adjacent to a scalar definition.'
      },
      OBJECT: {
        value: DirectiveLocation.OBJECT,
        description: 'Location adjacent to an object type definition.'
      },
      FIELD_DEFINITION: {
        value: DirectiveLocation.FIELD_DEFINITION,
        description: 'Location adjacent to a field definition.'
      },
      ARGUMENT_DEFINITION: {
        value: DirectiveLocation.ARGUMENT_DEFINITION,
        description: 'Location adjacent to an argument definition.'
      },
      INTERFACE: {
        value: DirectiveLocation.INTERFACE,
        description: 'Location adjacent to an interface definition.'
      },
      UNION: {
        value: DirectiveLocation.UNION,
        description: 'Location adjacent to a union definition.'
      },
      ENUM: {
        value: DirectiveLocation.ENUM,
        description: 'Location adjacent to an enum definition.'
      },
      ENUM_VALUE: {
        value: DirectiveLocation.ENUM_VALUE,
        description: 'Location adjacent to an enum value definition.'
      },
      INPUT_OBJECT: {
        value: DirectiveLocation.INPUT_OBJECT,
        description: 'Location adjacent to an input object type definition.'
      },
      INPUT_FIELD_DEFINITION: {
        value: DirectiveLocation.INPUT_FIELD_DEFINITION,
        description: 'Location adjacent to an input object field definition.'
      }
    }
  });
  var __Type = new GraphQLObjectType({
    name: '__Type',
    description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
    fields: function fields() {
      return {
        kind: {
          type: GraphQLNonNull(__TypeKind),
          resolve: function resolve(type) {
            if (isScalarType(type)) {
              return TypeKind.SCALAR;
            } else if (isObjectType(type)) {
              return TypeKind.OBJECT;
            } else if (isInterfaceType(type)) {
              return TypeKind.INTERFACE;
            } else if (isUnionType(type)) {
              return TypeKind.UNION;
            } else if (isEnumType(type)) {
              return TypeKind.ENUM;
            } else if (isInputObjectType(type)) {
              return TypeKind.INPUT_OBJECT;
            } else if (isListType(type)) {
              return TypeKind.LIST;
            } else if (isNonNullType(type)) {
              return TypeKind.NON_NULL;
            } // Not reachable. All possible types have been considered.


            /* istanbul ignore next */
            invariant(false, "Unexpected type: \"".concat(inspect(type), "\"."));
          }
        },
        name: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.name !== undefined ? obj.name : undefined;
          }
        },
        description: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.description !== undefined ? obj.description : undefined;
          }
        },
        fields: {
          type: GraphQLList(GraphQLNonNull(__Field)),
          args: {
            includeDeprecated: {
              type: GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve: function resolve(type, _ref) {
            var includeDeprecated = _ref.includeDeprecated;

            if (isObjectType(type) || isInterfaceType(type)) {
              var fields = objectValues(type.getFields());

              if (!includeDeprecated) {
                fields = fields.filter(function (field) {
                  return !field.deprecationReason;
                });
              }

              return fields;
            }

            return null;
          }
        },
        interfaces: {
          type: GraphQLList(GraphQLNonNull(__Type)),
          resolve: function resolve(type) {
            if (isObjectType(type)) {
              return type.getInterfaces();
            }
          }
        },
        possibleTypes: {
          type: GraphQLList(GraphQLNonNull(__Type)),
          resolve: function resolve(type, args, context, _ref2) {
            var schema = _ref2.schema;

            if (isAbstractType(type)) {
              return schema.getPossibleTypes(type);
            }
          }
        },
        enumValues: {
          type: GraphQLList(GraphQLNonNull(__EnumValue)),
          args: {
            includeDeprecated: {
              type: GraphQLBoolean,
              defaultValue: false
            }
          },
          resolve: function resolve(type, _ref3) {
            var includeDeprecated = _ref3.includeDeprecated;

            if (isEnumType(type)) {
              var values = type.getValues();

              if (!includeDeprecated) {
                values = values.filter(function (value) {
                  return !value.deprecationReason;
                });
              }

              return values;
            }
          }
        },
        inputFields: {
          type: GraphQLList(GraphQLNonNull(__InputValue)),
          resolve: function resolve(type) {
            if (isInputObjectType(type)) {
              return objectValues(type.getFields());
            }
          }
        },
        ofType: {
          type: __Type,
          resolve: function resolve(obj) {
            return obj.ofType !== undefined ? obj.ofType : undefined;
          }
        }
      };
    }
  });
  var __Field = new GraphQLObjectType({
    name: '__Field',
    description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
    fields: function fields() {
      return {
        name: {
          type: GraphQLNonNull(GraphQLString),
          resolve: function resolve(obj) {
            return obj.name;
          }
        },
        description: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.description;
          }
        },
        args: {
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
          resolve: function resolve(field) {
            return field.args;
          }
        },
        type: {
          type: GraphQLNonNull(__Type),
          resolve: function resolve(obj) {
            return obj.type;
          }
        },
        isDeprecated: {
          type: GraphQLNonNull(GraphQLBoolean),
          resolve: function resolve(obj) {
            return obj.isDeprecated;
          }
        },
        deprecationReason: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.deprecationReason;
          }
        }
      };
    }
  });
  var __InputValue = new GraphQLObjectType({
    name: '__InputValue',
    description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
    fields: function fields() {
      return {
        name: {
          type: GraphQLNonNull(GraphQLString),
          resolve: function resolve(obj) {
            return obj.name;
          }
        },
        description: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.description;
          }
        },
        type: {
          type: GraphQLNonNull(__Type),
          resolve: function resolve(obj) {
            return obj.type;
          }
        },
        defaultValue: {
          type: GraphQLString,
          description: 'A GraphQL-formatted string representing the default value for this input value.',
          resolve: function resolve(inputVal) {
            var valueAST = astFromValue(inputVal.defaultValue, inputVal.type);
            return valueAST ? print(valueAST) : null;
          }
        }
      };
    }
  });
  var __EnumValue = new GraphQLObjectType({
    name: '__EnumValue',
    description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
    fields: function fields() {
      return {
        name: {
          type: GraphQLNonNull(GraphQLString),
          resolve: function resolve(obj) {
            return obj.name;
          }
        },
        description: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.description;
          }
        },
        isDeprecated: {
          type: GraphQLNonNull(GraphQLBoolean),
          resolve: function resolve(obj) {
            return obj.isDeprecated;
          }
        },
        deprecationReason: {
          type: GraphQLString,
          resolve: function resolve(obj) {
            return obj.deprecationReason;
          }
        }
      };
    }
  });
  var TypeKind = Object.freeze({
    SCALAR: 'SCALAR',
    OBJECT: 'OBJECT',
    INTERFACE: 'INTERFACE',
    UNION: 'UNION',
    ENUM: 'ENUM',
    INPUT_OBJECT: 'INPUT_OBJECT',
    LIST: 'LIST',
    NON_NULL: 'NON_NULL'
  });
  var __TypeKind = new GraphQLEnumType({
    name: '__TypeKind',
    description: 'An enum describing what kind of type a given `__Type` is.',
    values: {
      SCALAR: {
        value: TypeKind.SCALAR,
        description: 'Indicates this type is a scalar.'
      },
      OBJECT: {
        value: TypeKind.OBJECT,
        description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
      },
      INTERFACE: {
        value: TypeKind.INTERFACE,
        description: 'Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.'
      },
      UNION: {
        value: TypeKind.UNION,
        description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
      },
      ENUM: {
        value: TypeKind.ENUM,
        description: 'Indicates this type is an enum. `enumValues` is a valid field.'
      },
      INPUT_OBJECT: {
        value: TypeKind.INPUT_OBJECT,
        description: 'Indicates this type is an input object. `inputFields` is a valid field.'
      },
      LIST: {
        value: TypeKind.LIST,
        description: 'Indicates this type is a list. `ofType` is a valid field.'
      },
      NON_NULL: {
        value: TypeKind.NON_NULL,
        description: 'Indicates this type is a non-null. `ofType` is a valid field.'
      }
    }
  });
  /**
   * Note that these are GraphQLField and not GraphQLFieldConfig,
   * so the format for args is different.
   */

  var SchemaMetaFieldDef = {
    name: '__schema',
    type: GraphQLNonNull(__Schema),
    description: 'Access the current type schema of this server.',
    args: [],
    resolve: function resolve(source, args, context, _ref4) {
      var schema = _ref4.schema;
      return schema;
    },
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
  };
  var TypeMetaFieldDef = {
    name: '__type',
    type: __Type,
    description: 'Request the type information of a single type.',
    args: [{
      name: 'name',
      description: undefined,
      type: GraphQLNonNull(GraphQLString),
      defaultValue: undefined,
      extensions: undefined,
      astNode: undefined
    }],
    resolve: function resolve(source, _ref5, context, _ref6) {
      var name = _ref5.name;
      var schema = _ref6.schema;
      return schema.getType(name);
    },
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
  };
  var TypeNameMetaFieldDef = {
    name: '__typename',
    type: GraphQLNonNull(GraphQLString),
    description: 'The name of the current Object type at runtime.',
    args: [],
    resolve: function resolve(source, args, context, _ref7) {
      var parentType = _ref7.parentType;
      return parentType.name;
    },
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
  };
  var introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);

  /**
   * Schema Definition
   *
   * A Schema is created by supplying the root types of each type of operation,
   * query and mutation (optional). A schema definition is then supplied to the
   * validator and executor.
   *
   * Example:
   *
   *     const MyAppSchema = new GraphQLSchema({
   *       query: MyAppQueryRootType,
   *       mutation: MyAppMutationRootType,
   *     })
   *
   * Note: When the schema is constructed, by default only the types that are
   * reachable by traversing the root types are included, other types must be
   * explicitly referenced.
   *
   * Example:
   *
   *     const characterInterface = new GraphQLInterfaceType({
   *       name: 'Character',
   *       ...
   *     });
   *
   *     const humanType = new GraphQLObjectType({
   *       name: 'Human',
   *       interfaces: [characterInterface],
   *       ...
   *     });
   *
   *     const droidType = new GraphQLObjectType({
   *       name: 'Droid',
   *       interfaces: [characterInterface],
   *       ...
   *     });
   *
   *     const schema = new GraphQLSchema({
   *       query: new GraphQLObjectType({
   *         name: 'Query',
   *         fields: {
   *           hero: { type: characterInterface, ... },
   *         }
   *       }),
   *       ...
   *       // Since this schema references only the `Character` interface it's
   *       // necessary to explicitly list the types that implement it if
   *       // you want them to be included in the final schema.
   *       types: [humanType, droidType],
   *     })
   *
   * Note: If an array of `directives` are provided to GraphQLSchema, that will be
   * the exact list of directives represented and allowed. If `directives` is not
   * provided then a default set of the specified directives (e.g. @include and
   * @skip) will be used. If you wish to provide *additional* directives to these
   * specified directives, you must explicitly declare them. Example:
   *
   *     const MyAppSchema = new GraphQLSchema({
   *       ...
   *       directives: specifiedDirectives.concat([ myCustomDirective ]),
   *     })
   *
   */

  var GraphQLSchema =
  /*#__PURE__*/
  function () {
    // Used as a cache for validateSchema().
    // Referenced by validateSchema().
    function GraphQLSchema(config) {
      // If this schema was built from a source known to be valid, then it may be
      // marked with assumeValid to avoid an additional type system validation.
      if (config && config.assumeValid) {
        this.__validationErrors = [];
      } else {
        this.__validationErrors = undefined; // Otherwise check for common mistakes during construction to produce
        // clear and early error messages.

        isObjectLike(config) || devAssert(0, 'Must provide configuration object.');
        !config.types || Array.isArray(config.types) || devAssert(0, "\"types\" must be Array if provided but got: ".concat(inspect(config.types), "."));
        !config.directives || Array.isArray(config.directives) || devAssert(0, '"directives" must be Array if provided but got: ' + "".concat(inspect(config.directives), "."));
        !config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames) || devAssert(0, '"allowedLegacyNames" must be Array if provided but got: ' + "".concat(inspect(config.allowedLegacyNames), "."));
      }

      this.extensions = config.extensions && toObjMap(config.extensions);
      this.astNode = config.astNode;
      this.extensionASTNodes = config.extensionASTNodes;
      this.__allowedLegacyNames = config.allowedLegacyNames || [];
      this._queryType = config.query;
      this._mutationType = config.mutation;
      this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

      this._directives = config.directives || specifiedDirectives; // Build type map now to detect any errors within this schema.

      var initialTypes = [this._queryType, this._mutationType, this._subscriptionType, __Schema].concat(config.types); // Keep track of all types referenced within the schema.

      var typeMap = Object.create(null); // First by deeply visiting all initial types.

      typeMap = initialTypes.reduce(typeMapReducer, typeMap); // Then by deeply visiting all directive types.

      typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap); // Storing the resulting map for reference by the schema.

      this._typeMap = typeMap;
      this._possibleTypeMap = Object.create(null); // Keep track of all implementations by interface name.

      this._implementations = Object.create(null);

      for (var _i2 = 0, _objectValues2 = objectValues(this._typeMap); _i2 < _objectValues2.length; _i2++) {
        var type = _objectValues2[_i2];

        if (isObjectType(type)) {
          for (var _i4 = 0, _type$getInterfaces2 = type.getInterfaces(); _i4 < _type$getInterfaces2.length; _i4++) {
            var iface = _type$getInterfaces2[_i4];

            if (isInterfaceType(iface)) {
              var impls = this._implementations[iface.name];

              if (impls) {
                impls.push(type);
              } else {
                this._implementations[iface.name] = [type];
              }
            }
          }
        }
      }
    }

    var _proto = GraphQLSchema.prototype;

    _proto.getQueryType = function getQueryType() {
      return this._queryType;
    };

    _proto.getMutationType = function getMutationType() {
      return this._mutationType;
    };

    _proto.getSubscriptionType = function getSubscriptionType() {
      return this._subscriptionType;
    };

    _proto.getTypeMap = function getTypeMap() {
      return this._typeMap;
    };

    _proto.getType = function getType(name) {
      return this.getTypeMap()[name];
    };

    _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
      if (isUnionType(abstractType)) {
        return abstractType.getTypes();
      }

      return this._implementations[abstractType.name] || [];
    };

    _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
      if (this._possibleTypeMap[abstractType.name] == null) {
        var map = Object.create(null);

        for (var _i6 = 0, _this$getPossibleType2 = this.getPossibleTypes(abstractType); _i6 < _this$getPossibleType2.length; _i6++) {
          var type = _this$getPossibleType2[_i6];
          map[type.name] = true;
        }

        this._possibleTypeMap[abstractType.name] = map;
      }

      return Boolean(this._possibleTypeMap[abstractType.name][possibleType.name]);
    };

    _proto.getDirectives = function getDirectives() {
      return this._directives;
    };

    _proto.getDirective = function getDirective(name) {
      return find$1(this.getDirectives(), function (directive) {
        return directive.name === name;
      });
    };

    _proto.toConfig = function toConfig() {
      return {
        query: this.getQueryType(),
        mutation: this.getMutationType(),
        subscription: this.getSubscriptionType(),
        types: objectValues(this.getTypeMap()),
        directives: this.getDirectives().slice(),
        extensions: this.extensions,
        astNode: this.astNode,
        extensionASTNodes: this.extensionASTNodes || [],
        assumeValid: this.__validationErrors !== undefined,
        allowedLegacyNames: this.__allowedLegacyNames
      };
    };

    return GraphQLSchema;
  }(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

  defineToStringTag(GraphQLSchema);

  function typeMapReducer(map, type) {
    if (!type) {
      return map;
    }

    var namedType = getNamedType(type);
    var seenType = map[namedType.name];

    if (seenType) {
      if (seenType !== namedType) {
        throw new Error("Schema must contain uniquely named types but contains multiple types named \"".concat(namedType.name, "\"."));
      }

      return map;
    }

    map[namedType.name] = namedType;
    var reducedMap = map;

    if (isUnionType(namedType)) {
      reducedMap = namedType.getTypes().reduce(typeMapReducer, reducedMap);
    }

    if (isObjectType(namedType)) {
      reducedMap = namedType.getInterfaces().reduce(typeMapReducer, reducedMap);
    }

    if (isObjectType(namedType) || isInterfaceType(namedType)) {
      for (var _i8 = 0, _objectValues4 = objectValues(namedType.getFields()); _i8 < _objectValues4.length; _i8++) {
        var field = _objectValues4[_i8];
        var fieldArgTypes = field.args.map(function (arg) {
          return arg.type;
        });
        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
        reducedMap = typeMapReducer(reducedMap, field.type);
      }
    }

    if (isInputObjectType(namedType)) {
      for (var _i10 = 0, _objectValues6 = objectValues(namedType.getFields()); _i10 < _objectValues6.length; _i10++) {
        var _field = _objectValues6[_i10];
        reducedMap = typeMapReducer(reducedMap, _field.type);
      }
    }

    return reducedMap;
  }

  function typeMapDirectiveReducer(map, directive) {
    // Directives are not validated until validateSchema() is called.
    if (!isDirective(directive)) {
      return map;
    }

    return directive.args.reduce(function (_map, arg) {
      return typeMapReducer(_map, arg.type);
    }, map);
  }

  /**
   * Given a Schema and an AST node describing a type, return a GraphQLType
   * definition which applies to that type. For example, if provided the parsed
   * AST node for `[User]`, a GraphQLList instance will be returned, containing
   * the type called "User" found in the schema. If a type called "User" is not
   * found in the schema, then undefined will be returned.
   */

  /* eslint-disable no-redeclare */

  function typeFromAST(schema, typeNode) {
    /* eslint-enable no-redeclare */
    var innerType;

    if (typeNode.kind === Kind.LIST_TYPE) {
      innerType = typeFromAST(schema, typeNode.type);
      return innerType && GraphQLList(innerType);
    }

    if (typeNode.kind === Kind.NON_NULL_TYPE) {
      innerType = typeFromAST(schema, typeNode.type);
      return innerType && GraphQLNonNull(innerType);
    }

    /* istanbul ignore else */
    if (typeNode.kind === Kind.NAMED_TYPE) {
      return schema.getType(typeNode.name.value);
    } // Not reachable. All possible type nodes have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected type node: ' + inspect(typeNode));
  }

  /**
   * TypeInfo is a utility class which, given a GraphQL schema, can keep track
   * of the current field and type definitions at any point in a GraphQL document
   * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
   */

  var TypeInfo =
  /*#__PURE__*/
  function () {
    function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
    // to support non-spec-compliant codebases. You should never need to use it.
    // It may disappear in the future.
    getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
    // beginning somewhere other than documents.
    initialType) {
      this._schema = schema;
      this._typeStack = [];
      this._parentTypeStack = [];
      this._inputTypeStack = [];
      this._fieldDefStack = [];
      this._defaultValueStack = [];
      this._directive = null;
      this._argument = null;
      this._enumValue = null;
      this._getFieldDef = getFieldDefFn || getFieldDef;

      if (initialType) {
        if (isInputType(initialType)) {
          this._inputTypeStack.push(initialType);
        }

        if (isCompositeType(initialType)) {
          this._parentTypeStack.push(initialType);
        }

        if (isOutputType(initialType)) {
          this._typeStack.push(initialType);
        }
      }
    }

    var _proto = TypeInfo.prototype;

    _proto.getType = function getType() {
      if (this._typeStack.length > 0) {
        return this._typeStack[this._typeStack.length - 1];
      }
    };

    _proto.getParentType = function getParentType() {
      if (this._parentTypeStack.length > 0) {
        return this._parentTypeStack[this._parentTypeStack.length - 1];
      }
    };

    _proto.getInputType = function getInputType() {
      if (this._inputTypeStack.length > 0) {
        return this._inputTypeStack[this._inputTypeStack.length - 1];
      }
    };

    _proto.getParentInputType = function getParentInputType() {
      if (this._inputTypeStack.length > 1) {
        return this._inputTypeStack[this._inputTypeStack.length - 2];
      }
    };

    _proto.getFieldDef = function getFieldDef() {
      if (this._fieldDefStack.length > 0) {
        return this._fieldDefStack[this._fieldDefStack.length - 1];
      }
    };

    _proto.getDefaultValue = function getDefaultValue() {
      if (this._defaultValueStack.length > 0) {
        return this._defaultValueStack[this._defaultValueStack.length - 1];
      }
    };

    _proto.getDirective = function getDirective() {
      return this._directive;
    };

    _proto.getArgument = function getArgument() {
      return this._argument;
    };

    _proto.getEnumValue = function getEnumValue() {
      return this._enumValue;
    };

    _proto.enter = function enter(node) {
      var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
      // any assumptions of a valid schema to ensure runtime types are properly
      // checked before continuing since TypeInfo is used as part of validation
      // which occurs before guarantees of schema and document validity.

      switch (node.kind) {
        case Kind.SELECTION_SET:
          {
            var namedType = getNamedType(this.getType());

            this._parentTypeStack.push(isCompositeType(namedType) ? namedType : undefined);

            break;
          }

        case Kind.FIELD:
          {
            var parentType = this.getParentType();
            var fieldDef;
            var fieldType;

            if (parentType) {
              fieldDef = this._getFieldDef(schema, parentType, node);

              if (fieldDef) {
                fieldType = fieldDef.type;
              }
            }

            this._fieldDefStack.push(fieldDef);

            this._typeStack.push(isOutputType(fieldType) ? fieldType : undefined);

            break;
          }

        case Kind.DIRECTIVE:
          this._directive = schema.getDirective(node.name.value);
          break;

        case Kind.OPERATION_DEFINITION:
          {
            var type;

            if (node.operation === 'query') {
              type = schema.getQueryType();
            } else if (node.operation === 'mutation') {
              type = schema.getMutationType();
            } else if (node.operation === 'subscription') {
              type = schema.getSubscriptionType();
            }

            this._typeStack.push(isObjectType(type) ? type : undefined);

            break;
          }

        case Kind.INLINE_FRAGMENT:
        case Kind.FRAGMENT_DEFINITION:
          {
            var typeConditionAST = node.typeCondition;
            var outputType = typeConditionAST ? typeFromAST(schema, typeConditionAST) : getNamedType(this.getType());

            this._typeStack.push(isOutputType(outputType) ? outputType : undefined);

            break;
          }

        case Kind.VARIABLE_DEFINITION:
          {
            var inputType = typeFromAST(schema, node.type);

            this._inputTypeStack.push(isInputType(inputType) ? inputType : undefined);

            break;
          }

        case Kind.ARGUMENT:
          {
            var argDef;
            var argType;
            var fieldOrDirective = this.getDirective() || this.getFieldDef();

            if (fieldOrDirective) {
              argDef = find$1(fieldOrDirective.args, function (arg) {
                return arg.name === node.name.value;
              });

              if (argDef) {
                argType = argDef.type;
              }
            }

            this._argument = argDef;

            this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

            this._inputTypeStack.push(isInputType(argType) ? argType : undefined);

            break;
          }

        case Kind.LIST:
          {
            var listType = getNullableType(this.getInputType());
            var itemType = isListType(listType) ? listType.ofType : listType; // List positions never have a default value.

            this._defaultValueStack.push(undefined);

            this._inputTypeStack.push(isInputType(itemType) ? itemType : undefined);

            break;
          }

        case Kind.OBJECT_FIELD:
          {
            var objectType = getNamedType(this.getInputType());
            var inputFieldType;
            var inputField;

            if (isInputObjectType(objectType)) {
              inputField = objectType.getFields()[node.name.value];

              if (inputField) {
                inputFieldType = inputField.type;
              }
            }

            this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

            this._inputTypeStack.push(isInputType(inputFieldType) ? inputFieldType : undefined);

            break;
          }

        case Kind.ENUM:
          {
            var enumType = getNamedType(this.getInputType());
            var enumValue;

            if (isEnumType(enumType)) {
              enumValue = enumType.getValue(node.value);
            }

            this._enumValue = enumValue;
            break;
          }
      }
    };

    _proto.leave = function leave(node) {
      switch (node.kind) {
        case Kind.SELECTION_SET:
          this._parentTypeStack.pop();

          break;

        case Kind.FIELD:
          this._fieldDefStack.pop();

          this._typeStack.pop();

          break;

        case Kind.DIRECTIVE:
          this._directive = null;
          break;

        case Kind.OPERATION_DEFINITION:
        case Kind.INLINE_FRAGMENT:
        case Kind.FRAGMENT_DEFINITION:
          this._typeStack.pop();

          break;

        case Kind.VARIABLE_DEFINITION:
          this._inputTypeStack.pop();

          break;

        case Kind.ARGUMENT:
          this._argument = null;

          this._defaultValueStack.pop();

          this._inputTypeStack.pop();

          break;

        case Kind.LIST:
        case Kind.OBJECT_FIELD:
          this._defaultValueStack.pop();

          this._inputTypeStack.pop();

          break;

        case Kind.ENUM:
          this._enumValue = null;
          break;
      }
    };

    return TypeInfo;
  }();
  /**
   * Not exactly the same as the executor's definition of getFieldDef, in this
   * statically evaluated environment we do not always have an Object type,
   * and need to handle Interface and Union types.
   */

  function getFieldDef(schema, parentType, fieldNode) {
    var name = fieldNode.name.value;

    if (name === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
      return SchemaMetaFieldDef;
    }

    if (name === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
      return TypeMetaFieldDef;
    }

    if (name === TypeNameMetaFieldDef.name && isCompositeType(parentType)) {
      return TypeNameMetaFieldDef;
    }

    if (isObjectType(parentType) || isInterfaceType(parentType)) {
      return parentType.getFields()[name];
    }
  }

  /**
   * Produces a JavaScript value given a GraphQL Value AST.
   *
   * A GraphQL type must be provided, which will be used to interpret different
   * GraphQL Value literals.
   *
   * Returns `undefined` when the value could not be validly coerced according to
   * the provided type.
   *
   * | GraphQL Value        | JSON Value    |
   * | -------------------- | ------------- |
   * | Input Object         | Object        |
   * | List                 | Array         |
   * | Boolean              | Boolean       |
   * | String               | String        |
   * | Int / Float          | Number        |
   * | Enum Value           | Mixed         |
   * | NullValue            | null          |
   *
   */

  function valueFromAST(valueNode, type, variables) {
    if (!valueNode) {
      // When there is no node, then there is also no value.
      // Importantly, this is different from returning the value null.
      return;
    }

    if (isNonNullType(type)) {
      if (valueNode.kind === Kind.NULL) {
        return; // Invalid: intentionally return no value.
      }

      return valueFromAST(valueNode, type.ofType, variables);
    }

    if (valueNode.kind === Kind.NULL) {
      // This is explicitly returning the value null.
      return null;
    }

    if (valueNode.kind === Kind.VARIABLE) {
      var variableName = valueNode.name.value;

      if (!variables || isInvalid(variables[variableName])) {
        // No valid return value.
        return;
      }

      var variableValue = variables[variableName];

      if (variableValue === null && isNonNullType(type)) {
        return; // Invalid: intentionally return no value.
      } // Note: This does no further checking that this variable is correct.
      // This assumes that this query has been validated and the variable
      // usage here is of the correct type.


      return variableValue;
    }

    if (isListType(type)) {
      var itemType = type.ofType;

      if (valueNode.kind === Kind.LIST) {
        var coercedValues = [];

        for (var _i2 = 0, _valueNode$values2 = valueNode.values; _i2 < _valueNode$values2.length; _i2++) {
          var itemNode = _valueNode$values2[_i2];

          if (isMissingVariable(itemNode, variables)) {
            // If an array contains a missing variable, it is either coerced to
            // null or if the item type is non-null, it considered invalid.
            if (isNonNullType(itemType)) {
              return; // Invalid: intentionally return no value.
            }

            coercedValues.push(null);
          } else {
            var itemValue = valueFromAST(itemNode, itemType, variables);

            if (isInvalid(itemValue)) {
              return; // Invalid: intentionally return no value.
            }

            coercedValues.push(itemValue);
          }
        }

        return coercedValues;
      }

      var coercedValue = valueFromAST(valueNode, itemType, variables);

      if (isInvalid(coercedValue)) {
        return; // Invalid: intentionally return no value.
      }

      return [coercedValue];
    }

    if (isInputObjectType(type)) {
      if (valueNode.kind !== Kind.OBJECT) {
        return; // Invalid: intentionally return no value.
      }

      var coercedObj = Object.create(null);
      var fieldNodes = keyMap(valueNode.fields, function (field) {
        return field.name.value;
      });

      for (var _i4 = 0, _objectValues2 = objectValues(type.getFields()); _i4 < _objectValues2.length; _i4++) {
        var field = _objectValues2[_i4];
        var fieldNode = fieldNodes[field.name];

        if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
          if (field.defaultValue !== undefined) {
            coercedObj[field.name] = field.defaultValue;
          } else if (isNonNullType(field.type)) {
            return; // Invalid: intentionally return no value.
          }

          continue;
        }

        var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

        if (isInvalid(fieldValue)) {
          return; // Invalid: intentionally return no value.
        }

        coercedObj[field.name] = fieldValue;
      }

      return coercedObj;
    }

    if (isEnumType(type)) {
      if (valueNode.kind !== Kind.ENUM) {
        return; // Invalid: intentionally return no value.
      }

      var enumValue = type.getValue(valueNode.value);

      if (!enumValue) {
        return; // Invalid: intentionally return no value.
      }

      return enumValue.value;
    }

    /* istanbul ignore else */
    if (isScalarType(type)) {
      // Scalars fulfill parsing a literal value via parseLiteral().
      // Invalid values represent a failure to parse correctly, in which case
      // no value is returned.
      var result;

      try {
        result = type.parseLiteral(valueNode, variables);
      } catch (_error) {
        return; // Invalid: intentionally return no value.
      }

      if (isInvalid(result)) {
        return; // Invalid: intentionally return no value.
      }

      return result;
    } // Not reachable. All possible input types have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected input type: ' + inspect(type));
  } // Returns true if the provided valueNode is a variable which is not defined
  // in the set of variables.

  function isMissingVariable(valueNode, variables) {
    return valueNode.kind === Kind.VARIABLE && (!variables || isInvalid(variables[valueNode.name.value]));
  }

  function getIntrospectionQuery(options) {
    var descriptions = !(options && options.descriptions === false);
    return "\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(descriptions ? 'description' : '', "\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions ? 'description' : '', "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions ? 'description' : '', "\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
  }
  /**
   * Deprecated, call getIntrospectionQuery directly.
   *
   * This function will be removed in v15
   */

  getIntrospectionQuery();

  /**
   * Build a GraphQLSchema for use by client tools.
   *
   * Given the result of a client running the introspection query, creates and
   * returns a GraphQLSchema instance which can be then used with all graphql-js
   * tools, but cannot be used to execute a query, as introspection does not
   * represent the "resolver", "parse" or "serialize" functions or any other
   * server-internal mechanisms.
   *
   * This function expects a complete introspection result. Don't forget to check
   * the "errors" field of a server response before calling this function.
   */
  function buildClientSchema(introspection, options) {
    isObjectLike(introspection) && isObjectLike(introspection.__schema) || devAssert(0, 'Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ' + inspect(introspection)); // Get the schema from the introspection result.

    var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

    var typeMap = keyValMap(schemaIntrospection.types, function (typeIntrospection) {
      return typeIntrospection.name;
    }, function (typeIntrospection) {
      return buildType(typeIntrospection);
    });

    for (var _i2 = 0, _ref2 = [].concat(specifiedScalarTypes, introspectionTypes); _i2 < _ref2.length; _i2++) {
      var stdType = _ref2[_i2];

      if (typeMap[stdType.name]) {
        typeMap[stdType.name] = stdType;
      }
    } // Get the root Query, Mutation, and Subscription types.


    var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
    var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
    var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
    // directives were not queried for.

    var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

    return new GraphQLSchema({
      query: queryType,
      mutation: mutationType,
      subscription: subscriptionType,
      types: objectValues(typeMap),
      directives: directives,
      assumeValid: options && options.assumeValid,
      allowedLegacyNames: options && options.allowedLegacyNames
    }); // Given a type reference in introspection, return the GraphQLType instance.
    // preferring cached instances before building new instances.

    function getType(typeRef) {
      if (typeRef.kind === TypeKind.LIST) {
        var itemRef = typeRef.ofType;

        if (!itemRef) {
          throw new Error('Decorated type deeper than introspection query.');
        }

        return GraphQLList(getType(itemRef));
      }

      if (typeRef.kind === TypeKind.NON_NULL) {
        var nullableRef = typeRef.ofType;

        if (!nullableRef) {
          throw new Error('Decorated type deeper than introspection query.');
        }

        var nullableType = getType(nullableRef);
        return GraphQLNonNull(assertNullableType(nullableType));
      }

      if (!typeRef.name) {
        throw new Error('Unknown type reference: ' + inspect(typeRef));
      }

      return getNamedType(typeRef.name);
    }

    function getNamedType(typeName) {
      var type = typeMap[typeName];

      if (!type) {
        throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
      }

      return type;
    }

    function getInputType(typeRef) {
      var type = getType(typeRef);

      if (isInputType(type)) {
        return type;
      }

      throw new Error('Introspection must provide input type for arguments, but received: ' + inspect(type) + '.');
    }

    function getOutputType(typeRef) {
      var type = getType(typeRef);

      if (isOutputType(type)) {
        return type;
      }

      throw new Error('Introspection must provide output type for fields, but received: ' + inspect(type) + '.');
    }

    function getObjectType(typeRef) {
      var type = getType(typeRef);
      return assertObjectType(type);
    }

    function getInterfaceType(typeRef) {
      var type = getType(typeRef);
      return assertInterfaceType(type);
    } // Given a type's introspection result, construct the correct
    // GraphQLType instance.


    function buildType(type) {
      if (type && type.name && type.kind) {
        switch (type.kind) {
          case TypeKind.SCALAR:
            return buildScalarDef(type);

          case TypeKind.OBJECT:
            return buildObjectDef(type);

          case TypeKind.INTERFACE:
            return buildInterfaceDef(type);

          case TypeKind.UNION:
            return buildUnionDef(type);

          case TypeKind.ENUM:
            return buildEnumDef(type);

          case TypeKind.INPUT_OBJECT:
            return buildInputObjectDef(type);
        }
      }

      throw new Error('Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema:' + inspect(type));
    }

    function buildScalarDef(scalarIntrospection) {
      return new GraphQLScalarType({
        name: scalarIntrospection.name,
        description: scalarIntrospection.description
      });
    }

    function buildObjectDef(objectIntrospection) {
      if (!objectIntrospection.interfaces) {
        throw new Error('Introspection result missing interfaces: ' + inspect(objectIntrospection));
      }

      return new GraphQLObjectType({
        name: objectIntrospection.name,
        description: objectIntrospection.description,
        interfaces: function interfaces() {
          return objectIntrospection.interfaces.map(getInterfaceType);
        },
        fields: function fields() {
          return buildFieldDefMap(objectIntrospection);
        }
      });
    }

    function buildInterfaceDef(interfaceIntrospection) {
      return new GraphQLInterfaceType({
        name: interfaceIntrospection.name,
        description: interfaceIntrospection.description,
        fields: function fields() {
          return buildFieldDefMap(interfaceIntrospection);
        }
      });
    }

    function buildUnionDef(unionIntrospection) {
      if (!unionIntrospection.possibleTypes) {
        throw new Error('Introspection result missing possibleTypes: ' + inspect(unionIntrospection));
      }

      return new GraphQLUnionType({
        name: unionIntrospection.name,
        description: unionIntrospection.description,
        types: function types() {
          return unionIntrospection.possibleTypes.map(getObjectType);
        }
      });
    }

    function buildEnumDef(enumIntrospection) {
      if (!enumIntrospection.enumValues) {
        throw new Error('Introspection result missing enumValues: ' + inspect(enumIntrospection));
      }

      return new GraphQLEnumType({
        name: enumIntrospection.name,
        description: enumIntrospection.description,
        values: keyValMap(enumIntrospection.enumValues, function (valueIntrospection) {
          return valueIntrospection.name;
        }, function (valueIntrospection) {
          return {
            description: valueIntrospection.description,
            deprecationReason: valueIntrospection.deprecationReason
          };
        })
      });
    }

    function buildInputObjectDef(inputObjectIntrospection) {
      if (!inputObjectIntrospection.inputFields) {
        throw new Error('Introspection result missing inputFields: ' + inspect(inputObjectIntrospection));
      }

      return new GraphQLInputObjectType({
        name: inputObjectIntrospection.name,
        description: inputObjectIntrospection.description,
        fields: function fields() {
          return buildInputValueDefMap(inputObjectIntrospection.inputFields);
        }
      });
    }

    function buildFieldDefMap(typeIntrospection) {
      if (!typeIntrospection.fields) {
        throw new Error('Introspection result missing fields: ' + inspect(typeIntrospection));
      }

      return keyValMap(typeIntrospection.fields, function (fieldIntrospection) {
        return fieldIntrospection.name;
      }, function (fieldIntrospection) {
        if (!fieldIntrospection.args) {
          throw new Error('Introspection result missing field args: ' + inspect(fieldIntrospection));
        }

        return {
          description: fieldIntrospection.description,
          deprecationReason: fieldIntrospection.deprecationReason,
          type: getOutputType(fieldIntrospection.type),
          args: buildInputValueDefMap(fieldIntrospection.args)
        };
      });
    }

    function buildInputValueDefMap(inputValueIntrospections) {
      return keyValMap(inputValueIntrospections, function (inputValue) {
        return inputValue.name;
      }, buildInputValue);
    }

    function buildInputValue(inputValueIntrospection) {
      var type = getInputType(inputValueIntrospection.type);
      var defaultValue = inputValueIntrospection.defaultValue ? valueFromAST(parseValue(inputValueIntrospection.defaultValue), type) : undefined;
      return {
        description: inputValueIntrospection.description,
        type: type,
        defaultValue: defaultValue
      };
    }

    function buildDirective(directiveIntrospection) {
      if (!directiveIntrospection.args) {
        throw new Error('Introspection result missing directive args: ' + inspect(directiveIntrospection));
      }

      if (!directiveIntrospection.locations) {
        throw new Error('Introspection result missing directive locations: ' + inspect(directiveIntrospection));
      }

      return new GraphQLDirective({
        name: directiveIntrospection.name,
        description: directiveIntrospection.description,
        locations: directiveIntrospection.locations.slice(),
        args: buildInputValueDefMap(directiveIntrospection.args)
      });
    }
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var toggleSelection = function () {
    var selection = document.getSelection();

    if (!selection.rangeCount) {
      return function () {};
    }

    var active = document.activeElement;
    var ranges = [];

    for (var i = 0; i < selection.rangeCount; i++) {
      ranges.push(selection.getRangeAt(i));
    }

    switch (active.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case 'INPUT':
      case 'TEXTAREA':
        active.blur();
        break;

      default:
        active = null;
        break;
    }

    selection.removeAllRanges();
    return function () {
      selection.type === 'Caret' && selection.removeAllRanges();

      if (!selection.rangeCount) {
        ranges.forEach(function (range) {
          selection.addRange(range);
        });
      }

      active && active.focus();
    };
  };

  var deselectCurrent = toggleSelection;

  var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    "default": "Text"
  };
  var defaultMessage = "Copy to clipboard: #{key}, Enter";

  function format$1(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
  }

  function copy$1(text, options) {
    var debug,
        message,
        reselectPrevious,
        range,
        selection,
        mark,
        success = false;

    if (!options) {
      options = {};
    }

    debug = options.debug || false;

    try {
      reselectPrevious = deselectCurrent();
      range = document.createRange();
      selection = document.getSelection();
      mark = document.createElement("span");
      mark.textContent = text; // reset user styles for span element

      mark.style.all = "unset"; // prevents scrolling to the end of the page

      mark.style.position = "fixed";
      mark.style.top = 0;
      mark.style.clip = "rect(0, 0, 0, 0)"; // used to preserve spaces and line breaks

      mark.style.whiteSpace = "pre"; // do not inherit user-select (it may be `none`)

      mark.style.webkitUserSelect = "text";
      mark.style.MozUserSelect = "text";
      mark.style.msUserSelect = "text";
      mark.style.userSelect = "text";
      mark.addEventListener("copy", function (e) {
        e.stopPropagation();

        if (options.format) {
          e.preventDefault();

          if (typeof e.clipboardData === "undefined") {
            // IE 11
            debug && console.warn("unable to use e.clipboardData");
            debug && console.warn("trying IE specific stuff");
            window.clipboardData.clearData();
            var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
            window.clipboardData.setData(format, text);
          } else {
            // all other browsers
            e.clipboardData.clearData();
            e.clipboardData.setData(options.format, text);
          }
        }

        if (options.onCopy) {
          e.preventDefault();
          options.onCopy(e.clipboardData);
        }
      });
      document.body.appendChild(mark);
      range.selectNodeContents(mark);
      selection.addRange(range);
      var successful = document.execCommand("copy");

      if (!successful) {
        throw new Error("copy command was unsuccessful");
      }

      success = true;
    } catch (err) {
      debug && console.error("unable to copy using execCommand: ", err);
      debug && console.warn("trying IE specific stuff");

      try {
        window.clipboardData.setData(options.format || "text", text);
        options.onCopy && options.onCopy(window.clipboardData);
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using clipboardData: ", err);
        debug && console.error("falling back to prompt");
        message = format$1("message" in options ? options.message : defaultMessage);
        window.prompt(message, text);
      }
    } finally {
      if (selection) {
        if (typeof selection.removeRange == "function") {
          selection.removeRange(range);
        } else {
          selection.removeAllRanges();
        }
      }

      if (mark) {
        document.body.removeChild(mark);
      }

      reselectPrevious();
    }

    return success;
  }

  var copyToClipboard = copy$1;

  var nullthrows$2 = {exports: {}};

  function nullthrows(x, message) {
    if (x != null) {
      return x;
    }

    var error = new Error(message !== undefined ? message : 'Got unexpected ' + x);
    error.framesToPop = 1; // Skip nullthrows's own stack frame.

    throw error;
  }

  nullthrows$2.exports = nullthrows;
  nullthrows$2.exports.default = nullthrows;
  Object.defineProperty(nullthrows$2.exports, '__esModule', {
    value: true
  });

  var nullthrows$1 = /*@__PURE__*/getDefaultExportFromCjs(nullthrows$2.exports);

  var getFragmentDependenciesForAST = function getFragmentDependenciesForAST(parsedOperation, fragmentDefinitions) {
    if (!fragmentDefinitions) {
      return [];
    }

    var existingFrags = new Map();
    var referencedFragNames = new Set();
    visit(parsedOperation, {
      FragmentDefinition: function FragmentDefinition(node) {
        existingFrags.set(node.name.value, true);
      },
      FragmentSpread: function FragmentSpread(node) {
        if (!referencedFragNames.has(node.name.value)) {
          referencedFragNames.add(node.name.value);
        }
      }
    });
    var asts = new Set();
    referencedFragNames.forEach(function (name) {
      if (!existingFrags.has(name) && fragmentDefinitions.has(name)) {
        asts.add(nullthrows$1(fragmentDefinitions.get(name)));
      }
    });
    var referencedFragments = [];
    asts.forEach(function (ast) {
      visit(ast, {
        FragmentSpread: function FragmentSpread(node) {
          if (!referencedFragNames.has(node.name.value) && fragmentDefinitions.get(node.name.value)) {
            asts.add(nullthrows$1(fragmentDefinitions.get(node.name.value)));
            referencedFragNames.add(node.name.value);
          }
        }
      });

      if (!existingFrags.has(ast.name.value)) {
        referencedFragments.push(ast);
      }
    });
    return referencedFragments;
  };

  var __extends$f = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var ExecuteButton = function (_super) {
    __extends$f(ExecuteButton, _super);

    function ExecuteButton(props) {
      var _this = _super.call(this, props) || this;

      _this._onClick = function () {
        if (_this.props.isRunning) {
          _this.props.onStop();
        } else {
          _this.props.onRun();
        }
      };

      _this._onOptionSelected = function (operation) {
        _this.setState({
          optionsOpen: false
        });

        _this.props.onRun(operation.name && operation.name.value);
      };

      _this._onOptionsOpen = function (downEvent) {
        var initialPress = true;
        var downTarget = downEvent.currentTarget;

        _this.setState({
          highlight: null,
          optionsOpen: true
        });

        var _onMouseUp = function onMouseUp(upEvent) {
          var _a;

          if (initialPress && upEvent.target === downTarget) {
            initialPress = false;
          } else {
            document.removeEventListener('mouseup', _onMouseUp);
            _onMouseUp = null;
            var isOptionsMenuClicked = upEvent.currentTarget && ((_a = downTarget.parentNode) === null || _a === void 0 ? void 0 : _a.compareDocumentPosition(upEvent.currentTarget)) && Node.DOCUMENT_POSITION_CONTAINED_BY;

            if (!isOptionsMenuClicked) {
              _this.setState({
                optionsOpen: false
              });
            }
          }
        };

        document.addEventListener('mouseup', _onMouseUp);
      };

      _this.state = {
        optionsOpen: false,
        highlight: null
      };
      return _this;
    }

    ExecuteButton.prototype.render = function () {
      var _this = this;

      var operations = this.props.operations || [];
      var optionsOpen = this.state.optionsOpen;
      var hasOptions = operations && operations.length > 1;
      var options = null;

      if (hasOptions && optionsOpen) {
        var highlight_1 = this.state.highlight;
        options = /*#__PURE__*/React__default['default'].createElement("ul", {
          className: "execute-options"
        }, operations.map(function (operation, i) {
          var opName = operation.name ? operation.name.value : "<Unnamed " + operation.operation + ">";
          return /*#__PURE__*/React__default['default'].createElement("li", {
            key: opName + "-" + i,
            className: operation === highlight_1 ? 'selected' : undefined,
            onMouseOver: function onMouseOver() {
              return _this.setState({
                highlight: operation
              });
            },
            onMouseOut: function onMouseOut() {
              return _this.setState({
                highlight: null
              });
            },
            onMouseUp: function onMouseUp() {
              return _this._onOptionSelected(operation);
            }
          }, opName);
        }));
      }

      var onClick;

      if (this.props.isRunning || !hasOptions) {
        onClick = this._onClick;
      }

      var onMouseDown = function onMouseDown() {};

      if (!this.props.isRunning && hasOptions && !optionsOpen) {
        onMouseDown = this._onOptionsOpen;
      }

      var pathJSX = this.props.isRunning ? /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M 10 10 L 23 10 L 23 23 L 10 23 z"
      }) : /*#__PURE__*/React__default['default'].createElement("path", {
        d: "M 11 9 L 24 16 L 11 23 z"
      });
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "execute-button-wrap"
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "execute-button",
        onMouseDown: onMouseDown,
        onClick: onClick,
        title: "Execute Query (Ctrl-Enter)"
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: "34",
        height: "34"
      }, pathJSX)), options);
    };

    return ExecuteButton;
  }(React__default['default'].Component);

  var __extends$e = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  function tokenToURL(token) {
    if (token.type !== 'string') {
      return;
    }

    var value = token.string.slice(1).slice(0, -1).trim();

    try {
      var location_1 = window.location;
      return new URL(value, location_1.protocol + '//' + location_1.host);
    } catch (err) {
      return;
    }
  }

  function isImageURL(url) {
    return /(bmp|gif|jpeg|jpg|png|svg)$/.test(url.pathname);
  }

  var ImagePreview = function (_super) {
    __extends$e(ImagePreview, _super);

    function ImagePreview() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this._node = null;
      _this.state = {
        width: null,
        height: null,
        src: null,
        mime: null
      };
      return _this;
    }

    ImagePreview.shouldRender = function (token) {
      var url = tokenToURL(token);
      return url ? isImageURL(url) : false;
    };

    ImagePreview.prototype.componentDidMount = function () {
      this._updateMetadata();
    };

    ImagePreview.prototype.componentDidUpdate = function () {
      this._updateMetadata();
    };

    ImagePreview.prototype.render = function () {
      var _this = this;

      var _a;

      var dims = null;

      if (this.state.width !== null && this.state.height !== null) {
        var dimensions = this.state.width + 'x' + this.state.height;

        if (this.state.mime !== null) {
          dimensions += ' ' + this.state.mime;
        }

        dims = /*#__PURE__*/React__default['default'].createElement("div", null, dimensions);
      }

      return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("img", {
        onLoad: function onLoad() {
          return _this._updateMetadata();
        },
        ref: function ref(node) {
          _this._node = node;
        },
        src: (_a = tokenToURL(this.props.token)) === null || _a === void 0 ? void 0 : _a.href
      }), dims);
    };

    ImagePreview.prototype._updateMetadata = function () {
      var _this = this;

      if (!this._node) {
        return;
      }

      var width = this._node.naturalWidth;
      var height = this._node.naturalHeight;
      var src = this._node.src;

      if (src !== this.state.src) {
        this.setState({
          src: src
        });
        fetch(src, {
          method: 'HEAD'
        }).then(function (response) {
          _this.setState({
            mime: response.headers.get('Content-Type')
          });
        });
      }

      if (width !== this.state.width || height !== this.state.height) {
        this.setState({
          height: height,
          width: width
        });
      }
    };

    return ImagePreview;
  }(React__default['default'].Component);

  var __extends$d = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var ToolbarButton = function (_super) {
    __extends$d(ToolbarButton, _super);

    function ToolbarButton(props) {
      var _this = _super.call(this, props) || this;

      _this.handleClick = function () {
        try {
          _this.props.onClick();

          _this.setState({
            error: null
          });
        } catch (error) {
          _this.setState({
            error: error
          });
        }
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    ToolbarButton.prototype.render = function () {
      var error = this.state.error;
      return /*#__PURE__*/React__default['default'].createElement("button", {
        className: 'toolbar-button' + (error ? ' error' : ''),
        onClick: this.handleClick,
        title: error ? error.message : this.props.title,
        "aria-invalid": error ? 'true' : 'false'
      }, this.props.label);
    };

    return ToolbarButton;
  }(React__default['default'].Component);

  function ToolbarGroup(_a) {
    var children = _a.children;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "toolbar-button-group"
    }, children);
  }

  var __extends$c = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var ToolbarMenu = function (_super) {
    __extends$c(ToolbarMenu, _super);

    function ToolbarMenu(props) {
      var _this = _super.call(this, props) || this;

      _this._node = null;
      _this._listener = null;

      _this.handleOpen = function (e) {
        preventDefault$1(e);

        _this.setState({
          visible: true
        });

        _this._subscribe();
      };

      _this.state = {
        visible: false
      };
      return _this;
    }

    ToolbarMenu.prototype.componentWillUnmount = function () {
      this._release();
    };

    ToolbarMenu.prototype.render = function () {
      var _this = this;

      var visible = this.state.visible;
      return /*#__PURE__*/React__default['default'].createElement("a", {
        className: "toolbar-menu toolbar-button",
        onClick: this.handleOpen.bind(this),
        onMouseDown: preventDefault$1,
        ref: function ref(node) {
          if (node) {
            _this._node = node;
          }
        },
        title: this.props.title
      }, this.props.label, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: "14",
        height: "8"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        fill: "#666",
        d: "M 5 1.5 L 14 1.5 L 9.5 7 z"
      })), /*#__PURE__*/React__default['default'].createElement("ul", {
        className: 'toolbar-menu-items' + (visible ? ' open' : '')
      }, this.props.children));
    };

    ToolbarMenu.prototype._subscribe = function () {
      if (!this._listener) {
        this._listener = this.handleClick.bind(this);
        document.addEventListener('click', this._listener);
      }
    };

    ToolbarMenu.prototype._release = function () {
      if (this._listener) {
        document.removeEventListener('click', this._listener);
        this._listener = null;
      }
    };

    ToolbarMenu.prototype.handleClick = function (e) {
      if (this._node !== e.target) {
        e.preventDefault();
        this.setState({
          visible: false
        });

        this._release();
      }
    };

    return ToolbarMenu;
  }(React__default['default'].Component);
  var ToolbarMenuItem = function ToolbarMenuItem(_a) {
    var onSelect = _a.onSelect,
        title = _a.title,
        label = _a.label;
    return /*#__PURE__*/React__default['default'].createElement("li", {
      onMouseOver: function onMouseOver(e) {
        e.currentTarget.className = 'hover';
      },
      onMouseOut: function onMouseOut(e) {
        e.currentTarget.className = '';
      },
      onMouseDown: preventDefault$1,
      onMouseUp: onSelect,
      title: title
    }, label);
  };

  function preventDefault$1(e) {
    e.preventDefault();
  }

  // Utilities

  function _class$1(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isString$1(obj) {
    return _class$1(obj) === '[object String]';
  }

  var _hasOwnProperty = Object.prototype.hasOwnProperty;

  function has$2(object, key) {
    return _hasOwnProperty.call(object, key);
  } // Merge objects
  //


  function assign$2(obj
  /*from1, from2, from3, ...*/
  ) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function (source) {
      if (!source) {
        return;
      }

      if (_typeof$3(source) !== 'object') {
        throw new TypeError(source + 'must be object');
      }

      Object.keys(source).forEach(function (key) {
        obj[key] = source[key];
      });
    });
    return obj;
  } // Remove element from array and put another array at those position.
  // Useful for some operations with tokens


  function arrayReplaceAt$1(src, pos, newElements) {
    return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
  } ////////////////////////////////////////////////////////////////////////////////


  function isValidEntityCode$1(c) {
    /*eslint no-bitwise:0*/
    // broken sequence
    if (c >= 0xD800 && c <= 0xDFFF) {
      return false;
    } // never used


    if (c >= 0xFDD0 && c <= 0xFDEF) {
      return false;
    }

    if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) {
      return false;
    } // control codes


    if (c >= 0x00 && c <= 0x08) {
      return false;
    }

    if (c === 0x0B) {
      return false;
    }

    if (c >= 0x0E && c <= 0x1F) {
      return false;
    }

    if (c >= 0x7F && c <= 0x9F) {
      return false;
    } // out of range


    if (c > 0x10FFFF) {
      return false;
    }

    return true;
  }

  function fromCodePoint$1(c) {
    /*eslint no-bitwise:0*/
    if (c > 0xffff) {
      c -= 0x10000;
      var surrogate1 = 0xd800 + (c >> 10),
          surrogate2 = 0xdc00 + (c & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    }

    return String.fromCharCode(c);
  }

  var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
  var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');
  var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

  var entities$2 = require('./entities');

  function replaceEntityPattern(match, name) {
    var code = 0;

    if (has$2(entities$2, name)) {
      return entities$2[name];
    }

    if (name.charCodeAt(0) === 0x23
    /* # */
    && DIGITAL_ENTITY_TEST_RE.test(name)) {
      code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

      if (isValidEntityCode$1(code)) {
        return fromCodePoint$1(code);
      }
    }

    return match;
  }
  /*function replaceEntities(str) {
    if (str.indexOf('&') < 0) { return str; }

    return str.replace(ENTITY_RE, replaceEntityPattern);
  }*/


  function unescapeMd(str) {
    if (str.indexOf('\\') < 0) {
      return str;
    }

    return str.replace(UNESCAPE_MD_RE, '$1');
  }

  function unescapeAll$3(str) {
    if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) {
      return str;
    }

    return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
      if (escaped) {
        return escaped;
      }

      return replaceEntityPattern(match, entity);
    });
  } ////////////////////////////////////////////////////////////////////////////////


  var HTML_ESCAPE_TEST_RE = /[&<>"]/;
  var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
  var HTML_REPLACEMENTS = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };

  function replaceUnsafeChar(ch) {
    return HTML_REPLACEMENTS[ch];
  }

  function escapeHtml$1(str) {
    if (HTML_ESCAPE_TEST_RE.test(str)) {
      return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
    }

    return str;
  } ////////////////////////////////////////////////////////////////////////////////


  var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

  function escapeRE$1(str) {
    return str.replace(REGEXP_ESCAPE_RE, '\\$&');
  } ////////////////////////////////////////////////////////////////////////////////


  function isSpace$b(code) {
    switch (code) {
      case 0x09:
      case 0x20:
        return true;
    }

    return false;
  } // Zs (unicode class) || [\t\f\v\r\n]


  function isWhiteSpace$2(code) {
    if (code >= 0x2000 && code <= 0x200A) {
      return true;
    }

    switch (code) {
      case 0x09: // \t

      case 0x0A: // \n

      case 0x0B: // \v

      case 0x0C: // \f

      case 0x0D: // \r

      case 0x20:
      case 0xA0:
      case 0x1680:
      case 0x202F:
      case 0x205F:
      case 0x3000:
        return true;
    }

    return false;
  } ////////////////////////////////////////////////////////////////////////////////

  /*eslint-disable max-len*/


  var UNICODE_PUNCT_RE = require('uc.micro/categories/P/regex'); // Currently without astral characters support.


  function isPunctChar$2(ch) {
    return UNICODE_PUNCT_RE.test(ch);
  } // Markdown ASCII punctuation characters.
  //
  // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
  // http://spec.commonmark.org/0.15/#ascii-punctuation-character
  //
  // Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
  //


  function isMdAsciiPunct$2(ch) {
    switch (ch) {
      case 0x21
      /* ! */
      :
      case 0x22
      /* " */
      :
      case 0x23
      /* # */
      :
      case 0x24
      /* $ */
      :
      case 0x25
      /* % */
      :
      case 0x26
      /* & */
      :
      case 0x27
      /* ' */
      :
      case 0x28
      /* ( */
      :
      case 0x29
      /* ) */
      :
      case 0x2A
      /* * */
      :
      case 0x2B
      /* + */
      :
      case 0x2C
      /* , */
      :
      case 0x2D
      /* - */
      :
      case 0x2E
      /* . */
      :
      case 0x2F
      /* / */
      :
      case 0x3A
      /* : */
      :
      case 0x3B
      /* ; */
      :
      case 0x3C
      /* < */
      :
      case 0x3D
      /* = */
      :
      case 0x3E
      /* > */
      :
      case 0x3F
      /* ? */
      :
      case 0x40
      /* @ */
      :
      case 0x5B
      /* [ */
      :
      case 0x5C
      /* \ */
      :
      case 0x5D
      /* ] */
      :
      case 0x5E
      /* ^ */
      :
      case 0x5F
      /* _ */
      :
      case 0x60
      /* ` */
      :
      case 0x7B
      /* { */
      :
      case 0x7C
      /* | */
      :
      case 0x7D
      /* } */
      :
      case 0x7E
      /* ~ */
      :
        return true;

      default:
        return false;
    }
  } // Hepler to unify [reference labels].
  //


  function normalizeReference$3(str) {
    // Trim and collapse whitespace
    //
    str = str.trim().replace(/\s+/g, ' '); // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
    // fixed in v12 (couldn't find any details).
    //
    // So treat this one as a special case
    // (remove this when node v10 is no longer supported).
    //

    if ('ẞ'.toLowerCase() === 'Ṿ') {
      str = str.replace(/ẞ/g, 'ß');
    } // .toLowerCase().toUpperCase() should get rid of all differences
    // between letter variants.
    //
    // Simple .toLowerCase() doesn't normalize 125 code points correctly,
    // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
    // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
    // uppercased versions).
    //
    // Here's an example showing how it happens. Lets take greek letter omega:
    // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
    //
    // Unicode entries:
    // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
    // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
    // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
    // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
    //
    // Case-insensitive comparison should treat all of them as equivalent.
    //
    // But .toLowerCase() doesn't change ϑ (it's already lowercase),
    // and .toUpperCase() doesn't change ϴ (already uppercase).
    //
    // Applying first lower then upper case normalizes any character:
    // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
    //
    // Note: this is equivalent to unicode case folding; unicode normalization
    // is a different step that is not required here.
    //
    // Final result should be uppercased, because it's later stored in an object
    // (this avoid a conflict with Object.prototype members,
    // most notably, `__proto__`)
    //


    return str.toLowerCase().toUpperCase();
  } ////////////////////////////////////////////////////////////////////////////////
  // Re-export libraries commonly used in both markdown-it and its plugins,
  // so plugins won't have to depend on them explicitly, which reduces their
  // bundled size (e.g. a browser build).
  //


  exports.lib = {};
  exports.lib.mdurl = require('mdurl');
  exports.lib.ucmicro = require('uc.micro');
  exports.assign = assign$2;
  exports.isString = isString$1;
  exports.has = has$2;
  exports.unescapeMd = unescapeMd;
  exports.unescapeAll = unescapeAll$3;
  exports.isValidEntityCode = isValidEntityCode$1;
  exports.fromCodePoint = fromCodePoint$1; // exports.replaceEntities     = replaceEntities;

  exports.escapeHtml = escapeHtml$1;
  exports.arrayReplaceAt = arrayReplaceAt$1;
  exports.isSpace = isSpace$b;
  exports.isWhiteSpace = isWhiteSpace$2;
  exports.isMdAsciiPunct = isMdAsciiPunct$2;
  exports.isPunctChar = isPunctChar$2;
  exports.escapeRE = escapeRE$1;
  exports.normalizeReference = normalizeReference$3;

  var utils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$5 = /*@__PURE__*/getAugmentedNamespace(utils$1);

  var helpers$1 = {};

  var parse_link_label = function parseLinkLabel(state, start, disableNested) {
    var level,
        found,
        marker,
        prevPos,
        labelEnd = -1,
        max = state.posMax,
        oldPos = state.pos;
    state.pos = start + 1;
    level = 1;

    while (state.pos < max) {
      marker = state.src.charCodeAt(state.pos);

      if (marker === 0x5D
      /* ] */
      ) {
          level--;

          if (level === 0) {
            found = true;
            break;
          }
        }

      prevPos = state.pos;
      state.md.inline.skipToken(state);

      if (marker === 0x5B
      /* [ */
      ) {
          if (prevPos === state.pos - 1) {
            // increase level if we find text `[`, which is not a part of any token
            level++;
          } else if (disableNested) {
            state.pos = oldPos;
            return -1;
          }
        }
    }

    if (found) {
      labelEnd = state.pos;
    } // restore old state


    state.pos = oldPos;
    return labelEnd;
  };

  var unescapeAll$2 = require$$0$5.unescapeAll;

  var parse_link_destination = function parseLinkDestination(str, pos, max) {
    var code,
        level,
        lines = 0,
        start = pos,
        result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ''
    };

    if (str.charCodeAt(pos) === 0x3C
    /* < */
    ) {
        pos++;

        while (pos < max) {
          code = str.charCodeAt(pos);

          if (code === 0x0A
          /* \n */
          ) {
              return result;
            }

          if (code === 0x3E
          /* > */
          ) {
              result.pos = pos + 1;
              result.str = unescapeAll$2(str.slice(start + 1, pos));
              result.ok = true;
              return result;
            }

          if (code === 0x5C
          /* \ */
          && pos + 1 < max) {
            pos += 2;
            continue;
          }

          pos++;
        } // no closing '>'


        return result;
      } // this should be ... } else { ... branch


    level = 0;

    while (pos < max) {
      code = str.charCodeAt(pos);

      if (code === 0x20) {
        break;
      } // ascii control characters


      if (code < 0x20 || code === 0x7F) {
        break;
      }

      if (code === 0x5C
      /* \ */
      && pos + 1 < max) {
        pos += 2;
        continue;
      }

      if (code === 0x28
      /* ( */
      ) {
          level++;
        }

      if (code === 0x29
      /* ) */
      ) {
          if (level === 0) {
            break;
          }

          level--;
        }

      pos++;
    }

    if (start === pos) {
      return result;
    }

    if (level !== 0) {
      return result;
    }

    result.str = unescapeAll$2(str.slice(start, pos));
    result.lines = lines;
    result.pos = pos;
    result.ok = true;
    return result;
  };

  var unescapeAll$1 = require$$0$5.unescapeAll;

  var parse_link_title = function parseLinkTitle(str, pos, max) {
    var code,
        marker,
        lines = 0,
        start = pos,
        result = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ''
    };

    if (pos >= max) {
      return result;
    }

    marker = str.charCodeAt(pos);

    if (marker !== 0x22
    /* " */
    && marker !== 0x27
    /* ' */
    && marker !== 0x28
    /* ( */
    ) {
        return result;
      }

    pos++; // if opening marker is "(", switch it to closing marker ")"

    if (marker === 0x28) {
      marker = 0x29;
    }

    while (pos < max) {
      code = str.charCodeAt(pos);

      if (code === marker) {
        result.pos = pos + 1;
        result.lines = lines;
        result.str = unescapeAll$1(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      } else if (code === 0x0A) {
        lines++;
      } else if (code === 0x5C
      /* \ */
      && pos + 1 < max) {
        pos++;

        if (str.charCodeAt(pos) === 0x0A) {
          lines++;
        }
      }

      pos++;
    }

    return result;
  };

  helpers$1.parseLinkLabel = parse_link_label;
  helpers$1.parseLinkDestination = parse_link_destination;
  helpers$1.parseLinkTitle = parse_link_title;

  /**
   * class Renderer
   *
   * Generates HTML from parsed token stream. Each instance has independent
   * copy of rules. Those can be rewritten with ease. Also, you can add new
   * rules if you create plugin and adds new token types.
   **/

  var assign$1 = require$$0$5.assign;

  var unescapeAll = require$$0$5.unescapeAll;

  var escapeHtml = require$$0$5.escapeHtml; ////////////////////////////////////////////////////////////////////////////////


  var default_rules = {};

  default_rules.code_inline = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];
    return '<code' + slf.renderAttrs(token) + '>' + escapeHtml(tokens[idx].content) + '</code>';
  };

  default_rules.code_block = function (tokens, idx, options, env, slf) {
    var token = tokens[idx];
    return '<pre' + slf.renderAttrs(token) + '><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
  };

  default_rules.fence = function (tokens, idx, options, env, slf) {
    var token = tokens[idx],
        info = token.info ? unescapeAll(token.info).trim() : '',
        langName = '',
        highlighted,
        i,
        tmpAttrs,
        tmpToken;

    if (info) {
      langName = info.split(/\s+/g)[0];
    }

    if (options.highlight) {
      highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }

    if (highlighted.indexOf('<pre') === 0) {
      return highlighted + '\n';
    } // If language exists, inject class gently, without modifying original token.
    // May be, one day we will add .clone() for token and simplify this part, but
    // now we prefer to keep things local.


    if (info) {
      i = token.attrIndex('class');
      tmpAttrs = token.attrs ? token.attrs.slice() : [];

      if (i < 0) {
        tmpAttrs.push(['class', options.langPrefix + langName]);
      } else {
        tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
      } // Fake token just to render attributes


      tmpToken = {
        attrs: tmpAttrs
      };
      return '<pre><code' + slf.renderAttrs(tmpToken) + '>' + highlighted + '</code></pre>\n';
    }

    return '<pre><code' + slf.renderAttrs(token) + '>' + highlighted + '</code></pre>\n';
  };

  default_rules.image = function (tokens, idx, options, env, slf) {
    var token = tokens[idx]; // "alt" attr MUST be set, even if empty. Because it's mandatory and
    // should be placed on proper position for tests.
    //
    // Replace content with actual value

    token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env);
    return slf.renderToken(tokens, idx, options);
  };

  default_rules.hardbreak = function (tokens, idx, options
  /*, env */
  ) {
    return options.xhtmlOut ? '<br />\n' : '<br>\n';
  };

  default_rules.softbreak = function (tokens, idx, options
  /*, env */
  ) {
    return options.breaks ? options.xhtmlOut ? '<br />\n' : '<br>\n' : '\n';
  };

  default_rules.text = function (tokens, idx
  /*, options, env */
  ) {
    return escapeHtml(tokens[idx].content);
  };

  default_rules.html_block = function (tokens, idx
  /*, options, env */
  ) {
    return tokens[idx].content;
  };

  default_rules.html_inline = function (tokens, idx
  /*, options, env */
  ) {
    return tokens[idx].content;
  };
  /**
   * new Renderer()
   *
   * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
   **/


  function Renderer$1() {
    /**
     * Renderer#rules -> Object
     *
     * Contains render rules for tokens. Can be updated and extended.
     *
     * ##### Example
     *
     * ```javascript
     * var md = require('markdown-it')();
     *
     * md.renderer.rules.strong_open  = function () { return '<b>'; };
     * md.renderer.rules.strong_close = function () { return '</b>'; };
     *
     * var result = md.renderInline(...);
     * ```
     *
     * Each rule is called as independent static function with fixed signature:
     *
     * ```javascript
     * function my_token_render(tokens, idx, options, env, renderer) {
     *   // ...
     *   return renderedHTML;
     * }
     * ```
     *
     * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
     * for more details and examples.
     **/
    this.rules = assign$1({}, default_rules);
  }
  /**
   * Renderer.renderAttrs(token) -> String
   *
   * Render token attributes to string.
   **/


  Renderer$1.prototype.renderAttrs = function renderAttrs(token) {
    var i, l, result;

    if (!token.attrs) {
      return '';
    }

    result = '';

    for (i = 0, l = token.attrs.length; i < l; i++) {
      result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
    }

    return result;
  };
  /**
   * Renderer.renderToken(tokens, idx, options) -> String
   * - tokens (Array): list of tokens
   * - idx (Numbed): token index to render
   * - options (Object): params of parser instance
   *
   * Default token renderer. Can be overriden by custom function
   * in [[Renderer#rules]].
   **/


  Renderer$1.prototype.renderToken = function renderToken(tokens, idx, options) {
    var nextToken,
        result = '',
        needLf = false,
        token = tokens[idx]; // Tight list paragraphs

    if (token.hidden) {
      return '';
    } // Insert a newline between hidden paragraph and subsequent opening
    // block-level tag.
    //
    // For example, here we should insert a newline before blockquote:
    //  - a
    //    >
    //


    if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
      result += '\n';
    } // Add token name, e.g. `<img`


    result += (token.nesting === -1 ? '</' : '<') + token.tag; // Encode attributes, e.g. `<img src="foo"`

    result += this.renderAttrs(token); // Add a slash for self-closing tags, e.g. `<img src="foo" /`

    if (token.nesting === 0 && options.xhtmlOut) {
      result += ' /';
    } // Check if we need to add a newline after this tag


    if (token.block) {
      needLf = true;

      if (token.nesting === 1) {
        if (idx + 1 < tokens.length) {
          nextToken = tokens[idx + 1];

          if (nextToken.type === 'inline' || nextToken.hidden) {
            // Block-level tag containing an inline tag.
            //
            needLf = false;
          } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
            // Opening tag + closing tag of the same type. E.g. `<li></li>`.
            //
            needLf = false;
          }
        }
      }
    }

    result += needLf ? '>\n' : '>';
    return result;
  };
  /**
   * Renderer.renderInline(tokens, options, env) -> String
   * - tokens (Array): list on block tokens to renter
   * - options (Object): params of parser instance
   * - env (Object): additional data from parsed input (references, for example)
   *
   * The same as [[Renderer.render]], but for single token of `inline` type.
   **/


  Renderer$1.prototype.renderInline = function (tokens, options, env) {
    var type,
        result = '',
        rules = this.rules;

    for (var i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;

      if (typeof rules[type] !== 'undefined') {
        result += rules[type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options);
      }
    }

    return result;
  };
  /** internal
   * Renderer.renderInlineAsText(tokens, options, env) -> String
   * - tokens (Array): list on block tokens to renter
   * - options (Object): params of parser instance
   * - env (Object): additional data from parsed input (references, for example)
   *
   * Special kludge for image `alt` attributes to conform CommonMark spec.
   * Don't try to use it! Spec requires to show `alt` content with stripped markup,
   * instead of simple escaping.
   **/


  Renderer$1.prototype.renderInlineAsText = function (tokens, options, env) {
    var result = '';

    for (var i = 0, len = tokens.length; i < len; i++) {
      if (tokens[i].type === 'text') {
        result += tokens[i].content;
      } else if (tokens[i].type === 'image') {
        result += this.renderInlineAsText(tokens[i].children, options, env);
      }
    }

    return result;
  };
  /**
   * Renderer.render(tokens, options, env) -> String
   * - tokens (Array): list on block tokens to renter
   * - options (Object): params of parser instance
   * - env (Object): additional data from parsed input (references, for example)
   *
   * Takes token stream and generates HTML. Probably, you will never need to call
   * this method directly.
   **/


  Renderer$1.prototype.render = function (tokens, options, env) {
    var i,
        len,
        type,
        result = '',
        rules = this.rules;

    for (i = 0, len = tokens.length; i < len; i++) {
      type = tokens[i].type;

      if (type === 'inline') {
        result += this.renderInline(tokens[i].children, options, env);
      } else if (typeof rules[type] !== 'undefined') {
        result += rules[tokens[i].type](tokens, i, options, env, this);
      } else {
        result += this.renderToken(tokens, i, options, env);
      }
    }

    return result;
  };

  var renderer = Renderer$1;

  /**
   * class Ruler
   *
   * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
   * [[MarkdownIt#inline]] to manage sequences of functions (rules):
   *
   * - keep rules in defined order
   * - assign the name to each rule
   * - enable/disable rules
   * - add/replace rules
   * - allow assign rules to additional named chains (in the same)
   * - cacheing lists of active rules
   *
   * You will not need use this class directly until write plugins. For simple
   * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
   * [[MarkdownIt.use]].
   **/
  /**
   * new Ruler()
   **/

  function Ruler$3() {
    // List of added rules. Each element is:
    //
    // {
    //   name: XXX,
    //   enabled: Boolean,
    //   fn: Function(),
    //   alt: [ name2, name3 ]
    // }
    //
    this.__rules__ = []; // Cached rule chains.
    //
    // First level - chain name, '' for default.
    // Second level - diginal anchor for fast filtering by charcodes.
    //

    this.__cache__ = null;
  } ////////////////////////////////////////////////////////////////////////////////
  // Helper methods, should not be used directly
  // Find rule index by name
  //


  Ruler$3.prototype.__find__ = function (name) {
    for (var i = 0; i < this.__rules__.length; i++) {
      if (this.__rules__[i].name === name) {
        return i;
      }
    }

    return -1;
  }; // Build rules lookup cache
  //


  Ruler$3.prototype.__compile__ = function () {
    var self = this;
    var chains = ['']; // collect unique names

    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) {
        return;
      }

      rule.alt.forEach(function (altName) {
        if (chains.indexOf(altName) < 0) {
          chains.push(altName);
        }
      });
    });

    self.__cache__ = {};
    chains.forEach(function (chain) {
      self.__cache__[chain] = [];

      self.__rules__.forEach(function (rule) {
        if (!rule.enabled) {
          return;
        }

        if (chain && rule.alt.indexOf(chain) < 0) {
          return;
        }

        self.__cache__[chain].push(rule.fn);
      });
    });
  };
  /**
   * Ruler.at(name, fn [, options])
   * - name (String): rule name to replace.
   * - fn (Function): new rule function.
   * - options (Object): new rule options (not mandatory).
   *
   * Replace rule by name with new function & options. Throws error if name not
   * found.
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * Replace existing typographer replacement rule with new one:
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.core.ruler.at('replacements', function replace(state) {
   *   //...
   * });
   * ```
   **/


  Ruler$3.prototype.at = function (name, fn, options) {
    var index = this.__find__(name);

    var opt = options || {};

    if (index === -1) {
      throw new Error('Parser rule not found: ' + name);
    }

    this.__rules__[index].fn = fn;
    this.__rules__[index].alt = opt.alt || [];
    this.__cache__ = null;
  };
  /**
   * Ruler.before(beforeName, ruleName, fn [, options])
   * - beforeName (String): new rule will be added before this one.
   * - ruleName (String): name of added rule.
   * - fn (Function): rule function.
   * - options (Object): rule options (not mandatory).
   *
   * Add new rule to chain before one with given name. See also
   * [[Ruler.after]], [[Ruler.push]].
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
   *   //...
   * });
   * ```
   **/


  Ruler$3.prototype.before = function (beforeName, ruleName, fn, options) {
    var index = this.__find__(beforeName);

    var opt = options || {};

    if (index === -1) {
      throw new Error('Parser rule not found: ' + beforeName);
    }

    this.__rules__.splice(index, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };
  /**
   * Ruler.after(afterName, ruleName, fn [, options])
   * - afterName (String): new rule will be added after this one.
   * - ruleName (String): name of added rule.
   * - fn (Function): rule function.
   * - options (Object): rule options (not mandatory).
   *
   * Add new rule to chain after one with given name. See also
   * [[Ruler.before]], [[Ruler.push]].
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.inline.ruler.after('text', 'my_rule', function replace(state) {
   *   //...
   * });
   * ```
   **/


  Ruler$3.prototype.after = function (afterName, ruleName, fn, options) {
    var index = this.__find__(afterName);

    var opt = options || {};

    if (index === -1) {
      throw new Error('Parser rule not found: ' + afterName);
    }

    this.__rules__.splice(index + 1, 0, {
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };
  /**
   * Ruler.push(ruleName, fn [, options])
   * - ruleName (String): name of added rule.
   * - fn (Function): rule function.
   * - options (Object): rule options (not mandatory).
   *
   * Push new rule to the end of chain. See also
   * [[Ruler.before]], [[Ruler.after]].
   *
   * ##### Options:
   *
   * - __alt__ - array with names of "alternate" chains.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.core.ruler.push('my_rule', function replace(state) {
   *   //...
   * });
   * ```
   **/


  Ruler$3.prototype.push = function (ruleName, fn, options) {
    var opt = options || {};

    this.__rules__.push({
      name: ruleName,
      enabled: true,
      fn: fn,
      alt: opt.alt || []
    });

    this.__cache__ = null;
  };
  /**
   * Ruler.enable(list [, ignoreInvalid]) -> Array
   * - list (String|Array): list of rule names to enable.
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Enable rules with given names. If any rule name not found - throw Error.
   * Errors can be disabled by second param.
   *
   * Returns list of found rule names (if no exception happened).
   *
   * See also [[Ruler.disable]], [[Ruler.enableOnly]].
   **/


  Ruler$3.prototype.enable = function (list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [list];
    }

    var result = []; // Search by name and enable

    list.forEach(function (name) {
      var idx = this.__find__(name);

      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }

        throw new Error('Rules manager: invalid rule name ' + name);
      }

      this.__rules__[idx].enabled = true;
      result.push(name);
    }, this);
    this.__cache__ = null;
    return result;
  };
  /**
   * Ruler.enableOnly(list [, ignoreInvalid])
   * - list (String|Array): list of rule names to enable (whitelist).
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Enable rules with given names, and disable everything else. If any rule name
   * not found - throw Error. Errors can be disabled by second param.
   *
   * See also [[Ruler.disable]], [[Ruler.enable]].
   **/


  Ruler$3.prototype.enableOnly = function (list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [list];
    }

    this.__rules__.forEach(function (rule) {
      rule.enabled = false;
    });

    this.enable(list, ignoreInvalid);
  };
  /**
   * Ruler.disable(list [, ignoreInvalid]) -> Array
   * - list (String|Array): list of rule names to disable.
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Disable rules with given names. If any rule name not found - throw Error.
   * Errors can be disabled by second param.
   *
   * Returns list of found rule names (if no exception happened).
   *
   * See also [[Ruler.enable]], [[Ruler.enableOnly]].
   **/


  Ruler$3.prototype.disable = function (list, ignoreInvalid) {
    if (!Array.isArray(list)) {
      list = [list];
    }

    var result = []; // Search by name and disable

    list.forEach(function (name) {
      var idx = this.__find__(name);

      if (idx < 0) {
        if (ignoreInvalid) {
          return;
        }

        throw new Error('Rules manager: invalid rule name ' + name);
      }

      this.__rules__[idx].enabled = false;
      result.push(name);
    }, this);
    this.__cache__ = null;
    return result;
  };
  /**
   * Ruler.getRules(chainName) -> Array
   *
   * Return array of active functions (rules) for given chain name. It analyzes
   * rules configuration, compiles caches if not exists and returns result.
   *
   * Default chain name is `''` (empty string). It can't be skipped. That's
   * done intentionally, to keep signature monomorphic for high speed.
   **/


  Ruler$3.prototype.getRules = function (chainName) {
    if (this.__cache__ === null) {
      this.__compile__();
    } // Chain can be empty, if rules disabled. But we still have to return Array.


    return this.__cache__[chainName] || [];
  };

  var ruler = Ruler$3;

  var NEWLINES_RE = /\r\n?|\n/g;
  var NULL_RE = /\0/g;

  var normalize = function normalize(state) {
    var str; // Normalize newlines

    str = state.src.replace(NEWLINES_RE, '\n'); // Replace NULL characters

    str = str.replace(NULL_RE, "\uFFFD");
    state.src = str;
  };

  var block$1 = function block(state) {
    var token;

    if (state.inlineMode) {
      token = new state.Token('inline', '', 0);
      token.content = state.src;
      token.map = [0, 1];
      token.children = [];
      state.tokens.push(token);
    } else {
      state.md.block.parse(state.src, state.md, state.env, state.tokens);
    }
  };

  var inline = function inline(state) {
    var tokens = state.tokens,
        tok,
        i,
        l; // Parse inlines

    for (i = 0, l = tokens.length; i < l; i++) {
      tok = tokens[i];

      if (tok.type === 'inline') {
        state.md.inline.parse(tok.content, state.md, state.env, tok.children);
      }
    }
  };

  var arrayReplaceAt = require$$0$5.arrayReplaceAt;

  function isLinkOpen(str) {
    return /^<a[>\s]/i.test(str);
  }

  function isLinkClose(str) {
    return /^<\/a\s*>/i.test(str);
  }

  var linkify = function linkify(state) {
    var i,
        j,
        l,
        tokens,
        token,
        currentToken,
        nodes,
        ln,
        text,
        pos,
        lastPos,
        level,
        htmlLinkLevel,
        url,
        fullUrl,
        urlText,
        blockTokens = state.tokens,
        links;

    if (!state.md.options.linkify) {
      return;
    }

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline' || !state.md.linkify.pretest(blockTokens[j].content)) {
        continue;
      }

      tokens = blockTokens[j].children;
      htmlLinkLevel = 0; // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match

      for (i = tokens.length - 1; i >= 0; i--) {
        currentToken = tokens[i]; // Skip content of markdown links

        if (currentToken.type === 'link_close') {
          i--;

          while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
            i--;
          }

          continue;
        } // Skip content of html tag links


        if (currentToken.type === 'html_inline') {
          if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
            htmlLinkLevel--;
          }

          if (isLinkClose(currentToken.content)) {
            htmlLinkLevel++;
          }
        }

        if (htmlLinkLevel > 0) {
          continue;
        }

        if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {
          text = currentToken.content;
          links = state.md.linkify.match(text); // Now split string to nodes

          nodes = [];
          level = currentToken.level;
          lastPos = 0;

          for (ln = 0; ln < links.length; ln++) {
            url = links[ln].url;
            fullUrl = state.md.normalizeLink(url);

            if (!state.md.validateLink(fullUrl)) {
              continue;
            }

            urlText = links[ln].text; // Linkifier might send raw hostnames like "example.com", where url
            // starts with domain name. So we prepend http:// in those cases,
            // and remove it afterwards.
            //

            if (!links[ln].schema) {
              urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
            } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
              urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
            } else {
              urlText = state.md.normalizeLinkText(urlText);
            }

            pos = links[ln].index;

            if (pos > lastPos) {
              token = new state.Token('text', '', 0);
              token.content = text.slice(lastPos, pos);
              token.level = level;
              nodes.push(token);
            }

            token = new state.Token('link_open', 'a', 1);
            token.attrs = [['href', fullUrl]];
            token.level = level++;
            token.markup = 'linkify';
            token.info = 'auto';
            nodes.push(token);
            token = new state.Token('text', '', 0);
            token.content = urlText;
            token.level = level;
            nodes.push(token);
            token = new state.Token('link_close', 'a', -1);
            token.level = --level;
            token.markup = 'linkify';
            token.info = 'auto';
            nodes.push(token);
            lastPos = links[ln].lastIndex;
          }

          if (lastPos < text.length) {
            token = new state.Token('text', '', 0);
            token.content = text.slice(lastPos);
            token.level = level;
            nodes.push(token);
          } // replace current node


          blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
        }
      }
    }
  };

  // - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
  // - miltiplication 2 x 4 -> 2 × 4

  var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/; // Workaround for phantomjs - need regex without /g flag,
  // or root check will fail every second time

  var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
  var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
  var SCOPED_ABBR = {
    c: '©',
    r: '®',
    p: '§',
    tm: '™'
  };

  function replaceFn(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  }

  function replace_scoped(inlineTokens) {
    var i,
        token,
        inside_autolink = 0;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];

      if (token.type === 'text' && !inside_autolink) {
        token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
      }

      if (token.type === 'link_open' && token.info === 'auto') {
        inside_autolink--;
      }

      if (token.type === 'link_close' && token.info === 'auto') {
        inside_autolink++;
      }
    }
  }

  function replace_rare(inlineTokens) {
    var i,
        token,
        inside_autolink = 0;

    for (i = inlineTokens.length - 1; i >= 0; i--) {
      token = inlineTokens[i];

      if (token.type === 'text' && !inside_autolink) {
        if (RARE_RE.test(token.content)) {
          token.content = token.content.replace(/\+-/g, '±') // .., ..., ....... -> …
          // but ?..... & !..... -> ?.. & !..
          .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..').replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',') // em-dash
          .replace(/(^|[^-])---([^-]|$)/mg, "$1\u2014$2") // en-dash
          .replace(/(^|\s)--(\s|$)/mg, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1\u2013$2");
        }
      }

      if (token.type === 'link_open' && token.info === 'auto') {
        inside_autolink--;
      }

      if (token.type === 'link_close' && token.info === 'auto') {
        inside_autolink++;
      }
    }
  }

  var replacements = function replace(state) {
    var blkIdx;

    if (!state.md.options.typographer) {
      return;
    }

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== 'inline') {
        continue;
      }

      if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
        replace_scoped(state.tokens[blkIdx].children);
      }

      if (RARE_RE.test(state.tokens[blkIdx].content)) {
        replace_rare(state.tokens[blkIdx].children);
      }
    }
  };

  var isWhiteSpace$1 = require$$0$5.isWhiteSpace;

  var isPunctChar$1 = require$$0$5.isPunctChar;

  var isMdAsciiPunct$1 = require$$0$5.isMdAsciiPunct;

  var QUOTE_TEST_RE = /['"]/;
  var QUOTE_RE = /['"]/g;
  var APOSTROPHE = "\u2019";
  /* ’ */

  function replaceAt(str, index, ch) {
    return str.substr(0, index) + ch + str.substr(index + 1);
  }

  function process_inlines(tokens, state) {
    var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
    stack = [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      thisLevel = tokens[i].level;

      for (j = stack.length - 1; j >= 0; j--) {
        if (stack[j].level <= thisLevel) {
          break;
        }
      }

      stack.length = j + 1;

      if (token.type !== 'text') {
        continue;
      }

      text = token.content;
      pos = 0;
      max = text.length;
      /*eslint no-labels:0,block-scoped-var:0*/

      OUTER: while (pos < max) {
        QUOTE_RE.lastIndex = pos;
        t = QUOTE_RE.exec(text);

        if (!t) {
          break;
        }

        canOpen = canClose = true;
        pos = t.index + 1;
        isSingle = t[0] === "'"; // Find previous character,
        // default to space if it's the beginning of the line
        //

        lastChar = 0x20;

        if (t.index - 1 >= 0) {
          lastChar = text.charCodeAt(t.index - 1);
        } else {
          for (j = i - 1; j >= 0; j--) {
            if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20

            if (tokens[j].type !== 'text') continue;
            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
            break;
          }
        } // Find next character,
        // default to space if it's the end of the line
        //


        nextChar = 0x20;

        if (pos < max) {
          nextChar = text.charCodeAt(pos);
        } else {
          for (j = i + 1; j < tokens.length; j++) {
            if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20

            if (tokens[j].type !== 'text') continue;
            nextChar = tokens[j].content.charCodeAt(0);
            break;
          }
        }

        isLastPunctChar = isMdAsciiPunct$1(lastChar) || isPunctChar$1(String.fromCharCode(lastChar));
        isNextPunctChar = isMdAsciiPunct$1(nextChar) || isPunctChar$1(String.fromCharCode(nextChar));
        isLastWhiteSpace = isWhiteSpace$1(lastChar);
        isNextWhiteSpace = isWhiteSpace$1(nextChar);

        if (isNextWhiteSpace) {
          canOpen = false;
        } else if (isNextPunctChar) {
          if (!(isLastWhiteSpace || isLastPunctChar)) {
            canOpen = false;
          }
        }

        if (isLastWhiteSpace) {
          canClose = false;
        } else if (isLastPunctChar) {
          if (!(isNextWhiteSpace || isNextPunctChar)) {
            canClose = false;
          }
        }

        if (nextChar === 0x22
        /* " */
        && t[0] === '"') {
          if (lastChar >= 0x30
          /* 0 */
          && lastChar <= 0x39
          /* 9 */
          ) {
              // special case: 1"" - count first quote as an inch
              canClose = canOpen = false;
            }
        }

        if (canOpen && canClose) {
          // treat this as the middle of the word
          canOpen = false;
          canClose = isNextPunctChar;
        }

        if (!canOpen && !canClose) {
          // middle of word
          if (isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }

          continue;
        }

        if (canClose) {
          // this could be a closing quote, rewind the stack to get a match
          for (j = stack.length - 1; j >= 0; j--) {
            item = stack[j];

            if (stack[j].level < thisLevel) {
              break;
            }

            if (item.single === isSingle && stack[j].level === thisLevel) {
              item = stack[j];

              if (isSingle) {
                openQuote = state.md.options.quotes[2];
                closeQuote = state.md.options.quotes[3];
              } else {
                openQuote = state.md.options.quotes[0];
                closeQuote = state.md.options.quotes[1];
              } // replace token.content *before* tokens[item.token].content,
              // because, if they are pointing at the same token, replaceAt
              // could mess up indices when quote length != 1


              token.content = replaceAt(token.content, t.index, closeQuote);
              tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
              pos += closeQuote.length - 1;

              if (item.token === i) {
                pos += openQuote.length - 1;
              }

              text = token.content;
              max = text.length;
              stack.length = j;
              continue OUTER;
            }
          }
        }

        if (canOpen) {
          stack.push({
            token: i,
            pos: t.index,
            single: isSingle,
            level: thisLevel
          });
        } else if (canClose && isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
      }
    }
  }

  var smartquotes = function smartquotes(state) {
    /*eslint max-depth:0*/
    var blkIdx;

    if (!state.md.options.typographer) {
      return;
    }

    for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
      if (state.tokens[blkIdx].type !== 'inline' || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
        continue;
      }

      process_inlines(state.tokens[blkIdx].children, state);
    }
  };

  /**
   * class Token
   **/

  /**
   * new Token(type, tag, nesting)
   *
   * Create new token and fill passed properties.
   **/

  function Token$3(type, tag, nesting) {
    /**
     * Token#type -> String
     *
     * Type of the token (string, e.g. "paragraph_open")
     **/
    this.type = type;
    /**
     * Token#tag -> String
     *
     * html tag name, e.g. "p"
     **/

    this.tag = tag;
    /**
     * Token#attrs -> Array
     *
     * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
     **/

    this.attrs = null;
    /**
     * Token#map -> Array
     *
     * Source map info. Format: `[ line_begin, line_end ]`
     **/

    this.map = null;
    /**
     * Token#nesting -> Number
     *
     * Level change (number in {-1, 0, 1} set), where:
     *
     * -  `1` means the tag is opening
     * -  `0` means the tag is self-closing
     * - `-1` means the tag is closing
     **/

    this.nesting = nesting;
    /**
     * Token#level -> Number
     *
     * nesting level, the same as `state.level`
     **/

    this.level = 0;
    /**
     * Token#children -> Array
     *
     * An array of child nodes (inline and img tokens)
     **/

    this.children = null;
    /**
     * Token#content -> String
     *
     * In a case of self-closing tag (code, html, fence, etc.),
     * it has contents of this tag.
     **/

    this.content = '';
    /**
     * Token#markup -> String
     *
     * '*' or '_' for emphasis, fence string for fence, etc.
     **/

    this.markup = '';
    /**
     * Token#info -> String
     *
     * fence infostring
     **/

    this.info = '';
    /**
     * Token#meta -> Object
     *
     * A place for plugins to store an arbitrary data
     **/

    this.meta = null;
    /**
     * Token#block -> Boolean
     *
     * True for block-level tokens, false for inline tokens.
     * Used in renderer to calculate line breaks
     **/

    this.block = false;
    /**
     * Token#hidden -> Boolean
     *
     * If it's true, ignore this element when rendering. Used for tight lists
     * to hide paragraphs.
     **/

    this.hidden = false;
  }
  /**
   * Token.attrIndex(name) -> Number
   *
   * Search attribute index by name.
   **/


  Token$3.prototype.attrIndex = function attrIndex(name) {
    var attrs, i, len;

    if (!this.attrs) {
      return -1;
    }

    attrs = this.attrs;

    for (i = 0, len = attrs.length; i < len; i++) {
      if (attrs[i][0] === name) {
        return i;
      }
    }

    return -1;
  };
  /**
   * Token.attrPush(attrData)
   *
   * Add `[ name, value ]` attribute to list. Init attrs if necessary
   **/


  Token$3.prototype.attrPush = function attrPush(attrData) {
    if (this.attrs) {
      this.attrs.push(attrData);
    } else {
      this.attrs = [attrData];
    }
  };
  /**
   * Token.attrSet(name, value)
   *
   * Set `name` attribute to `value`. Override old value if exists.
   **/


  Token$3.prototype.attrSet = function attrSet(name, value) {
    var idx = this.attrIndex(name),
        attrData = [name, value];

    if (idx < 0) {
      this.attrPush(attrData);
    } else {
      this.attrs[idx] = attrData;
    }
  };
  /**
   * Token.attrGet(name)
   *
   * Get the value of attribute `name`, or null if it does not exist.
   **/


  Token$3.prototype.attrGet = function attrGet(name) {
    var idx = this.attrIndex(name),
        value = null;

    if (idx >= 0) {
      value = this.attrs[idx][1];
    }

    return value;
  };
  /**
   * Token.attrJoin(name, value)
   *
   * Join value to existing attribute via space. Or create new attribute if not
   * exists. Useful to operate with token classes.
   **/


  Token$3.prototype.attrJoin = function attrJoin(name, value) {
    var idx = this.attrIndex(name);

    if (idx < 0) {
      this.attrPush([name, value]);
    } else {
      this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
    }
  };

  var token = Token$3;

  var Token$2 = token;

  function StateCore(src, md, env) {
    this.src = src;
    this.env = env;
    this.tokens = [];
    this.inlineMode = false;
    this.md = md; // link to parser instance
  } // re-export Token class to use in core rules


  StateCore.prototype.Token = Token$2;
  var state_core = StateCore;

  /** internal
   * class Core
   *
   * Top-level rules executor. Glues block/inline parsers and does intermediate
   * transformations.
   **/

  var Ruler$2 = ruler;

  var _rules$2 = [['normalize', normalize], ['block', block$1], ['inline', inline], ['linkify', linkify], ['replacements', replacements], ['smartquotes', smartquotes]];
  /**
   * new Core()
   **/

  function Core() {
    /**
     * Core#ruler -> Ruler
     *
     * [[Ruler]] instance. Keep configuration of core rules.
     **/
    this.ruler = new Ruler$2();

    for (var i = 0; i < _rules$2.length; i++) {
      this.ruler.push(_rules$2[i][0], _rules$2[i][1]);
    }
  }
  /**
   * Core.process(state)
   *
   * Executes core chain rules.
   **/


  Core.prototype.process = function (state) {
    var i, l, rules;
    rules = this.ruler.getRules('');

    for (i = 0, l = rules.length; i < l; i++) {
      rules[i](state);
    }
  };

  Core.prototype.State = state_core;
  var parser_core = Core;

  var isSpace$a = require$$0$5.isSpace;

  function getLine(state, line) {
    var pos = state.bMarks[line] + state.blkIndent,
        max = state.eMarks[line];
    return state.src.substr(pos, max - pos);
  }

  function escapedSplit(str) {
    var result = [],
        pos = 0,
        max = str.length,
        ch,
        escapes = 0,
        lastPos = 0,
        backTicked = false,
        lastBackTick = 0;
    ch = str.charCodeAt(pos);

    while (pos < max) {
      if (ch === 0x60
      /* ` */
      ) {
          if (backTicked) {
            // make \` close code sequence, but not open it;
            // the reason is: `\` is correct code block
            backTicked = false;
            lastBackTick = pos;
          } else if (escapes % 2 === 0) {
            backTicked = true;
            lastBackTick = pos;
          }
        } else if (ch === 0x7c
      /* | */
      && escapes % 2 === 0 && !backTicked) {
        result.push(str.substring(lastPos, pos));
        lastPos = pos + 1;
      }

      if (ch === 0x5c
      /* \ */
      ) {
          escapes++;
        } else {
        escapes = 0;
      }

      pos++; // If there was an un-closed backtick, go back to just after
      // the last backtick, but as if it was a normal character

      if (pos === max && backTicked) {
        backTicked = false;
        pos = lastBackTick + 1;
      }

      ch = str.charCodeAt(pos);
    }

    result.push(str.substring(lastPos));
    return result;
  }

  var table = function table(state, startLine, endLine, silent) {
    var ch, lineText, pos, i, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines; // should have at least two lines

    if (startLine + 2 > endLine) {
      return false;
    }

    nextLine = startLine + 1;

    if (state.sCount[nextLine] < state.blkIndent) {
      return false;
    } // if it's indented more than 3 spaces, it should be a code block


    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      return false;
    } // first character of the second line should be '|', '-', ':',
    // and no other characters are allowed but spaces;
    // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp


    pos = state.bMarks[nextLine] + state.tShift[nextLine];

    if (pos >= state.eMarks[nextLine]) {
      return false;
    }

    ch = state.src.charCodeAt(pos++);

    if (ch !== 0x7C
    /* | */
    && ch !== 0x2D
    /* - */
    && ch !== 0x3A
    /* : */
    ) {
        return false;
      }

    while (pos < state.eMarks[nextLine]) {
      ch = state.src.charCodeAt(pos);

      if (ch !== 0x7C
      /* | */
      && ch !== 0x2D
      /* - */
      && ch !== 0x3A
      /* : */
      && !isSpace$a(ch)) {
        return false;
      }

      pos++;
    }

    lineText = getLine(state, startLine + 1);
    columns = lineText.split('|');
    aligns = [];

    for (i = 0; i < columns.length; i++) {
      t = columns[i].trim();

      if (!t) {
        // allow empty columns before and after table, but not in between columns;
        // e.g. allow ` |---| `, disallow ` ---||--- `
        if (i === 0 || i === columns.length - 1) {
          continue;
        } else {
          return false;
        }
      }

      if (!/^:?-+:?$/.test(t)) {
        return false;
      }

      if (t.charCodeAt(t.length - 1) === 0x3A
      /* : */
      ) {
          aligns.push(t.charCodeAt(0) === 0x3A
          /* : */
          ? 'center' : 'right');
        } else if (t.charCodeAt(0) === 0x3A
      /* : */
      ) {
          aligns.push('left');
        } else {
        aligns.push('');
      }
    }

    lineText = getLine(state, startLine).trim();

    if (lineText.indexOf('|') === -1) {
      return false;
    }

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    columns = escapedSplit(lineText.replace(/^\||\|$/g, '')); // header row will define an amount of columns in the entire table,
    // and align row shouldn't be smaller than that (the rest of the rows can)

    columnCount = columns.length;

    if (columnCount > aligns.length) {
      return false;
    }

    if (silent) {
      return true;
    }

    token = state.push('table_open', 'table', 1);
    token.map = tableLines = [startLine, 0];
    token = state.push('thead_open', 'thead', 1);
    token.map = [startLine, startLine + 1];
    token = state.push('tr_open', 'tr', 1);
    token.map = [startLine, startLine + 1];

    for (i = 0; i < columns.length; i++) {
      token = state.push('th_open', 'th', 1);
      token.map = [startLine, startLine + 1];

      if (aligns[i]) {
        token.attrs = [['style', 'text-align:' + aligns[i]]];
      }

      token = state.push('inline', '', 0);
      token.content = columns[i].trim();
      token.map = [startLine, startLine + 1];
      token.children = [];
      token = state.push('th_close', 'th', -1);
    }

    token = state.push('tr_close', 'tr', -1);
    token = state.push('thead_close', 'thead', -1);
    token = state.push('tbody_open', 'tbody', 1);
    token.map = tbodyLines = [startLine + 2, 0];

    for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }

      lineText = getLine(state, nextLine).trim();

      if (lineText.indexOf('|') === -1) {
        break;
      }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        break;
      }

      columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));
      token = state.push('tr_open', 'tr', 1);

      for (i = 0; i < columnCount; i++) {
        token = state.push('td_open', 'td', 1);

        if (aligns[i]) {
          token.attrs = [['style', 'text-align:' + aligns[i]]];
        }

        token = state.push('inline', '', 0);
        token.content = columns[i] ? columns[i].trim() : '';
        token.children = [];
        token = state.push('td_close', 'td', -1);
      }

      token = state.push('tr_close', 'tr', -1);
    }

    token = state.push('tbody_close', 'tbody', -1);
    token = state.push('table_close', 'table', -1);
    tableLines[1] = tbodyLines[1] = nextLine;
    state.line = nextLine;
    return true;
  };

  var code = function code(state, startLine, endLine
  /*, silent*/
  ) {
    var nextLine, last, token;

    if (state.sCount[startLine] - state.blkIndent < 4) {
      return false;
    }

    last = nextLine = startLine + 1;

    while (nextLine < endLine) {
      if (state.isEmpty(nextLine)) {
        nextLine++;
        continue;
      }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        nextLine++;
        last = nextLine;
        continue;
      }

      break;
    }

    state.line = last;
    token = state.push('code_block', 'code', 0);
    token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
    token.map = [startLine, state.line];
    return true;
  };

  var fence = function fence(state, startLine, endLine, silent) {
    var marker,
        len,
        params,
        nextLine,
        mem,
        token,
        markup,
        haveEndMarker = false,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    if (pos + 3 > max) {
      return false;
    }

    marker = state.src.charCodeAt(pos);

    if (marker !== 0x7E
    /* ~ */
    && marker !== 0x60
    /* ` */
    ) {
        return false;
      } // scan marker length


    mem = pos;
    pos = state.skipChars(pos, marker);
    len = pos - mem;

    if (len < 3) {
      return false;
    }

    markup = state.src.slice(mem, pos);
    params = state.src.slice(pos, max);

    if (marker === 0x60
    /* ` */
    ) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) {
          return false;
        }
      } // Since start is found, we can report success here in validation mode


    if (silent) {
      return true;
    } // search end of block


    nextLine = startLine;

    for (;;) {
      nextLine++;

      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (state.src.charCodeAt(pos) !== marker) {
        continue;
      }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      pos = state.skipChars(pos, marker); // closing code fence must be at least as long as the opening one

      if (pos - mem < len) {
        continue;
      } // make sure tail has spaces only


      pos = state.skipSpaces(pos);

      if (pos < max) {
        continue;
      }

      haveEndMarker = true; // found!

      break;
    } // If a fence has heading spaces, they should be removed from its inner block


    len = state.sCount[startLine];
    state.line = nextLine + (haveEndMarker ? 1 : 0);
    token = state.push('fence', 'code', 0);
    token.info = params;
    token.content = state.getLines(startLine + 1, nextLine, len, true);
    token.markup = markup;
    token.map = [startLine, state.line];
    return true;
  };

  var isSpace$9 = require$$0$5.isSpace;

  var blockquote = function blockquote(state, startLine, endLine, silent) {
    var adjustTab,
        ch,
        i,
        initial,
        l,
        lastLineEmpty,
        lines,
        nextLine,
        offset,
        oldBMarks,
        oldBSCount,
        oldIndent,
        oldParentType,
        oldSCount,
        oldTShift,
        spaceAfterMarker,
        terminate,
        terminatorRules,
        token,
        wasOutdented,
        oldLineMax = state.lineMax,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    } // check the block quote marker


    if (state.src.charCodeAt(pos++) !== 0x3E
    /* > */
    ) {
        return false;
      } // we know that it's going to be a valid blockquote,
    // so no point trying to find the end of it in silent mode


    if (silent) {
      return true;
    } // skip spaces after ">" and re-calculate offset


    initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]); // skip one optional space after '>'

    if (state.src.charCodeAt(pos) === 0x20
    /* space */
    ) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09
    /* tab */
    ) {
        spaceAfterMarker = true;

        if ((state.bsCount[startLine] + offset) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
      spaceAfterMarker = false;
    }

    oldBMarks = [state.bMarks[startLine]];
    state.bMarks[startLine] = pos;

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (isSpace$9(ch)) {
        if (ch === 0x09) {
          offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
        } else {
          offset++;
        }
      } else {
        break;
      }

      pos++;
    }

    oldBSCount = [state.bsCount[startLine]];
    state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
    lastLineEmpty = pos >= max;
    oldSCount = [state.sCount[startLine]];
    state.sCount[startLine] = offset - initial;
    oldTShift = [state.tShift[startLine]];
    state.tShift[startLine] = pos - state.bMarks[startLine];
    terminatorRules = state.md.block.ruler.getRules('blockquote');
    oldParentType = state.parentType;
    state.parentType = 'blockquote';
    wasOutdented = false; // Search the end of the block
    //
    // Block ends with either:
    //  1. an empty line outside:
    //     ```
    //     > test
    //
    //     ```
    //  2. an empty line inside:
    //     ```
    //     >
    //     test
    //     ```
    //  3. another tag:
    //     ```
    //     > test
    //      - - -
    //     ```

    for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
      // check if it's outdented, i.e. it's inside list item and indented
      // less than said list item:
      //
      // ```
      // 1. anything
      //    > current blockquote
      // 2. checking this line
      // ```
      if (state.sCount[nextLine] < state.blkIndent) wasOutdented = true;
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos >= max) {
        // Case 1: line is not inside the blockquote, and this line is empty.
        break;
      }

      if (state.src.charCodeAt(pos++) === 0x3E
      /* > */
      && !wasOutdented) {
        // This line is inside the blockquote.
        // skip spaces after ">" and re-calculate offset
        initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]); // skip one optional space after '>'

        if (state.src.charCodeAt(pos) === 0x20
        /* space */
        ) {
            // ' >   test '
            //     ^ -- position start of line here:
            pos++;
            initial++;
            offset++;
            adjustTab = false;
            spaceAfterMarker = true;
          } else if (state.src.charCodeAt(pos) === 0x09
        /* tab */
        ) {
            spaceAfterMarker = true;

            if ((state.bsCount[nextLine] + offset) % 4 === 3) {
              // '  >\t  test '
              //       ^ -- position start of line here (tab has width===1)
              pos++;
              initial++;
              offset++;
              adjustTab = false;
            } else {
              // ' >\t  test '
              //    ^ -- position start of line here + shift bsCount slightly
              //         to make extra space appear
              adjustTab = true;
            }
          } else {
          spaceAfterMarker = false;
        }

        oldBMarks.push(state.bMarks[nextLine]);
        state.bMarks[nextLine] = pos;

        while (pos < max) {
          ch = state.src.charCodeAt(pos);

          if (isSpace$9(ch)) {
            if (ch === 0x09) {
              offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }

          pos++;
        }

        lastLineEmpty = pos >= max;
        oldBSCount.push(state.bsCount[nextLine]);
        state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = offset - initial;
        oldTShift.push(state.tShift[nextLine]);
        state.tShift[nextLine] = pos - state.bMarks[nextLine];
        continue;
      } // Case 2: line is not inside the blockquote, and the last line was empty.


      if (lastLineEmpty) {
        break;
      } // Case 3: another tag found.


      terminate = false;

      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        // Quirk to enforce "hard termination mode" for paragraphs;
        // normally if you call `tokenize(state, startLine, nextLine)`,
        // paragraphs will look below nextLine for paragraph continuation,
        // but if blockquote is terminated by another tag, they shouldn't
        state.lineMax = nextLine;

        if (state.blkIndent !== 0) {
          // state.blkIndent was non-zero, we now set it to zero,
          // so we need to re-calculate all offsets to appear as
          // if indent wasn't changed
          oldBMarks.push(state.bMarks[nextLine]);
          oldBSCount.push(state.bsCount[nextLine]);
          oldTShift.push(state.tShift[nextLine]);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] -= state.blkIndent;
        }

        break;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      oldBSCount.push(state.bsCount[nextLine]);
      oldTShift.push(state.tShift[nextLine]);
      oldSCount.push(state.sCount[nextLine]); // A negative indentation means that this is a paragraph continuation
      //

      state.sCount[nextLine] = -1;
    }

    oldIndent = state.blkIndent;
    state.blkIndent = 0;
    token = state.push('blockquote_open', 'blockquote', 1);
    token.markup = '>';
    token.map = lines = [startLine, 0];
    state.md.block.tokenize(state, startLine, nextLine);
    token = state.push('blockquote_close', 'blockquote', -1);
    token.markup = '>';
    state.lineMax = oldLineMax;
    state.parentType = oldParentType;
    lines[1] = state.line; // Restore original tShift; this might not be necessary since the parser
    // has already been here, but just to make sure we can do that.

    for (i = 0; i < oldTShift.length; i++) {
      state.bMarks[i + startLine] = oldBMarks[i];
      state.tShift[i + startLine] = oldTShift[i];
      state.sCount[i + startLine] = oldSCount[i];
      state.bsCount[i + startLine] = oldBSCount[i];
    }

    state.blkIndent = oldIndent;
    return true;
  };

  var isSpace$8 = require$$0$5.isSpace;

  var hr = function hr(state, startLine, endLine, silent) {
    var marker,
        cnt,
        ch,
        token,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    marker = state.src.charCodeAt(pos++); // Check hr marker

    if (marker !== 0x2A
    /* * */
    && marker !== 0x2D
    /* - */
    && marker !== 0x5F
    /* _ */
    ) {
        return false;
      } // markers can be mixed with spaces, but there should be at least 3 of them


    cnt = 1;

    while (pos < max) {
      ch = state.src.charCodeAt(pos++);

      if (ch !== marker && !isSpace$8(ch)) {
        return false;
      }

      if (ch === marker) {
        cnt++;
      }
    }

    if (cnt < 3) {
      return false;
    }

    if (silent) {
      return true;
    }

    state.line = startLine + 1;
    token = state.push('hr', 'hr', 0);
    token.map = [startLine, state.line];
    token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
    return true;
  };

  var isSpace$7 = require$$0$5.isSpace; // Search `[-+*][\n ]`, returns next pos after marker on success
  // or -1 on fail.


  function skipBulletListMarker(state, startLine) {
    var marker, pos, max, ch;
    pos = state.bMarks[startLine] + state.tShift[startLine];
    max = state.eMarks[startLine];
    marker = state.src.charCodeAt(pos++); // Check bullet

    if (marker !== 0x2A
    /* * */
    && marker !== 0x2D
    /* - */
    && marker !== 0x2B
    /* + */
    ) {
        return -1;
      }

    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (!isSpace$7(ch)) {
        // " -test " - is not a list item
        return -1;
      }
    }

    return pos;
  } // Search `\d+[.)][\n ]`, returns next pos after marker on success
  // or -1 on fail.


  function skipOrderedListMarker(state, startLine) {
    var ch,
        start = state.bMarks[startLine] + state.tShift[startLine],
        pos = start,
        max = state.eMarks[startLine]; // List marker should have at least 2 chars (digit + dot)

    if (pos + 1 >= max) {
      return -1;
    }

    ch = state.src.charCodeAt(pos++);

    if (ch < 0x30
    /* 0 */
    || ch > 0x39
    /* 9 */
    ) {
        return -1;
      }

    for (;;) {
      // EOL -> fail
      if (pos >= max) {
        return -1;
      }

      ch = state.src.charCodeAt(pos++);

      if (ch >= 0x30
      /* 0 */
      && ch <= 0x39
      /* 9 */
      ) {
          // List marker should have no more than 9 digits
          // (prevents integer overflow in browsers)
          if (pos - start >= 10) {
            return -1;
          }

          continue;
        } // found valid marker


      if (ch === 0x29
      /* ) */
      || ch === 0x2e
      /* . */
      ) {
          break;
        }

      return -1;
    }

    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (!isSpace$7(ch)) {
        // " 1.test " - is not a list item
        return -1;
      }
    }

    return pos;
  }

  function markTightParagraphs(state, idx) {
    var i,
        l,
        level = state.level + 2;

    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
        state.tokens[i + 2].hidden = true;
        state.tokens[i].hidden = true;
        i += 2;
      }
    }
  }

  var list = function list(state, startLine, endLine, silent) {
    var ch,
        contentStart,
        i,
        indent,
        indentAfterMarker,
        initial,
        isOrdered,
        itemLines,
        l,
        listLines,
        listTokIdx,
        markerCharCode,
        markerValue,
        max,
        nextLine,
        offset,
        oldListIndent,
        oldParentType,
        oldSCount,
        oldTShift,
        oldTight,
        pos,
        posAfterMarker,
        prevEmptyEnd,
        start,
        terminate,
        terminatorRules,
        token,
        isTerminatingParagraph = false,
        tight = true; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    } // Special case:
    //  - item 1
    //   - item 2
    //    - item 3
    //     - item 4
    //      - this one is a paragraph continuation


    if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
      return false;
    } // limit conditions when list can interrupt
    // a paragraph (validation mode only)


    if (silent && state.parentType === 'paragraph') {
      // Next list item should still terminate previous list item;
      //
      // This code can fail if plugins use blkIndent as well as lists,
      // but I hope the spec gets fixed long before that happens.
      //
      if (state.tShift[startLine] >= state.blkIndent) {
        isTerminatingParagraph = true;
      }
    } // Detect list type and position after marker


    if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
      isOrdered = true;
      start = state.bMarks[startLine] + state.tShift[startLine];
      markerValue = Number(state.src.substr(start, posAfterMarker - start - 1)); // If we're starting a new ordered list right after
      // a paragraph, it should start with 1.

      if (isTerminatingParagraph && markerValue !== 1) return false;
    } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
      isOrdered = false;
    } else {
      return false;
    } // If we're starting a new unordered list right after
    // a paragraph, first line should not be empty.


    if (isTerminatingParagraph) {
      if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
    } // We should terminate list on style change. Remember first one to compare.


    markerCharCode = state.src.charCodeAt(posAfterMarker - 1); // For validation mode we can terminate immediately

    if (silent) {
      return true;
    } // Start list


    listTokIdx = state.tokens.length;

    if (isOrdered) {
      token = state.push('ordered_list_open', 'ol', 1);

      if (markerValue !== 1) {
        token.attrs = [['start', markerValue]];
      }
    } else {
      token = state.push('bullet_list_open', 'ul', 1);
    }

    token.map = listLines = [startLine, 0];
    token.markup = String.fromCharCode(markerCharCode); //
    // Iterate list items
    //

    nextLine = startLine;
    prevEmptyEnd = false;
    terminatorRules = state.md.block.ruler.getRules('list');
    oldParentType = state.parentType;
    state.parentType = 'list';

    while (nextLine < endLine) {
      pos = posAfterMarker;
      max = state.eMarks[nextLine];
      initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (ch === 0x09) {
          offset += 4 - (offset + state.bsCount[nextLine]) % 4;
        } else if (ch === 0x20) {
          offset++;
        } else {
          break;
        }

        pos++;
      }

      contentStart = pos;

      if (contentStart >= max) {
        // trimming space in "-    \n  3" case, indent is 1 here
        indentAfterMarker = 1;
      } else {
        indentAfterMarker = offset - initial;
      } // If we have more than 4 spaces, the indent is 1
      // (the rest is just indented code block)


      if (indentAfterMarker > 4) {
        indentAfterMarker = 1;
      } // "  -  test"
      //  ^^^^^ - calculating total length of this thing


      indent = initial + indentAfterMarker; // Run subparser & write tokens

      token = state.push('list_item_open', 'li', 1);
      token.markup = String.fromCharCode(markerCharCode);
      token.map = itemLines = [startLine, 0]; // change current state, then restore it after parser subcall

      oldTight = state.tight;
      oldTShift = state.tShift[startLine];
      oldSCount = state.sCount[startLine]; //  - example list
      // ^ listIndent position will be here
      //   ^ blkIndent position will be here
      //

      oldListIndent = state.listIndent;
      state.listIndent = state.blkIndent;
      state.blkIndent = indent;
      state.tight = true;
      state.tShift[startLine] = contentStart - state.bMarks[startLine];
      state.sCount[startLine] = offset;

      if (contentStart >= max && state.isEmpty(startLine + 1)) {
        // workaround for this case
        // (list item is empty, list terminates before "foo"):
        // ~~~~~~~~
        //   -
        //
        //     foo
        // ~~~~~~~~
        state.line = Math.min(state.line + 2, endLine);
      } else {
        state.md.block.tokenize(state, startLine, endLine, true);
      } // If any of list item is tight, mark list as tight


      if (!state.tight || prevEmptyEnd) {
        tight = false;
      } // Item become loose if finish with empty line,
      // but we should filter last element, because it means list finish


      prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
      state.blkIndent = state.listIndent;
      state.listIndent = oldListIndent;
      state.tShift[startLine] = oldTShift;
      state.sCount[startLine] = oldSCount;
      state.tight = oldTight;
      token = state.push('list_item_close', 'li', -1);
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine = state.line;
      itemLines[1] = nextLine;
      contentStart = state.bMarks[startLine];

      if (nextLine >= endLine) {
        break;
      } //
      // Try to check if list is terminated or continued.
      //


      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      } // if it's indented more than 3 spaces, it should be a code block


      if (state.sCount[startLine] - state.blkIndent >= 4) {
        break;
      } // fail if terminating block found


      terminate = false;

      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        break;
      } // fail if list has another type


      if (isOrdered) {
        posAfterMarker = skipOrderedListMarker(state, nextLine);

        if (posAfterMarker < 0) {
          break;
        }
      } else {
        posAfterMarker = skipBulletListMarker(state, nextLine);

        if (posAfterMarker < 0) {
          break;
        }
      }

      if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
        break;
      }
    } // Finalize list


    if (isOrdered) {
      token = state.push('ordered_list_close', 'ol', -1);
    } else {
      token = state.push('bullet_list_close', 'ul', -1);
    }

    token.markup = String.fromCharCode(markerCharCode);
    listLines[1] = nextLine;
    state.line = nextLine;
    state.parentType = oldParentType; // mark paragraphs tight if needed

    if (tight) {
      markTightParagraphs(state, listTokIdx);
    }

    return true;
  };

  var normalizeReference$2 = require$$0$5.normalizeReference;

  var isSpace$6 = require$$0$5.isSpace;

  var reference = function reference(state, startLine, _endLine, silent) {
    var ch,
        destEndPos,
        destEndLineNo,
        endLine,
        href,
        i,
        l,
        label,
        labelEnd,
        oldParentType,
        res,
        start,
        str,
        terminate,
        terminatorRules,
        title,
        lines = 0,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine],
        nextLine = startLine + 1; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    if (state.src.charCodeAt(pos) !== 0x5B
    /* [ */
    ) {
        return false;
      } // Simple check to quickly interrupt scan on [link](url) at the start of line.
    // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54


    while (++pos < max) {
      if (state.src.charCodeAt(pos) === 0x5D
      /* ] */
      && state.src.charCodeAt(pos - 1) !== 0x5C
      /* \ */
      ) {
          if (pos + 1 === max) {
            return false;
          }

          if (state.src.charCodeAt(pos + 1) !== 0x3A
          /* : */
          ) {
              return false;
            }

          break;
        }
    }

    endLine = state.lineMax; // jump line-by-line until empty one or EOF

    terminatorRules = state.md.block.ruler.getRules('reference');
    oldParentType = state.parentType;
    state.parentType = 'reference';

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      } // quirk for blockquotes, this line should already be checked by that rule


      if (state.sCount[nextLine] < 0) {
        continue;
      } // Some tags can terminate paragraph without empty line.


      terminate = false;

      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        break;
      }
    }

    str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    max = str.length;

    for (pos = 1; pos < max; pos++) {
      ch = str.charCodeAt(pos);

      if (ch === 0x5B
      /* [ */
      ) {
          return false;
        } else if (ch === 0x5D
      /* ] */
      ) {
          labelEnd = pos;
          break;
        } else if (ch === 0x0A
      /* \n */
      ) {
          lines++;
        } else if (ch === 0x5C
      /* \ */
      ) {
          pos++;

          if (pos < max && str.charCodeAt(pos) === 0x0A) {
            lines++;
          }
        }
    }

    if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A
    /* : */
    ) {
        return false;
      } // [label]:   destination   'title'
    //         ^^^ skip optional whitespace here


    for (pos = labelEnd + 2; pos < max; pos++) {
      ch = str.charCodeAt(pos);

      if (ch === 0x0A) {
        lines++;
      } else if (isSpace$6(ch)) ; else {
        break;
      }
    } // [label]:   destination   'title'
    //            ^^^^^^^^^^^ parse this


    res = state.md.helpers.parseLinkDestination(str, pos, max);

    if (!res.ok) {
      return false;
    }

    href = state.md.normalizeLink(res.str);

    if (!state.md.validateLink(href)) {
      return false;
    }

    pos = res.pos;
    lines += res.lines; // save cursor state, we could require to rollback later

    destEndPos = pos;
    destEndLineNo = lines; // [label]:   destination   'title'
    //                       ^^^ skipping those spaces

    start = pos;

    for (; pos < max; pos++) {
      ch = str.charCodeAt(pos);

      if (ch === 0x0A) {
        lines++;
      } else if (isSpace$6(ch)) ; else {
        break;
      }
    } // [label]:   destination   'title'
    //                          ^^^^^^^ parse this


    res = state.md.helpers.parseLinkTitle(str, pos, max);

    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;
      lines += res.lines;
    } else {
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
    } // skip trailing spaces until the rest of the line


    while (pos < max) {
      ch = str.charCodeAt(pos);

      if (!isSpace$6(ch)) {
        break;
      }

      pos++;
    }

    if (pos < max && str.charCodeAt(pos) !== 0x0A) {
      if (title) {
        // garbage at the end of the line after title,
        // but it could still be a valid reference if we roll back
        title = '';
        pos = destEndPos;
        lines = destEndLineNo;

        while (pos < max) {
          ch = str.charCodeAt(pos);

          if (!isSpace$6(ch)) {
            break;
          }

          pos++;
        }
      }
    }

    if (pos < max && str.charCodeAt(pos) !== 0x0A) {
      // garbage at the end of the line
      return false;
    }

    label = normalizeReference$2(str.slice(1, labelEnd));

    if (!label) {
      // CommonMark 0.20 disallows empty labels
      return false;
    } // Reference can not terminate anything. This check is for safety only.

    /*istanbul ignore if*/


    if (silent) {
      return true;
    }

    if (typeof state.env.references === 'undefined') {
      state.env.references = {};
    }

    if (typeof state.env.references[label] === 'undefined') {
      state.env.references[label] = {
        title: title,
        href: href
      };
    }

    state.parentType = oldParentType;
    state.line = startLine + lines + 1;
    return true;
  };

  var isSpace$5 = require$$0$5.isSpace;

  var heading = function heading(state, startLine, endLine, silent) {
    var ch,
        level,
        tmp,
        token,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    ch = state.src.charCodeAt(pos);

    if (ch !== 0x23
    /* # */
    || pos >= max) {
      return false;
    } // count heading level


    level = 1;
    ch = state.src.charCodeAt(++pos);

    while (ch === 0x23
    /* # */
    && pos < max && level <= 6) {
      level++;
      ch = state.src.charCodeAt(++pos);
    }

    if (level > 6 || pos < max && !isSpace$5(ch)) {
      return false;
    }

    if (silent) {
      return true;
    } // Let's cut tails like '    ###  ' from the end of string


    max = state.skipSpacesBack(max, pos);
    tmp = state.skipCharsBack(max, 0x23, pos); // #

    if (tmp > pos && isSpace$5(state.src.charCodeAt(tmp - 1))) {
      max = tmp;
    }

    state.line = startLine + 1;
    token = state.push('heading_open', 'h' + String(level), 1);
    token.markup = '########'.slice(0, level);
    token.map = [startLine, state.line];
    token = state.push('inline', '', 0);
    token.content = state.src.slice(pos, max).trim();
    token.map = [startLine, state.line];
    token.children = [];
    token = state.push('heading_close', 'h' + String(level), -1);
    token.markup = '########'.slice(0, level);
    return true;
  };

  var lheading = function lheading(state, startLine, endLine
  /*, silent*/
  ) {
    var content,
        terminate,
        i,
        l,
        token,
        pos,
        max,
        level,
        marker,
        nextLine = startLine + 1,
        oldParentType,
        terminatorRules = state.md.block.ruler.getRules('paragraph'); // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    oldParentType = state.parentType;
    state.parentType = 'paragraph'; // use paragraph to match terminatorRules
    // jump line-by-line until empty one or EOF

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      } //
      // Check for underline in setext header
      //


      if (state.sCount[nextLine] >= state.blkIndent) {
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos < max) {
          marker = state.src.charCodeAt(pos);

          if (marker === 0x2D
          /* - */
          || marker === 0x3D
          /* = */
          ) {
              pos = state.skipChars(pos, marker);
              pos = state.skipSpaces(pos);

              if (pos >= max) {
                level = marker === 0x3D
                /* = */
                ? 1 : 2;
                break;
              }
            }
        }
      } // quirk for blockquotes, this line should already be checked by that rule


      if (state.sCount[nextLine] < 0) {
        continue;
      } // Some tags can terminate paragraph without empty line.


      terminate = false;

      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        break;
      }
    }

    if (!level) {
      // Didn't find valid underline
      return false;
    }

    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine + 1;
    token = state.push('heading_open', 'h' + String(level), 1);
    token.markup = String.fromCharCode(marker);
    token.map = [startLine, state.line];
    token = state.push('inline', '', 0);
    token.content = content;
    token.map = [startLine, state.line - 1];
    token.children = [];
    token = state.push('heading_close', 'h' + String(level), -1);
    token.markup = String.fromCharCode(marker);
    state.parentType = oldParentType;
    return true;
  };

  var html_blocks = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'meta', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];

  var html_re = {};

  var attr_name = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
  var unquoted = '[^"\'=<>`\\x00-\\x20]+';
  var single_quoted = "'[^']*'";
  var double_quoted = '"[^"]*"';
  var attr_value = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';
  var attribute = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';
  var open_tag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
  var close_tag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
  var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
  var processing = '<[?].*?[?]>';
  var declaration = '<![A-Z]+\\s+[^>]*>';
  var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
  var HTML_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');
  var HTML_OPEN_CLOSE_TAG_RE$1 = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');
  html_re.HTML_TAG_RE = HTML_TAG_RE$1;
  html_re.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE$1;

  var block_names = html_blocks;

  var HTML_OPEN_CLOSE_TAG_RE = html_re.HTML_OPEN_CLOSE_TAG_RE; // An array of opening and corresponding closing sequences for html tags,
  // last argument defines whether it can terminate a paragraph or not
  //


  var HTML_SEQUENCES = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true], [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'), /^$/, false]];

  var html_block = function html_block(state, startLine, endLine, silent) {
    var i,
        nextLine,
        token,
        lineText,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }

    if (!state.md.options.html) {
      return false;
    }

    if (state.src.charCodeAt(pos) !== 0x3C
    /* < */
    ) {
        return false;
      }

    lineText = state.src.slice(pos, max);

    for (i = 0; i < HTML_SEQUENCES.length; i++) {
      if (HTML_SEQUENCES[i][0].test(lineText)) {
        break;
      }
    }

    if (i === HTML_SEQUENCES.length) {
      return false;
    }

    if (silent) {
      // true if this sequence can be a terminator, false otherwise
      return HTML_SEQUENCES[i][2];
    }

    nextLine = startLine + 1; // If we are here - we detected HTML block.
    // Let's roll down till block end.

    if (!HTML_SEQUENCES[i][1].test(lineText)) {
      for (; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }

        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];
        lineText = state.src.slice(pos, max);

        if (HTML_SEQUENCES[i][1].test(lineText)) {
          if (lineText.length !== 0) {
            nextLine++;
          }

          break;
        }
      }
    }

    state.line = nextLine;
    token = state.push('html_block', '', 0);
    token.map = [startLine, nextLine];
    token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
    return true;
  };

  var paragraph = function paragraph(state, startLine
  /*, endLine*/
  ) {
    var content,
        terminate,
        i,
        l,
        token,
        oldParentType,
        nextLine = startLine + 1,
        terminatorRules = state.md.block.ruler.getRules('paragraph'),
        endLine = state.lineMax;
    oldParentType = state.parentType;
    state.parentType = 'paragraph'; // jump line-by-line until empty one or EOF

    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
      // this would be a code block normally, but after paragraph
      // it's considered a lazy continuation regardless of what's there
      if (state.sCount[nextLine] - state.blkIndent > 3) {
        continue;
      } // quirk for blockquotes, this line should already be checked by that rule


      if (state.sCount[nextLine] < 0) {
        continue;
      } // Some tags can terminate paragraph without empty line.


      terminate = false;

      for (i = 0, l = terminatorRules.length; i < l; i++) {
        if (terminatorRules[i](state, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }

      if (terminate) {
        break;
      }
    }

    content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
    state.line = nextLine;
    token = state.push('paragraph_open', 'p', 1);
    token.map = [startLine, state.line];
    token = state.push('inline', '', 0);
    token.content = content;
    token.map = [startLine, state.line];
    token.children = [];
    token = state.push('paragraph_close', 'p', -1);
    state.parentType = oldParentType;
    return true;
  };

  var Token$1 = token;

  var isSpace$4 = require$$0$5.isSpace;

  function StateBlock(src, md, env, tokens) {
    var ch, s, start, pos, len, indent, offset, indent_found;
    this.src = src; // link to parser instance

    this.md = md;
    this.env = env; //
    // Internal state vartiables
    //

    this.tokens = tokens;
    this.bMarks = []; // line begin offsets for fast jumps

    this.eMarks = []; // line end offsets for fast jumps

    this.tShift = []; // offsets of the first non-space characters (tabs not expanded)

    this.sCount = []; // indents for each line (tabs expanded)
    // An amount of virtual spaces (tabs expanded) between beginning
    // of each line (bMarks) and real beginning of that line.
    //
    // It exists only as a hack because blockquotes override bMarks
    // losing information in the process.
    //
    // It's used only when expanding tabs, you can think about it as
    // an initial tab length, e.g. bsCount=21 applied to string `\t123`
    // means first tab should be expanded to 4-21%4 === 3 spaces.
    //

    this.bsCount = []; // block parser variables

    this.blkIndent = 0; // required block content indent (for example, if we are
    // inside a list, it would be positioned after list marker)

    this.line = 0; // line index in src

    this.lineMax = 0; // lines count

    this.tight = false; // loose/tight mode for lists

    this.ddIndent = -1; // indent of the current dd block (-1 if there isn't any)

    this.listIndent = -1; // indent of the current list block (-1 if there isn't any)
    // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
    // used in lists to determine if they interrupt a paragraph

    this.parentType = 'root';
    this.level = 0; // renderer

    this.result = ''; // Create caches
    // Generate markers.

    s = this.src;
    indent_found = false;

    for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
      ch = s.charCodeAt(pos);

      if (!indent_found) {
        if (isSpace$4(ch)) {
          indent++;

          if (ch === 0x09) {
            offset += 4 - offset % 4;
          } else {
            offset++;
          }

          continue;
        } else {
          indent_found = true;
        }
      }

      if (ch === 0x0A || pos === len - 1) {
        if (ch !== 0x0A) {
          pos++;
        }

        this.bMarks.push(start);
        this.eMarks.push(pos);
        this.tShift.push(indent);
        this.sCount.push(offset);
        this.bsCount.push(0);
        indent_found = false;
        indent = 0;
        offset = 0;
        start = pos + 1;
      }
    } // Push fake entry to simplify cache bounds checks


    this.bMarks.push(s.length);
    this.eMarks.push(s.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1; // don't count last fake line
  } // Push new token to "stream".
  //


  StateBlock.prototype.push = function (type, tag, nesting) {
    var token = new Token$1(type, tag, nesting);
    token.block = true;
    if (nesting < 0) this.level--; // closing tag

    token.level = this.level;
    if (nesting > 0) this.level++; // opening tag

    this.tokens.push(token);
    return token;
  };

  StateBlock.prototype.isEmpty = function isEmpty(line) {
    return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
  };

  StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
    for (var max = this.lineMax; from < max; from++) {
      if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
        break;
      }
    }

    return from;
  }; // Skip spaces from given position.


  StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
    var ch;

    for (var max = this.src.length; pos < max; pos++) {
      ch = this.src.charCodeAt(pos);

      if (!isSpace$4(ch)) {
        break;
      }
    }

    return pos;
  }; // Skip spaces from given position in reverse.


  StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
    if (pos <= min) {
      return pos;
    }

    while (pos > min) {
      if (!isSpace$4(this.src.charCodeAt(--pos))) {
        return pos + 1;
      }
    }

    return pos;
  }; // Skip char codes from given position


  StateBlock.prototype.skipChars = function skipChars(pos, code) {
    for (var max = this.src.length; pos < max; pos++) {
      if (this.src.charCodeAt(pos) !== code) {
        break;
      }
    }

    return pos;
  }; // Skip char codes reverse from given position - 1


  StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
    if (pos <= min) {
      return pos;
    }

    while (pos > min) {
      if (code !== this.src.charCodeAt(--pos)) {
        return pos + 1;
      }
    }

    return pos;
  }; // cut lines range from source.


  StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
    var i,
        lineIndent,
        ch,
        first,
        last,
        queue,
        lineStart,
        line = begin;

    if (begin >= end) {
      return '';
    }

    queue = new Array(end - begin);

    for (i = 0; line < end; line++, i++) {
      lineIndent = 0;
      lineStart = first = this.bMarks[line];

      if (line + 1 < end || keepLastLF) {
        // No need for bounds check because we have fake entry on tail.
        last = this.eMarks[line] + 1;
      } else {
        last = this.eMarks[line];
      }

      while (first < last && lineIndent < indent) {
        ch = this.src.charCodeAt(first);

        if (isSpace$4(ch)) {
          if (ch === 0x09) {
            lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
          } else {
            lineIndent++;
          }
        } else if (first - lineStart < this.tShift[line]) {
          // patched tShift masked characters to look like spaces (blockquotes, list markers)
          lineIndent++;
        } else {
          break;
        }

        first++;
      }

      if (lineIndent > indent) {
        // partially expanding tabs in code blocks, e.g '\t\tfoobar'
        // with indent=2 becomes '  \tfoobar'
        queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
      } else {
        queue[i] = this.src.slice(first, last);
      }
    }

    return queue.join('');
  }; // re-export Token class to use in block rules


  StateBlock.prototype.Token = Token$1;
  var state_block = StateBlock;

  /** internal
   * class ParserBlock
   *
   * Block-level tokenizer.
   **/

  var Ruler$1 = ruler;

  var _rules$1 = [// First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ['table', table, ['paragraph', 'reference']], ['code', code], ['fence', fence, ['paragraph', 'reference', 'blockquote', 'list']], ['blockquote', blockquote, ['paragraph', 'reference', 'blockquote', 'list']], ['hr', hr, ['paragraph', 'reference', 'blockquote', 'list']], ['list', list, ['paragraph', 'reference', 'blockquote']], ['reference', reference], ['heading', heading, ['paragraph', 'reference', 'blockquote']], ['lheading', lheading], ['html_block', html_block, ['paragraph', 'reference', 'blockquote']], ['paragraph', paragraph]];
  /**
   * new ParserBlock()
   **/

  function ParserBlock$1() {
    /**
     * ParserBlock#ruler -> Ruler
     *
     * [[Ruler]] instance. Keep configuration of block rules.
     **/
    this.ruler = new Ruler$1();

    for (var i = 0; i < _rules$1.length; i++) {
      this.ruler.push(_rules$1[i][0], _rules$1[i][1], {
        alt: (_rules$1[i][2] || []).slice()
      });
    }
  } // Generate tokens for input range
  //


  ParserBlock$1.prototype.tokenize = function (state, startLine, endLine) {
    var ok,
        i,
        rules = this.ruler.getRules(''),
        len = rules.length,
        line = startLine,
        hasEmptyLines = false,
        maxNesting = state.md.options.maxNesting;

    while (line < endLine) {
      state.line = line = state.skipEmptyLines(line);

      if (line >= endLine) {
        break;
      } // Termination condition for nested calls.
      // Nested calls currently used for blockquotes & lists


      if (state.sCount[line] < state.blkIndent) {
        break;
      } // If nesting level exceeded - skip tail to the end. That's not ordinary
      // situation and we should not care about content.


      if (state.level >= maxNesting) {
        state.line = endLine;
        break;
      } // Try all possible rules.
      // On success, rule should:
      //
      // - update `state.line`
      // - update `state.tokens`
      // - return true


      for (i = 0; i < len; i++) {
        ok = rules[i](state, line, endLine, false);

        if (ok) {
          break;
        }
      } // set state.tight if we had an empty line before current tag
      // i.e. latest empty line should not count


      state.tight = !hasEmptyLines; // paragraph might "eat" one newline after it in nested lists

      if (state.isEmpty(state.line - 1)) {
        hasEmptyLines = true;
      }

      line = state.line;

      if (line < endLine && state.isEmpty(line)) {
        hasEmptyLines = true;
        line++;
        state.line = line;
      }
    }
  };
  /**
   * ParserBlock.parse(str, md, env, outTokens)
   *
   * Process input string and push block tokens into `outTokens`
   **/


  ParserBlock$1.prototype.parse = function (src, md, env, outTokens) {
    var state;

    if (!src) {
      return;
    }

    state = new this.State(src, md, env, outTokens);
    this.tokenize(state, state.line, state.lineMax);
  };

  ParserBlock$1.prototype.State = state_block;
  var parser_block = ParserBlock$1;

  // '{}$%@~+=:' reserved for extentions
  // !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
  // !!!! Don't confuse with "Markdown ASCII Punctuation" chars
  // http://spec.commonmark.org/0.15/#ascii-punctuation-character

  function isTerminatorChar(ch) {
    switch (ch) {
      case 0x0A
      /* \n */
      :
      case 0x21
      /* ! */
      :
      case 0x23
      /* # */
      :
      case 0x24
      /* $ */
      :
      case 0x25
      /* % */
      :
      case 0x26
      /* & */
      :
      case 0x2A
      /* * */
      :
      case 0x2B
      /* + */
      :
      case 0x2D
      /* - */
      :
      case 0x3A
      /* : */
      :
      case 0x3C
      /* < */
      :
      case 0x3D
      /* = */
      :
      case 0x3E
      /* > */
      :
      case 0x40
      /* @ */
      :
      case 0x5B
      /* [ */
      :
      case 0x5C
      /* \ */
      :
      case 0x5D
      /* ] */
      :
      case 0x5E
      /* ^ */
      :
      case 0x5F
      /* _ */
      :
      case 0x60
      /* ` */
      :
      case 0x7B
      /* { */
      :
      case 0x7D
      /* } */
      :
      case 0x7E
      /* ~ */
      :
        return true;

      default:
        return false;
    }
  }

  var text = function text(state, silent) {
    var pos = state.pos;

    while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
      pos++;
    }

    if (pos === state.pos) {
      return false;
    }

    if (!silent) {
      state.pending += state.src.slice(state.pos, pos);
    }

    state.pos = pos;
    return true;
  }; // Alternative implementation, for memory.

  var isSpace$3 = require$$0$5.isSpace;

  var newline = function newline(state, silent) {
    var pmax,
        max,
        pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x0A
    /* \n */
    ) {
        return false;
      }

    pmax = state.pending.length - 1;
    max = state.posMax; // '  \n' -> hardbreak
    // Lookup in pending chars is bad practice! Don't copy to other rules!
    // Pending string is stored in concat mode, indexed lookups will cause
    // convertion to flat mode.

    if (!silent) {
      if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
        if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
          state.pending = state.pending.replace(/ +$/, '');
          state.push('hardbreak', 'br', 0);
        } else {
          state.pending = state.pending.slice(0, -1);
          state.push('softbreak', 'br', 0);
        }
      } else {
        state.push('softbreak', 'br', 0);
      }
    }

    pos++; // skip heading spaces for next line

    while (pos < max && isSpace$3(state.src.charCodeAt(pos))) {
      pos++;
    }

    state.pos = pos;
    return true;
  };

  var isSpace$2 = require$$0$5.isSpace;

  var ESCAPED = [];

  for (var i = 0; i < 256; i++) {
    ESCAPED.push(0);
  }

  '\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (ch) {
    ESCAPED[ch.charCodeAt(0)] = 1;
  });

  var _escape = function escape(state, silent) {
    var ch,
        pos = state.pos,
        max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x5C
    /* \ */
    ) {
        return false;
      }

    pos++;

    if (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch < 256 && ESCAPED[ch] !== 0) {
        if (!silent) {
          state.pending += state.src[pos];
        }

        state.pos += 2;
        return true;
      }

      if (ch === 0x0A) {
        if (!silent) {
          state.push('hardbreak', 'br', 0);
        }

        pos++; // skip leading whitespaces from next line

        while (pos < max) {
          ch = state.src.charCodeAt(pos);

          if (!isSpace$2(ch)) {
            break;
          }

          pos++;
        }

        state.pos = pos;
        return true;
      }
    }

    if (!silent) {
      state.pending += '\\';
    }

    state.pos++;
    return true;
  };

  var backticks = function backtick(state, silent) {
    var start,
        max,
        marker,
        matchStart,
        matchEnd,
        token,
        pos = state.pos,
        ch = state.src.charCodeAt(pos);

    if (ch !== 0x60
    /* ` */
    ) {
        return false;
      }

    start = pos;
    pos++;
    max = state.posMax;

    while (pos < max && state.src.charCodeAt(pos) === 0x60
    /* ` */
    ) {
      pos++;
    }

    marker = state.src.slice(start, pos);
    matchStart = matchEnd = pos;

    while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
      matchEnd = matchStart + 1;

      while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60
      /* ` */
      ) {
        matchEnd++;
      }

      if (matchEnd - matchStart === marker.length) {
        if (!silent) {
          token = state.push('code_inline', 'code', 0);
          token.markup = marker;
          token.content = state.src.slice(pos, matchStart).replace(/\n/g, ' ').replace(/^ (.+) $/, '$1');
        }

        state.pos = matchEnd;
        return true;
      }
    }

    if (!silent) {
      state.pending += marker;
    }

    state.pos += marker.length;
    return true;
  };

  var strikethrough = {};

  //

  strikethrough.tokenize = function strikethrough(state, silent) {
    var i,
        scanned,
        token,
        len,
        ch,
        start = state.pos,
        marker = state.src.charCodeAt(start);

    if (silent) {
      return false;
    }

    if (marker !== 0x7E
    /* ~ */
    ) {
        return false;
      }

    scanned = state.scanDelims(state.pos, true);
    len = scanned.length;
    ch = String.fromCharCode(marker);

    if (len < 2) {
      return false;
    }

    if (len % 2) {
      token = state.push('text', '', 0);
      token.content = ch;
      len--;
    }

    for (i = 0; i < len; i += 2) {
      token = state.push('text', '', 0);
      token.content = ch + ch;
      state.delimiters.push({
        marker: marker,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        jump: i,
        token: state.tokens.length - 1,
        end: -1,
        open: scanned.can_open,
        close: scanned.can_close
      });
    }

    state.pos += scanned.length;
    return true;
  };

  function postProcess$1(state, delimiters) {
    var i,
        j,
        startDelim,
        endDelim,
        token,
        loneMarkers = [],
        max = delimiters.length;

    for (i = 0; i < max; i++) {
      startDelim = delimiters[i];

      if (startDelim.marker !== 0x7E
      /* ~ */
      ) {
          continue;
        }

      if (startDelim.end === -1) {
        continue;
      }

      endDelim = delimiters[startDelim.end];
      token = state.tokens[startDelim.token];
      token.type = 's_open';
      token.tag = 's';
      token.nesting = 1;
      token.markup = '~~';
      token.content = '';
      token = state.tokens[endDelim.token];
      token.type = 's_close';
      token.tag = 's';
      token.nesting = -1;
      token.markup = '~~';
      token.content = '';

      if (state.tokens[endDelim.token - 1].type === 'text' && state.tokens[endDelim.token - 1].content === '~') {
        loneMarkers.push(endDelim.token - 1);
      }
    } // If a marker sequence has an odd number of characters, it's splitted
    // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
    // start of the sequence.
    //
    // So, we have to move all those markers after subsequent s_close tags.
    //


    while (loneMarkers.length) {
      i = loneMarkers.pop();
      j = i + 1;

      while (j < state.tokens.length && state.tokens[j].type === 's_close') {
        j++;
      }

      j--;

      if (i !== j) {
        token = state.tokens[j];
        state.tokens[j] = state.tokens[i];
        state.tokens[i] = token;
      }
    }
  } // Walk through delimiter list and replace text tokens with tags
  //


  strikethrough.postProcess = function strikethrough(state) {
    var curr,
        tokens_meta = state.tokens_meta,
        max = state.tokens_meta.length;
    postProcess$1(state, state.delimiters);

    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess$1(state, tokens_meta[curr].delimiters);
      }
    }
  };

  var emphasis = {};

  //

  emphasis.tokenize = function emphasis(state, silent) {
    var i,
        scanned,
        token,
        start = state.pos,
        marker = state.src.charCodeAt(start);

    if (silent) {
      return false;
    }

    if (marker !== 0x5F
    /* _ */
    && marker !== 0x2A
    /* * */
    ) {
        return false;
      }

    scanned = state.scanDelims(state.pos, marker === 0x2A);

    for (i = 0; i < scanned.length; i++) {
      token = state.push('text', '', 0);
      token.content = String.fromCharCode(marker);
      state.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: marker,
        // Total length of these series of delimiters.
        //
        length: scanned.length,
        // An amount of characters before this one that's equivalent to
        // current one. In plain English: if this delimiter does not open
        // an emphasis, neither do previous `jump` characters.
        //
        // Used to skip sequences like "*****" in one step, for 1st asterisk
        // value will be 0, for 2nd it's 1 and so on.
        //
        jump: i,
        // A position of the token this delimiter corresponds to.
        //
        token: state.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: scanned.can_open,
        close: scanned.can_close
      });
    }

    state.pos += scanned.length;
    return true;
  };

  function postProcess(state, delimiters) {
    var i,
        startDelim,
        endDelim,
        token,
        ch,
        isStrong,
        max = delimiters.length;

    for (i = max - 1; i >= 0; i--) {
      startDelim = delimiters[i];

      if (startDelim.marker !== 0x5F
      /* _ */
      && startDelim.marker !== 0x2A
      /* * */
      ) {
          continue;
        } // Process only opening markers


      if (startDelim.end === -1) {
        continue;
      }

      endDelim = delimiters[startDelim.end]; // If the previous delimiter has the same marker and is adjacent to this one,
      // merge those into one strong delimiter.
      //
      // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
      //

      isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1 && delimiters[i - 1].marker === startDelim.marker;
      ch = String.fromCharCode(startDelim.marker);
      token = state.tokens[startDelim.token];
      token.type = isStrong ? 'strong_open' : 'em_open';
      token.tag = isStrong ? 'strong' : 'em';
      token.nesting = 1;
      token.markup = isStrong ? ch + ch : ch;
      token.content = '';
      token = state.tokens[endDelim.token];
      token.type = isStrong ? 'strong_close' : 'em_close';
      token.tag = isStrong ? 'strong' : 'em';
      token.nesting = -1;
      token.markup = isStrong ? ch + ch : ch;
      token.content = '';

      if (isStrong) {
        state.tokens[delimiters[i - 1].token].content = '';
        state.tokens[delimiters[startDelim.end + 1].token].content = '';
        i--;
      }
    }
  } // Walk through delimiter list and replace text tokens with tags
  //


  emphasis.postProcess = function emphasis(state) {
    var curr,
        tokens_meta = state.tokens_meta,
        max = state.tokens_meta.length;
    postProcess(state, state.delimiters);

    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        postProcess(state, tokens_meta[curr].delimiters);
      }
    }
  };

  var normalizeReference$1 = require$$0$5.normalizeReference;

  var isSpace$1 = require$$0$5.isSpace;

  var link = function link(state, silent) {
    var attrs,
        code,
        label,
        labelEnd,
        labelStart,
        pos,
        res,
        ref,
        title,
        token,
        href = '',
        oldPos = state.pos,
        max = state.posMax,
        start = state.pos,
        parseReference = true;

    if (state.src.charCodeAt(state.pos) !== 0x5B
    /* [ */
    ) {
        return false;
      }

    labelStart = state.pos + 1;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true); // parser failed to find ']', so it's not a valid link

    if (labelEnd < 0) {
      return false;
    }

    pos = labelEnd + 1;

    if (pos < max && state.src.charCodeAt(pos) === 0x28
    /* ( */
    ) {
        //
        // Inline link
        //
        // might have found a valid shortcut link, disable reference parsing
        parseReference = false; // [link](  <href>  "title"  )
        //        ^^ skipping these spaces

        pos++;

        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);

          if (!isSpace$1(code) && code !== 0x0A) {
            break;
          }
        }

        if (pos >= max) {
          return false;
        } // [link](  <href>  "title"  )
        //          ^^^^^^ parsing link destination


        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);

        if (res.ok) {
          href = state.md.normalizeLink(res.str);

          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = '';
          }
        } // [link](  <href>  "title"  )
        //                ^^ skipping these spaces


        start = pos;

        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);

          if (!isSpace$1(code) && code !== 0x0A) {
            break;
          }
        } // [link](  <href>  "title"  )
        //                  ^^^^^^^ parsing link title


        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);

        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos; // [link](  <href>  "title"  )
          //                         ^^ skipping these spaces

          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);

            if (!isSpace$1(code) && code !== 0x0A) {
              break;
            }
          }
        } else {
          title = '';
        }

        if (pos >= max || state.src.charCodeAt(pos) !== 0x29
        /* ) */
        ) {
            // parsing a valid shortcut link failed, fallback to reference
            parseReference = true;
          }

        pos++;
      }

    if (parseReference) {
      //
      // Link reference
      //
      if (typeof state.env.references === 'undefined') {
        return false;
      }

      if (pos < max && state.src.charCodeAt(pos) === 0x5B
      /* [ */
      ) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);

          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
        pos = labelEnd + 1;
      } // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)


      if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }

      ref = state.env.references[normalizeReference$1(label)];

      if (!ref) {
        state.pos = oldPos;
        return false;
      }

      href = ref.href;
      title = ref.title;
    } //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //


    if (!silent) {
      state.pos = labelStart;
      state.posMax = labelEnd;
      token = state.push('link_open', 'a', 1);
      token.attrs = attrs = [['href', href]];

      if (title) {
        attrs.push(['title', title]);
      }

      state.md.inline.tokenize(state);
      token = state.push('link_close', 'a', -1);
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  };

  var normalizeReference = require$$0$5.normalizeReference;

  var isSpace = require$$0$5.isSpace;

  var image$1 = function image(state, silent) {
    var attrs,
        code,
        content,
        label,
        labelEnd,
        labelStart,
        pos,
        ref,
        res,
        title,
        token,
        tokens,
        start,
        href = '',
        oldPos = state.pos,
        max = state.posMax;

    if (state.src.charCodeAt(state.pos) !== 0x21
    /* ! */
    ) {
        return false;
      }

    if (state.src.charCodeAt(state.pos + 1) !== 0x5B
    /* [ */
    ) {
        return false;
      }

    labelStart = state.pos + 2;
    labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false); // parser failed to find ']', so it's not a valid link

    if (labelEnd < 0) {
      return false;
    }

    pos = labelEnd + 1;

    if (pos < max && state.src.charCodeAt(pos) === 0x28
    /* ( */
    ) {
        //
        // Inline link
        //
        // [link](  <href>  "title"  )
        //        ^^ skipping these spaces
        pos++;

        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);

          if (!isSpace(code) && code !== 0x0A) {
            break;
          }
        }

        if (pos >= max) {
          return false;
        } // [link](  <href>  "title"  )
        //          ^^^^^^ parsing link destination


        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);

        if (res.ok) {
          href = state.md.normalizeLink(res.str);

          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = '';
          }
        } // [link](  <href>  "title"  )
        //                ^^ skipping these spaces


        start = pos;

        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);

          if (!isSpace(code) && code !== 0x0A) {
            break;
          }
        } // [link](  <href>  "title"  )
        //                  ^^^^^^^ parsing link title


        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);

        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos; // [link](  <href>  "title"  )
          //                         ^^ skipping these spaces

          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);

            if (!isSpace(code) && code !== 0x0A) {
              break;
            }
          }
        } else {
          title = '';
        }

        if (pos >= max || state.src.charCodeAt(pos) !== 0x29
        /* ) */
        ) {
            state.pos = oldPos;
            return false;
          }

        pos++;
      } else {
      //
      // Link reference
      //
      if (typeof state.env.references === 'undefined') {
        return false;
      }

      if (pos < max && state.src.charCodeAt(pos) === 0x5B
      /* [ */
      ) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);

          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
        pos = labelEnd + 1;
      } // covers label === '' and label === undefined
      // (collapsed reference link and shortcut reference link respectively)


      if (!label) {
        label = state.src.slice(labelStart, labelEnd);
      }

      ref = state.env.references[normalizeReference(label)];

      if (!ref) {
        state.pos = oldPos;
        return false;
      }

      href = ref.href;
      title = ref.title;
    } //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //


    if (!silent) {
      content = state.src.slice(labelStart, labelEnd);
      state.md.inline.parse(content, state.md, state.env, tokens = []);
      token = state.push('image', 'img', 0);
      token.attrs = attrs = [['src', href], ['alt', '']];
      token.children = tokens;
      token.content = content;

      if (title) {
        attrs.push(['title', title]);
      }
    }

    state.pos = pos;
    state.posMax = max;
    return true;
  };

  /*eslint max-len:0*/

  var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
  var AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;

  var autolink = function autolink(state, silent) {
    var tail,
        linkMatch,
        emailMatch,
        url,
        fullUrl,
        token,
        pos = state.pos;

    if (state.src.charCodeAt(pos) !== 0x3C
    /* < */
    ) {
        return false;
      }

    tail = state.src.slice(pos);

    if (tail.indexOf('>') < 0) {
      return false;
    }

    if (AUTOLINK_RE.test(tail)) {
      linkMatch = tail.match(AUTOLINK_RE);
      url = linkMatch[0].slice(1, -1);
      fullUrl = state.md.normalizeLink(url);

      if (!state.md.validateLink(fullUrl)) {
        return false;
      }

      if (!silent) {
        token = state.push('link_open', 'a', 1);
        token.attrs = [['href', fullUrl]];
        token.markup = 'autolink';
        token.info = 'auto';
        token = state.push('text', '', 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push('link_close', 'a', -1);
        token.markup = 'autolink';
        token.info = 'auto';
      }

      state.pos += linkMatch[0].length;
      return true;
    }

    if (EMAIL_RE.test(tail)) {
      emailMatch = tail.match(EMAIL_RE);
      url = emailMatch[0].slice(1, -1);
      fullUrl = state.md.normalizeLink('mailto:' + url);

      if (!state.md.validateLink(fullUrl)) {
        return false;
      }

      if (!silent) {
        token = state.push('link_open', 'a', 1);
        token.attrs = [['href', fullUrl]];
        token.markup = 'autolink';
        token.info = 'auto';
        token = state.push('text', '', 0);
        token.content = state.md.normalizeLinkText(url);
        token = state.push('link_close', 'a', -1);
        token.markup = 'autolink';
        token.info = 'auto';
      }

      state.pos += emailMatch[0].length;
      return true;
    }

    return false;
  };

  var HTML_TAG_RE = html_re.HTML_TAG_RE;

  function isLetter(ch) {
    /*eslint no-bitwise:0*/
    var lc = ch | 0x20; // to lower case

    return lc >= 0x61
    /* a */
    && lc <= 0x7a
    /* z */
    ;
  }

  var html_inline = function html_inline(state, silent) {
    var ch,
        match,
        max,
        token,
        pos = state.pos;

    if (!state.md.options.html) {
      return false;
    } // Check start


    max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x3C
    /* < */
    || pos + 2 >= max) {
      return false;
    } // Quick fail on second char


    ch = state.src.charCodeAt(pos + 1);

    if (ch !== 0x21
    /* ! */
    && ch !== 0x3F
    /* ? */
    && ch !== 0x2F
    /* / */
    && !isLetter(ch)) {
      return false;
    }

    match = state.src.slice(pos).match(HTML_TAG_RE);

    if (!match) {
      return false;
    }

    if (!silent) {
      token = state.push('html_inline', '', 0);
      token.content = state.src.slice(pos, pos + match[0].length);
    }

    state.pos += match[0].length;
    return true;
  };

  var Aacute = "Á";
  var aacute = "á";
  var Abreve = "Ă";
  var abreve = "ă";
  var ac = "∾";
  var acd = "∿";
  var acE = "∾̳";
  var Acirc = "Â";
  var acirc = "â";
  var acute = "´";
  var Acy = "А";
  var acy = "а";
  var AElig = "Æ";
  var aelig = "æ";
  var af = "⁡";
  var Afr = "𝔄";
  var afr = "𝔞";
  var Agrave = "À";
  var agrave = "à";
  var alefsym = "ℵ";
  var aleph = "ℵ";
  var Alpha = "Α";
  var alpha = "α";
  var Amacr = "Ā";
  var amacr = "ā";
  var amalg = "⨿";
  var amp = "&";
  var AMP = "&";
  var andand = "⩕";
  var And = "⩓";
  var and = "∧";
  var andd = "⩜";
  var andslope = "⩘";
  var andv = "⩚";
  var ang = "∠";
  var ange = "⦤";
  var angle = "∠";
  var angmsdaa = "⦨";
  var angmsdab = "⦩";
  var angmsdac = "⦪";
  var angmsdad = "⦫";
  var angmsdae = "⦬";
  var angmsdaf = "⦭";
  var angmsdag = "⦮";
  var angmsdah = "⦯";
  var angmsd = "∡";
  var angrt = "∟";
  var angrtvb = "⊾";
  var angrtvbd = "⦝";
  var angsph = "∢";
  var angst = "Å";
  var angzarr = "⍼";
  var Aogon = "Ą";
  var aogon = "ą";
  var Aopf = "𝔸";
  var aopf = "𝕒";
  var apacir = "⩯";
  var ap = "≈";
  var apE = "⩰";
  var ape = "≊";
  var apid = "≋";
  var apos = "'";
  var ApplyFunction = "⁡";
  var approx = "≈";
  var approxeq = "≊";
  var Aring = "Å";
  var aring = "å";
  var Ascr = "𝒜";
  var ascr = "𝒶";
  var Assign = "≔";
  var ast = "*";
  var asymp = "≈";
  var asympeq = "≍";
  var Atilde = "Ã";
  var atilde = "ã";
  var Auml = "Ä";
  var auml = "ä";
  var awconint = "∳";
  var awint = "⨑";
  var backcong = "≌";
  var backepsilon = "϶";
  var backprime = "‵";
  var backsim = "∽";
  var backsimeq = "⋍";
  var Backslash = "∖";
  var Barv = "⫧";
  var barvee = "⊽";
  var barwed = "⌅";
  var Barwed = "⌆";
  var barwedge = "⌅";
  var bbrk = "⎵";
  var bbrktbrk = "⎶";
  var bcong = "≌";
  var Bcy = "Б";
  var bcy = "б";
  var bdquo = "„";
  var becaus = "∵";
  var because = "∵";
  var Because = "∵";
  var bemptyv = "⦰";
  var bepsi = "϶";
  var bernou = "ℬ";
  var Bernoullis = "ℬ";
  var Beta = "Β";
  var beta = "β";
  var beth = "ℶ";
  var between = "≬";
  var Bfr = "𝔅";
  var bfr = "𝔟";
  var bigcap = "⋂";
  var bigcirc = "◯";
  var bigcup = "⋃";
  var bigodot = "⨀";
  var bigoplus = "⨁";
  var bigotimes = "⨂";
  var bigsqcup = "⨆";
  var bigstar = "★";
  var bigtriangledown = "▽";
  var bigtriangleup = "△";
  var biguplus = "⨄";
  var bigvee = "⋁";
  var bigwedge = "⋀";
  var bkarow = "⤍";
  var blacklozenge = "⧫";
  var blacksquare = "▪";
  var blacktriangle = "▴";
  var blacktriangledown = "▾";
  var blacktriangleleft = "◂";
  var blacktriangleright = "▸";
  var blank = "␣";
  var blk12 = "▒";
  var blk14 = "░";
  var blk34 = "▓";
  var block = "█";
  var bne = "=⃥";
  var bnequiv = "≡⃥";
  var bNot = "⫭";
  var bnot = "⌐";
  var Bopf = "𝔹";
  var bopf = "𝕓";
  var bot = "⊥";
  var bottom = "⊥";
  var bowtie = "⋈";
  var boxbox = "⧉";
  var boxdl = "┐";
  var boxdL = "╕";
  var boxDl = "╖";
  var boxDL = "╗";
  var boxdr = "┌";
  var boxdR = "╒";
  var boxDr = "╓";
  var boxDR = "╔";
  var boxh = "─";
  var boxH = "═";
  var boxhd = "┬";
  var boxHd = "╤";
  var boxhD = "╥";
  var boxHD = "╦";
  var boxhu = "┴";
  var boxHu = "╧";
  var boxhU = "╨";
  var boxHU = "╩";
  var boxminus = "⊟";
  var boxplus = "⊞";
  var boxtimes = "⊠";
  var boxul = "┘";
  var boxuL = "╛";
  var boxUl = "╜";
  var boxUL = "╝";
  var boxur = "└";
  var boxuR = "╘";
  var boxUr = "╙";
  var boxUR = "╚";
  var boxv = "│";
  var boxV = "║";
  var boxvh = "┼";
  var boxvH = "╪";
  var boxVh = "╫";
  var boxVH = "╬";
  var boxvl = "┤";
  var boxvL = "╡";
  var boxVl = "╢";
  var boxVL = "╣";
  var boxvr = "├";
  var boxvR = "╞";
  var boxVr = "╟";
  var boxVR = "╠";
  var bprime = "‵";
  var breve = "˘";
  var Breve = "˘";
  var brvbar = "¦";
  var bscr = "𝒷";
  var Bscr = "ℬ";
  var bsemi = "⁏";
  var bsim = "∽";
  var bsime = "⋍";
  var bsolb = "⧅";
  var bsol = "\\";
  var bsolhsub = "⟈";
  var bull = "•";
  var bullet = "•";
  var bump = "≎";
  var bumpE = "⪮";
  var bumpe = "≏";
  var Bumpeq = "≎";
  var bumpeq = "≏";
  var Cacute = "Ć";
  var cacute = "ć";
  var capand = "⩄";
  var capbrcup = "⩉";
  var capcap = "⩋";
  var cap = "∩";
  var Cap = "⋒";
  var capcup = "⩇";
  var capdot = "⩀";
  var CapitalDifferentialD = "ⅅ";
  var caps = "∩︀";
  var caret = "⁁";
  var caron = "ˇ";
  var Cayleys = "ℭ";
  var ccaps = "⩍";
  var Ccaron = "Č";
  var ccaron = "č";
  var Ccedil = "Ç";
  var ccedil = "ç";
  var Ccirc = "Ĉ";
  var ccirc = "ĉ";
  var Cconint = "∰";
  var ccups = "⩌";
  var ccupssm = "⩐";
  var Cdot = "Ċ";
  var cdot = "ċ";
  var cedil = "¸";
  var Cedilla = "¸";
  var cemptyv = "⦲";
  var cent = "¢";
  var centerdot = "·";
  var CenterDot = "·";
  var cfr = "𝔠";
  var Cfr = "ℭ";
  var CHcy = "Ч";
  var chcy = "ч";
  var check = "✓";
  var checkmark = "✓";
  var Chi = "Χ";
  var chi = "χ";
  var circ = "ˆ";
  var circeq = "≗";
  var circlearrowleft = "↺";
  var circlearrowright = "↻";
  var circledast = "⊛";
  var circledcirc = "⊚";
  var circleddash = "⊝";
  var CircleDot = "⊙";
  var circledR = "®";
  var circledS = "Ⓢ";
  var CircleMinus = "⊖";
  var CirclePlus = "⊕";
  var CircleTimes = "⊗";
  var cir = "○";
  var cirE = "⧃";
  var cire = "≗";
  var cirfnint = "⨐";
  var cirmid = "⫯";
  var cirscir = "⧂";
  var ClockwiseContourIntegral = "∲";
  var CloseCurlyDoubleQuote = "”";
  var CloseCurlyQuote = "’";
  var clubs = "♣";
  var clubsuit = "♣";
  var colon = ":";
  var Colon = "∷";
  var Colone = "⩴";
  var colone = "≔";
  var coloneq = "≔";
  var comma = ",";
  var commat = "@";
  var comp = "∁";
  var compfn = "∘";
  var complement = "∁";
  var complexes = "ℂ";
  var cong = "≅";
  var congdot = "⩭";
  var Congruent = "≡";
  var conint = "∮";
  var Conint = "∯";
  var ContourIntegral = "∮";
  var copf = "𝕔";
  var Copf = "ℂ";
  var coprod = "∐";
  var Coproduct = "∐";
  var copy = "©";
  var COPY = "©";
  var copysr = "℗";
  var CounterClockwiseContourIntegral = "∳";
  var crarr = "↵";
  var cross = "✗";
  var Cross = "⨯";
  var Cscr = "𝒞";
  var cscr = "𝒸";
  var csub = "⫏";
  var csube = "⫑";
  var csup = "⫐";
  var csupe = "⫒";
  var ctdot = "⋯";
  var cudarrl = "⤸";
  var cudarrr = "⤵";
  var cuepr = "⋞";
  var cuesc = "⋟";
  var cularr = "↶";
  var cularrp = "⤽";
  var cupbrcap = "⩈";
  var cupcap = "⩆";
  var CupCap = "≍";
  var cup = "∪";
  var Cup = "⋓";
  var cupcup = "⩊";
  var cupdot = "⊍";
  var cupor = "⩅";
  var cups = "∪︀";
  var curarr = "↷";
  var curarrm = "⤼";
  var curlyeqprec = "⋞";
  var curlyeqsucc = "⋟";
  var curlyvee = "⋎";
  var curlywedge = "⋏";
  var curren = "¤";
  var curvearrowleft = "↶";
  var curvearrowright = "↷";
  var cuvee = "⋎";
  var cuwed = "⋏";
  var cwconint = "∲";
  var cwint = "∱";
  var cylcty = "⌭";
  var dagger = "†";
  var Dagger = "‡";
  var daleth = "ℸ";
  var darr = "↓";
  var Darr = "↡";
  var dArr = "⇓";
  var dash = "‐";
  var Dashv = "⫤";
  var dashv = "⊣";
  var dbkarow = "⤏";
  var dblac = "˝";
  var Dcaron = "Ď";
  var dcaron = "ď";
  var Dcy = "Д";
  var dcy = "д";
  var ddagger = "‡";
  var ddarr = "⇊";
  var DD = "ⅅ";
  var dd = "ⅆ";
  var DDotrahd = "⤑";
  var ddotseq = "⩷";
  var deg = "°";
  var Del = "∇";
  var Delta = "Δ";
  var delta = "δ";
  var demptyv = "⦱";
  var dfisht = "⥿";
  var Dfr = "𝔇";
  var dfr = "𝔡";
  var dHar = "⥥";
  var dharl = "⇃";
  var dharr = "⇂";
  var DiacriticalAcute = "´";
  var DiacriticalDot = "˙";
  var DiacriticalDoubleAcute = "˝";
  var DiacriticalGrave = "`";
  var DiacriticalTilde = "˜";
  var diam = "⋄";
  var diamond = "⋄";
  var Diamond = "⋄";
  var diamondsuit = "♦";
  var diams = "♦";
  var die = "¨";
  var DifferentialD = "ⅆ";
  var digamma = "ϝ";
  var disin = "⋲";
  var div = "÷";
  var divide = "÷";
  var divideontimes = "⋇";
  var divonx = "⋇";
  var DJcy = "Ђ";
  var djcy = "ђ";
  var dlcorn = "⌞";
  var dlcrop = "⌍";
  var dollar = "$";
  var Dopf = "𝔻";
  var dopf = "𝕕";
  var Dot = "¨";
  var dot = "˙";
  var DotDot = "⃜";
  var doteq = "≐";
  var doteqdot = "≑";
  var DotEqual = "≐";
  var dotminus = "∸";
  var dotplus = "∔";
  var dotsquare = "⊡";
  var doublebarwedge = "⌆";
  var DoubleContourIntegral = "∯";
  var DoubleDot = "¨";
  var DoubleDownArrow = "⇓";
  var DoubleLeftArrow = "⇐";
  var DoubleLeftRightArrow = "⇔";
  var DoubleLeftTee = "⫤";
  var DoubleLongLeftArrow = "⟸";
  var DoubleLongLeftRightArrow = "⟺";
  var DoubleLongRightArrow = "⟹";
  var DoubleRightArrow = "⇒";
  var DoubleRightTee = "⊨";
  var DoubleUpArrow = "⇑";
  var DoubleUpDownArrow = "⇕";
  var DoubleVerticalBar = "∥";
  var DownArrowBar = "⤓";
  var downarrow = "↓";
  var DownArrow = "↓";
  var Downarrow = "⇓";
  var DownArrowUpArrow = "⇵";
  var DownBreve = "̑";
  var downdownarrows = "⇊";
  var downharpoonleft = "⇃";
  var downharpoonright = "⇂";
  var DownLeftRightVector = "⥐";
  var DownLeftTeeVector = "⥞";
  var DownLeftVectorBar = "⥖";
  var DownLeftVector = "↽";
  var DownRightTeeVector = "⥟";
  var DownRightVectorBar = "⥗";
  var DownRightVector = "⇁";
  var DownTeeArrow = "↧";
  var DownTee = "⊤";
  var drbkarow = "⤐";
  var drcorn = "⌟";
  var drcrop = "⌌";
  var Dscr = "𝒟";
  var dscr = "𝒹";
  var DScy = "Ѕ";
  var dscy = "ѕ";
  var dsol = "⧶";
  var Dstrok = "Đ";
  var dstrok = "đ";
  var dtdot = "⋱";
  var dtri = "▿";
  var dtrif = "▾";
  var duarr = "⇵";
  var duhar = "⥯";
  var dwangle = "⦦";
  var DZcy = "Џ";
  var dzcy = "џ";
  var dzigrarr = "⟿";
  var Eacute = "É";
  var eacute = "é";
  var easter = "⩮";
  var Ecaron = "Ě";
  var ecaron = "ě";
  var Ecirc = "Ê";
  var ecirc = "ê";
  var ecir = "≖";
  var ecolon = "≕";
  var Ecy = "Э";
  var ecy = "э";
  var eDDot = "⩷";
  var Edot = "Ė";
  var edot = "ė";
  var eDot = "≑";
  var ee = "ⅇ";
  var efDot = "≒";
  var Efr = "𝔈";
  var efr = "𝔢";
  var eg = "⪚";
  var Egrave = "È";
  var egrave = "è";
  var egs = "⪖";
  var egsdot = "⪘";
  var el = "⪙";
  var Element = "∈";
  var elinters = "⏧";
  var ell = "ℓ";
  var els = "⪕";
  var elsdot = "⪗";
  var Emacr = "Ē";
  var emacr = "ē";
  var empty = "∅";
  var emptyset = "∅";
  var EmptySmallSquare = "◻";
  var emptyv = "∅";
  var EmptyVerySmallSquare = "▫";
  var emsp13 = " ";
  var emsp14 = " ";
  var emsp = " ";
  var ENG = "Ŋ";
  var eng = "ŋ";
  var ensp = " ";
  var Eogon = "Ę";
  var eogon = "ę";
  var Eopf = "𝔼";
  var eopf = "𝕖";
  var epar = "⋕";
  var eparsl = "⧣";
  var eplus = "⩱";
  var epsi = "ε";
  var Epsilon = "Ε";
  var epsilon = "ε";
  var epsiv = "ϵ";
  var eqcirc = "≖";
  var eqcolon = "≕";
  var eqsim = "≂";
  var eqslantgtr = "⪖";
  var eqslantless = "⪕";
  var Equal = "⩵";
  var equals = "=";
  var EqualTilde = "≂";
  var equest = "≟";
  var Equilibrium = "⇌";
  var equiv = "≡";
  var equivDD = "⩸";
  var eqvparsl = "⧥";
  var erarr = "⥱";
  var erDot = "≓";
  var escr = "ℯ";
  var Escr = "ℰ";
  var esdot = "≐";
  var Esim = "⩳";
  var esim = "≂";
  var Eta = "Η";
  var eta = "η";
  var ETH = "Ð";
  var eth = "ð";
  var Euml = "Ë";
  var euml = "ë";
  var euro = "€";
  var excl = "!";
  var exist = "∃";
  var Exists = "∃";
  var expectation = "ℰ";
  var exponentiale = "ⅇ";
  var ExponentialE = "ⅇ";
  var fallingdotseq = "≒";
  var Fcy = "Ф";
  var fcy = "ф";
  var female = "♀";
  var ffilig = "ﬃ";
  var fflig = "ﬀ";
  var ffllig = "ﬄ";
  var Ffr = "𝔉";
  var ffr = "𝔣";
  var filig = "ﬁ";
  var FilledSmallSquare = "◼";
  var FilledVerySmallSquare = "▪";
  var fjlig = "fj";
  var flat = "♭";
  var fllig = "ﬂ";
  var fltns = "▱";
  var fnof = "ƒ";
  var Fopf = "𝔽";
  var fopf = "𝕗";
  var forall = "∀";
  var ForAll = "∀";
  var fork = "⋔";
  var forkv = "⫙";
  var Fouriertrf = "ℱ";
  var fpartint = "⨍";
  var frac12 = "½";
  var frac13 = "⅓";
  var frac14 = "¼";
  var frac15 = "⅕";
  var frac16 = "⅙";
  var frac18 = "⅛";
  var frac23 = "⅔";
  var frac25 = "⅖";
  var frac34 = "¾";
  var frac35 = "⅗";
  var frac38 = "⅜";
  var frac45 = "⅘";
  var frac56 = "⅚";
  var frac58 = "⅝";
  var frac78 = "⅞";
  var frasl = "⁄";
  var frown = "⌢";
  var fscr = "𝒻";
  var Fscr = "ℱ";
  var gacute = "ǵ";
  var Gamma = "Γ";
  var gamma = "γ";
  var Gammad = "Ϝ";
  var gammad = "ϝ";
  var gap = "⪆";
  var Gbreve = "Ğ";
  var gbreve = "ğ";
  var Gcedil = "Ģ";
  var Gcirc = "Ĝ";
  var gcirc = "ĝ";
  var Gcy = "Г";
  var gcy = "г";
  var Gdot = "Ġ";
  var gdot = "ġ";
  var ge = "≥";
  var gE = "≧";
  var gEl = "⪌";
  var gel = "⋛";
  var geq = "≥";
  var geqq = "≧";
  var geqslant = "⩾";
  var gescc = "⪩";
  var ges = "⩾";
  var gesdot = "⪀";
  var gesdoto = "⪂";
  var gesdotol = "⪄";
  var gesl = "⋛︀";
  var gesles = "⪔";
  var Gfr = "𝔊";
  var gfr = "𝔤";
  var gg = "≫";
  var Gg = "⋙";
  var ggg = "⋙";
  var gimel = "ℷ";
  var GJcy = "Ѓ";
  var gjcy = "ѓ";
  var gla = "⪥";
  var gl = "≷";
  var glE = "⪒";
  var glj = "⪤";
  var gnap = "⪊";
  var gnapprox = "⪊";
  var gne = "⪈";
  var gnE = "≩";
  var gneq = "⪈";
  var gneqq = "≩";
  var gnsim = "⋧";
  var Gopf = "𝔾";
  var gopf = "𝕘";
  var grave = "`";
  var GreaterEqual = "≥";
  var GreaterEqualLess = "⋛";
  var GreaterFullEqual = "≧";
  var GreaterGreater = "⪢";
  var GreaterLess = "≷";
  var GreaterSlantEqual = "⩾";
  var GreaterTilde = "≳";
  var Gscr = "𝒢";
  var gscr = "ℊ";
  var gsim = "≳";
  var gsime = "⪎";
  var gsiml = "⪐";
  var gtcc = "⪧";
  var gtcir = "⩺";
  var gt = ">";
  var GT = ">";
  var Gt = "≫";
  var gtdot = "⋗";
  var gtlPar = "⦕";
  var gtquest = "⩼";
  var gtrapprox = "⪆";
  var gtrarr = "⥸";
  var gtrdot = "⋗";
  var gtreqless = "⋛";
  var gtreqqless = "⪌";
  var gtrless = "≷";
  var gtrsim = "≳";
  var gvertneqq = "≩︀";
  var gvnE = "≩︀";
  var Hacek = "ˇ";
  var hairsp = " ";
  var half = "½";
  var hamilt = "ℋ";
  var HARDcy = "Ъ";
  var hardcy = "ъ";
  var harrcir = "⥈";
  var harr = "↔";
  var hArr = "⇔";
  var harrw = "↭";
  var Hat = "^";
  var hbar = "ℏ";
  var Hcirc = "Ĥ";
  var hcirc = "ĥ";
  var hearts = "♥";
  var heartsuit = "♥";
  var hellip = "…";
  var hercon = "⊹";
  var hfr = "𝔥";
  var Hfr = "ℌ";
  var HilbertSpace = "ℋ";
  var hksearow = "⤥";
  var hkswarow = "⤦";
  var hoarr = "⇿";
  var homtht = "∻";
  var hookleftarrow = "↩";
  var hookrightarrow = "↪";
  var hopf = "𝕙";
  var Hopf = "ℍ";
  var horbar = "―";
  var HorizontalLine = "─";
  var hscr = "𝒽";
  var Hscr = "ℋ";
  var hslash = "ℏ";
  var Hstrok = "Ħ";
  var hstrok = "ħ";
  var HumpDownHump = "≎";
  var HumpEqual = "≏";
  var hybull = "⁃";
  var hyphen = "‐";
  var Iacute = "Í";
  var iacute = "í";
  var ic = "⁣";
  var Icirc = "Î";
  var icirc = "î";
  var Icy = "И";
  var icy = "и";
  var Idot = "İ";
  var IEcy = "Е";
  var iecy = "е";
  var iexcl = "¡";
  var iff = "⇔";
  var ifr = "𝔦";
  var Ifr = "ℑ";
  var Igrave = "Ì";
  var igrave = "ì";
  var ii = "ⅈ";
  var iiiint = "⨌";
  var iiint = "∭";
  var iinfin = "⧜";
  var iiota = "℩";
  var IJlig = "Ĳ";
  var ijlig = "ĳ";
  var Imacr = "Ī";
  var imacr = "ī";
  var image = "ℑ";
  var ImaginaryI = "ⅈ";
  var imagline = "ℐ";
  var imagpart = "ℑ";
  var imath = "ı";
  var Im = "ℑ";
  var imof = "⊷";
  var imped = "Ƶ";
  var Implies = "⇒";
  var incare = "℅";
  var infin = "∞";
  var infintie = "⧝";
  var inodot = "ı";
  var intcal = "⊺";
  var int = "∫";
  var Int = "∬";
  var integers = "ℤ";
  var Integral = "∫";
  var intercal = "⊺";
  var Intersection = "⋂";
  var intlarhk = "⨗";
  var intprod = "⨼";
  var InvisibleComma = "⁣";
  var InvisibleTimes = "⁢";
  var IOcy = "Ё";
  var iocy = "ё";
  var Iogon = "Į";
  var iogon = "į";
  var Iopf = "𝕀";
  var iopf = "𝕚";
  var Iota = "Ι";
  var iota = "ι";
  var iprod = "⨼";
  var iquest = "¿";
  var iscr = "𝒾";
  var Iscr = "ℐ";
  var isin = "∈";
  var isindot = "⋵";
  var isinE = "⋹";
  var isins = "⋴";
  var isinsv = "⋳";
  var isinv = "∈";
  var it = "⁢";
  var Itilde = "Ĩ";
  var itilde = "ĩ";
  var Iukcy = "І";
  var iukcy = "і";
  var Iuml = "Ï";
  var iuml = "ï";
  var Jcirc = "Ĵ";
  var jcirc = "ĵ";
  var Jcy = "Й";
  var jcy = "й";
  var Jfr = "𝔍";
  var jfr = "𝔧";
  var jmath = "ȷ";
  var Jopf = "𝕁";
  var jopf = "𝕛";
  var Jscr = "𝒥";
  var jscr = "𝒿";
  var Jsercy = "Ј";
  var jsercy = "ј";
  var Jukcy = "Є";
  var jukcy = "є";
  var Kappa = "Κ";
  var kappa = "κ";
  var kappav = "ϰ";
  var Kcedil = "Ķ";
  var kcedil = "ķ";
  var Kcy = "К";
  var kcy = "к";
  var Kfr = "𝔎";
  var kfr = "𝔨";
  var kgreen = "ĸ";
  var KHcy = "Х";
  var khcy = "х";
  var KJcy = "Ќ";
  var kjcy = "ќ";
  var Kopf = "𝕂";
  var kopf = "𝕜";
  var Kscr = "𝒦";
  var kscr = "𝓀";
  var lAarr = "⇚";
  var Lacute = "Ĺ";
  var lacute = "ĺ";
  var laemptyv = "⦴";
  var lagran = "ℒ";
  var Lambda = "Λ";
  var lambda = "λ";
  var lang = "⟨";
  var Lang = "⟪";
  var langd = "⦑";
  var langle = "⟨";
  var lap = "⪅";
  var Laplacetrf = "ℒ";
  var laquo = "«";
  var larrb = "⇤";
  var larrbfs = "⤟";
  var larr = "←";
  var Larr = "↞";
  var lArr = "⇐";
  var larrfs = "⤝";
  var larrhk = "↩";
  var larrlp = "↫";
  var larrpl = "⤹";
  var larrsim = "⥳";
  var larrtl = "↢";
  var latail = "⤙";
  var lAtail = "⤛";
  var lat = "⪫";
  var late = "⪭";
  var lates = "⪭︀";
  var lbarr = "⤌";
  var lBarr = "⤎";
  var lbbrk = "❲";
  var lbrace = "{";
  var lbrack = "[";
  var lbrke = "⦋";
  var lbrksld = "⦏";
  var lbrkslu = "⦍";
  var Lcaron = "Ľ";
  var lcaron = "ľ";
  var Lcedil = "Ļ";
  var lcedil = "ļ";
  var lceil = "⌈";
  var lcub = "{";
  var Lcy = "Л";
  var lcy = "л";
  var ldca = "⤶";
  var ldquo = "“";
  var ldquor = "„";
  var ldrdhar = "⥧";
  var ldrushar = "⥋";
  var ldsh = "↲";
  var le = "≤";
  var lE = "≦";
  var LeftAngleBracket = "⟨";
  var LeftArrowBar = "⇤";
  var leftarrow = "←";
  var LeftArrow = "←";
  var Leftarrow = "⇐";
  var LeftArrowRightArrow = "⇆";
  var leftarrowtail = "↢";
  var LeftCeiling = "⌈";
  var LeftDoubleBracket = "⟦";
  var LeftDownTeeVector = "⥡";
  var LeftDownVectorBar = "⥙";
  var LeftDownVector = "⇃";
  var LeftFloor = "⌊";
  var leftharpoondown = "↽";
  var leftharpoonup = "↼";
  var leftleftarrows = "⇇";
  var leftrightarrow = "↔";
  var LeftRightArrow = "↔";
  var Leftrightarrow = "⇔";
  var leftrightarrows = "⇆";
  var leftrightharpoons = "⇋";
  var leftrightsquigarrow = "↭";
  var LeftRightVector = "⥎";
  var LeftTeeArrow = "↤";
  var LeftTee = "⊣";
  var LeftTeeVector = "⥚";
  var leftthreetimes = "⋋";
  var LeftTriangleBar = "⧏";
  var LeftTriangle = "⊲";
  var LeftTriangleEqual = "⊴";
  var LeftUpDownVector = "⥑";
  var LeftUpTeeVector = "⥠";
  var LeftUpVectorBar = "⥘";
  var LeftUpVector = "↿";
  var LeftVectorBar = "⥒";
  var LeftVector = "↼";
  var lEg = "⪋";
  var leg = "⋚";
  var leq = "≤";
  var leqq = "≦";
  var leqslant = "⩽";
  var lescc = "⪨";
  var les = "⩽";
  var lesdot = "⩿";
  var lesdoto = "⪁";
  var lesdotor = "⪃";
  var lesg = "⋚︀";
  var lesges = "⪓";
  var lessapprox = "⪅";
  var lessdot = "⋖";
  var lesseqgtr = "⋚";
  var lesseqqgtr = "⪋";
  var LessEqualGreater = "⋚";
  var LessFullEqual = "≦";
  var LessGreater = "≶";
  var lessgtr = "≶";
  var LessLess = "⪡";
  var lesssim = "≲";
  var LessSlantEqual = "⩽";
  var LessTilde = "≲";
  var lfisht = "⥼";
  var lfloor = "⌊";
  var Lfr = "𝔏";
  var lfr = "𝔩";
  var lg = "≶";
  var lgE = "⪑";
  var lHar = "⥢";
  var lhard = "↽";
  var lharu = "↼";
  var lharul = "⥪";
  var lhblk = "▄";
  var LJcy = "Љ";
  var ljcy = "љ";
  var llarr = "⇇";
  var ll = "≪";
  var Ll = "⋘";
  var llcorner = "⌞";
  var Lleftarrow = "⇚";
  var llhard = "⥫";
  var lltri = "◺";
  var Lmidot = "Ŀ";
  var lmidot = "ŀ";
  var lmoustache = "⎰";
  var lmoust = "⎰";
  var lnap = "⪉";
  var lnapprox = "⪉";
  var lne = "⪇";
  var lnE = "≨";
  var lneq = "⪇";
  var lneqq = "≨";
  var lnsim = "⋦";
  var loang = "⟬";
  var loarr = "⇽";
  var lobrk = "⟦";
  var longleftarrow = "⟵";
  var LongLeftArrow = "⟵";
  var Longleftarrow = "⟸";
  var longleftrightarrow = "⟷";
  var LongLeftRightArrow = "⟷";
  var Longleftrightarrow = "⟺";
  var longmapsto = "⟼";
  var longrightarrow = "⟶";
  var LongRightArrow = "⟶";
  var Longrightarrow = "⟹";
  var looparrowleft = "↫";
  var looparrowright = "↬";
  var lopar = "⦅";
  var Lopf = "𝕃";
  var lopf = "𝕝";
  var loplus = "⨭";
  var lotimes = "⨴";
  var lowast = "∗";
  var lowbar = "_";
  var LowerLeftArrow = "↙";
  var LowerRightArrow = "↘";
  var loz = "◊";
  var lozenge = "◊";
  var lozf = "⧫";
  var lpar = "(";
  var lparlt = "⦓";
  var lrarr = "⇆";
  var lrcorner = "⌟";
  var lrhar = "⇋";
  var lrhard = "⥭";
  var lrm = "‎";
  var lrtri = "⊿";
  var lsaquo = "‹";
  var lscr = "𝓁";
  var Lscr = "ℒ";
  var lsh = "↰";
  var Lsh = "↰";
  var lsim = "≲";
  var lsime = "⪍";
  var lsimg = "⪏";
  var lsqb = "[";
  var lsquo = "‘";
  var lsquor = "‚";
  var Lstrok = "Ł";
  var lstrok = "ł";
  var ltcc = "⪦";
  var ltcir = "⩹";
  var lt = "<";
  var LT = "<";
  var Lt = "≪";
  var ltdot = "⋖";
  var lthree = "⋋";
  var ltimes = "⋉";
  var ltlarr = "⥶";
  var ltquest = "⩻";
  var ltri = "◃";
  var ltrie = "⊴";
  var ltrif = "◂";
  var ltrPar = "⦖";
  var lurdshar = "⥊";
  var luruhar = "⥦";
  var lvertneqq = "≨︀";
  var lvnE = "≨︀";
  var macr = "¯";
  var male = "♂";
  var malt = "✠";
  var maltese = "✠";
  var map$1 = "↦";
  var mapsto = "↦";
  var mapstodown = "↧";
  var mapstoleft = "↤";
  var mapstoup = "↥";
  var marker = "▮";
  var mcomma = "⨩";
  var Mcy = "М";
  var mcy = "м";
  var mdash = "—";
  var mDDot = "∺";
  var measuredangle = "∡";
  var MediumSpace = " ";
  var Mellintrf = "ℳ";
  var Mfr = "𝔐";
  var mfr = "𝔪";
  var mho = "℧";
  var micro = "µ";
  var midast = "*";
  var midcir = "⫰";
  var mid = "∣";
  var middot = "·";
  var minusb = "⊟";
  var minus = "−";
  var minusd = "∸";
  var minusdu = "⨪";
  var MinusPlus = "∓";
  var mlcp = "⫛";
  var mldr = "…";
  var mnplus = "∓";
  var models = "⊧";
  var Mopf = "𝕄";
  var mopf = "𝕞";
  var mp = "∓";
  var mscr = "𝓂";
  var Mscr = "ℳ";
  var mstpos = "∾";
  var Mu = "Μ";
  var mu = "μ";
  var multimap = "⊸";
  var mumap = "⊸";
  var nabla = "∇";
  var Nacute = "Ń";
  var nacute = "ń";
  var nang = "∠⃒";
  var nap = "≉";
  var napE = "⩰̸";
  var napid = "≋̸";
  var napos = "ŉ";
  var napprox = "≉";
  var natural = "♮";
  var naturals = "ℕ";
  var natur = "♮";
  var nbsp = " ";
  var nbump = "≎̸";
  var nbumpe = "≏̸";
  var ncap = "⩃";
  var Ncaron = "Ň";
  var ncaron = "ň";
  var Ncedil = "Ņ";
  var ncedil = "ņ";
  var ncong = "≇";
  var ncongdot = "⩭̸";
  var ncup = "⩂";
  var Ncy = "Н";
  var ncy = "н";
  var ndash = "–";
  var nearhk = "⤤";
  var nearr = "↗";
  var neArr = "⇗";
  var nearrow = "↗";
  var ne = "≠";
  var nedot = "≐̸";
  var NegativeMediumSpace = "​";
  var NegativeThickSpace = "​";
  var NegativeThinSpace = "​";
  var NegativeVeryThinSpace = "​";
  var nequiv = "≢";
  var nesear = "⤨";
  var nesim = "≂̸";
  var NestedGreaterGreater = "≫";
  var NestedLessLess = "≪";
  var NewLine = "\n";
  var nexist = "∄";
  var nexists = "∄";
  var Nfr = "𝔑";
  var nfr = "𝔫";
  var ngE = "≧̸";
  var nge = "≱";
  var ngeq = "≱";
  var ngeqq = "≧̸";
  var ngeqslant = "⩾̸";
  var nges = "⩾̸";
  var nGg = "⋙̸";
  var ngsim = "≵";
  var nGt = "≫⃒";
  var ngt = "≯";
  var ngtr = "≯";
  var nGtv = "≫̸";
  var nharr = "↮";
  var nhArr = "⇎";
  var nhpar = "⫲";
  var ni = "∋";
  var nis = "⋼";
  var nisd = "⋺";
  var niv = "∋";
  var NJcy = "Њ";
  var njcy = "њ";
  var nlarr = "↚";
  var nlArr = "⇍";
  var nldr = "‥";
  var nlE = "≦̸";
  var nle = "≰";
  var nleftarrow = "↚";
  var nLeftarrow = "⇍";
  var nleftrightarrow = "↮";
  var nLeftrightarrow = "⇎";
  var nleq = "≰";
  var nleqq = "≦̸";
  var nleqslant = "⩽̸";
  var nles = "⩽̸";
  var nless = "≮";
  var nLl = "⋘̸";
  var nlsim = "≴";
  var nLt = "≪⃒";
  var nlt = "≮";
  var nltri = "⋪";
  var nltrie = "⋬";
  var nLtv = "≪̸";
  var nmid = "∤";
  var NoBreak = "⁠";
  var NonBreakingSpace = " ";
  var nopf = "𝕟";
  var Nopf = "ℕ";
  var Not = "⫬";
  var not = "¬";
  var NotCongruent = "≢";
  var NotCupCap = "≭";
  var NotDoubleVerticalBar = "∦";
  var NotElement = "∉";
  var NotEqual = "≠";
  var NotEqualTilde = "≂̸";
  var NotExists = "∄";
  var NotGreater = "≯";
  var NotGreaterEqual = "≱";
  var NotGreaterFullEqual = "≧̸";
  var NotGreaterGreater = "≫̸";
  var NotGreaterLess = "≹";
  var NotGreaterSlantEqual = "⩾̸";
  var NotGreaterTilde = "≵";
  var NotHumpDownHump = "≎̸";
  var NotHumpEqual = "≏̸";
  var notin = "∉";
  var notindot = "⋵̸";
  var notinE = "⋹̸";
  var notinva = "∉";
  var notinvb = "⋷";
  var notinvc = "⋶";
  var NotLeftTriangleBar = "⧏̸";
  var NotLeftTriangle = "⋪";
  var NotLeftTriangleEqual = "⋬";
  var NotLess = "≮";
  var NotLessEqual = "≰";
  var NotLessGreater = "≸";
  var NotLessLess = "≪̸";
  var NotLessSlantEqual = "⩽̸";
  var NotLessTilde = "≴";
  var NotNestedGreaterGreater = "⪢̸";
  var NotNestedLessLess = "⪡̸";
  var notni = "∌";
  var notniva = "∌";
  var notnivb = "⋾";
  var notnivc = "⋽";
  var NotPrecedes = "⊀";
  var NotPrecedesEqual = "⪯̸";
  var NotPrecedesSlantEqual = "⋠";
  var NotReverseElement = "∌";
  var NotRightTriangleBar = "⧐̸";
  var NotRightTriangle = "⋫";
  var NotRightTriangleEqual = "⋭";
  var NotSquareSubset = "⊏̸";
  var NotSquareSubsetEqual = "⋢";
  var NotSquareSuperset = "⊐̸";
  var NotSquareSupersetEqual = "⋣";
  var NotSubset = "⊂⃒";
  var NotSubsetEqual = "⊈";
  var NotSucceeds = "⊁";
  var NotSucceedsEqual = "⪰̸";
  var NotSucceedsSlantEqual = "⋡";
  var NotSucceedsTilde = "≿̸";
  var NotSuperset = "⊃⃒";
  var NotSupersetEqual = "⊉";
  var NotTilde = "≁";
  var NotTildeEqual = "≄";
  var NotTildeFullEqual = "≇";
  var NotTildeTilde = "≉";
  var NotVerticalBar = "∤";
  var nparallel = "∦";
  var npar = "∦";
  var nparsl = "⫽⃥";
  var npart = "∂̸";
  var npolint = "⨔";
  var npr = "⊀";
  var nprcue = "⋠";
  var nprec = "⊀";
  var npreceq = "⪯̸";
  var npre = "⪯̸";
  var nrarrc = "⤳̸";
  var nrarr = "↛";
  var nrArr = "⇏";
  var nrarrw = "↝̸";
  var nrightarrow = "↛";
  var nRightarrow = "⇏";
  var nrtri = "⋫";
  var nrtrie = "⋭";
  var nsc = "⊁";
  var nsccue = "⋡";
  var nsce = "⪰̸";
  var Nscr = "𝒩";
  var nscr = "𝓃";
  var nshortmid = "∤";
  var nshortparallel = "∦";
  var nsim = "≁";
  var nsime = "≄";
  var nsimeq = "≄";
  var nsmid = "∤";
  var nspar = "∦";
  var nsqsube = "⋢";
  var nsqsupe = "⋣";
  var nsub = "⊄";
  var nsubE = "⫅̸";
  var nsube = "⊈";
  var nsubset = "⊂⃒";
  var nsubseteq = "⊈";
  var nsubseteqq = "⫅̸";
  var nsucc = "⊁";
  var nsucceq = "⪰̸";
  var nsup = "⊅";
  var nsupE = "⫆̸";
  var nsupe = "⊉";
  var nsupset = "⊃⃒";
  var nsupseteq = "⊉";
  var nsupseteqq = "⫆̸";
  var ntgl = "≹";
  var Ntilde = "Ñ";
  var ntilde = "ñ";
  var ntlg = "≸";
  var ntriangleleft = "⋪";
  var ntrianglelefteq = "⋬";
  var ntriangleright = "⋫";
  var ntrianglerighteq = "⋭";
  var Nu = "Ν";
  var nu = "ν";
  var num = "#";
  var numero = "№";
  var numsp = " ";
  var nvap = "≍⃒";
  var nvdash = "⊬";
  var nvDash = "⊭";
  var nVdash = "⊮";
  var nVDash = "⊯";
  var nvge = "≥⃒";
  var nvgt = ">⃒";
  var nvHarr = "⤄";
  var nvinfin = "⧞";
  var nvlArr = "⤂";
  var nvle = "≤⃒";
  var nvlt = "<⃒";
  var nvltrie = "⊴⃒";
  var nvrArr = "⤃";
  var nvrtrie = "⊵⃒";
  var nvsim = "∼⃒";
  var nwarhk = "⤣";
  var nwarr = "↖";
  var nwArr = "⇖";
  var nwarrow = "↖";
  var nwnear = "⤧";
  var Oacute = "Ó";
  var oacute = "ó";
  var oast = "⊛";
  var Ocirc = "Ô";
  var ocirc = "ô";
  var ocir = "⊚";
  var Ocy = "О";
  var ocy = "о";
  var odash = "⊝";
  var Odblac = "Ő";
  var odblac = "ő";
  var odiv = "⨸";
  var odot = "⊙";
  var odsold = "⦼";
  var OElig = "Œ";
  var oelig = "œ";
  var ofcir = "⦿";
  var Ofr = "𝔒";
  var ofr = "𝔬";
  var ogon = "˛";
  var Ograve = "Ò";
  var ograve = "ò";
  var ogt = "⧁";
  var ohbar = "⦵";
  var ohm = "Ω";
  var oint = "∮";
  var olarr = "↺";
  var olcir = "⦾";
  var olcross = "⦻";
  var oline = "‾";
  var olt = "⧀";
  var Omacr = "Ō";
  var omacr = "ō";
  var Omega = "Ω";
  var omega = "ω";
  var Omicron = "Ο";
  var omicron = "ο";
  var omid = "⦶";
  var ominus = "⊖";
  var Oopf = "𝕆";
  var oopf = "𝕠";
  var opar = "⦷";
  var OpenCurlyDoubleQuote = "“";
  var OpenCurlyQuote = "‘";
  var operp = "⦹";
  var oplus = "⊕";
  var orarr = "↻";
  var Or = "⩔";
  var or = "∨";
  var ord = "⩝";
  var order = "ℴ";
  var orderof = "ℴ";
  var ordf = "ª";
  var ordm = "º";
  var origof = "⊶";
  var oror = "⩖";
  var orslope = "⩗";
  var orv = "⩛";
  var oS = "Ⓢ";
  var Oscr = "𝒪";
  var oscr = "ℴ";
  var Oslash = "Ø";
  var oslash = "ø";
  var osol = "⊘";
  var Otilde = "Õ";
  var otilde = "õ";
  var otimesas = "⨶";
  var Otimes = "⨷";
  var otimes = "⊗";
  var Ouml = "Ö";
  var ouml = "ö";
  var ovbar = "⌽";
  var OverBar = "‾";
  var OverBrace = "⏞";
  var OverBracket = "⎴";
  var OverParenthesis = "⏜";
  var para = "¶";
  var parallel = "∥";
  var par = "∥";
  var parsim = "⫳";
  var parsl = "⫽";
  var part = "∂";
  var PartialD = "∂";
  var Pcy = "П";
  var pcy = "п";
  var percnt = "%";
  var period = ".";
  var permil = "‰";
  var perp = "⊥";
  var pertenk = "‱";
  var Pfr = "𝔓";
  var pfr = "𝔭";
  var Phi = "Φ";
  var phi = "φ";
  var phiv = "ϕ";
  var phmmat = "ℳ";
  var phone = "☎";
  var Pi = "Π";
  var pi = "π";
  var pitchfork = "⋔";
  var piv = "ϖ";
  var planck = "ℏ";
  var planckh = "ℎ";
  var plankv = "ℏ";
  var plusacir = "⨣";
  var plusb = "⊞";
  var pluscir = "⨢";
  var plus = "+";
  var plusdo = "∔";
  var plusdu = "⨥";
  var pluse = "⩲";
  var PlusMinus = "±";
  var plusmn = "±";
  var plussim = "⨦";
  var plustwo = "⨧";
  var pm = "±";
  var Poincareplane = "ℌ";
  var pointint = "⨕";
  var popf = "𝕡";
  var Popf = "ℙ";
  var pound = "£";
  var prap = "⪷";
  var Pr = "⪻";
  var pr = "≺";
  var prcue = "≼";
  var precapprox = "⪷";
  var prec = "≺";
  var preccurlyeq = "≼";
  var Precedes = "≺";
  var PrecedesEqual = "⪯";
  var PrecedesSlantEqual = "≼";
  var PrecedesTilde = "≾";
  var preceq = "⪯";
  var precnapprox = "⪹";
  var precneqq = "⪵";
  var precnsim = "⋨";
  var pre = "⪯";
  var prE = "⪳";
  var precsim = "≾";
  var prime = "′";
  var Prime = "″";
  var primes = "ℙ";
  var prnap = "⪹";
  var prnE = "⪵";
  var prnsim = "⋨";
  var prod = "∏";
  var Product = "∏";
  var profalar = "⌮";
  var profline = "⌒";
  var profsurf = "⌓";
  var prop = "∝";
  var Proportional = "∝";
  var Proportion = "∷";
  var propto = "∝";
  var prsim = "≾";
  var prurel = "⊰";
  var Pscr = "𝒫";
  var pscr = "𝓅";
  var Psi = "Ψ";
  var psi = "ψ";
  var puncsp = " ";
  var Qfr = "𝔔";
  var qfr = "𝔮";
  var qint = "⨌";
  var qopf = "𝕢";
  var Qopf = "ℚ";
  var qprime = "⁗";
  var Qscr = "𝒬";
  var qscr = "𝓆";
  var quaternions = "ℍ";
  var quatint = "⨖";
  var quest = "?";
  var questeq = "≟";
  var quot = "\"";
  var QUOT = "\"";
  var rAarr = "⇛";
  var race = "∽̱";
  var Racute = "Ŕ";
  var racute = "ŕ";
  var radic = "√";
  var raemptyv = "⦳";
  var rang = "⟩";
  var Rang = "⟫";
  var rangd = "⦒";
  var range = "⦥";
  var rangle = "⟩";
  var raquo = "»";
  var rarrap = "⥵";
  var rarrb = "⇥";
  var rarrbfs = "⤠";
  var rarrc = "⤳";
  var rarr = "→";
  var Rarr = "↠";
  var rArr = "⇒";
  var rarrfs = "⤞";
  var rarrhk = "↪";
  var rarrlp = "↬";
  var rarrpl = "⥅";
  var rarrsim = "⥴";
  var Rarrtl = "⤖";
  var rarrtl = "↣";
  var rarrw = "↝";
  var ratail = "⤚";
  var rAtail = "⤜";
  var ratio = "∶";
  var rationals = "ℚ";
  var rbarr = "⤍";
  var rBarr = "⤏";
  var RBarr = "⤐";
  var rbbrk = "❳";
  var rbrace = "}";
  var rbrack = "]";
  var rbrke = "⦌";
  var rbrksld = "⦎";
  var rbrkslu = "⦐";
  var Rcaron = "Ř";
  var rcaron = "ř";
  var Rcedil = "Ŗ";
  var rcedil = "ŗ";
  var rceil = "⌉";
  var rcub = "}";
  var Rcy = "Р";
  var rcy = "р";
  var rdca = "⤷";
  var rdldhar = "⥩";
  var rdquo = "”";
  var rdquor = "”";
  var rdsh = "↳";
  var real = "ℜ";
  var realine = "ℛ";
  var realpart = "ℜ";
  var reals = "ℝ";
  var Re = "ℜ";
  var rect = "▭";
  var reg = "®";
  var REG = "®";
  var ReverseElement = "∋";
  var ReverseEquilibrium = "⇋";
  var ReverseUpEquilibrium = "⥯";
  var rfisht = "⥽";
  var rfloor = "⌋";
  var rfr = "𝔯";
  var Rfr = "ℜ";
  var rHar = "⥤";
  var rhard = "⇁";
  var rharu = "⇀";
  var rharul = "⥬";
  var Rho = "Ρ";
  var rho = "ρ";
  var rhov = "ϱ";
  var RightAngleBracket = "⟩";
  var RightArrowBar = "⇥";
  var rightarrow = "→";
  var RightArrow = "→";
  var Rightarrow = "⇒";
  var RightArrowLeftArrow = "⇄";
  var rightarrowtail = "↣";
  var RightCeiling = "⌉";
  var RightDoubleBracket = "⟧";
  var RightDownTeeVector = "⥝";
  var RightDownVectorBar = "⥕";
  var RightDownVector = "⇂";
  var RightFloor = "⌋";
  var rightharpoondown = "⇁";
  var rightharpoonup = "⇀";
  var rightleftarrows = "⇄";
  var rightleftharpoons = "⇌";
  var rightrightarrows = "⇉";
  var rightsquigarrow = "↝";
  var RightTeeArrow = "↦";
  var RightTee = "⊢";
  var RightTeeVector = "⥛";
  var rightthreetimes = "⋌";
  var RightTriangleBar = "⧐";
  var RightTriangle = "⊳";
  var RightTriangleEqual = "⊵";
  var RightUpDownVector = "⥏";
  var RightUpTeeVector = "⥜";
  var RightUpVectorBar = "⥔";
  var RightUpVector = "↾";
  var RightVectorBar = "⥓";
  var RightVector = "⇀";
  var ring = "˚";
  var risingdotseq = "≓";
  var rlarr = "⇄";
  var rlhar = "⇌";
  var rlm = "‏";
  var rmoustache = "⎱";
  var rmoust = "⎱";
  var rnmid = "⫮";
  var roang = "⟭";
  var roarr = "⇾";
  var robrk = "⟧";
  var ropar = "⦆";
  var ropf = "𝕣";
  var Ropf = "ℝ";
  var roplus = "⨮";
  var rotimes = "⨵";
  var RoundImplies = "⥰";
  var rpar = ")";
  var rpargt = "⦔";
  var rppolint = "⨒";
  var rrarr = "⇉";
  var Rrightarrow = "⇛";
  var rsaquo = "›";
  var rscr = "𝓇";
  var Rscr = "ℛ";
  var rsh = "↱";
  var Rsh = "↱";
  var rsqb = "]";
  var rsquo = "’";
  var rsquor = "’";
  var rthree = "⋌";
  var rtimes = "⋊";
  var rtri = "▹";
  var rtrie = "⊵";
  var rtrif = "▸";
  var rtriltri = "⧎";
  var RuleDelayed = "⧴";
  var ruluhar = "⥨";
  var rx = "℞";
  var Sacute = "Ś";
  var sacute = "ś";
  var sbquo = "‚";
  var scap = "⪸";
  var Scaron = "Š";
  var scaron = "š";
  var Sc = "⪼";
  var sc = "≻";
  var sccue = "≽";
  var sce = "⪰";
  var scE = "⪴";
  var Scedil = "Ş";
  var scedil = "ş";
  var Scirc = "Ŝ";
  var scirc = "ŝ";
  var scnap = "⪺";
  var scnE = "⪶";
  var scnsim = "⋩";
  var scpolint = "⨓";
  var scsim = "≿";
  var Scy = "С";
  var scy = "с";
  var sdotb = "⊡";
  var sdot = "⋅";
  var sdote = "⩦";
  var searhk = "⤥";
  var searr = "↘";
  var seArr = "⇘";
  var searrow = "↘";
  var sect = "§";
  var semi = ";";
  var seswar = "⤩";
  var setminus = "∖";
  var setmn = "∖";
  var sext = "✶";
  var Sfr = "𝔖";
  var sfr = "𝔰";
  var sfrown = "⌢";
  var sharp = "♯";
  var SHCHcy = "Щ";
  var shchcy = "щ";
  var SHcy = "Ш";
  var shcy = "ш";
  var ShortDownArrow = "↓";
  var ShortLeftArrow = "←";
  var shortmid = "∣";
  var shortparallel = "∥";
  var ShortRightArrow = "→";
  var ShortUpArrow = "↑";
  var shy = "­";
  var Sigma = "Σ";
  var sigma = "σ";
  var sigmaf = "ς";
  var sigmav = "ς";
  var sim = "∼";
  var simdot = "⩪";
  var sime = "≃";
  var simeq = "≃";
  var simg = "⪞";
  var simgE = "⪠";
  var siml = "⪝";
  var simlE = "⪟";
  var simne = "≆";
  var simplus = "⨤";
  var simrarr = "⥲";
  var slarr = "←";
  var SmallCircle = "∘";
  var smallsetminus = "∖";
  var smashp = "⨳";
  var smeparsl = "⧤";
  var smid = "∣";
  var smile = "⌣";
  var smt = "⪪";
  var smte = "⪬";
  var smtes = "⪬︀";
  var SOFTcy = "Ь";
  var softcy = "ь";
  var solbar = "⌿";
  var solb = "⧄";
  var sol = "/";
  var Sopf = "𝕊";
  var sopf = "𝕤";
  var spades = "♠";
  var spadesuit = "♠";
  var spar = "∥";
  var sqcap = "⊓";
  var sqcaps = "⊓︀";
  var sqcup = "⊔";
  var sqcups = "⊔︀";
  var Sqrt = "√";
  var sqsub = "⊏";
  var sqsube = "⊑";
  var sqsubset = "⊏";
  var sqsubseteq = "⊑";
  var sqsup = "⊐";
  var sqsupe = "⊒";
  var sqsupset = "⊐";
  var sqsupseteq = "⊒";
  var square = "□";
  var Square = "□";
  var SquareIntersection = "⊓";
  var SquareSubset = "⊏";
  var SquareSubsetEqual = "⊑";
  var SquareSuperset = "⊐";
  var SquareSupersetEqual = "⊒";
  var SquareUnion = "⊔";
  var squarf = "▪";
  var squ = "□";
  var squf = "▪";
  var srarr = "→";
  var Sscr = "𝒮";
  var sscr = "𝓈";
  var ssetmn = "∖";
  var ssmile = "⌣";
  var sstarf = "⋆";
  var Star = "⋆";
  var star = "☆";
  var starf = "★";
  var straightepsilon = "ϵ";
  var straightphi = "ϕ";
  var strns = "¯";
  var sub = "⊂";
  var Sub = "⋐";
  var subdot = "⪽";
  var subE = "⫅";
  var sube = "⊆";
  var subedot = "⫃";
  var submult = "⫁";
  var subnE = "⫋";
  var subne = "⊊";
  var subplus = "⪿";
  var subrarr = "⥹";
  var subset = "⊂";
  var Subset = "⋐";
  var subseteq = "⊆";
  var subseteqq = "⫅";
  var SubsetEqual = "⊆";
  var subsetneq = "⊊";
  var subsetneqq = "⫋";
  var subsim = "⫇";
  var subsub = "⫕";
  var subsup = "⫓";
  var succapprox = "⪸";
  var succ = "≻";
  var succcurlyeq = "≽";
  var Succeeds = "≻";
  var SucceedsEqual = "⪰";
  var SucceedsSlantEqual = "≽";
  var SucceedsTilde = "≿";
  var succeq = "⪰";
  var succnapprox = "⪺";
  var succneqq = "⪶";
  var succnsim = "⋩";
  var succsim = "≿";
  var SuchThat = "∋";
  var sum = "∑";
  var Sum = "∑";
  var sung = "♪";
  var sup1 = "¹";
  var sup2 = "²";
  var sup3 = "³";
  var sup = "⊃";
  var Sup = "⋑";
  var supdot = "⪾";
  var supdsub = "⫘";
  var supE = "⫆";
  var supe = "⊇";
  var supedot = "⫄";
  var Superset = "⊃";
  var SupersetEqual = "⊇";
  var suphsol = "⟉";
  var suphsub = "⫗";
  var suplarr = "⥻";
  var supmult = "⫂";
  var supnE = "⫌";
  var supne = "⊋";
  var supplus = "⫀";
  var supset = "⊃";
  var Supset = "⋑";
  var supseteq = "⊇";
  var supseteqq = "⫆";
  var supsetneq = "⊋";
  var supsetneqq = "⫌";
  var supsim = "⫈";
  var supsub = "⫔";
  var supsup = "⫖";
  var swarhk = "⤦";
  var swarr = "↙";
  var swArr = "⇙";
  var swarrow = "↙";
  var swnwar = "⤪";
  var szlig = "ß";
  var Tab = "\t";
  var target = "⌖";
  var Tau = "Τ";
  var tau = "τ";
  var tbrk = "⎴";
  var Tcaron = "Ť";
  var tcaron = "ť";
  var Tcedil = "Ţ";
  var tcedil = "ţ";
  var Tcy = "Т";
  var tcy = "т";
  var tdot = "⃛";
  var telrec = "⌕";
  var Tfr = "𝔗";
  var tfr = "𝔱";
  var there4 = "∴";
  var therefore = "∴";
  var Therefore = "∴";
  var Theta = "Θ";
  var theta = "θ";
  var thetasym = "ϑ";
  var thetav = "ϑ";
  var thickapprox = "≈";
  var thicksim = "∼";
  var ThickSpace = "  ";
  var ThinSpace = " ";
  var thinsp = " ";
  var thkap = "≈";
  var thksim = "∼";
  var THORN = "Þ";
  var thorn = "þ";
  var tilde = "˜";
  var Tilde = "∼";
  var TildeEqual = "≃";
  var TildeFullEqual = "≅";
  var TildeTilde = "≈";
  var timesbar = "⨱";
  var timesb = "⊠";
  var times = "×";
  var timesd = "⨰";
  var tint = "∭";
  var toea = "⤨";
  var topbot = "⌶";
  var topcir = "⫱";
  var top = "⊤";
  var Topf = "𝕋";
  var topf = "𝕥";
  var topfork = "⫚";
  var tosa = "⤩";
  var tprime = "‴";
  var trade = "™";
  var TRADE = "™";
  var triangle = "▵";
  var triangledown = "▿";
  var triangleleft = "◃";
  var trianglelefteq = "⊴";
  var triangleq = "≜";
  var triangleright = "▹";
  var trianglerighteq = "⊵";
  var tridot = "◬";
  var trie = "≜";
  var triminus = "⨺";
  var TripleDot = "⃛";
  var triplus = "⨹";
  var trisb = "⧍";
  var tritime = "⨻";
  var trpezium = "⏢";
  var Tscr = "𝒯";
  var tscr = "𝓉";
  var TScy = "Ц";
  var tscy = "ц";
  var TSHcy = "Ћ";
  var tshcy = "ћ";
  var Tstrok = "Ŧ";
  var tstrok = "ŧ";
  var twixt = "≬";
  var twoheadleftarrow = "↞";
  var twoheadrightarrow = "↠";
  var Uacute = "Ú";
  var uacute = "ú";
  var uarr = "↑";
  var Uarr = "↟";
  var uArr = "⇑";
  var Uarrocir = "⥉";
  var Ubrcy = "Ў";
  var ubrcy = "ў";
  var Ubreve = "Ŭ";
  var ubreve = "ŭ";
  var Ucirc = "Û";
  var ucirc = "û";
  var Ucy = "У";
  var ucy = "у";
  var udarr = "⇅";
  var Udblac = "Ű";
  var udblac = "ű";
  var udhar = "⥮";
  var ufisht = "⥾";
  var Ufr = "𝔘";
  var ufr = "𝔲";
  var Ugrave = "Ù";
  var ugrave = "ù";
  var uHar = "⥣";
  var uharl = "↿";
  var uharr = "↾";
  var uhblk = "▀";
  var ulcorn = "⌜";
  var ulcorner = "⌜";
  var ulcrop = "⌏";
  var ultri = "◸";
  var Umacr = "Ū";
  var umacr = "ū";
  var uml = "¨";
  var UnderBar = "_";
  var UnderBrace = "⏟";
  var UnderBracket = "⎵";
  var UnderParenthesis = "⏝";
  var Union = "⋃";
  var UnionPlus = "⊎";
  var Uogon = "Ų";
  var uogon = "ų";
  var Uopf = "𝕌";
  var uopf = "𝕦";
  var UpArrowBar = "⤒";
  var uparrow = "↑";
  var UpArrow = "↑";
  var Uparrow = "⇑";
  var UpArrowDownArrow = "⇅";
  var updownarrow = "↕";
  var UpDownArrow = "↕";
  var Updownarrow = "⇕";
  var UpEquilibrium = "⥮";
  var upharpoonleft = "↿";
  var upharpoonright = "↾";
  var uplus = "⊎";
  var UpperLeftArrow = "↖";
  var UpperRightArrow = "↗";
  var upsi = "υ";
  var Upsi = "ϒ";
  var upsih = "ϒ";
  var Upsilon = "Υ";
  var upsilon = "υ";
  var UpTeeArrow = "↥";
  var UpTee = "⊥";
  var upuparrows = "⇈";
  var urcorn = "⌝";
  var urcorner = "⌝";
  var urcrop = "⌎";
  var Uring = "Ů";
  var uring = "ů";
  var urtri = "◹";
  var Uscr = "𝒰";
  var uscr = "𝓊";
  var utdot = "⋰";
  var Utilde = "Ũ";
  var utilde = "ũ";
  var utri = "▵";
  var utrif = "▴";
  var uuarr = "⇈";
  var Uuml = "Ü";
  var uuml = "ü";
  var uwangle = "⦧";
  var vangrt = "⦜";
  var varepsilon = "ϵ";
  var varkappa = "ϰ";
  var varnothing = "∅";
  var varphi = "ϕ";
  var varpi = "ϖ";
  var varpropto = "∝";
  var varr = "↕";
  var vArr = "⇕";
  var varrho = "ϱ";
  var varsigma = "ς";
  var varsubsetneq = "⊊︀";
  var varsubsetneqq = "⫋︀";
  var varsupsetneq = "⊋︀";
  var varsupsetneqq = "⫌︀";
  var vartheta = "ϑ";
  var vartriangleleft = "⊲";
  var vartriangleright = "⊳";
  var vBar = "⫨";
  var Vbar = "⫫";
  var vBarv = "⫩";
  var Vcy = "В";
  var vcy = "в";
  var vdash = "⊢";
  var vDash = "⊨";
  var Vdash = "⊩";
  var VDash = "⊫";
  var Vdashl = "⫦";
  var veebar = "⊻";
  var vee = "∨";
  var Vee = "⋁";
  var veeeq = "≚";
  var vellip = "⋮";
  var verbar = "|";
  var Verbar = "‖";
  var vert = "|";
  var Vert = "‖";
  var VerticalBar = "∣";
  var VerticalLine = "|";
  var VerticalSeparator = "❘";
  var VerticalTilde = "≀";
  var VeryThinSpace = " ";
  var Vfr = "𝔙";
  var vfr = "𝔳";
  var vltri = "⊲";
  var vnsub = "⊂⃒";
  var vnsup = "⊃⃒";
  var Vopf = "𝕍";
  var vopf = "𝕧";
  var vprop = "∝";
  var vrtri = "⊳";
  var Vscr = "𝒱";
  var vscr = "𝓋";
  var vsubnE = "⫋︀";
  var vsubne = "⊊︀";
  var vsupnE = "⫌︀";
  var vsupne = "⊋︀";
  var Vvdash = "⊪";
  var vzigzag = "⦚";
  var Wcirc = "Ŵ";
  var wcirc = "ŵ";
  var wedbar = "⩟";
  var wedge = "∧";
  var Wedge = "⋀";
  var wedgeq = "≙";
  var weierp = "℘";
  var Wfr = "𝔚";
  var wfr = "𝔴";
  var Wopf = "𝕎";
  var wopf = "𝕨";
  var wp = "℘";
  var wr = "≀";
  var wreath = "≀";
  var Wscr = "𝒲";
  var wscr = "𝓌";
  var xcap = "⋂";
  var xcirc = "◯";
  var xcup = "⋃";
  var xdtri = "▽";
  var Xfr = "𝔛";
  var xfr = "𝔵";
  var xharr = "⟷";
  var xhArr = "⟺";
  var Xi = "Ξ";
  var xi = "ξ";
  var xlarr = "⟵";
  var xlArr = "⟸";
  var xmap = "⟼";
  var xnis = "⋻";
  var xodot = "⨀";
  var Xopf = "𝕏";
  var xopf = "𝕩";
  var xoplus = "⨁";
  var xotime = "⨂";
  var xrarr = "⟶";
  var xrArr = "⟹";
  var Xscr = "𝒳";
  var xscr = "𝓍";
  var xsqcup = "⨆";
  var xuplus = "⨄";
  var xutri = "△";
  var xvee = "⋁";
  var xwedge = "⋀";
  var Yacute = "Ý";
  var yacute = "ý";
  var YAcy = "Я";
  var yacy = "я";
  var Ycirc = "Ŷ";
  var ycirc = "ŷ";
  var Ycy = "Ы";
  var ycy = "ы";
  var yen = "¥";
  var Yfr = "𝔜";
  var yfr = "𝔶";
  var YIcy = "Ї";
  var yicy = "ї";
  var Yopf = "𝕐";
  var yopf = "𝕪";
  var Yscr = "𝒴";
  var yscr = "𝓎";
  var YUcy = "Ю";
  var yucy = "ю";
  var yuml = "ÿ";
  var Yuml = "Ÿ";
  var Zacute = "Ź";
  var zacute = "ź";
  var Zcaron = "Ž";
  var zcaron = "ž";
  var Zcy = "З";
  var zcy = "з";
  var Zdot = "Ż";
  var zdot = "ż";
  var zeetrf = "ℨ";
  var ZeroWidthSpace = "​";
  var Zeta = "Ζ";
  var zeta = "ζ";
  var zfr = "𝔷";
  var Zfr = "ℨ";
  var ZHcy = "Ж";
  var zhcy = "ж";
  var zigrarr = "⇝";
  var zopf = "𝕫";
  var Zopf = "ℤ";
  var Zscr = "𝒵";
  var zscr = "𝓏";
  var zwj = "‍";
  var zwnj = "‌";
  var require$$0$4 = {
  	Aacute: Aacute,
  	aacute: aacute,
  	Abreve: Abreve,
  	abreve: abreve,
  	ac: ac,
  	acd: acd,
  	acE: acE,
  	Acirc: Acirc,
  	acirc: acirc,
  	acute: acute,
  	Acy: Acy,
  	acy: acy,
  	AElig: AElig,
  	aelig: aelig,
  	af: af,
  	Afr: Afr,
  	afr: afr,
  	Agrave: Agrave,
  	agrave: agrave,
  	alefsym: alefsym,
  	aleph: aleph,
  	Alpha: Alpha,
  	alpha: alpha,
  	Amacr: Amacr,
  	amacr: amacr,
  	amalg: amalg,
  	amp: amp,
  	AMP: AMP,
  	andand: andand,
  	And: And,
  	and: and,
  	andd: andd,
  	andslope: andslope,
  	andv: andv,
  	ang: ang,
  	ange: ange,
  	angle: angle,
  	angmsdaa: angmsdaa,
  	angmsdab: angmsdab,
  	angmsdac: angmsdac,
  	angmsdad: angmsdad,
  	angmsdae: angmsdae,
  	angmsdaf: angmsdaf,
  	angmsdag: angmsdag,
  	angmsdah: angmsdah,
  	angmsd: angmsd,
  	angrt: angrt,
  	angrtvb: angrtvb,
  	angrtvbd: angrtvbd,
  	angsph: angsph,
  	angst: angst,
  	angzarr: angzarr,
  	Aogon: Aogon,
  	aogon: aogon,
  	Aopf: Aopf,
  	aopf: aopf,
  	apacir: apacir,
  	ap: ap,
  	apE: apE,
  	ape: ape,
  	apid: apid,
  	apos: apos,
  	ApplyFunction: ApplyFunction,
  	approx: approx,
  	approxeq: approxeq,
  	Aring: Aring,
  	aring: aring,
  	Ascr: Ascr,
  	ascr: ascr,
  	Assign: Assign,
  	ast: ast,
  	asymp: asymp,
  	asympeq: asympeq,
  	Atilde: Atilde,
  	atilde: atilde,
  	Auml: Auml,
  	auml: auml,
  	awconint: awconint,
  	awint: awint,
  	backcong: backcong,
  	backepsilon: backepsilon,
  	backprime: backprime,
  	backsim: backsim,
  	backsimeq: backsimeq,
  	Backslash: Backslash,
  	Barv: Barv,
  	barvee: barvee,
  	barwed: barwed,
  	Barwed: Barwed,
  	barwedge: barwedge,
  	bbrk: bbrk,
  	bbrktbrk: bbrktbrk,
  	bcong: bcong,
  	Bcy: Bcy,
  	bcy: bcy,
  	bdquo: bdquo,
  	becaus: becaus,
  	because: because,
  	Because: Because,
  	bemptyv: bemptyv,
  	bepsi: bepsi,
  	bernou: bernou,
  	Bernoullis: Bernoullis,
  	Beta: Beta,
  	beta: beta,
  	beth: beth,
  	between: between,
  	Bfr: Bfr,
  	bfr: bfr,
  	bigcap: bigcap,
  	bigcirc: bigcirc,
  	bigcup: bigcup,
  	bigodot: bigodot,
  	bigoplus: bigoplus,
  	bigotimes: bigotimes,
  	bigsqcup: bigsqcup,
  	bigstar: bigstar,
  	bigtriangledown: bigtriangledown,
  	bigtriangleup: bigtriangleup,
  	biguplus: biguplus,
  	bigvee: bigvee,
  	bigwedge: bigwedge,
  	bkarow: bkarow,
  	blacklozenge: blacklozenge,
  	blacksquare: blacksquare,
  	blacktriangle: blacktriangle,
  	blacktriangledown: blacktriangledown,
  	blacktriangleleft: blacktriangleleft,
  	blacktriangleright: blacktriangleright,
  	blank: blank,
  	blk12: blk12,
  	blk14: blk14,
  	blk34: blk34,
  	block: block,
  	bne: bne,
  	bnequiv: bnequiv,
  	bNot: bNot,
  	bnot: bnot,
  	Bopf: Bopf,
  	bopf: bopf,
  	bot: bot,
  	bottom: bottom,
  	bowtie: bowtie,
  	boxbox: boxbox,
  	boxdl: boxdl,
  	boxdL: boxdL,
  	boxDl: boxDl,
  	boxDL: boxDL,
  	boxdr: boxdr,
  	boxdR: boxdR,
  	boxDr: boxDr,
  	boxDR: boxDR,
  	boxh: boxh,
  	boxH: boxH,
  	boxhd: boxhd,
  	boxHd: boxHd,
  	boxhD: boxhD,
  	boxHD: boxHD,
  	boxhu: boxhu,
  	boxHu: boxHu,
  	boxhU: boxhU,
  	boxHU: boxHU,
  	boxminus: boxminus,
  	boxplus: boxplus,
  	boxtimes: boxtimes,
  	boxul: boxul,
  	boxuL: boxuL,
  	boxUl: boxUl,
  	boxUL: boxUL,
  	boxur: boxur,
  	boxuR: boxuR,
  	boxUr: boxUr,
  	boxUR: boxUR,
  	boxv: boxv,
  	boxV: boxV,
  	boxvh: boxvh,
  	boxvH: boxvH,
  	boxVh: boxVh,
  	boxVH: boxVH,
  	boxvl: boxvl,
  	boxvL: boxvL,
  	boxVl: boxVl,
  	boxVL: boxVL,
  	boxvr: boxvr,
  	boxvR: boxvR,
  	boxVr: boxVr,
  	boxVR: boxVR,
  	bprime: bprime,
  	breve: breve,
  	Breve: Breve,
  	brvbar: brvbar,
  	bscr: bscr,
  	Bscr: Bscr,
  	bsemi: bsemi,
  	bsim: bsim,
  	bsime: bsime,
  	bsolb: bsolb,
  	bsol: bsol,
  	bsolhsub: bsolhsub,
  	bull: bull,
  	bullet: bullet,
  	bump: bump,
  	bumpE: bumpE,
  	bumpe: bumpe,
  	Bumpeq: Bumpeq,
  	bumpeq: bumpeq,
  	Cacute: Cacute,
  	cacute: cacute,
  	capand: capand,
  	capbrcup: capbrcup,
  	capcap: capcap,
  	cap: cap,
  	Cap: Cap,
  	capcup: capcup,
  	capdot: capdot,
  	CapitalDifferentialD: CapitalDifferentialD,
  	caps: caps,
  	caret: caret,
  	caron: caron,
  	Cayleys: Cayleys,
  	ccaps: ccaps,
  	Ccaron: Ccaron,
  	ccaron: ccaron,
  	Ccedil: Ccedil,
  	ccedil: ccedil,
  	Ccirc: Ccirc,
  	ccirc: ccirc,
  	Cconint: Cconint,
  	ccups: ccups,
  	ccupssm: ccupssm,
  	Cdot: Cdot,
  	cdot: cdot,
  	cedil: cedil,
  	Cedilla: Cedilla,
  	cemptyv: cemptyv,
  	cent: cent,
  	centerdot: centerdot,
  	CenterDot: CenterDot,
  	cfr: cfr,
  	Cfr: Cfr,
  	CHcy: CHcy,
  	chcy: chcy,
  	check: check,
  	checkmark: checkmark,
  	Chi: Chi,
  	chi: chi,
  	circ: circ,
  	circeq: circeq,
  	circlearrowleft: circlearrowleft,
  	circlearrowright: circlearrowright,
  	circledast: circledast,
  	circledcirc: circledcirc,
  	circleddash: circleddash,
  	CircleDot: CircleDot,
  	circledR: circledR,
  	circledS: circledS,
  	CircleMinus: CircleMinus,
  	CirclePlus: CirclePlus,
  	CircleTimes: CircleTimes,
  	cir: cir,
  	cirE: cirE,
  	cire: cire,
  	cirfnint: cirfnint,
  	cirmid: cirmid,
  	cirscir: cirscir,
  	ClockwiseContourIntegral: ClockwiseContourIntegral,
  	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
  	CloseCurlyQuote: CloseCurlyQuote,
  	clubs: clubs,
  	clubsuit: clubsuit,
  	colon: colon,
  	Colon: Colon,
  	Colone: Colone,
  	colone: colone,
  	coloneq: coloneq,
  	comma: comma,
  	commat: commat,
  	comp: comp,
  	compfn: compfn,
  	complement: complement,
  	complexes: complexes,
  	cong: cong,
  	congdot: congdot,
  	Congruent: Congruent,
  	conint: conint,
  	Conint: Conint,
  	ContourIntegral: ContourIntegral,
  	copf: copf,
  	Copf: Copf,
  	coprod: coprod,
  	Coproduct: Coproduct,
  	copy: copy,
  	COPY: COPY,
  	copysr: copysr,
  	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
  	crarr: crarr,
  	cross: cross,
  	Cross: Cross,
  	Cscr: Cscr,
  	cscr: cscr,
  	csub: csub,
  	csube: csube,
  	csup: csup,
  	csupe: csupe,
  	ctdot: ctdot,
  	cudarrl: cudarrl,
  	cudarrr: cudarrr,
  	cuepr: cuepr,
  	cuesc: cuesc,
  	cularr: cularr,
  	cularrp: cularrp,
  	cupbrcap: cupbrcap,
  	cupcap: cupcap,
  	CupCap: CupCap,
  	cup: cup,
  	Cup: Cup,
  	cupcup: cupcup,
  	cupdot: cupdot,
  	cupor: cupor,
  	cups: cups,
  	curarr: curarr,
  	curarrm: curarrm,
  	curlyeqprec: curlyeqprec,
  	curlyeqsucc: curlyeqsucc,
  	curlyvee: curlyvee,
  	curlywedge: curlywedge,
  	curren: curren,
  	curvearrowleft: curvearrowleft,
  	curvearrowright: curvearrowright,
  	cuvee: cuvee,
  	cuwed: cuwed,
  	cwconint: cwconint,
  	cwint: cwint,
  	cylcty: cylcty,
  	dagger: dagger,
  	Dagger: Dagger,
  	daleth: daleth,
  	darr: darr,
  	Darr: Darr,
  	dArr: dArr,
  	dash: dash,
  	Dashv: Dashv,
  	dashv: dashv,
  	dbkarow: dbkarow,
  	dblac: dblac,
  	Dcaron: Dcaron,
  	dcaron: dcaron,
  	Dcy: Dcy,
  	dcy: dcy,
  	ddagger: ddagger,
  	ddarr: ddarr,
  	DD: DD,
  	dd: dd,
  	DDotrahd: DDotrahd,
  	ddotseq: ddotseq,
  	deg: deg,
  	Del: Del,
  	Delta: Delta,
  	delta: delta,
  	demptyv: demptyv,
  	dfisht: dfisht,
  	Dfr: Dfr,
  	dfr: dfr,
  	dHar: dHar,
  	dharl: dharl,
  	dharr: dharr,
  	DiacriticalAcute: DiacriticalAcute,
  	DiacriticalDot: DiacriticalDot,
  	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
  	DiacriticalGrave: DiacriticalGrave,
  	DiacriticalTilde: DiacriticalTilde,
  	diam: diam,
  	diamond: diamond,
  	Diamond: Diamond,
  	diamondsuit: diamondsuit,
  	diams: diams,
  	die: die,
  	DifferentialD: DifferentialD,
  	digamma: digamma,
  	disin: disin,
  	div: div,
  	divide: divide,
  	divideontimes: divideontimes,
  	divonx: divonx,
  	DJcy: DJcy,
  	djcy: djcy,
  	dlcorn: dlcorn,
  	dlcrop: dlcrop,
  	dollar: dollar,
  	Dopf: Dopf,
  	dopf: dopf,
  	Dot: Dot,
  	dot: dot,
  	DotDot: DotDot,
  	doteq: doteq,
  	doteqdot: doteqdot,
  	DotEqual: DotEqual,
  	dotminus: dotminus,
  	dotplus: dotplus,
  	dotsquare: dotsquare,
  	doublebarwedge: doublebarwedge,
  	DoubleContourIntegral: DoubleContourIntegral,
  	DoubleDot: DoubleDot,
  	DoubleDownArrow: DoubleDownArrow,
  	DoubleLeftArrow: DoubleLeftArrow,
  	DoubleLeftRightArrow: DoubleLeftRightArrow,
  	DoubleLeftTee: DoubleLeftTee,
  	DoubleLongLeftArrow: DoubleLongLeftArrow,
  	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
  	DoubleLongRightArrow: DoubleLongRightArrow,
  	DoubleRightArrow: DoubleRightArrow,
  	DoubleRightTee: DoubleRightTee,
  	DoubleUpArrow: DoubleUpArrow,
  	DoubleUpDownArrow: DoubleUpDownArrow,
  	DoubleVerticalBar: DoubleVerticalBar,
  	DownArrowBar: DownArrowBar,
  	downarrow: downarrow,
  	DownArrow: DownArrow,
  	Downarrow: Downarrow,
  	DownArrowUpArrow: DownArrowUpArrow,
  	DownBreve: DownBreve,
  	downdownarrows: downdownarrows,
  	downharpoonleft: downharpoonleft,
  	downharpoonright: downharpoonright,
  	DownLeftRightVector: DownLeftRightVector,
  	DownLeftTeeVector: DownLeftTeeVector,
  	DownLeftVectorBar: DownLeftVectorBar,
  	DownLeftVector: DownLeftVector,
  	DownRightTeeVector: DownRightTeeVector,
  	DownRightVectorBar: DownRightVectorBar,
  	DownRightVector: DownRightVector,
  	DownTeeArrow: DownTeeArrow,
  	DownTee: DownTee,
  	drbkarow: drbkarow,
  	drcorn: drcorn,
  	drcrop: drcrop,
  	Dscr: Dscr,
  	dscr: dscr,
  	DScy: DScy,
  	dscy: dscy,
  	dsol: dsol,
  	Dstrok: Dstrok,
  	dstrok: dstrok,
  	dtdot: dtdot,
  	dtri: dtri,
  	dtrif: dtrif,
  	duarr: duarr,
  	duhar: duhar,
  	dwangle: dwangle,
  	DZcy: DZcy,
  	dzcy: dzcy,
  	dzigrarr: dzigrarr,
  	Eacute: Eacute,
  	eacute: eacute,
  	easter: easter,
  	Ecaron: Ecaron,
  	ecaron: ecaron,
  	Ecirc: Ecirc,
  	ecirc: ecirc,
  	ecir: ecir,
  	ecolon: ecolon,
  	Ecy: Ecy,
  	ecy: ecy,
  	eDDot: eDDot,
  	Edot: Edot,
  	edot: edot,
  	eDot: eDot,
  	ee: ee,
  	efDot: efDot,
  	Efr: Efr,
  	efr: efr,
  	eg: eg,
  	Egrave: Egrave,
  	egrave: egrave,
  	egs: egs,
  	egsdot: egsdot,
  	el: el,
  	Element: Element,
  	elinters: elinters,
  	ell: ell,
  	els: els,
  	elsdot: elsdot,
  	Emacr: Emacr,
  	emacr: emacr,
  	empty: empty,
  	emptyset: emptyset,
  	EmptySmallSquare: EmptySmallSquare,
  	emptyv: emptyv,
  	EmptyVerySmallSquare: EmptyVerySmallSquare,
  	emsp13: emsp13,
  	emsp14: emsp14,
  	emsp: emsp,
  	ENG: ENG,
  	eng: eng,
  	ensp: ensp,
  	Eogon: Eogon,
  	eogon: eogon,
  	Eopf: Eopf,
  	eopf: eopf,
  	epar: epar,
  	eparsl: eparsl,
  	eplus: eplus,
  	epsi: epsi,
  	Epsilon: Epsilon,
  	epsilon: epsilon,
  	epsiv: epsiv,
  	eqcirc: eqcirc,
  	eqcolon: eqcolon,
  	eqsim: eqsim,
  	eqslantgtr: eqslantgtr,
  	eqslantless: eqslantless,
  	Equal: Equal,
  	equals: equals,
  	EqualTilde: EqualTilde,
  	equest: equest,
  	Equilibrium: Equilibrium,
  	equiv: equiv,
  	equivDD: equivDD,
  	eqvparsl: eqvparsl,
  	erarr: erarr,
  	erDot: erDot,
  	escr: escr,
  	Escr: Escr,
  	esdot: esdot,
  	Esim: Esim,
  	esim: esim,
  	Eta: Eta,
  	eta: eta,
  	ETH: ETH,
  	eth: eth,
  	Euml: Euml,
  	euml: euml,
  	euro: euro,
  	excl: excl,
  	exist: exist,
  	Exists: Exists,
  	expectation: expectation,
  	exponentiale: exponentiale,
  	ExponentialE: ExponentialE,
  	fallingdotseq: fallingdotseq,
  	Fcy: Fcy,
  	fcy: fcy,
  	female: female,
  	ffilig: ffilig,
  	fflig: fflig,
  	ffllig: ffllig,
  	Ffr: Ffr,
  	ffr: ffr,
  	filig: filig,
  	FilledSmallSquare: FilledSmallSquare,
  	FilledVerySmallSquare: FilledVerySmallSquare,
  	fjlig: fjlig,
  	flat: flat,
  	fllig: fllig,
  	fltns: fltns,
  	fnof: fnof,
  	Fopf: Fopf,
  	fopf: fopf,
  	forall: forall,
  	ForAll: ForAll,
  	fork: fork,
  	forkv: forkv,
  	Fouriertrf: Fouriertrf,
  	fpartint: fpartint,
  	frac12: frac12,
  	frac13: frac13,
  	frac14: frac14,
  	frac15: frac15,
  	frac16: frac16,
  	frac18: frac18,
  	frac23: frac23,
  	frac25: frac25,
  	frac34: frac34,
  	frac35: frac35,
  	frac38: frac38,
  	frac45: frac45,
  	frac56: frac56,
  	frac58: frac58,
  	frac78: frac78,
  	frasl: frasl,
  	frown: frown,
  	fscr: fscr,
  	Fscr: Fscr,
  	gacute: gacute,
  	Gamma: Gamma,
  	gamma: gamma,
  	Gammad: Gammad,
  	gammad: gammad,
  	gap: gap,
  	Gbreve: Gbreve,
  	gbreve: gbreve,
  	Gcedil: Gcedil,
  	Gcirc: Gcirc,
  	gcirc: gcirc,
  	Gcy: Gcy,
  	gcy: gcy,
  	Gdot: Gdot,
  	gdot: gdot,
  	ge: ge,
  	gE: gE,
  	gEl: gEl,
  	gel: gel,
  	geq: geq,
  	geqq: geqq,
  	geqslant: geqslant,
  	gescc: gescc,
  	ges: ges,
  	gesdot: gesdot,
  	gesdoto: gesdoto,
  	gesdotol: gesdotol,
  	gesl: gesl,
  	gesles: gesles,
  	Gfr: Gfr,
  	gfr: gfr,
  	gg: gg,
  	Gg: Gg,
  	ggg: ggg,
  	gimel: gimel,
  	GJcy: GJcy,
  	gjcy: gjcy,
  	gla: gla,
  	gl: gl,
  	glE: glE,
  	glj: glj,
  	gnap: gnap,
  	gnapprox: gnapprox,
  	gne: gne,
  	gnE: gnE,
  	gneq: gneq,
  	gneqq: gneqq,
  	gnsim: gnsim,
  	Gopf: Gopf,
  	gopf: gopf,
  	grave: grave,
  	GreaterEqual: GreaterEqual,
  	GreaterEqualLess: GreaterEqualLess,
  	GreaterFullEqual: GreaterFullEqual,
  	GreaterGreater: GreaterGreater,
  	GreaterLess: GreaterLess,
  	GreaterSlantEqual: GreaterSlantEqual,
  	GreaterTilde: GreaterTilde,
  	Gscr: Gscr,
  	gscr: gscr,
  	gsim: gsim,
  	gsime: gsime,
  	gsiml: gsiml,
  	gtcc: gtcc,
  	gtcir: gtcir,
  	gt: gt,
  	GT: GT,
  	Gt: Gt,
  	gtdot: gtdot,
  	gtlPar: gtlPar,
  	gtquest: gtquest,
  	gtrapprox: gtrapprox,
  	gtrarr: gtrarr,
  	gtrdot: gtrdot,
  	gtreqless: gtreqless,
  	gtreqqless: gtreqqless,
  	gtrless: gtrless,
  	gtrsim: gtrsim,
  	gvertneqq: gvertneqq,
  	gvnE: gvnE,
  	Hacek: Hacek,
  	hairsp: hairsp,
  	half: half,
  	hamilt: hamilt,
  	HARDcy: HARDcy,
  	hardcy: hardcy,
  	harrcir: harrcir,
  	harr: harr,
  	hArr: hArr,
  	harrw: harrw,
  	Hat: Hat,
  	hbar: hbar,
  	Hcirc: Hcirc,
  	hcirc: hcirc,
  	hearts: hearts,
  	heartsuit: heartsuit,
  	hellip: hellip,
  	hercon: hercon,
  	hfr: hfr,
  	Hfr: Hfr,
  	HilbertSpace: HilbertSpace,
  	hksearow: hksearow,
  	hkswarow: hkswarow,
  	hoarr: hoarr,
  	homtht: homtht,
  	hookleftarrow: hookleftarrow,
  	hookrightarrow: hookrightarrow,
  	hopf: hopf,
  	Hopf: Hopf,
  	horbar: horbar,
  	HorizontalLine: HorizontalLine,
  	hscr: hscr,
  	Hscr: Hscr,
  	hslash: hslash,
  	Hstrok: Hstrok,
  	hstrok: hstrok,
  	HumpDownHump: HumpDownHump,
  	HumpEqual: HumpEqual,
  	hybull: hybull,
  	hyphen: hyphen,
  	Iacute: Iacute,
  	iacute: iacute,
  	ic: ic,
  	Icirc: Icirc,
  	icirc: icirc,
  	Icy: Icy,
  	icy: icy,
  	Idot: Idot,
  	IEcy: IEcy,
  	iecy: iecy,
  	iexcl: iexcl,
  	iff: iff,
  	ifr: ifr,
  	Ifr: Ifr,
  	Igrave: Igrave,
  	igrave: igrave,
  	ii: ii,
  	iiiint: iiiint,
  	iiint: iiint,
  	iinfin: iinfin,
  	iiota: iiota,
  	IJlig: IJlig,
  	ijlig: ijlig,
  	Imacr: Imacr,
  	imacr: imacr,
  	image: image,
  	ImaginaryI: ImaginaryI,
  	imagline: imagline,
  	imagpart: imagpart,
  	imath: imath,
  	Im: Im,
  	imof: imof,
  	imped: imped,
  	Implies: Implies,
  	incare: incare,
  	"in": "∈",
  	infin: infin,
  	infintie: infintie,
  	inodot: inodot,
  	intcal: intcal,
  	int: int,
  	Int: Int,
  	integers: integers,
  	Integral: Integral,
  	intercal: intercal,
  	Intersection: Intersection,
  	intlarhk: intlarhk,
  	intprod: intprod,
  	InvisibleComma: InvisibleComma,
  	InvisibleTimes: InvisibleTimes,
  	IOcy: IOcy,
  	iocy: iocy,
  	Iogon: Iogon,
  	iogon: iogon,
  	Iopf: Iopf,
  	iopf: iopf,
  	Iota: Iota,
  	iota: iota,
  	iprod: iprod,
  	iquest: iquest,
  	iscr: iscr,
  	Iscr: Iscr,
  	isin: isin,
  	isindot: isindot,
  	isinE: isinE,
  	isins: isins,
  	isinsv: isinsv,
  	isinv: isinv,
  	it: it,
  	Itilde: Itilde,
  	itilde: itilde,
  	Iukcy: Iukcy,
  	iukcy: iukcy,
  	Iuml: Iuml,
  	iuml: iuml,
  	Jcirc: Jcirc,
  	jcirc: jcirc,
  	Jcy: Jcy,
  	jcy: jcy,
  	Jfr: Jfr,
  	jfr: jfr,
  	jmath: jmath,
  	Jopf: Jopf,
  	jopf: jopf,
  	Jscr: Jscr,
  	jscr: jscr,
  	Jsercy: Jsercy,
  	jsercy: jsercy,
  	Jukcy: Jukcy,
  	jukcy: jukcy,
  	Kappa: Kappa,
  	kappa: kappa,
  	kappav: kappav,
  	Kcedil: Kcedil,
  	kcedil: kcedil,
  	Kcy: Kcy,
  	kcy: kcy,
  	Kfr: Kfr,
  	kfr: kfr,
  	kgreen: kgreen,
  	KHcy: KHcy,
  	khcy: khcy,
  	KJcy: KJcy,
  	kjcy: kjcy,
  	Kopf: Kopf,
  	kopf: kopf,
  	Kscr: Kscr,
  	kscr: kscr,
  	lAarr: lAarr,
  	Lacute: Lacute,
  	lacute: lacute,
  	laemptyv: laemptyv,
  	lagran: lagran,
  	Lambda: Lambda,
  	lambda: lambda,
  	lang: lang,
  	Lang: Lang,
  	langd: langd,
  	langle: langle,
  	lap: lap,
  	Laplacetrf: Laplacetrf,
  	laquo: laquo,
  	larrb: larrb,
  	larrbfs: larrbfs,
  	larr: larr,
  	Larr: Larr,
  	lArr: lArr,
  	larrfs: larrfs,
  	larrhk: larrhk,
  	larrlp: larrlp,
  	larrpl: larrpl,
  	larrsim: larrsim,
  	larrtl: larrtl,
  	latail: latail,
  	lAtail: lAtail,
  	lat: lat,
  	late: late,
  	lates: lates,
  	lbarr: lbarr,
  	lBarr: lBarr,
  	lbbrk: lbbrk,
  	lbrace: lbrace,
  	lbrack: lbrack,
  	lbrke: lbrke,
  	lbrksld: lbrksld,
  	lbrkslu: lbrkslu,
  	Lcaron: Lcaron,
  	lcaron: lcaron,
  	Lcedil: Lcedil,
  	lcedil: lcedil,
  	lceil: lceil,
  	lcub: lcub,
  	Lcy: Lcy,
  	lcy: lcy,
  	ldca: ldca,
  	ldquo: ldquo,
  	ldquor: ldquor,
  	ldrdhar: ldrdhar,
  	ldrushar: ldrushar,
  	ldsh: ldsh,
  	le: le,
  	lE: lE,
  	LeftAngleBracket: LeftAngleBracket,
  	LeftArrowBar: LeftArrowBar,
  	leftarrow: leftarrow,
  	LeftArrow: LeftArrow,
  	Leftarrow: Leftarrow,
  	LeftArrowRightArrow: LeftArrowRightArrow,
  	leftarrowtail: leftarrowtail,
  	LeftCeiling: LeftCeiling,
  	LeftDoubleBracket: LeftDoubleBracket,
  	LeftDownTeeVector: LeftDownTeeVector,
  	LeftDownVectorBar: LeftDownVectorBar,
  	LeftDownVector: LeftDownVector,
  	LeftFloor: LeftFloor,
  	leftharpoondown: leftharpoondown,
  	leftharpoonup: leftharpoonup,
  	leftleftarrows: leftleftarrows,
  	leftrightarrow: leftrightarrow,
  	LeftRightArrow: LeftRightArrow,
  	Leftrightarrow: Leftrightarrow,
  	leftrightarrows: leftrightarrows,
  	leftrightharpoons: leftrightharpoons,
  	leftrightsquigarrow: leftrightsquigarrow,
  	LeftRightVector: LeftRightVector,
  	LeftTeeArrow: LeftTeeArrow,
  	LeftTee: LeftTee,
  	LeftTeeVector: LeftTeeVector,
  	leftthreetimes: leftthreetimes,
  	LeftTriangleBar: LeftTriangleBar,
  	LeftTriangle: LeftTriangle,
  	LeftTriangleEqual: LeftTriangleEqual,
  	LeftUpDownVector: LeftUpDownVector,
  	LeftUpTeeVector: LeftUpTeeVector,
  	LeftUpVectorBar: LeftUpVectorBar,
  	LeftUpVector: LeftUpVector,
  	LeftVectorBar: LeftVectorBar,
  	LeftVector: LeftVector,
  	lEg: lEg,
  	leg: leg,
  	leq: leq,
  	leqq: leqq,
  	leqslant: leqslant,
  	lescc: lescc,
  	les: les,
  	lesdot: lesdot,
  	lesdoto: lesdoto,
  	lesdotor: lesdotor,
  	lesg: lesg,
  	lesges: lesges,
  	lessapprox: lessapprox,
  	lessdot: lessdot,
  	lesseqgtr: lesseqgtr,
  	lesseqqgtr: lesseqqgtr,
  	LessEqualGreater: LessEqualGreater,
  	LessFullEqual: LessFullEqual,
  	LessGreater: LessGreater,
  	lessgtr: lessgtr,
  	LessLess: LessLess,
  	lesssim: lesssim,
  	LessSlantEqual: LessSlantEqual,
  	LessTilde: LessTilde,
  	lfisht: lfisht,
  	lfloor: lfloor,
  	Lfr: Lfr,
  	lfr: lfr,
  	lg: lg,
  	lgE: lgE,
  	lHar: lHar,
  	lhard: lhard,
  	lharu: lharu,
  	lharul: lharul,
  	lhblk: lhblk,
  	LJcy: LJcy,
  	ljcy: ljcy,
  	llarr: llarr,
  	ll: ll,
  	Ll: Ll,
  	llcorner: llcorner,
  	Lleftarrow: Lleftarrow,
  	llhard: llhard,
  	lltri: lltri,
  	Lmidot: Lmidot,
  	lmidot: lmidot,
  	lmoustache: lmoustache,
  	lmoust: lmoust,
  	lnap: lnap,
  	lnapprox: lnapprox,
  	lne: lne,
  	lnE: lnE,
  	lneq: lneq,
  	lneqq: lneqq,
  	lnsim: lnsim,
  	loang: loang,
  	loarr: loarr,
  	lobrk: lobrk,
  	longleftarrow: longleftarrow,
  	LongLeftArrow: LongLeftArrow,
  	Longleftarrow: Longleftarrow,
  	longleftrightarrow: longleftrightarrow,
  	LongLeftRightArrow: LongLeftRightArrow,
  	Longleftrightarrow: Longleftrightarrow,
  	longmapsto: longmapsto,
  	longrightarrow: longrightarrow,
  	LongRightArrow: LongRightArrow,
  	Longrightarrow: Longrightarrow,
  	looparrowleft: looparrowleft,
  	looparrowright: looparrowright,
  	lopar: lopar,
  	Lopf: Lopf,
  	lopf: lopf,
  	loplus: loplus,
  	lotimes: lotimes,
  	lowast: lowast,
  	lowbar: lowbar,
  	LowerLeftArrow: LowerLeftArrow,
  	LowerRightArrow: LowerRightArrow,
  	loz: loz,
  	lozenge: lozenge,
  	lozf: lozf,
  	lpar: lpar,
  	lparlt: lparlt,
  	lrarr: lrarr,
  	lrcorner: lrcorner,
  	lrhar: lrhar,
  	lrhard: lrhard,
  	lrm: lrm,
  	lrtri: lrtri,
  	lsaquo: lsaquo,
  	lscr: lscr,
  	Lscr: Lscr,
  	lsh: lsh,
  	Lsh: Lsh,
  	lsim: lsim,
  	lsime: lsime,
  	lsimg: lsimg,
  	lsqb: lsqb,
  	lsquo: lsquo,
  	lsquor: lsquor,
  	Lstrok: Lstrok,
  	lstrok: lstrok,
  	ltcc: ltcc,
  	ltcir: ltcir,
  	lt: lt,
  	LT: LT,
  	Lt: Lt,
  	ltdot: ltdot,
  	lthree: lthree,
  	ltimes: ltimes,
  	ltlarr: ltlarr,
  	ltquest: ltquest,
  	ltri: ltri,
  	ltrie: ltrie,
  	ltrif: ltrif,
  	ltrPar: ltrPar,
  	lurdshar: lurdshar,
  	luruhar: luruhar,
  	lvertneqq: lvertneqq,
  	lvnE: lvnE,
  	macr: macr,
  	male: male,
  	malt: malt,
  	maltese: maltese,
  	"Map": "⤅",
  	map: map$1,
  	mapsto: mapsto,
  	mapstodown: mapstodown,
  	mapstoleft: mapstoleft,
  	mapstoup: mapstoup,
  	marker: marker,
  	mcomma: mcomma,
  	Mcy: Mcy,
  	mcy: mcy,
  	mdash: mdash,
  	mDDot: mDDot,
  	measuredangle: measuredangle,
  	MediumSpace: MediumSpace,
  	Mellintrf: Mellintrf,
  	Mfr: Mfr,
  	mfr: mfr,
  	mho: mho,
  	micro: micro,
  	midast: midast,
  	midcir: midcir,
  	mid: mid,
  	middot: middot,
  	minusb: minusb,
  	minus: minus,
  	minusd: minusd,
  	minusdu: minusdu,
  	MinusPlus: MinusPlus,
  	mlcp: mlcp,
  	mldr: mldr,
  	mnplus: mnplus,
  	models: models,
  	Mopf: Mopf,
  	mopf: mopf,
  	mp: mp,
  	mscr: mscr,
  	Mscr: Mscr,
  	mstpos: mstpos,
  	Mu: Mu,
  	mu: mu,
  	multimap: multimap,
  	mumap: mumap,
  	nabla: nabla,
  	Nacute: Nacute,
  	nacute: nacute,
  	nang: nang,
  	nap: nap,
  	napE: napE,
  	napid: napid,
  	napos: napos,
  	napprox: napprox,
  	natural: natural,
  	naturals: naturals,
  	natur: natur,
  	nbsp: nbsp,
  	nbump: nbump,
  	nbumpe: nbumpe,
  	ncap: ncap,
  	Ncaron: Ncaron,
  	ncaron: ncaron,
  	Ncedil: Ncedil,
  	ncedil: ncedil,
  	ncong: ncong,
  	ncongdot: ncongdot,
  	ncup: ncup,
  	Ncy: Ncy,
  	ncy: ncy,
  	ndash: ndash,
  	nearhk: nearhk,
  	nearr: nearr,
  	neArr: neArr,
  	nearrow: nearrow,
  	ne: ne,
  	nedot: nedot,
  	NegativeMediumSpace: NegativeMediumSpace,
  	NegativeThickSpace: NegativeThickSpace,
  	NegativeThinSpace: NegativeThinSpace,
  	NegativeVeryThinSpace: NegativeVeryThinSpace,
  	nequiv: nequiv,
  	nesear: nesear,
  	nesim: nesim,
  	NestedGreaterGreater: NestedGreaterGreater,
  	NestedLessLess: NestedLessLess,
  	NewLine: NewLine,
  	nexist: nexist,
  	nexists: nexists,
  	Nfr: Nfr,
  	nfr: nfr,
  	ngE: ngE,
  	nge: nge,
  	ngeq: ngeq,
  	ngeqq: ngeqq,
  	ngeqslant: ngeqslant,
  	nges: nges,
  	nGg: nGg,
  	ngsim: ngsim,
  	nGt: nGt,
  	ngt: ngt,
  	ngtr: ngtr,
  	nGtv: nGtv,
  	nharr: nharr,
  	nhArr: nhArr,
  	nhpar: nhpar,
  	ni: ni,
  	nis: nis,
  	nisd: nisd,
  	niv: niv,
  	NJcy: NJcy,
  	njcy: njcy,
  	nlarr: nlarr,
  	nlArr: nlArr,
  	nldr: nldr,
  	nlE: nlE,
  	nle: nle,
  	nleftarrow: nleftarrow,
  	nLeftarrow: nLeftarrow,
  	nleftrightarrow: nleftrightarrow,
  	nLeftrightarrow: nLeftrightarrow,
  	nleq: nleq,
  	nleqq: nleqq,
  	nleqslant: nleqslant,
  	nles: nles,
  	nless: nless,
  	nLl: nLl,
  	nlsim: nlsim,
  	nLt: nLt,
  	nlt: nlt,
  	nltri: nltri,
  	nltrie: nltrie,
  	nLtv: nLtv,
  	nmid: nmid,
  	NoBreak: NoBreak,
  	NonBreakingSpace: NonBreakingSpace,
  	nopf: nopf,
  	Nopf: Nopf,
  	Not: Not,
  	not: not,
  	NotCongruent: NotCongruent,
  	NotCupCap: NotCupCap,
  	NotDoubleVerticalBar: NotDoubleVerticalBar,
  	NotElement: NotElement,
  	NotEqual: NotEqual,
  	NotEqualTilde: NotEqualTilde,
  	NotExists: NotExists,
  	NotGreater: NotGreater,
  	NotGreaterEqual: NotGreaterEqual,
  	NotGreaterFullEqual: NotGreaterFullEqual,
  	NotGreaterGreater: NotGreaterGreater,
  	NotGreaterLess: NotGreaterLess,
  	NotGreaterSlantEqual: NotGreaterSlantEqual,
  	NotGreaterTilde: NotGreaterTilde,
  	NotHumpDownHump: NotHumpDownHump,
  	NotHumpEqual: NotHumpEqual,
  	notin: notin,
  	notindot: notindot,
  	notinE: notinE,
  	notinva: notinva,
  	notinvb: notinvb,
  	notinvc: notinvc,
  	NotLeftTriangleBar: NotLeftTriangleBar,
  	NotLeftTriangle: NotLeftTriangle,
  	NotLeftTriangleEqual: NotLeftTriangleEqual,
  	NotLess: NotLess,
  	NotLessEqual: NotLessEqual,
  	NotLessGreater: NotLessGreater,
  	NotLessLess: NotLessLess,
  	NotLessSlantEqual: NotLessSlantEqual,
  	NotLessTilde: NotLessTilde,
  	NotNestedGreaterGreater: NotNestedGreaterGreater,
  	NotNestedLessLess: NotNestedLessLess,
  	notni: notni,
  	notniva: notniva,
  	notnivb: notnivb,
  	notnivc: notnivc,
  	NotPrecedes: NotPrecedes,
  	NotPrecedesEqual: NotPrecedesEqual,
  	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
  	NotReverseElement: NotReverseElement,
  	NotRightTriangleBar: NotRightTriangleBar,
  	NotRightTriangle: NotRightTriangle,
  	NotRightTriangleEqual: NotRightTriangleEqual,
  	NotSquareSubset: NotSquareSubset,
  	NotSquareSubsetEqual: NotSquareSubsetEqual,
  	NotSquareSuperset: NotSquareSuperset,
  	NotSquareSupersetEqual: NotSquareSupersetEqual,
  	NotSubset: NotSubset,
  	NotSubsetEqual: NotSubsetEqual,
  	NotSucceeds: NotSucceeds,
  	NotSucceedsEqual: NotSucceedsEqual,
  	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
  	NotSucceedsTilde: NotSucceedsTilde,
  	NotSuperset: NotSuperset,
  	NotSupersetEqual: NotSupersetEqual,
  	NotTilde: NotTilde,
  	NotTildeEqual: NotTildeEqual,
  	NotTildeFullEqual: NotTildeFullEqual,
  	NotTildeTilde: NotTildeTilde,
  	NotVerticalBar: NotVerticalBar,
  	nparallel: nparallel,
  	npar: npar,
  	nparsl: nparsl,
  	npart: npart,
  	npolint: npolint,
  	npr: npr,
  	nprcue: nprcue,
  	nprec: nprec,
  	npreceq: npreceq,
  	npre: npre,
  	nrarrc: nrarrc,
  	nrarr: nrarr,
  	nrArr: nrArr,
  	nrarrw: nrarrw,
  	nrightarrow: nrightarrow,
  	nRightarrow: nRightarrow,
  	nrtri: nrtri,
  	nrtrie: nrtrie,
  	nsc: nsc,
  	nsccue: nsccue,
  	nsce: nsce,
  	Nscr: Nscr,
  	nscr: nscr,
  	nshortmid: nshortmid,
  	nshortparallel: nshortparallel,
  	nsim: nsim,
  	nsime: nsime,
  	nsimeq: nsimeq,
  	nsmid: nsmid,
  	nspar: nspar,
  	nsqsube: nsqsube,
  	nsqsupe: nsqsupe,
  	nsub: nsub,
  	nsubE: nsubE,
  	nsube: nsube,
  	nsubset: nsubset,
  	nsubseteq: nsubseteq,
  	nsubseteqq: nsubseteqq,
  	nsucc: nsucc,
  	nsucceq: nsucceq,
  	nsup: nsup,
  	nsupE: nsupE,
  	nsupe: nsupe,
  	nsupset: nsupset,
  	nsupseteq: nsupseteq,
  	nsupseteqq: nsupseteqq,
  	ntgl: ntgl,
  	Ntilde: Ntilde,
  	ntilde: ntilde,
  	ntlg: ntlg,
  	ntriangleleft: ntriangleleft,
  	ntrianglelefteq: ntrianglelefteq,
  	ntriangleright: ntriangleright,
  	ntrianglerighteq: ntrianglerighteq,
  	Nu: Nu,
  	nu: nu,
  	num: num,
  	numero: numero,
  	numsp: numsp,
  	nvap: nvap,
  	nvdash: nvdash,
  	nvDash: nvDash,
  	nVdash: nVdash,
  	nVDash: nVDash,
  	nvge: nvge,
  	nvgt: nvgt,
  	nvHarr: nvHarr,
  	nvinfin: nvinfin,
  	nvlArr: nvlArr,
  	nvle: nvle,
  	nvlt: nvlt,
  	nvltrie: nvltrie,
  	nvrArr: nvrArr,
  	nvrtrie: nvrtrie,
  	nvsim: nvsim,
  	nwarhk: nwarhk,
  	nwarr: nwarr,
  	nwArr: nwArr,
  	nwarrow: nwarrow,
  	nwnear: nwnear,
  	Oacute: Oacute,
  	oacute: oacute,
  	oast: oast,
  	Ocirc: Ocirc,
  	ocirc: ocirc,
  	ocir: ocir,
  	Ocy: Ocy,
  	ocy: ocy,
  	odash: odash,
  	Odblac: Odblac,
  	odblac: odblac,
  	odiv: odiv,
  	odot: odot,
  	odsold: odsold,
  	OElig: OElig,
  	oelig: oelig,
  	ofcir: ofcir,
  	Ofr: Ofr,
  	ofr: ofr,
  	ogon: ogon,
  	Ograve: Ograve,
  	ograve: ograve,
  	ogt: ogt,
  	ohbar: ohbar,
  	ohm: ohm,
  	oint: oint,
  	olarr: olarr,
  	olcir: olcir,
  	olcross: olcross,
  	oline: oline,
  	olt: olt,
  	Omacr: Omacr,
  	omacr: omacr,
  	Omega: Omega,
  	omega: omega,
  	Omicron: Omicron,
  	omicron: omicron,
  	omid: omid,
  	ominus: ominus,
  	Oopf: Oopf,
  	oopf: oopf,
  	opar: opar,
  	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
  	OpenCurlyQuote: OpenCurlyQuote,
  	operp: operp,
  	oplus: oplus,
  	orarr: orarr,
  	Or: Or,
  	or: or,
  	ord: ord,
  	order: order,
  	orderof: orderof,
  	ordf: ordf,
  	ordm: ordm,
  	origof: origof,
  	oror: oror,
  	orslope: orslope,
  	orv: orv,
  	oS: oS,
  	Oscr: Oscr,
  	oscr: oscr,
  	Oslash: Oslash,
  	oslash: oslash,
  	osol: osol,
  	Otilde: Otilde,
  	otilde: otilde,
  	otimesas: otimesas,
  	Otimes: Otimes,
  	otimes: otimes,
  	Ouml: Ouml,
  	ouml: ouml,
  	ovbar: ovbar,
  	OverBar: OverBar,
  	OverBrace: OverBrace,
  	OverBracket: OverBracket,
  	OverParenthesis: OverParenthesis,
  	para: para,
  	parallel: parallel,
  	par: par,
  	parsim: parsim,
  	parsl: parsl,
  	part: part,
  	PartialD: PartialD,
  	Pcy: Pcy,
  	pcy: pcy,
  	percnt: percnt,
  	period: period,
  	permil: permil,
  	perp: perp,
  	pertenk: pertenk,
  	Pfr: Pfr,
  	pfr: pfr,
  	Phi: Phi,
  	phi: phi,
  	phiv: phiv,
  	phmmat: phmmat,
  	phone: phone,
  	Pi: Pi,
  	pi: pi,
  	pitchfork: pitchfork,
  	piv: piv,
  	planck: planck,
  	planckh: planckh,
  	plankv: plankv,
  	plusacir: plusacir,
  	plusb: plusb,
  	pluscir: pluscir,
  	plus: plus,
  	plusdo: plusdo,
  	plusdu: plusdu,
  	pluse: pluse,
  	PlusMinus: PlusMinus,
  	plusmn: plusmn,
  	plussim: plussim,
  	plustwo: plustwo,
  	pm: pm,
  	Poincareplane: Poincareplane,
  	pointint: pointint,
  	popf: popf,
  	Popf: Popf,
  	pound: pound,
  	prap: prap,
  	Pr: Pr,
  	pr: pr,
  	prcue: prcue,
  	precapprox: precapprox,
  	prec: prec,
  	preccurlyeq: preccurlyeq,
  	Precedes: Precedes,
  	PrecedesEqual: PrecedesEqual,
  	PrecedesSlantEqual: PrecedesSlantEqual,
  	PrecedesTilde: PrecedesTilde,
  	preceq: preceq,
  	precnapprox: precnapprox,
  	precneqq: precneqq,
  	precnsim: precnsim,
  	pre: pre,
  	prE: prE,
  	precsim: precsim,
  	prime: prime,
  	Prime: Prime,
  	primes: primes,
  	prnap: prnap,
  	prnE: prnE,
  	prnsim: prnsim,
  	prod: prod,
  	Product: Product,
  	profalar: profalar,
  	profline: profline,
  	profsurf: profsurf,
  	prop: prop,
  	Proportional: Proportional,
  	Proportion: Proportion,
  	propto: propto,
  	prsim: prsim,
  	prurel: prurel,
  	Pscr: Pscr,
  	pscr: pscr,
  	Psi: Psi,
  	psi: psi,
  	puncsp: puncsp,
  	Qfr: Qfr,
  	qfr: qfr,
  	qint: qint,
  	qopf: qopf,
  	Qopf: Qopf,
  	qprime: qprime,
  	Qscr: Qscr,
  	qscr: qscr,
  	quaternions: quaternions,
  	quatint: quatint,
  	quest: quest,
  	questeq: questeq,
  	quot: quot,
  	QUOT: QUOT,
  	rAarr: rAarr,
  	race: race,
  	Racute: Racute,
  	racute: racute,
  	radic: radic,
  	raemptyv: raemptyv,
  	rang: rang,
  	Rang: Rang,
  	rangd: rangd,
  	range: range,
  	rangle: rangle,
  	raquo: raquo,
  	rarrap: rarrap,
  	rarrb: rarrb,
  	rarrbfs: rarrbfs,
  	rarrc: rarrc,
  	rarr: rarr,
  	Rarr: Rarr,
  	rArr: rArr,
  	rarrfs: rarrfs,
  	rarrhk: rarrhk,
  	rarrlp: rarrlp,
  	rarrpl: rarrpl,
  	rarrsim: rarrsim,
  	Rarrtl: Rarrtl,
  	rarrtl: rarrtl,
  	rarrw: rarrw,
  	ratail: ratail,
  	rAtail: rAtail,
  	ratio: ratio,
  	rationals: rationals,
  	rbarr: rbarr,
  	rBarr: rBarr,
  	RBarr: RBarr,
  	rbbrk: rbbrk,
  	rbrace: rbrace,
  	rbrack: rbrack,
  	rbrke: rbrke,
  	rbrksld: rbrksld,
  	rbrkslu: rbrkslu,
  	Rcaron: Rcaron,
  	rcaron: rcaron,
  	Rcedil: Rcedil,
  	rcedil: rcedil,
  	rceil: rceil,
  	rcub: rcub,
  	Rcy: Rcy,
  	rcy: rcy,
  	rdca: rdca,
  	rdldhar: rdldhar,
  	rdquo: rdquo,
  	rdquor: rdquor,
  	rdsh: rdsh,
  	real: real,
  	realine: realine,
  	realpart: realpart,
  	reals: reals,
  	Re: Re,
  	rect: rect,
  	reg: reg,
  	REG: REG,
  	ReverseElement: ReverseElement,
  	ReverseEquilibrium: ReverseEquilibrium,
  	ReverseUpEquilibrium: ReverseUpEquilibrium,
  	rfisht: rfisht,
  	rfloor: rfloor,
  	rfr: rfr,
  	Rfr: Rfr,
  	rHar: rHar,
  	rhard: rhard,
  	rharu: rharu,
  	rharul: rharul,
  	Rho: Rho,
  	rho: rho,
  	rhov: rhov,
  	RightAngleBracket: RightAngleBracket,
  	RightArrowBar: RightArrowBar,
  	rightarrow: rightarrow,
  	RightArrow: RightArrow,
  	Rightarrow: Rightarrow,
  	RightArrowLeftArrow: RightArrowLeftArrow,
  	rightarrowtail: rightarrowtail,
  	RightCeiling: RightCeiling,
  	RightDoubleBracket: RightDoubleBracket,
  	RightDownTeeVector: RightDownTeeVector,
  	RightDownVectorBar: RightDownVectorBar,
  	RightDownVector: RightDownVector,
  	RightFloor: RightFloor,
  	rightharpoondown: rightharpoondown,
  	rightharpoonup: rightharpoonup,
  	rightleftarrows: rightleftarrows,
  	rightleftharpoons: rightleftharpoons,
  	rightrightarrows: rightrightarrows,
  	rightsquigarrow: rightsquigarrow,
  	RightTeeArrow: RightTeeArrow,
  	RightTee: RightTee,
  	RightTeeVector: RightTeeVector,
  	rightthreetimes: rightthreetimes,
  	RightTriangleBar: RightTriangleBar,
  	RightTriangle: RightTriangle,
  	RightTriangleEqual: RightTriangleEqual,
  	RightUpDownVector: RightUpDownVector,
  	RightUpTeeVector: RightUpTeeVector,
  	RightUpVectorBar: RightUpVectorBar,
  	RightUpVector: RightUpVector,
  	RightVectorBar: RightVectorBar,
  	RightVector: RightVector,
  	ring: ring,
  	risingdotseq: risingdotseq,
  	rlarr: rlarr,
  	rlhar: rlhar,
  	rlm: rlm,
  	rmoustache: rmoustache,
  	rmoust: rmoust,
  	rnmid: rnmid,
  	roang: roang,
  	roarr: roarr,
  	robrk: robrk,
  	ropar: ropar,
  	ropf: ropf,
  	Ropf: Ropf,
  	roplus: roplus,
  	rotimes: rotimes,
  	RoundImplies: RoundImplies,
  	rpar: rpar,
  	rpargt: rpargt,
  	rppolint: rppolint,
  	rrarr: rrarr,
  	Rrightarrow: Rrightarrow,
  	rsaquo: rsaquo,
  	rscr: rscr,
  	Rscr: Rscr,
  	rsh: rsh,
  	Rsh: Rsh,
  	rsqb: rsqb,
  	rsquo: rsquo,
  	rsquor: rsquor,
  	rthree: rthree,
  	rtimes: rtimes,
  	rtri: rtri,
  	rtrie: rtrie,
  	rtrif: rtrif,
  	rtriltri: rtriltri,
  	RuleDelayed: RuleDelayed,
  	ruluhar: ruluhar,
  	rx: rx,
  	Sacute: Sacute,
  	sacute: sacute,
  	sbquo: sbquo,
  	scap: scap,
  	Scaron: Scaron,
  	scaron: scaron,
  	Sc: Sc,
  	sc: sc,
  	sccue: sccue,
  	sce: sce,
  	scE: scE,
  	Scedil: Scedil,
  	scedil: scedil,
  	Scirc: Scirc,
  	scirc: scirc,
  	scnap: scnap,
  	scnE: scnE,
  	scnsim: scnsim,
  	scpolint: scpolint,
  	scsim: scsim,
  	Scy: Scy,
  	scy: scy,
  	sdotb: sdotb,
  	sdot: sdot,
  	sdote: sdote,
  	searhk: searhk,
  	searr: searr,
  	seArr: seArr,
  	searrow: searrow,
  	sect: sect,
  	semi: semi,
  	seswar: seswar,
  	setminus: setminus,
  	setmn: setmn,
  	sext: sext,
  	Sfr: Sfr,
  	sfr: sfr,
  	sfrown: sfrown,
  	sharp: sharp,
  	SHCHcy: SHCHcy,
  	shchcy: shchcy,
  	SHcy: SHcy,
  	shcy: shcy,
  	ShortDownArrow: ShortDownArrow,
  	ShortLeftArrow: ShortLeftArrow,
  	shortmid: shortmid,
  	shortparallel: shortparallel,
  	ShortRightArrow: ShortRightArrow,
  	ShortUpArrow: ShortUpArrow,
  	shy: shy,
  	Sigma: Sigma,
  	sigma: sigma,
  	sigmaf: sigmaf,
  	sigmav: sigmav,
  	sim: sim,
  	simdot: simdot,
  	sime: sime,
  	simeq: simeq,
  	simg: simg,
  	simgE: simgE,
  	siml: siml,
  	simlE: simlE,
  	simne: simne,
  	simplus: simplus,
  	simrarr: simrarr,
  	slarr: slarr,
  	SmallCircle: SmallCircle,
  	smallsetminus: smallsetminus,
  	smashp: smashp,
  	smeparsl: smeparsl,
  	smid: smid,
  	smile: smile,
  	smt: smt,
  	smte: smte,
  	smtes: smtes,
  	SOFTcy: SOFTcy,
  	softcy: softcy,
  	solbar: solbar,
  	solb: solb,
  	sol: sol,
  	Sopf: Sopf,
  	sopf: sopf,
  	spades: spades,
  	spadesuit: spadesuit,
  	spar: spar,
  	sqcap: sqcap,
  	sqcaps: sqcaps,
  	sqcup: sqcup,
  	sqcups: sqcups,
  	Sqrt: Sqrt,
  	sqsub: sqsub,
  	sqsube: sqsube,
  	sqsubset: sqsubset,
  	sqsubseteq: sqsubseteq,
  	sqsup: sqsup,
  	sqsupe: sqsupe,
  	sqsupset: sqsupset,
  	sqsupseteq: sqsupseteq,
  	square: square,
  	Square: Square,
  	SquareIntersection: SquareIntersection,
  	SquareSubset: SquareSubset,
  	SquareSubsetEqual: SquareSubsetEqual,
  	SquareSuperset: SquareSuperset,
  	SquareSupersetEqual: SquareSupersetEqual,
  	SquareUnion: SquareUnion,
  	squarf: squarf,
  	squ: squ,
  	squf: squf,
  	srarr: srarr,
  	Sscr: Sscr,
  	sscr: sscr,
  	ssetmn: ssetmn,
  	ssmile: ssmile,
  	sstarf: sstarf,
  	Star: Star,
  	star: star,
  	starf: starf,
  	straightepsilon: straightepsilon,
  	straightphi: straightphi,
  	strns: strns,
  	sub: sub,
  	Sub: Sub,
  	subdot: subdot,
  	subE: subE,
  	sube: sube,
  	subedot: subedot,
  	submult: submult,
  	subnE: subnE,
  	subne: subne,
  	subplus: subplus,
  	subrarr: subrarr,
  	subset: subset,
  	Subset: Subset,
  	subseteq: subseteq,
  	subseteqq: subseteqq,
  	SubsetEqual: SubsetEqual,
  	subsetneq: subsetneq,
  	subsetneqq: subsetneqq,
  	subsim: subsim,
  	subsub: subsub,
  	subsup: subsup,
  	succapprox: succapprox,
  	succ: succ,
  	succcurlyeq: succcurlyeq,
  	Succeeds: Succeeds,
  	SucceedsEqual: SucceedsEqual,
  	SucceedsSlantEqual: SucceedsSlantEqual,
  	SucceedsTilde: SucceedsTilde,
  	succeq: succeq,
  	succnapprox: succnapprox,
  	succneqq: succneqq,
  	succnsim: succnsim,
  	succsim: succsim,
  	SuchThat: SuchThat,
  	sum: sum,
  	Sum: Sum,
  	sung: sung,
  	sup1: sup1,
  	sup2: sup2,
  	sup3: sup3,
  	sup: sup,
  	Sup: Sup,
  	supdot: supdot,
  	supdsub: supdsub,
  	supE: supE,
  	supe: supe,
  	supedot: supedot,
  	Superset: Superset,
  	SupersetEqual: SupersetEqual,
  	suphsol: suphsol,
  	suphsub: suphsub,
  	suplarr: suplarr,
  	supmult: supmult,
  	supnE: supnE,
  	supne: supne,
  	supplus: supplus,
  	supset: supset,
  	Supset: Supset,
  	supseteq: supseteq,
  	supseteqq: supseteqq,
  	supsetneq: supsetneq,
  	supsetneqq: supsetneqq,
  	supsim: supsim,
  	supsub: supsub,
  	supsup: supsup,
  	swarhk: swarhk,
  	swarr: swarr,
  	swArr: swArr,
  	swarrow: swarrow,
  	swnwar: swnwar,
  	szlig: szlig,
  	Tab: Tab,
  	target: target,
  	Tau: Tau,
  	tau: tau,
  	tbrk: tbrk,
  	Tcaron: Tcaron,
  	tcaron: tcaron,
  	Tcedil: Tcedil,
  	tcedil: tcedil,
  	Tcy: Tcy,
  	tcy: tcy,
  	tdot: tdot,
  	telrec: telrec,
  	Tfr: Tfr,
  	tfr: tfr,
  	there4: there4,
  	therefore: therefore,
  	Therefore: Therefore,
  	Theta: Theta,
  	theta: theta,
  	thetasym: thetasym,
  	thetav: thetav,
  	thickapprox: thickapprox,
  	thicksim: thicksim,
  	ThickSpace: ThickSpace,
  	ThinSpace: ThinSpace,
  	thinsp: thinsp,
  	thkap: thkap,
  	thksim: thksim,
  	THORN: THORN,
  	thorn: thorn,
  	tilde: tilde,
  	Tilde: Tilde,
  	TildeEqual: TildeEqual,
  	TildeFullEqual: TildeFullEqual,
  	TildeTilde: TildeTilde,
  	timesbar: timesbar,
  	timesb: timesb,
  	times: times,
  	timesd: timesd,
  	tint: tint,
  	toea: toea,
  	topbot: topbot,
  	topcir: topcir,
  	top: top,
  	Topf: Topf,
  	topf: topf,
  	topfork: topfork,
  	tosa: tosa,
  	tprime: tprime,
  	trade: trade,
  	TRADE: TRADE,
  	triangle: triangle,
  	triangledown: triangledown,
  	triangleleft: triangleleft,
  	trianglelefteq: trianglelefteq,
  	triangleq: triangleq,
  	triangleright: triangleright,
  	trianglerighteq: trianglerighteq,
  	tridot: tridot,
  	trie: trie,
  	triminus: triminus,
  	TripleDot: TripleDot,
  	triplus: triplus,
  	trisb: trisb,
  	tritime: tritime,
  	trpezium: trpezium,
  	Tscr: Tscr,
  	tscr: tscr,
  	TScy: TScy,
  	tscy: tscy,
  	TSHcy: TSHcy,
  	tshcy: tshcy,
  	Tstrok: Tstrok,
  	tstrok: tstrok,
  	twixt: twixt,
  	twoheadleftarrow: twoheadleftarrow,
  	twoheadrightarrow: twoheadrightarrow,
  	Uacute: Uacute,
  	uacute: uacute,
  	uarr: uarr,
  	Uarr: Uarr,
  	uArr: uArr,
  	Uarrocir: Uarrocir,
  	Ubrcy: Ubrcy,
  	ubrcy: ubrcy,
  	Ubreve: Ubreve,
  	ubreve: ubreve,
  	Ucirc: Ucirc,
  	ucirc: ucirc,
  	Ucy: Ucy,
  	ucy: ucy,
  	udarr: udarr,
  	Udblac: Udblac,
  	udblac: udblac,
  	udhar: udhar,
  	ufisht: ufisht,
  	Ufr: Ufr,
  	ufr: ufr,
  	Ugrave: Ugrave,
  	ugrave: ugrave,
  	uHar: uHar,
  	uharl: uharl,
  	uharr: uharr,
  	uhblk: uhblk,
  	ulcorn: ulcorn,
  	ulcorner: ulcorner,
  	ulcrop: ulcrop,
  	ultri: ultri,
  	Umacr: Umacr,
  	umacr: umacr,
  	uml: uml,
  	UnderBar: UnderBar,
  	UnderBrace: UnderBrace,
  	UnderBracket: UnderBracket,
  	UnderParenthesis: UnderParenthesis,
  	Union: Union,
  	UnionPlus: UnionPlus,
  	Uogon: Uogon,
  	uogon: uogon,
  	Uopf: Uopf,
  	uopf: uopf,
  	UpArrowBar: UpArrowBar,
  	uparrow: uparrow,
  	UpArrow: UpArrow,
  	Uparrow: Uparrow,
  	UpArrowDownArrow: UpArrowDownArrow,
  	updownarrow: updownarrow,
  	UpDownArrow: UpDownArrow,
  	Updownarrow: Updownarrow,
  	UpEquilibrium: UpEquilibrium,
  	upharpoonleft: upharpoonleft,
  	upharpoonright: upharpoonright,
  	uplus: uplus,
  	UpperLeftArrow: UpperLeftArrow,
  	UpperRightArrow: UpperRightArrow,
  	upsi: upsi,
  	Upsi: Upsi,
  	upsih: upsih,
  	Upsilon: Upsilon,
  	upsilon: upsilon,
  	UpTeeArrow: UpTeeArrow,
  	UpTee: UpTee,
  	upuparrows: upuparrows,
  	urcorn: urcorn,
  	urcorner: urcorner,
  	urcrop: urcrop,
  	Uring: Uring,
  	uring: uring,
  	urtri: urtri,
  	Uscr: Uscr,
  	uscr: uscr,
  	utdot: utdot,
  	Utilde: Utilde,
  	utilde: utilde,
  	utri: utri,
  	utrif: utrif,
  	uuarr: uuarr,
  	Uuml: Uuml,
  	uuml: uuml,
  	uwangle: uwangle,
  	vangrt: vangrt,
  	varepsilon: varepsilon,
  	varkappa: varkappa,
  	varnothing: varnothing,
  	varphi: varphi,
  	varpi: varpi,
  	varpropto: varpropto,
  	varr: varr,
  	vArr: vArr,
  	varrho: varrho,
  	varsigma: varsigma,
  	varsubsetneq: varsubsetneq,
  	varsubsetneqq: varsubsetneqq,
  	varsupsetneq: varsupsetneq,
  	varsupsetneqq: varsupsetneqq,
  	vartheta: vartheta,
  	vartriangleleft: vartriangleleft,
  	vartriangleright: vartriangleright,
  	vBar: vBar,
  	Vbar: Vbar,
  	vBarv: vBarv,
  	Vcy: Vcy,
  	vcy: vcy,
  	vdash: vdash,
  	vDash: vDash,
  	Vdash: Vdash,
  	VDash: VDash,
  	Vdashl: Vdashl,
  	veebar: veebar,
  	vee: vee,
  	Vee: Vee,
  	veeeq: veeeq,
  	vellip: vellip,
  	verbar: verbar,
  	Verbar: Verbar,
  	vert: vert,
  	Vert: Vert,
  	VerticalBar: VerticalBar,
  	VerticalLine: VerticalLine,
  	VerticalSeparator: VerticalSeparator,
  	VerticalTilde: VerticalTilde,
  	VeryThinSpace: VeryThinSpace,
  	Vfr: Vfr,
  	vfr: vfr,
  	vltri: vltri,
  	vnsub: vnsub,
  	vnsup: vnsup,
  	Vopf: Vopf,
  	vopf: vopf,
  	vprop: vprop,
  	vrtri: vrtri,
  	Vscr: Vscr,
  	vscr: vscr,
  	vsubnE: vsubnE,
  	vsubne: vsubne,
  	vsupnE: vsupnE,
  	vsupne: vsupne,
  	Vvdash: Vvdash,
  	vzigzag: vzigzag,
  	Wcirc: Wcirc,
  	wcirc: wcirc,
  	wedbar: wedbar,
  	wedge: wedge,
  	Wedge: Wedge,
  	wedgeq: wedgeq,
  	weierp: weierp,
  	Wfr: Wfr,
  	wfr: wfr,
  	Wopf: Wopf,
  	wopf: wopf,
  	wp: wp,
  	wr: wr,
  	wreath: wreath,
  	Wscr: Wscr,
  	wscr: wscr,
  	xcap: xcap,
  	xcirc: xcirc,
  	xcup: xcup,
  	xdtri: xdtri,
  	Xfr: Xfr,
  	xfr: xfr,
  	xharr: xharr,
  	xhArr: xhArr,
  	Xi: Xi,
  	xi: xi,
  	xlarr: xlarr,
  	xlArr: xlArr,
  	xmap: xmap,
  	xnis: xnis,
  	xodot: xodot,
  	Xopf: Xopf,
  	xopf: xopf,
  	xoplus: xoplus,
  	xotime: xotime,
  	xrarr: xrarr,
  	xrArr: xrArr,
  	Xscr: Xscr,
  	xscr: xscr,
  	xsqcup: xsqcup,
  	xuplus: xuplus,
  	xutri: xutri,
  	xvee: xvee,
  	xwedge: xwedge,
  	Yacute: Yacute,
  	yacute: yacute,
  	YAcy: YAcy,
  	yacy: yacy,
  	Ycirc: Ycirc,
  	ycirc: ycirc,
  	Ycy: Ycy,
  	ycy: ycy,
  	yen: yen,
  	Yfr: Yfr,
  	yfr: yfr,
  	YIcy: YIcy,
  	yicy: yicy,
  	Yopf: Yopf,
  	yopf: yopf,
  	Yscr: Yscr,
  	yscr: yscr,
  	YUcy: YUcy,
  	yucy: yucy,
  	yuml: yuml,
  	Yuml: Yuml,
  	Zacute: Zacute,
  	zacute: zacute,
  	Zcaron: Zcaron,
  	zcaron: zcaron,
  	Zcy: Zcy,
  	zcy: zcy,
  	Zdot: Zdot,
  	zdot: zdot,
  	zeetrf: zeetrf,
  	ZeroWidthSpace: ZeroWidthSpace,
  	Zeta: Zeta,
  	zeta: zeta,
  	zfr: zfr,
  	Zfr: Zfr,
  	ZHcy: ZHcy,
  	zhcy: zhcy,
  	zigrarr: zigrarr,
  	zopf: zopf,
  	Zopf: Zopf,
  	Zscr: Zscr,
  	zscr: zscr,
  	zwj: zwj,
  	zwnj: zwnj
  };

  /*eslint quotes:0*/

  var entities$1 = require$$0$4;

  var entities = entities$1;

  var has$1 = require$$0$5.has;

  var isValidEntityCode = require$$0$5.isValidEntityCode;

  var fromCodePoint = require$$0$5.fromCodePoint;

  var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;

  var entity = function entity(state, silent) {
    var ch,
        code,
        match,
        pos = state.pos,
        max = state.posMax;

    if (state.src.charCodeAt(pos) !== 0x26
    /* & */
    ) {
        return false;
      }

    if (pos + 1 < max) {
      ch = state.src.charCodeAt(pos + 1);

      if (ch === 0x23
      /* # */
      ) {
          match = state.src.slice(pos).match(DIGITAL_RE);

          if (match) {
            if (!silent) {
              code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
            }

            state.pos += match[0].length;
            return true;
          }
        } else {
        match = state.src.slice(pos).match(NAMED_RE);

        if (match) {
          if (has$1(entities, match[1])) {
            if (!silent) {
              state.pending += entities[match[1]];
            }

            state.pos += match[0].length;
            return true;
          }
        }
      }
    }

    if (!silent) {
      state.pending += '&';
    }

    state.pos++;
    return true;
  };

  function processDelimiters(state, delimiters) {
    var closerIdx,
        openerIdx,
        closer,
        opener,
        minOpenerIdx,
        newMinOpenerIdx,
        isOddMatch,
        lastJump,
        openersBottom = {},
        max = delimiters.length;

    for (closerIdx = 0; closerIdx < max; closerIdx++) {
      closer = delimiters[closerIdx]; // Length is only used for emphasis-specific "rule of 3",
      // if it's not defined (in strikethrough or 3rd party plugins),
      // we can default it to 0 to disable those checks.
      //

      closer.length = closer.length || 0;
      if (!closer.close) continue; // Previously calculated lower bounds (previous fails)
      // for each marker and each delimiter length modulo 3.

      if (!openersBottom.hasOwnProperty(closer.marker)) {
        openersBottom[closer.marker] = [-1, -1, -1];
      }

      minOpenerIdx = openersBottom[closer.marker][closer.length % 3];
      newMinOpenerIdx = -1;
      openerIdx = closerIdx - closer.jump - 1;

      for (; openerIdx > minOpenerIdx; openerIdx -= opener.jump + 1) {
        opener = delimiters[openerIdx];
        if (opener.marker !== closer.marker) continue;
        if (newMinOpenerIdx === -1) newMinOpenerIdx = openerIdx;

        if (opener.open && opener.end < 0 && opener.level === closer.level) {
          isOddMatch = false; // from spec:
          //
          // If one of the delimiters can both open and close emphasis, then the
          // sum of the lengths of the delimiter runs containing the opening and
          // closing delimiters must not be a multiple of 3 unless both lengths
          // are multiples of 3.
          //

          if (opener.close || closer.open) {
            if ((opener.length + closer.length) % 3 === 0) {
              if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                isOddMatch = true;
              }
            }
          }

          if (!isOddMatch) {
            // If previous delimiter cannot be an opener, we can safely skip
            // the entire sequence in future checks. This is required to make
            // sure algorithm has linear complexity (see *_*_*_*_*_... case).
            //
            lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? delimiters[openerIdx - 1].jump + 1 : 0;
            closer.jump = closerIdx - openerIdx + lastJump;
            closer.open = false;
            opener.end = closerIdx;
            opener.jump = lastJump;
            opener.close = false;
            newMinOpenerIdx = -1;
            break;
          }
        }
      }

      if (newMinOpenerIdx !== -1) {
        // If match for this delimiter run failed, we want to set lower bound for
        // future lookups. This is required to make sure algorithm has linear
        // complexity.
        //
        // See details here:
        // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
        //
        openersBottom[closer.marker][(closer.length || 0) % 3] = newMinOpenerIdx;
      }
    }
  }

  var balance_pairs = function link_pairs(state) {
    var curr,
        tokens_meta = state.tokens_meta,
        max = state.tokens_meta.length;
    processDelimiters(state, state.delimiters);

    for (curr = 0; curr < max; curr++) {
      if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
        processDelimiters(state, tokens_meta[curr].delimiters);
      }
    }
  };

  var text_collapse = function text_collapse(state) {
    var curr,
        last,
        level = 0,
        tokens = state.tokens,
        max = state.tokens.length;

    for (curr = last = 0; curr < max; curr++) {
      // re-calculate levels after emphasis/strikethrough turns some text nodes
      // into opening/closing tags
      if (tokens[curr].nesting < 0) level--; // closing tag

      tokens[curr].level = level;
      if (tokens[curr].nesting > 0) level++; // opening tag

      if (tokens[curr].type === 'text' && curr + 1 < max && tokens[curr + 1].type === 'text') {
        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }

        last++;
      }
    }

    if (curr !== last) {
      tokens.length = last;
    }
  };

  var Token = token;

  var isWhiteSpace = require$$0$5.isWhiteSpace;

  var isPunctChar = require$$0$5.isPunctChar;

  var isMdAsciiPunct = require$$0$5.isMdAsciiPunct;

  function StateInline(src, md, env, outTokens) {
    this.src = src;
    this.env = env;
    this.md = md;
    this.tokens = outTokens;
    this.tokens_meta = Array(outTokens.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = '';
    this.pendingLevel = 0; // Stores { start: end } pairs. Useful for backtrack
    // optimization of pairs parse (emphasis, strikes).

    this.cache = {}; // List of emphasis-like delimiters for current tag

    this.delimiters = []; // Stack of delimiter lists for upper level tags

    this._prev_delimiters = [];
  } // Flush pending text
  //


  StateInline.prototype.pushPending = function () {
    var token = new Token('text', '', 0);
    token.content = this.pending;
    token.level = this.pendingLevel;
    this.tokens.push(token);
    this.pending = '';
    return token;
  }; // Push new token to "stream".
  // If pending text exists - flush it as text token
  //


  StateInline.prototype.push = function (type, tag, nesting) {
    if (this.pending) {
      this.pushPending();
    }

    var token = new Token(type, tag, nesting);
    var token_meta = null;

    if (nesting < 0) {
      // closing tag
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }

    token.level = this.level;

    if (nesting > 0) {
      // opening tag
      this.level++;

      this._prev_delimiters.push(this.delimiters);

      this.delimiters = [];
      token_meta = {
        delimiters: this.delimiters
      };
    }

    this.pendingLevel = this.level;
    this.tokens.push(token);
    this.tokens_meta.push(token_meta);
    return token;
  }; // Scan a sequence of emphasis-like markers, and determine whether
  // it can start an emphasis sequence or end an emphasis sequence.
  //
  //  - start - position to scan from (it should point at a valid marker);
  //  - canSplitWord - determine if these markers can be found inside a word
  //


  StateInline.prototype.scanDelims = function (start, canSplitWord) {
    var pos = start,
        lastChar,
        nextChar,
        count,
        can_open,
        can_close,
        isLastWhiteSpace,
        isLastPunctChar,
        isNextWhiteSpace,
        isNextPunctChar,
        left_flanking = true,
        right_flanking = true,
        max = this.posMax,
        marker = this.src.charCodeAt(start); // treat beginning of the line as a whitespace

    lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

    while (pos < max && this.src.charCodeAt(pos) === marker) {
      pos++;
    }

    count = pos - start; // treat end of the line as a whitespace

    nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;
    isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
    isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
    isLastWhiteSpace = isWhiteSpace(lastChar);
    isNextWhiteSpace = isWhiteSpace(nextChar);

    if (isNextWhiteSpace) {
      left_flanking = false;
    } else if (isNextPunctChar) {
      if (!(isLastWhiteSpace || isLastPunctChar)) {
        left_flanking = false;
      }
    }

    if (isLastWhiteSpace) {
      right_flanking = false;
    } else if (isLastPunctChar) {
      if (!(isNextWhiteSpace || isNextPunctChar)) {
        right_flanking = false;
      }
    }

    if (!canSplitWord) {
      can_open = left_flanking && (!right_flanking || isLastPunctChar);
      can_close = right_flanking && (!left_flanking || isNextPunctChar);
    } else {
      can_open = left_flanking;
      can_close = right_flanking;
    }

    return {
      can_open: can_open,
      can_close: can_close,
      length: count
    };
  }; // re-export Token class to use in block rules


  StateInline.prototype.Token = Token;
  var state_inline = StateInline;

  /** internal
   * class ParserInline
   *
   * Tokenizes paragraph content.
   **/

  var Ruler = ruler; ////////////////////////////////////////////////////////////////////////////////
  // Parser rules


  var _rules = [['text', text], ['newline', newline], ['escape', _escape], ['backticks', backticks], ['strikethrough', strikethrough.tokenize], ['emphasis', emphasis.tokenize], ['link', link], ['image', image$1], ['autolink', autolink], ['html_inline', html_inline], ['entity', entity]];
  var _rules2 = [['balance_pairs', balance_pairs], ['strikethrough', strikethrough.postProcess], ['emphasis', emphasis.postProcess], ['text_collapse', text_collapse]];
  /**
   * new ParserInline()
   **/

  function ParserInline$1() {
    var i;
    /**
     * ParserInline#ruler -> Ruler
     *
     * [[Ruler]] instance. Keep configuration of inline rules.
     **/

    this.ruler = new Ruler();

    for (i = 0; i < _rules.length; i++) {
      this.ruler.push(_rules[i][0], _rules[i][1]);
    }
    /**
     * ParserInline#ruler2 -> Ruler
     *
     * [[Ruler]] instance. Second ruler used for post-processing
     * (e.g. in emphasis-like rules).
     **/


    this.ruler2 = new Ruler();

    for (i = 0; i < _rules2.length; i++) {
      this.ruler2.push(_rules2[i][0], _rules2[i][1]);
    }
  } // Skip single token by running all rules in validation mode;
  // returns `true` if any rule reported success
  //


  ParserInline$1.prototype.skipToken = function (state) {
    var ok,
        i,
        pos = state.pos,
        rules = this.ruler.getRules(''),
        len = rules.length,
        maxNesting = state.md.options.maxNesting,
        cache = state.cache;

    if (typeof cache[pos] !== 'undefined') {
      state.pos = cache[pos];
      return;
    }

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        // Increment state.level and decrement it later to limit recursion.
        // It's harmless to do here, because no tokens are created. But ideally,
        // we'd need a separate private state variable for this purpose.
        //
        state.level++;
        ok = rules[i](state, true);
        state.level--;

        if (ok) {
          break;
        }
      }
    } else {
      // Too much nesting, just skip until the end of the paragraph.
      //
      // NOTE: this will cause links to behave incorrectly in the following case,
      //       when an amount of `[` is exactly equal to `maxNesting + 1`:
      //
      //       [[[[[[[[[[[[[[[[[[[[[foo]()
      //
      // TODO: remove this workaround when CM standard will allow nested links
      //       (we can replace it by preventing links from being parsed in
      //       validation mode)
      //
      state.pos = state.posMax;
    }

    if (!ok) {
      state.pos++;
    }

    cache[pos] = state.pos;
  }; // Generate tokens for input range
  //


  ParserInline$1.prototype.tokenize = function (state) {
    var ok,
        i,
        rules = this.ruler.getRules(''),
        len = rules.length,
        end = state.posMax,
        maxNesting = state.md.options.maxNesting;

    while (state.pos < end) {
      // Try all possible rules.
      // On success, rule should:
      //
      // - update `state.pos`
      // - update `state.tokens`
      // - return true
      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          ok = rules[i](state, false);

          if (ok) {
            break;
          }
        }
      }

      if (ok) {
        if (state.pos >= end) {
          break;
        }

        continue;
      }

      state.pending += state.src[state.pos++];
    }

    if (state.pending) {
      state.pushPending();
    }
  };
  /**
   * ParserInline.parse(str, md, env, outTokens)
   *
   * Process input string and push inline tokens into `outTokens`
   **/


  ParserInline$1.prototype.parse = function (str, md, env, outTokens) {
    var i, rules, len;
    var state = new this.State(str, md, env, outTokens);
    this.tokenize(state);
    rules = this.ruler2.getRules('');
    len = rules.length;

    for (i = 0; i < len; i++) {
      rules[i](state);
    }
  };

  ParserInline$1.prototype.State = state_inline;
  var parser_inline = ParserInline$1;

  var regex$3 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

  var regex$2 = /[\0-\x1F\x7F-\x9F]/;

  var regex$1 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

  var regex = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

  var re = function (opts) {
    var re = {}; // Use direct extract instead of `regenerate` to reduse browserified size

    re.src_Any = regex$3.source;
    re.src_Cc = regex$2.source;
    re.src_Z = regex$1.source;
    re.src_P = regex.source; // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)

    re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join('|'); // \p{\Z\Cc} (white spaces + control)

    re.src_ZCc = [re.src_Z, re.src_Cc].join('|'); // Experimental. List of chars, completely prohibited in links
    // because can separate it from other part of text

    var text_separators = "[><\uFF5C]"; // All possible word characters (everything without punctuation, spaces & controls)
    // Defined via punctuation & spaces to save space
    // Should be something like \p{\L\N\S\M} (\w but without `_`)

    re.src_pseudo_letter = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')'; // The same as abothe but without [0-9]
    // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
    ////////////////////////////////////////////////////////////////////////////////

    re.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'; // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.

    re.src_auth = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';
    re.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
    re.src_host_terminator = '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';
    re.src_path = '(?:' + '[/?#]' + '(?:' + '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' + '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' + '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' + '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + "\\'(?=" + re.src_pseudo_letter + '|[-]).|' + // allow `I'm_king` if no pair found
    '\\.{2,4}[a-zA-Z0-9%/]|' + // github has ... in commit range links,
    // google has .... in links (issue #66)
    // Restrict to
    // - english
    // - percent-encoded
    // - parts of file path
    // until more examples found.
    '\\.(?!' + re.src_ZCc + '|[.]).|' + (opts && opts['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
    : '\\-+|') + '\\,(?!' + re.src_ZCc + ').|' + // allow `,,,` in paths
    '\\!(?!' + re.src_ZCc + '|[!]).|' + '\\?(?!' + re.src_ZCc + '|[?]).' + ')+' + '|\\/' + ')?'; // Allow anything in markdown spec, forbid quote (") at the first position
    // because emails enclosed in quotes are far more common

    re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
    re.src_xn = 'xn--[a-z0-9\\-]{1,59}'; // More to read about domain names
    // http://serverfault.com/questions/638260/

    re.src_domain_root = // Allow letters & digits (http://test1)
    '(?:' + re.src_xn + '|' + re.src_pseudo_letter + '{1,63}' + ')';
    re.src_domain = '(?:' + re.src_xn + '|' + '(?:' + re.src_pseudo_letter + ')' + '|' + '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' + ')';
    re.src_host = '(?:' + // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
    '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain
    /*_root*/
    + ')' + ')';
    re.tpl_host_fuzzy = '(?:' + re.src_ip4 + '|' + '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' + ')';
    re.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';
    re.src_host_strict = re.src_host + re.src_host_terminator;
    re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
    re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
    re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
    re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator; ////////////////////////////////////////////////////////////////////////////////
    // Main rules
    // Rude test fuzzy links by host, for quick deny

    re.tpl_host_fuzzy_test = 'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';
    re.tpl_email_fuzzy = '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' + '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';
    re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + '))' + "((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ')';
    re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + '))' + "((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';
    return re;
  };

  // Helpers
  // Merge objects
  //

  function assign(obj
  /*from1, from2, from3, ...*/
  ) {
    var sources = Array.prototype.slice.call(arguments, 1);
    sources.forEach(function (source) {
      if (!source) {
        return;
      }

      Object.keys(source).forEach(function (key) {
        obj[key] = source[key];
      });
    });
    return obj;
  }

  function _class(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isString(obj) {
    return _class(obj) === '[object String]';
  }

  function isObject(obj) {
    return _class(obj) === '[object Object]';
  }

  function isRegExp(obj) {
    return _class(obj) === '[object RegExp]';
  }

  function isFunction$1(obj) {
    return _class(obj) === '[object Function]';
  }

  function escapeRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
  } ////////////////////////////////////////////////////////////////////////////////


  var defaultOptions = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };

  function isOptionsObj(obj) {
    return Object.keys(obj || {}).reduce(function (acc, k) {
      return acc || defaultOptions.hasOwnProperty(k);
    }, false);
  }

  var defaultSchemas = {
    'http:': {
      validate: function validate(text, pos, self) {
        var tail = text.slice(pos);

        if (!self.re.http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.http = new RegExp('^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
        }

        if (self.re.http.test(tail)) {
          return tail.match(self.re.http)[0].length;
        }

        return 0;
      }
    },
    'https:': 'http:',
    'ftp:': 'http:',
    '//': {
      validate: function validate(text, pos, self) {
        var tail = text.slice(pos);

        if (!self.re.no_http) {
          // compile lazily, because "host"-containing variables can change on tlds update.
          self.re.no_http = new RegExp('^' + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' + self.re.src_port + self.re.src_host_terminator + self.re.src_path, 'i');
        }

        if (self.re.no_http.test(tail)) {
          // should not be `://` & `///`, that protects from errors in protocol name
          if (pos >= 3 && text[pos - 3] === ':') {
            return 0;
          }

          if (pos >= 3 && text[pos - 3] === '/') {
            return 0;
          }

          return tail.match(self.re.no_http)[0].length;
        }

        return 0;
      }
    },
    'mailto:': {
      validate: function validate(text, pos, self) {
        var tail = text.slice(pos);

        if (!self.re.mailto) {
          self.re.mailto = new RegExp('^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i');
        }

        if (self.re.mailto.test(tail)) {
          return tail.match(self.re.mailto)[0].length;
        }

        return 0;
      }
    }
  };
  /*eslint-disable max-len*/
  // RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)

  var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]'; // DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead

  var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
  /*eslint-enable max-len*/
  ////////////////////////////////////////////////////////////////////////////////

  function resetScanCache(self) {
    self.__index__ = -1;
    self.__text_cache__ = '';
  }

  function createValidator(re) {
    return function (text, pos) {
      var tail = text.slice(pos);

      if (re.test(tail)) {
        return tail.match(re)[0].length;
      }

      return 0;
    };
  }

  function createNormalizer() {
    return function (match, self) {
      self.normalize(match);
    };
  } // Schemas compiler. Build regexps.
  //


  function compile(self) {
    // Load & clone RE patterns.
    var re$1 = self.re = re(self.__opts__); // Define dynamic patterns


    var tlds = self.__tlds__.slice();

    self.onCompile();

    if (!self.__tlds_replaced__) {
      tlds.push(tlds_2ch_src_re);
    }

    tlds.push(re$1.src_xn);
    re$1.src_tlds = tlds.join('|');

    function untpl(tpl) {
      return tpl.replace('%TLDS%', re$1.src_tlds);
    }

    re$1.email_fuzzy = RegExp(untpl(re$1.tpl_email_fuzzy), 'i');
    re$1.link_fuzzy = RegExp(untpl(re$1.tpl_link_fuzzy), 'i');
    re$1.link_no_ip_fuzzy = RegExp(untpl(re$1.tpl_link_no_ip_fuzzy), 'i');
    re$1.host_fuzzy_test = RegExp(untpl(re$1.tpl_host_fuzzy_test), 'i'); //
    // Compile each schema
    //

    var aliases = [];
    self.__compiled__ = {}; // Reset compiled data

    function schemaError(name, val) {
      throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
    }

    Object.keys(self.__schemas__).forEach(function (name) {
      var val = self.__schemas__[name]; // skip disabled methods

      if (val === null) {
        return;
      }

      var compiled = {
        validate: null,
        link: null
      };
      self.__compiled__[name] = compiled;

      if (isObject(val)) {
        if (isRegExp(val.validate)) {
          compiled.validate = createValidator(val.validate);
        } else if (isFunction$1(val.validate)) {
          compiled.validate = val.validate;
        } else {
          schemaError(name, val);
        }

        if (isFunction$1(val.normalize)) {
          compiled.normalize = val.normalize;
        } else if (!val.normalize) {
          compiled.normalize = createNormalizer();
        } else {
          schemaError(name, val);
        }

        return;
      }

      if (isString(val)) {
        aliases.push(name);
        return;
      }

      schemaError(name, val);
    }); //
    // Compile postponed aliases
    //

    aliases.forEach(function (alias) {
      if (!self.__compiled__[self.__schemas__[alias]]) {
        // Silently fail on missed schemas to avoid errons on disable.
        // schemaError(alias, self.__schemas__[alias]);
        return;
      }

      self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
      self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
    }); //
    // Fake record for guessed links
    //

    self.__compiled__[''] = {
      validate: null,
      normalize: createNormalizer()
    }; //
    // Build schema condition
    //

    var slist = Object.keys(self.__compiled__).filter(function (name) {
      // Filter disabled & fake schemas
      return name.length > 0 && self.__compiled__[name];
    }).map(escapeRE).join('|'); // (?!_) cause 1.5x slowdown

    self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + '))(' + slist + ')', 'i');
    self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re$1.src_ZPCc + '))(' + slist + ')', 'ig');
    self.re.pretest = RegExp('(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@', 'i'); //
    // Cleanup
    //

    resetScanCache(self);
  }
  /**
   * class Match
   *
   * Match result. Single element of array, returned by [[LinkifyIt#match]]
   **/


  function Match(self, shift) {
    var start = self.__index__,
        end = self.__last_index__,
        text = self.__text_cache__.slice(start, end);
    /**
     * Match#schema -> String
     *
     * Prefix (protocol) for matched string.
     **/


    this.schema = self.__schema__.toLowerCase();
    /**
     * Match#index -> Number
     *
     * First position of matched string.
     **/

    this.index = start + shift;
    /**
     * Match#lastIndex -> Number
     *
     * Next position after matched string.
     **/

    this.lastIndex = end + shift;
    /**
     * Match#raw -> String
     *
     * Matched string.
     **/

    this.raw = text;
    /**
     * Match#text -> String
     *
     * Notmalized text of matched string.
     **/

    this.text = text;
    /**
     * Match#url -> String
     *
     * Normalized url of matched string.
     **/

    this.url = text;
  }

  function createMatch(self, shift) {
    var match = new Match(self, shift);

    self.__compiled__[match.schema].normalize(match, self);

    return match;
  }
  /**
   * class LinkifyIt
   **/

  /**
   * new LinkifyIt(schemas, options)
   * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
   * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
   *
   * Creates new linkifier instance with optional additional schemas.
   * Can be called without `new` keyword for convenience.
   *
   * By default understands:
   *
   * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
   * - "fuzzy" links and emails (example.com, foo@bar.com).
   *
   * `schemas` is an object, where each key/value describes protocol/rule:
   *
   * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
   *   for example). `linkify-it` makes shure that prefix is not preceeded with
   *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
   * - __value__ - rule to check tail after link prefix
   *   - _String_ - just alias to existing rule
   *   - _Object_
   *     - _validate_ - validator function (should return matched length on success),
   *       or `RegExp`.
   *     - _normalize_ - optional function to normalize text & url of matched result
   *       (for example, for @twitter mentions).
   *
   * `options`:
   *
   * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
   * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
   *   like version numbers. Default `false`.
   * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
   *
   **/


  function LinkifyIt$1(schemas, options) {
    if (!(this instanceof LinkifyIt$1)) {
      return new LinkifyIt$1(schemas, options);
    }

    if (!options) {
      if (isOptionsObj(schemas)) {
        options = schemas;
        schemas = {};
      }
    }

    this.__opts__ = assign({}, defaultOptions, options); // Cache last tested result. Used to skip repeating steps on next `match` call.

    this.__index__ = -1;
    this.__last_index__ = -1; // Next scan position

    this.__schema__ = '';
    this.__text_cache__ = '';
    this.__schemas__ = assign({}, defaultSchemas, schemas);
    this.__compiled__ = {};
    this.__tlds__ = tlds_default;
    this.__tlds_replaced__ = false;
    this.re = {};
    compile(this);
  }
  /** chainable
   * LinkifyIt#add(schema, definition)
   * - schema (String): rule name (fixed pattern prefix)
   * - definition (String|RegExp|Object): schema definition
   *
   * Add new rule definition. See constructor description for details.
   **/


  LinkifyIt$1.prototype.add = function add(schema, definition) {
    this.__schemas__[schema] = definition;
    compile(this);
    return this;
  };
  /** chainable
   * LinkifyIt#set(options)
   * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
   *
   * Set recognition options for links without schema.
   **/


  LinkifyIt$1.prototype.set = function set(options) {
    this.__opts__ = assign(this.__opts__, options);
    return this;
  };
  /**
   * LinkifyIt#test(text) -> Boolean
   *
   * Searches linkifiable pattern and returns `true` on success or `false` on fail.
   **/


  LinkifyIt$1.prototype.test = function test(text) {
    // Reset scan cache
    this.__text_cache__ = text;
    this.__index__ = -1;

    if (!text.length) {
      return false;
    }

    var m, ml, me, len, shift, next, re, tld_pos, at_pos; // try to scan for link with schema - that's the most simple rule

    if (this.re.schema_test.test(text)) {
      re = this.re.schema_search;
      re.lastIndex = 0;

      while ((m = re.exec(text)) !== null) {
        len = this.testSchemaAt(text, m[2], re.lastIndex);

        if (len) {
          this.__schema__ = m[2];
          this.__index__ = m.index + m[1].length;
          this.__last_index__ = m.index + m[0].length + len;
          break;
        }
      }
    }

    if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
      // guess schemaless links
      tld_pos = text.search(this.re.host_fuzzy_test);

      if (tld_pos >= 0) {
        // if tld is located after found link - no need to check fuzzy pattern
        if (this.__index__ < 0 || tld_pos < this.__index__) {
          if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
            shift = ml.index + ml[1].length;

            if (this.__index__ < 0 || shift < this.__index__) {
              this.__schema__ = '';
              this.__index__ = shift;
              this.__last_index__ = ml.index + ml[0].length;
            }
          }
        }
      }
    }

    if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
      // guess schemaless emails
      at_pos = text.indexOf('@');

      if (at_pos >= 0) {
        // We can't skip this check, because this cases are possible:
        // 192.168.1.1@gmail.com, my.in@example.com
        if ((me = text.match(this.re.email_fuzzy)) !== null) {
          shift = me.index + me[1].length;
          next = me.index + me[0].length;

          if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
            this.__schema__ = 'mailto:';
            this.__index__ = shift;
            this.__last_index__ = next;
          }
        }
      }
    }

    return this.__index__ >= 0;
  };
  /**
   * LinkifyIt#pretest(text) -> Boolean
   *
   * Very quick check, that can give false positives. Returns true if link MAY BE
   * can exists. Can be used for speed optimization, when you need to check that
   * link NOT exists.
   **/


  LinkifyIt$1.prototype.pretest = function pretest(text) {
    return this.re.pretest.test(text);
  };
  /**
   * LinkifyIt#testSchemaAt(text, name, position) -> Number
   * - text (String): text to scan
   * - name (String): rule (schema) name
   * - position (Number): text offset to check from
   *
   * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
   * at given position. Returns length of found pattern (0 on fail).
   **/


  LinkifyIt$1.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
    // If not supported schema check requested - terminate
    if (!this.__compiled__[schema.toLowerCase()]) {
      return 0;
    }

    return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
  };
  /**
   * LinkifyIt#match(text) -> Array|null
   *
   * Returns array of found link descriptions or `null` on fail. We strongly
   * recommend to use [[LinkifyIt#test]] first, for best speed.
   *
   * ##### Result match description
   *
   * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
   *   protocol-neutral  links.
   * - __index__ - offset of matched text
   * - __lastIndex__ - index of next char after mathch end
   * - __raw__ - matched text
   * - __text__ - normalized text
   * - __url__ - link, generated from matched text
   **/


  LinkifyIt$1.prototype.match = function match(text) {
    var shift = 0,
        result = []; // Try to take previous element from cache, if .test() called before

    if (this.__index__ >= 0 && this.__text_cache__ === text) {
      result.push(createMatch(this, shift));
      shift = this.__last_index__;
    } // Cut head if cache was used


    var tail = shift ? text.slice(shift) : text; // Scan string until end reached

    while (this.test(tail)) {
      result.push(createMatch(this, shift));
      tail = tail.slice(this.__last_index__);
      shift += this.__last_index__;
    }

    if (result.length) {
      return result;
    }

    return null;
  };
  /** chainable
   * LinkifyIt#tlds(list [, keepOld]) -> this
   * - list (Array): list of tlds
   * - keepOld (Boolean): merge with current list if `true` (`false` by default)
   *
   * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
   * to avoid false positives. By default this algorythm used:
   *
   * - hostname with any 2-letter root zones are ok.
   * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
   *   are ok.
   * - encoded (`xn--...`) root zones are ok.
   *
   * If list is replaced, then exact match for 2-chars root zones will be checked.
   **/


  LinkifyIt$1.prototype.tlds = function tlds(list, keepOld) {
    list = Array.isArray(list) ? list : [list];

    if (!keepOld) {
      this.__tlds__ = list.slice();
      this.__tlds_replaced__ = true;
      compile(this);
      return this;
    }

    this.__tlds__ = this.__tlds__.concat(list).sort().filter(function (el, idx, arr) {
      return el !== arr[idx - 1];
    }).reverse();
    compile(this);
    return this;
  };
  /**
   * LinkifyIt#normalize(match)
   *
   * Default normalizer (if schema does not define it's own).
   **/


  LinkifyIt$1.prototype.normalize = function normalize(match) {
    // Do minimal possible changes by default. Need to collect feedback prior
    // to move forward https://github.com/markdown-it/linkify-it/issues/1
    if (!match.schema) {
      match.url = 'http://' + match.url;
    }

    if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
      match.url = 'mailto:' + match.url;
    }
  };
  /**
   * LinkifyIt#onCompile()
   *
   * Override to modify basic RegExp-s.
   **/


  LinkifyIt$1.prototype.onCompile = function onCompile() {};

  var linkifyIt = LinkifyIt$1;

  var mdurl$1 = {};

  var encodeCache = {}; // Create a lookup array where anything but characters in `chars` string
  // and alphanumeric chars is percent-encoded.
  //

  function getEncodeCache(exclude) {
    var i,
        ch,
        cache = encodeCache[exclude];

    if (cache) {
      return cache;
    }

    cache = encodeCache[exclude] = [];

    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);

      if (/^[0-9a-z]$/i.test(ch)) {
        // always allow unencoded alphanumeric characters
        cache.push(ch);
      } else {
        cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
      }
    }

    for (i = 0; i < exclude.length; i++) {
      cache[exclude.charCodeAt(i)] = exclude[i];
    }

    return cache;
  } // Encode unsafe characters with percent-encoding, skipping already
  // encoded sequences.
  //
  //  - string       - string to encode
  //  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
  //  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
  //


  function encode$1(string, exclude, keepEscaped) {
    var i,
        l,
        code,
        nextCode,
        cache,
        result = '';

    if (typeof exclude !== 'string') {
      // encode(string, keepEscaped)
      keepEscaped = exclude;
      exclude = encode$1.defaultChars;
    }

    if (typeof keepEscaped === 'undefined') {
      keepEscaped = true;
    }

    cache = getEncodeCache(exclude);

    for (i = 0, l = string.length; i < l; i++) {
      code = string.charCodeAt(i);

      if (keepEscaped && code === 0x25
      /* % */
      && i + 2 < l) {
        if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
          result += string.slice(i, i + 3);
          i += 2;
          continue;
        }
      }

      if (code < 128) {
        result += cache[code];
        continue;
      }

      if (code >= 0xD800 && code <= 0xDFFF) {
        if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
          nextCode = string.charCodeAt(i + 1);

          if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
            result += encodeURIComponent(string[i] + string[i + 1]);
            i++;
            continue;
          }
        }

        result += '%EF%BF%BD';
        continue;
      }

      result += encodeURIComponent(string[i]);
    }

    return result;
  }

  encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  encode$1.componentChars = "-_.!~*'()";
  var encode_1 = encode$1;

  /* eslint-disable no-bitwise */

  var decodeCache = {};

  function getDecodeCache(exclude) {
    var i,
        ch,
        cache = decodeCache[exclude];

    if (cache) {
      return cache;
    }

    cache = decodeCache[exclude] = [];

    for (i = 0; i < 128; i++) {
      ch = String.fromCharCode(i);
      cache.push(ch);
    }

    for (i = 0; i < exclude.length; i++) {
      ch = exclude.charCodeAt(i);
      cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
    }

    return cache;
  } // Decode percent-encoded string.
  //


  function decode$1(string, exclude) {
    var cache;

    if (typeof exclude !== 'string') {
      exclude = decode$1.defaultChars;
    }

    cache = getDecodeCache(exclude);
    return string.replace(/(%[a-f0-9]{2})+/gi, function (seq) {
      var i,
          l,
          b1,
          b2,
          b3,
          b4,
          chr,
          result = '';

      for (i = 0, l = seq.length; i < l; i += 3) {
        b1 = parseInt(seq.slice(i + 1, i + 3), 16);

        if (b1 < 0x80) {
          result += cache[b1];
          continue;
        }

        if ((b1 & 0xE0) === 0xC0 && i + 3 < l) {
          // 110xxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);

          if ((b2 & 0xC0) === 0x80) {
            chr = b1 << 6 & 0x7C0 | b2 & 0x3F;

            if (chr < 0x80) {
              result += "\uFFFD\uFFFD";
            } else {
              result += String.fromCharCode(chr);
            }

            i += 3;
            continue;
          }
        }

        if ((b1 & 0xF0) === 0xE0 && i + 6 < l) {
          // 1110xxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);

          if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
            chr = b1 << 12 & 0xF000 | b2 << 6 & 0xFC0 | b3 & 0x3F;

            if (chr < 0x800 || chr >= 0xD800 && chr <= 0xDFFF) {
              result += "\uFFFD\uFFFD\uFFFD";
            } else {
              result += String.fromCharCode(chr);
            }

            i += 6;
            continue;
          }
        }

        if ((b1 & 0xF8) === 0xF0 && i + 9 < l) {
          // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
          b2 = parseInt(seq.slice(i + 4, i + 6), 16);
          b3 = parseInt(seq.slice(i + 7, i + 9), 16);
          b4 = parseInt(seq.slice(i + 10, i + 12), 16);

          if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
            chr = b1 << 18 & 0x1C0000 | b2 << 12 & 0x3F000 | b3 << 6 & 0xFC0 | b4 & 0x3F;

            if (chr < 0x10000 || chr > 0x10FFFF) {
              result += "\uFFFD\uFFFD\uFFFD\uFFFD";
            } else {
              chr -= 0x10000;
              result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
            }

            i += 9;
            continue;
          }
        }

        result += "\uFFFD";
      }

      return result;
    });
  }

  decode$1.defaultChars = ';/?:@&=+$,#';
  decode$1.componentChars = '';
  var decode_1 = decode$1;

  var format = function format(url) {
    var result = '';
    result += url.protocol || '';
    result += url.slashes ? '//' : '';
    result += url.auth ? url.auth + '@' : '';

    if (url.hostname && url.hostname.indexOf(':') !== -1) {
      // ipv6 address
      result += '[' + url.hostname + ']';
    } else {
      result += url.hostname || '';
    }

    result += url.port ? ':' + url.port : '';
    result += url.pathname || '';
    result += url.search || '';
    result += url.hash || '';
    return result;
  };

  // Changes from joyent/node:
  //
  // 1. No leading slash in paths,
  //    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
  //
  // 2. Backslashes are not replaced with slashes,
  //    so `http:\\example.org\` is treated like a relative path
  //
  // 3. Trailing colon is treated like a part of the path,
  //    i.e. in `http://example.org:foo` pathname is `:foo`
  //
  // 4. Nothing is URL-encoded in the resulting object,
  //    (in joyent/node some chars in auth and paths are encoded)
  //
  // 5. `url.parse()` does not have `parseQueryString` argument
  //
  // 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
  //    which can be constructed using other parts of the url.
  //

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  } // Reference: RFC 3986, RFC 1808, RFC 2396
  // define these here so at least they only have to be
  // compiled once on the first module load.


  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,
      // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
      // RFC 2396: characters not allowed for various reasons.
  unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
      // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),
      // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      // protocols that can allow "unsafe" and "unwise" chars.

  /* eslint-disable no-script-url */
  // protocols that never have a hostname.
  hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  },
      // protocols that always contain a // bit.
  slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  };
  /* eslint-enable no-script-url */

  function urlParse(url, slashesDenoteHost) {
    if (url && url instanceof Url) {
      return url;
    }

    var u = new Url();
    u.parse(url, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function (url, slashesDenoteHost) {
    var i,
        l,
        lowerProto,
        hec,
        slashes,
        rest = url; // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"

    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);

      if (simplePath) {
        this.pathname = simplePath[1];

        if (simplePath[2]) {
          this.search = simplePath[2];
        }

        return this;
      }
    }

    var proto = protocolPattern.exec(rest);

    if (proto) {
      proto = proto[0];
      lowerProto = proto.toLowerCase();
      this.protocol = proto;
      rest = rest.substr(proto.length);
    } // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.


    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      slashes = rest.substr(0, 2) === '//';

      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c
      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.
      // find the first instance of any hostEndingChars
      var hostEnd = -1;

      for (i = 0; i < hostEndingChars.length; i++) {
        hec = rest.indexOf(hostEndingChars[i]);

        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      } // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.


      var auth, atSign;

      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      } // Now we have a portion which is definitely the auth.
      // Pull that off.


      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = auth;
      } // the host is the remaining to the left of the first non-host char


      hostEnd = -1;

      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);

        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      } // if we still have not hit it, then the entire thing is a host.


      if (hostEnd === -1) {
        hostEnd = rest.length;
      }

      if (rest[hostEnd - 1] === ':') {
        hostEnd--;
      }

      var host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd); // pull out port.

      this.parseHost(host); // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.

      this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.

      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.

      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);

        for (i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];

          if (!part) {
            continue;
          }

          if (!part.match(hostnamePartPattern)) {
            var newpart = '';

            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            } // we test again with ASCII char only


            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);

              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }

              if (notHost.length) {
                rest = notHost.join('.') + rest;
              }

              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } // strip [ and ] from the hostname
      // the host field still retains them, though


      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    } // chop off from the tail first.


    var hash = rest.indexOf('#');

    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }

    var qm = rest.indexOf('?');

    if (qm !== -1) {
      this.search = rest.substr(qm);
      rest = rest.slice(0, qm);
    }

    if (rest) {
      this.pathname = rest;
    }

    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '';
    }

    return this;
  };

  Url.prototype.parseHost = function (host) {
    var port = portPattern.exec(host);

    if (port) {
      port = port[0];

      if (port !== ':') {
        this.port = port.substr(1);
      }

      host = host.substr(0, host.length - port.length);
    }

    if (host) {
      this.hostname = host;
    }
  };

  var parse = urlParse;

  mdurl$1.encode = encode_1;
  mdurl$1.decode = decode_1;
  mdurl$1.format = format;
  mdurl$1.parse = parse;

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */

  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80

  var delimiter = '-'; // '\x2D'

  /** Regular expressions */

  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars

  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  /** Error messages */

  var errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  };
  /** Convenience shortcuts */

  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var result = [];
    var length = array.length;

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  var ucs2encode = function ucs2encode(array) {
    return String.fromCodePoint.apply(String, _toConsumableArray$1(array));
  };
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  var basicToDigit = function basicToDigit(codePoint) {
    if (codePoint - 0x30 < 0x0A) {
      return codePoint - 0x16;
    }

    if (codePoint - 0x41 < 0x1A) {
      return codePoint - 0x41;
    }

    if (codePoint - 0x61 < 0x1A) {
      return codePoint - 0x61;
    }

    return base;
  };
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  var digitToBasic = function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (;
    /* no initialization */
    delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  var decode = function decode(input) {
    // Don't use UCS-2.
    var output = [];
    var inputLength = input.length;
    var i = 0;
    var n = initialN;
    var bias = initialBias; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    var basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (var j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;)
    /* no final expression */
    {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      var oldi = i;

      for (var w = 1, k = base;;
      /* no condition */
      k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }

        var digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        var baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      var out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output.

      output.splice(i++, 0, n);
    }

    return String.fromCodePoint.apply(String, output);
  };
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  var encode = function encode(input) {
    var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

    input = ucs2decode(input); // Cache the length.

    var inputLength = input.length; // Initialize the state.

    var n = initialN;
    var delta = 0;
    var bias = initialBias; // Handle the basic code points.

    var _iterator = _createForOfIteratorHelper(input),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _currentValue2 = _step.value;

        if (_currentValue2 < 0x80) {
          output.push(stringFromCharCode(_currentValue2));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var basicLength = output.length;
    var handledCPCount = basicLength; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string with a delimiter unless it's empty.

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      var m = maxInt;

      var _iterator2 = _createForOfIteratorHelper(input),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var currentValue = _step2.value;

          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow.

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      var _iterator3 = _createForOfIteratorHelper(input),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _currentValue = _step3.value;

          if (_currentValue < n && ++delta > maxInt) {
            error('overflow');
          }

          if (_currentValue == n) {
            // Represent delta as a generalized variable-length integer.
            var q = delta;

            for (var k = base;;
            /* no condition */
            k += base) {
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

              if (q < t) {
                break;
              }

              var qMinusT = q - t;
              var baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }

            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      ++delta;
      ++n;
    }

    return output.join('');
  };
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  var toUnicode = function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  };
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  var toASCII = function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  };
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  var punycode$1 = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '2.1.0',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };

  var punycode_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ucs2decode: ucs2decode,
    ucs2encode: ucs2encode,
    decode: decode,
    encode: encode,
    toASCII: toASCII,
    toUnicode: toUnicode,
    'default': punycode$1
  });

  var require$$8 = /*@__PURE__*/getAugmentedNamespace(punycode_es6);

  var _default$1 = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-',
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201C\u201D\u2018\u2019",

      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100 // Internal protection, recursion limit

    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  };

  var zero = {
    options: {
      html: false,
      // Enable HTML tags in source
      xhtmlOut: false,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-',
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201C\u201D\u2018\u2019",

      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20 // Internal protection, recursion limit

    },
    components: {
      core: {
        rules: ['normalize', 'block', 'inline']
      },
      block: {
        rules: ['paragraph']
      },
      inline: {
        rules: ['text'],
        rules2: ['balance_pairs', 'text_collapse']
      }
    }
  };

  var commonmark = {
    options: {
      html: true,
      // Enable HTML tags in source
      xhtmlOut: true,
      // Use '/' to close single tags (<br />)
      breaks: false,
      // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-',
      // CSS language prefix for fenced blocks
      linkify: false,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: false,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "\u201C\u201D\u2018\u2019",

      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20 // Internal protection, recursion limit

    },
    components: {
      core: {
        rules: ['normalize', 'block', 'inline']
      },
      block: {
        rules: ['blockquote', 'code', 'fence', 'heading', 'hr', 'html_block', 'lheading', 'list', 'reference', 'paragraph']
      },
      inline: {
        rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'html_inline', 'image', 'link', 'newline', 'text'],
        rules2: ['balance_pairs', 'emphasis', 'text_collapse']
      }
    }
  };

  var utils = require$$0$5;

  var helpers = helpers$1;

  var Renderer = renderer;

  var ParserCore = parser_core;

  var ParserBlock = parser_block;

  var ParserInline = parser_inline;

  var LinkifyIt = linkifyIt;

  var mdurl = mdurl$1;

  var punycode = require$$8;

  var config = {
    'default': _default$1,
    zero: zero,
    commonmark: commonmark
  }; ////////////////////////////////////////////////////////////////////////////////
  //
  // This validator can prohibit more than really needed to prevent XSS. It's a
  // tradeoff to keep code simple and to be secure by default.
  //
  // If you need different setup - override validator method as you wish. Or
  // replace it with dummy function and use external sanitizer.
  //

  var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
  var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

  function validateLink(url) {
    // url should be normalized at this point, and existing entities are decoded
    var str = url.trim().toLowerCase();
    return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
  } ////////////////////////////////////////////////////////////////////////////////


  var RECODE_HOSTNAME_FOR = ['http:', 'https:', 'mailto:'];

  function normalizeLink(url) {
    var parsed = mdurl.parse(url, true);

    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      //
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      //
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toASCII(parsed.hostname);
        } catch (er) {
          /**/
        }
      }
    }

    return mdurl.encode(mdurl.format(parsed));
  }

  function normalizeLinkText(url) {
    var parsed = mdurl.parse(url, true);

    if (parsed.hostname) {
      // Encode hostnames in urls like:
      // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
      //
      // We don't encode unknown schemas, because it's likely that we encode
      // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
      //
      if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
        try {
          parsed.hostname = punycode.toUnicode(parsed.hostname);
        } catch (er) {
          /**/
        }
      }
    }

    return mdurl.decode(mdurl.format(parsed));
  }
  /**
   * class MarkdownIt
   *
   * Main parser/renderer class.
   *
   * ##### Usage
   *
   * ```javascript
   * // node.js, "classic" way:
   * var MarkdownIt = require('markdown-it'),
   *     md = new MarkdownIt();
   * var result = md.render('# markdown-it rulezz!');
   *
   * // node.js, the same, but with sugar:
   * var md = require('markdown-it')();
   * var result = md.render('# markdown-it rulezz!');
   *
   * // browser without AMD, added to "window" on script load
   * // Note, there are no dash.
   * var md = window.markdownit();
   * var result = md.render('# markdown-it rulezz!');
   * ```
   *
   * Single line rendering, without paragraph wrap:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * var result = md.renderInline('__markdown-it__ rulezz!');
   * ```
   **/

  /**
   * new MarkdownIt([presetName, options])
   * - presetName (String): optional, `commonmark` / `zero`
   * - options (Object)
   *
   * Creates parser instanse with given config. Can be called without `new`.
   *
   * ##### presetName
   *
   * MarkdownIt provides named presets as a convenience to quickly
   * enable/disable active syntax rules and options for common use cases.
   *
   * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
   *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
   * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
   *   similar to GFM, used when no preset name given. Enables all available rules,
   *   but still without html, typographer & autolinker.
   * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
   *   all rules disabled. Useful to quickly setup your config via `.enable()`.
   *   For example, when you need only `bold` and `italic` markup and nothing else.
   *
   * ##### options:
   *
   * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
   *   That's not safe! You may need external sanitizer to protect output from XSS.
   *   It's better to extend features via plugins, instead of enabling HTML.
   * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
   *   (`<br />`). This is needed only for full CommonMark compatibility. In real
   *   world you will need HTML output.
   * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
   * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
   *   Can be useful for external highlighters.
   * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
   * - __typographer__  - `false`. Set `true` to enable [some language-neutral
   *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
   *   quotes beautification (smartquotes).
   * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
   *   pairs, when typographer enabled and smartquotes on. For example, you can
   *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
   *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
   * - __highlight__ - `null`. Highlighter function for fenced code blocks.
   *   Highlighter `function (str, lang)` should return escaped HTML. It can also
   *   return empty string if the source was not changed and should be escaped
   *   externaly. If result starts with <pre... internal wrapper is skipped.
   *
   * ##### Example
   *
   * ```javascript
   * // commonmark mode
   * var md = require('markdown-it')('commonmark');
   *
   * // default mode
   * var md = require('markdown-it')();
   *
   * // enable everything
   * var md = require('markdown-it')({
   *   html: true,
   *   linkify: true,
   *   typographer: true
   * });
   * ```
   *
   * ##### Syntax highlighting
   *
   * ```js
   * var hljs = require('highlight.js') // https://highlightjs.org/
   *
   * var md = require('markdown-it')({
   *   highlight: function (str, lang) {
   *     if (lang && hljs.getLanguage(lang)) {
   *       try {
   *         return hljs.highlight(lang, str, true).value;
   *       } catch (__) {}
   *     }
   *
   *     return ''; // use external default escaping
   *   }
   * });
   * ```
   *
   * Or with full wrapper override (if you need assign class to `<pre>`):
   *
   * ```javascript
   * var hljs = require('highlight.js') // https://highlightjs.org/
   *
   * // Actual default values
   * var md = require('markdown-it')({
   *   highlight: function (str, lang) {
   *     if (lang && hljs.getLanguage(lang)) {
   *       try {
   *         return '<pre class="hljs"><code>' +
   *                hljs.highlight(lang, str, true).value +
   *                '</code></pre>';
   *       } catch (__) {}
   *     }
   *
   *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
   *   }
   * });
   * ```
   *
   **/


  function MarkdownIt(presetName, options) {
    if (!(this instanceof MarkdownIt)) {
      return new MarkdownIt(presetName, options);
    }

    if (!options) {
      if (!utils.isString(presetName)) {
        options = presetName || {};
        presetName = 'default';
      }
    }
    /**
     * MarkdownIt#inline -> ParserInline
     *
     * Instance of [[ParserInline]]. You may need it to add new rules when
     * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
     * [[MarkdownIt.enable]].
     **/


    this.inline = new ParserInline();
    /**
     * MarkdownIt#block -> ParserBlock
     *
     * Instance of [[ParserBlock]]. You may need it to add new rules when
     * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
     * [[MarkdownIt.enable]].
     **/

    this.block = new ParserBlock();
    /**
     * MarkdownIt#core -> Core
     *
     * Instance of [[Core]] chain executor. You may need it to add new rules when
     * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
     * [[MarkdownIt.enable]].
     **/

    this.core = new ParserCore();
    /**
     * MarkdownIt#renderer -> Renderer
     *
     * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
     * rules for new token types, generated by plugins.
     *
     * ##### Example
     *
     * ```javascript
     * var md = require('markdown-it')();
     *
     * function myToken(tokens, idx, options, env, self) {
     *   //...
     *   return result;
     * };
     *
     * md.renderer.rules['my_token'] = myToken
     * ```
     *
     * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
     **/

    this.renderer = new Renderer();
    /**
     * MarkdownIt#linkify -> LinkifyIt
     *
     * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
     * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
     * rule.
     **/

    this.linkify = new LinkifyIt();
    /**
     * MarkdownIt#validateLink(url) -> Boolean
     *
     * Link validation function. CommonMark allows too much in links. By default
     * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
     * except some embedded image types.
     *
     * You can change this behaviour:
     *
     * ```javascript
     * var md = require('markdown-it')();
     * // enable everything
     * md.validateLink = function () { return true; }
     * ```
     **/

    this.validateLink = validateLink;
    /**
     * MarkdownIt#normalizeLink(url) -> String
     *
     * Function used to encode link url to a machine-readable format,
     * which includes url-encoding, punycode, etc.
     **/

    this.normalizeLink = normalizeLink;
    /**
     * MarkdownIt#normalizeLinkText(url) -> String
     *
     * Function used to decode link url to a human-readable format`
     **/

    this.normalizeLinkText = normalizeLinkText; // Expose utils & helpers for easy acces from plugins

    /**
     * MarkdownIt#utils -> utils
     *
     * Assorted utility functions, useful to write plugins. See details
     * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
     **/

    this.utils = utils;
    /**
     * MarkdownIt#helpers -> helpers
     *
     * Link components parser functions, useful to write plugins. See details
     * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
     **/

    this.helpers = utils.assign({}, helpers);
    this.options = {};
    this.configure(presetName);

    if (options) {
      this.set(options);
    }
  }
  /** chainable
   * MarkdownIt.set(options)
   *
   * Set parser options (in the same format as in constructor). Probably, you
   * will never need it, but you can change options after constructor call.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')()
   *             .set({ html: true, breaks: true })
   *             .set({ typographer, true });
   * ```
   *
   * __Note:__ To achieve the best possible performance, don't modify a
   * `markdown-it` instance options on the fly. If you need multiple configurations
   * it's best to create multiple instances and initialize each with separate
   * config.
   **/


  MarkdownIt.prototype.set = function (options) {
    utils.assign(this.options, options);
    return this;
  };
  /** chainable, internal
   * MarkdownIt.configure(presets)
   *
   * Batch load of all options and compenent settings. This is internal method,
   * and you probably will not need it. But if you with - see available presets
   * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
   *
   * We strongly recommend to use presets instead of direct config loads. That
   * will give better compatibility with next versions.
   **/


  MarkdownIt.prototype.configure = function (presets) {
    var self = this,
        presetName;

    if (utils.isString(presets)) {
      presetName = presets;
      presets = config[presetName];

      if (!presets) {
        throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
      }
    }

    if (!presets) {
      throw new Error('Wrong `markdown-it` preset, can\'t be empty');
    }

    if (presets.options) {
      self.set(presets.options);
    }

    if (presets.components) {
      Object.keys(presets.components).forEach(function (name) {
        if (presets.components[name].rules) {
          self[name].ruler.enableOnly(presets.components[name].rules);
        }

        if (presets.components[name].rules2) {
          self[name].ruler2.enableOnly(presets.components[name].rules2);
        }
      });
    }

    return this;
  };
  /** chainable
   * MarkdownIt.enable(list, ignoreInvalid)
   * - list (String|Array): rule name or list of rule names to enable
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * Enable list or rules. It will automatically find appropriate components,
   * containing rules with given names. If rule not found, and `ignoreInvalid`
   * not set - throws exception.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')()
   *             .enable(['sub', 'sup'])
   *             .disable('smartquotes');
   * ```
   **/


  MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
    var result = [];

    if (!Array.isArray(list)) {
      list = [list];
    }

    ['core', 'block', 'inline'].forEach(function (chain) {
      result = result.concat(this[chain].ruler.enable(list, true));
    }, this);
    result = result.concat(this.inline.ruler2.enable(list, true));
    var missed = list.filter(function (name) {
      return result.indexOf(name) < 0;
    });

    if (missed.length && !ignoreInvalid) {
      throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
    }

    return this;
  };
  /** chainable
   * MarkdownIt.disable(list, ignoreInvalid)
   * - list (String|Array): rule name or list of rule names to disable.
   * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
   *
   * The same as [[MarkdownIt.enable]], but turn specified rules off.
   **/


  MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
    var result = [];

    if (!Array.isArray(list)) {
      list = [list];
    }

    ['core', 'block', 'inline'].forEach(function (chain) {
      result = result.concat(this[chain].ruler.disable(list, true));
    }, this);
    result = result.concat(this.inline.ruler2.disable(list, true));
    var missed = list.filter(function (name) {
      return result.indexOf(name) < 0;
    });

    if (missed.length && !ignoreInvalid) {
      throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
    }

    return this;
  };
  /** chainable
   * MarkdownIt.use(plugin, params)
   *
   * Load specified plugin with given params into current parser instance.
   * It's just a sugar to call `plugin(md, params)` with curring.
   *
   * ##### Example
   *
   * ```javascript
   * var iterator = require('markdown-it-for-inline');
   * var md = require('markdown-it')()
   *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
   *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
   *             });
   * ```
   **/


  MarkdownIt.prototype.use = function (plugin
  /*, params, ... */
  ) {
    var args = [this].concat(Array.prototype.slice.call(arguments, 1));
    plugin.apply(plugin, args);
    return this;
  };
  /** internal
   * MarkdownIt.parse(src, env) -> Array
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * Parse input string and returns list of block tokens (special token type
   * "inline" will contain list of inline tokens). You should not call this
   * method directly, until you write custom renderer (for example, to produce
   * AST).
   *
   * `env` is used to pass data between "distributed" rules and return additional
   * metadata like reference info, needed for the renderer. It also can be used to
   * inject data in specific cases. Usually, you will be ok to pass `{}`,
   * and then pass updated object to renderer.
   **/


  MarkdownIt.prototype.parse = function (src, env) {
    if (typeof src !== 'string') {
      throw new Error('Input data should be a String');
    }

    var state = new this.core.State(src, this, env);
    this.core.process(state);
    return state.tokens;
  };
  /**
   * MarkdownIt.render(src [, env]) -> String
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * Render markdown string into html. It does all magic for you :).
   *
   * `env` can be used to inject additional metadata (`{}` by default).
   * But you will not need it with high probability. See also comment
   * in [[MarkdownIt.parse]].
   **/


  MarkdownIt.prototype.render = function (src, env) {
    env = env || {};
    return this.renderer.render(this.parse(src, env), this.options, env);
  };
  /** internal
   * MarkdownIt.parseInline(src, env) -> Array
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
   * block tokens list with the single `inline` element, containing parsed inline
   * tokens in `children` property. Also updates `env` object.
   **/


  MarkdownIt.prototype.parseInline = function (src, env) {
    var state = new this.core.State(src, this, env);
    state.inlineMode = true;
    this.core.process(state);
    return state.tokens;
  };
  /**
   * MarkdownIt.renderInline(src [, env]) -> String
   * - src (String): source string
   * - env (Object): environment sandbox
   *
   * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
   * will NOT be wrapped into `<p>` tags.
   **/


  MarkdownIt.prototype.renderInline = function (src, env) {
    env = env || {};
    return this.renderer.render(this.parseInline(src, env), this.options, env);
  };

  var lib = MarkdownIt;

  var markdownIt = lib;

  var invalidCharacters = Array.from({
    length: 11
  }, function (_, i) {
    return String.fromCharCode(0x2000 + i);
  }).concat(["\u2028", "\u2029", "\u202F", "\xA0"]);
  var sanitizeRegex = new RegExp('[' + invalidCharacters.join('') + ']', 'g');
  function normalizeWhitespace(line) {
    return line.replace(sanitizeRegex, ' ');
  }

  var md$2 = new markdownIt();
  function onHasCompletion(_cm, data, onHintInformationRender) {
    var CodeMirror = require('codemirror');

    var information;
    var deprecation;
    CodeMirror.on(data, 'select', function (ctx, el) {
      if (!information) {
        var hintsUl_1 = el.parentNode;
        information = document.createElement('div');
        information.className = 'CodeMirror-hint-information';
        hintsUl_1.appendChild(information);
        deprecation = document.createElement('div');
        deprecation.className = 'CodeMirror-hint-deprecation';
        hintsUl_1.appendChild(deprecation);

        var _onRemoveFn_;

        hintsUl_1.addEventListener('DOMNodeRemoved', _onRemoveFn_ = function onRemoveFn_1(event) {
          if (event.target === hintsUl_1) {
            hintsUl_1.removeEventListener('DOMNodeRemoved', _onRemoveFn_);
            information = null;
            deprecation = null;
            _onRemoveFn_ = null;
          }
        });
      }

      var description = ctx.description ? md$2.render(ctx.description) : 'Self descriptive.';
      var type = ctx.type ? '<span class="infoType">' + renderType$1(ctx.type) + '</span>' : '';
      information.innerHTML = '<div class="content">' + (description.slice(0, 3) === '<p>' ? '<p>' + type + description.slice(3) : type + description) + '</div>';

      if (ctx && deprecation && ctx.isDeprecated) {
        var reason = ctx.deprecationReason ? md$2.render(ctx.deprecationReason) : '';
        deprecation.innerHTML = '<span class="deprecation-label">Deprecated</span>' + reason;
        deprecation.style.display = 'block';
      } else if (deprecation) {
        deprecation.style.display = 'none';
      }

      if (onHintInformationRender) {
        onHintInformationRender(information);
      }
    });
  }

  function renderType$1(type) {
    if (type instanceof GraphQLNonNull) {
      return renderType$1(type.ofType) + "!";
    }

    if (type instanceof GraphQLList) {
      return "[" + renderType$1(type.ofType) + "]";
    }

    return "<a class=\"typeName\">" + type.name + "</a>";
  }

  var _a;

  var isMacOs = false;

  if ((typeof window === "undefined" ? "undefined" : _typeof$3(window)) === 'object') {
    isMacOs = window.navigator.platform === 'MacIntel';
  }

  var commonKeys = (_a = {}, _a[isMacOs ? 'Cmd-F' : 'Ctrl-F'] = 'findPersistent', _a['Cmd-G'] = 'findPersistent', _a['Ctrl-G'] = 'findPersistent', _a['Ctrl-Left'] = 'goSubwordLeft', _a['Ctrl-Right'] = 'goSubwordRight', _a['Alt-Left'] = 'goGroupLeft', _a['Alt-Right'] = 'goGroupRight', _a);

  var __extends$b = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign$7 = undefined && undefined.__assign || function () {
    __assign$7 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$7.apply(this, arguments);
  };
  var md$1 = new markdownIt();
  var AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/;

  var QueryEditor = function (_super) {
    __extends$b(QueryEditor, _super);

    function QueryEditor(props) {
      var _this = _super.call(this, props) || this;

      _this.editor = null;
      _this.ignoreChangeEvent = false;
      _this._node = null;

      _this._onKeyUp = function (_cm, event) {
        if (AUTO_COMPLETE_AFTER_KEY.test(event.key) && _this.editor) {
          _this.editor.execCommand('autocomplete');
        }
      };

      _this._onEdit = function () {
        if (!_this.ignoreChangeEvent && _this.editor) {
          _this.cachedValue = _this.editor.getValue();

          if (_this.props.onEdit) {
            _this.props.onEdit(_this.cachedValue);
          }
        }
      };

      _this._onHasCompletion = function (cm, data) {
        onHasCompletion(cm, data, _this.props.onHintInformationRender);
      };

      _this.cachedValue = props.value || '';
      return _this;
    }

    QueryEditor.prototype.componentDidMount = function () {
      var _this = this;

      var _a, _b, _c;

      var CodeMirror = require('codemirror');

      require('codemirror/addon/hint/show-hint');

      require('codemirror/addon/comment/comment');

      require('codemirror/addon/edit/matchbrackets');

      require('codemirror/addon/edit/closebrackets');

      require('codemirror/addon/fold/foldgutter');

      require('codemirror/addon/fold/brace-fold');

      require('codemirror/addon/search/search');

      require('codemirror/addon/search/searchcursor');

      require('codemirror/addon/search/jump-to-line');

      require('codemirror/addon/dialog/dialog');

      require('codemirror/addon/lint/lint');

      require('codemirror/keymap/sublime');

      require('codemirror-graphql/hint');

      require('codemirror-graphql/lint');

      require('codemirror-graphql/info');

      require('codemirror-graphql/jump');

      require('codemirror-graphql/mode');

      var editor = this.editor = CodeMirror(this._node, {
        value: this.props.value || '',
        lineNumbers: true,
        tabSize: 2,
        mode: 'graphql',
        theme: this.props.editorTheme || 'graphiql',
        keyMap: 'sublime',
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        readOnly: this.props.readOnly ? 'nocursor' : false,
        foldGutter: {
          minFoldSize: 4
        },
        lint: {
          schema: this.props.schema,
          validationRules: (_a = this.props.validationRules) !== null && _a !== void 0 ? _a : null,
          externalFragments: (_b = this.props) === null || _b === void 0 ? void 0 : _b.externalFragments
        },
        hintOptions: {
          schema: this.props.schema,
          closeOnUnfocus: false,
          completeSingle: false,
          container: this._node,
          externalFragments: (_c = this.props) === null || _c === void 0 ? void 0 : _c.externalFragments
        },
        info: {
          schema: this.props.schema,
          renderDescription: function renderDescription(text) {
            return md$1.render(text);
          },
          onClick: function onClick(reference) {
            return _this.props.onClickReference && _this.props.onClickReference(reference);
          }
        },
        jump: {
          schema: this.props.schema,
          onClick: function onClick(reference) {
            return _this.props.onClickReference && _this.props.onClickReference(reference);
          }
        },
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: __assign$7(__assign$7({
          'Cmd-Space': function CmdSpace() {
            return editor.showHint({
              completeSingle: true,
              container: _this._node
            });
          },
          'Ctrl-Space': function CtrlSpace() {
            return editor.showHint({
              completeSingle: true,
              container: _this._node
            });
          },
          'Alt-Space': function AltSpace() {
            return editor.showHint({
              completeSingle: true,
              container: _this._node
            });
          },
          'Shift-Space': function ShiftSpace() {
            return editor.showHint({
              completeSingle: true,
              container: _this._node
            });
          },
          'Shift-Alt-Space': function ShiftAltSpace() {
            return editor.showHint({
              completeSingle: true,
              container: _this._node
            });
          },
          'Cmd-Enter': function CmdEnter() {
            if (_this.props.onRunQuery) {
              _this.props.onRunQuery();
            }
          },
          'Ctrl-Enter': function CtrlEnter() {
            if (_this.props.onRunQuery) {
              _this.props.onRunQuery();
            }
          },
          'Shift-Ctrl-C': function ShiftCtrlC() {
            if (_this.props.onCopyQuery) {
              _this.props.onCopyQuery();
            }
          },
          'Shift-Ctrl-P': function ShiftCtrlP() {
            if (_this.props.onPrettifyQuery) {
              _this.props.onPrettifyQuery();
            }
          },
          'Shift-Ctrl-F': function ShiftCtrlF() {
            if (_this.props.onPrettifyQuery) {
              _this.props.onPrettifyQuery();
            }
          },
          'Shift-Ctrl-M': function ShiftCtrlM() {
            if (_this.props.onMergeQuery) {
              _this.props.onMergeQuery();
            }
          }
        }, commonKeys), {
          'Cmd-S': function CmdS() {
            if (_this.props.onRunQuery) ;
          },
          'Ctrl-S': function CtrlS() {
            if (_this.props.onRunQuery) ;
          }
        })
      });

      if (editor) {
        editor.on('change', this._onEdit);
        editor.on('keyup', this._onKeyUp);
        editor.on('hasCompletion', this._onHasCompletion);
        editor.on('beforeChange', this._onBeforeChange);
      }
    };

    QueryEditor.prototype.componentDidUpdate = function (prevProps) {
      var CodeMirror = require('codemirror');

      this.ignoreChangeEvent = true;

      if (this.props.schema !== prevProps.schema && this.editor) {
        this.editor.options.lint.schema = this.props.schema;
        this.editor.options.hintOptions.schema = this.props.schema;
        this.editor.options.info.schema = this.props.schema;
        this.editor.options.jump.schema = this.props.schema;
        CodeMirror.signal(this.editor, 'change', this.editor);
      }

      if (this.props.value !== prevProps.value && this.props.value !== this.cachedValue && this.editor) {
        this.cachedValue = this.props.value;
        this.editor.setValue(this.props.value);
      }

      this.ignoreChangeEvent = false;
    };

    QueryEditor.prototype.componentWillUnmount = function () {
      if (this.editor) {
        this.editor.off('change', this._onEdit);
        this.editor.off('keyup', this._onKeyUp);
        this.editor.off('hasCompletion', this._onHasCompletion);
        this.editor = null;
      }
    };

    QueryEditor.prototype.render = function () {
      var _this = this;

      return /*#__PURE__*/React__default['default'].createElement("section", {
        className: "query-editor",
        "aria-label": "Query Editor",
        ref: function ref(node) {
          _this._node = node;
        }
      });
    };

    QueryEditor.prototype.getCodeMirror = function () {
      return this.editor;
    };

    QueryEditor.prototype.getClientHeight = function () {
      return this._node && this._node.clientHeight;
    };

    QueryEditor.prototype._onBeforeChange = function (_instance, change) {
      if (change.origin === 'paste') {
        var text = change.text.map(normalizeWhitespace);
        change.update(change.from, change.to, text);
      }
    };

    return QueryEditor;
  }(React__default['default'].Component);

  var __extends$a = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign$6 = undefined && undefined.__assign || function () {
    __assign$6 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$6.apply(this, arguments);
  };

  var VariableEditor = function (_super) {
    __extends$a(VariableEditor, _super);

    function VariableEditor(props) {
      var _this = _super.call(this, props) || this;

      _this.editor = null;
      _this._node = null;
      _this.ignoreChangeEvent = false;

      _this._onKeyUp = function (_cm, event) {
        var code = event.keyCode;

        if (!_this.editor) {
          return;
        }

        if (code >= 65 && code <= 90 || !event.shiftKey && code >= 48 && code <= 57 || event.shiftKey && code === 189 || event.shiftKey && code === 222) {
          _this.editor.execCommand('autocomplete');
        }
      };

      _this._onEdit = function () {
        if (!_this.editor) {
          return;
        }

        if (!_this.ignoreChangeEvent) {
          _this.cachedValue = _this.editor.getValue();

          if (_this.props.onEdit) {
            _this.props.onEdit(_this.cachedValue);
          }
        }
      };

      _this._onHasCompletion = function (instance, changeObj) {
        onHasCompletion(instance, changeObj, _this.props.onHintInformationRender);
      };

      _this.cachedValue = props.value || '';
      return _this;
    }

    VariableEditor.prototype.componentDidMount = function () {
      var _this = this;

      this.CodeMirror = require('codemirror');

      require('codemirror/addon/hint/show-hint');

      require('codemirror/addon/edit/matchbrackets');

      require('codemirror/addon/edit/closebrackets');

      require('codemirror/addon/fold/brace-fold');

      require('codemirror/addon/fold/foldgutter');

      require('codemirror/addon/lint/lint');

      require('codemirror/addon/search/searchcursor');

      require('codemirror/addon/search/jump-to-line');

      require('codemirror/addon/dialog/dialog');

      require('codemirror/keymap/sublime');

      require('codemirror-graphql/variables/hint');

      require('codemirror-graphql/variables/lint');

      require('codemirror-graphql/variables/mode');

      var editor = this.editor = this.CodeMirror(this._node, {
        value: this.props.value || '',
        lineNumbers: true,
        tabSize: 2,
        mode: 'graphql-variables',
        theme: this.props.editorTheme || 'graphiql',
        keyMap: 'sublime',
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        readOnly: this.props.readOnly ? 'nocursor' : false,
        foldGutter: {
          minFoldSize: 4
        },
        lint: {
          variableToType: this.props.variableToType
        },
        hintOptions: {
          variableToType: this.props.variableToType,
          closeOnUnfocus: false,
          completeSingle: false,
          container: this._node
        },
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: __assign$6({
          'Cmd-Space': function CmdSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Ctrl-Space': function CtrlSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Alt-Space': function AltSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Shift-Space': function ShiftSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Cmd-Enter': function CmdEnter() {
            if (_this.props.onRunQuery) {
              _this.props.onRunQuery();
            }
          },
          'Ctrl-Enter': function CtrlEnter() {
            if (_this.props.onRunQuery) {
              _this.props.onRunQuery();
            }
          },
          'Shift-Ctrl-P': function ShiftCtrlP() {
            if (_this.props.onPrettifyQuery) {
              _this.props.onPrettifyQuery();
            }
          },
          'Shift-Ctrl-M': function ShiftCtrlM() {
            if (_this.props.onMergeQuery) {
              _this.props.onMergeQuery();
            }
          }
        }, commonKeys)
      });
      editor.on('change', this._onEdit);
      editor.on('keyup', this._onKeyUp);
      editor.on('hasCompletion', this._onHasCompletion);
    };

    VariableEditor.prototype.componentDidUpdate = function (prevProps) {
      this.CodeMirror = require('codemirror');

      if (!this.editor) {
        return;
      }

      this.ignoreChangeEvent = true;

      if (this.props.variableToType !== prevProps.variableToType) {
        this.editor.options.lint.variableToType = this.props.variableToType;
        this.editor.options.hintOptions.variableToType = this.props.variableToType;
        this.CodeMirror.signal(this.editor, 'change', this.editor);
      }

      if (this.props.value !== prevProps.value && this.props.value !== this.cachedValue) {
        var thisValue = this.props.value || '';
        this.cachedValue = thisValue;
        this.editor.setValue(thisValue);
      }

      this.ignoreChangeEvent = false;
    };

    VariableEditor.prototype.componentWillUnmount = function () {
      if (!this.editor) {
        return;
      }

      this.editor.off('change', this._onEdit);
      this.editor.off('keyup', this._onKeyUp);
      this.editor.off('hasCompletion', this._onHasCompletion);
      this.editor = null;
    };

    VariableEditor.prototype.render = function () {
      var _this = this;

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "codemirrorWrap",
        style: {
          position: this.props.active ? 'relative' : 'absolute',
          visibility: this.props.active ? 'visible' : 'hidden'
        },
        ref: function ref(node) {
          _this._node = node;
        }
      });
    };

    VariableEditor.prototype.getCodeMirror = function () {
      return this.editor;
    };

    VariableEditor.prototype.getClientHeight = function () {
      return this._node && this._node.clientHeight;
    };

    return VariableEditor;
  }(React__default['default'].Component);

  var __extends$9 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign$5 = undefined && undefined.__assign || function () {
    __assign$5 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$5.apply(this, arguments);
  };

  var HeaderEditor = function (_super) {
    __extends$9(HeaderEditor, _super);

    function HeaderEditor(props) {
      var _this = _super.call(this, props) || this;

      _this.editor = null;
      _this._node = null;
      _this.ignoreChangeEvent = false;

      _this._onKeyUp = function (_cm, event) {
        var code = event.keyCode;

        if (!_this.editor) {
          return;
        }

        if (code >= 65 && code <= 90 || !event.shiftKey && code >= 48 && code <= 57 || event.shiftKey && code === 189 || event.shiftKey && code === 222) {
          _this.editor.execCommand('autocomplete');
        }
      };

      _this._onEdit = function () {
        if (!_this.editor) {
          return;
        }

        if (!_this.ignoreChangeEvent) {
          _this.cachedValue = _this.editor.getValue();

          if (_this.props.onEdit) {
            _this.props.onEdit(_this.cachedValue);
          }
        }
      };

      _this._onHasCompletion = function (instance, changeObj) {
        onHasCompletion(instance, changeObj, _this.props.onHintInformationRender);
      };

      _this.cachedValue = props.value || '';
      return _this;
    }

    HeaderEditor.prototype.componentDidMount = function () {
      var _this = this;

      this.CodeMirror = require('codemirror');

      require('codemirror/addon/hint/show-hint');

      require('codemirror/addon/edit/matchbrackets');

      require('codemirror/addon/edit/closebrackets');

      require('codemirror/addon/fold/brace-fold');

      require('codemirror/addon/fold/foldgutter');

      require('codemirror/addon/lint/lint');

      require('codemirror/addon/search/searchcursor');

      require('codemirror/addon/search/jump-to-line');

      require('codemirror/addon/dialog/dialog');

      require('codemirror/mode/javascript/javascript');

      require('codemirror/keymap/sublime');

      var editor = this.editor = this.CodeMirror(this._node, {
        value: this.props.value || '',
        lineNumbers: true,
        tabSize: 2,
        mode: {
          name: 'javascript',
          json: true
        },
        theme: this.props.editorTheme || 'graphiql',
        keyMap: 'sublime',
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        readOnly: this.props.readOnly ? 'nocursor' : false,
        foldGutter: {
          minFoldSize: 4
        },
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: __assign$5({
          'Cmd-Space': function CmdSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Ctrl-Space': function CtrlSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Alt-Space': function AltSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Shift-Space': function ShiftSpace() {
            return _this.editor.showHint({
              completeSingle: false,
              container: _this._node
            });
          },
          'Cmd-Enter': function CmdEnter() {
            if (_this.props.onRunQuery) {
              _this.props.onRunQuery();
            }
          },
          'Ctrl-Enter': function CtrlEnter() {
            if (_this.props.onRunQuery) {
              _this.props.onRunQuery();
            }
          },
          'Shift-Ctrl-P': function ShiftCtrlP() {
            if (_this.props.onPrettifyQuery) {
              _this.props.onPrettifyQuery();
            }
          },
          'Shift-Ctrl-M': function ShiftCtrlM() {
            if (_this.props.onMergeQuery) {
              _this.props.onMergeQuery();
            }
          }
        }, commonKeys)
      });
      editor.on('change', this._onEdit);
      editor.on('keyup', this._onKeyUp);
      editor.on('hasCompletion', this._onHasCompletion);
    };

    HeaderEditor.prototype.componentDidUpdate = function (prevProps) {
      this.CodeMirror = require('codemirror');

      if (!this.editor) {
        return;
      }

      this.ignoreChangeEvent = true;

      if (this.props.value !== prevProps.value && this.props.value !== this.cachedValue) {
        var thisValue = this.props.value || '';
        this.cachedValue = thisValue;
        this.editor.setValue(thisValue);
      }

      this.ignoreChangeEvent = false;
    };

    HeaderEditor.prototype.componentWillUnmount = function () {
      if (!this.editor) {
        return;
      }

      this.editor.off('change', this._onEdit);
      this.editor.off('keyup', this._onKeyUp);
      this.editor.off('hasCompletion', this._onHasCompletion);
      this.editor = null;
    };

    HeaderEditor.prototype.render = function () {
      var _this = this;

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "codemirrorWrap",
        style: {
          position: this.props.active ? 'relative' : 'absolute',
          visibility: this.props.active ? 'visible' : 'hidden'
        },
        ref: function ref(node) {
          _this._node = node;
        }
      });
    };

    HeaderEditor.prototype.getCodeMirror = function () {
      return this.editor;
    };

    HeaderEditor.prototype.getClientHeight = function () {
      return this._node && this._node.clientHeight;
    };

    return HeaderEditor;
  }(React__default['default'].Component);

  var __extends$8 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var ResultViewer = function (_super) {
    __extends$8(ResultViewer, _super);

    function ResultViewer() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.viewer = null;
      _this._node = null;
      return _this;
    }

    ResultViewer.prototype.componentDidMount = function () {
      var CodeMirror = require('codemirror');

      require('codemirror/addon/fold/foldgutter');

      require('codemirror/addon/fold/brace-fold');

      require('codemirror/addon/dialog/dialog');

      require('codemirror/addon/search/search');

      require('codemirror/addon/search/searchcursor');

      require('codemirror/addon/search/jump-to-line');

      require('codemirror/keymap/sublime');

      require('codemirror-graphql/results/mode');

      var Tooltip = this.props.ResultsTooltip;
      var ImagePreview = this.props.ImagePreview;

      if (Tooltip || ImagePreview) {
        require('codemirror-graphql/utils/info-addon');

        var tooltipDiv_1 = document.createElement('div');
        CodeMirror.registerHelper('info', 'graphql-results', function (token, _options, _cm, pos) {
          var infoElements = [];

          if (Tooltip) {
            infoElements.push( /*#__PURE__*/React__default['default'].createElement(Tooltip, {
              pos: pos
            }));
          }

          if (ImagePreview && typeof ImagePreview.shouldRender === 'function' && ImagePreview.shouldRender(token)) {
            infoElements.push( /*#__PURE__*/React__default['default'].createElement(ImagePreview, {
              token: token
            }));
          }

          if (!infoElements.length) {
            ReactDOM__default['default'].unmountComponentAtNode(tooltipDiv_1);
            return null;
          }

          ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement("div", null, infoElements), tooltipDiv_1);
          return tooltipDiv_1;
        });
      }

      this.viewer = CodeMirror(this._node, {
        lineWrapping: true,
        value: this.props.value || '',
        readOnly: true,
        theme: this.props.editorTheme || 'graphiql',
        mode: 'graphql-results',
        keyMap: 'sublime',
        foldGutter: {
          minFoldSize: 4
        },
        gutters: ['CodeMirror-foldgutter'],
        info: Boolean(this.props.ResultsTooltip || this.props.ImagePreview),
        extraKeys: commonKeys
      });
    };

    ResultViewer.prototype.shouldComponentUpdate = function (nextProps) {
      return this.props.value !== nextProps.value;
    };

    ResultViewer.prototype.componentDidUpdate = function () {
      if (this.viewer) {
        this.viewer.setValue(this.props.value || '');
      }
    };

    ResultViewer.prototype.componentWillUnmount = function () {
      this.viewer = null;
    };

    ResultViewer.prototype.render = function () {
      var _this = this;

      return /*#__PURE__*/React__default['default'].createElement("section", {
        className: "result-window",
        "aria-label": "Result Window",
        "aria-live": "polite",
        "aria-atomic": "true",
        ref: function ref(node) {
          if (node) {
            _this.props.registerRef(node);

            _this._node = node;
          }
        }
      });
    };

    ResultViewer.prototype.getCodeMirror = function () {
      return this.viewer;
    };

    ResultViewer.prototype.getClientHeight = function () {
      return this._node && this._node.clientHeight;
    };

    return ResultViewer;
  }(React__default['default'].Component);

  function TypeLink(props) {
    var onClick = props.onClick ? props.onClick : function () {
      return null;
    };
    return renderType(props.type, onClick);
  }

  function renderType(type, _onClick) {
    if (type instanceof GraphQLNonNull) {
      return /*#__PURE__*/React__default['default'].createElement("span", null, renderType(type.ofType, _onClick), '!');
    }

    if (type instanceof GraphQLList) {
      return /*#__PURE__*/React__default['default'].createElement("span", null, '[', renderType(type.ofType, _onClick), ']');
    }

    return /*#__PURE__*/React__default['default'].createElement("a", {
      className: "type-name",
      onClick: function onClick(event) {
        event.preventDefault();

        _onClick(type, event);
      },
      href: "#"
    }, type === null || type === void 0 ? void 0 : type.name);
  }

  var printDefault = function printDefault(ast) {
    if (!ast) {
      return '';
    }

    return print(ast);
  };

  function DefaultValue(_a) {
    var field = _a.field;

    if ('defaultValue' in field && field.defaultValue !== undefined) {
      return /*#__PURE__*/React__default['default'].createElement("span", null, ' = ', /*#__PURE__*/React__default['default'].createElement("span", {
        className: "arg-default-value"
      }, printDefault(astFromValue(field.defaultValue, field.type))));
    }

    return null;
  }

  function Argument(_a) {
    var arg = _a.arg,
        onClickType = _a.onClickType,
        showDefaultValue = _a.showDefaultValue;
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "arg"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "arg-name"
    }, arg.name), ': ', /*#__PURE__*/React__default['default'].createElement(TypeLink, {
      type: arg.type,
      onClick: onClickType
    }), showDefaultValue !== false && /*#__PURE__*/React__default['default'].createElement(DefaultValue, {
      field: arg
    }));
  }

  function Directive(_a) {
    var directive = _a.directive;
    return /*#__PURE__*/React__default['default'].createElement("span", {
      className: "doc-category-item",
      id: directive.name.value
    }, '@', directive.name.value);
  }

  var md = new markdownIt();
  function MarkdownContent(_a) {
    var markdown = _a.markdown,
        className = _a.className;

    if (!markdown) {
      return /*#__PURE__*/React__default['default'].createElement("div", null);
    }

    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: className,
      dangerouslySetInnerHTML: {
        __html: md.render(markdown)
      }
    });
  }

  function FieldDoc(_a) {
    var field = _a.field,
        onClickType = _a.onClickType;
    var argsDef;

    if (field && 'args' in field && field.args.length > 0) {
      argsDef = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-category"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-category-title"
      }, 'arguments'), field.args.map(function (arg) {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          key: arg.name,
          className: "doc-category-item"
        }, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Argument, {
          arg: arg,
          onClickType: onClickType
        })), /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
          className: "doc-value-description",
          markdown: arg.description
        }));
      }));
    }

    var directivesDef;

    if (field && field.astNode && field.astNode.directives && field.astNode.directives.length > 0) {
      directivesDef = /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-category"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-category-title"
      }, 'directives'), field.astNode.directives.map(function (directive) {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          key: directive.name.value,
          className: "doc-category-item"
        }, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Directive, {
          directive: directive
        })));
      }));
    }

    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "doc-type-description",
      markdown: (field === null || field === void 0 ? void 0 : field.description) || 'No Description'
    }), field && 'deprecationReason' in field && /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "doc-deprecation",
      markdown: field === null || field === void 0 ? void 0 : field.deprecationReason
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-title"
    }, 'type'), /*#__PURE__*/React__default['default'].createElement(TypeLink, {
      type: field === null || field === void 0 ? void 0 : field.type,
      onClick: onClickType
    })), argsDef, directivesDef);
  }

  function SchemaDoc(_a) {
    var schema = _a.schema,
        onClickType = _a.onClickType;
    var queryType = schema.getQueryType();
    var mutationType = schema.getMutationType && schema.getMutationType();
    var subscriptionType = schema.getSubscriptionType && schema.getSubscriptionType();
    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "doc-type-description",
      markdown: schema.description || 'A GraphQL schema provides a root type for each kind of operation.'
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-title"
    }, 'root types'), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "keyword"
    }, 'query'), ': ', /*#__PURE__*/React__default['default'].createElement(TypeLink, {
      type: queryType,
      onClick: onClickType
    })), mutationType && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "keyword"
    }, 'mutation'), ': ', /*#__PURE__*/React__default['default'].createElement(TypeLink, {
      type: mutationType,
      onClick: onClickType
    })), subscriptionType && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "keyword"
    }, 'subscription'), ': ', /*#__PURE__*/React__default['default'].createElement(TypeLink, {
      type: subscriptionType,
      onClick: onClickType
    }))));
  }

  function debounce(duration, fn) {
    var timeout;
    return function () {
      var _this = this;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (timeout) {
        window.clearTimeout(timeout);
      }

      timeout = window.setTimeout(function () {
        timeout = null;
        fn.apply(_this, args);
      }, duration);
    };
  }

  var __extends$7 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var SearchBox = function (_super) {
    __extends$7(SearchBox, _super);

    function SearchBox(props) {
      var _this = _super.call(this, props) || this;

      _this.handleChange = function (event) {
        var value = event.currentTarget.value;

        _this.setState({
          value: value
        });

        _this.debouncedOnSearch(value);
      };

      _this.handleClear = function () {
        _this.setState({
          value: ''
        });

        _this.props.onSearch('');
      };

      _this.state = {
        value: props.value || ''
      };
      _this.debouncedOnSearch = debounce(200, _this.props.onSearch);
      return _this;
    }

    SearchBox.prototype.render = function () {
      return /*#__PURE__*/React__default['default'].createElement("label", {
        className: "search-box"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "search-box-icon",
        "aria-hidden": "true"
      }, "\u26B2"), /*#__PURE__*/React__default['default'].createElement("input", {
        value: this.state.value,
        onChange: this.handleChange,
        type: "text",
        placeholder: this.props.placeholder,
        "aria-label": this.props.placeholder
      }), this.state.value && /*#__PURE__*/React__default['default'].createElement("button", {
        className: "search-box-clear",
        onClick: this.handleClear,
        "aria-label": "Clear search input"
      }, "\u2715"));
    };

    return SearchBox;
  }(React__default['default'].Component);

  var __extends$6 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var SearchResults = function (_super) {
    __extends$6(SearchResults, _super);

    function SearchResults() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    SearchResults.prototype.shouldComponentUpdate = function (nextProps) {
      return this.props.schema !== nextProps.schema || this.props.searchValue !== nextProps.searchValue;
    };

    SearchResults.prototype.render = function () {
      var searchValue = this.props.searchValue;
      var withinType = this.props.withinType;
      var schema = this.props.schema;
      var onClickType = this.props.onClickType;
      var onClickField = this.props.onClickField;
      var matchedWithin = [];
      var matchedTypes = [];
      var matchedFields = [];
      var typeMap = schema.getTypeMap();
      var typeNames = Object.keys(typeMap);

      if (withinType) {
        typeNames = typeNames.filter(function (n) {
          return n !== withinType.name;
        });
        typeNames.unshift(withinType.name);
      }

      var _loop_1 = function _loop_1(typeName) {
        if (matchedWithin.length + matchedTypes.length + matchedFields.length >= 100) {
          return "break";
        }

        var type = typeMap[typeName];

        if (withinType !== type && isMatch(typeName, searchValue)) {
          matchedTypes.push( /*#__PURE__*/React__default['default'].createElement("div", {
            className: "doc-category-item",
            key: typeName
          }, /*#__PURE__*/React__default['default'].createElement(TypeLink, {
            type: type,
            onClick: onClickType
          })));
        }

        if (type && 'getFields' in type) {
          var fields_1 = type.getFields();
          Object.keys(fields_1).forEach(function (fieldName) {
            var field = fields_1[fieldName];
            var matchingArgs;

            if (!isMatch(fieldName, searchValue)) {
              if ('args' in field && field.args.length) {
                matchingArgs = field.args.filter(function (arg) {
                  return isMatch(arg.name, searchValue);
                });

                if (matchingArgs.length === 0) {
                  return;
                }
              } else {
                return;
              }
            }

            var match = /*#__PURE__*/React__default['default'].createElement("div", {
              className: "doc-category-item",
              key: typeName + '.' + fieldName
            }, withinType !== type && [/*#__PURE__*/React__default['default'].createElement(TypeLink, {
              key: "type",
              type: type,
              onClick: onClickType
            }), '.'], /*#__PURE__*/React__default['default'].createElement("a", {
              className: "field-name",
              onClick: function onClick(event) {
                return onClickField(field, type, event);
              }
            }, field.name), matchingArgs && ['(', /*#__PURE__*/React__default['default'].createElement("span", {
              key: "args"
            }, matchingArgs.map(function (arg) {
              return /*#__PURE__*/React__default['default'].createElement(Argument, {
                key: arg.name,
                arg: arg,
                onClickType: onClickType,
                showDefaultValue: false
              });
            })), ')']);

            if (withinType === type) {
              matchedWithin.push(match);
            } else {
              matchedFields.push(match);
            }
          });
        }
      };

      for (var _i = 0, typeNames_1 = typeNames; _i < typeNames_1.length; _i++) {
        var typeName = typeNames_1[_i];

        var state_1 = _loop_1(typeName);

        if (state_1 === "break") break;
      }

      if (matchedWithin.length + matchedTypes.length + matchedFields.length === 0) {
        return /*#__PURE__*/React__default['default'].createElement("span", {
          className: "doc-alert-text"
        }, 'No results found.');
      }

      if (withinType && matchedTypes.length + matchedFields.length > 0) {
        return /*#__PURE__*/React__default['default'].createElement("div", null, matchedWithin, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category-title"
        }, 'other results'), matchedTypes, matchedFields));
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-search-items"
      }, matchedWithin, matchedTypes, matchedFields);
    };

    return SearchResults;
  }(React__default['default'].Component);

  function isMatch(sourceText, searchValue) {
    try {
      var escaped = searchValue.replace(/[^_0-9A-Za-z]/g, function (ch) {
        return '\\' + ch;
      });
      return sourceText.search(new RegExp(escaped, 'i')) !== -1;
    } catch (e) {
      return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    }
  }

  var __extends$5 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var TypeDoc = function (_super) {
    __extends$5(TypeDoc, _super);

    function TypeDoc(props) {
      var _this = _super.call(this, props) || this;

      _this.handleShowDeprecated = function () {
        return _this.setState({
          showDeprecated: true
        });
      };

      _this.state = {
        showDeprecated: false
      };
      return _this;
    }

    TypeDoc.prototype.shouldComponentUpdate = function (nextProps, nextState) {
      return this.props.type !== nextProps.type || this.props.schema !== nextProps.schema || this.state.showDeprecated !== nextState.showDeprecated;
    };

    TypeDoc.prototype.render = function () {
      var schema = this.props.schema;
      var type = this.props.type;
      var onClickType = this.props.onClickType;
      var onClickField = this.props.onClickField;
      var typesTitle = null;
      var types = [];

      if (type instanceof GraphQLUnionType) {
        typesTitle = 'possible types';
        types = schema.getPossibleTypes(type);
      } else if (type instanceof GraphQLInterfaceType) {
        typesTitle = 'implementations';
        types = schema.getPossibleTypes(type);
      } else if (type instanceof GraphQLObjectType) {
        typesTitle = 'implements';
        types = type.getInterfaces();
      }

      var typesDef;

      if (types && types.length > 0) {
        typesDef = /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category-title"
        }, typesTitle), types.map(function (subtype) {
          return /*#__PURE__*/React__default['default'].createElement("div", {
            key: subtype.name,
            className: "doc-category-item"
          }, /*#__PURE__*/React__default['default'].createElement(TypeLink, {
            type: subtype,
            onClick: onClickType
          }));
        }));
      }

      var fieldsDef;
      var deprecatedFieldsDef;

      if (type && 'getFields' in type) {
        var fieldMap_1 = type.getFields();
        var fields = Object.keys(fieldMap_1).map(function (name) {
          return fieldMap_1[name];
        });
        fieldsDef = /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category-title"
        }, 'fields'), fields.filter(function (field) {
          return 'isDeprecated' in field ? !field.isDeprecated : true;
        }).map(function (field) {
          return /*#__PURE__*/React__default['default'].createElement(Field, {
            key: field.name,
            type: type,
            field: field,
            onClickType: onClickType,
            onClickField: onClickField
          });
        }));
        var deprecatedFields = fields.filter(function (field) {
          return 'isDeprecated' in field && field.isDeprecated;
        });

        if (deprecatedFields.length > 0) {
          deprecatedFieldsDef = /*#__PURE__*/React__default['default'].createElement("div", {
            className: "doc-category"
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "doc-category-title"
          }, 'deprecated fields'), !this.state.showDeprecated ? /*#__PURE__*/React__default['default'].createElement("button", {
            className: "show-btn",
            onClick: this.handleShowDeprecated
          }, 'Show deprecated fields...') : deprecatedFields.map(function (field) {
            return /*#__PURE__*/React__default['default'].createElement(Field, {
              key: field.name,
              type: type,
              field: field,
              onClickType: onClickType,
              onClickField: onClickField
            });
          }));
        }
      }

      var valuesDef;
      var deprecatedValuesDef;

      if (type instanceof GraphQLEnumType) {
        var values = type.getValues();
        valuesDef = /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "doc-category-title"
        }, 'values'), values.filter(function (value) {
          return !value.isDeprecated;
        }).map(function (value) {
          return /*#__PURE__*/React__default['default'].createElement(EnumValue, {
            key: value.name,
            value: value
          });
        }));
        var deprecatedValues = values.filter(function (value) {
          return value.isDeprecated;
        });

        if (deprecatedValues.length > 0) {
          deprecatedValuesDef = /*#__PURE__*/React__default['default'].createElement("div", {
            className: "doc-category"
          }, /*#__PURE__*/React__default['default'].createElement("div", {
            className: "doc-category-title"
          }, 'deprecated values'), !this.state.showDeprecated ? /*#__PURE__*/React__default['default'].createElement("button", {
            className: "show-btn",
            onClick: this.handleShowDeprecated
          }, 'Show deprecated values...') : deprecatedValues.map(function (value) {
            return /*#__PURE__*/React__default['default'].createElement(EnumValue, {
              key: value.name,
              value: value
            });
          }));
        }
      }

      return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
        className: "doc-type-description",
        markdown: 'description' in type && type.description || 'No Description'
      }), type instanceof GraphQLObjectType && typesDef, fieldsDef, deprecatedFieldsDef, valuesDef, deprecatedValuesDef, !(type instanceof GraphQLObjectType) && typesDef);
    };

    return TypeDoc;
  }(React__default['default'].Component);

  function Field(_a) {
    var type = _a.type,
        field = _a.field,
        onClickType = _a.onClickType,
        onClickField = _a.onClickField;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React__default['default'].createElement("a", {
      className: "field-name",
      onClick: function onClick(event) {
        return onClickField(field, type, event);
      }
    }, field.name), 'args' in field && field.args && field.args.length > 0 && ['(', /*#__PURE__*/React__default['default'].createElement("span", {
      key: "args"
    }, field.args.map(function (arg) {
      return /*#__PURE__*/React__default['default'].createElement(Argument, {
        key: arg.name,
        arg: arg,
        onClickType: onClickType
      });
    })), ')'], ': ', /*#__PURE__*/React__default['default'].createElement(TypeLink, {
      type: field.type,
      onClick: onClickType
    }), /*#__PURE__*/React__default['default'].createElement(DefaultValue, {
      field: field
    }), field.description && /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "field-short-description",
      markdown: field.description
    }), 'deprecationReason' in field && field.deprecationReason && /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "doc-deprecation",
      markdown: field.deprecationReason
    }));
  }

  function EnumValue(_a) {
    var value = _a.value;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "doc-category-item"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "enum-value"
    }, value.name), /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "doc-value-description",
      markdown: value.description
    }), value.deprecationReason && /*#__PURE__*/React__default['default'].createElement(MarkdownContent, {
      className: "doc-deprecation",
      markdown: value.deprecationReason
    }));
  }

  var __extends$4 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign$4 = undefined && undefined.__assign || function () {
    __assign$4 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$4.apply(this, arguments);
  };
  var initialNav = {
    name: 'Schema',
    title: 'Documentation Explorer'
  };

  var DocExplorer = function (_super) {
    __extends$4(DocExplorer, _super);

    function DocExplorer(props) {
      var _this = _super.call(this, props) || this;

      _this.handleNavBackClick = function () {
        if (_this.state.navStack.length > 1) {
          _this.setState({
            navStack: _this.state.navStack.slice(0, -1)
          });
        }
      };

      _this.handleClickType = function (type) {
        _this.showDoc(type);
      };

      _this.handleClickField = function (field) {
        _this.showDoc(field);
      };

      _this.handleSearch = function (value) {
        _this.showSearch(value);
      };

      _this.state = {
        navStack: [initialNav]
      };
      return _this;
    }

    DocExplorer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
      return this.props.schema !== nextProps.schema || this.state.navStack !== nextState.navStack;
    };

    DocExplorer.prototype.render = function () {
      var schema = this.props.schema;
      var navStack = this.state.navStack;
      var navItem = navStack[navStack.length - 1];
      var content;

      if (schema === undefined) {
        content = /*#__PURE__*/React__default['default'].createElement("div", {
          className: "spinner-container"
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "spinner"
        }));
      } else if (!schema) {
        content = /*#__PURE__*/React__default['default'].createElement("div", {
          className: "error-container"
        }, 'No Schema Available');
      } else if (navItem.search) {
        content = /*#__PURE__*/React__default['default'].createElement(SearchResults, {
          searchValue: navItem.search,
          withinType: navItem.def,
          schema: schema,
          onClickType: this.handleClickType,
          onClickField: this.handleClickField
        });
      } else if (navStack.length === 1) {
        content = /*#__PURE__*/React__default['default'].createElement(SchemaDoc, {
          schema: schema,
          onClickType: this.handleClickType
        });
      } else if (isType(navItem.def)) {
        content = /*#__PURE__*/React__default['default'].createElement(TypeDoc, {
          schema: schema,
          type: navItem.def,
          onClickType: this.handleClickType,
          onClickField: this.handleClickField
        });
      } else {
        content = /*#__PURE__*/React__default['default'].createElement(FieldDoc, {
          field: navItem.def,
          onClickType: this.handleClickType
        });
      }

      var shouldSearchBoxAppear = navStack.length === 1 || isType(navItem.def) && 'getFields' in navItem.def;
      var prevName;

      if (navStack.length > 1) {
        prevName = navStack[navStack.length - 2].name;
      }

      return /*#__PURE__*/React__default['default'].createElement("section", {
        className: "doc-explorer",
        key: navItem.name,
        "aria-label": "Documentation Explorer"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-explorer-title-bar"
      }, prevName && /*#__PURE__*/React__default['default'].createElement("button", {
        className: "doc-explorer-back",
        onClick: this.handleNavBackClick,
        "aria-label": "Go back to " + prevName
      }, prevName), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-explorer-title"
      }, navItem.title || navItem.name), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-explorer-rhs"
      }, this.props.children)), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-explorer-contents"
      }, shouldSearchBoxAppear && /*#__PURE__*/React__default['default'].createElement(SearchBox, {
        value: navItem.search,
        placeholder: "Search " + navItem.name + "...",
        onSearch: this.handleSearch
      }), content));
    };

    DocExplorer.prototype.showDoc = function (typeOrField) {
      var navStack = this.state.navStack;
      var topNav = navStack[navStack.length - 1];

      if (topNav.def !== typeOrField) {
        this.setState({
          navStack: navStack.concat([{
            name: typeOrField.name,
            def: typeOrField
          }])
        });
      }
    };

    DocExplorer.prototype.showDocForReference = function (reference) {
      if (reference && reference.kind === 'Type') {
        this.showDoc(reference.type);
      } else if (reference.kind === 'Field') {
        this.showDoc(reference.field);
      } else if (reference.kind === 'Argument' && reference.field) {
        this.showDoc(reference.field);
      } else if (reference.kind === 'EnumValue' && reference.type) {
        this.showDoc(reference.type);
      }
    };

    DocExplorer.prototype.showSearch = function (search) {
      var navStack = this.state.navStack.slice();
      var topNav = navStack[navStack.length - 1];
      navStack[navStack.length - 1] = __assign$4(__assign$4({}, topNav), {
        search: search
      });
      this.setState({
        navStack: navStack
      });
    };

    DocExplorer.prototype.reset = function () {
      this.setState({
        navStack: [initialNav]
      });
    };

    return DocExplorer;
  }(React__default['default'].Component);

  var __spreadArrays$3 = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  };

  var QueryStore = function () {
    function QueryStore(key, storage, maxSize) {
      if (maxSize === void 0) {
        maxSize = null;
      }

      this.key = key;
      this.storage = storage;
      this.maxSize = maxSize;
      this.items = this.fetchAll();
    }

    Object.defineProperty(QueryStore.prototype, "length", {
      get: function get() {
        return this.items.length;
      },
      enumerable: false,
      configurable: true
    });

    QueryStore.prototype.contains = function (item) {
      return this.items.some(function (x) {
        return x.query === item.query && x.variables === item.variables && x.headers === item.headers && x.operationName === item.operationName;
      });
    };

    QueryStore.prototype.edit = function (item) {
      var itemIndex = this.items.findIndex(function (x) {
        return x.query === item.query && x.variables === item.variables && x.headers === item.headers && x.operationName === item.operationName;
      });

      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1, item);
        this.save();
      }
    };

    QueryStore.prototype.delete = function (item) {
      var itemIndex = this.items.findIndex(function (x) {
        return x.query === item.query && x.variables === item.variables && x.headers === item.headers && x.operationName === item.operationName;
      });

      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
        this.save();
      }
    };

    QueryStore.prototype.fetchRecent = function () {
      return this.items[this.items.length - 1];
    };

    QueryStore.prototype.fetchAll = function () {
      var raw = this.storage.get(this.key);

      if (raw) {
        return JSON.parse(raw)[this.key];
      }

      return [];
    };

    QueryStore.prototype.push = function (item) {
      var _a;

      var items = __spreadArrays$3(this.items, [item]);

      if (this.maxSize && items.length > this.maxSize) {
        items.shift();
      }

      for (var attempts = 0; attempts < 5; attempts++) {
        var response = this.storage.set(this.key, JSON.stringify((_a = {}, _a[this.key] = items, _a)));

        if (!response || !response.error) {
          this.items = items;
        } else if (response.isQuotaError && this.maxSize) {
          items.shift();
        } else {
          return;
        }
      }
    };

    QueryStore.prototype.save = function () {
      var _a;

      this.storage.set(this.key, JSON.stringify((_a = {}, _a[this.key] = this.items, _a)));
    };

    return QueryStore;
  }();

  var __extends$3 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var HistoryQuery = function (_super) {
    __extends$3(HistoryQuery, _super);

    function HistoryQuery(props) {
      var _this = _super.call(this, props) || this;

      _this.state = {
        editable: false
      };
      _this.editField = null;
      return _this;
    }

    HistoryQuery.prototype.render = function () {
      var _this = this;

      var _a;

      var displayName = this.props.label || this.props.operationName || ((_a = this.props.query) === null || _a === void 0 ? void 0 : _a.split('\n').filter(function (line) {
        return line.indexOf('#') !== 0;
      }).join(''));
      var starIcon = this.props.favorite ? "\u2605" : "\u2606";
      return /*#__PURE__*/React__default['default'].createElement("li", {
        className: this.state.editable ? 'editable' : undefined
      }, this.state.editable ? /*#__PURE__*/React__default['default'].createElement("input", {
        type: "text",
        defaultValue: this.props.label,
        ref: function ref(c) {
          _this.editField = c;
        },
        onBlur: this.handleFieldBlur.bind(this),
        onKeyDown: this.handleFieldKeyDown.bind(this),
        placeholder: "Type a label"
      }) : /*#__PURE__*/React__default['default'].createElement("button", {
        className: "history-label",
        onClick: this.handleClick.bind(this)
      }, displayName), /*#__PURE__*/React__default['default'].createElement("button", {
        onClick: this.handleEditClick.bind(this),
        "aria-label": "Edit label"
      }, "\u270E"), /*#__PURE__*/React__default['default'].createElement("button", {
        className: this.props.favorite ? 'favorited' : undefined,
        onClick: this.handleStarClick.bind(this),
        "aria-label": this.props.favorite ? 'Remove favorite' : 'Add favorite'
      }, starIcon));
    };

    HistoryQuery.prototype.handleClick = function () {
      this.props.onSelect(this.props.query, this.props.variables, this.props.headers, this.props.operationName, this.props.label);
    };

    HistoryQuery.prototype.handleStarClick = function (e) {
      e.stopPropagation();
      this.props.handleToggleFavorite(this.props.query, this.props.variables, this.props.headers, this.props.operationName, this.props.label, this.props.favorite);
    };

    HistoryQuery.prototype.handleFieldBlur = function (e) {
      e.stopPropagation();
      this.setState({
        editable: false
      });
      this.props.handleEditLabel(this.props.query, this.props.variables, this.props.headers, this.props.operationName, e.target.value, this.props.favorite);
    };

    HistoryQuery.prototype.handleFieldKeyDown = function (e) {
      if (e.keyCode === 13) {
        e.stopPropagation();
        this.setState({
          editable: false
        });
        this.props.handleEditLabel(this.props.query, this.props.variables, this.props.headers, this.props.operationName, e.currentTarget.value, this.props.favorite);
      }
    };

    HistoryQuery.prototype.handleEditClick = function (e) {
      var _this = this;

      e.stopPropagation();
      this.setState({
        editable: true
      }, function () {
        if (_this.editField) {
          _this.editField.focus();
        }
      });
    };

    return HistoryQuery;
  }(React__default['default'].Component);

  var __extends$2 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign$3 = undefined && undefined.__assign || function () {
    __assign$3 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$3.apply(this, arguments);
  };

  var __spreadArrays$2 = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  };
  var MAX_QUERY_SIZE = 100000;
  var MAX_HISTORY_LENGTH = 20;

  var shouldSaveQuery = function shouldSaveQuery(query, variables, headers, lastQuerySaved) {
    if (!query) {
      return false;
    }

    try {
      parse$1(query);
    } catch (e) {
      return false;
    }

    if (query.length > MAX_QUERY_SIZE) {
      return false;
    }

    if (!lastQuerySaved) {
      return true;
    }

    if (JSON.stringify(query) === JSON.stringify(lastQuerySaved.query)) {
      if (JSON.stringify(variables) === JSON.stringify(lastQuerySaved.variables)) {
        if (JSON.stringify(headers) === JSON.stringify(lastQuerySaved.headers)) {
          return false;
        }

        if (headers && !lastQuerySaved.headers) {
          return false;
        }
      }

      if (variables && !lastQuerySaved.variables) {
        return false;
      }
    }

    return true;
  };

  var QueryHistory = function (_super) {
    __extends$2(QueryHistory, _super);

    function QueryHistory(props) {
      var _this = _super.call(this, props) || this;

      _this.updateHistory = function (query, variables, headers, operationName) {
        if (shouldSaveQuery(query, variables, headers, _this.historyStore.fetchRecent())) {
          _this.historyStore.push({
            query: query,
            variables: variables,
            headers: headers,
            operationName: operationName
          });

          var historyQueries = _this.historyStore.items;
          var favoriteQueries = _this.favoriteStore.items;
          var queries = historyQueries.concat(favoriteQueries);

          _this.setState({
            queries: queries
          });
        }
      };

      _this.toggleFavorite = function (query, variables, headers, operationName, label, favorite) {
        var item = {
          query: query,
          variables: variables,
          headers: headers,
          operationName: operationName,
          label: label
        };

        if (!_this.favoriteStore.contains(item)) {
          item.favorite = true;

          _this.favoriteStore.push(item);
        } else if (favorite) {
          item.favorite = false;

          _this.favoriteStore.delete(item);
        }

        _this.setState({
          queries: __spreadArrays$2(_this.historyStore.items, _this.favoriteStore.items)
        });
      };

      _this.editLabel = function (query, variables, headers, operationName, label, favorite) {
        var item = {
          query: query,
          variables: variables,
          headers: headers,
          operationName: operationName,
          label: label
        };

        if (favorite) {
          _this.favoriteStore.edit(__assign$3(__assign$3({}, item), {
            favorite: favorite
          }));
        } else {
          _this.historyStore.edit(item);
        }

        _this.setState({
          queries: __spreadArrays$2(_this.historyStore.items, _this.favoriteStore.items)
        });
      };

      _this.historyStore = new QueryStore('queries', props.storage, MAX_HISTORY_LENGTH);
      _this.favoriteStore = new QueryStore('favorites', props.storage, null);

      var historyQueries = _this.historyStore.fetchAll();

      var favoriteQueries = _this.favoriteStore.fetchAll();

      var queries = historyQueries.concat(favoriteQueries);
      _this.state = {
        queries: queries
      };
      return _this;
    }

    QueryHistory.prototype.render = function () {
      var _this = this;

      var queries = this.state.queries.slice().reverse();
      var queryNodes = queries.map(function (query, i) {
        return /*#__PURE__*/React__default['default'].createElement(HistoryQuery, __assign$3({
          handleEditLabel: _this.editLabel,
          handleToggleFavorite: _this.toggleFavorite,
          key: i + ":" + (query.label || query.query),
          onSelect: _this.props.onSelectQuery
        }, query));
      });
      return /*#__PURE__*/React__default['default'].createElement("section", {
        "aria-label": "History"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "history-title-bar"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "history-title"
      }, 'History'), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "doc-explorer-rhs"
      }, this.props.children)), /*#__PURE__*/React__default['default'].createElement("ul", {
        className: "history-contents"
      }, queryNodes));
    };

    return QueryHistory;
  }(React__default['default'].Component);

  var CodeMirrorSizer = function () {
    function CodeMirrorSizer() {
      this.sizes = [];
    }

    CodeMirrorSizer.prototype.updateSizes = function (components) {
      var _this = this;

      components.forEach(function (component, i) {
        if (component) {
          var size = component.getClientHeight();

          if (i <= _this.sizes.length && size !== _this.sizes[i]) {
            var editor = component.getCodeMirror();

            if (editor) {
              editor.setSize(null, null);
            }
          }

          _this.sizes[i] = size;
        }
      });
    };

    return CodeMirrorSizer;
  }();

  function isQuotaError(storage, e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage.length !== 0;
  }

  var StorageAPI = function () {
    function StorageAPI(storage) {
      this.storage = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    }

    StorageAPI.prototype.get = function (name) {
      if (this.storage) {
        var value = this.storage.getItem('graphiql:' + name);

        if (value === 'null' || value === 'undefined') {
          this.storage.removeItem('graphiql:' + name);
          return null;
        }

        if (value) {
          return value;
        }
      }

      return null;
    };

    StorageAPI.prototype.set = function (name, value) {
      var quotaError = false;
      var error = null;

      if (this.storage) {
        var key = "graphiql:" + name;

        if (value) {
          try {
            this.storage.setItem(key, value);
          } catch (e) {
            error = e;
            quotaError = isQuotaError(this.storage, e);
          }
        } else {
          this.storage.removeItem(key);
        }
      }

      return {
        isQuotaError: quotaError,
        error: error
      };
    };

    return StorageAPI;
  }();

  function getOperationFacts(schema, documentStr) {
    if (!documentStr) {
      return;
    }

    var documentAST;

    try {
      documentAST = parse$1(documentStr, {
        experimentalFragmentVariables: true
      });
    } catch (_a) {
      return;
    }

    var variableToType = schema ? collectVariables(schema, documentAST) : undefined;
    var operations = [];
    visit(documentAST, {
      OperationDefinition: function OperationDefinition(node) {
        operations.push(node);
      }
    });
    return {
      variableToType: variableToType,
      operations: operations,
      documentAST: documentAST
    };
  }
  function collectVariables(schema, documentAST) {
    var variableToType = Object.create(null);
    documentAST.definitions.forEach(function (definition) {
      if (definition.kind === 'OperationDefinition') {
        var variableDefinitions = definition.variableDefinitions;

        if (variableDefinitions) {
          variableDefinitions.forEach(function (_a) {
            var variable = _a.variable,
                type = _a.type;
            var inputType = typeFromAST(schema, type);

            if (inputType) {
              variableToType[variable.name.value] = inputType;
            }
          });
        }
      }
    });
    return variableToType;
  }

  function getSelectedOperationName(prevOperations, prevSelectedOperationName, operations) {
    if (!operations || operations.length < 1) {
      return;
    }

    var names = operations.map(function (op) {
      return op.name && op.name.value;
    });

    if (prevSelectedOperationName && names.indexOf(prevSelectedOperationName) !== -1) {
      return prevSelectedOperationName;
    }

    if (prevSelectedOperationName && prevOperations) {
      var prevNames = prevOperations.map(function (op) {
        return op.name && op.name.value;
      });
      var prevIndex = prevNames.indexOf(prevSelectedOperationName);

      if (prevIndex !== -1 && prevIndex < names.length) {
        return names[prevIndex];
      }
    }

    return names[0];
  }

  function find(list, predicate) {
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i])) {
        return list[i];
      }
    }
  }

  function fillLeafs(schema, docString, getDefaultFieldNames) {
    var insertions = [];

    if (!schema || !docString) {
      return {
        insertions: insertions,
        result: docString
      };
    }

    var ast;

    try {
      ast = parse$1(docString);
    } catch (error) {
      return {
        insertions: insertions,
        result: docString
      };
    }

    var fieldNameFn = getDefaultFieldNames || defaultGetDefaultFieldNames$1;
    var typeInfo = new TypeInfo(schema);
    visit(ast, {
      leave: function leave(node) {
        typeInfo.leave(node);
      },
      enter: function enter(node) {
        typeInfo.enter(node);

        if (node.kind === 'Field' && !node.selectionSet) {
          var fieldType = typeInfo.getType();
          var selectionSet = buildSelectionSet(isFieldType(fieldType), fieldNameFn);

          if (selectionSet && node.loc) {
            var indent = getIndentation(docString, node.loc.start);
            insertions.push({
              index: node.loc.end,
              string: ' ' + print(selectionSet).replace(/\n/g, '\n' + indent)
            });
          }
        }
      }
    });
    return {
      insertions: insertions,
      result: withInsertions(docString, insertions)
    };
  }

  function defaultGetDefaultFieldNames$1(type) {
    if (!('getFields' in type)) {
      return [];
    }

    var fields = type.getFields();

    if (fields.id) {
      return ['id'];
    }

    if (fields.edges) {
      return ['edges'];
    }

    if (fields.node) {
      return ['node'];
    }

    var leafFieldNames = [];
    Object.keys(fields).forEach(function (fieldName) {
      if (isLeafType(fields[fieldName].type)) {
        leafFieldNames.push(fieldName);
      }
    });
    return leafFieldNames;
  }

  function buildSelectionSet(type, getDefaultFieldNames) {
    var namedType = getNamedType(type);

    if (!type || isLeafType(type)) {
      return;
    }

    var fieldNames = getDefaultFieldNames(namedType);

    if (!Array.isArray(fieldNames) || fieldNames.length === 0 || !('getFields' in namedType)) {
      return;
    }

    return {
      kind: 'SelectionSet',
      selections: fieldNames.map(function (fieldName) {
        var fieldDef = namedType.getFields()[fieldName];
        var fieldType = fieldDef ? fieldDef.type : null;
        return {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: fieldName
          },
          selectionSet: buildSelectionSet(fieldType, getDefaultFieldNames)
        };
      })
    };
  }

  function withInsertions(initial, insertions) {
    if (insertions.length === 0) {
      return initial;
    }

    var edited = '';
    var prevIndex = 0;
    insertions.forEach(function (_a) {
      var index = _a.index,
          string = _a.string;
      edited += initial.slice(prevIndex, index) + string;
      prevIndex = index;
    });
    edited += initial.slice(prevIndex);
    return edited;
  }

  function getIndentation(str, index) {
    var indentStart = index;
    var indentEnd = index;

    while (indentStart) {
      var c = str.charCodeAt(indentStart - 1);

      if (c === 10 || c === 13 || c === 0x2028 || c === 0x2029) {
        break;
      }

      indentStart--;

      if (c !== 9 && c !== 11 && c !== 12 && c !== 32 && c !== 160) {
        indentEnd = indentStart;
      }
    }

    return str.substring(indentStart, indentEnd);
  }

  function isFieldType(fieldType) {
    if (fieldType) {
      return fieldType;
    }
  }

  function getLeft(initialElem) {
    var pt = 0;
    var elem = initialElem;

    while (elem.offsetParent) {
      pt += elem.offsetLeft;
      elem = elem.offsetParent;
    }

    return pt;
  }
  function getTop(initialElem) {
    var pt = 0;
    var elem = initialElem;

    while (elem.offsetParent) {
      pt += elem.offsetTop;
      elem = elem.offsetParent;
    }

    return pt;
  }

  var __assign$2 = undefined && undefined.__assign || function () {
    __assign$2 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$2.apply(this, arguments);
  };

  var __spreadArrays$1 = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  };
  function uniqueBy(array, iteratee) {
    var FilteredMap = new Map();
    var result = [];

    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
      var item = array_1[_i];

      if (item.kind === 'Field') {
        var uniqueValue = iteratee(item);
        var existing = FilteredMap.get(uniqueValue);

        if (item.directives && item.directives.length) {
          var itemClone = __assign$2({}, item);

          result.push(itemClone);
        } else if (existing && existing.selectionSet && item.selectionSet) {
          existing.selectionSet.selections = __spreadArrays$1(existing.selectionSet.selections, item.selectionSet.selections);
        } else if (!existing) {
          var itemClone = __assign$2({}, item);

          FilteredMap.set(uniqueValue, itemClone);
          result.push(itemClone);
        }
      } else {
        result.push(item);
      }
    }

    return result;
  }
  function inlineRelevantFragmentSpreads(fragmentDefinitions, selections, selectionSetType) {
    var _a;

    var selectionSetTypeName = selectionSetType ? getNamedType(selectionSetType).name : null;
    var outputSelections = [];
    var seenSpreads = [];

    for (var _i = 0, selections_1 = selections; _i < selections_1.length; _i++) {
      var selection = selections_1[_i];

      if (selection.kind === 'FragmentSpread') {
        var fragmentName = selection.name.value;

        if (!selection.directives || selection.directives.length === 0) {
          if (seenSpreads.indexOf(fragmentName) >= 0) {
            continue;
          } else {
            seenSpreads.push(fragmentName);
          }
        }

        var fragmentDefinition = fragmentDefinitions[selection.name.value];

        if (fragmentDefinition) {
          var typeCondition = fragmentDefinition.typeCondition,
              directives = fragmentDefinition.directives,
              selectionSet = fragmentDefinition.selectionSet;
          selection = {
            kind: 'InlineFragment',
            typeCondition: typeCondition,
            directives: directives,
            selectionSet: selectionSet
          };
        }
      }

      if (selection.kind === 'InlineFragment' && (!selection.directives || ((_a = selection.directives) === null || _a === void 0 ? void 0 : _a.length) === 0)) {
        var fragmentTypeName = selection.typeCondition ? selection.typeCondition.name.value : null;

        if (!fragmentTypeName || fragmentTypeName === selectionSetTypeName) {
          outputSelections.push.apply(outputSelections, inlineRelevantFragmentSpreads(fragmentDefinitions, selection.selectionSet.selections, selectionSetType));
          continue;
        }
      }

      outputSelections.push(selection);
    }

    return outputSelections;
  }
  function mergeAST(documentAST, schema) {
    var typeInfo = schema ? new TypeInfo(schema) : null;
    var fragmentDefinitions = Object.create(null);

    for (var _i = 0, _a = documentAST.definitions; _i < _a.length; _i++) {
      var definition = _a[_i];

      if (definition.kind === 'FragmentDefinition') {
        fragmentDefinitions[definition.name.value] = definition;
      }
    }

    var visitors = {
      SelectionSet: function SelectionSet(node) {
        var selectionSetType = typeInfo ? typeInfo.getParentType() : null;
        var selections = node.selections;
        selections = inlineRelevantFragmentSpreads(fragmentDefinitions, selections, selectionSetType);
        selections = uniqueBy(selections, function (selection) {
          return selection.alias ? selection.alias.value : selection.name.value;
        });
        return __assign$2(__assign$2({}, node), {
          selections: selections
        });
      },
      FragmentDefinition: function FragmentDefinition() {
        return null;
      }
    };
    return visit(documentAST, typeInfo ? visitWithTypeInfo(typeInfo, visitors) : visitors);
  }

  var introspectionQuery = getIntrospectionQuery();
  var staticName = 'IntrospectionQuery';
  var introspectionQueryName = staticName;
  var introspectionQuerySansSubscriptions = introspectionQuery.replace('subscriptionType { name }', '');

  function merge(a, b, k) {
  	if (typeof a === 'object' && typeof b === 'object')  {
  		if (Array.isArray(a) && Array.isArray(b)) {
  			for (k=0; k < b.length; k++) {
  				a[k] = merge(a[k], b[k]);
  			}
  		} else {
  			for (k in b) {
  				a[k] = merge(a[k], b[k]);
  			}
  		}
  		return a;
  	}
  	return b;
  }

  function dset(obj, keys, val) {
  	keys.split && (keys=keys.split('.'));
  	var i=0, l=keys.length, t=obj, x, k;
  	for (; i < l;) {
  		k = keys[i++];
  		if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
  		t = t[k] = (i === l) ? merge(t[k],val) : (typeof(x=t[k])===typeof keys) ? x : (keys[i]*0 !== 0 || !!~(''+keys[i]).indexOf('.')) ? {} : [];
  	}
  }

  var __extends$1 = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign$1 = undefined && undefined.__assign || function () {
    __assign$1 = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign$1.apply(this, arguments);
  };

  var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

  var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };

  var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };

  var __asyncValues = undefined && undefined.__asyncValues || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);

    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }

    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({
          value: v,
          done: d
        });
      }, reject);
    }
  };

  var __spreadArrays = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  };
  var DEFAULT_DOC_EXPLORER_WIDTH = 350;
  var majorVersion = parseInt(React__default['default'].version.slice(0, 2), 10);

  if (majorVersion < 16) {
    throw Error(['GraphiQL 0.18.0 and after is not compatible with React 15 or below.', 'If you are using a CDN source (jsdelivr, unpkg, etc), follow this example:', 'https://github.com/graphql/graphiql/blob/master/examples/graphiql-cdn/index.html#L49'].join('\n'));
  }

  var GraphiQL = function (_super) {
    __extends$1(GraphiQL, _super);

    function GraphiQL(props) {
      var _a, _b;

      var _this = _super.call(this, props) || this;

      _this._editorQueryID = 0;

      _this.safeSetState = function (nextState, callback) {
        _this.componentIsMounted && _this.setState(nextState, callback);
      };

      _this.handleClickReference = function (reference) {
        _this.setState({
          docExplorerOpen: true
        }, function () {
          if (_this.docExplorerComponent) {
            _this.docExplorerComponent.showDocForReference(reference);
          }
        });

        _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
      };

      _this.handleRunQuery = function (selectedOperationName) {
        return __awaiter(_this, void 0, void 0, function () {
          var queryID, editedQuery, variables, headers, shouldPersistHeaders, operationName, fullResponse_1, subscription, error_1;

          var _this = this;

          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                this._editorQueryID++;
                queryID = this._editorQueryID;
                editedQuery = this.autoCompleteLeafs() || this.state.query;
                variables = this.state.variables;
                headers = this.state.headers;
                shouldPersistHeaders = this.state.shouldPersistHeaders;
                operationName = this.state.operationName;

                if (selectedOperationName && selectedOperationName !== operationName) {
                  operationName = selectedOperationName;
                  this.handleEditOperationName(operationName);
                }

                _a.label = 1;

              case 1:
                _a.trys.push([1, 3,, 4]);

                this.setState({
                  isWaitingForResponse: true,
                  response: undefined,
                  operationName: operationName
                });

                this._storage.set('operationName', operationName);

                if (this._queryHistory) {
                  this._queryHistory.updateHistory(editedQuery, variables, headers, operationName);
                }

                fullResponse_1 = {
                  data: {}
                };
                return [4, this._fetchQuery(editedQuery, variables, headers, operationName, shouldPersistHeaders, function (result) {
                  if (queryID === _this._editorQueryID) {
                    var maybeMultipart = Array.isArray(result) ? result : false;

                    if (!maybeMultipart && typeof result !== 'string' && result !== null && 'hasNext' in result) {
                      maybeMultipart = [result];
                    }

                    if (maybeMultipart) {
                      var payload = {
                        data: fullResponse_1.data
                      };

                      var maybeErrors = __spreadArrays((fullResponse_1 === null || fullResponse_1 === void 0 ? void 0 : fullResponse_1.errors) || [], maybeMultipart.map(function (i) {
                        return i.errors;
                      }).flat().filter(Boolean));

                      if (maybeErrors.length) {
                        payload.errors = maybeErrors;
                      }

                      for (var _i = 0, maybeMultipart_1 = maybeMultipart; _i < maybeMultipart_1.length; _i++) {
                        var part = maybeMultipart_1[_i];

                        var path = part.path,
                            data = part.data;
                            part.errors;
                            var rest = __rest(part, ["path", "data", "errors"]);

                        if (path) {
                          if (!data) {
                            throw new Error("Expected part to contain a data property, but got " + part);
                          }

                          dset(payload.data, path, data);
                        } else if (data) {
                          payload.data = part.data;
                        }

                        fullResponse_1 = __assign$1(__assign$1({}, payload), rest);
                      }

                      _this.setState({
                        isWaitingForResponse: false,
                        response: GraphiQL.formatResult(fullResponse_1)
                      });
                    } else {
                      _this.setState({
                        isWaitingForResponse: false,
                        response: GraphiQL.formatResult(result)
                      });
                    }
                  }
                })];

              case 2:
                subscription = _a.sent();
                this.setState({
                  subscription: subscription
                });
                return [3, 4];

              case 3:
                error_1 = _a.sent();
                this.setState({
                  isWaitingForResponse: false,
                  response: error_1.message
                });
                return [3, 4];

              case 4:
                return [2];
            }
          });
        });
      };

      _this.handleStopQuery = function () {
        var subscription = _this.state.subscription;

        _this.setState({
          isWaitingForResponse: false,
          subscription: null
        });

        if (subscription) {
          subscription.unsubscribe();
        }
      };

      _this.handlePrettifyQuery = function () {
        var _a, _b, _c;

        var editor = _this.getQueryEditor();

        var editorContent = (_a = editor === null || editor === void 0 ? void 0 : editor.getValue()) !== null && _a !== void 0 ? _a : '';
        var prettifiedEditorContent = print(parse$1(editorContent, {
          experimentalFragmentVariables: true
        }));

        if (prettifiedEditorContent !== editorContent) {
          editor === null || editor === void 0 ? void 0 : editor.setValue(prettifiedEditorContent);
        }

        var variableEditor = _this.getVariableEditor();

        var variableEditorContent = (_b = variableEditor === null || variableEditor === void 0 ? void 0 : variableEditor.getValue()) !== null && _b !== void 0 ? _b : '';

        try {
          var prettifiedVariableEditorContent = JSON.stringify(JSON.parse(variableEditorContent), null, 2);

          if (prettifiedVariableEditorContent !== variableEditorContent) {
            variableEditor === null || variableEditor === void 0 ? void 0 : variableEditor.setValue(prettifiedVariableEditorContent);
          }
        } catch (_d) {}

        var headerEditor = _this.getHeaderEditor();

        var headerEditorContent = (_c = headerEditor === null || headerEditor === void 0 ? void 0 : headerEditor.getValue()) !== null && _c !== void 0 ? _c : '';

        try {
          var prettifiedHeaderEditorContent = JSON.stringify(JSON.parse(headerEditorContent), null, 2);

          if (prettifiedHeaderEditorContent !== headerEditorContent) {
            headerEditor === null || headerEditor === void 0 ? void 0 : headerEditor.setValue(prettifiedHeaderEditorContent);
          }
        } catch (_e) {}
      };

      _this.handleMergeQuery = function () {
        var editor = _this.getQueryEditor();

        var query = editor.getValue();

        if (!query) {
          return;
        }

        var ast = _this.state.documentAST;
        editor.setValue(print(mergeAST(ast, _this.state.schema)));
      };

      _this.handleEditQuery = debounce(100, function (value) {
        var queryFacts = _this._updateQueryFacts(value, _this.state.operationName, _this.state.operations, _this.state.schema);

        _this.setState(__assign$1({
          query: value
        }, queryFacts));

        _this._storage.set('query', value);

        if (_this.props.onEditQuery) {
          return _this.props.onEditQuery(value, queryFacts === null || queryFacts === void 0 ? void 0 : queryFacts.documentAST);
        }
      });

      _this.handleCopyQuery = function () {
        var editor = _this.getQueryEditor();

        var query = editor && editor.getValue();

        if (!query) {
          return;
        }

        copyToClipboard(query);

        if (_this.props.onCopyQuery) {
          return _this.props.onCopyQuery(query);
        }
      };

      _this._updateQueryFacts = function (query, operationName, prevOperations, schema) {
        var queryFacts = getOperationFacts(schema, query);

        if (queryFacts) {
          var updatedOperationName = getSelectedOperationName(prevOperations, operationName, queryFacts.operations);
          var onEditOperationName = _this.props.onEditOperationName;

          if (onEditOperationName && updatedOperationName && operationName !== updatedOperationName) {
            onEditOperationName(updatedOperationName);
          }

          return __assign$1({
            operationName: updatedOperationName
          }, queryFacts);
        }
      };

      _this.handleEditVariables = function (value) {
        _this.setState({
          variables: value
        });

        debounce(500, function () {
          return _this._storage.set('variables', value);
        })();

        if (_this.props.onEditVariables) {
          _this.props.onEditVariables(value);
        }
      };

      _this.handleEditHeaders = function (value) {
        _this.setState({
          headers: value
        });

        _this.props.shouldPersistHeaders && debounce(500, function () {
          return _this._storage.set('headers', value);
        })();

        if (_this.props.onEditHeaders) {
          _this.props.onEditHeaders(value);
        }
      };

      _this.handleEditOperationName = function (operationName) {
        var onEditOperationName = _this.props.onEditOperationName;

        if (onEditOperationName) {
          onEditOperationName(operationName);
        }
      };

      _this.handleHintInformationRender = function (elem) {
        elem.addEventListener('click', _this._onClickHintInformation);

        var _onRemoveFn;

        elem.addEventListener('DOMNodeRemoved', _onRemoveFn = function onRemoveFn() {
          elem.removeEventListener('DOMNodeRemoved', _onRemoveFn);
          elem.removeEventListener('click', _this._onClickHintInformation);
        });
      };

      _this.handleEditorRunQuery = function () {
        _this._runQueryAtCursor();
      };

      _this._onClickHintInformation = function (event) {
        if ((event === null || event === void 0 ? void 0 : event.currentTarget) && 'className' in event.currentTarget && event.currentTarget.className === 'typeName') {
          var typeName = event.currentTarget.innerHTML;
          var schema = _this.state.schema;

          if (schema) {
            var type_1 = schema.getType(typeName);

            if (type_1) {
              _this.setState({
                docExplorerOpen: true
              }, function () {
                if (_this.docExplorerComponent) {
                  _this.docExplorerComponent.showDoc(type_1);
                }
              });

              debounce(500, function () {
                return _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
              })();
            }
          }
        }
      };

      _this.handleToggleDocs = function () {
        if (typeof _this.props.onToggleDocs === 'function') {
          _this.props.onToggleDocs(!_this.state.docExplorerOpen);
        }

        _this._storage.set('docExplorerOpen', JSON.stringify(!_this.state.docExplorerOpen));

        _this.setState({
          docExplorerOpen: !_this.state.docExplorerOpen
        });
      };

      _this.handleToggleHistory = function () {
        if (typeof _this.props.onToggleHistory === 'function') {
          _this.props.onToggleHistory(!_this.state.historyPaneOpen);
        }

        _this._storage.set('historyPaneOpen', JSON.stringify(!_this.state.historyPaneOpen));

        _this.setState({
          historyPaneOpen: !_this.state.historyPaneOpen
        });
      };

      _this.handleSelectHistoryQuery = function (query, variables, headers, operationName) {
        if (query) {
          _this.handleEditQuery(query);
        }

        if (variables) {
          _this.handleEditVariables(variables);
        }

        if (headers) {
          _this.handleEditHeaders(headers);
        }

        if (operationName) {
          _this.handleEditOperationName(operationName);
        }
      };

      _this.handleResizeStart = function (downEvent) {
        if (!_this._didClickDragBar(downEvent)) {
          return;
        }

        downEvent.preventDefault();
        var offset = downEvent.clientX - getLeft(downEvent.target);

        var onMouseMove = function onMouseMove(moveEvent) {
          if (moveEvent.buttons === 0) {
            return _onMouseUp();
          }

          var editorBar = _this.editorBarComponent;
          var leftSize = moveEvent.clientX - getLeft(editorBar) - offset;
          var rightSize = editorBar.clientWidth - leftSize;

          _this.setState({
            editorFlex: leftSize / rightSize
          });

          debounce(500, function () {
            return _this._storage.set('editorFlex', JSON.stringify(_this.state.editorFlex));
          })();
        };

        var _onMouseUp = function onMouseUp() {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', _onMouseUp);
          onMouseMove = null;
          _onMouseUp = null;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', _onMouseUp);
      };

      _this.handleResetResize = function () {
        _this.setState({
          editorFlex: 1
        });

        _this._storage.set('editorFlex', JSON.stringify(_this.state.editorFlex));
      };

      _this.handleDocsResizeStart = function (downEvent) {
        downEvent.preventDefault();
        var hadWidth = _this.state.docExplorerWidth;
        var offset = downEvent.clientX - getLeft(downEvent.target);

        var onMouseMove = function onMouseMove(moveEvent) {
          if (moveEvent.buttons === 0) {
            return _onMouseUp2();
          }

          var app = _this.graphiqlContainer;
          var cursorPos = moveEvent.clientX - getLeft(app) - offset;
          var docsSize = app.clientWidth - cursorPos;

          if (docsSize < 100) {
            if (typeof _this.props.onToggleDocs === 'function') {
              _this.props.onToggleDocs(!_this.state.docExplorerOpen);
            }

            _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));

            _this.setState({
              docExplorerOpen: false
            });
          } else {
            _this.setState({
              docExplorerOpen: true,
              docExplorerWidth: Math.min(docsSize, 650)
            });

            debounce(500, function () {
              return _this._storage.set('docExplorerWidth', JSON.stringify(_this.state.docExplorerWidth));
            })();
          }

          _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
        };

        var _onMouseUp2 = function onMouseUp() {
          if (!_this.state.docExplorerOpen) {
            _this.setState({
              docExplorerWidth: hadWidth
            });

            debounce(500, function () {
              return _this._storage.set('docExplorerWidth', JSON.stringify(_this.state.docExplorerWidth));
            })();
          }

          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', _onMouseUp2);
          onMouseMove = null;
          _onMouseUp2 = null;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', _onMouseUp2);
      };

      _this.handleDocsResetResize = function () {
        _this.setState({
          docExplorerWidth: DEFAULT_DOC_EXPLORER_WIDTH
        });

        debounce(500, function () {
          return _this._storage.set('docExplorerWidth', JSON.stringify(_this.state.docExplorerWidth));
        })();
      };

      _this.handleTabClickPropogation = function (downEvent) {
        downEvent.preventDefault();
        downEvent.stopPropagation();
      };

      _this.handleOpenHeaderEditorTab = function (_clickEvent) {
        _this.setState({
          headerEditorActive: true,
          variableEditorActive: false,
          secondaryEditorOpen: true
        });
      };

      _this.handleOpenVariableEditorTab = function (_clickEvent) {
        _this.setState({
          headerEditorActive: false,
          variableEditorActive: true,
          secondaryEditorOpen: true
        });
      };

      _this.handleSecondaryEditorResizeStart = function (downEvent) {
        downEvent.preventDefault();
        var didMove = false;
        var wasOpen = _this.state.secondaryEditorOpen;
        var hadHeight = _this.state.secondaryEditorHeight;
        var offset = downEvent.clientY - getTop(downEvent.target);

        var onMouseMove = function onMouseMove(moveEvent) {
          if (moveEvent.buttons === 0) {
            return _onMouseUp3();
          }

          didMove = true;
          var editorBar = _this.editorBarComponent;
          var topSize = moveEvent.clientY - getTop(editorBar) - offset;
          var bottomSize = editorBar.clientHeight - topSize;

          if (bottomSize < 60) {
            _this.setState({
              secondaryEditorOpen: false,
              secondaryEditorHeight: hadHeight
            });
          } else {
            _this.setState({
              secondaryEditorOpen: true,
              secondaryEditorHeight: bottomSize
            });
          }

          debounce(500, function () {
            return _this._storage.set('secondaryEditorHeight', JSON.stringify(_this.state.secondaryEditorHeight));
          })();
        };

        var _onMouseUp3 = function onMouseUp() {
          if (!didMove) {
            _this.setState({
              secondaryEditorOpen: !wasOpen
            });
          }

          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', _onMouseUp3);
          onMouseMove = null;
          _onMouseUp3 = null;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', _onMouseUp3);
      };

      if (typeof props.fetcher !== 'function') {
        throw new TypeError('GraphiQL requires a fetcher function.');
      }

      _this._storage = new StorageAPI(props.storage);
      _this.componentIsMounted = false;
      var query = props.query !== undefined ? props.query : _this._storage.get('query') ? _this._storage.get('query') : props.defaultQuery !== undefined ? props.defaultQuery : defaultQuery;
      var queryFacts = getOperationFacts(props.schema, query);
      var variables = props.variables !== undefined ? props.variables : _this._storage.get('variables');
      var headers = props.headers !== undefined ? props.headers : _this._storage.get('headers');
      var operationName = props.operationName !== undefined ? props.operationName : getSelectedOperationName(undefined, _this._storage.get('operationName'), queryFacts && queryFacts.operations);
      var docExplorerOpen = props.docExplorerOpen || false;

      if (_this._storage.get('docExplorerOpen')) {
        docExplorerOpen = _this._storage.get('docExplorerOpen') === 'true';
      }

      var secondaryEditorOpen;

      if (props.defaultVariableEditorOpen !== undefined) {
        secondaryEditorOpen = props.defaultVariableEditorOpen;
      } else if (props.defaultSecondaryEditorOpen !== undefined) {
        secondaryEditorOpen = props.defaultSecondaryEditorOpen;
      } else {
        secondaryEditorOpen = Boolean(variables || headers);
      }

      var headerEditorEnabled = (_a = props.headerEditorEnabled) !== null && _a !== void 0 ? _a : false;
      var shouldPersistHeaders = (_b = props.shouldPersistHeaders) !== null && _b !== void 0 ? _b : false;
      _this.state = __assign$1({
        schema: props.schema,
        query: query,
        variables: variables,
        headers: headers,
        operationName: operationName,
        docExplorerOpen: docExplorerOpen,
        response: props.response,
        editorFlex: Number(_this._storage.get('editorFlex')) || 1,
        secondaryEditorOpen: secondaryEditorOpen,
        secondaryEditorHeight: Number(_this._storage.get('secondaryEditorHeight')) || 200,
        variableEditorActive: _this._storage.get('variableEditorActive') === 'true' || props.headerEditorEnabled ? _this._storage.get('headerEditorActive') !== 'true' : true,
        headerEditorActive: _this._storage.get('headerEditorActive') === 'true',
        headerEditorEnabled: headerEditorEnabled,
        shouldPersistHeaders: shouldPersistHeaders,
        historyPaneOpen: _this._storage.get('historyPaneOpen') === 'true' || false,
        docExplorerWidth: Number(_this._storage.get('docExplorerWidth')) || DEFAULT_DOC_EXPLORER_WIDTH,
        isWaitingForResponse: false,
        subscription: null
      }, queryFacts);
      return _this;
    }

    GraphiQL.formatResult = function (result) {
      return JSON.stringify(result, null, 2);
    };

    GraphiQL.formatError = function (rawError) {
      var result = Array.isArray(rawError) ? rawError.map(formatSingleError) : formatSingleError(rawError);
      return JSON.stringify(result, null, 2);
    };

    GraphiQL.prototype.componentDidMount = function () {
      this.componentIsMounted = true;

      if (this.state.schema === undefined) {
        this.fetchSchema();
      }

      this.codeMirrorSizer = new CodeMirrorSizer();
      global.g = this;
    };

    GraphiQL.prototype.UNSAFE_componentWillMount = function () {
      this.componentIsMounted = false;
    };

    GraphiQL.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
      var _this = this;

      var nextSchema = this.state.schema;
      var nextQuery = this.state.query;
      var nextVariables = this.state.variables;
      var nextHeaders = this.state.headers;
      var nextOperationName = this.state.operationName;
      var nextResponse = this.state.response;

      if (nextProps.schema !== undefined) {
        nextSchema = nextProps.schema;
      }

      if (nextProps.query !== undefined && this.props.query !== nextProps.query) {
        nextQuery = nextProps.query;
      }

      if (nextProps.variables !== undefined && this.props.variables !== nextProps.variables) {
        nextVariables = nextProps.variables;
      }

      if (nextProps.headers !== undefined && this.props.headers !== nextProps.headers) {
        nextHeaders = nextProps.headers;
      }

      if (nextProps.operationName !== undefined) {
        nextOperationName = nextProps.operationName;
      }

      if (nextProps.response !== undefined) {
        nextResponse = nextProps.response;
      }

      if (nextQuery && nextSchema && (nextSchema !== this.state.schema || nextQuery !== this.state.query || nextOperationName !== this.state.operationName)) {
        var updatedQueryAttributes = this._updateQueryFacts(nextQuery, nextOperationName, this.state.operations, nextSchema);

        if (updatedQueryAttributes !== undefined) {
          nextOperationName = updatedQueryAttributes.operationName;
          this.setState(updatedQueryAttributes);
        }
      }

      if (nextProps.schema === undefined && nextProps.fetcher !== this.props.fetcher) {
        nextSchema = undefined;
      }

      this._storage.set('operationName', nextOperationName);

      this.setState({
        schema: nextSchema,
        query: nextQuery,
        variables: nextVariables,
        headers: nextHeaders,
        operationName: nextOperationName,
        response: nextResponse
      }, function () {
        if (_this.state.schema === undefined) {
          if (_this.docExplorerComponent) {
            _this.docExplorerComponent.reset();
          }

          _this.fetchSchema();
        }
      });
    };

    GraphiQL.prototype.componentDidUpdate = function () {
      this.codeMirrorSizer.updateSizes([this.queryEditorComponent, this.variableEditorComponent, this.headerEditorComponent, this.resultComponent]);
    };

    GraphiQL.prototype.render = function () {
      var _this = this;

      var _a;

      var children = React__default['default'].Children.toArray(this.props.children);
      var logo = find(children, function (child) {
        return isChildComponentType(child, GraphiQL.Logo);
      }) || /*#__PURE__*/React__default['default'].createElement(GraphiQL.Logo, null);
      var toolbar = find(children, function (child) {
        return isChildComponentType(child, GraphiQL.Toolbar);
      }) || /*#__PURE__*/React__default['default'].createElement(GraphiQL.Toolbar, null, /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
        onClick: this.handlePrettifyQuery,
        title: "Prettify Query (Shift-Ctrl-P)",
        label: "Prettify"
      }), /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
        onClick: this.handleMergeQuery,
        title: "Merge Query (Shift-Ctrl-M)",
        label: "Merge"
      }), /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
        onClick: this.handleCopyQuery,
        title: "Copy Query (Shift-Ctrl-C)",
        label: "Copy"
      }), /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
        onClick: this.handleToggleHistory,
        title: "Show History",
        label: "History"
      }), ((_a = this.props.toolbar) === null || _a === void 0 ? void 0 : _a.additionalContent) ? this.props.toolbar.additionalContent : null);
      var footer = find(children, function (child) {
        return isChildComponentType(child, GraphiQL.Footer);
      });
      var queryWrapStyle = {
        WebkitFlex: this.state.editorFlex,
        flex: this.state.editorFlex
      };
      var docWrapStyle = {
        display: 'block',
        width: this.state.docExplorerWidth
      };
      var docExplorerWrapClasses = 'docExplorerWrap' + (this.state.docExplorerWidth < 200 ? ' doc-explorer-narrow' : '');
      var historyPaneStyle = {
        display: this.state.historyPaneOpen ? 'block' : 'none',
        width: '230px',
        zIndex: 7
      };
      var secondaryEditorOpen = this.state.secondaryEditorOpen;
      var secondaryEditorStyle = {
        height: secondaryEditorOpen ? this.state.secondaryEditorHeight : undefined
      };
      return /*#__PURE__*/React__default['default'].createElement("div", {
        ref: function ref(n) {
          _this.graphiqlContainer = n;
        },
        className: "graphiql-container"
      }, this.state.historyPaneOpen && /*#__PURE__*/React__default['default'].createElement("div", {
        className: "historyPaneWrap",
        style: historyPaneStyle
      }, /*#__PURE__*/React__default['default'].createElement(QueryHistory, {
        ref: function ref(node) {
          _this._queryHistory = node;
        },
        operationName: this.state.operationName,
        query: this.state.query,
        variables: this.state.variables,
        onSelectQuery: this.handleSelectHistoryQuery,
        storage: this._storage,
        queryID: this._editorQueryID
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        className: "docExplorerHide",
        onClick: this.handleToggleHistory,
        "aria-label": "Close History"
      }, "\u2715"))), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "editorWrap"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "topBarWrap"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "topBar"
      }, logo, /*#__PURE__*/React__default['default'].createElement(ExecuteButton, {
        isRunning: Boolean(this.state.subscription),
        onRun: this.handleRunQuery,
        onStop: this.handleStopQuery,
        operations: this.state.operations
      }), toolbar), !this.state.docExplorerOpen && /*#__PURE__*/React__default['default'].createElement("button", {
        className: "docExplorerShow",
        onClick: this.handleToggleDocs,
        "aria-label": "Open Documentation Explorer"
      }, 'Docs')), /*#__PURE__*/React__default['default'].createElement("div", {
        ref: function ref(n) {
          _this.editorBarComponent = n;
        },
        className: "editorBar",
        onDoubleClick: this.handleResetResize,
        onMouseDown: this.handleResizeStart
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "queryWrap",
        style: queryWrapStyle
      }, /*#__PURE__*/React__default['default'].createElement(QueryEditor, {
        ref: function ref(n) {
          _this.queryEditorComponent = n;
        },
        schema: this.state.schema,
        validationRules: this.props.validationRules,
        value: this.state.query,
        onEdit: this.handleEditQuery,
        onHintInformationRender: this.handleHintInformationRender,
        onClickReference: this.handleClickReference,
        onCopyQuery: this.handleCopyQuery,
        onPrettifyQuery: this.handlePrettifyQuery,
        onMergeQuery: this.handleMergeQuery,
        onRunQuery: this.handleEditorRunQuery,
        editorTheme: this.props.editorTheme,
        readOnly: this.props.readOnly,
        externalFragments: this.props.externalFragments
      }), /*#__PURE__*/React__default['default'].createElement("section", {
        className: "variable-editor secondary-editor",
        style: secondaryEditorStyle,
        "aria-label": this.state.variableEditorActive ? 'Query Variables' : 'Request Headers'
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "secondary-editor-title variable-editor-title",
        id: "secondary-editor-title",
        style: {
          cursor: secondaryEditorOpen ? 'row-resize' : 'n-resize'
        },
        onMouseDown: this.handleSecondaryEditorResizeStart
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          cursor: 'pointer',
          color: this.state.variableEditorActive ? '#000' : 'gray',
          display: 'inline-block'
        },
        onClick: this.handleOpenVariableEditorTab,
        onMouseDown: this.handleTabClickPropogation
      }, 'Query Variables'), this.state.headerEditorEnabled && /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          cursor: 'pointer',
          color: this.state.headerEditorActive ? '#000' : 'gray',
          display: 'inline-block',
          marginLeft: '20px'
        },
        onClick: this.handleOpenHeaderEditorTab,
        onMouseDown: this.handleTabClickPropogation
      }, 'Request Headers')), /*#__PURE__*/React__default['default'].createElement(VariableEditor, {
        ref: function ref(n) {
          _this.variableEditorComponent = n;
        },
        value: this.state.variables,
        variableToType: this.state.variableToType,
        onEdit: this.handleEditVariables,
        onHintInformationRender: this.handleHintInformationRender,
        onPrettifyQuery: this.handlePrettifyQuery,
        onMergeQuery: this.handleMergeQuery,
        onRunQuery: this.handleEditorRunQuery,
        editorTheme: this.props.editorTheme,
        readOnly: this.props.readOnly,
        active: this.state.variableEditorActive
      }), this.state.headerEditorEnabled && /*#__PURE__*/React__default['default'].createElement(HeaderEditor, {
        ref: function ref(n) {
          _this.headerEditorComponent = n;
        },
        value: this.state.headers,
        onEdit: this.handleEditHeaders,
        onHintInformationRender: this.handleHintInformationRender,
        onPrettifyQuery: this.handlePrettifyQuery,
        onMergeQuery: this.handleMergeQuery,
        onRunQuery: this.handleEditorRunQuery,
        editorTheme: this.props.editorTheme,
        readOnly: this.props.readOnly,
        active: this.state.headerEditorActive
      }))), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "resultWrap"
      }, this.state.isWaitingForResponse && /*#__PURE__*/React__default['default'].createElement("div", {
        className: "spinner-container"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "spinner"
      })), /*#__PURE__*/React__default['default'].createElement(ResultViewer, {
        registerRef: function registerRef(n) {
          _this.resultViewerElement = n;
        },
        ref: function ref(c) {
          _this.resultComponent = c;
        },
        value: this.state.response,
        editorTheme: this.props.editorTheme,
        ResultsTooltip: this.props.ResultsTooltip,
        ImagePreview: ImagePreview
      }), footer))), this.state.docExplorerOpen && /*#__PURE__*/React__default['default'].createElement("div", {
        className: docExplorerWrapClasses,
        style: docWrapStyle
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "docExplorerResizer",
        onDoubleClick: this.handleDocsResetResize,
        onMouseDown: this.handleDocsResizeStart
      }), /*#__PURE__*/React__default['default'].createElement(DocExplorer, {
        ref: function ref(c) {
          _this.docExplorerComponent = c;
        },
        schema: this.state.schema
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        className: "docExplorerHide",
        onClick: this.handleToggleDocs,
        "aria-label": "Close Documentation Explorer"
      }, "\u2715"))));
    };

    GraphiQL.prototype.getQueryEditor = function () {
      if (this.queryEditorComponent) {
        return this.queryEditorComponent.getCodeMirror();
      }
    };

    GraphiQL.prototype.getVariableEditor = function () {
      if (this.variableEditorComponent) {
        return this.variableEditorComponent.getCodeMirror();
      }

      return null;
    };

    GraphiQL.prototype.getHeaderEditor = function () {
      if (this.headerEditorComponent) {
        return this.headerEditorComponent.getCodeMirror();
      }

      return null;
    };

    GraphiQL.prototype.refresh = function () {
      if (this.queryEditorComponent) {
        this.queryEditorComponent.getCodeMirror().refresh();
      }

      if (this.variableEditorComponent) {
        this.variableEditorComponent.getCodeMirror().refresh();
      }

      if (this.headerEditorComponent) {
        this.headerEditorComponent.getCodeMirror().refresh();
      }

      if (this.resultComponent) {
        this.resultComponent.getCodeMirror().refresh();
      }
    };

    GraphiQL.prototype.autoCompleteLeafs = function () {
      var _a = fillLeafs(this.state.schema, this.state.query, this.props.getDefaultFieldNames),
          insertions = _a.insertions,
          result = _a.result;

      if (insertions && insertions.length > 0) {
        var editor_1 = this.getQueryEditor();

        if (editor_1) {
          editor_1.operation(function () {
            var cursor = editor_1.getCursor();
            var cursorIndex = editor_1.indexFromPos(cursor);
            editor_1.setValue(result || '');
            var added = 0;
            var markers = insertions.map(function (_a) {
              var index = _a.index,
                  string = _a.string;
              return editor_1.markText(editor_1.posFromIndex(index + added), editor_1.posFromIndex(index + (added += string.length)), {
                className: 'autoInsertedLeaf',
                clearOnEnter: true,
                title: 'Automatically added leaf fields'
              });
            });
            setTimeout(function () {
              return markers.forEach(function (marker) {
                return marker.clear();
              });
            }, 7000);
            var newCursorIndex = cursorIndex;
            insertions.forEach(function (_a) {
              var index = _a.index,
                  string = _a.string;

              if (index < cursorIndex) {
                newCursorIndex += string.length;
              }
            });
            editor_1.setCursor(editor_1.posFromIndex(newCursorIndex));
          });
        }
      }

      return result;
    };

    GraphiQL.prototype.fetchSchema = function () {
      var _this = this;

      var fetcher = this.props.fetcher;
      var fetcherOpts = {
        shouldPersistHeaders: Boolean(this.props.shouldPersistHeaders),
        documentAST: this.state.documentAST
      };

      if (this.state.headers && this.state.headers.trim().length > 2) {
        fetcherOpts.headers = JSON.parse(this.state.headers);
      } else if (this.props.headers) {
        fetcherOpts.headers = JSON.parse(this.props.headers);
      }

      var fetch = fetcherReturnToPromise(fetcher({
        query: introspectionQuery,
        operationName: introspectionQueryName
      }, fetcherOpts));

      if (!isPromise(fetch)) {
        this.setState({
          response: 'Fetcher did not return a Promise for introspection.'
        });
        return;
      }

      fetch.then(function (result) {
        if (typeof result !== 'string' && 'data' in result) {
          return result;
        }

        var fetch2 = fetcherReturnToPromise(fetcher({
          query: introspectionQuerySansSubscriptions,
          operationName: introspectionQueryName
        }, fetcherOpts));

        if (!isPromise(fetch)) {
          throw new Error('Fetcher did not return a Promise for introspection.');
        }

        return fetch2;
      }).then(function (result) {
        if (_this.state.schema !== undefined) {
          return;
        }

        if (typeof result !== 'string' && 'data' in result) {
          var schema = buildClientSchema(result.data);
          var queryFacts = getOperationFacts(schema, _this.state.query);

          _this.safeSetState(__assign$1({
            schema: schema
          }, queryFacts));
        } else {
          var responseString = typeof result === 'string' ? result : GraphiQL.formatResult(result);

          _this.safeSetState({
            schema: undefined,
            response: responseString
          });
        }
      }).catch(function (error) {
        _this.safeSetState({
          schema: undefined,
          response: error ? GraphiQL.formatError(error) : undefined
        });
      });
    };

    GraphiQL.prototype._fetchQuery = function (query, variables, headers, operationName, shouldPersistHeaders, cb) {
      return __awaiter(this, void 0, void 0, function () {
        var fetcher, jsonVariables, jsonHeaders, externalFragments_1, fragmentDependencies, fetch;

        var _this = this;

        return __generator(this, function (_a) {
          fetcher = this.props.fetcher;
          jsonVariables = null;
          jsonHeaders = null;

          try {
            jsonVariables = variables && variables.trim() !== '' ? JSON.parse(variables) : null;
          } catch (error) {
            throw new Error("Variables are invalid JSON: " + error.message + ".");
          }

          if (_typeof$3(jsonVariables) !== 'object') {
            throw new Error('Variables are not a JSON object.');
          }

          try {
            jsonHeaders = headers && headers.trim() !== '' ? JSON.parse(headers) : null;
          } catch (error) {
            throw new Error("Headers are invalid JSON: " + error.message + ".");
          }

          if (_typeof$3(jsonHeaders) !== 'object') {
            throw new Error('Headers are not a JSON object.');
          }

          if (this.props.externalFragments) {
            externalFragments_1 = new Map();

            if (Array.isArray(this.props.externalFragments)) {
              this.props.externalFragments.forEach(function (def) {
                externalFragments_1.set(def.name.value, def);
              });
            } else {
              visit(parse$1(this.props.externalFragments, {
                experimentalFragmentVariables: true
              }), {
                FragmentDefinition: function FragmentDefinition(def) {
                  externalFragments_1.set(def.name.value, def);
                }
              });
            }

            fragmentDependencies = getFragmentDependenciesForAST(this.state.documentAST, externalFragments_1);

            if (fragmentDependencies.length > 0) {
              query += '\n' + fragmentDependencies.map(function (node) {
                return print(node);
              }).join('\n');
            }
          }

          fetch = fetcher({
            query: query,
            variables: jsonVariables,
            operationName: operationName
          }, {
            headers: jsonHeaders,
            shouldPersistHeaders: shouldPersistHeaders,
            documentAST: this.state.documentAST
          });
          return [2, Promise.resolve(fetch).then(function (value) {
            if (isObservable(value)) {
              var subscription = value.subscribe({
                next: cb,
                error: function error(_error) {
                  _this.safeSetState({
                    isWaitingForResponse: false,
                    response: _error ? GraphiQL.formatError(_error) : undefined,
                    subscription: null
                  });
                },
                complete: function complete() {
                  _this.safeSetState({
                    isWaitingForResponse: false,
                    subscription: null
                  });
                }
              });
              return subscription;
            } else if (isAsyncIterable(value)) {
              (function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var value_1, value_1_1, result, e_1_1, error_2;

                  var e_1, _a;

                  return __generator(this, function (_b) {
                    switch (_b.label) {
                      case 0:
                        _b.trys.push([0, 13,, 14]);

                        _b.label = 1;

                      case 1:
                        _b.trys.push([1, 6, 7, 12]);

                        value_1 = __asyncValues(value);
                        _b.label = 2;

                      case 2:
                        return [4, value_1.next()];

                      case 3:
                        if (!(value_1_1 = _b.sent(), !value_1_1.done)) return [3, 5];
                        result = value_1_1.value;
                        cb(result);
                        _b.label = 4;

                      case 4:
                        return [3, 2];

                      case 5:
                        return [3, 12];

                      case 6:
                        e_1_1 = _b.sent();
                        e_1 = {
                          error: e_1_1
                        };
                        return [3, 12];

                      case 7:
                        _b.trys.push([7,, 10, 11]);

                        if (!(value_1_1 && !value_1_1.done && (_a = value_1.return))) return [3, 9];
                        return [4, _a.call(value_1)];

                      case 8:
                        _b.sent();

                        _b.label = 9;

                      case 9:
                        return [3, 11];

                      case 10:
                        if (e_1) throw e_1.error;
                        return [7];

                      case 11:
                        return [7];

                      case 12:
                        this.safeSetState({
                          isWaitingForResponse: false,
                          subscription: null
                        });
                        return [3, 14];

                      case 13:
                        error_2 = _b.sent();
                        this.safeSetState({
                          isWaitingForResponse: false,
                          response: error_2 ? GraphiQL.formatError(error_2) : undefined,
                          subscription: null
                        });
                        return [3, 14];

                      case 14:
                        return [2];
                    }
                  });
                });
              })();

              return {
                unsubscribe: function unsubscribe() {
                  var _a, _b;

                  return (_b = (_a = value[Symbol.asyncIterator]()).return) === null || _b === void 0 ? void 0 : _b.call(_a);
                }
              };
            } else {
              cb(value);
              return null;
            }
          }).catch(function (error) {
            _this.safeSetState({
              isWaitingForResponse: false,
              response: error ? GraphiQL.formatError(error) : undefined
            });

            return null;
          })];
        });
      });
    };

    GraphiQL.prototype._runQueryAtCursor = function () {
      if (this.state.subscription) {
        this.handleStopQuery();
        return;
      }

      var operationName;
      var operations = this.state.operations;

      if (operations) {
        var editor = this.getQueryEditor();

        if (editor && editor.hasFocus()) {
          var cursor = editor.getCursor();
          var cursorIndex = editor.indexFromPos(cursor);

          for (var i = 0; i < operations.length; i++) {
            var operation = operations[i];

            if (operation.loc && operation.loc.start <= cursorIndex && operation.loc.end >= cursorIndex) {
              operationName = operation.name && operation.name.value;
              break;
            }
          }
        }
      }

      this.handleRunQuery(operationName);
    };

    GraphiQL.prototype._didClickDragBar = function (event) {
      if (event.button !== 0 || event.ctrlKey) {
        return false;
      }

      var target = event.target;

      if (target.className.indexOf('CodeMirror-gutter') !== 0) {
        return false;
      }

      var resultWindow = this.resultViewerElement;

      while (target) {
        if (target === resultWindow) {
          return true;
        }

        target = target.parentNode;
      }

      return false;
    };

    GraphiQL.Logo = GraphiQLLogo;
    GraphiQL.Toolbar = GraphiQLToolbar;
    GraphiQL.Footer = GraphiQLFooter;
    GraphiQL.QueryEditor = QueryEditor;
    GraphiQL.VariableEditor = VariableEditor;
    GraphiQL.HeaderEditor = HeaderEditor;
    GraphiQL.ResultViewer = ResultViewer;
    GraphiQL.Button = ToolbarButton;
    GraphiQL.ToolbarButton = ToolbarButton;
    GraphiQL.Group = ToolbarGroup;
    GraphiQL.Menu = ToolbarMenu;
    GraphiQL.MenuItem = ToolbarMenuItem;
    return GraphiQL;
  }(React__default['default'].Component);

  function GraphiQLLogo(props) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "title"
    }, props.children || /*#__PURE__*/React__default['default'].createElement("span", null, 'Graph', /*#__PURE__*/React__default['default'].createElement("em", null, 'i'), 'QL'));
  }

  GraphiQLLogo.displayName = 'GraphiQLLogo';

  function GraphiQLToolbar(props) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "toolbar",
      role: "toolbar",
      "aria-label": "Editor Commands"
    }, props.children);
  }

  GraphiQLToolbar.displayName = 'GraphiQLToolbar';

  function GraphiQLFooter(props) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "footer"
    }, props.children);
  }

  GraphiQLFooter.displayName = 'GraphiQLFooter';

  var formatSingleError = function formatSingleError(error) {
    return __assign$1(__assign$1({}, error), {
      message: error.message,
      stack: error.stack
    });
  };

  var defaultQuery = "# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that start\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)\n#\n#     Merge Query:  Shift-Ctrl-M (or press the merge button above)\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n\n";

  function isPromise(value) {
    return _typeof$3(value) === 'object' && typeof value.then === 'function';
  }

  function observableToPromise(observable) {
    return new Promise(function (resolve, reject) {
      var subscription = observable.subscribe({
        next: function next(v) {
          resolve(v);
          subscription.unsubscribe();
        },
        error: reject,
        complete: function complete() {
          reject(new Error('no value resolved'));
        }
      });
    });
  }

  function isObservable(value) {
    return _typeof$3(value) === 'object' && 'subscribe' in value && typeof value.subscribe === 'function';
  }

  function isAsyncIterable(input) {
    return _typeof$3(input) === 'object' && input !== null && (input[Symbol.toStringTag] === 'AsyncGenerator' || Symbol.asyncIterator in input);
  }

  function asyncIterableToPromise(input) {
    return new Promise(function (resolve, reject) {
      var _a;

      var iteratorReturn = (_a = ('return' in input ? input : input[Symbol.asyncIterator]()).return) === null || _a === void 0 ? void 0 : _a.bind(input);
      var iteratorNext = ('next' in input ? input : input[Symbol.asyncIterator]()).next.bind(input);
      iteratorNext().then(function (result) {
        resolve(result.value);
        iteratorReturn === null || iteratorReturn === void 0 ? void 0 : iteratorReturn();
      }).catch(function (err) {
        reject(err);
      });
    });
  }

  function fetcherReturnToPromise(fetcherResult) {
    return Promise.resolve(fetcherResult).then(function (fetcherResult) {
      if (isAsyncIterable(fetcherResult)) {
        return asyncIterableToPromise(fetcherResult);
      } else if (isObservable(fetcherResult)) {
        return observableToPromise(fetcherResult);
      }

      return fetcherResult;
    });
  }

  function isChildComponentType(child, component) {
    var _a;

    if (((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.displayName) && child.type.displayName === component.displayName) {
      return true;
    }

    return child.type === component;
  }

  var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    return function (d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();

  var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  function hasProps(child) {
    if (!child || _typeof$3(child) !== 'object' || !('props' in child)) {
      return false;
    }

    return true;
  }

  (function (_super) {
    __extends(ToolbarSelect, _super);

    function ToolbarSelect(props) {
      var _this = _super.call(this, props) || this;

      _this._node = null;
      _this._listener = null;

      _this.handleOpen = function (e) {
        preventDefault(e);

        _this.setState({
          visible: true
        });

        _this._subscribe();
      };

      _this.state = {
        visible: false
      };
      return _this;
    }

    ToolbarSelect.prototype.componentWillUnmount = function () {
      this._release();
    };

    ToolbarSelect.prototype.render = function () {
      var _this = this;

      var selectedChild;
      var visible = this.state.visible;
      var optionChildren = React__default['default'].Children.map(this.props.children, function (child, i) {
        if (!hasProps(child)) {
          return null;
        }

        if (!selectedChild || child.props.selected) {
          selectedChild = child;
        }

        var onChildSelect = child.props.onSelect || _this.props.onSelect && _this.props.onSelect.bind(null, child.props.value, i);

        return /*#__PURE__*/React__default['default'].createElement(ToolbarSelectOption, __assign({}, child.props, {
          onSelect: onChildSelect
        }));
      });
      return /*#__PURE__*/React__default['default'].createElement("a", {
        className: "toolbar-select toolbar-button",
        onClick: this.handleOpen.bind(this),
        onMouseDown: preventDefault,
        ref: function ref(node) {
          _this._node = node;
        },
        title: this.props.title
      }, selectedChild === null || selectedChild === void 0 ? void 0 : selectedChild.props.label, /*#__PURE__*/React__default['default'].createElement("svg", {
        width: "13",
        height: "10"
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        fill: "#666",
        d: "M 5 5 L 13 5 L 9 1 z"
      }), /*#__PURE__*/React__default['default'].createElement("path", {
        fill: "#666",
        d: "M 5 6 L 13 6 L 9 10 z"
      })), /*#__PURE__*/React__default['default'].createElement("ul", {
        className: 'toolbar-select-options' + (visible ? ' open' : '')
      }, optionChildren));
    };

    ToolbarSelect.prototype._subscribe = function () {
      if (!this._listener) {
        this._listener = this.handleClick.bind(this);
        document.addEventListener('click', this._listener);
      }
    };

    ToolbarSelect.prototype._release = function () {
      if (this._listener) {
        document.removeEventListener('click', this._listener);
        this._listener = null;
      }
    };

    ToolbarSelect.prototype.handleClick = function (e) {
      if (this._node !== e.target) {
        preventDefault(e);
        this.setState({
          visible: false
        });

        this._release();
      }
    };

    return ToolbarSelect;
  })(React__default['default'].Component);
  function ToolbarSelectOption(_a) {
    var onSelect = _a.onSelect,
        label = _a.label,
        selected = _a.selected;
    return /*#__PURE__*/React__default['default'].createElement("li", {
      onMouseOver: function onMouseOver(e) {
        e.currentTarget.className = 'hover';
      },
      onMouseOut: function onMouseOut(e) {
        e.currentTarget.className = '';
      },
      onMouseDown: preventDefault,
      onMouseUp: onSelect
    }, label, selected && /*#__PURE__*/React__default['default'].createElement("svg", {
      width: "13",
      height: "13"
    }, /*#__PURE__*/React__default['default'].createElement("polygon", {
      points: "4.851,10.462 0,5.611 2.314,3.297 4.851,5.835\n    10.686,0 13,2.314 4.851,10.462"
    })));
  }

  function preventDefault(e) {
    e.preventDefault();
  }

  var dist = {};

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && _typeof$3(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof$3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof$3(obj);
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  exports.defaultValue = defaultValue;

  var _react = require('react');

  var React = _interopRequireWildcard(_react);

  var _graphql = require('graphql');

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (_typeof$3(call) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + _typeof$3(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  } // TODO: 1. Add default fields recursively
  // TODO: 2. Add default fields for all selections (not just fragments)
  // TODO: 3. Add stylesheet and remove inline styles
  // TODO: 4. Indication of when query in explorer diverges from query in editor pane
  // TODO: 5. Separate section for deprecated args, with support for 'beta' fields
  // TODO: 6. Custom default arg fields
  // Note: Attempted 1. and 2., but they were more annoying than helpful


  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } // Names match class names in graphiql app.css
  // https://github.com/graphql/graphiql/blob/master/packages/graphiql/css/app.css


  var defaultColors = {
    keyword: '#B11A04',
    // OperationName, FragmentName
    def: '#D2054E',
    // FieldName
    property: '#1F61A0',
    // FieldAlias
    qualifier: '#1C92A9',
    // ArgumentName and ObjectFieldName
    attribute: '#8B2BB9',
    number: '#2882F9',
    string: '#D64292',
    // Boolean
    builtin: '#D47509',
    // Enum
    string2: '#0B7FC7',
    variable: '#397D13',
    // Type
    atom: '#CA9800'
  };
  var defaultArrowOpen = React.createElement('svg', {
    width: '12',
    height: '9'
  }, React.createElement('path', {
    fill: '#666',
    d: 'M 0 2 L 9 2 L 4.5 7.5 z'
  }));
  var defaultArrowClosed = React.createElement('svg', {
    width: '12',
    height: '9'
  }, React.createElement('path', {
    fill: '#666',
    d: 'M 0 0 L 0 9 L 5.5 4.5 z'
  }));
  var defaultCheckboxChecked = React.createElement('svg', {
    style: {
      marginRight: '3px',
      marginLeft: '-3px'
    },
    width: '12',
    height: '12',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement('path', {
    d: 'M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z',
    fill: '#666'
  }));
  var defaultCheckboxUnchecked = React.createElement('svg', {
    style: {
      marginRight: '3px',
      marginLeft: '-3px'
    },
    width: '12',
    height: '12',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement('path', {
    d: 'M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z',
    fill: '#CCC'
  }));

  function Checkbox(props) {
    return props.checked ? props.styleConfig.checkboxChecked : props.styleConfig.checkboxUnchecked;
  }

  function defaultGetDefaultFieldNames(type) {
    var fields = type.getFields(); // Is there an `id` field?

    if (fields['id']) {
      var res = ['id'];

      if (fields['email']) {
        res.push('email');
      } else if (fields['name']) {
        res.push('name');
      }

      return res;
    } // Is there an `edges` field?


    if (fields['edges']) {
      return ['edges'];
    } // Is there an `node` field?


    if (fields['node']) {
      return ['node'];
    }

    if (fields['nodes']) {
      return ['nodes'];
    } // Include all leaf-type fields.


    var leafFieldNames = [];
    Object.keys(fields).forEach(function (fieldName) {
      if ((0, _graphql.isLeafType)(fields[fieldName].type)) {
        leafFieldNames.push(fieldName);
      }
    });

    if (!leafFieldNames.length) {
      // No leaf fields, add typename so that the query stays valid
      return ['__typename'];
    }

    return leafFieldNames.slice(0, 2); // Prevent too many fields from being added
  }

  function isRequiredArgument(arg) {
    return (0, _graphql.isNonNullType)(arg.type) && arg.defaultValue === undefined;
  }

  function unwrapOutputType$1(outputType) {
    var unwrappedType = outputType;

    while ((0, _graphql.isWrappingType)(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }

  function unwrapInputType(inputType) {
    var unwrappedType = inputType;

    while ((0, _graphql.isWrappingType)(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }

  function coerceArgValue(argType, value) {
    // Handle the case where we're setting a variable as the value
    if (typeof value !== 'string' && value.kind === 'VariableDefinition') {
      return value.variable;
    } else if ((0, _graphql.isScalarType)(argType)) {
      try {
        switch (argType.name) {
          case 'String':
            return {
              kind: 'StringValue',
              value: String(argType.parseValue(value))
            };

          case 'Float':
            return {
              kind: 'FloatValue',
              value: String(argType.parseValue(parseFloat(value)))
            };

          case 'Int':
            return {
              kind: 'IntValue',
              value: String(argType.parseValue(parseInt(value, 10)))
            };

          case 'Boolean':
            try {
              var parsed = JSON.parse(value);

              if (typeof parsed === 'boolean') {
                return {
                  kind: 'BooleanValue',
                  value: parsed
                };
              } else {
                return {
                  kind: 'BooleanValue',
                  value: false
                };
              }
            } catch (e) {
              return {
                kind: 'BooleanValue',
                value: false
              };
            }

          default:
            return {
              kind: 'StringValue',
              value: String(argType.parseValue(value))
            };
        }
      } catch (e) {
        console.error('error coercing arg value', e, value);
        return {
          kind: 'StringValue',
          value: value
        };
      }
    } else {
      try {
        var parsedValue = argType.parseValue(value);

        if (parsedValue) {
          return {
            kind: 'EnumValue',
            value: String(parsedValue)
          };
        } else {
          return {
            kind: 'EnumValue',
            value: argType.getValues()[0].name
          };
        }
      } catch (e) {
        return {
          kind: 'EnumValue',
          value: argType.getValues()[0].name
        };
      }
    }
  }

  var InputArgView = function (_React$PureComponent) {
    _inherits(InputArgView, _React$PureComponent);

    function InputArgView() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, InputArgView);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputArgView.__proto__ || Object.getPrototypeOf(InputArgView)).call.apply(_ref, [this].concat(args))), _this), _this._getArgSelection = function () {
        return _this.props.selection.fields.find(function (field) {
          return field.name.value === _this.props.arg.name;
        });
      }, _this._removeArg = function () {
        var selection = _this.props.selection;

        var argSelection = _this._getArgSelection();

        _this._previousArgSelection = argSelection;

        _this.props.modifyFields(selection.fields.filter(function (field) {
          return field !== argSelection;
        }), true);
      }, _this._addArg = function () {
        var _this$props = _this.props,
            selection = _this$props.selection,
            arg = _this$props.arg,
            getDefaultScalarArgValue = _this$props.getDefaultScalarArgValue,
            parentField = _this$props.parentField,
            makeDefaultArg = _this$props.makeDefaultArg;
        var argType = unwrapInputType(arg.type);
        var argSelection = null;

        if (_this._previousArgSelection) {
          argSelection = _this._previousArgSelection;
        } else if ((0, _graphql.isInputObjectType)(argType)) {
          var _fields = argType.getFields();

          argSelection = {
            kind: 'ObjectField',
            name: {
              kind: 'Name',
              value: arg.name
            },
            value: {
              kind: 'ObjectValue',
              fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, Object.keys(_fields).map(function (k) {
                return _fields[k];
              }))
            }
          };
        } else if ((0, _graphql.isLeafType)(argType)) {
          argSelection = {
            kind: 'ObjectField',
            name: {
              kind: 'Name',
              value: arg.name
            },
            value: getDefaultScalarArgValue(parentField, arg, argType)
          };
        }

        if (!argSelection) {
          console.error('Unable to add arg for argType', argType);
        } else {
          return _this.props.modifyFields([].concat(_toConsumableArray(selection.fields || []), [argSelection]), true);
        }
      }, _this._setArgValue = function (event, options) {
        var settingToNull = false;
        var settingToVariable = false;
        var settingToLiteralValue = false;

        try {
          if (event.kind === 'VariableDefinition') {
            settingToVariable = true;
          } else if (event === null || typeof event === 'undefined') {
            settingToNull = true;
          } else if (typeof event.kind === 'string') {
            settingToLiteralValue = true;
          }
        } catch (e) {}

        var selection = _this.props.selection;

        var argSelection = _this._getArgSelection();

        if (!argSelection) {
          console.error('missing arg selection when setting arg value');
          return;
        }

        var argType = unwrapInputType(_this.props.arg.type);
        var handleable = (0, _graphql.isLeafType)(argType) || settingToVariable || settingToNull || settingToLiteralValue;

        if (!handleable) {
          console.warn('Unable to handle non leaf types in InputArgView.setArgValue', event);
          return;
        }

        var targetValue = void 0;
        var value = void 0;

        if (event === null || typeof event === 'undefined') {
          value = null;
        } else if (!event.target && !!event.kind && event.kind === 'VariableDefinition') {
          targetValue = event;
          value = targetValue.variable;
        } else if (typeof event.kind === 'string') {
          value = event;
        } else if (event.target && typeof event.target.value === 'string') {
          targetValue = event.target.value;
          value = coerceArgValue(argType, targetValue);
        }

        var newDoc = _this.props.modifyFields((selection.fields || []).map(function (field) {
          var isTarget = field === argSelection;
          var newField = isTarget ? _extends({}, field, {
            value: value
          }) : field;
          return newField;
        }), options);

        return newDoc;
      }, _this._modifyChildFields = function (fields) {
        return _this.props.modifyFields(_this.props.selection.fields.map(function (field) {
          return field.name.value === _this.props.arg.name ? _extends({}, field, {
            value: {
              kind: 'ObjectValue',
              fields: fields
            }
          }) : field;
        }), true);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InputArgView, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            arg = _props.arg,
            parentField = _props.parentField;

        var argSelection = this._getArgSelection();

        return React.createElement(AbstractArgView, {
          argValue: argSelection ? argSelection.value : null,
          arg: arg,
          parentField: parentField,
          addArg: this._addArg,
          removeArg: this._removeArg,
          setArgFields: this._modifyChildFields,
          setArgValue: this._setArgValue,
          getDefaultScalarArgValue: this.props.getDefaultScalarArgValue,
          makeDefaultArg: this.props.makeDefaultArg,
          onRunOperation: this.props.onRunOperation,
          styleConfig: this.props.styleConfig,
          onCommit: this.props.onCommit,
          definition: this.props.definition
        });
      }
    }]);

    return InputArgView;
  }(React.PureComponent);

  function defaultValue(argType) {
    if ((0, _graphql.isEnumType)(argType)) {
      return {
        kind: 'EnumValue',
        value: argType.getValues()[0].name
      };
    } else {
      switch (argType.name) {
        case 'String':
          return {
            kind: 'StringValue',
            value: ''
          };

        case 'Float':
          return {
            kind: 'FloatValue',
            value: '1.5'
          };

        case 'Int':
          return {
            kind: 'IntValue',
            value: '10'
          };

        case 'Boolean':
          return {
            kind: 'BooleanValue',
            value: false
          };

        default:
          return {
            kind: 'StringValue',
            value: ''
          };
      }
    }
  }

  function defaultGetDefaultScalarArgValue(parentField, arg, argType) {
    return defaultValue(argType);
  }

  var ArgView = function (_React$PureComponent2) {
    _inherits(ArgView, _React$PureComponent2);

    function ArgView() {
      var _ref2;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, ArgView);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = ArgView.__proto__ || Object.getPrototypeOf(ArgView)).call.apply(_ref2, [this].concat(args))), _this2), _this2._getArgSelection = function () {
        var selection = _this2.props.selection;
        return (selection.arguments || []).find(function (arg) {
          return arg.name.value === _this2.props.arg.name;
        });
      }, _this2._removeArg = function (commit) {
        var selection = _this2.props.selection;

        var argSelection = _this2._getArgSelection();

        _this2._previousArgSelection = argSelection;
        return _this2.props.modifyArguments((selection.arguments || []).filter(function (arg) {
          return arg !== argSelection;
        }), commit);
      }, _this2._addArg = function (commit) {
        var _this2$props = _this2.props,
            selection = _this2$props.selection,
            getDefaultScalarArgValue = _this2$props.getDefaultScalarArgValue,
            makeDefaultArg = _this2$props.makeDefaultArg,
            parentField = _this2$props.parentField,
            arg = _this2$props.arg;
        var argType = unwrapInputType(arg.type);
        var argSelection = null;

        if (_this2._previousArgSelection) {
          argSelection = _this2._previousArgSelection;
        } else if ((0, _graphql.isInputObjectType)(argType)) {
          var _fields2 = argType.getFields();

          argSelection = {
            kind: 'Argument',
            name: {
              kind: 'Name',
              value: arg.name
            },
            value: {
              kind: 'ObjectValue',
              fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, Object.keys(_fields2).map(function (k) {
                return _fields2[k];
              }))
            }
          };
        } else if ((0, _graphql.isLeafType)(argType)) {
          argSelection = {
            kind: 'Argument',
            name: {
              kind: 'Name',
              value: arg.name
            },
            value: getDefaultScalarArgValue(parentField, arg, argType)
          };
        }

        if (!argSelection) {
          console.error('Unable to add arg for argType', argType);
          return null;
        } else {
          return _this2.props.modifyArguments([].concat(_toConsumableArray(selection.arguments || []), [argSelection]), commit);
        }
      }, _this2._setArgValue = function (event, options) {
        var settingToNull = false;
        var settingToVariable = false;
        var settingToLiteralValue = false;

        try {
          if (event.kind === 'VariableDefinition') {
            settingToVariable = true;
          } else if (event === null || typeof event === 'undefined') {
            settingToNull = true;
          } else if (typeof event.kind === 'string') {
            settingToLiteralValue = true;
          }
        } catch (e) {}

        var selection = _this2.props.selection;

        var argSelection = _this2._getArgSelection();

        if (!argSelection && !settingToVariable) {
          console.error('missing arg selection when setting arg value');
          return;
        }

        var argType = unwrapInputType(_this2.props.arg.type);
        var handleable = (0, _graphql.isLeafType)(argType) || settingToVariable || settingToNull || settingToLiteralValue;

        if (!handleable) {
          console.warn('Unable to handle non leaf types in ArgView._setArgValue');
          return;
        }

        var targetValue = void 0;
        var value = void 0;

        if (event === null || typeof event === 'undefined') {
          value = null;
        } else if (event.target && typeof event.target.value === 'string') {
          targetValue = event.target.value;
          value = coerceArgValue(argType, targetValue);
        } else if (!event.target && event.kind === 'VariableDefinition') {
          targetValue = event;
          value = targetValue.variable;
        } else if (typeof event.kind === 'string') {
          value = event;
        }

        return _this2.props.modifyArguments((selection.arguments || []).map(function (a) {
          return a === argSelection ? _extends({}, a, {
            value: value
          }) : a;
        }), options);
      }, _this2._setArgFields = function (fields, commit) {
        var selection = _this2.props.selection;

        var argSelection = _this2._getArgSelection();

        if (!argSelection) {
          console.error('missing arg selection when setting arg value');
          return;
        }

        return _this2.props.modifyArguments((selection.arguments || []).map(function (a) {
          return a === argSelection ? _extends({}, a, {
            value: {
              kind: 'ObjectValue',
              fields: fields
            }
          }) : a;
        }), commit);
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(ArgView, [{
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            arg = _props2.arg,
            parentField = _props2.parentField;

        var argSelection = this._getArgSelection();

        return React.createElement(AbstractArgView, {
          argValue: argSelection ? argSelection.value : null,
          arg: arg,
          parentField: parentField,
          addArg: this._addArg,
          removeArg: this._removeArg,
          setArgFields: this._setArgFields,
          setArgValue: this._setArgValue,
          getDefaultScalarArgValue: this.props.getDefaultScalarArgValue,
          makeDefaultArg: this.props.makeDefaultArg,
          onRunOperation: this.props.onRunOperation,
          styleConfig: this.props.styleConfig,
          onCommit: this.props.onCommit,
          definition: this.props.definition
        });
      }
    }]);

    return ArgView;
  }(React.PureComponent);

  function isRunShortcut(event) {
    return event.ctrlKey && event.key === 'Enter';
  }

  function canRunOperation(operationName) {
    // it does not make sense to try to execute a fragment
    return operationName !== 'FragmentDefinition';
  }

  var ScalarInput = function (_React$PureComponent3) {
    _inherits(ScalarInput, _React$PureComponent3);

    function ScalarInput() {
      var _ref3;

      var _temp3, _this3, _ret3;

      _classCallCheck(this, ScalarInput);

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = ScalarInput.__proto__ || Object.getPrototypeOf(ScalarInput)).call.apply(_ref3, [this].concat(args))), _this3), _this3._handleChange = function (event) {
        _this3.props.setArgValue(event, true);
      }, _temp3), _possibleConstructorReturn(_this3, _ret3);
    }

    _createClass(ScalarInput, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var input = this._ref;
        var activeElement = document.activeElement;

        if (input && activeElement && !(activeElement instanceof HTMLTextAreaElement)) {
          input.focus();
          input.setSelectionRange(0, input.value.length);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props3 = this.props,
            arg = _props3.arg,
            argValue = _props3.argValue,
            styleConfig = _props3.styleConfig;
        var argType = unwrapInputType(arg.type);
        var value = typeof argValue.value === 'string' ? argValue.value : '';
        var color = this.props.argValue.kind === 'StringValue' ? styleConfig.colors.string : styleConfig.colors.number;
        return React.createElement('span', {
          style: {
            color: color
          }
        }, argType.name === 'String' ? '"' : '', React.createElement('input', {
          style: {
            border: 'none',
            borderBottom: '1px solid #888',
            outline: 'none',
            width: Math.max(1, Math.min(15, value.length)) + 'ch',
            color: color
          },
          ref: function ref(_ref4) {
            _this4._ref = _ref4;
          },
          type: 'text',
          onChange: this._handleChange,
          value: value
        }), argType.name === 'String' ? '"' : '');
      }
    }]);

    return ScalarInput;
  }(React.PureComponent);

  var AbstractArgView = function (_React$PureComponent4) {
    _inherits(AbstractArgView, _React$PureComponent4);

    function AbstractArgView() {
      var _ref5;

      var _temp4, _this5, _ret4;

      _classCallCheck(this, AbstractArgView);

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _ret4 = (_temp4 = (_this5 = _possibleConstructorReturn(this, (_ref5 = AbstractArgView.__proto__ || Object.getPrototypeOf(AbstractArgView)).call.apply(_ref5, [this].concat(args))), _this5), _this5.state = {
        displayArgActions: false
      }, _temp4), _possibleConstructorReturn(_this5, _ret4);
    }

    _createClass(AbstractArgView, [{
      key: 'render',
      value: function render() {
        var _this6 = this;

        var _props4 = this.props,
            argValue = _props4.argValue,
            arg = _props4.arg,
            styleConfig = _props4.styleConfig;
        /* TODO: handle List types*/

        var argType = unwrapInputType(arg.type);
        var input = null;

        if (argValue) {
          if (argValue.kind === 'Variable') {
            input = React.createElement('span', {
              style: {
                color: styleConfig.colors.variable
              }
            }, '$', argValue.name.value);
          } else if ((0, _graphql.isScalarType)(argType)) {
            if (argType.name === 'Boolean') {
              input = React.createElement('select', {
                style: {
                  color: styleConfig.colors.builtin
                },
                onChange: this.props.setArgValue,
                value: argValue.kind === 'BooleanValue' ? argValue.value : undefined
              }, React.createElement('option', {
                key: 'true',
                value: 'true'
              }, 'true'), React.createElement('option', {
                key: 'false',
                value: 'false'
              }, 'false'));
            } else {
              input = React.createElement(ScalarInput, {
                setArgValue: this.props.setArgValue,
                arg: arg,
                argValue: argValue,
                onRunOperation: this.props.onRunOperation,
                styleConfig: this.props.styleConfig
              });
            }
          } else if ((0, _graphql.isEnumType)(argType)) {
            if (argValue.kind === 'EnumValue') {
              input = React.createElement('select', {
                style: {
                  backgroundColor: 'white',
                  color: styleConfig.colors.string2
                },
                onChange: this.props.setArgValue,
                value: argValue.value
              }, argType.getValues().map(function (value) {
                return React.createElement('option', {
                  key: value.name,
                  value: value.name
                }, value.name);
              }));
            } else {
              console.error('arg mismatch between arg and selection', argType, argValue);
            }
          } else if ((0, _graphql.isInputObjectType)(argType)) {
            if (argValue.kind === 'ObjectValue') {
              var _fields3 = argType.getFields();

              input = React.createElement('div', {
                style: {
                  marginLeft: 16
                }
              }, Object.keys(_fields3).sort().map(function (fieldName) {
                return React.createElement(InputArgView, {
                  key: fieldName,
                  arg: _fields3[fieldName],
                  parentField: _this6.props.parentField,
                  selection: argValue,
                  modifyFields: _this6.props.setArgFields,
                  getDefaultScalarArgValue: _this6.props.getDefaultScalarArgValue,
                  makeDefaultArg: _this6.props.makeDefaultArg,
                  onRunOperation: _this6.props.onRunOperation,
                  styleConfig: _this6.props.styleConfig,
                  onCommit: _this6.props.onCommit,
                  definition: _this6.props.definition
                });
              }));
            } else {
              console.error('arg mismatch between arg and selection', argType, argValue);
            }
          }
        }

        var variablize = function variablize() {
          /**
          1. Find current operation variables
          2. Find current arg value
          3. Create a new variable
          4. Replace current arg value with variable
          5. Add variable to operation
          */
          var baseVariableName = arg.name;
          var conflictingNameCount = (_this6.props.definition.variableDefinitions || []).filter(function (varDef) {
            return varDef.variable.name.value.startsWith(baseVariableName);
          }).length;
          var variableName = void 0;

          if (conflictingNameCount > 0) {
            variableName = '' + baseVariableName + conflictingNameCount;
          } else {
            variableName = baseVariableName;
          } // To get an AST definition of our variable from the instantiated arg,
          // we print it to a string, then parseType to get our AST.


          var argPrintedType = arg.type.toString();
          var argType = (0, _graphql.parseType)(argPrintedType);
          var base = {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: variableName
              }
            },
            type: argType,
            directives: []
          };

          var variableDefinitionByName = function variableDefinitionByName(name) {
            return (_this6.props.definition.variableDefinitions || []).find(function (varDef) {
              return varDef.variable.name.value === name;
            });
          };

          var variable = void 0;
          var subVariableUsageCountByName = {};

          if (typeof argValue !== 'undefined' && argValue !== null) {
            /** In the process of devariabilizing descendent selections,
             * we may have caused their variable definitions to become unused.
             * Keep track and remove any variable definitions with 1 or fewer usages.
             * */
            var cleanedDefaultValue = (0, _graphql.visit)(argValue, {
              Variable: function Variable(node) {
                var varName = node.name.value;
                var varDef = variableDefinitionByName(varName);
                subVariableUsageCountByName[varName] = subVariableUsageCountByName[varName] + 1 || 1;

                if (!varDef) {
                  return;
                }

                return varDef.defaultValue;
              }
            });
            var isNonNullable = base.type.kind === 'NonNullType'; // We're going to give the variable definition a default value, so we must make its type nullable

            var unwrappedBase = isNonNullable ? _extends({}, base, {
              type: base.type.type
            }) : base;
            variable = _extends({}, unwrappedBase, {
              defaultValue: cleanedDefaultValue
            });
          } else {
            variable = base;
          }

          var newlyUnusedVariables = Object.entries(subVariableUsageCountByName) // $FlowFixMe: Can't get Object.entries to realize usageCount *must* be a number
          .filter(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2);
                _ref7[0];
                var usageCount = _ref7[1];

            return usageCount < 2;
          }).map(function (_ref8) {
            var _ref9 = _slicedToArray(_ref8, 2),
                varName = _ref9[0];
                _ref9[1];

            return varName;
          });

          if (variable) {
            var _newDoc = _this6.props.setArgValue(variable, false);

            if (_newDoc) {
              var targetOperation = _newDoc.definitions.find(function (definition) {
                if (!!definition.operation && !!definition.name && !!definition.name.value && //
                !!_this6.props.definition.name && !!_this6.props.definition.name.value) {
                  return definition.name.value === _this6.props.definition.name.value;
                } else {
                  return false;
                }
              });

              var newVariableDefinitions = [].concat(_toConsumableArray(targetOperation.variableDefinitions || []), [variable]).filter(function (varDef) {
                return newlyUnusedVariables.indexOf(varDef.variable.name.value) === -1;
              });

              var newOperation = _extends({}, targetOperation, {
                variableDefinitions: newVariableDefinitions
              });

              var existingDefs = _newDoc.definitions;
              var newDefinitions = existingDefs.map(function (existingOperation) {
                if (targetOperation === existingOperation) {
                  return newOperation;
                } else {
                  return existingOperation;
                }
              });

              var finalDoc = _extends({}, _newDoc, {
                definitions: newDefinitions
              });

              _this6.props.onCommit(finalDoc);
            }
          }
        };

        var devariablize = function devariablize() {
          /**
           * 1. Find the current variable definition in the operation def
           * 2. Extract its value
           * 3. Replace the current arg value
           * 4. Visit the resulting operation to see if there are any other usages of the variable
           * 5. If not, remove the variableDefinition
           */
          if (!argValue || !argValue.name || !argValue.name.value) {
            return;
          }

          var variableName = argValue.name.value;
          var variableDefinition = (_this6.props.definition.variableDefinitions || []).find(function (varDef) {
            return varDef.variable.name.value === variableName;
          });

          if (!variableDefinition) {
            return;
          }

          var defaultValue = variableDefinition.defaultValue;

          var newDoc = _this6.props.setArgValue(defaultValue, {
            commit: false
          });

          if (newDoc) {
            var targetOperation = newDoc.definitions.find(function (definition) {
              return definition.name.value === _this6.props.definition.name.value;
            });

            if (!targetOperation) {
              return;
            } // After de-variabilizing, see if the variable is still in use. If not, remove it.


            var variableUseCount = 0;
            (0, _graphql.visit)(targetOperation, {
              Variable: function Variable(node) {
                if (node.name.value === variableName) {
                  variableUseCount = variableUseCount + 1;
                }
              }
            });
            var newVariableDefinitions = targetOperation.variableDefinitions || []; // A variable is in use if it shows up at least twice (once in the definition, once in the selection)

            if (variableUseCount < 2) {
              newVariableDefinitions = newVariableDefinitions.filter(function (varDef) {
                return varDef.variable.name.value !== variableName;
              });
            }

            var newOperation = _extends({}, targetOperation, {
              variableDefinitions: newVariableDefinitions
            });

            var existingDefs = newDoc.definitions;
            var newDefinitions = existingDefs.map(function (existingOperation) {
              if (targetOperation === existingOperation) {
                return newOperation;
              } else {
                return existingOperation;
              }
            });

            var finalDoc = _extends({}, newDoc, {
              definitions: newDefinitions
            });

            _this6.props.onCommit(finalDoc);
          }
        };

        var isArgValueVariable = argValue && argValue.kind === 'Variable';
        var variablizeActionButton = !this.state.displayArgActions ? null : React.createElement('button', {
          type: 'submit',
          className: 'toolbar-button',
          title: isArgValueVariable ? 'Remove the variable' : 'Extract the current value into a GraphQL variable',
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();

            if (isArgValueVariable) {
              devariablize();
            } else {
              variablize();
            }
          },
          style: styleConfig.styles.actionButtonStyle
        }, React.createElement('span', {
          style: {
            color: styleConfig.colors.variable
          }
        }, '$'));
        return React.createElement('div', {
          style: {
            cursor: 'pointer',
            minHeight: '16px',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          },
          'data-arg-name': arg.name,
          'data-arg-type': argType.name,
          className: 'graphiql-explorer-' + arg.name
        }, React.createElement('span', {
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick(event) {
            var shouldAdd = !argValue;

            if (shouldAdd) {
              _this6.props.addArg(true);
            } else {
              _this6.props.removeArg(true);
            }

            _this6.setState({
              displayArgActions: shouldAdd
            });
          }
        }, (0, _graphql.isInputObjectType)(argType) ? React.createElement('span', null, !!argValue ? this.props.styleConfig.arrowOpen : this.props.styleConfig.arrowClosed) : React.createElement(Checkbox, {
          checked: !!argValue,
          styleConfig: this.props.styleConfig
        }), React.createElement('span', {
          style: {
            color: styleConfig.colors.attribute
          },
          title: arg.description,
          onMouseEnter: function onMouseEnter() {
            // Make implementation a bit easier and only show 'variablize' action if arg is already added
            if (argValue !== null && typeof argValue !== 'undefined') {
              _this6.setState({
                displayArgActions: true
              });
            }
          },
          onMouseLeave: function onMouseLeave() {
            return _this6.setState({
              displayArgActions: false
            });
          }
        }, arg.name, isRequiredArgument(arg) ? '*' : '', ': ', variablizeActionButton, ' '), ' '), input || React.createElement('span', null), ' ');
      }
    }]);

    return AbstractArgView;
  }(React.PureComponent);

  var AbstractView = function (_React$PureComponent5) {
    _inherits(AbstractView, _React$PureComponent5);

    function AbstractView() {
      var _ref10;

      var _temp5, _this7, _ret5;

      _classCallCheck(this, AbstractView);

      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _ret5 = (_temp5 = (_this7 = _possibleConstructorReturn(this, (_ref10 = AbstractView.__proto__ || Object.getPrototypeOf(AbstractView)).call.apply(_ref10, [this].concat(args))), _this7), _this7._addFragment = function () {
        _this7.props.modifySelections([].concat(_toConsumableArray(_this7.props.selections), [_this7._previousSelection || {
          kind: 'InlineFragment',
          typeCondition: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: _this7.props.implementingType.name
            }
          },
          selectionSet: {
            kind: 'SelectionSet',
            selections: _this7.props.getDefaultFieldNames(_this7.props.implementingType).map(function (fieldName) {
              return {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: fieldName
                }
              };
            })
          }
        }]));
      }, _this7._removeFragment = function () {
        var thisSelection = _this7._getSelection();

        _this7._previousSelection = thisSelection;

        _this7.props.modifySelections(_this7.props.selections.filter(function (s) {
          return s !== thisSelection;
        }));
      }, _this7._getSelection = function () {
        var selection = _this7.props.selections.find(function (selection) {
          return selection.kind === 'InlineFragment' && selection.typeCondition && _this7.props.implementingType.name === selection.typeCondition.name.value;
        });

        if (!selection) {
          return null;
        }

        if (selection.kind === 'InlineFragment') {
          return selection;
        }
      }, _this7._modifyChildSelections = function (selections, options) {
        var thisSelection = _this7._getSelection();

        return _this7.props.modifySelections(_this7.props.selections.map(function (selection) {
          if (selection === thisSelection) {
            return {
              directives: selection.directives,
              kind: 'InlineFragment',
              typeCondition: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: _this7.props.implementingType.name
                }
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: selections
              }
            };
          }

          return selection;
        }), options);
      }, _temp5), _possibleConstructorReturn(_this7, _ret5);
    }

    _createClass(AbstractView, [{
      key: 'render',
      value: function render() {
        var _this8 = this;

        var _props5 = this.props,
            implementingType = _props5.implementingType,
            schema = _props5.schema,
            getDefaultFieldNames = _props5.getDefaultFieldNames,
            styleConfig = _props5.styleConfig;

        var selection = this._getSelection();

        var fields = implementingType.getFields();
        var childSelections = selection ? selection.selectionSet ? selection.selectionSet.selections : [] : [];
        return React.createElement('div', {
          className: 'graphiql-explorer-' + implementingType.name
        }, React.createElement('span', {
          style: {
            cursor: 'pointer'
          },
          onClick: selection ? this._removeFragment : this._addFragment
        }, React.createElement(Checkbox, {
          checked: !!selection,
          styleConfig: this.props.styleConfig
        }), React.createElement('span', {
          style: {
            color: styleConfig.colors.atom
          }
        }, this.props.implementingType.name)), selection ? React.createElement('div', {
          style: {
            marginLeft: 16
          }
        }, Object.keys(fields).sort().map(function (fieldName) {
          return React.createElement(FieldView, {
            key: fieldName,
            field: fields[fieldName],
            selections: childSelections,
            modifySelections: _this8._modifyChildSelections,
            schema: schema,
            getDefaultFieldNames: getDefaultFieldNames,
            getDefaultScalarArgValue: _this8.props.getDefaultScalarArgValue,
            makeDefaultArg: _this8.props.makeDefaultArg,
            onRunOperation: _this8.props.onRunOperation,
            onCommit: _this8.props.onCommit,
            styleConfig: _this8.props.styleConfig,
            definition: _this8.props.definition,
            availableFragments: _this8.props.availableFragments
          });
        })) : null);
      }
    }]);

    return AbstractView;
  }(React.PureComponent);

  var FragmentView = function (_React$PureComponent6) {
    _inherits(FragmentView, _React$PureComponent6);

    function FragmentView() {
      var _ref11;

      var _temp6, _this9, _ret6;

      _classCallCheck(this, FragmentView);

      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _ret6 = (_temp6 = (_this9 = _possibleConstructorReturn(this, (_ref11 = FragmentView.__proto__ || Object.getPrototypeOf(FragmentView)).call.apply(_ref11, [this].concat(args))), _this9), _this9._addFragment = function () {
        _this9.props.modifySelections([].concat(_toConsumableArray(_this9.props.selections), [_this9._previousSelection || {
          kind: 'FragmentSpread',
          name: _this9.props.fragment.name
        }]));
      }, _this9._removeFragment = function () {
        var thisSelection = _this9._getSelection();

        _this9._previousSelection = thisSelection;

        _this9.props.modifySelections(_this9.props.selections.filter(function (s) {
          var isTargetSelection = s.kind === 'FragmentSpread' && s.name.value === _this9.props.fragment.name.value;
          return !isTargetSelection;
        }));
      }, _this9._getSelection = function () {
        var selection = _this9.props.selections.find(function (selection) {
          return selection.kind === 'FragmentSpread' && selection.name.value === _this9.props.fragment.name.value;
        });

        return selection;
      }, _temp6), _possibleConstructorReturn(_this9, _ret6);
    }

    _createClass(FragmentView, [{
      key: 'render',
      value: function render() {
        var styleConfig = this.props.styleConfig;

        var selection = this._getSelection();

        return React.createElement('div', {
          className: 'graphiql-explorer-' + this.props.fragment.name.value
        }, React.createElement('span', {
          style: {
            cursor: 'pointer'
          },
          onClick: selection ? this._removeFragment : this._addFragment
        }, React.createElement(Checkbox, {
          checked: !!selection,
          styleConfig: this.props.styleConfig
        }), React.createElement('span', {
          style: {
            color: styleConfig.colors.def
          },
          className: 'graphiql-explorer-' + this.props.fragment.name.value
        }, this.props.fragment.name.value)));
      }
    }]);

    return FragmentView;
  }(React.PureComponent);

  function defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, fields) {
    var nodes = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _field = _step.value;

        if ((0, _graphql.isRequiredInputField)(_field) || makeDefaultArg && makeDefaultArg(parentField, _field)) {
          var fieldType = unwrapInputType(_field.type);

          if ((0, _graphql.isInputObjectType)(fieldType)) {
            (function () {
              var fields = fieldType.getFields();
              nodes.push({
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: _field.name
                },
                value: {
                  kind: 'ObjectValue',
                  fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, parentField, Object.keys(fields).map(function (k) {
                    return fields[k];
                  }))
                }
              });
            })();
          } else if ((0, _graphql.isLeafType)(fieldType)) {
            nodes.push({
              kind: 'ObjectField',
              name: {
                kind: 'Name',
                value: _field.name
              },
              value: getDefaultScalarArgValue(parentField, _field, fieldType)
            });
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return nodes;
  }

  function defaultArgs(getDefaultScalarArgValue, makeDefaultArg, field) {
    var args = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = field.args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _arg = _step2.value;

        if (isRequiredArgument(_arg) || makeDefaultArg && makeDefaultArg(field, _arg)) {
          var argType = unwrapInputType(_arg.type);

          if ((0, _graphql.isInputObjectType)(argType)) {
            (function () {
              var fields = argType.getFields();
              args.push({
                kind: 'Argument',
                name: {
                  kind: 'Name',
                  value: _arg.name
                },
                value: {
                  kind: 'ObjectValue',
                  fields: defaultInputObjectFields(getDefaultScalarArgValue, makeDefaultArg, field, Object.keys(fields).map(function (k) {
                    return fields[k];
                  }))
                }
              });
            })();
          } else if ((0, _graphql.isLeafType)(argType)) {
            args.push({
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: _arg.name
              },
              value: getDefaultScalarArgValue(field, _arg, argType)
            });
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return args;
  }

  var FieldView = function (_React$PureComponent7) {
    _inherits(FieldView, _React$PureComponent7);

    function FieldView() {
      var _ref12;

      var _temp7, _this10, _ret9;

      _classCallCheck(this, FieldView);

      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _ret9 = (_temp7 = (_this10 = _possibleConstructorReturn(this, (_ref12 = FieldView.__proto__ || Object.getPrototypeOf(FieldView)).call.apply(_ref12, [this].concat(args))), _this10), _this10.state = {
        displayFieldActions: false
      }, _this10._addAllFieldsToSelections = function (rawSubfields) {
        var subFields = !!rawSubfields ? Object.keys(rawSubfields).map(function (fieldName) {
          return {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: fieldName
            },
            arguments: []
          };
        }) : [];
        var subSelectionSet = {
          kind: 'SelectionSet',
          selections: subFields
        };
        var nextSelections = [].concat(_toConsumableArray(_this10.props.selections.filter(function (selection) {
          if (selection.kind === 'InlineFragment') {
            return true;
          } else {
            // Remove the current selection set for the target field
            return selection.name.value !== _this10.props.field.name;
          }
        })), [{
          kind: 'Field',
          name: {
            kind: 'Name',
            value: _this10.props.field.name
          },
          arguments: defaultArgs(_this10.props.getDefaultScalarArgValue, _this10.props.makeDefaultArg, _this10.props.field),
          selectionSet: subSelectionSet
        }]);

        _this10.props.modifySelections(nextSelections);
      }, _this10._addFieldToSelections = function (rawSubfields) {
        var nextSelections = [].concat(_toConsumableArray(_this10.props.selections), [_this10._previousSelection || {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: _this10.props.field.name
          },
          arguments: defaultArgs(_this10.props.getDefaultScalarArgValue, _this10.props.makeDefaultArg, _this10.props.field)
        }]);

        _this10.props.modifySelections(nextSelections);
      }, _this10._handleUpdateSelections = function (event) {
        var selection = _this10._getSelection();

        if (selection && !event.altKey) {
          _this10._removeFieldFromSelections();
        } else {
          var fieldType = (0, _graphql.getNamedType)(_this10.props.field.type);
          var rawSubfields = (0, _graphql.isObjectType)(fieldType) && fieldType.getFields();
          var shouldSelectAllSubfields = !!rawSubfields && event.altKey;
          shouldSelectAllSubfields ? _this10._addAllFieldsToSelections(rawSubfields) : _this10._addFieldToSelections(rawSubfields);
        }
      }, _this10._removeFieldFromSelections = function () {
        var previousSelection = _this10._getSelection();

        _this10._previousSelection = previousSelection;

        _this10.props.modifySelections(_this10.props.selections.filter(function (selection) {
          return selection !== previousSelection;
        }));
      }, _this10._getSelection = function () {
        var selection = _this10.props.selections.find(function (selection) {
          return selection.kind === 'Field' && _this10.props.field.name === selection.name.value;
        });

        if (!selection) {
          return null;
        }

        if (selection.kind === 'Field') {
          return selection;
        }
      }, _this10._setArguments = function (argumentNodes, options) {
        var selection = _this10._getSelection();

        if (!selection) {
          console.error('Missing selection when setting arguments', argumentNodes);
          return;
        }

        return _this10.props.modifySelections(_this10.props.selections.map(function (s) {
          return s === selection ? {
            alias: selection.alias,
            arguments: argumentNodes,
            directives: selection.directives,
            kind: 'Field',
            name: selection.name,
            selectionSet: selection.selectionSet
          } : s;
        }), options);
      }, _this10._modifyChildSelections = function (selections, options) {
        return _this10.props.modifySelections(_this10.props.selections.map(function (selection) {
          if (selection.kind === 'Field' && _this10.props.field.name === selection.name.value) {
            if (selection.kind !== 'Field') {
              throw new Error('invalid selection');
            }

            return {
              alias: selection.alias,
              arguments: selection.arguments,
              directives: selection.directives,
              kind: 'Field',
              name: selection.name,
              selectionSet: {
                kind: 'SelectionSet',
                selections: selections
              }
            };
          }

          return selection;
        }), options);
      }, _temp7), _possibleConstructorReturn(_this10, _ret9);
    }

    _createClass(FieldView, [{
      key: 'render',
      value: function render() {
        var _this11 = this;

        var _props6 = this.props,
            field = _props6.field,
            schema = _props6.schema,
            getDefaultFieldNames = _props6.getDefaultFieldNames,
            styleConfig = _props6.styleConfig;

        var selection = this._getSelection();

        var type = unwrapOutputType$1(field.type);
        var args = field.args.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        var className = 'graphiql-explorer-node graphiql-explorer-' + field.name;

        if (field.isDeprecated) {
          className += ' graphiql-explorer-deprecated';
        }

        var applicableFragments = (0, _graphql.isObjectType)(type) || (0, _graphql.isInterfaceType)(type) || (0, _graphql.isUnionType)(type) ? this.props.availableFragments && this.props.availableFragments[type.name] : null;
        var node = React.createElement('div', {
          className: className
        }, React.createElement('span', {
          title: field.description,
          style: {
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: '16px',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          },
          'data-field-name': field.name,
          'data-field-type': type.name,
          onClick: this._handleUpdateSelections,
          onMouseEnter: function onMouseEnter() {
            var containsMeaningfulSubselection = (0, _graphql.isObjectType)(type) && selection && selection.selectionSet && selection.selectionSet.selections.filter(function (selection) {
              return selection.kind !== 'FragmentSpread';
            }).length > 0;

            if (containsMeaningfulSubselection) {
              _this11.setState({
                displayFieldActions: true
              });
            }
          },
          onMouseLeave: function onMouseLeave() {
            return _this11.setState({
              displayFieldActions: false
            });
          }
        }, (0, _graphql.isObjectType)(type) ? React.createElement('span', null, !!selection ? this.props.styleConfig.arrowOpen : this.props.styleConfig.arrowClosed) : null, (0, _graphql.isObjectType)(type) ? null : React.createElement(Checkbox, {
          checked: !!selection,
          styleConfig: this.props.styleConfig
        }), React.createElement('span', {
          style: {
            color: styleConfig.colors.property
          },
          className: 'graphiql-explorer-field-view'
        }, field.name), !this.state.displayFieldActions ? null : React.createElement('button', {
          type: 'submit',
          className: 'toolbar-button',
          title: 'Extract selections into a new reusable fragment',
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation(); // 1. Create a fragment spread node
            // 2. Copy selections from this object to fragment
            // 3. Replace selections in this object with fragment spread
            // 4. Add fragment to document

            var typeName = type.name;
            var newFragmentName = typeName + 'Fragment';
            var conflictingNameCount = (applicableFragments || []).filter(function (fragment) {
              return fragment.name.value.startsWith(newFragmentName);
            }).length;

            if (conflictingNameCount > 0) {
              newFragmentName = '' + newFragmentName + conflictingNameCount;
            }

            var childSelections = selection ? selection.selectionSet ? selection.selectionSet.selections : [] : [];
            var nextSelections = [{
              kind: 'FragmentSpread',
              name: {
                kind: 'Name',
                value: newFragmentName
              },
              directives: []
            }];
            var newFragmentDefinition = {
              kind: 'FragmentDefinition',
              name: {
                kind: 'Name',
                value: newFragmentName
              },
              typeCondition: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: type.name
                }
              },
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: childSelections
              }
            };

            var newDoc = _this11._modifyChildSelections(nextSelections, false);

            if (newDoc) {
              var newDocWithFragment = _extends({}, newDoc, {
                definitions: [].concat(_toConsumableArray(newDoc.definitions), [newFragmentDefinition])
              });

              _this11.props.onCommit(newDocWithFragment);
            } else {
              console.warn('Unable to complete extractFragment operation');
            }
          },
          style: _extends({}, styleConfig.styles.actionButtonStyle)
        }, React.createElement('span', null, '…'))), selection && args.length ? React.createElement('div', {
          style: {
            marginLeft: 16
          },
          className: 'graphiql-explorer-graphql-arguments'
        }, args.map(function (arg) {
          return React.createElement(ArgView, {
            key: arg.name,
            parentField: field,
            arg: arg,
            selection: selection,
            modifyArguments: _this11._setArguments,
            getDefaultScalarArgValue: _this11.props.getDefaultScalarArgValue,
            makeDefaultArg: _this11.props.makeDefaultArg,
            onRunOperation: _this11.props.onRunOperation,
            styleConfig: _this11.props.styleConfig,
            onCommit: _this11.props.onCommit,
            definition: _this11.props.definition
          });
        })) : null);

        if (selection && ((0, _graphql.isObjectType)(type) || (0, _graphql.isInterfaceType)(type) || (0, _graphql.isUnionType)(type))) {
          var _fields4 = (0, _graphql.isUnionType)(type) ? {} : type.getFields();

          var childSelections = selection ? selection.selectionSet ? selection.selectionSet.selections : [] : [];
          return React.createElement('div', {
            className: 'graphiql-explorer-' + field.name
          }, node, React.createElement('div', {
            style: {
              marginLeft: 16
            }
          }, !!applicableFragments ? applicableFragments.map(function (fragment) {
            var type = schema.getType(fragment.typeCondition.name.value);
            var fragmentName = fragment.name.value;
            return !type ? null : React.createElement(FragmentView, {
              key: fragmentName,
              fragment: fragment,
              selections: childSelections,
              modifySelections: _this11._modifyChildSelections,
              schema: schema,
              styleConfig: _this11.props.styleConfig,
              onCommit: _this11.props.onCommit
            });
          }) : null, Object.keys(_fields4).sort().map(function (fieldName) {
            return React.createElement(FieldView, {
              key: fieldName,
              field: _fields4[fieldName],
              selections: childSelections,
              modifySelections: _this11._modifyChildSelections,
              schema: schema,
              getDefaultFieldNames: getDefaultFieldNames,
              getDefaultScalarArgValue: _this11.props.getDefaultScalarArgValue,
              makeDefaultArg: _this11.props.makeDefaultArg,
              onRunOperation: _this11.props.onRunOperation,
              styleConfig: _this11.props.styleConfig,
              onCommit: _this11.props.onCommit,
              definition: _this11.props.definition,
              availableFragments: _this11.props.availableFragments
            });
          }), (0, _graphql.isInterfaceType)(type) || (0, _graphql.isUnionType)(type) ? schema.getPossibleTypes(type).map(function (type) {
            return React.createElement(AbstractView, {
              key: type.name,
              implementingType: type,
              selections: childSelections,
              modifySelections: _this11._modifyChildSelections,
              schema: schema,
              getDefaultFieldNames: getDefaultFieldNames,
              getDefaultScalarArgValue: _this11.props.getDefaultScalarArgValue,
              makeDefaultArg: _this11.props.makeDefaultArg,
              onRunOperation: _this11.props.onRunOperation,
              styleConfig: _this11.props.styleConfig,
              onCommit: _this11.props.onCommit,
              definition: _this11.props.definition
            });
          }) : null));
        }

        return node;
      }
    }]);

    return FieldView;
  }(React.PureComponent);

  function parseQuery(text) {
    try {
      if (!text.trim()) {
        return null;
      }

      return (0, _graphql.parse)(text, // Tell graphql to not bother track locations when parsing, we don't need
      // it and it's a tiny bit more expensive.
      {
        noLocation: true
      });
    } catch (e) {
      return new Error(e);
    }
  }

  var DEFAULT_OPERATION = {
    kind: 'OperationDefinition',
    operation: 'query',
    variableDefinitions: [],
    name: {
      kind: 'Name',
      value: 'MyQuery'
    },
    directives: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: []
    }
  };
  var DEFAULT_DOCUMENT = {
    kind: 'Document',
    definitions: [DEFAULT_OPERATION]
  };
  var parseQueryMemoize = null;

  function memoizeParseQuery(query) {
    if (parseQueryMemoize && parseQueryMemoize[0] === query) {
      return parseQueryMemoize[1];
    } else {
      var result = parseQuery(query);

      if (!result) {
        return DEFAULT_DOCUMENT;
      } else if (result instanceof Error) {
        if (parseQueryMemoize) {
          // Most likely a temporarily invalid query while they type
          return parseQueryMemoize[1];
        } else {
          return DEFAULT_DOCUMENT;
        }
      } else {
        parseQueryMemoize = [query, result];
        return result;
      }
    }
  }

  var defaultStyles = {
    buttonStyle: {
      fontSize: '1.2em',
      padding: '0px',
      backgroundColor: 'white',
      border: 'none',
      margin: '5px 0px',
      height: '40px',
      width: '100%',
      display: 'block',
      maxWidth: 'none'
    },
    actionButtonStyle: {
      padding: '0px',
      backgroundColor: 'white',
      border: 'none',
      margin: '0px',
      maxWidth: 'none',
      height: '15px',
      width: '15px',
      display: 'inline-block',
      fontSize: 'smaller'
    },
    explorerActionsStyle: {
      margin: '4px -8px -8px',
      paddingLeft: '8px',
      bottom: '0px',
      width: '100%',
      textAlign: 'center',
      background: 'none',
      borderTop: 'none',
      borderBottom: 'none'
    }
  };

  var RootView = function (_React$PureComponent8) {
    _inherits(RootView, _React$PureComponent8);

    function RootView() {
      var _ref13;

      var _temp8, _this12, _ret10;

      _classCallCheck(this, RootView);

      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return _ret10 = (_temp8 = (_this12 = _possibleConstructorReturn(this, (_ref13 = RootView.__proto__ || Object.getPrototypeOf(RootView)).call.apply(_ref13, [this].concat(args))), _this12), _this12.state = {
        newOperationType: 'query',
        displayTitleActions: false
      }, _this12._modifySelections = function (selections, options) {
        var operationDef = _this12.props.definition;

        if (operationDef.selectionSet.selections.length === 0 && _this12._previousOperationDef) {
          operationDef = _this12._previousOperationDef;
        }

        var newOperationDef = void 0;

        if (operationDef.kind === 'FragmentDefinition') {
          newOperationDef = _extends({}, operationDef, {
            selectionSet: _extends({}, operationDef.selectionSet, {
              selections: selections
            })
          });
        } else if (operationDef.kind === 'OperationDefinition') {
          var cleanedSelections = selections.filter(function (selection) {
            return !(selection.kind === 'Field' && selection.name.value === '__typename');
          });

          if (cleanedSelections.length === 0) {
            cleanedSelections = [{
              kind: 'Field',
              name: {
                kind: 'Name',
                value: '__typename ## Placeholder value'
              }
            }];
          }

          newOperationDef = _extends({}, operationDef, {
            selectionSet: _extends({}, operationDef.selectionSet, {
              selections: cleanedSelections
            })
          });
        }

        return _this12.props.onEdit(newOperationDef, options);
      }, _this12._onOperationRename = function (event) {
        return _this12.props.onOperationRename(event.target.value);
      }, _this12._handlePotentialRun = function (event) {
        if (isRunShortcut(event) && canRunOperation(_this12.props.definition.kind)) {
          _this12.props.onRunOperation(_this12.props.name);
        }
      }, _this12._rootViewElId = function () {
        var _this12$props = _this12.props,
            operationType = _this12$props.operationType,
            name = _this12$props.name;
        var rootViewElId = operationType + '-' + (name || 'unknown');
        return rootViewElId;
      }, _temp8), _possibleConstructorReturn(_this12, _ret10);
    }

    _createClass(RootView, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var rootViewElId = this._rootViewElId();

        this.props.onMount(rootViewElId);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this13 = this;

        var _props7 = this.props,
            operationType = _props7.operationType,
            definition = _props7.definition,
            schema = _props7.schema,
            getDefaultFieldNames = _props7.getDefaultFieldNames,
            styleConfig = _props7.styleConfig;

        var rootViewElId = this._rootViewElId();

        var fields = this.props.fields || {};
        var operationDef = definition;
        var selections = operationDef.selectionSet.selections;
        var operationDisplayName = this.props.name || capitalize(operationType) + ' Name';
        return React.createElement('div', {
          id: rootViewElId,
          tabIndex: '0',
          onKeyDown: this._handlePotentialRun,
          style: {
            // The actions bar has its own top border
            borderBottom: this.props.isLast ? 'none' : '1px solid #d6d6d6',
            marginBottom: '0em',
            paddingBottom: '1em'
          }
        }, React.createElement('div', {
          style: {
            color: styleConfig.colors.keyword,
            paddingBottom: 4
          },
          className: 'graphiql-operation-title-bar',
          onMouseEnter: function onMouseEnter() {
            return _this13.setState({
              displayTitleActions: true
            });
          },
          onMouseLeave: function onMouseLeave() {
            return _this13.setState({
              displayTitleActions: false
            });
          }
        }, operationType, ' ', React.createElement('span', {
          style: {
            color: styleConfig.colors.def
          }
        }, React.createElement('input', {
          style: {
            color: styleConfig.colors.def,
            border: 'none',
            borderBottom: '1px solid #888',
            outline: 'none',
            width: Math.max(4, operationDisplayName.length) + 'ch'
          },
          autoComplete: 'false',
          placeholder: capitalize(operationType) + ' Name',
          value: this.props.name,
          onKeyDown: this._handlePotentialRun,
          onChange: this._onOperationRename
        })), !!this.props.onTypeName ? React.createElement('span', null, React.createElement('br', null), 'on ' + this.props.onTypeName) : '', !!this.state.displayTitleActions ? React.createElement(React.Fragment, null, React.createElement('button', {
          type: 'submit',
          className: 'toolbar-button',
          onClick: function onClick() {
            return _this13.props.onOperationDestroy();
          },
          style: _extends({}, styleConfig.styles.actionButtonStyle)
        }, React.createElement('span', null, "\u2715")), React.createElement('button', {
          type: 'submit',
          className: 'toolbar-button',
          onClick: function onClick() {
            return _this13.props.onOperationClone();
          },
          style: _extends({}, styleConfig.styles.actionButtonStyle)
        }, React.createElement('span', null, '⎘'))) : ''), Object.keys(fields).sort().map(function (fieldName) {
          return React.createElement(FieldView, {
            key: fieldName,
            field: fields[fieldName],
            selections: selections,
            modifySelections: _this13._modifySelections,
            schema: schema,
            getDefaultFieldNames: getDefaultFieldNames,
            getDefaultScalarArgValue: _this13.props.getDefaultScalarArgValue,
            makeDefaultArg: _this13.props.makeDefaultArg,
            onRunOperation: _this13.props.onRunOperation,
            styleConfig: _this13.props.styleConfig,
            onCommit: _this13.props.onCommit,
            definition: _this13.props.definition,
            availableFragments: _this13.props.availableFragments
          });
        }));
      }
    }]);

    return RootView;
  }(React.PureComponent);

  function Attribution() {
    return React.createElement('div', {
      style: {
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1em',
        marginTop: 0,
        flexGrow: 1,
        justifyContent: 'flex-end'
      }
    }, React.createElement('div', {
      style: {
        borderTop: '1px solid #d6d6d6',
        paddingTop: '1em',
        width: '100%',
        textAlign: 'center'
      }
    }, 'GraphiQL Explorer by ', React.createElement('a', {
      href: 'https://www.onegraph.com'
    }, 'OneGraph')), React.createElement('div', null, 'Contribute on', ' ', React.createElement('a', {
      href: 'https://github.com/OneGraph/graphiql-explorer'
    }, 'GitHub')));
  }

  var Explorer = function (_React$PureComponent9) {
    _inherits(Explorer, _React$PureComponent9);

    function Explorer() {
      var _ref14;

      var _temp9, _this14, _ret11;

      _classCallCheck(this, Explorer);

      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      return _ret11 = (_temp9 = (_this14 = _possibleConstructorReturn(this, (_ref14 = Explorer.__proto__ || Object.getPrototypeOf(Explorer)).call.apply(_ref14, [this].concat(args))), _this14), _this14.state = {
        newOperationType: 'query',
        operation: null,
        operationToScrollTo: null
      }, _this14._resetScroll = function () {
        var container = _this14._ref;

        if (container) {
          container.scrollLeft = 0;
        }
      }, _this14._onEdit = function (query) {
        return _this14.props.onEdit(query);
      }, _this14._setAddOperationType = function (value) {
        _this14.setState({
          newOperationType: value
        });
      }, _this14._handleRootViewMount = function (rootViewElId) {
        if (!!_this14.state.operationToScrollTo && _this14.state.operationToScrollTo === rootViewElId) {
          var selector = '.graphiql-explorer-root #' + rootViewElId;
          var el = document.querySelector(selector);
          el && el.scrollIntoView();
        }
      }, _temp9), _possibleConstructorReturn(_this14, _ret11);
    }

    _createClass(Explorer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._resetScroll();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this15 = this;

        var _props8 = this.props,
            schema = _props8.schema,
            query = _props8.query,
            makeDefaultArg = _props8.makeDefaultArg;

        if (!schema) {
          return React.createElement('div', {
            style: {
              fontFamily: 'sans-serif'
            },
            className: 'error-container'
          }, 'No Schema Available');
        }

        var styleConfig = {
          colors: this.props.colors || defaultColors,
          checkboxChecked: this.props.checkboxChecked || defaultCheckboxChecked,
          checkboxUnchecked: this.props.checkboxUnchecked || defaultCheckboxUnchecked,
          arrowClosed: this.props.arrowClosed || defaultArrowClosed,
          arrowOpen: this.props.arrowOpen || defaultArrowOpen,
          styles: this.props.styles ? _extends({}, defaultStyles, this.props.styles) : defaultStyles
        };
        var queryType = schema.getQueryType();
        var mutationType = schema.getMutationType();
        var subscriptionType = schema.getSubscriptionType();

        if (!queryType && !mutationType && !subscriptionType) {
          return React.createElement('div', null, 'Missing query type');
        }

        var queryFields = queryType && queryType.getFields();
        var mutationFields = mutationType && mutationType.getFields();
        var subscriptionFields = subscriptionType && subscriptionType.getFields();
        var parsedQuery = memoizeParseQuery(query);
        var getDefaultFieldNames = this.props.getDefaultFieldNames || defaultGetDefaultFieldNames;
        var getDefaultScalarArgValue = this.props.getDefaultScalarArgValue || defaultGetDefaultScalarArgValue;
        var definitions = parsedQuery.definitions;

        var _relevantOperations = definitions.map(function (definition) {
          if (definition.kind === 'FragmentDefinition') {
            return definition;
          } else if (definition.kind === 'OperationDefinition') {
            return definition;
          } else {
            return null;
          }
        }).filter(Boolean);

        var relevantOperations = // If we don't have any relevant definitions from the parsed document,
        // then at least show an expanded Query selection
        _relevantOperations.length === 0 ? DEFAULT_DOCUMENT.definitions : _relevantOperations;

        var renameOperation = function renameOperation(targetOperation, name) {
          var newName = name == null || name === '' ? null : {
            kind: 'Name',
            value: name,
            loc: undefined
          };

          var newOperation = _extends({}, targetOperation, {
            name: newName
          });

          var existingDefs = parsedQuery.definitions;
          var newDefinitions = existingDefs.map(function (existingOperation) {
            if (targetOperation === existingOperation) {
              return newOperation;
            } else {
              return existingOperation;
            }
          });
          return _extends({}, parsedQuery, {
            definitions: newDefinitions
          });
        };

        var cloneOperation = function cloneOperation(targetOperation) {
          var kind = void 0;

          if (targetOperation.kind === 'FragmentDefinition') {
            kind = 'fragment';
          } else {
            kind = targetOperation.operation;
          }

          var newOperationName = (targetOperation.name && targetOperation.name.value || '') + 'Copy';
          var newName = {
            kind: 'Name',
            value: newOperationName,
            loc: undefined
          };

          var newOperation = _extends({}, targetOperation, {
            name: newName
          });

          var existingDefs = parsedQuery.definitions;
          var newDefinitions = [].concat(_toConsumableArray(existingDefs), [newOperation]);

          _this15.setState({
            operationToScrollTo: kind + '-' + newOperationName
          });

          return _extends({}, parsedQuery, {
            definitions: newDefinitions
          });
        };

        var destroyOperation = function destroyOperation(targetOperation) {
          var existingDefs = parsedQuery.definitions;
          var newDefinitions = existingDefs.filter(function (existingOperation) {
            if (targetOperation === existingOperation) {
              return false;
            } else {
              return true;
            }
          });
          return _extends({}, parsedQuery, {
            definitions: newDefinitions
          });
        };

        var addOperation = function addOperation(kind) {
          var existingDefs = parsedQuery.definitions;
          var viewingDefaultOperation = parsedQuery.definitions.length === 1 && parsedQuery.definitions[0] === DEFAULT_DOCUMENT.definitions[0];
          var MySiblingDefs = viewingDefaultOperation ? [] : existingDefs.filter(function (def) {
            if (def.kind === 'OperationDefinition') {
              return def.operation === kind;
            } else {
              // Don't support adding fragments from explorer
              return false;
            }
          });
          var newOperationName = 'My' + capitalize(kind) + (MySiblingDefs.length === 0 ? '' : MySiblingDefs.length + 1); // Add this as the default field as it guarantees a valid selectionSet

          var firstFieldName = '__typename # Placeholder value';
          var selectionSet = {
            kind: 'SelectionSet',
            selections: [{
              kind: 'Field',
              name: {
                kind: 'Name',
                value: firstFieldName,
                loc: null
              },
              arguments: [],
              directives: [],
              selectionSet: null,
              loc: null
            }],
            loc: null
          };
          var newDefinition = {
            kind: 'OperationDefinition',
            operation: kind,
            name: {
              kind: 'Name',
              value: newOperationName
            },
            variableDefinitions: [],
            directives: [],
            selectionSet: selectionSet,
            loc: null
          };
          var newDefinitions = // If we only have our default operation in the document right now, then
          // just replace it with our new definition
          viewingDefaultOperation ? [newDefinition] : [].concat(_toConsumableArray(parsedQuery.definitions), [newDefinition]);

          var newOperationDef = _extends({}, parsedQuery, {
            definitions: newDefinitions
          });

          _this15.setState({
            operationToScrollTo: kind + '-' + newOperationName
          });

          _this15.props.onEdit((0, _graphql.print)(newOperationDef));
        };

        var actionsOptions = [!!queryFields ? React.createElement('option', {
          key: 'query',
          className: 'toolbar-button',
          style: styleConfig.styles.buttonStyle,
          type: 'link',
          value: 'query'
        }, 'Query') : null, !!mutationFields ? React.createElement('option', {
          key: 'mutation',
          className: 'toolbar-button',
          style: styleConfig.styles.buttonStyle,
          type: 'link',
          value: 'mutation'
        }, 'Mutation') : null, !!subscriptionFields ? React.createElement('option', {
          key: 'subscription',
          className: 'toolbar-button',
          style: styleConfig.styles.buttonStyle,
          type: 'link',
          value: 'subscription'
        }, 'Subscription') : null].filter(Boolean);
        var actionsEl = actionsOptions.length === 0 ? null : React.createElement('div', {
          style: {
            minHeight: '50px',
            maxHeight: '50px',
            overflow: 'none'
          }
        }, React.createElement('form', {
          className: 'variable-editor-title graphiql-explorer-actions',
          style: _extends({}, styleConfig.styles.explorerActionsStyle, {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderTop: '1px solid rgb(214, 214, 214)'
          }),
          onSubmit: function onSubmit(event) {
            return event.preventDefault();
          }
        }, React.createElement('span', {
          style: {
            display: 'inline-block',
            flexGrow: '0',
            textAlign: 'right'
          }
        }, 'Add new', ' '), React.createElement('select', {
          onChange: function onChange(event) {
            return _this15._setAddOperationType(event.target.value);
          },
          value: this.state.newOperationType,
          style: {
            flexGrow: '2'
          }
        }, actionsOptions), React.createElement('button', {
          type: 'submit',
          className: 'toolbar-button',
          onClick: function onClick() {
            return _this15.state.newOperationType ? addOperation(_this15.state.newOperationType) : null;
          },
          style: _extends({}, styleConfig.styles.buttonStyle, {
            height: '22px',
            width: '22px'
          })
        }, React.createElement('span', null, '+'))));
        var availableFragments = relevantOperations.reduce(function (acc, operation) {
          if (operation.kind === 'FragmentDefinition') {
            var fragmentTypeName = operation.typeCondition.name.value;
            var existingFragmentsForType = acc[fragmentTypeName] || [];
            var newFragmentsForType = [].concat(_toConsumableArray(existingFragmentsForType), [operation]).sort(function (a, b) {
              return a.name.value.localeCompare(b.name.value);
            });
            return _extends({}, acc, _defineProperty({}, fragmentTypeName, newFragmentsForType));
          }

          return acc;
        }, {});
        var attribution = this.props.showAttribution ? React.createElement(Attribution, null) : null;
        return React.createElement('div', {
          ref: function ref(_ref15) {
            _this15._ref = _ref15;
          },
          style: {
            fontSize: 12,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            margin: 0,
            padding: 8,
            fontFamily: 'Consolas, Inconsolata, "Droid Sans Mono", Monaco, monospace',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          },
          className: 'graphiql-explorer-root'
        }, React.createElement('div', {
          style: {
            flexGrow: '1',
            overflow: 'scroll'
          }
        }, relevantOperations.map(function (operation, index) {
          var operationName = operation && operation.name && operation.name.value;
          var operationType = operation.kind === 'FragmentDefinition' ? 'fragment' : operation && operation.operation || 'query';

          var onOperationRename = function onOperationRename(newName) {
            var newOperationDef = renameOperation(operation, newName);

            _this15.props.onEdit((0, _graphql.print)(newOperationDef));
          };

          var onOperationClone = function onOperationClone() {
            var newOperationDef = cloneOperation(operation);

            _this15.props.onEdit((0, _graphql.print)(newOperationDef));
          };

          var onOperationDestroy = function onOperationDestroy() {
            var newOperationDef = destroyOperation(operation);

            _this15.props.onEdit((0, _graphql.print)(newOperationDef));
          };

          var fragmentType = operation.kind === 'FragmentDefinition' && operation.typeCondition.kind === 'NamedType' && schema.getType(operation.typeCondition.name.value);
          var fragmentFields = fragmentType instanceof _graphql.GraphQLObjectType ? fragmentType.getFields() : null;
          var fields = operationType === 'query' ? queryFields : operationType === 'mutation' ? mutationFields : operationType === 'subscription' ? subscriptionFields : operation.kind === 'FragmentDefinition' ? fragmentFields : null;
          var fragmentTypeName = operation.kind === 'FragmentDefinition' ? operation.typeCondition.name.value : null;

          var onCommit = function onCommit(parsedDocument) {
            var textualNewDocument = (0, _graphql.print)(parsedDocument);

            _this15.props.onEdit(textualNewDocument);
          };

          return React.createElement(RootView, {
            key: index,
            isLast: index === relevantOperations.length - 1,
            fields: fields,
            operationType: operationType,
            name: operationName,
            definition: operation,
            onOperationRename: onOperationRename,
            onOperationDestroy: onOperationDestroy,
            onOperationClone: onOperationClone,
            onTypeName: fragmentTypeName,
            onMount: _this15._handleRootViewMount,
            onCommit: onCommit,
            onEdit: function onEdit(newDefinition, options) {
              var commit = void 0;

              if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && typeof options.commit !== 'undefined') {
                commit = options.commit;
              } else {
                commit = true;
              }

              if (!!newDefinition) {
                var newQuery = _extends({}, parsedQuery, {
                  definitions: parsedQuery.definitions.map(function (existingDefinition) {
                    return existingDefinition === operation ? newDefinition : existingDefinition;
                  })
                });

                if (commit) {
                  onCommit(newQuery);
                  return newQuery;
                } else {
                  return newQuery;
                }
              } else {
                return parsedQuery;
              }
            },
            schema: schema,
            getDefaultFieldNames: getDefaultFieldNames,
            getDefaultScalarArgValue: getDefaultScalarArgValue,
            makeDefaultArg: makeDefaultArg,
            onRunOperation: function onRunOperation() {
              if (!!_this15.props.onRunOperation) {
                _this15.props.onRunOperation(operationName);
              }
            },
            styleConfig: styleConfig,
            availableFragments: availableFragments
          });
        }), attribution), actionsEl);
      }
    }]);

    return Explorer;
  }(React.PureComponent);

  Explorer.defaultProps = {
    getDefaultFieldNames: defaultGetDefaultFieldNames,
    getDefaultScalarArgValue: defaultGetDefaultScalarArgValue
  };

  var ErrorBoundary = function (_React$Component) {
    _inherits(ErrorBoundary, _React$Component);

    function ErrorBoundary() {
      var _ref16;

      var _temp10, _this16, _ret12;

      _classCallCheck(this, ErrorBoundary);

      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      return _ret12 = (_temp10 = (_this16 = _possibleConstructorReturn(this, (_ref16 = ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call.apply(_ref16, [this].concat(args))), _this16), _this16.state = {
        hasError: false,
        error: null,
        errorInfo: null
      }, _temp10), _possibleConstructorReturn(_this16, _ret12);
    }

    _createClass(ErrorBoundary, [{
      key: 'componentDidCatch',
      value: function componentDidCatch(error, errorInfo) {
        this.setState({
          hasError: true,
          error: error,
          errorInfo: errorInfo
        });
        console.error('Error in component', error, errorInfo);
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.hasError) {
          return React.createElement('div', {
            style: {
              padding: 18,
              fontFamily: 'sans-serif'
            }
          }, React.createElement('div', null, 'Something went wrong'), React.createElement('details', {
            style: {
              whiteSpace: 'pre-wrap'
            }
          }, this.state.error ? this.state.error.toString() : null, React.createElement('br', null), this.state.errorInfo ? this.state.errorInfo.componentStack : null));
        }

        return this.props.children;
      }
    }]);

    return ErrorBoundary;
  }(React.Component);

  var ExplorerWrapper = function (_React$PureComponent10) {
    _inherits(ExplorerWrapper, _React$PureComponent10);

    function ExplorerWrapper() {
      _classCallCheck(this, ExplorerWrapper);

      return _possibleConstructorReturn(this, (ExplorerWrapper.__proto__ || Object.getPrototypeOf(ExplorerWrapper)).apply(this, arguments));
    }

    _createClass(ExplorerWrapper, [{
      key: 'render',
      value: function render() {
        return React.createElement('div', {
          className: 'docExplorerWrap',
          style: {
            height: '100%',
            width: this.props.width,
            minWidth: this.props.width,
            zIndex: 7,
            display: this.props.explorerIsOpen ? 'flex' : 'none',
            flexDirection: 'column',
            overflow: 'hidden'
          }
        }, React.createElement('div', {
          className: 'doc-explorer-title-bar'
        }, React.createElement('div', {
          className: 'doc-explorer-title'
        }, this.props.title), React.createElement('div', {
          className: 'doc-explorer-rhs'
        }, React.createElement('div', {
          className: 'docExplorerHide',
          onClick: this.props.onToggleExplorer
        }, "\u2715"))), React.createElement('div', {
          className: 'doc-explorer-contents',
          style: {
            padding: '0px',

            /* Unset overflowY since docExplorerWrap sets it and it'll
            cause two scrollbars (one for the container and one for the schema tree) */
            overflowY: 'unset'
          }
        }, React.createElement(ErrorBoundary, null, React.createElement(Explorer, this.props))));
      }
    }]);

    return ExplorerWrapper;
  }(React.PureComponent);

  ExplorerWrapper.defaultValue = defaultValue;
  ExplorerWrapper.defaultProps = {
    width: 320,
    title: 'Explorer'
  };
  exports.default = ExplorerWrapper;

  var Explorer$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(Explorer$1);

  Object.defineProperty(dist, "__esModule", {
    value: true
  });
  dist.Explorer = undefined;

  var _Explorer = require$$0$3;

  var _Explorer2 = _interopRequireDefault(_Explorer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  dist.Explorer = _Explorer2.default;
  var _default = dist.default = _Explorer2.default;

  // flow

  function unwrapOutputType(outputType) {
    var unwrappedType = outputType;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }

  function makeDefaultArg(parentField, arg) {
    var unwrappedType = unwrapOutputType(parentField.type);

    if (unwrappedType.name.startsWith("GitHub") && unwrappedType.name.endsWith("Connection") && (arg.name === "first" || arg.name === "orderBy")) {
      return true;
    }

    return false;
  }
  function getDefaultScalarArgValue(parentField, arg, argType) {
    var unwrappedType = unwrapOutputType(parentField.type);

    switch (unwrappedType.name) {
      case "GitHubRepository":
        if (arg.name === "name") {
          return {
            kind: "StringValue",
            value: "graphql-js"
          };
        } else if (arg.name === "owner") {
          return {
            kind: "StringValue",
            value: "graphql"
          };
        }

        break;

      case "NpmPackage":
        if (arg.name === "name") {
          return {
            kind: "StringValue",
            value: "graphql"
          };
        }

        break;

      default:
        if (isEnumType(argType) && unwrappedType.name.startsWith("GitHub") && unwrappedType.name.endsWith("Connection")) {
          if (arg.name === "direction" && argType.getValues().map(function (x) {
            return x.name;
          }).includes("DESC")) {
            return {
              kind: "EnumValue",
              value: "DESC"
            };
          } else if (arg.name === "field" && argType.getValues().map(function (x) {
            return x.name;
          }).includes("CREATED_AT")) {
            return {
              kind: "EnumValue",
              value: "CREATED_AT"
            };
          }
        }

        return _default.defaultValue(argType);
    }

    return _default.defaultValue(argType);
  }

  var keys$1 = require('object-keys');

  var hasSymbols$2 = typeof Symbol === 'function' && _typeof$3(Symbol('foo')) === 'symbol';
  var toStr$3 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;

  var isFunction = function isFunction(fn) {
    return typeof fn === 'function' && toStr$3.call(fn) === '[object Function]';
  };

  var arePropertyDescriptorsSupported = function arePropertyDescriptorsSupported() {
    var obj = {};

    try {
      origDefineProperty(obj, 'x', {
        enumerable: false,
        value: obj
      }); // eslint-disable-next-line no-unused-vars, no-restricted-syntax

      for (var _ in obj) {
        // jscs:ignore disallowUnusedVariables
        return false;
      }

      return obj.x === obj;
    } catch (e) {
      /* this is IE 8. */
      return false;
    }
  };

  var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

  var defineProperty = function defineProperty(object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) {
      return;
    }

    if (supportsDescriptors) {
      origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
      });
    } else {
      object[name] = value;
    }
  };

  var defineProperties$1 = function defineProperties(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys$1(map);

    if (hasSymbols$2) {
      props = concat.call(props, Object.getOwnPropertySymbols(map));
    }

    for (var i = 0; i < props.length; i += 1) {
      defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
  };

  defineProperties$1.supportsDescriptors = !!supportsDescriptors;
  module.exports = defineProperties$1;

  var defineProperties$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(defineProperties$2);

  var callBind$2 = {exports: {}};

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice$1 = Array.prototype.slice;
  var toStr$2 = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation$5 = function bind(that) {
    var target = this;

    if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }

    var args = slice$1.call(arguments, 1);
    var bound;

    var binder = function binder() {
      if (this instanceof bound) {
        var result = target.apply(this, args.concat(slice$1.call(arguments)));

        if (Object(result) === result) {
          return result;
        }

        return this;
      } else {
        return target.apply(that, args.concat(slice$1.call(arguments)));
      }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];

    for (var i = 0; i < boundLength; i++) {
      boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
      var Empty = function Empty() {};

      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }

    return bound;
  };

  var implementation$4 = implementation$5;

  var functionBind = Function.prototype.bind || implementation$4;

  var undefined$1;
  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError = TypeError; // eslint-disable-next-line consistent-return

  var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
  };

  var $gOPD = Object.getOwnPropertyDescriptor;

  if ($gOPD) {
    try {
      $gOPD({}, '');
    } catch (e) {
      $gOPD = null; // this is IE 8, which has a broken gOPD
    }
  }

  var throwTypeError = function throwTypeError() {
    throw new $TypeError();
  };

  var ThrowTypeError = $gOPD ? function () {
    try {
      // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
      arguments.callee; // IE 8 does not throw here

      return throwTypeError;
    } catch (calleeThrows) {
      try {
        // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
        return $gOPD(arguments, 'callee').get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;

  var hasSymbols$1 = require('has-symbols')();

  var getProto = Object.getPrototypeOf || function (x) {
    return x.__proto__;
  }; // eslint-disable-line no-proto


  var needsEval = {};
  var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);
  var INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
    '%AsyncFromSyncIteratorPrototype%': undefined$1,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    // eslint-disable-line no-eval
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    '%JSON%': (typeof JSON === "undefined" ? "undefined" : _typeof$3(JSON)) === 'object' ? JSON : undefined$1,
    '%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
    '%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
  };

  var doEval = function doEval(name) {
    var value;

    if (name === '%AsyncFunction%') {
      value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
      value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
      value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
      var fn = doEval('%AsyncGeneratorFunction%');

      if (fn) {
        value = fn.prototype;
      }
    } else if (name === '%AsyncIteratorPrototype%') {
      var gen = doEval('%AsyncGenerator%');

      if (gen) {
        value = getProto(gen.prototype);
      }
    }

    INTRINSICS[name] = value;
    return value;
  };

  var LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype']
  };

  var bind = require('function-bind');

  var hasOwn = require('has');

  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */

  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  /** Used to match backslashes in property paths. */

  var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);

    if (first === '%' && last !== '%') {
      throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
      throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }

    var result = [];
    $replace(string, rePropName, function (match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
  };
  /* end adaptation */


  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;

    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = '%' + alias[0] + '%';
    }

    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];

      if (value === needsEval) {
        value = doEval(intrinsicName);
      }

      if (typeof value === 'undefined' && !allowMissing) {
        throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
      }

      return {
        alias: alias,
        name: intrinsicName,
        value: value
      };
    }

    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
  };

  module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new $TypeError('intrinsic name must be a non-empty string');
    }

    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }

    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;

    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }

    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);

      if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
        throw new $SyntaxError('property names with quotes must have matching quotes');
      }

      if (part === 'constructor' || !isOwn) {
        skipFurtherCaching = true;
      }

      intrinsicBaseName += '.' + part;
      intrinsicRealName = '%' + intrinsicBaseName + '%';

      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
          }

          return void undefined$1;
        }

        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc; // By convention, when a data property is converted to an accessor
          // property to emulate a data property that does not suffer from
          // the override mistake, that accessor's getter is marked with
          // an `originalValue` property. Here, when we detect this, we
          // uphold the illusion by pretending to see that original data
          // property, i.e., returning the value rather than the getter
          // itself.

          if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }

        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }

    return value;
  };

  var getIntrinsic = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(getIntrinsic);

  (function (module) {

  var bind = functionBind;

  var GetIntrinsic = require$$0$1;

  var $apply = GetIntrinsic('%Function.prototype.apply%');
  var $call = GetIntrinsic('%Function.prototype.call%');
  var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
  var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
  var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
  var $max = GetIntrinsic('%Math.max%');

  if ($defineProperty) {
    try {
      $defineProperty({}, 'a', {
        value: 1
      });
    } catch (e) {
      // IE 8 has a broken defineProperty
      $defineProperty = null;
    }
  }

  module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);

    if ($gOPD && $defineProperty) {
      var desc = $gOPD(func, 'length');

      if (desc.configurable) {
        // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, 'length', {
          value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
      }
    }

    return func;
  };

  var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
  };

  if ($defineProperty) {
    $defineProperty(module.exports, 'apply', {
      value: applyBind
    });
  } else {
    module.exports.apply = applyBind;
  }
  }(callBind$2));

  var toStr$1 = Object.prototype.toString;

  module.exports = function isArguments(value) {
    var str = toStr$1.call(value);
    var isArgs = str === '[object Arguments]';

    if (!isArgs) {
      isArgs = str !== '[object Array]' && value !== null && _typeof$3(value) === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr$1.call(value.callee) === '[object Function]';
    }

    return isArgs;
  };

  var isArguments = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(isArguments);

  var keysShim$1;

  if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;

    var isArgs$1 = require('./isArguments'); // eslint-disable-line global-require


    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
      toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
    var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];

    var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
      var ctor = o.constructor;
      return ctor && ctor.prototype === o;
    };

    var excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };

    var hasAutomationEqualityBug = function () {
      /* global window */
      if (typeof window === 'undefined') {
        return false;
      }

      for (var k in window) {
        try {
          if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && _typeof$3(window[k]) === 'object') {
            try {
              equalsConstructorPrototype(window[k]);
            } catch (e) {
              return true;
            }
          }
        } catch (e) {
          return true;
        }
      }

      return false;
    }();

    var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
      /* global window */
      if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
      }

      try {
        return equalsConstructorPrototype(o);
      } catch (e) {
        return false;
      }
    };

    keysShim$1 = function keys(object) {
      var isObject = object !== null && _typeof$3(object) === 'object';
      var isFunction = toStr.call(object) === '[object Function]';
      var isArguments = isArgs$1(object);
      var isString = isObject && toStr.call(object) === '[object String]';
      var theKeys = [];

      if (!isObject && !isFunction && !isArguments) {
        throw new TypeError('Object.keys called on a non-object');
      }

      var skipProto = hasProtoEnumBug && isFunction;

      if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0; i < object.length; ++i) {
          theKeys.push(String(i));
        }
      }

      if (isArguments && object.length > 0) {
        for (var j = 0; j < object.length; ++j) {
          theKeys.push(String(j));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === 'prototype') && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }

      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

        for (var k = 0; k < dontEnums.length; ++k) {
          if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
            theKeys.push(dontEnums[k]);
          }
        }
      }

      return theKeys;
    };
  }

  module.exports = keysShim$1;

  var implementation$3 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(implementation$3);

  var slice = Array.prototype.slice;

  var isArgs = require$$0;

  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
  } : require$$1$1;
  var originalKeys = Object.keys;

  keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
      var keysWorksWithArguments = function () {
        // Safari 5.0 bug
        var args = Object.keys(arguments);
        return args && args.length === arguments.length;
      }(1, 2);

      if (!keysWorksWithArguments) {
        Object.keys = function keys(object) {
          // eslint-disable-line func-name-matching
          if (isArgs(object)) {
            return originalKeys(slice.call(object));
          }

          return originalKeys(object);
        };
      }
    } else {
      Object.keys = keysShim;
    }

    return Object.keys || keysShim;
  };

  var objectKeys = keysShim;

  module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
      return false;
    }

    if (_typeof$3(Symbol.iterator) === 'symbol') {
      return true;
    }

    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);

    if (typeof sym === 'string') {
      return false;
    }

    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
      return false;
    }

    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
      return false;
    } // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }


    var symVal = 42;
    obj[sym] = symVal;

    for (sym in obj) {
      return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop


    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
      return false;
    }

    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }

    var syms = Object.getOwnPropertySymbols(obj);

    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }

    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }

    if (typeof Object.getOwnPropertyDescriptor === 'function') {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);

      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }

    return true;
  };

  var shams = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var require$$1 = /*@__PURE__*/getAugmentedNamespace(shams);

  var GetIntrinsic = require$$0$1;

  var callBind$1 = callBind$2.exports;

  var $indexOf = callBind$1(GetIntrinsic('String.prototype.indexOf'));

  var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);

    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
      return callBind$1(intrinsic);
    }

    return intrinsic;
  };

  var keys = objectKeys;

  var canBeObject = function canBeObject(obj) {
    return typeof obj !== 'undefined' && obj !== null;
  };

  var hasSymbols = require$$1();

  var callBound = callBound$1;

  var toObject = Object;
  var $push = callBound('Array.prototype.push');
  var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
  var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null; // eslint-disable-next-line no-unused-vars

  var implementation$2 = function assign(target, source1) {
    if (!canBeObject(target)) {
      throw new TypeError('target must be an object');
    }

    var objTarget = toObject(target);
    var s, source, i, props, syms, value, key;

    for (s = 1; s < arguments.length; ++s) {
      source = toObject(arguments[s]);
      props = keys(source);
      var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);

      if (getSymbols) {
        syms = getSymbols(source);

        for (i = 0; i < syms.length; ++i) {
          key = syms[i];

          if ($propIsEnumerable(source, key)) {
            $push(props, key);
          }
        }
      }

      for (i = 0; i < props.length; ++i) {
        key = props[i];
        value = source[key];

        if ($propIsEnumerable(source, key)) {
          objTarget[key] = value;
        }
      }
    }

    return objTarget;
  };

  var implementation$1 = implementation$2;

  var lacksProperEnumerationOrder = function lacksProperEnumerationOrder() {
    if (!Object.assign) {
      return false;
    }
    /*
     * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
     * note: this does not detect the bug unless there's 20 characters
     */


    var str = 'abcdefghijklmnopqrst';
    var letters = str.split('');
    var map = {};

    for (var i = 0; i < letters.length; ++i) {
      map[letters[i]] = letters[i];
    }

    var obj = Object.assign({}, map);
    var actual = '';

    for (var k in obj) {
      actual += k;
    }

    return str !== actual;
  };

  var assignHasPendingExceptions = function assignHasPendingExceptions() {
    if (!Object.assign || !Object.preventExtensions) {
      return false;
    }
    /*
     * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
     * which is 72% slower than our shim, and Firefox 40's native implementation.
     */


    var thrower = Object.preventExtensions({
      1: 2
    });

    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }

    return false;
  };

  var polyfill$1 = function getPolyfill() {
    if (!Object.assign) {
      return implementation$1;
    }

    if (lacksProperEnumerationOrder()) {
      return implementation$1;
    }

    if (assignHasPendingExceptions()) {
      return implementation$1;
    }

    return Object.assign;
  };

  var define = require$$0$2;

  var getPolyfill$1 = polyfill$1;

  var shim$1 = function shimAssign() {
    var polyfill = getPolyfill$1();
    define(Object, {
      assign: polyfill
    }, {
      assign: function assign() {
        return Object.assign !== polyfill;
      }
    });
    return polyfill;
  };

  var defineProperties = require$$0$2;

  var callBind = callBind$2.exports;

  var implementation = implementation$2;

  var getPolyfill = polyfill$1;

  var shim = shim$1;

  var polyfill = callBind.apply(getPolyfill()); // eslint-disable-next-line no-unused-vars

  var bound = function assign(target, source1) {
    return polyfill(Object, arguments);
  };

  defineProperties(bound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
  });
  var object_assign = bound;

  //   return fetch(
  //     "https://serve.onegraph.com/dynamic?app_id=c333eb5b-04b2-4709-9246-31e18db397e1",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(params)
  //     }
  //   )
  //     .then(function(response) {
  //       return response.text();
  //     })
  //     .then(function(responseBody) {
  //       try {
  //         return JSON.parse(responseBody);
  //       } catch (e) {
  //         return responseBody;
  //       }
  //     });
  // }

  var DEFAULT_QUERY = "\n# shift-option/alt-click on a query below to jump to it in the explorer\n# option/alt-click on a field in the explorer to select all subfields\n";

  var App = /*#__PURE__*/function (_Component) {
    _inherits$1(App, _Component);

    var _super = _createSuper(App);

    function App() {
      var _this;

      _classCallCheck$1(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty$2(_assertThisInitialized(_this), "state", {
        schema: null,
        query: _this.props.initialQuery || '',
        explorerIsOpen: true
      });

      _defineProperty$2(_assertThisInitialized(_this), "_handleInspectOperation", function (cm, mousePos) {
        var parsedQuery = parse$1(_this.state.query || "");

        if (!parsedQuery) {
          console.error("Couldn't parse query document");
          return null;
        }

        var token = cm.getTokenAt(mousePos);
        var start = {
          line: mousePos.line,
          ch: token.start
        };
        var end = {
          line: mousePos.line,
          ch: token.end
        };
        var relevantMousePos = {
          start: cm.indexFromPos(start),
          end: cm.indexFromPos(end)
        };
        var position = relevantMousePos;
        var def = parsedQuery.definitions.find(function (definition) {
          if (!definition.loc) {
            console.log("Missing location information for definition");
            return false;
          }

          var _definition$loc = definition.loc,
              start = _definition$loc.start,
              end = _definition$loc.end;
          return start <= position.start && end >= position.end;
        });

        if (!def) {
          console.error("Unable to find definition corresponding to mouse position");
          return null;
        }

        var operationKind = def.kind === "OperationDefinition" ? def.operation : def.kind === "FragmentDefinition" ? "fragment" : "unknown";
        var operationName = def.kind === "OperationDefinition" && !!def.name ? def.name.value : def.kind === "FragmentDefinition" && !!def.name ? def.name.value : "unknown";
        var selector = ".graphiql-explorer-root #".concat(operationKind, "-").concat(operationName);
        var el = document.querySelector(selector);
        el && el.scrollIntoView();
      });

      _defineProperty$2(_assertThisInitialized(_this), "_handleEditQuery", function (query) {
        return _this.setState({
          query: query
        });
      });

      _defineProperty$2(_assertThisInitialized(_this), "_handleToggleExplorer", function () {
        _this.setState({
          explorerIsOpen: !_this.state.explorerIsOpen
        });
      });

      return _this;
    }

    _createClass$1(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.props.fetcher({
          query: getIntrospectionQuery()
        }).then(function (result) {
          var editor = _this2._graphiql.getQueryEditor();

          editor.setOption("extraKeys", _objectSpread2(_objectSpread2({}, editor.options.extraKeys || {}), {}, {
            "Shift-Alt-LeftClick": _this2._handleInspectOperation
          }));

          _this2.setState({
            schema: buildClientSchema(result.data)
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$state = this.state,
            query = _this$state.query,
            schema = _this$state.schema;
        return /*#__PURE__*/React__default['default'].createElement("div", {
          className: "graphiql-container"
        }, /*#__PURE__*/React__default['default'].createElement(_default, {
          schema: schema,
          query: query,
          onEdit: this._handleEditQuery,
          onRunOperation: function onRunOperation(operationName) {
            return _this3._graphiql.handleRunQuery(operationName);
          },
          explorerIsOpen: this.state.explorerIsOpen,
          onToggleExplorer: this._handleToggleExplorer,
          getDefaultScalarArgValue: getDefaultScalarArgValue,
          makeDefaultArg: makeDefaultArg
        }), /*#__PURE__*/React__default['default'].createElement(GraphiQL, {
          ref: function ref(_ref) {
            return _this3._graphiql = _ref;
          },
          fetcher: fetcher,
          schema: schema,
          query: query,
          onEditQuery: this._handleEditQuery
        }, /*#__PURE__*/React__default['default'].createElement(ToolbarMenu, null, /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
          onClick: function onClick() {
            return _this3._graphiql.handlePrettifyQuery();
          },
          label: "Prettify",
          title: "Prettify Query (Shift-Ctrl-P)"
        }), /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
          onClick: function onClick() {
            return _this3._graphiql.handleToggleHistory();
          },
          label: "History",
          title: "Show History"
        }), /*#__PURE__*/React__default['default'].createElement(ToolbarButton, {
          onClick: this._handleToggleExplorer,
          label: "Explorer",
          title: "Toggle Explorer"
        }))));
      }
    }]);

    return App;
  }(React$1.Component);

  function renderApp(node, props) {
    return ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, props), node);
  }

  Object.defineProperty(exports, 'React', {
    enumerable: true,
    get: function () {
      return React__default['default'];
    }
  });
  Object.defineProperty(exports, 'ReactDOM', {
    enumerable: true,
    get: function () {
      return ReactDOM__default['default'];
    }
  });
  exports.DEFAULT_QUERY = DEFAULT_QUERY;
  exports.ObjectAssign = object_assign;
  exports.default = App;
  exports.renderApp = renderApp;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, React, ReactDOM));
