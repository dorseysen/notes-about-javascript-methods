export class _Date {

    constructor () {

        this.task = Object.getOwnPropertyNames(_Date.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log("Date");
    }
}