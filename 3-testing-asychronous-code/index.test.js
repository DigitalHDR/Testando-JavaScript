// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //*     | Testando Código Assíncrono |
// //* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// //todo ================ Promessas ================================

function fetchData(callback) {
  setTimeout(() => {
    callback('manteiga de amendoim')
  }, 100)
}

// Não faça isso!
// test("os dados são manteiga de amendoim", () => {
//   function callback(data) {
//     expect(data).toBe("manteiga de amendoim wrong");
//   }

//   fetchData(callback);
// });

test('os dados são manteiga de amendoim', done => {
  function callback(data) {
    expect(data).toBe('manteiga de amendoim')
    done()
  }

  fetchData(callback)
})
