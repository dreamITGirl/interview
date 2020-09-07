### [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

1. 什么是Promise
   *Promise*是一个对象，代表了一个异步的操作的最终的完成或失败  
   语法：
   ```
     new Promise((resolve,reject) =>{
         /** executor **/
     })
   ``` 
   
2. Promise的使用（最棒的有点就是**链式调用**）
   在使用Promise时，有以下约定：  
   1. 在本轮事件循环运行完成之后，回调函数是不会被调用的（这一点也就避免了老式的传入回调中的回调地狱）
   2. 即使异步操作已经完成（成功或者失败），在这之后通过then()添加回调函数，才会被调用
   3. 可通过多个then()函数，它们会按顺序执行

[Promise的例子]()
```
const promise = doSomething()
const promise1 = promise.then(successCallback,errorCallback)
const promise2 = doSomething().then(successCallback,errorCallback)
```
catch的链式调用（在执行中，遇到reject的情况，就会顺着promise链找到catch，执行里面的方法）  
  
```
new Promise((resolve,reject) => {
    resolve()
}).catch((err)=>{  //当出现错误的时候
    reject()
})
```
3. Promise的状态  
   * pending:初始状态，既不是成功，也不是失败
   * fulfill:意味着操作成功完成
   * rejected:意味着操作失败

4. [Promise 的方法](https://gitee.com/bllx_admin/interview/blob/master/demo/promise.js)  

    



