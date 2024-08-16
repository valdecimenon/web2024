
        // propriedades e métodos dos objetos

        const calculadora = {

            // propriedades: chave (key) : valor (value)
            tipo: 'científica',
            marca: 'Cássio',

            // métodos = são funções que fazem parte do objeto
            somar: function (a, b) {
                return a + b
            },

            subtrair: function (a, b) {
                return a - b
            }
        }

        // mostrando as propriedades
        console.log(calculadora.tipo)
        console.log(calculadora.marca)

        // executando os métodos
        console.log(calculadora.somar(5, 3))
        console.log(calculadora.subtrair(5, 3))
