# js-remove-property
Remove specific properties from a JavaScript object.

### How to use

```
var removeProp = require('js-remove-property');
var test = {
  name: 'hoge',
  val: 32,
  obj : {
    name: 'hoge',
  },
  complex: {
    arry: [
      'hoge',
      'foo',
      {
        name: 'hoge',
        value: 1
      }
    ]
  }
};

removeProp('name', test); // remove 'name' properties
console.log(test);

result is.. -->
{
	"val": 32,
	"arry": ["hoge", "foo"],
	"obj": {},
	"nested_obj": {
		"value": 1,
		"obj": {
			"value": 1
		}
	},
	"complex": {
		"arry": ["hoge", "foo", {
			"value": 1
		}]
	}
}
```

### How to test

Please test your code before you request pull-request.

```
$ npm test


  #Invalida data input
    ✓ set null key for remove key
    ✓ set null object for target object
    ✓ set null for both arguments
    ✓ insufficient argument
    ✓ empty arguments

  Remove properties recursively
    ✓ remove prop of 1st layer property
    ✓ remove prop of 2nd layer property
    ✓ remove prop of complex object


  8 passing (14ms)

```
