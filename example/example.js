var removeProp = require('js-remove-property');
var test = {
  name: 'hoge',
  val: 32,
  arry: [
    'hoge',
    'foo'
  ],
  obj : {
    name: 'hoge',
  },
  nested_obj: {
    name: 'hoge',
    value: 1,
    obj : {
      name: 'hoge',
      value: 1
    }
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

removeProp('name', test);
console.log('result:', JSON.stringify(test));
