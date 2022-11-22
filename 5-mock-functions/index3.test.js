//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*  As funções de simulação (mock) são muito úteis nos
//*  testes permitindo a verificação de como essas funções
//*  então sendo chamadas, instanciadas, ou o que retornam
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('', () => {
  const someMockFunction = jest.fn(() => 'return value')

  someMockFunction('first arg', 'second arg')

  // A função foi chamada exatamente uma vez
  expect(someMockFunction.mock.calls.length).toBe(1)

  // O primeiro argumento da primeira chamada para a função foi 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg')

  // O segundo argumento da primeira chamada para a função foi 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg')

  // O valor de retorno da primeira chamada para a função foi 'return value'
  expect(someMockFunction.mock.results[0].value).toBe('return value')

  const SomeMockConstructor = jest.fn()

  const a = new SomeMockConstructor()
  a.name = 'test'
  const b = new SomeMockConstructor()

  // Esta função foi instanciada exatamente duas vezes
  expect(SomeMockConstructor.mock.instances.length).toBe(2)

  // O objeto retornado pela primeira instanciação desta função
  // tinha uma propriedade `name` cujo valor foi definido como 'test'
  expect(SomeMockConstructor.mock.instances[0].name).toEqual('test')
})
