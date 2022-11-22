//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*  mock também captura o a valor do this
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('this', () => {
  const myMock = jest.fn()

  const a = new myMock()
  a.name = 'a'
  const b = {}
  b.name = 'b'
  const bound = myMock.bind(b)
  bound()

  console.log(myMock.mock.instances)
})
//! [ mockConstructor { name: 'a' }, { name: 'b' } ]