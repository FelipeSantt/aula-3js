
let nomeMes = ['Rei','Mo','Cupido','Apaixonado','pagodeiro','Cara Perfeito','Mensageiro','Gueri Gueri','Coração','Linda Voz','Criado mudo','Cara Perfeito'];



form.onsubmit = (e) => {
    e.preventDefault();
    let nomeDia = '';
    if(Number(dia.value) < 4){
        nomeDia = 'que tanto fez ou tanto faz'
    } else if (Number(dia.value < 7)) {
        nomeDia = 'que desabou o barraco';
    } else if (Number(dia.value) < 10) {
        nomeDia = 'que largou o freio';
    } else if (Number(dia.value) < 13){
        nomeDia = 'que so quer curtir';
    } else if(Number(dia.value) < 16){
        nomeDia = 'que partiu coracoes';
    } else if(Number(dia.value) < 19){
        nomeDia = 'que chega chegando';
    } else if(Number(dia.value) < 22){
        nomeDia = 'que arrasa corações';
    } else if(Number(dia.value) < 25){
        nomeDia = 'que fugiu do pagode';
    } else if(Number(dia.value) < 25){
        nomeDia = 'que bota boneco';
    } else {
        nomeDia = 'que ninguem ama';
    }
    resultado.innerHTML = `Seu nome de pagodeiro é: ${nomeMes[mes.value]} ${nomeDia}`;
}







//Variavel declarada transfomando string para Number e usando o metodo Math.random para pegar um numero aleatorio e multiplica pela quantidade de numero que voce deseja no sorteio, e por ultimo o to.Fixed para declarar o tamanho da casa decimal nesse caso pegando so o numero inteiro.
// let numeroSorteado = Number((Math.random() * 11).toFixed());

//Maneira de Fazer com uma Array
// let alunos = ['Afonso','Marcio','Nathan','Caio','Isabela','Felipe','Santos','Rodrigo','Joao','Junior','Gabriel','Nicolas'];
// alunoSorteado.innerHTML = `${numeroSorteado + 1} - ${alunos[numeroSorteado]}`;

//Maneira de Fazer com Switch
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
