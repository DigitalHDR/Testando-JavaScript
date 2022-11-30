//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | jest-get-type |
//? Módulo que identifica o tipo primitivo de qualquer valor JavaScript.
//* Exporta uma função que retorna uma
//* string com o tipo do valor passado como argumento.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const { getType } = require('jest-get-type')

const array = [1, 2, 3]
const nullValue = null
const undefinedValue = undefined

console.log(getType(array))
// 'array'

console.log(getType(nullValue))
// 'null'

console.log(getType(undefinedValue))
// 'undefined'

//? NO TERMINAL DIGITE
//! npm i jest-get-type
//! node jest-get-type

// array
// null
// undefined