const DATA = [
    {
        category: "RA1",
        items: [
            { title: "Home", id: "home", template: "templates/home.html" },
            { title: "Introdução", id: "introducao", template: "templates/introducao.html" },
            { title: "Conceitos básicos", id: "conceitos-basicos", template: "templates/conceitos_basicos.html" },
            { title: "Terminologia", id: "terminologia", template: "templates/terminologia.html" }
        ]
    },
    {
        category: "Quizzes",
        subitems: [
            {
                title: "RA1/Introdução à AM",
                id: "q-intro-ml",
                questions: [
                    {
                        q: "A Aprendizagem de Máquina é considerada um ramo de qual área?",
                        options: [
                            "Engenharia de Software",
                            "Inteligência Artificial",
                            "Banco de Dados",
                            "Redes de Computadores"
                        ],
                        correct: 1,
                        explanation: "AM é um ramo da Inteligência Artificial focado em aprender a partir de dados."
                    },
                    {
                        q: "Qual das alternativas melhor descreve Machine Learning?",
                        options: [
                            "Programação manual de regras",
                            "Aprendizado a partir de dados",
                            "Execução de algoritmos determinísticos",
                            "Processamento de hardware"
                        ],
                        correct: 1,
                        explanation: "Machine Learning aprende padrões a partir de dados, não regras fixas."
                    },
                    {
                        q: "Quando a Inteligência Artificial passou a ser considerada uma ciência?",
                        options: [
                            "1945",
                            "1950",
                            "1956",
                            "1965"
                        ],
                        correct: 2,
                        explanation: "A IA foi formalizada como ciência em 1956 no Dartmouth College."
                    },
                    {
                        q: "Qual dessas afirmações sobre IA é incorreta?",
                        options: [
                            "Resolve qualquer problema",
                            "Aprende sozinha",
                            "Pode superar humanos em tarefas específicas",
                            "Pode criar soluções autônomas"
                        ],
                        correct: 0,
                        explanation: "IA NÃO resolve qualquer problema — isso é um mito."
                    },
                    {
                        q: "Qual destes NÃO é um tema emergente relacionado à IA?",
                        options: [
                            "Deep Learning",
                            "Big Data Analytics",
                            "Data Science",
                            "Compiladores"
                        ],
                        correct: 3,
                        explanation: "Compiladores não são um tema emergente de IA."
                    },
                    {
                        q: "O que caracteriza o uso de Machine Learning?",
                        options: [
                            "Alta intervenção humana",
                            "Baixa dependência de dados",
                            "Uso de técnicas de indução",
                            "Execução determinística"
                        ],
                        correct: 2,
                        explanation: "ML utiliza indução para aprender padrões a partir dos dados."
                    },
                    {
                        q: "Qual fator é crucial para o sucesso de um projeto de ML?",
                        options: [
                            "Interface gráfica",
                            "Representação adequada do problema",
                            "Velocidade da internet",
                            "Quantidade de código"
                        ],
                        correct: 1,
                        explanation: "A representação do problema é essencial para bons resultados."
                    },
                    {
                        q: "Aprendizado supervisionado requer:",
                        options: [
                            "Dados não rotulados",
                            "Dados rotulados",
                            "Nenhum dado",
                            "Somente regras"
                        ],
                        correct: 1,
                        explanation: "Supervisionado depende de dados com rótulos (labels)."
                    },
                    {
                        q: "Qual abordagem NÃO requer dados rotulados?",
                        options: [
                            "Supervisionada",
                            "Não supervisionada",
                            "Semi-supervisionada",
                            "Classificação"
                        ],
                        correct: 1,
                        explanation: "Aprendizado não supervisionado usa dados sem rótulos."
                    },
                    {
                        q: "Aprendizado por reforço é baseado em:",
                        options: [
                            "Dados rotulados",
                            "Clusters",
                            "Recompensa e penalidade",
                            "Probabilidade condicional"
                        ],
                        correct: 2,
                        explanation: "Reforço aprende via interação com o ambiente usando recompensas."
                    },
                    {
                        q: "Qual é uma tarefa típica de aprendizado supervisionado?",
                        options: [
                            "Agrupamento",
                            "Associação",
                            "Classificação",
                            "Visualização"
                        ],
                        correct: 2,
                        explanation: "Classificação e regressão são tarefas supervisionadas."
                    },
                    {
                        q: "Qual técnica é baseada na similaridade entre instâncias?",
                        options: [
                            "Naive Bayes",
                            "SVM",
                            "KNN",
                            "Árvore de decisão"
                        ],
                        correct: 2,
                        explanation: "KNN usa distância/similaridade entre exemplos."
                    },
                    {
                        q: "Qual técnica utiliza o Teorema de Bayes?",
                        options: [
                            "KNN",
                            "Naive Bayes",
                            "SVM",
                            "Redes neurais"
                        ],
                        correct: 1,
                        explanation: "Naive Bayes é baseado em probabilidades e no Teorema de Bayes."
                    },
                    {
                        q: "SVM busca:",
                        options: [
                            "Clusters",
                            "Probabilidades",
                            "Hiperplano de separação",
                            "Regras IF-THEN"
                        ],
                        correct: 2,
                        explanation: "SVM encontra o hiperplano que maximiza a margem entre classes."
                    },
                    {
                        q: "Qual métrica mede a proporção de acertos?",
                        options: [
                            "Precisão",
                            "Recall",
                            "Acurácia",
                            "F1-score"
                        ],
                        correct: 2,
                        explanation: "Acurácia mede o total de acertos sobre o total de exemplos."
                    },
                    {
                        q: "Recall mede:",
                        options: [
                            "Acertos totais",
                            "Falsos positivos",
                            "Itens relevantes encontrados",
                            "Erro médio"
                        ],
                        correct: 2,
                        explanation: "Recall mede quantos positivos reais foram corretamente identificados."
                    },
                    {
                        q: "Problemas com dados desbalanceados exigem:",
                        options: [
                            "Mais dados",
                            "Uso de acurácia",
                            "Métricas adequadas",
                            "Menos atributos"
                        ],
                        correct: 2,
                        explanation: "Acurácia pode enganar em bases desbalanceadas."
                    },
                    {
                        q: "O objetivo da avaliação em ML é:",
                        options: [
                            "Treinar mais rápido",
                            "Medir generalização",
                            "Reduzir código",
                            "Melhorar hardware"
                        ],
                        correct: 1,
                        explanation: "Avaliação mede a capacidade do modelo generalizar para novos dados."
                    }
                ],
            },
            {
                title: "RA1/Conceitos Básicos de ML",
                id: "q-ml-basics",
                questions: [
                    {
                        q: "O que caracteriza um sistema de Aprendizado de Máquina?",
                        options: [
                            "Executa apenas instruções programadas manualmente",
                            "Aprende padrões a partir de dados",
                            "Não necessita de dados para funcionar",
                            "Substitui completamente a programação tradicional"
                        ],
                        correct: 1,
                        explanation: "Machine Learning baseia-se em aprender padrões a partir de dados, sem programação explícita para cada regra."
                    },
                    {
                        q: "Qual é o principal objetivo de um modelo supervisionado?",
                        options: [
                            "Agrupar dados sem rótulos",
                            "Tomar decisões aleatórias",
                            "Aprender a partir de dados rotulados",
                            "Maximizar o uso de hardware"
                        ],
                        correct: 2,
                        explanation: "Aprendizado supervisionado utiliza dados rotulados para aprender uma função de mapeamento entrada → saída."
                    },
                    {
                        q: "O que são dados de treinamento?",
                        options: [
                            "Dados usados apenas para teste final",
                            "Dados utilizados para ensinar o modelo",
                            "Dados descartados durante o processo",
                            "Dados gerados aleatoriamente pelo sistema"
                        ],
                        correct: 1,
                        explanation: "Os dados de treinamento são usados para ajustar os parâmetros do modelo."
                    },
                    {
                        q: "Qual problema está associado à falta de generalização?",
                        options: [
                            "Underfitting",
                            "Overfitting",
                            "Classificação",
                            "Clusterização"
                        ],
                        correct: 1,
                        explanation: "Overfitting ocorre quando o modelo aprende demais os dados de treino e perde capacidade de generalizar."
                    },
                    {
                        q: "O que significa 'feature' em Machine Learning?",
                        options: [
                            "O algoritmo utilizado",
                            "Um parâmetro fixo do modelo",
                            "Uma característica dos dados de entrada",
                            "Um tipo de erro"
                        ],
                        correct: 2,
                        explanation: "Features são atributos ou variáveis que representam os dados de entrada."
                    },
                    {
                        q: "Qual das opções representa um problema de regressão?",
                        options: [
                            "Classificar e-mails como spam ou não",
                            "Prever o preço de uma casa",
                            "Agrupar clientes por comportamento",
                            "Detectar comunidades em redes sociais"
                        ],
                        correct: 1,
                        explanation: "Regressão envolve prever valores contínuos, como preços."
                    },
                    {
                        q: "Qual é o papel do conjunto de teste?",
                        options: [
                            "Treinar o modelo",
                            "Ajustar hiperparâmetros",
                            "Avaliar o desempenho do modelo",
                            "Gerar novos dados"
                        ],
                        correct: 2,
                        explanation: "O conjunto de teste é usado para avaliar o modelo em dados não vistos."
                    }
              ]
            },
            {
                title: "RA1/Questionario_01",
                id: "q-aprofundado-ml",
                questions: [
                    {
                        q: "Diferencie aprendizagem supervisionada e não-supervisionada.",
                        options: [
                            "Supervisionada usa dados rotulados; não-supervisionada usa dados não rotulados",
                            "Supervisionada não usa rótulos; não-supervisionada usa rótulos",
                            "Ambas exigem dados rotulados",
                            "Ambas não exigem dados rotulados"
                        ],
                        correct: 0,
                        explanation: "Aprendizagem supervisionada trabalha com dados que possuem saída conhecida (rótulo). A não-supervisionada trabalha com dados sem rótulo, buscando estruturas inerentes."
                    },
                    {
                        q: "Quais as principais tarefas do aprendizado supervisionado?",
                        options: [
                            "Agrupamento e associação",
                            "Classificação e regressão",
                            "Redução de dimensionalidade e visualização",
                            "Clusterização e recomendação"
                        ],
                        correct: 1,
                        explanation: "Classificação (saída categórica) e regressão (saída contínua) são as duas principais tarefas da aprendizagem supervisionada."
                    },
                    {
                        q: "Qual a principal tarefa do aprendizado não-supervisionado?",
                        options: [
                            "Classificação",
                            "Regressão",
                            "Agrupamento (clustering)",
                            "Otimização"
                        ],
                        correct: 2,
                        explanation: "O agrupamento (clustering) é a principal tarefa não-supervisionada, buscando formar grupos de dados segundo critérios de similaridade."
                    },
                    {
                        q: "Qual a diferença entre classificação e regressão?",
                        options: [
                            "Classificação prevê valores contínuos; regressão prevê categorias",
                            "Classificação prevê categorias; regressão prevê valores contínuos",
                            "Ambas preveem categorias",
                            "Ambas preveem valores contínuos"
                        ],
                        correct: 1,
                        explanation: "Classificação tem saída discreta (categórica), enquanto regressão tem saída contínua (valor numérico)."
                    },
                    {
                        q: "O que seria um aprendizado por indução?",
                        options: [
                            "Aprender por dedução lógica",
                            "Aprender padrões gerais a partir de exemplos específicos",
                            "Aprender sem exemplos",
                            "Aprender por memorização"
                        ],
                        correct: 1,
                        explanation: "Aprendizado por indução é o processo de generalizar regras ou padrões a partir de exemplos específicos fornecidos."
                    },
                    {
                        q: "Defina Indutor.",
                        options: [
                            "O conjunto de dados usado para treinar",
                            "A técnica ou algoritmo utilizado no aprendizado",
                            "A função alvo a ser aprendida",
                            "A saída do modelo"
                        ],
                        correct: 1,
                        explanation: "Indutor é a técnica ou algoritmo de aprendizado de máquina responsável por gerar o modelo a partir dos dados."
                    },
                    {
                        q: "Qual a relação entre os conceitos de instância, feature (ou atributo), classe e base de dados?",
                        options: [
                            "Instância é o conjunto de todas as bases; feature é a classe",
                            "Uma instância é composta por features; a classe é o rótulo alvo; a base de dados é o conjunto de instâncias",
                            "Feature é sinônimo de instância; classe é a base de dados",
                            "Instância é o mesmo que classe; feature é a base"
                        ],
                        correct: 1,
                        explanation: "Uma instância é um exemplo composto por features (atributos de entrada) e possui uma classe (atributo alvo). A base de dados é o conjunto de todas as instâncias."
                    },
                    {
                        q: "O que seria underfitting e overfitting?",
                        options: [
                            "Underfitting: modelo muito complexo; Overfitting: modelo muito simples",
                            "Underfitting: modelo muito simples (não aprende); Overfitting: modelo muito complexo (decora os dados)",
                            "Ambos são sinônimos de boa generalização",
                            "Underfitting ocorre só em regressão; overfitting só em classificação"
                        ],
                        correct: 1,
                        explanation: "Underfitting: modelo não captura o padrão dos dados (alta viés). Overfitting: modelo decora os dados de treino e não generaliza (alta variância)."
                    },
                    {
                        q: "O que mostra uma matriz de confusão?",
                        options: [
                            "Apenas os acertos do modelo",
                            "Apenas os erros do modelo",
                            "Acertos e erros de um classificador, mostrando VP, VN, FP e FN",
                            "A curva ROC do modelo"
                        ],
                        correct: 2,
                        explanation: "A matriz de confusão exibe Verdadeiros Positivos (VP), Verdadeiros Negativos (VN), Falsos Positivos (FP) e Falsos Negativos (FN)."
                    },
                    {
                        q: "No que consiste os conceitos de bias (viés) e variância no que diz respeito a uma hipótese (ou modelo aprendido)?",
                        options: [
                            "Bias: erro por simplificação excessiva; Variância: sensibilidade a pequenas variações nos dados",
                            "Bias: sensibilidade aos dados; Variância: simplificação excessiva",
                            "Ambos medem a acurácia do modelo",
                            "Bias é bom; variância é ruim sempre"
                        ],
                        correct: 0,
                        explanation: "Bias (viés) é o erro por suposições muito simplistas. Variância é a sensibilidade do modelo a flutuações nos dados de treino."
                    },
                    {
                        q: "O que seria acurácia de um classificador?",
                        options: [
                            "(VP + VN) / (VP + VN + FP + FN)",
                            "VP / (VP + FP)",
                            "VP / (VP + FN)",
                            "(VP + FP) / total"
                        ],
                        correct: 0,
                        explanation: "Acurácia é a proporção de acertos totais: (Verdadeiros Positivos + Verdadeiros Negativos) dividido pelo total de exemplos."
                    },
                    {
                        q: "Quanto à avaliação de uma hipótese (ou modelo criado) diferencie as técnicas de holdout, cross-validation (validação cruzada) e leave-one-out.",
                        options: [
                            "Holdout: divide uma vez; Cross-validation: divide em k folds; Leave-one-out: cada instância é teste uma vez",
                            "Holdout: usa todos os dados para teste; Cross-validation: não usa validação; Leave-one-out: usa apenas um fold",
                            "São três nomes para a mesma técnica",
                            "Holdout é para regressão; Cross-validation para classificação; Leave-one-out para clustering"
                        ],
                        correct: 0,
                        explanation: "Holdout: única divisão treino/teste. Cross-validation (k-fold): divide em k partes, cada uma serve como teste. Leave-one-out: caso especial onde k = N (número de instâncias)."
                    }
                ]
            }
        ]
    },

    {
        category: "Flashcards",
        subitems: [
            {
                title: "RA1/Introdução/Abordagens de machine learning",
                id: "f-ml",
                cards: [
                    { q: "Não supervisionada", a: "Não requer dados rotulados" },
                    { q: "Supervisionada", a: "Requer dados rotulados" },
                    { q: "Semi-supervisionada", a: "Alternativa quando não temos dados rotulados em quantidade suficiente" },
                    { q: "Por reforço", a: "Não precisa de dados de treinamento." }
                ]
            },
            {
                title: "RA1/Introdução/Conceitos e Avaliação em ML",
                id: "f-ml-conceitos",
                cards: [
                    { q: "O que é Inteligência Artificial?", a: "Área da computação que busca simular o raciocínio humano por meio de soluções tecnológicas." },
                    { q: "Quando a IA passou a ser considerada ciência?", a: "Em 1956, no Dartmouth College." },
                    { q: "O que é Machine Learning?", a: "Ramo da IA que aprende padrões a partir de dados com mínima intervenção humana." },
                    { q: "O que são modelos cognitivos?", a: "Modelos que transformam dados em conhecimento." },
                    { q: "O que é necessário para aplicar ML com sucesso?", a: "Boa representação do problema, dados de qualidade, profissionais capacitados e hardware adequado." },
                    { q: "O que são dados rotulados?", a: "Dados que possuem uma saída conhecida (classe ou valor esperado)." },
                    { q: "O que é classificação?", a: "Tarefa de prever categorias ou classes." },
                    { q: "O que é regressão?", a: "Tarefa de prever valores numéricos contínuos." },
                    { q: "O que é agrupamento (clustering)?", a: "Técnica de agrupar dados semelhantes sem rótulos." },
                    { q: "O que é overfitting?", a: "Quando o modelo aprende demais os dados de treino e perde capacidade de generalização." },
                    { q: "O que é generalização?", a: "Capacidade do modelo de performar bem em dados não vistos." },
                    { q: "O que é acurácia?", a: "Proporção de acertos do modelo em relação ao total de exemplos." },
                    { q: "O que é precisão?", a: "Proporção de previsões positivas corretas." },
                    { q: "O que é revocação (recall)?", a: "Proporção de exemplos positivos corretamente identificados." },
                    { q: "O que é F1-score?", a: "Média harmônica entre precisão e revocação." },
                    { q: "O que é matriz de confusão?", a: "Tabela que mostra acertos e erros de um modelo de classificação." },
                    { q: "O que são dados de treino, validação e teste?", a: "Divisões do dataset usadas para treinar, ajustar e avaliar o modelo." },
                    { q: "O que é KNN?", a: "Algoritmo baseado na similaridade entre instâncias." },
                    { q: "O que é Naive Bayes?", a: "Classificador probabilístico baseado no Teorema de Bayes." },
                    { q: "O que é SVM?", a: "Modelo que separa classes usando um hiperplano de máxima margem." },
                    { q: "O que são Redes Neurais?", a: "Modelos inspirados no cérebro que aprendem ajustando pesos entre neurônios." }
              ]
          },
          {
                title: "RA1/Avaliação de Modelos/Validação Cruzada e Holdout",
                id: "f-ml-validacao",
                cards: [
                    { "q": "O que é validação cruzada (cross-validation)?", "a": "Divide a base em N folds (normalmente estratificada). Seleciona um fold para teste e treina com os N-1 restantes. Repete N vezes com cada fold sendo usado como teste." },
                    { "q": "O que significa validação estratificada?", "a": "Manter a distribuição original das classes na base de dados ao dividir os folds." },
                    { "q": "O que é Holdout (percentage split)?", "a": "Dividir a base em treinamento (X%) e teste (Y%) de forma estratificada. Exemplo comum: 60% treino e 40% teste ou 70% treino e 30% teste." },
                    { "q": "Como evitar viés na definição do teste no Holdout?", "a": "Utilizar seleção aleatória de exemplos e replicação (repetir o processo N vezes, calculando a acurácia média)." },
                    { "q": "O que significa 'problema linearmente separável'?", "a": "Problema de classificação onde é possível traçar uma linha reta (ou hiperplano) separando completamente as classes." },
                    { "q": "O que significa 'fronteira não linear'?", "a": "Problema de classificação onde a separação entre classes exige curvas ou superfícies mais complexas." }
                ]
            },
            {
                title: "RA1/Métricas de Avaliação/Classificação",
                id: "f-ml-metricas-classificacao",
                cards: [
                    { "q": "O que é VP (Verdadeiro Positivo)?", "a": "Exemplos positivos corretamente classificados." },
                    { "q": "O que é VN (Verdadeiro Negativo)?", "a": "Exemplos negativos corretamente classificados." },
                    { "q": "O que é FP (Falso Positivo)?", "a": "Exemplos erroneamente classificados como positivos (erro tipo I)." },
                    { "q": "O que é FN (Falso Negativo)?", "a": "Exemplos erroneamente classificados como negativos (erro tipo II)." },
                    { "q": "Qual a fórmula da acurácia (accuracy)?", "a": "(VP + VN) / (VP + VN + FP + FN)" },
                    { "q": "Qual a fórmula da precisão (precision)?", "a": "P = VP / (VP + FP)" },
                    { "q": "Qual a fórmula da revocação (recall)?", "a": "R = VP / (VP + FN)" },
                    { "q": "Qual a fórmula do F1-score (F-measure)?", "a": "2 / (1/P + 1/R) ou média harmônica entre precisão e revocação." },
                    { "q": "Quando devemos usar precisão, revocação e F1-score em vez de acurácia?", "a": "Para problemas desbalanceados (exemplo: diagnóstico de câncer com poucos casos positivos)." },
                    { "q": "O que a precisão tenta responder?", "a": "'Qual a proporção de classificações positivas estão corretas?'" },
                    { "q": "O que a revocação (recall) tenta responder?", "a": "'Qual a proporção das amostras positivas foram classificadas corretamente?'" },
                    { "q": "Um modelo que não produz falso positivo (FP) tem precisão igual a quanto?", "a": "1 (100%)." },
                    { "q": "Um modelo que não produz falso negativo (FN) tem revocação igual a quanto?", "a": "1 (100%)." },
                    { "q": "Como calcular acurácia global em uma matriz de confusão multiclasses?", "a": "Soma da diagonal principal dividida pelo total de exemplos." }
                ]
            },
            {
                title: "RA1/Métricas de Avaliação/Regressão e Agrupamento",
                id: "f-ml-metricas-regressao-clustering",
                cards: [
                    { "q": "O que é coeficiente de correlação (r) em regressão?", "a": "Medida que varia de -1 a 1. -1: forte correlação negativa; 0: sem correlação; 1: forte correlação positiva." },
                    { "q": "O que é coeficiente de determinação (r²) em regressão?", "a": "Varia entre 0 e 1. Indica o quanto o modelo explica os valores observados. Quanto maior, mais explicativo." },
                    { "q": "Quais as principais métricas para avaliar agrupamento (clustering)?", "a": "Variância intra-grupos, variância inter-grupos e medida da silhueta." },
                    { "q": "O que significa silhueta = 1?", "a": "Indica ponto interno ao cluster e longe da borda (fronteira) entre grupos." },
                    { "q": "O que significa silhueta = 0?", "a": "Indica ponto na fronteira entre grupos ou bem próximo dela." },
                    { "q": "O que significa silhueta = -1?", "a": "Indica ponto associado ao cluster errado." }
                ]
            }
        ]
    }
];

