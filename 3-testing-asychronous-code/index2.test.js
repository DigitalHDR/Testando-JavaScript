//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Testando Código Assíncrono |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('manteiga de amendoim')
    }, 100)
  })
}

test('os dados são manteiga de amendoim', done => {
  fetchDataPromise().then(data => {
    expect(data).toBe('manteiga de amendoim')
    done()
  })
})
