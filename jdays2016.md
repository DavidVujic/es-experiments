jDays 2016 session

# ECMAScript 2016 - back to the future
## Some ES 2015 (aka ES6) features

```javascript
import calculator from 'modules/calculator';

let result = calculator.add(1, 2);



const myFunc = (message) => 'Hello' + message;

export default myFunc;
```

```javascript
{
    let myScopedVariable = 'hello world';
}

// yes, this will fail
console.log(myScopedVariable);
```

```javascript
return new Promise((resolve, reject) => {
    // do async stuff here
});
```

```javascript
function* myGenerator() {
    yield 'hello';
    yield 'world';
}
```

```javascript
class myClass {
    constructor() {
        this.myProperty = 'Hello world';
    }
}
```

... and lot of more features.

## Write ES 2015 & 2016 today?
- Browser support?
- Node support?

[http://kangax.github.io/compat-table](http://kangax.github.io/compat-table)

### Transpile to old school javascript
#### Babel
("Babble")

### ES 2016?
- Array.prototype.includes
- Exponentiation Operator

```javascript

let arr = [1, 2, 3];

console.log(arr.includes(3));

let a = 10;
let b = 2;

console.log(a ** b);
```

### No more cool features?
[https://github.com/tc39/ecma262#ecmascript](https://github.com/tc39/ecma262#ecmascript)

#### ES 2017 (probably)

```javascript
async function myFunc() {
    let result = await doSomething();

    return result;
}
```

### async JavaScript programming
- callbacks
- promises
- generators
- async & await

### Babble?
Babel: presets & plugins

Tools: eslint & npm

Experiment and learn: the REPL

#### Atom
plugins
