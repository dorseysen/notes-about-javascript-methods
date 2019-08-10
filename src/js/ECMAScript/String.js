export class _String {

    constructor () {

        console.log('=================== String对象 =====================');

        this.task = Object.getOwnPropertyNames(_String.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log([1,2,3].concat([4,5,6]));
    }
}