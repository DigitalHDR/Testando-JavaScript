// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //*     | .resolves / .rejects |
// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('peanut butter')
    }, 100)
  })
}

test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter')
})

//todo =====================================================

function fetchDataPromiseWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 100)
  })
}

test('a busca falha com um erro', () => {
  return expect(fetchDataPromiseWithErrorMessage()).rejects.toMatch('error')
})
