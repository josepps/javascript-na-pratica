//Crie uma função que checka o tipo de dado se string, number, boolean
   // implementar para number
    // implementar para boolean

    function checkdado(dado) {
        if (typeof dado === 'string') {
            console.log('Este dado é uma string');
        }
        else if (typeof dado === 'number') {
            console.log('Este dado é um number')
        }
        else if (typeof dado === 'boolean') {
            console.log('Este dado é um boolean')
        }
    }

    checkdado(true)