let currentItem = null;
let quizIndex = 0;
let score = 0;
let selectedIdx = null;
let answered = false;

// MENU
function renderMenu() {
    const menu = document.getElementById('dynamic-menu');

    menu.innerHTML = DATA.map(group => {
        let html = `<div class="nav-group-title">${group.category}</div>`;

        (group.items || []).forEach(item => {
            html += `<div class="nav-item" onclick="show('${item.id}')">> ${item.title}</div>`;
        });

        (group.subitems || []).forEach(sub => {
            html += `<div class="nav-item nav-sub-item" onclick="show('${sub.id}')">> ${sub.title}</div>`;
        });

        return html;
    }).join('');
}

// ROUTER
function show(id) {
    let found = null;

    DATA.forEach(g => {
        found =
            (g.items || []).find(i => i.id === id) ||
            (g.subitems || []).find(s => s.id === id) ||
            found;
    });

    currentItem = found;

    if (found.template) {
        loadTemplate(found.template);
    } else if (found.questions) {
        startQuiz();
    } else if (found.cards) {
        renderFlashcards(found);
    }
}

// LOAD HTML EXTERNO
function loadTemplate(path) {
    fetch(path)
        .then(res => res.text())
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
        });
}

// QUIZ
// QUIZ
function startQuiz() {
    quizIndex = 0;
    score = 0;
    renderQuizStep();
}

