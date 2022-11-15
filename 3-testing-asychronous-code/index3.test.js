// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //*     | Testando Código Assíncrono |
// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//? mostrar quando dispara uma exeção na promise
//? quando rejeita a promise no caso

function fetchDataPromiseWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 100)
  })
}

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchDataPromiseWithErrorMessage().catch(e =>
    expect(e).toMatch('error')
  )
})
