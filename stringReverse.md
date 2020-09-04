#### 字符串的反转也是面试中常问到的简单算法题

题目：将*helloWorld* 反转输出*dlroWolleh*  

1. 思路是先将字符串转化成数组，然后将数组反转，转成字符串

    *实现方式*

    ```
    let str = 'helloWorld' ,
        strArr = str.split('') // 将数组转化成字符串
    strArr = strArr.reverse()
    let result = strArr.join() // 将数组转化成字符串
    console.log(result) // dlroWolleh
    ```

    ```
    let str = 'helloWorld' ,
        strArr = str.split(''), // 将数组转化成字符串
        result = [] , resultStr = ''
    for(let i=0;i<strArr.length;i++){
        result.unshift(strArr[i])
    }
    console.log(result)
    resultStr = result.toString().replace(/,/g,'') // dlroWolleh
    
2. 利用charAt

```
let str = 'helloWorld' , resultStr = ''
for(let i=str.length-1;i>0;i--){
    resultStr += str.charAt(i)
}
console.log(resultStr)
```

   

    