const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de chegar em uma nova escola onde não conhece ninguém, você prefere?",
        alternativas: [ {
            texto: "Tentar se enturmar para criar novas amizades.",
            afirmacao: "Sou uma pessoa sociável que gosta de conhecer novas pessoas."
        },
        {
            texto: "Ir ficar num canto esperando alguém falar com você.",
            afirmacao: "Sou uma pessoa antissocial que tem vergonha de conversar com as pessoas"
        }
    ]
},
    {
        enunciado: "Após um certo período de aula, você conseguiu se enturmar com o grupo de pessoas que fazem o seu tipo de personalidade. Que são?",
        alternativas: [
            {
                texto: "Pessoas introvertidas, quietas, tímidas e antissociais.",
                afirmacao: "Com isso, no futuro você se torna uma pessoa mais reservada que tem dificuldades de lidar com situações de extremo contato."
            },
            {
                texto: "Pessoas extrovertidas, animadas, comunicativas e sociáveis.",
                afirmacao: "Com isso, no futuro você se torna uma pessoa mais afetuosa quem sabe lidar com situações de extremo contato."
            }
        ]
},
    {
        enunciado: "No horário de seu intervalo seus colegas te chamam para ir lanchar, o que você responde a eles?"
        ,
        alternativas: [
            {
                texto: "Que não quer ir comer porque está sem fome, mas na verdade tem vergonha de comer na frente de desconhecidos.",
                afirmacao: "Com toda essa vergonha dentro de si, voce fica incapaz de fazer todas as coisas que tem vontade de fazer e as coisas lhe agradam."
            },
            {
                texto: "Que sim e resolve ir com seus novos colegas, e que não se incomoda de comer na frente de desconhecidos.",
                afirmacao: "Com toda confiança dentro de si, você fica capaz de fazer todas as coisas que tem vontade de fazer e as coisas que lhe agradam."
            }
        ]
},
    {
        enunciado: " Ao voltar para sala de aula percebe que as outras pessoas da sala estou falando e começam a olha para você imediatamente após entrar na sala, o que você faz?",
        alternativas: [
            {
                texto: "Tenta conversar com eles para que não haja nenhum conflito entre você e as outras pessoas da sala.",
                afirmacao: "Após isso, você descobre que conversando é possível evitar desentendimentos com outras pessoas."
            },
            {
                texto: "Fica assustado ao ver eles falando e olhando para você e acha que estão falando mau.",
                afirmacao: "Após isso, você evita falar com pessoas que aparentam estar falando sobre você e impede de criar novos laços."
            }
        ]
},
    {
        enunciado: "Depois de um longo dia de aula, sues colegas perguntam se você gostaria de ir embora para casa com eles, o que você faz?",
        alternativas: [
            {
                texto: "Diz que sua casa nao fica na mesma direção da que eles vão para não manter tanto contato com eles.",
                afirmacao: "Diante disso, você se ve como uma pessoa solitária que não gosta de de socializar que sente que não pode estabelecer uma relação de confiança com as pessoas que convive no seu dia a dia."
            },
            {
                texto: "Diz que seria ótimo, assim conseguindo uma aproximação maior com seus colegas.",
                afirmacao: "Diante disso,você se ve como uma pessoa auto astral que ama se socializar com as pessoas para poder contar sempre com elas."
            }
        ]
},
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();