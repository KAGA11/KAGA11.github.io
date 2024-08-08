### for ... of vs for ... in

for..of和for..in均可迭代一个列表；但是用于迭代的值却不同:

for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值。

另一个区别是for..in可以操作任何对象

```javascript
// 当一个对象实现了Symbol.iterator属性时 它是可迭代的
const myIterate = {
    a : 1,
    b : 2,
    c : 3,
    *[Symbol.iterator](){
        yield this.a;
        yield this.b;
        yield this.c;
    }
}

// for...of 只能操作可迭代对象 如数组、字符串、Map、Set 等
for (const value of myIterate) {
    console.log(value); // 1 2 3
}

//for...in 可以操作任何对象
for (const key in myIterate) {
    console.log(key);  // a b c
    
}
```