function renderQuizStep() {
    const area = document.getElementById('content-area');
    const q = currentItem.questions[quizIndex];
    selectedIdx = null;
    answered = false;

    const isLastQuestion = quizIndex === currentItem.questions.length - 1;
    const nextButtonText = isLastQuestion ? 'Show_Results()' : 'Next_Step()';

    area.innerHTML = `
        <div class="quiz-header"><span>Questão ${quizIndex + 1}/${currentItem.questions.length}</span></div>
        <h1>${currentItem.title}</h1>
        <div class="card">
            <p style="color:var(--syntax-const); font-family:'Fira Code'; margin-bottom:20px">// ${q.q}</p>
            <div id="quiz-options">${q.options.map((o, i) => `<div class="quiz-option" onclick="selectOpt(this, ${i})">0${i+1}. ${o}</div>`).join('')}</div>
            <div id="feedback" class="feedback-box"></div>
            <div class="quiz-footer" style="display:flex; gap:10px; margin-top:20px;">
                <button class="btn-check" id="check-btn" onclick="handleCheck()">Run_Test()</button>
                <button class="btn-next" id="next-btn" onclick="handleNext()" style="display:none">
                    ${nextButtonText}
                </button>
            </div>
        </div>
    `;
}

function selectOpt(el, idx) {
    if(answered) return;
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    selectedIdx = idx;
}

