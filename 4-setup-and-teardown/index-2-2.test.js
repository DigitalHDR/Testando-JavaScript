//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* |Configuração Única roda apenas 1 vez antes e depois de todos os teste |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let cities = []

function initializeCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities.push('Vienna')
      cities.push('San Juan')
      resolve()
    }, 100)
  })
}

function clearCityDatabase() {
  return new Promise(resolve => {
    setTimeout(() => {
      cities = []
      resolve()
    }, 100)
  })
}

function isCity(name) {
  return cities.includes(name)
}

beforeAll(() => {
  return initializeCityDatabase()
})

afterAll(() => { //! nesse caso nem precisaria de afterAll
  return clearCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

test('has 2 cities', () => {
  expect(cities.length).toBe(2)
})
