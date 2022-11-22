//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*               Mock Implementations

//? exemplo para mockar a implementação das funções

//? Ainda assim, há casos em que é útil ir além da capacidade
//? de especificar valores de retorno e substituir totalmente
//? a implementação de uma função fictícia. Isso pode ser
//? feito com jest.fnou o mockImplementationOncemétodo
//? em funções fictícias.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('mockImplementationOnce', () => {
  const myMockFn = jest.fn(cb => cb(null, true))

  myMockFn((err, val) => console.log(val))
  //! true
})
//? essa implementação retorna um callback que retorna
//? para o segundo parametro o valor true
