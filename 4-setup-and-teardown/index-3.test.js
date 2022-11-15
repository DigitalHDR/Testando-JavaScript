//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | Escopo |
//*  Por padrão, os blocos before e after se aplicam a todos
//*  os testes em um arquivo. Você também pode agrupar testes
//*  junto usando um bloco de describe. Quando eles estão
//*  dentro de um bloco de describe, os blocos before e after
//*  só se aplicam aos testes dentro desse bloco de describe.


//*  Por exemplo, digamos que nós não temos apenas um banco de
//*  dados de cidades, mas também um banco de dados de alimentos.
//*  Nós podemos fazer uma configuração diferente para
//*  diferentes testes:
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let cities = []

function initializeCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities.push({ name: 'Vienna' })
      cities.push({ name: 'San Juan' })
      resolve()
    }, 100)
  })
}

function initializeFoodDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities[0].foods = ['Wiener Schnitzel']
      cities[1].foods = ['Mofongo']
      resolve()
    }, 100)
  })
}

function isCity(name) {
  return cities.map(city => city.name).includes(name)
}

function isValidCityFoodPair(name, food) {
  const city = cities.find(city => city.name === name)

  if (!city || !city.foods) {
    return false
  }

  return city.foods.includes(food)
}

beforeEach(() => {
  // escopo do arquivo
  // Aplica-se a todos os testes neste arquivo
  // roda antes de todos os testes
  // inclusive os teste dentro 'describe'
  return initializeCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

// test("Vienna <3 sausage", () => {
//   expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
// });

describe('matching cities to foods', () => {
  // Aplica-se apenas a testes neste bloco de descrição
  beforeEach(() => {
    //! este 'beforeEach' rata apenas para testes aqui dentro do 'describe'
    return initializeFoodDatabase()
  })

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true)
  })

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true)
  })
})
