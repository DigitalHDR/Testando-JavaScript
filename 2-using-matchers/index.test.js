//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Usando Matchers |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('dois mais dois é quatro', () => {
  expect(2 + 2).toBe(4)
})

//todo ================= Matchers Comuns ============================
//? compara valores de objetos |
test('atribuição de objeto', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

//todo =====================================================
//? compara valores de array |
test('atribuição de array', () => {
  const data = [1]
  data.push(2)
  expect(data).toEqual([1, 2])
})

//todo =====================================================
//? Você também pode testar o oposto de um matcher usando not |
test('adicionando números positivos não é zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})


//todo ==================== Verdade =================================
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})


//todo =====================================================
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

//todo ======================= Números ==============================
//? A maioria das formas de comparar números têm "matcher" equivalentes.

test('dois mais dois', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe e toEqual são equivalentes para números
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

//todo =====================================================
//?Para igualdade de ponto flutuante

test('adicionando números de ponto flutuante', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3)
})

//todo ===================== Strings ================================
//? verificar strings contra expressões regulares (toMatch)

test('não existe I em team', () => {
  expect('team').not.toMatch(/I/) // se colocar o I na onde tem o team falha
})

test('mas existe "stop" em Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

//todo ================ Arrays e iteráveis ========================
//? Você pode verificar se um array ou iterável 
//? contém um item específico no caso 'beer' (toContain)

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
]

test('a lista de compras tem beer nela', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

//todo ================== Exceções ===================================
//? podemos testar se uma função dispara uma exceção
//? ou
//? Se você quiser testar se uma determinada
//? função lança um erro quando é chamada use (toThrow)

//? a função de exceção deve ser do tipo no caso (ConfigError)
//? também é verificado se a mensagem de erro é 
//? 'you are using the wrong JDK'
//? também da pra usar expressões regulares

class ConfigError extends Error {}

function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK')
}

test('compilar o android vai como esperado', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(ConfigError)

  // Você também pode usar a mensagem de erro exata ou um regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/) // expressões regulares
})
