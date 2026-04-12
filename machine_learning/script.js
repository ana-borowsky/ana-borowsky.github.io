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
                title: "Lógica JS",
                id: "q-logic",
                questions: [
                    {
                        q: "Qual o resultado de !!'false'?",
                        options: ["true", "false", "undefined"],
                        correct: 0,
                        explanation: "String não vazia é truthy."
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