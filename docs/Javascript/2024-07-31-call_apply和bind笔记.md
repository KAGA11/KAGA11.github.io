
# call apply 和 bind笔记
call apply bind 就是显式绑定, 用于改变函数内部 this 指向的方法
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



### 手写call, apply, bind

```javascript
Function.prototype.myCall = function(thisArg,...args){ 
    let key = Symbol('key')
    thisArg[key] = this

    const res = thisArg[key](...args)
    delete thisArg[key]
    return res
}

Function.prototype.myApply = function(thisArg,args){//传入的是一个数组
    let key = Symbol('key')
    thisArg[key] = this

    const res = thisArg[key](...args)
    delete thisArg[key]
    return res
}

Function.prototype.myBind = function(thisArg,...args){
    let self = this
    return function(...newArgs){
        return self.myApply(thisArg,[...args,...newArgs])
    }
}
```







