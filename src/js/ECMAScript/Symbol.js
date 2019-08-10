export class _Symbol {

    constructor () {

        console.log('=================== Symbol对象 =====================');

        this.task = Object.getOwnPropertyNames(_Symbol.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log([1,2,3].concat([4,5,6]));
    }
}