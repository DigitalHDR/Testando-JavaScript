//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Conselho geral |
//* você pode usar o 'test.only' para rodar apenas um arquivo
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//? Primeiro sem o 'test.only' para poder ver como funciona
// let globalVariable = 'A'

// test('Primeiro teste', () => {
//   expect(globalVariable).toBe('A')
//   globalVariable = 'B'
// })

// test('Segundo teste', () => {
//   expect(globalVariable).toBe('A')
// })

//? perceba que no primeiro teste passa mais no
//? segundo falha porque 'globalVariable' foi alterado
//? para 'B' 

//log
// √ Primeiro teste (2 ms)
//   × Segundo teste (4 ms)                                                               
                                                                                       
//   ● Segundo teste                                                                      
                                                                                       
//     expect(received).toBe(expected) // Object.is equality

//     Expected: "A"
//     Received: "B"
//todo =====================================================

//? Agora com 'test.only' para poder ver como funciona
let globalVariable = 'A'

test('Primeiro teste', () => {
  expect(globalVariable).toBe('A')
  globalVariable = 'B'
})

test.only('Segundo teste', () => {
  expect(globalVariable).toBe('A')
})

// √ Segundo teste (2 ms)
// ○ skipped Primeiro teste 

//? Perseba que agora o segundo teste passa pois o primeiro não foi
//? executado apena o segundo é rodado.