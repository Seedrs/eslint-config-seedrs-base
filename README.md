# Seedrs Javascript eslint config

This is the Seedrs Javascript eslint base configuration. This
configuration should be used in all Javascript project and can be
extended if needed i.e. It doesn't contain any rules for React.
The configuration targets es6 and newer versions of Javascript. It
borrows heavily from [airbnbs](https://github.com/airbnb/javascript) javascript style guide but with some
differences.

## Rules

* 1 Use `const` for all of your references.  Do not use var.
e.x.
```javascript
// bad
var myVariable = 1;

// good
const myVariable = 2;
```
* 2 If you need to reassign a variable then use `let` instead.
```javascript
// bad
var myVariable = 1;
if(true) {
  myVariable = 2;
}

// good
let myVariable = 1;
if(true) {
  myVariable = 2;
}
```

* 3 Use the literal syntax for object creation.
```javascript
// bad
const myObject = new Object();

// good
const myObject = {};
```

* 4 Use object shorthand.
```javascript
// bad
const value = 1;
const myObject = {
  value: value
};

// good
const value = 1;
const myObject = {
  value
};
```

* 5 Only quote object keys that are invalid identifiers.
```javascript
// bad
const myObject = {
  'key': 1,
  'key-one': 2
};

// good
const myObject = {
  key: 1,
  'key-one': 2
};
```

* 6 Use the spread operator over `Object.assign`.
```javascript
// bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original,{ c: 3 });

// good
const copy = { ...original, c: 3 };
```

* 7 Use the literal syntax for creating new arrays.
```javascript
// bad
const myArray = new Array();

// good
const myArray = [];
```

* 8 Use `return` statements in array method callbacks.
```javascript
// bad - memo is undefined after the first callback
[1, 2, 3].reduce((memo, item, index) => {
  const multiple = item * 2;
  memo[index] = multiple;
},[]);

// good
[1, 2, 3].reduce((memo, item, index) => {
  const multiple = item * 2;
  memo[index] = multiple;

  return memo;
},[]);
```

* 9 Use object destructuring when using multiple properties from an
  object.
```javascript
// bad
const fullName = (user) => {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
};

// good
const fullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
```

* 10 Use array destructuring when you want values from specific
  positions in an array.
```javascript
// bad
const myArray = [1, 2, 3];
const first = myArray[0];
const second = myArray[1];

// good
const myArray = [1, 2, 3];
const [first, second] = myArray;
```

* 11 Use single quotes for strings
```javascript
// bad
const name = "Pikachu";

// bad
const name = `Pikachu`;

// good
const name = 'Pikachu';
```

* 12 Use template literals to build up strings instead of concatenation.
```javascript
// bad
const greeter = (name) => {
  return 'Hello ' + name;
};

// good
const greeter = (name) => {
  return `Hello ${name}`;
};
```

* 13 Do not unnecessarily escape characters in strings.
```javascript
// bad
const example = '\'this\' is \"quoted\"';

// good
const example = '\this\' is "quoted"';
```

* 14 Do not use the Function constructor to create a new Function - This
  has the potential to open vulnerabilities.
```javascript
// bad
const addOne = new Function('a', 'return a + 1');

// still bad
const addOne = Function('a', 'return a + 1');
```

* 15 Use spacing around parens and before blocks.
```javascript
// bad
const a = function(){};
const b = function (){};
const c = function() {};

//good
const a = function () {};
const b = function b() {};
```

* 16 Do not reassign parameters - you can mutate the values in the
  original caller leading to unwanted side-effects.
```javascript
// bad
function a(obj) {
  obj.a = 2;
};

// good
function b(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj,'a') ? obj.a : 1;
  // ...
};

// bad
function y(a) {
  if(!a) { a = 1; }
  // ...
};

// good
function x(a) {
  const b = a || 1;
  // ...
};

function z(a = 1) {
  // ...
};
```

* 17 Use arrow functions when you need to use an anonymous function.
```javascript
// bad
[1, 2, 3].map(function (item) {
  const multiple = item * 2;

  return multiple;
});

// good
[1, 2, 3].map(item => {
  const multiple = item * 2;

  return multiple;
});
```

* 18 For functions that return a single expression without side-effects
  then use the implicit return.
```javascript
// bad
[1, 2, 3].map((item) => {
  const multiple = item * 2;
  `Two times ${item} equals ${multiple}`;
});

//good
[1, 2, 3].map((item) => {
  const multiple = item * 2;
  return `Two times ${item} equals ${multiple}`;
});

//good
[1, 2, 3].map(item => `The value is ${item}`);
```

* 19 When an arrow function only has one argument and does not have
  a block drop the parantheses.
```javascript
// bad
const a = [1, 2, 3].map((x) => x * x);

// good
const a = [1, 2, 3].map(x => x * x);

// bad
const a = [1, 2, 3].map(x => {
  const y = x * x;
  return y;
});

// good
const a = [1, 2, 3].map((x) => {
  const y = x * x;
  return y;
});
```

* 20 No confusing arrow syntax without comparison ops.
```javascript
// bad
const itemHeight = item => item.height > 256 ? item.largeSize
: item.smallSize;

// good
const itemHeight = item => (item.height > 256 ? item.largeSize
: item.smallSize)
```

* 21 Use import/export over non-standard module systems. Modules are the
  future standard.
```javascript
// bad
const Seedrs = require('./seedrs');
module.exports = Abc;

// good
import Seedrs from './seedrs';

export default Abc;
```

* 22 Only import from a path once group all of you imports from a single
  path.
```javascript
// bad
import foo from 'foo';
import { bar } from 'foo';

// good
import foo, { bar } from 'foo';
import foo, {
  bar,
  baz
} from 'foo';
```

* 23 Do not export mutable values
```javascript
// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };
```

* 24 When a module only has a single export make that export the
  default.
```javascript
// bad
export const foo = () => {};

// good
export default () => {};
```

* 25 Place `import` statements at the top of the file.
```javascript
// bad
import foo from 'foo';
foo();
import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo();
```

* 26 Generator star spacing
```javascript
// bad
function * a() {
  yield 'a';
}

// good
function* a() {
  yield 'a';
}
```

* 27 Use dot notation to access object properties. Except when accessing
  properties with a variable.
```javascript
const user = {
  firstName: 'Arnold',
  lastName: 'Schwarzenegger',
  awesome: true
};

// bad
const isAwesome = user['awesome'];

// good
const key = 'firstName';
const isAwesome = user.awesome;
const firstName = user[key];
```

* 28 Always use the type comparision operator.
```javascript
const a = 1;
const b = '1';

// bad
if(a == b) {
  // ...
}

// good
if(a === b) {
  // ...
}
```

* 29 Always have space before blocks
```javascript
// bad

if (a){
    b();
}

function a(){}

for (;;){
    b();
}

try {} catch(a){}

class Foo{
  constructor(){}
}

// good
if (a) {
    b();
}

if (a) {
    b();
} else{ /*no error. this is checked by `keyword-spacing` rule.*/
    c();
}


function a() {}

for (;;) {
    b();
}

try {} catch(a) {}
```

* 30 Always have spaces around keywords
```javascript
// bad
if(a === b) {
  // ...
}

// good
if (a === b) {
  // ...
} else {
  // ...
}
```

* 31 Add space around infix operators
```javascript
// bad
a+b

a+ b

a +b

// good
a + b
```

* 32  Add a newline at the end of a file
```javascript
// bad
const a = 'a';

// good
const a = 'a';\n
```

* 33 Enforce consistent spacing inside brackets
```javascript
// bad
const arr = [ 'foo', 'bar' ];
const arr = ['foo', 'bar' ];
const [ x, y ] = z;
const [ x,y ] = z;
const [ x, ...y ] = z;
const [ ,,x, ] = z;

// good
const arr = [];
const arr = ['foo', 'bar', 'baz'];
const arr = [
  'foo',
  'bar'
];

const [x, y] = z;
const [x,y] = z;
const [x, ...y] = z;
const [,,x,] = z;
```

* 34 Always use spaces inside object definitions.
```javascript
// bad
const obj = {'foo': 'bar'};
const obj = {'foo': 'bar' };

// good
const obj = {};
const obj = { 'foo': 'bar' };
```

* 35 Split lines over 100 characters long onto multiple lines.

* 36 Add commas after and on the same line as an array element, object
  property.
```javascript
// bad
const arr = [
  '1'
  ,'2'
];

// good
const arr = [
  '1',
  '2'
];
```

* 37 Do not have dangling commas in array and object definitions.
```javascript
// bad
const arr = [
  '1',
  '2',
];

const obj = {
  a: 'a',
  b: 'b',
};

// good
const arr = [
  '1',
  '2'
];

const obj = {
  a: 'a',
  b: 'b'
}
```

* 38 Require semi colons
```javascript
// bad
const a = 1

// good
const a = 1;
```


