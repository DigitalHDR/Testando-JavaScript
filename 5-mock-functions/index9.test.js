//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*        'mockImplementationOnce'
//*
//* Quando você precisar recriar um comportamento complexo
//* de uma função fictícia de modo que várias chamadas de
//* função produzam resultados diferentes, use o
//* 'mockImplementationOnce'
//*
//*
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('mockImplementationOnce', () => {
  const myMockFn = jest
    .fn() //3°
    .mockImplementationOnce(cb => cb(null, true)) //1°
    .mockImplementationOnce(cb => cb(null, false)) //2°

  myMockFn((err, val) => console.log(val))
  //! true

  myMockFn((err, val) => console.log(val))
  //! false
})


//todo ====== outro exemplo ============================
test('mockImplementationOnce v2', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'primeira chamada')
    .mockImplementationOnce(() => 'segunda chamada')

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn())
  //! primeira chamada segunda chamada default default
})
