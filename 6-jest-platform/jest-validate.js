//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | jest-validate |
//* valida se a configuração enviada pelo usuário está correta
//* com o formato em 'exampleConfig' e compara com 'transform'
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const { validate } = require('jest-validate')

const configByUser = {
  transform: '<rootDir>/node_modules/my-custom-transform',
}

const result = validate(configByUser, {
  comment: '  Documentation: http://custom-docs.com',
  exampleConfig: { transform: '<rootDir>/node_modules/babel-jest' },
})

console.log(result)

//? NO TERMINAL DIGITE
//! npm i jest-validate
//! node jest-validate
// { hasDeprecationWarnings: false, isValid: true }

aqui acabou