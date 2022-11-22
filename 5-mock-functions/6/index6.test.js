//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*                 funções simuladas
//* Suponha que temos uma classe que busca usuários de nossa API.
//* A classe usa axios para chamar a API e retorna o dataatributo
//* que contém todos os usuários

//* agora, para testar este método sem realmente atingir a API
//* (e assim criar testes lentos e frágeis), podemos usar
//* a jest.mock(...)função para mock automaticamente
//* do módulo axios.

//* Uma vez que mock do módulo, podemos fornecer um
//* mockResolvedValuefor .getque retorna os dados que
//* queremos que nosso teste assegure. Na verdade, estamos
//* dizendo que queremos axios.get('/users.json')
//* retornar uma resposta falsa.

//? nesse exemplo é pegado o valor do get e trocado o seu retorno,
//? aqui é trocado a implementação do get do arquivo 'users',
//? e retornando a resposta que esta em 'const resp = { data: users }'
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const axios = require('axios').default
const Users = require('./users')

jest.mock('axios')

test('should fetch users', () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }
  axios.get.mockResolvedValue(resp)

  
  axios.get.mockImplementation(() => Promise.resolve(resp))
  // ou você pode usar o seguinte, dependendo do seu caso de uso:
  // também é possivel 'mockar' a implementação dele

  return Users.all().then(data => expect(data).toEqual(users))
})