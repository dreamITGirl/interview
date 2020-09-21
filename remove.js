/** 
 * 封装的删除多个元素的方法
*/
function RemoveFunc(delNum,list){
    let result = [...list]
    if (delNum instanceof Array) { //删除的是数组
        for (let i = 0; i < result.length; i++) {
            if (delNum.includes(result[i])) { //需要删除的
                result.splice(i,1)
            }
        }
        
    } else { //删除的是单个元素
        for (let i = 0; i < result.length; i++) {
            if (result[i] == delNum) {
                result.splice(i,1)
            }
        }
    }
    return result
}