// importa o módulo do mysql
import mysql from 'mysql2/promise'


async function conectar(){

    if (global.conexao && global.conexao.state != 'disconnected')
        return global.conexao

    // cria uma conexão com o banco de dados
    const conexao = mysql.createConnection({
        user: 'root',
        password: 'softgraf',
        host: 'localhost',
        port: 3306,
        database: 'mundoverde'
    })

    console.log('Conectou ao MySQL')
    // objeto de acesso global
    global.conexao = conexao
    // retorna uma conexão
    return conexao
}

// conectar()

async function listarProdutos(){
    // obtem a conexao
    const con = await conectar()
    const sql = 'SELECT * FROM Produtos'
    const [dados] = await con.query(sql)
    return dados
}

