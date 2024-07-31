# call apply 和 bind笔记

### call 和 apply

call 接受的是参数列表

apply 方法接受的是参数数组

```javascript
func.call(thisArg, arg1, arg2, ...)
func.apply(thisArg, [argsArray])
```

**示例：**

```javascript
// Greetings.
// Traveller from beyond the Fog.
// I am Melina.
// I offer you an accord. 

function greet(greeting,name){
    console.log(`${greeting}.\n${this.player} from ${this.from}.\nI am ${name}.\nI offer you an accord. `);
}

const obj = {
    player:'Traveller',
    from:'beyond the Fog',
}

greet.call(obj,'Greetings','Melina')
greet.apply(obj,['Greetings','Rani'])
```



### bind

`bind` 创建一个新函数

```javascript
function greet(greeting, name) {
    console.log(`${greeting}.\n${this.player} from ${this.from}.\nI am ${name}.\nI offer you an accord.`);
}

const obj = {
    player: 'Traveller',
    from: 'beyond the Fog',
};

const boundGreet = greet.bind(obj, 'Greetings', 'Melina');
boundGreet();
```

##### 延迟调用

```javascript
const boundGreet = greet.bind(obj, 'Greetings');
// 稍后调用这个boundGreet并传递其余的参数
boundGreet('Melina'); 
```



**区别**：

`call` 和 `apply` 会立即调用函数。

`bind` 返回一个新函数，需要手动调用这个新函数才会执行。





