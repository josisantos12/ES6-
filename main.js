// Criar um array de objetos com alunos e suas notas
let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 4 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 9 },
    { nome: "Carlos", nota: 5 },
    { nome: "Julia", nota: 6 }
  ];
  
  // Criar uma função que retorna os alunos com nota maior ou igual à 6
  function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamar a função e imprimir o resultado
  let aprovados = alunosAprovados(alunos);
  console.log(aprovados);