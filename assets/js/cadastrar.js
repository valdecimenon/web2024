

// função para enviar dados do formulário via método POST
// function salvar() { }

const salvar = () => {

    if (!validar_formulario())
        return
    
    const dados = {
        descricao : document.getElementById('descricao').value,
        categoria :  parseInt(document.getElementById('categoria').value),
        preco : parseFloat(document.getElementById('preco').value.replace(',', '.')),
        quantidade : parseInt(document.getElementById('quantidade').value),
        url : document.getElementById('url').value
    }

    console.log('Dados enviados ao servidor:\n', dados)

    // envia dados ao servidor via método POST
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // converte objeto javascript em string para poder enviar
        body: JSON.stringify(dados)

    // após enviar, recebe a resposta do servidor em formato string,
    // então converte em objeto json
    }).then(res => res.json()
    
    // pega o objeto json convertido e mostra no console
    ).then(data => {
        console.log('Retorno do servidor:\n', data)

    }).then(() =>{
        console.log('Sucesso ao cadastrar produto!')

    // se houver erro, cai neste código
    }).catch(erro => alerta_erro(`Erro ao cadastrar produto: ${erro}`))
    
}