function handleCheck() {
    if (selectedIdx === null) {
        showAlert("Por favor, selecione uma resposta");
        return;
    }

    if (answered) return;

    answered = true;
    const q = currentItem.questions[quizIndex];
    const f = document.getElementById('feedback');

    f.style.display = 'block';

    // limpa estados anteriores
    f.classList.remove('feedback-success', 'feedback-error');

    if (selectedIdx === q.correct) {
        score++;
        f.classList.add('feedback-success');
        f.innerHTML = "<strong>[PASS]</strong>";
    } else {
        f.classList.add('feedback-error');
        f.innerHTML = `<strong>[FAIL]:</strong> ${q.explanation}`;
    }

    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';
}

function showAlert(message) {
    const alert = document.createElement('div');
    alert.className = 'custom-alert';
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

function handleNext() {
    if (quizIndex < currentItem.questions.length - 1) {
        quizIndex++;
        renderQuizStep();
    } else {
        renderResult();
    }
}

function renderResult() {
    const percent = Math.round((score / currentItem.questions.length) * 100);

    document.getElementById('content-area').innerHTML = `
        <h1>Resultados</h1>

        <div class="card result-card">
            <h2 class="result-score">${percent}%</h2>
            <p>Acertos: ${score}/${currentItem.questions.length}</p>

            <button class="btn-check" onclick="show('${currentItem.id}')">
                Retry
            </button>
        </div>
    `;
}

// FLASHCARDS
function renderFlashcards(item) {
    document.getElementById('content-area').innerHTML = `
        <h1>${item.title}</h1>

        <div class="flashcard-grid">
            ${item.cards.map(c => `
                <div class="flashcard" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">${c.q}</div>
                        <div class="flashcard-back">${c.a}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// INIT
renderMenu();
show('home');