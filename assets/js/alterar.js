document.addEventListener('DOMContentLoaded', () => {
    
    // lê o valor do parâmetro id a partir da url
    // Ex: http://localhost:5500/alterar.html?id=7
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')  // 7

    // solicita ao servidor o produto com id=7
    fetch('http://localhost:3000/produtos/' + id)

    // convete a resposta em formato json
    .then(res => res.json())

    // processa os dados da resposta em json
    .then(data => {
        if (data.length > 0){
            const produto = data[0]
            preecher_formulario(produto)
        } else 
            alerta_erro(`Erro: nenhum produto encontrado com id=${id}`)

    // captura erro se houver
    }).catch(() => alerta_erro(`Erro ao buscar produto com id=${id}`))
})

// CONTINUAR *****