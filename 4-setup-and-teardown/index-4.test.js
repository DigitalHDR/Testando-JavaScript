///* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | ordem de execução de todos os hooks. |

//*  Observe que o beforeeach de nível superior é executado antes
//*  do beforeEach dentro do bloco describe. Isso pode ajudar
//*  a ilustrar a ordem de execução de todos os hooks.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

beforeAll(() => console.log('Fora do bloco(escopo) - beforeAll'))
afterAll(() => console.log('Fora do bloco(escopo) - afterAll'))
beforeEach(() => console.log('Fora do bloco(escopo) - beforeEach'))
afterEach(() => console.log('Fora do bloco(escopo) - afterEach'))

test('', () => console.log('1 - test'))

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('dentro do bloco(escopo) describe - beforeAll'))
  afterAll(() => console.log('dentro do bloco(escopo) describe - afterAll'))
  beforeEach(() => console.log('dentro do bloco(escopo) describe - beforeEach'))
  afterEach(() => console.log('dentro do bloco(escopo) describe - afterEach'))

  test('', () => console.log('2 - test'))
})

// ● Console

//     console.log
//       1 - beforeAll

//       at Object.<anonymous> (index-4.test.js:1:45)

//     console.log
//       1 - beforeEach

//       at Object.log (index-4.test.js:3:26)

//     console.log
//       1 - test

//       at Object.log (index-4.test.js:6:24)

//     console.log
//       1 - afterEach

//       at Object.log (index-4.test.js:4:25)

//     console.log
//       2 - beforeAll

//       at Object.log (index-4.test.js:9:27)

//     console.log
//       1 - beforeEach

//       at Object.log (index-4.test.js:3:26)

//     console.log
//       2 - beforeEach

//       at Object.log (index-4.test.js:11:28)

//     console.log
//       2 - test