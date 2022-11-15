// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //*     | Async/Await |
// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('manteiga de amendoim')
    }, 100)
  })
}

function fetchDataPromiseWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 100)
  })
}

test('os dados são manteiga de amendoim', async () => {
  const data = await fetchDataPromise()
  expect(data).toBe('manteiga de amendoim')
})

test('a busca falha com um erro', async () => {
  expect.assertions(1)
  try {
    await fetchDataPromiseWithErrorMessage()
  } catch (e) {
    expect(e).toMatch('error')
  }
})
