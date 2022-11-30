//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | jest-diff |
//* Ferramenta para visualizar mudanças nos dados. Exporta uma
//* função que compara dois valores de qualquer tipo e retorna
//* uma string "pretty-printed" ilustrando a diferença
//* entre os dois argumentos. |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const { diff } = require('jest-diff')

const a = ['delete', 'common', 'changed from']
const b = ['common', 'changed to', 'insert']

const difference = diff(a, b)
console.log(difference)

//? NO TERMINAL DIGITE
//! npm i jest-diff
//! node jest-diff

// - Expected
// + Received

//   Array [
//? -   "delete",
//     "common",
//? -   "changed from",
// +   "changed to",
// +   "insert",
//   ]

