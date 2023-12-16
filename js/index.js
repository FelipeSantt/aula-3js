let numeroSorteado = Number((Math.random() * 11).toFixed());
let alunos = ['Afonso','Marcio','Nathan','Caio','Isabela','Felipe','Santos','Rodrigo','Joao','Junior','Gabriel','Nicolas'];
alunoSorteado.innerHTML = `${numeroSorteado + 1} - ${alunos[numeroSorteado]}`;

// switch(numeroSorteado){
//     case 1:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Afonso`;
//     break;
//     case 2:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Marcio`;
//     break;
//     case 3:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Nathan`;
//     break;
//     case 4:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Caio`;
//     break;
//     case 5:
//         alunoSorteado.innerHtml = `${numeroSorteado} - Isabella`;
//     break;
//     case 6:
//         alunoSorteado.innerHtml = `${numeroSorteado} - Felipe`;
//     break;
//     case 7:
//         alunoSorteado.innerHtml = `${numeroSorteado} -  Santos`;
//     break;
//     case 8:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Rodrigo`;
//     break;
//     case 9:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Joao`;
//     break;
//     case 10:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Junior`;
//     break;
//     case 11:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Gabriel`;
//     break;
//     case 12:
//         alunoSorteado.innerHTML = `${numeroSorteado} - Nicolas`;
//     default:
//         alunoSorteado.innerHTML = "Soteie um Aluno";
// }