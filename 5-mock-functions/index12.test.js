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

test('custom matchers', () => {
  const mockFunc = jest.fn()

  const arg1 = 'arg1'
  const arg2 = 'arg2'

  mockFunc(arg1, arg2)

  const arg3 = 'arg3'
  const arg4 = 'arg4'

  mockFunc(arg3, arg4)

  // A função simulada foi chamada pelo menos uma vez
  expect(mockFunc).toBeCalled()

  // A função simulada foi chamada pelo menos uma vez com os argumentos especificados
  expect(mockFunc).toBeCalledWith(arg1, arg2)

  // A última chamada para a função simulada foi chamada com os argumentos especificados
  expect(mockFunc).lastCalledWith(arg3, arg4)

  // Todas as chamadas e o nome da simulação são gravados como um instantâneo
  expect(mockFunc).toMatchSnapshot()
})
