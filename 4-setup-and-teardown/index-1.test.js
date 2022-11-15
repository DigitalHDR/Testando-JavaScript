//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | para configurações que precisão ser rotada antes ou depois dos teste |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let cities = [] // array que simula um banco de dados

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
  // vericica se o nome da cidade passada existe no banco
  return cities.includes(name)
}

beforeEach(() => {
  // roda sempre antes de cada teste
  return initializeCityDatabase()
})

afterEach(() => {
  // roda sempre depois de cada teste
  //! deve ter para que possa limpar o push, se não ficaria com 6 cidades add
  //! pois ele vai passar pelos testes e add toda vez 'Vienna' e 'San Juan'
  return clearCityDatabase()
})

test('banco de dados da cidade tem Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('banco de dados da cidade tem San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

test('tem 2 cidades', () => {
  expect(cities.length).toBe(2)
})
