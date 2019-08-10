export class _Document {

    constructor () {

        this.task = Object.getOwnPropertyNames(_Document.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    concat () {

        console.log("document");
    }
}