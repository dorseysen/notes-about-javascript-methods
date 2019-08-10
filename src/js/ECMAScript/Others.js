export class _Others{

    constructor () {

        this.task = Object.getOwnPropertyNames(_Others.prototype).filter(item => item !== 'constructor');

        this.task.forEach(item => this[item]());
    }
    //  data type

    dataType () {

        let flag = true;

        console.log(flag + 0);

        console.log(flag + true);

        console.log(flag + 'dorsey');

        console.log(1 == flag);

        console.log('1' + 2 + false);

        console.log( '2' + ['dorsey', 200] );

        console.log('2' + { a: 1, b: 2 });

        console.log( '2' + {
            toString () {
                return 'dorsey';
            }
        } );
    }

    //  action scope
    
    scope () {

        var a = 1;

        function outer () {

            var a = 2;

            function inner () {

                a ++;

                console.log( a );

                var a = 3;
            }
            
            inner();
        }
        outer();
    }
}