const DATA = [
    {
        category: "RA1",
        items: [
            { title: "Home", id: "home", template: "templates/home.html" },
            { title: "Introdução", id: "introducao", template: "templates/introducao.html" },
            { title: "Conceitos básicos", id: "conceitos-basicos", template: "templates/conceitos_basicos.html" }
        ]
    },
    {
    category: "Quizzes",
    subitems: [
              {
                  title: "Introdução à AM",
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
    title: "Conceitos Básicos de ML",
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
function startQuiz() {
    quizIndex = 0;
    score = 0;
    renderQuizStep();
}

function renderQuizStep() {
    const area = document.getElementById('content-area');
    const q = currentItem.questions[quizIndex];
    selectedIdx = null; answered = false;
    area.innerHTML = `
        <div class="quiz-header"><span>Questão ${quizIndex + 1}/${currentItem.questions.length}</span></div>
        <h1>${currentItem.title}</h1>
        <div class="card">
            <p style="color:var(--syntax-const); font-family:'Fira Code'; margin-bottom:20px">// ${q.q}</p>
            <div id="quiz-options">${q.options.map((o, i) => `<div class="quiz-option" onclick="selectOpt(this, ${i})">0${i+1}. ${o}</div>`).join('')}</div>
            <div id="feedback" class="feedback-box"></div>
            <div class="quiz-footer" style="display:flex; gap:10px; margin-top:20px;">
                <button class="btn-check" id="check-btn" onclick="handleCheck()">Run_Test()</button>
                <button class="btn-nav" id="next-btn" onclick="handleNext()" style="display:none">
                    ${quizIndex === currentItem.questions.length - 1 ? 'Show_Results()' : 'Next_Step()'}
                </button>
            </div>
        </div>
    `;
}

function selectOpt(el, idx) { if(answered) return; document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected')); el.classList.add('selected'); selectedIdx = idx; }

function handleCheck() {
    if (selectedIdx === null || answered) return;

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

function handleNext() { (quizIndex < currentItem.questions.length - 1) ? (quizIndex++, renderQuizStep()) : renderResult(); }

function renderResult() {
    const percent = Math.round((score / currentItem.questions.length) * 100);

    document.getElementById('content-area').innerHTML = `
        <h1>Resultados</h1>

        <div class="card result-card">
            <h2 class="result-score">${percent}%</h2>
            <p>Acertos: ${score}/${currentItem.questions.length}</p>

            <button class="btn-action" onclick="show('${currentItem.id}')">
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