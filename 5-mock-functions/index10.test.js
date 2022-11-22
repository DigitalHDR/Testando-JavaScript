//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Mock Functions | Funções de Simulação
//*        'mockImplementationOnce'
//*
//* Quando você precisar recriar um comportamento complexo
//* de uma função fictícia de modo que várias chamadas de
//* função produzam resultados diferentes, use o
//* 'mockImplementationOnce'
//*
//*
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

test('return this', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  }

  // é o mesmo que o de cima é melhor no caso, menos código
  const otherObj = {
    myMethod: jest.fn(function () {
      return this
    }),
  }

  console.log(myObj.myMethod())
  console.log(otherObj.myMethod())
})

//! console.log
//!     {
//!       myMethod: [Function: mockConstructor] {
//!         _isMockFunction: true,
//!         getMockImplementation: [Function (anonymous)],
//!         mock: [Getter/Setter],
//!         mockClear: [Function (anonymous)],
//!         mockReset: [Function (anonymous)],
//!         mockRestore: [Function (anonymous)],
//!         mockReturnValueOnce: [Function (anonymous)],
//!         mockResolvedValueOnce: [Function (anonymous)],
//!         mockRejectedValueOnce: [Function (anonymous)],
//!         mockReturnValue: [Function (anonymous)],
//!         mockResolvedValue: [Function (anonymous)],
//!         mockRejectedValue: [Function (anonymous)],
//!         mockImplementationOnce: [Function (anonymous)],
//!         withImplementation: [Function: bound withImplementation],
//!         mockImplementation: [Function (anonymous)],
//!         mockReturnThis: [Function (anonymous)],
//!         mockName: [Function (anonymous)],
//!         getMockName: [Function (anonymous)]
//!       }
//!     }


//!   console.log                                                                                  
//!     {                                                                                          
//!       myMethod: [Function: mockConstructor] {
//!         _isMockFunction: true,
//!         getMockImplementation: [Function (anonymous)],
//!         mock: [Getter/Setter],
//!         mockClear: [Function (anonymous)],
//!         mockReset: [Function (anonymous)],
//!         mockRestore: [Function (anonymous)],
//!         mockReturnValueOnce: [Function (anonymous)],
//!         mockResolvedValueOnce: [Function (anonymous)],
//!         mockRejectedValueOnce: [Function (anonymous)],
//!         mockReturnValue: [Function (anonymous)],
//!         mockResolvedValue: [Function (anonymous)],
//!         mockRejectedValue: [Function (anonymous)],
//!         mockImplementationOnce: [Function (anonymous)],
//!         withImplementation: [Function: bound withImplementation],
//!         mockImplementation: [Function (anonymous)],
//!         mockReturnThis: [Function (anonymous)],
//!         mockName: [Function (anonymous)],
//!         getMockName: [Function (anonymous)]
//!       }
//!     }
