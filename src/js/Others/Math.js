export class _Math {

    constructor () {

        this.task = Object.getOwnPropertyNames(_Math.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log("math");
    }
}