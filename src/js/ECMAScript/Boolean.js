export class _Boolean {

    constructor () {

        console.log('=================== Boolean对象 =====================');

        this.task = Object.getOwnPropertyNames(_Boolean.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log([1,2,3].concat([4,5,6]));
    }
}