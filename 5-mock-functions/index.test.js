//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//* você consegue apagar a implementação de uma função que ja existe
//* consegue capturar as chamadas para essa função
//* vc consegue instancia e gravar essas instancia
//* e consegue mudar o retorno dos valores
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('mockCallback', () => {
  const mockCallback = jest.fn(x => 42 + x)
  forEach([0, 1], mockCallback)

  //! A função mock é chamada duas vezes
  expect(mockCallback.mock.calls.length).toBe(2)

  //! O primeiro argumento da primeira chamada para a função foi 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  //! O primeiro argumento da segunda chamada para a função foi 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  //! O valor de retorno da primeira chamada para a função foi 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})
