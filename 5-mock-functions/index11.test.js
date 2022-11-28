//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*     Nome das funções de simulação (Mock names)
//*
//* Opcionalmente, você pode fornecer um nome para suas
//* funções simuladas, que serão exibidas em vez
//* de 'jest.fn()'na saída do erro de teste.
//* Use .mockName()se quiser identificar rapidamente
//* a função simulada relatando um erro em sua saída de teste.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('mockName', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42')
})
