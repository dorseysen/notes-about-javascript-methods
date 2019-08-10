export class _Keyword {

    constructor () {

        this.task = Object.getOwnPropertyNames(_Keyword.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log([1,2,3].concat([4,5,6]));
    }
}