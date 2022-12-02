//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Property Matchers
//* as vezes estamos trabalhando com data ou algum numero random,
//* entao cada vez que vc rodar ele vai mudar esse valor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  }

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  })
})

// Snapshot
exports[`will check the matchers and pass 1`] = ` Object {
  "createdAt": Any<Date>,
  "id": Any<Number>,
  "name": "LeBron James",
}
`

//todo ============ Boas praticas ==================================
// it('will fail every time', () => {
//   Date.now = jest.fn(() => 1482363367071)

//   const user = {
//     createdAt: Date.now(),
//     id: Math.floor(Math.random() * 20),
//     name: 'LeBron James...',
//   }

//   expect(user).toMatchInlineSnapshot(
//     {
//       id: expect.any(Number),
//     },
//     `
// {
//   "createdAt": 1482363367071,
//   "id": Any<Number>,
//   "name": "LeBron James...",
// }
// `
//   )
// })
