//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | Plataforma Jest |
//*                pretty-format
//* Exporta uma função que converte qualquer valor JavaScript
//* em uma string legível por humanos. Oferece suporte a todos
//* os tipos de JavaScript integrados e permite a extensão para
//* tipos específicos de aplicativos por meio de
//* plug-ins definidos pelo usuário.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const { format: prettyFormat } = require('pretty-format')

const val = { object: {} }
val.circularReference = val
val[Symbol('foo')] = 'foo'
val.map = new Map([['prop', 'value']])
val.array = [-0, Infinity, NaN]

console.log(prettyFormat(val))

//? NO TERMINAL DIGITE
//! npm i pretty-format
//! node pretty-format.js

// Object {
//   "array": Array [
//     -0,
//     Infinity,
//     NaN,
//   ],
//   "circularReference": [Circular],
//   "map": Map {
//     "prop" => "value",
//   },
//   "object": Object {},
//   Symbol(foo): "foo",
// }

//? no terminal vai mostrar tudo que está no código em formato json