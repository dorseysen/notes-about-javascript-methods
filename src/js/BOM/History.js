export class _History {

    constructor () {

        this.task = Object.getOwnPropertyNames(_History.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log("history");
    }
}