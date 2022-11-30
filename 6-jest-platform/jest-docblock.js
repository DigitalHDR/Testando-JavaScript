//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | jest-docblock |

//? CRIA UM JSON COM OS COMENTÁRIOS

//* Ferramenta para extrair e analisar os comentários no
//* topo de um arquivo JavaScript. Exporta várias funções
//* para manipular os dados dentro do bloco de comentários.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const { parseWithComments } = require('jest-docblock')

const code = `
/**
 * esta é uma amostra
 *
 * @flow
 */

 console.log('Hello World!');
`

const parsed = parseWithComments(code)

// imprime um objeto com dois atributos: comentários e pragmas.
console.log(parsed)

//? NO TERMINAL DIGITE
//! npm i jest-docblock
//! node jest-docblock
// {
//   comments: "/**\nesta é uma amostra\n\n/\n\n console.log('Hello World!');",
//   pragmas: [Object: null prototype] { flow: '' }
// }