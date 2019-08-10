export class _Array {

    constructor () {

        console.log('=================== Array对象 =====================');

        this.task = Object.getOwnPropertyNames(_Array.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());

    }
    //  ================ 数组内部方法 =====================
    from () {

        console.log(Array.from({length: 100}, (item, index) => index + 1));
    }
    isArray () {

        console.log(Array.isArray([12,3,45,6]));
    }
    //  ================ 数组原型方法 =====================
    //  数组的合并
    concat () {

        console.log([1,2,3].concat([4,5,6]));
    }
    //  数组元素替换 —— 不常用
    copyWithin () {

        console.log(["dorsey", "sen", "hello", "world", "name"].copyWithin(2, 0, 2));
    }
    //  数组迭代
    entries () {

        console.log(['a', 'b', 'c'].entries().next());
    }
    //  测试数组每一个元素是否满足某种条件，是则为true，否则为false
    every () {

        console.log([1, 20, 30, 32, 26, 15, 33, 22].every(item => item < 40));
    }
    //  方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
    fill () {
        
        console.log([1,2,3,4,5,6].fill(6));
        console.log([1,2,3,4,5,6].fill('6', 3, 5));
    }
    //  数组过滤 - 返回一个成员都满足过滤条件的新数组
    filter () {

        console.log([1,2,3,4,5,6,7,8].filter(item => item > 3));
    }
    //  数组元素查找 = 返回第一个被查找到的目标元素，若数组都无则返回undefined
    find () {

        console.log([1,2,3,4,5,6,7,8].find(item => item > 3));
    }
    //  数组元素查找，与find几乎一样，区别的是这个返回的是元素的索引
    findIndex () {

        console.log([1,2,3,4,5,6,7,8].findIndex(item => item > 3));
    }
    //  数组扁平化 - 默认只扁平化一阶，可通过传入参数改变扁平化阶数
    flat () {

        console.log([1,2, [3, 4], [5, 6, [7, 8, [9, 10]]]].flat());
        console.log([1,2, [3, 4], [5, 6, [7, 8, [9, 10]]]].flat(Infinity));
    }
    //  map和flat首层的结合体
    flatMap () {

        console.log([1,2,3,4,5].flatMap(item => [item * 2]));
    }
    //  数组遍历
    forEach () {

        ['a', 'b', 'c', 'd'].forEach((item, index) => { console.log([item, index]) });
    }
    //  数组是否包含某一指定元素 - 返回true 与 false
    includes () {

        console.log([1,2,3,4,5,6].includes('1'));
    }
    //  数组索引定位
    indexOf () {

        console.log([1,2,3,4,5,6].indexOf(3));
    }
    //  数组元素以某种连接方式连接成一个字符串
    join () {

        console.log(['dorsey', 'love', 'sen'].join(' '));
    }
    //  数组索引返回
    keys () {

        console.log(['a', 'b', 'c', 'd'].keys().next());
    }
    //  返回指定元素在数组中最后一个出现的索引，若都没有则返回 -1
    lastIndexOf () {

        console.log([1,2,3,4,5,6,7,12,3,4,5,6,8,7,3,5,6].lastIndexOf(5));
    }
    //  数组映射
    map () {

        console.log([1,2,3,4,5,6,7].map(item => item * 100));
    }
    //  数组删减 - 从数组末尾删除,会更改原数组
    pop () {

        let arr = [1,2,3,4,5,6,7];
        console.log(arr.pop());
        console.log(arr);
    }
    //  数组增加 - 从数组末尾增加，会更改原数组
    push () {

        let arr = [1,2,3,4,5,6,7];
        console.log(arr.push('dorsey'));    //  返回该数在数组中的索引值
        console.log(arr);
    }
    //  累加器
    reduce () {

        console.log([1,2,3,4,5,6,7].reduce((acc, cur) => acc + cur));
    }
    //  累加器，只不过变成从右到左
    reduceRight () {

        console.log([[1,2], [3, 4], [5, 6], [7, 8]].reduceRight((acc, cur) => [...acc, ...cur]));
    }
    //  数组倒置
    reverse () {

        console.log([1,2,3,4,5,6].reverse());
    }
    //  删除数组第一个元素
    shift () {

        let arr = [1,2,3,4,5,6,7];
        console.log(arr.shift());    //  返回该数在数组中的索引值
        console.log(arr);
    }
    //  数组切片 - 不改变原数组
    slice () {

        let arr = [1,2,3,4,5,6,7];
        console.log(arr.slice(1,2));    //  返回该数在数组中的索引值
        console.log(arr);
    }
    //  数组中是否至少存在一项满足传入的条件
    some () {

        console.log(['a', 'b', 'c', 'dorsey', 'sen'].some(item => item.length > 5));
    }
    //  数组排序
    sort () {
        console.log([3,2,1,'a','c',5].sort());
        console.log([34, 55, 22, 1, 18, 99, 45, 32].sort((a, b) => a - b));
    }
    //  数组切片 - 会改变原数组
    splice () {

        let arr = [1,2,3,4,5,6,7];
        console.log(arr.splice(1,2));    //  返回该数在数组中的索引值
        console.log(arr);
    }
    //  数组元素转字符串，对于时间类型的数据尤为有效
    toLocalString (){

        console.log([1, 'a', new Date()].toLocaleString('en', {timeZone: 'UTC'}));
    }
    //  测试时用于查看数组内容，非标准，用得不多，也尽量不用
    toSource () {
        //  火狐能用，chrome不能用
        // console.log([1,2,3,4,5].toSource());
    }
    //  数组toString，转成字符串,以逗号分隔
    toString () {

        console.log([1,2,3,4,5,6].toString());
    }
    //  数组增加 - 在数组的开头增加一项
    unshift () {

        let arr = [1,2,3,4,5,6,7];
        console.log(arr.unshift('a'));
        console.log(arr);
    }
    //  数组的值 - 迭代器的形式
    values () {

        console.log(['dorsey', 'sen', 'hello'].values().next());
    }
}