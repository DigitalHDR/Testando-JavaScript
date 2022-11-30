//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | Jest Platform | plataforma jest |

//* Você pode escolher recursos específicos do Jest e usá-los como
//* pacotes independentes. Aqui está uma lista dos pacotes disponíveis:

//? jest-changed-files
//* Ferramenta para identificar arquivos modificados em um
//* repositório git/hg. Exporta duas funções:

//? getChangedFilesForRootsretorna
//* uma promessa que resolve para um objeto com os arquivos
//* e repositórios alterados.

//? findRepos 
//* retorna uma promessa que resolve um conjunto de repositórios
//* contidos no caminho especificado.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


const { getChangedFilesForRoots } = require('jest-changed-files')

// imprimir o conjunto de arquivos modificados desde o último commit no repositório atual
// vai mostrar os commit que foram para o github da pasta '5-mock-functions'
getChangedFilesForRoots(['../5-mock-functions'], {
    lastCommit: true
}).then(result => console.log(result.changedFiles))


//? NO TERMINAL DIGITE
//! npm i jest-changed-files
//! $ node jest-changed-files

//? log que vai aparecer dos últimos commits
// Set(4) {
//   'C:\\Users\\live_\\OneDrive\\Documentos\\Testando JavaScript\\5-mock-functions\\__snapshots__\\index12.test.js.s
// nap',
//   'C:\\Users\\live_\\OneDrive\\Documentos\\Testando JavaScript\\5-mock-functions\\index11.test.js',
//   'C:\\Users\\live_\\OneDrive\\Documentos\\Testando JavaScript\\5-mock-functions\\index12.test.js',
//   'C:\\Users\\live_\\OneDrive\\Documentos\\Testando JavaScript\\5-mock-functions\\index13.test.js'
// }
