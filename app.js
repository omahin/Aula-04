// No arquivo app.js desenvolva sua lógica para o comportamento abaixo: 
//   - deverá ser possível buscar livros pela categoria
//   - Me recomenda livros pra ler? 
//     Deverá listar livros que já foram lidos e que são recomendados 
//   - Minha lista de desejo:
//     Deverá listar livros que ainda não foram lidos 

// - Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas.

// ```
// O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas, conforme instrução acima.

const livros = require('./database')

livros.sort((a,b) => a.paginas - b.paginas)

const pegarEntrada = require('readline-sync')

const buscarLivrosPorCategoria = pegarEntrada.question('Voce deseja ver livros por categoria?(S/N)')

if(buscarLivrosPorCategoria.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Psicologia', 'Psicanálise', 'Poesia', 'Ficção contemporânea', 'Drama', 'Auto ajuda',
    'Transformação pessoal', 'Social', 'Biografia');
    const qualCategoria = pegarEntrada.question('Qual categoria voce ira escolher?')
    const categorias = livros.filter(livro => livro.categoria === qualCategoria)
    console.log(categorias) 
} else {
    console.log('Esses sao todos os livros cadastrados em nossa plataforma:')
    console.table(livros)
}

const livrosRecomendados = pegarEntrada.question('Voce deseja recomendacoes de leitura?')

if(livrosRecomendados.toLocaleUpperCase() === 'S') {
    console.log('Essas sao nossas recomendacoes:')
    const recomendados = livros.filter(livro => livro.recomenda === "True" && livro.leu === "True")
    console.table(recomendados) 
} else {
    console.log('Que pena! Abaixo estao todos os livros cadastrados em nossa plataforma, boa escolha e boa leitura!')
    console.table(livros)
}

const wishlist = pegarEntrada.question('Voce gostaria de uma wishlist para proximas leituras?')

if(wishlist.toLocaleUpperCase() === 'S') {
    console.log('Esses sao os livros nao lidos:')
    const desejos = livros.filter(livro => livro.leu === "False")
    console.table(desejos)
} else {
    console.log('Esses sao todos os livros cadastrados em nossa plataforma:')
    console.table(livros)
}

