//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*             Mock Valores de Retorno
//* As funções simuladas também podem ser usadas para injetar
//* valores de teste em seu código durante um teste
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('returnValues', () => {
  const myMock = jest.fn()
  console.log(myMock())
  //! undefined,  porque nao foi setado nenhum retorna e nenhuma implementação

  myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true)

  console.log(myMock(), myMock(), myMock(), myMock())
  //! 10 x true true
})
