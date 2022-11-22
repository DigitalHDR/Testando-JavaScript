//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//* O mockImplementationmétodo é útil quando você precisa
//* definir a implementação padrão de uma função fictícia
//* criada a partir de outro módulo:  

//? um modulo dentro da propria aplicação
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

jest.mock('./foo') // isso acontece automaticamente com automocking
const foo = require('./foo')

test('foo', () => {
  // foo é uma função simulada
  foo.mockImplementation(() => 42)
  expect(foo()).toBe(42)
  //! 42
})
