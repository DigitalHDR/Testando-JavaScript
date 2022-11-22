//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*                 funções simuladas
//* usando a função como filtro de um array
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('filter', () => {
  const filterTestFn = jest.fn()

  // Faça o falso retorno `true` para a primeira chamada,
  // e `false` para a segunda chamada
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

  const result = [11, 12].filter(filterTestFn)
  //! o filtro dessa função, quando retorna true, ele mantem o valor 11
  //! quando retorna false ele remove o valor do array 12

  console.log(result)
  //! [11]
  console.log(filterTestFn.mock.calls)
  //! [ [11], [12] ]
  //! [ [ 11, 0, [ 11, 12 ] ], [ 12, 1, [ 11, 12 ] ] ] aqui esta completo
})
