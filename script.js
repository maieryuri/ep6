const imagem = document.getElementById("imagemDinamica");
const botaoAlterarImagem = document.getElementById("alterarImagem");

botaoAlterarImagem.addEventListener("click", function() {
    // Altere a imagem quando o botão for clicado
    imagem.src = "imagens/img2.jpg";
});

// script.js
document.getElementById("enviar").addEventListener("click", function() {
    const resposta1 = document.getElementById("pergunta1").value;
    const resposta2 = document.getElementById("pergunta2").value;
    const resposta3 = document.getElementById("pergunta3").value;

    // Realize os cálculos de probabilidade ou verificação de respostas aqui
    // Por exemplo:
    // const resultado1 = calcularProbabilidade(resposta1);
    // const resultado2 = verificarResposta(resposta2);
    // const resultado3 = calcularProbabilidade(resposta3);

    // Exiba os resultados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Resposta 1: ${A probabilidade de obter cara em um lançamento de moeda justa é de 50%. Isso ocorre porque uma moeda justa tem dois lados igualmente prováveis: cara e coroa. Portanto,
             a chance de obter cara é de 1 em 2, o que equivale a 50%.}</p>
        <p>Resposta 2: ${A probabilidade de obter um número ímpar em um dado de seis faces é de 3/6 ou 1/2, o que equivale a 50%. Isso ocorre porque um dado de seis faces possui três números ímpares (1, 3 e 5) e três números pares (2, 4 e 6). Portanto,
         a chance de obter um número ímpar é de 3 em 6, o que é o mesmo que 1 em 2, resultando em 50% de probabilidade.}</p>
        <p>Resposta 3: ${a probabilidade de obter um ás em um baralho de 52 cartas é de 1/13, o que equivale a aproximadamente 7.69%}</p>
        <!-- Adicione mais resultados conforme necessário -->
    `;
});


function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Erradawe"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}