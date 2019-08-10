export class _Location {

    constructor () {

        this.task = Object.getOwnPropertyNames(_Location.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log("location");
    }
}