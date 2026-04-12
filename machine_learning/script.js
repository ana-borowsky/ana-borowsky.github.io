const DATA = [
    {
        category: "RA1",
        items: [
            { title: "Home", id: "home", template: "templates/home.html" },
            { title: "Introdução", id: "introducao", template: "templates/introducao.html" }
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
                title: "Machine Learning",
                id: "f-ml",
                cards: [
                    { q: "Gradiente Descendente?", a: "Algoritmo de otimização." }
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
    const q = currentItem.questions[quizIndex];

    document.getElementById('content-area').innerHTML = `
        <h1>${currentItem.title}</h1>

        <div class="card">
            <p>// ${q.q}</p>

            ${q.options.map((o, i) =>
                `<div class="quiz-option" onclick="selectOpt(${i})">${o}</div>`
            ).join('')}

            <button class="btn-check" onclick="handleCheck()">Run_Test()</button>
        </div>
    `;
}

function selectOpt(i) {
    selectedIdx = i;
}

function handleCheck() {
    if (selectedIdx === currentItem.questions[quizIndex].correct) {
        score++;
    }

    quizIndex++;

    if (quizIndex < currentItem.questions.length) {
        renderQuizStep();
    } else {
        renderResult();
    }
}

function renderResult() {
    document.getElementById('content-area').innerHTML = `
        <h1>Resultado</h1>
        <div class="card">
            <p>${score}/${currentItem.questions.length}</p>
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