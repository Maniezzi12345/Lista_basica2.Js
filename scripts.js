// Faça um programa que leia um nome de usuário e sua senha e não aceite a senha igual ao nome do usuário,
//  mostrando uma mensagem de erro e retornando a pedir as informações.

function logar(){

    let usuario = prompt("Digite o nome do usuário:")
    while( true){
     let usuario = prompt("Digite o nome do usuário:")
     let senha = prompt ("Digite sua senha:")

    if( usuario == senha ){
        alert("ERRO! Insira os dados novamente")
    }

    else{
        alert("lOGADO COM SUCESSO")
            break
    }
}
}

let login = logar()




// Faça um Programa que avalia quanto você ganha por hora e o número de horas trabalhadas no mês.

// Calcule e mostre o total do seu salário no mês referido, sabendo-se que são descontados 11% para
//  o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê: salário bruto. 
//  quanto pagou ao INSS. quanto pagou ao sindicato. o salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo:

// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$
// Obs.: Salário Bruto - Descontos = Salário Líquido.


function CriarSalario(){
    const ValorHora = 5.50;
    
    function CalcularLiquido(){
        let horasTrabalhadas = parseFloat(prompt("Quantas horas voce trabalha por dia ?"));
            while(horasTrabalhadas <= 0){
                alert("Valor inválido!Insira novamente!")
                horasTrabalhadas = parseFloat(prompt("Quantas horas voce trabalha por dia ?"))
            }
        const horasMes = horasTrabalhadas * 240
        const horasAno = horasMes * 12
        const salarioBruto = ValorHora * horasAno

            console.log(`Você trabalha por ${horasMes} horas durante o mês e ${horasAno} horas durante o ano  e recebe $ ${salarioBruto},00  bruto por mês`)
            return salarioBruto
    }
       

    function CalcularBruto(salarioBruto){
        const IR = 0.11;
        const INSS = 0.08;
        const sindicato = 0.05;
        const DescontoDeImpostos = (salarioBruto * IR) + (salarioBruto * INSS) + (salarioBruto * sindicato);
        const salarioLiquido = salarioBruto - DescontoDeImpostos;

        alert( `Você recebe R$ ${salarioLiquido.toFixed(2)} líquido por mês`)


 
}
    return{
        CalcularLiquido,
        CalcularBruto
    }

 

}
let inicio = CriarSalario();
let salarioBruto = inicio.CalcularLiquido();
inicio.CalcularBruto(salarioBruto);






