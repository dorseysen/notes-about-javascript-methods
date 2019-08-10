export class _Number {

    constructor () {

        console.log('=================== Number对象 =====================');

        this.task = Object.getOwnPropertyNames(_Number.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log([1,2,3].concat([4,5,6]));
    }
}