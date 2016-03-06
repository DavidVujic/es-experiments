jDays 2016 session

# ECMAScript 2016 - back to the future
## Some ES 2015 (aka ES6) features

```javascript
import myModule from 'modules/myModule';

const myValue = 10;

let myFunc = (x, y) => x + y;

export default myFunc;
```

```javascript
{
    let myScopedVariable = 'hello world';
}
```

```javascript
return new Promise((resolve, reject) => {
    // do async stuff here
};
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
- Exponentiation Operator
- Array.prototype.includes

### No more cool features?
#### ES 2017 (probably)

```javascript
async function myFunc() {
    let result = await doSomething();

    return result;
}
```

#### Yes, Babel!
Babel: presets & plugins

Tools: eslint & npm

#### Atom
plugins

### Focus: async JavaScript programming
* callbacks
* promises
* generators
* async & await
