//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*     Nome das funções de simulação (Mock names)
//*
//*             Matchers personalizados
//*
//* Por fim, para tornar menos exigente afirmar como as
//* funções fictícias foram chamadas, adicionamos algumas
//* funções de correspondência personalizadas para você:

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('common matchers', () => {
  const mockFunc = jest.fn().mockName('a mock name')

  const arg1 = 42
  const arg2 = 'arg2'

  mockFunc(arg1, arg2)

  // A função simulada foi chamada pelo menos uma vez
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0)

  // A função simulada foi chamada pelo menos uma vez com os argumentos especificados
  expect(mockFunc.mock.calls).toContainEqual([arg1, arg2])

  // A última chamada para a função simulada foi chamada com os argumentos especificados
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    arg1,
    arg2,
  ])

  // O primeiro argumento da última chamada para a função simulada foi `42`
  // (observe que não há auxiliar de açúcar para essa afirmação específica)
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42)

  // Um instantâneo verificará se uma simulação foi invocada o mesmo número de vezes,
  // na mesma ordem, com os mesmos argumentos. Ele também irá afirmar sobre o nome.
  expect(mockFunc.mock.calls).toEqual([[arg1, arg2]])

  // o nome da função monck deve ser 'a mock name'
  expect(mockFunc.getMockName()).toBe('a mock name')

})
