# Search for error description based on error code value

This module takes an input of 10-digit decimal or 8-digit hexadecimal error code and gives 
you a list of enumeration values. The list of error codes, included in the module can be found here: [ArcObjects error codes][link-docs].


## Installation

```bash
$ npm install esri-error-checker
```

## How to use

The module works with both hexadecimal and decimal error codes. In order to find error's description by it's code simply call `search()` method:

```js
let errorChecker = require('esri-error-checker');

// pass the error code as 8-digit hexadecimal value
console.log(errorChecker.search('0x00000000'));

// or pass the error code as 10-digit decimal value:
console.log(errorChecker.search('-2147215018'));
```

If any error is found the result is returned as an array (for example `code = '-2147215018'`):

```json
[
  {
    "library":"Geodatabase",
    "constant":"FDO_E_INVALID_GEOMETRY_TYPE_FOR_TOPOLOGY",
    "value":"-2147215018",
    "description":"The feature class has an invalid geometry type."
  }
]
```

## License

  [MIT](LICENSE)

[link-docs]: https://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#a3bd05c8-64a6-4dd4-acb3-0d10b021f2f8.htm