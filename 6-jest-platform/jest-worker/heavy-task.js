//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | Plataforma Jest |
//*                jest-worker
//* Módulo utilizado para a paralelização de tarefas.
//* Exporta uma classe JestWorkerque toma o caminho do
//* módulo Node.js e permite chamar os métodos exportados
//* do módulo como se fossem métodos de classe,
//* retornando uma promessa que resolve quando o método
//* especificado termina sua execução
//* em um processo bifurcado.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

module.exports = {
  myHeavyTask: args => {
    return args
  },
}
