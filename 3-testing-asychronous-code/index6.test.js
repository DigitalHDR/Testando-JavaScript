// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //*     | Async/Await  com .resolves / .rejects
// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('manteiga de amendoim')
    }, 100)
  })
}

function fetchDataPromiseWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error'))
    }, 100)
  })
}

test('os dados são manteiga de amendoim', async () => {
  await expect(fetchDataPromise()).resolves.toBe('manteiga de amendoim')
})

test('a busca falha com um erro', async () => {
  await expect(fetchDataPromiseWithError()).rejects.toThrow('error')
})
