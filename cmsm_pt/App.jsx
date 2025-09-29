import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Target, BrainCircuit, MessageSquareQuote, Trophy, ArrowRight, Home, Zap, Loader, X, ExternalLink, Shuffle } from 'lucide-react';

// --- BANCO DE DADOS DAS QUESTÕES ---
// Banco de questões completo restaurado e atualizado conforme o edital.
const quizData = {
  interpretacao: {
    title: "Gêneros e Interpretação Textual",
    icon: "BookOpen",
    questions: [
      {
        text: "Leia o trecho: 'A tecnologia, que fascina pela sua capacidade de conectar mundos, pode, paradoxalmente, criar abismos entre as pessoas. O diálogo, antes praticado face a face, hoje compete com a urgência das notificações.'\n\nQual a principal ideia defendida pelo autor?",
        options: ["A tecnologia é exclusivamente benéfica para a comunicação.", "O diálogo presencial foi extinto pela tecnologia.", "A tecnologia apresenta um aspecto contraditório em relação à comunicação humana.", "As notificações são mais importantes que conversas diretas."],
        answer: "A tecnologia apresenta um aspecto contraditório em relação à comunicação humana.",
        explanation: "O autor usa o termo 'paradoxalmente' para indicar uma contradição: ao mesmo tempo que a tecnologia conecta, ela também pode afastar, criando 'abismos'."
      },
      {
        text: "Em '...a urgência das notificações.', a palavra 'urgência' (escolha lexical) confere à frase um sentido de:",
        options: ["Tranquilidade e paciência.", "Prioridade e imediatismo.", "Desimportância e adiamento.", "Confusão e desordem."],
        answer: "Prioridade e imediatismo.",
        explanation: "A palavra 'urgência' denota algo que precisa de atenção imediata, que é prioritário em relação a outras atividades, como o diálogo mencionado."
      },
      {
        text: "Leia o poema de Carlos Drummond de Andrade: 'No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho'. A repetição do verso sugere:",
        options: ["Falta de criatividade do poeta.", "A insistência e a força do obstáculo.", "A beleza de uma paisagem rochosa.", "Um erro de digitação na obra."],
        answer: "A insistência e a força do obstáculo.",
        explanation: "A repetição enfática da 'pedra no meio do caminho' simboliza os obstáculos persistentes e marcantes que encontramos na vida."
      },
      {
        text: "Numa propaganda de um analgésico, lê-se: 'Para a sua dor de cabeça, a solução imediata.' A finalidade principal desse texto é:",
        options: ["Informar sobre os componentes do remédio.", "Contar uma história sobre dor de cabeça.", "Convencer o leitor a comprar o produto.", "Criticar a indústria farmacêutica."],
        answer: "Convencer o leitor a comprar o produto.",
        explanation: "Textos publicitários têm como principal objetivo persuadir o consumidor a adquirir um produto ou serviço, apresentando-o como a solução para um problema."
      },
      {
        text: "A expressão 'fake news' é um estrangeirismo que se popularizou. Qual alternativa melhor descreve seu significado?",
        options: ["Notícias antigas que voltam a circular.", "Notícias com erros de ortografia.", "Notícias deliberadamente falsas, criadas para enganar.", "Opiniões pessoais publicadas em blogs."],
        answer: "Notícias deliberadamente falsas, criadas para enganar.",
        explanation: "O termo 'fake news' refere-se a informações falsas criadas e disseminadas com o intuito de enganar, desinformar ou manipular a opinião pública."
      },
      {
        text: "No trecho 'Apesar da chuva torrencial, os torcedores compareceram ao estádio.', a palavra 'Apesar' estabelece uma relação de:",
        options: ["Causa", "Consequência", "Concessão", "Finalidade"],
        answer: "Concessão",
        explanation: "A conjunção 'apesar de' introduz uma ideia de concessão, ou seja, um obstáculo que não foi suficiente para impedir a ação principal (a ida dos torcedores)."
      },
      {
        text: "Uma charge mostra um político com um nariz muito comprido, semelhante ao de Pinóquio. O que o chargista pretende criticar?",
        options: ["A aparência física do político.", "A falta de veracidade ou as mentiras contadas pelo político.", "O gosto do político por contos de fadas.", "A habilidade do político em carpintaria."],
        answer: "A falta de veracidade ou as mentiras contadas pelo político.",
        explanation: "A referência a Pinóquio, cujo nariz crescia quando mentia, é uma forma visual e intertextual de acusar o político de ser mentiroso."
      },
      {
        text: "Em 'Ele era um poço de sabedoria', a palavra 'poço' é utilizada em sentido:",
        options: ["Literal", "Denotativo", "Conotativo", "Técnico"],
        answer: "Conotativo",
        explanation: "O sentido conotativo é o sentido figurado. Ninguém é literalmente um 'poço'; a palavra é usada para expressar a ideia de grande profundidade e abundância de conhecimento."
      },
      {
        text: "A principal diferença entre fato e opinião é que:",
        options: ["O fato é sempre positivo, a opinião é negativa.", "O fato é um acontecimento comprovável, a opinião é um julgamento pessoal.", "O fato é escrito, a opinião é falada.", "O fato é longo, a opinião é curta."],
        answer: "O fato é um acontecimento comprovável, a opinião é um julgamento pessoal.",
        explanation: "Um fato pode ser verificado e provado como verdadeiro ou falso (ex: 'O Brasil tem 26 estados e um DF'). Uma opinião é uma interpretação ou ponto de vista que não pode ser provado (ex: 'O Brasil é o país mais bonito do mundo')."
      },
      {
        text: "Leia o provérbio: 'Água mole em pedra dura, tanto bate até que fura.' Qual é a principal mensagem transmitida?",
        options: ["A água é mais forte que a rocha.", "A persistência pode vencer grandes obstáculos.", "Deve-se evitar o contato com pedras.", "A geologia é um campo de estudo interessante."],
        answer: "A persistência pode vencer grandes obstáculos.",
        explanation: "O provérbio usa uma imagem da natureza para ensinar que a insistência e a constância, mesmo que pareçam fracas (água mole), podem superar as maiores dificuldades (pedra dura)."
      },
      {
        text: "A linguagem predominantemente utilizada em um manual de instruções é:",
        options: ["Poética", "Argumentativa", "Narrativa", "Injuntiva"],
        answer: "Injuntiva",
        explanation: "A linguagem injuntiva (ou instrucional) é aquela que visa orientar, dar ordens ou instruções ao leitor, como em manuais, receitas e regulamentos."
      },
      {
        text: "Em uma receita de bolo, os verbos geralmente aparecem no modo:",
        options: ["Indicativo", "Subjuntivo", "Imperativo", "Infinitivo"],
        answer: "Imperativo",
        explanation: "O modo imperativo é usado para dar ordens, conselhos ou instruções. Em receitas, ele aparece constantemente: 'misture', 'bata', 'asse'."
      },
      {
        text: "Qual das seguintes características NÃO pertence a um texto dissertativo-argumentativo?",
        options: ["Defesa de uma tese.", "Uso de argumentos para convencer.", "Presença de um narrador-personagem.", "Estrutura com introdução, desenvolvimento e conclusão."],
        answer: "Presença de um narrador-personagem.",
        explanation: "O narrador-personagem é uma característica de textos narrativos (contos, romances, crônicas). A dissertação foca na defesa de ideias de forma impessoal ou em primeira pessoa do plural."
      },
      {
        text: "A ironia, como recurso de estilo, consiste em:",
        options: ["Exagerar uma ideia para dar ênfase.", "Dizer o contrário do que se pensa, geralmente com intenção crítica.", "Suavizar uma expressão ou ideia desagradável.", "Comparar dois elementos de forma explícita."],
        answer: "Dizer o contrário do que se pensa, geralmente com intenção crítica.",
        explanation: "A ironia é uma forma de expressar crítica ou sarcasmo ao afirmar o oposto do que se quer dizer. Ex: 'Que pessoa educada!', dito sobre alguém que foi grosseiro."
      },
      {
        text: "No trecho 'O futuro é uma astronave que tentamos pilotar', o autor utiliza uma:",
        options: ["Comparação", "Metonímia", "Metáfora", "Hipérbole"],
        answer: "Metáfora",
        explanation: "O futuro é comparado a uma astronave de forma implícita, sem conectivos como 'tal qual' ou 'como', criando uma imagem poética sobre o controle (ou a falta dele) que temos sobre o porvir."
      },
       {
        text: "Em 'O sol beijava a pele da moça na praia', qual recurso expressivo foi utilizado?",
        options: ["Eufemismo", "Antítese", "Prosopopeia", "Gradação"],
        answer: "Prosopopeia",
        explanation: "Prosopopeia (ou personificação) é a atribuição de ações ou sentimentos humanos a seres inanimados. O sol não pode 'beijar', essa é uma ação humana."
      },
      {
        text: "Qual a função da linguagem predominante em um noticiário de TV?",
        options: ["Emotiva", "Poética", "Referencial", "Fática"],
        answer: "Referencial",
        explanation: "A função referencial (ou denotativa) tem como foco principal informar o receptor sobre um determinado assunto de forma objetiva, o que é a principal característica do jornalismo."
      },
      {
        text: "A expressão 'morrer de rir' constitui um exemplo de:",
        options: ["Hipérbole", "Ironia", "Eufemismo", "Metonímia"],
        answer: "Hipérbole",
        explanation: "Hipérbole é a figura do exagero intencional para dar mais expressividade à ideia. Ninguém literalmente morre de rir."
      },
      {
        text: "No contexto de uma fábula, o que são as personagens geralmente?",
        options: ["Figuras históricas", "Seres mitológicos", "Animais com características humanas", "Cientistas famosos"],
        answer: "Animais com características humanas",
        explanation: "As fábulas são narrativas curtas que tradicionalmente utilizam animais que falam e agem como humanos para transmitir uma lição de moral."
      },
      {
        text: "Identifique a tese no seguinte trecho: 'A prática regular de exercícios físicos é fundamental para a manutenção da saúde, pois fortalece o sistema cardiovascular e libera endorfinas, que promovem o bem-estar.'",
        options: ["Exercícios fortalecem o coração.", "Endorfinas promovem o bem-estar.", "A prática de exercícios é fundamental para a saúde.", "A saúde precisa de manutenção."],
        answer: "A prática de exercícios é fundamental para a saúde.",
        explanation: "A tese é a ideia principal, a afirmação central que será defendida. As outras opções são os argumentos que sustentam essa tese."
      },
      {
        text: "A linguagem coloquial é aquela usada em:",
        options: ["Documentos oficiais e jurídicos.", "Situações formais e acadêmicas.", "Conversas informais do dia a dia.", "Obras literárias clássicas."],
        answer: "Conversas informais do dia a dia.",
        explanation: "A linguagem coloquial é a variedade linguística espontânea e informal, utilizada em situações cotidianas entre amigos, familiares, etc."
      },
      {
        text: "Qual o efeito de sentido do uso de reticências (...) no final de uma frase?",
        options: ["Indicar certeza absoluta.", "Sugerir uma interrupção do pensamento ou deixar uma ideia em aberto.", "Marcar o final de uma pergunta.", "Substituir o ponto final obrigatoriamente."],
        answer: "Sugerir uma interrupção do pensamento ou deixar uma ideia em aberto.",
        explanation: "As reticências indicam que a frase foi interrompida, que há uma hesitação, ou que o sentido pode ser completado pela imaginação do leitor."
      },
      {
        text: "A palavra 'embora' (ex: 'Embora estivesse cansado, continuou a trabalhar.') introduz uma oração com ideia de:",
        options: ["Explicação", "Condição", "Concessão", "Comparação"],
        answer: "Concessão",
        explanation: "'Embora' é uma conjunção concessiva, que introduz um fato que poderia impedir a ação principal, mas não impede."
      },
      {
        text: "O que é intertextualidade?",
        options: ["Escrever um texto muito longo.", "A relação de um texto com a sua capa.", "O diálogo ou referência entre dois ou mais textos.", "A tradução de um texto para outra língua."],
        answer: "O diálogo ou referência entre dois ou mais textos.",
        explanation: "A intertextualidade ocorre quando um texto faz referência explícita ou implícita a outro, seja por citação, paródia, alusão, etc."
      },
      {
        text: "Num texto de divulgação científica, qual tipo de linguagem é esperado?",
        options: ["Subjetiva e emotiva.", "Objetiva e clara, com termos técnicos.", "Ambígua e poética.", "Extremamente informal e com gírias."],
        answer: "Objetiva e clara, com termos técnicos.",
        explanation: "Textos de divulgação científica visam informar um público amplo sobre ciência, usando uma linguagem clara e objetiva, mas que pode conter termos técnicos explicados."
      },
      {
        text: "A palavra 'gostosura' em 'Que gostosura de bolo!' é um exemplo de:",
        options: ["Linguagem formal", "Arcaísmo", "Neologismo", "Linguagem afetiva"],
        answer: "Linguagem afetiva",
        explanation: "O uso do sufixo '-ura' de forma exclamativa em um contexto informal expressa afeto e uma avaliação pessoal positiva, caracterizando uma linguagem afetiva."
      },
      {
        text: "Quando um personagem em uma história conta os acontecimentos que viveu, temos um narrador:",
        options: ["Onisciente", "Observador", "Personagem", "Intruso"],
        answer: "Personagem",
        explanation: "O narrador-personagem é aquele que participa da história que está contando, geralmente usando a primeira pessoa ('eu')."
      },
      {
        text: "Qual a diferença fundamental entre uma biografia e uma autobiografia?",
        options: ["A biografia é sempre mais longa.", "A biografia fala de uma pessoa famosa, a autobiografia não.", "A biografia é escrita por outra pessoa, a autobiografia pela própria pessoa.", "Não há diferença."],
        answer: "A biografia é escrita por outra pessoa, a autobiografia pela própria pessoa.",
        explanation: "O prefixo 'auto-' significa 'de si mesmo'. Portanto, a autobiografia é o relato que alguém escreve sobre sua própria vida."
      },
      {
        text: "A sigla 'ONG' significa:",
        options: ["Organização Nacional Governamental", "Ordem Natural da Geografia", "Organização Não Governamental", "Oficina de Novos Gêneros"],
        answer: "Organização Não Governamental",
        explanation: "ONG é a sigla para Organização Não Governamental, que são entidades da sociedade civil sem fins lucrativos que atuam em diversas causas sociais."
      },
    ]
  },
  concordancia: {
    title: "Concordância Verbal e Nominal",
    icon: "CheckCircle",
    questions: [
      {
        text: "Assinale a alternativa que preenche corretamente as lacunas da frase: '_________ anos que não nos vemos, mas ainda guardo _________ as cartas que você me enviou.'",
        options: ["Faz / anexo", "Fazem / anexas", "Faz / anexas", "Fazem / anexo"],
        answer: "Faz / anexas",
        explanation: "O verbo 'Fazer' indicando tempo decorrido é impessoal, ficando na 3ª pessoa do singular ('Faz'). A palavra 'anexas' é um adjetivo e deve concordar com o substantivo 'cartas' (feminino, plural)."
      },
      {
        text: "Qual frase apresenta ERRO de concordância verbal?",
        options: ["Houve muitos problemas na organização do evento.", "A maioria dos alunos chegou atrasada.", "Vende-se casas neste bairro.", "Os Estados Unidos são uma potência mundial."],
        answer: "Vende-se casas neste bairro.",
        explanation: "O correto é 'Vendem-se casas neste bairro'. O 'se' é uma partícula apassivadora, e o sujeito ('casas') está no plural, logo, o verbo deve concordar com ele."
      },
      {
        text: "A concordância está correta em:",
        options: ["Aluga-se apartamentos.", "Necessita-se de funcionários.", "Conserta-se sapatos.", "Reformam-se móvel."],
        answer: "Necessita-se de funcionários.",
        explanation: "Quando o 'se' é índice de indeterminação do sujeito (acompanha verbo que pede preposição, como 'necessitar de'), o verbo fica na 3ª pessoa do singular."
      },
      {
        text: "Escolha a opção que completa a frase corretamente: 'Mais de um atleta _________ a competição.'",
        options: ["venceu", "venceram", "vencem", "vencerão"],
        answer: "venceu",
        explanation: "Com a expressão 'mais de um', o verbo geralmente concorda com o numeral 'um', ficando no singular. A exceção é se a expressão indicar reciprocidade."
      },
      {
        text: "Indique a frase INCORRETA quanto à concordância nominal:",
        options: ["Achei a camisa e o calção rasgado.", "É necessária paciência para aprender.", "A porta está meio aberta.", "Compramos bastantes livros."],
        answer: "Achei a camisa e o calção rasgado.",
        explanation: "Quando um adjetivo se refere a dois substantivos de gêneros diferentes, ele deve ir para o masculino plural ('rasgados') ou concordar com o mais próximo ('rasgada' ou 'rasgado')."
      },
      {
        text: "Complete a frase: 'É _________ entrada de pessoas estranhas.'",
        options: ["proibido", "proibida", "proibidos", "proibidas"],
        answer: "proibido",
        explanation: "As expressões 'É proibido', 'É bom', 'É necessário' ficam invariáveis (no masculino singular) se o sujeito não vier determinado por artigo ou outro determinante."
      },
      {
        text: "A mesma regra da questão anterior se aplica a: 'Para quem estuda, ________ é bom.'",
        options: ["leitura", "a leitura", "leituras", "as leituras"],
        answer: "leitura",
        explanation: "Se o sujeito não tem determinante, a expressão fica invariável ('leitura é bom'). Se tivesse determinante, concordaria: 'A leitura é boa'."
      },
      {
        text: "A concordância verbal está correta em:",
        options: ["Fui eu que resolveu o problema.", "Somos nós quem pagaremos a conta.", "Foi eu quem resolvi o problema.", "Fomos nós que pagamos a conta."],
        answer: "Fomos nós que pagamos a conta.",
        explanation: "Com o pronome relativo 'que', o verbo concorda com o antecedente ('nós pagamos'). Com 'quem', o verbo pode concordar com o antecedente ou ficar na 3ª pessoa do singular."
      },
      {
        text: "Assinale a frase com erro de concordância:",
        options: ["Devem existir outras soluções.", "Faz cinco anos que me formei.", "Tinham muitas pessoas na festa.", "Havia muitos ingressos à venda."],
        answer: "Tinham muitas pessoas na festa.",
        explanation: "O verbo 'ter' no sentido de 'existir' ou 'ocorrer' é impessoal e deve ficar na 3ª pessoa do singular. O correto é: 'Tinha muitas pessoas...'."
      },
      {
        text: "Complete: 'Ela mesmo ou ela _________ fará o discurso?'",
        options: ["mesmo", "mesma", "mesmos", "mesmas"],
        answer: "mesma",
        explanation: "A palavra 'mesmo' quando tem o sentido de 'próprio' é um adjetivo e deve concordar em gênero e número com o substantivo ou pronome a que se refere ('ela mesma')."
      },
      {
        text: "A frase 'Haja vista os problemas, a reunião foi cancelada' está:",
        options: ["Correta.", "Incorreta, o certo é 'Hajam vista'.", "Incorreta, o certo é 'Haja visto'.", "Incorreta, o certo é 'Hajam vistos'."],
        answer: "Correta.",
        explanation: "A expressão 'haja vista' é invariável. Pode-se também usar 'hajam visto os problemas', mas a forma mais comum e consagrada é 'haja vista'."
      },
      {
        text: "Qual a concordância correta para 'anexo' na frase 'Seguem ________ as fotos solicitadas.'?",
        options: ["anexo", "anexa", "anexos", "anexas"],
        answer: "anexas",
        explanation: "O adjetivo 'anexo' concorda com o substantivo a que se refere ('fotos'). Portanto, feminino e plural: 'anexas'."
      },
      {
        text: "E se a frase fosse 'As fotos seguem em ________.'?",
        options: ["anexo", "anexa", "anexos", "anexas"],
        answer: "anexo",
        explanation: "A expressão 'em anexo' é uma locução adverbial e, portanto, invariável."
      },
      {
        text: "A concordância com o sujeito composto 'Pai e filho _________ para a viagem.' está correta com:",
        options: ["partiu", "partiram", "parte", "partem"],
        answer: "partiram",
        explanation: "Quando o sujeito é composto e vem antes do verbo, o verbo vai para o plural."
      },
      {
        text: "'Faltava um minuto para o meio-dia e ________.'",
        options: ["meio", "meia", "meios", "meias"],
        answer: "meia",
        explanation: "A expressão completa é 'meio-dia e meia hora'. A palavra 'meia' é um numeral fracionário que concorda em gênero com a palavra subentendida 'hora' (feminino). Portanto, o correto é 'meio-dia e meia'."
      },
      {
        text: "A frase correta é:",
        options: ["Ela ficou meio preocupada.", "Ela ficou meia preocupada.", "Ela ficou meios preocupada.", "Ela ficou meias preocupada."],
        answer: "Ela ficou meio preocupada.",
        explanation: "Quando 'meio' tem o sentido de 'um pouco', é um advérbio e, portanto, invariável."
      },
      {
        text: "Qual frase está correta?",
        options: ["Os sertões imortalizou Euclides da Cunha.", "Os sertões imortalizaram Euclides da Cunha.", "As Minas Gerais produz muito café.", "Campinas fica em São Paulo."],
        answer: "Os sertões imortalizaram Euclides da Cunha.",
        explanation: "Nomes próprios de lugar que são plurais exigem o verbo no plural se vierem acompanhados de artigo. 'Os Sertões' (título de livro com artigo) leva o verbo ao plural."
      },
      {
        text: "'Cerca de cem pessoas ________ na manifestação.'",
        options: ["morreu", "morreram", "morre", "morria"],
        answer: "morreram",
        explanation: "Com expressões partitivas como 'cerca de', 'a maioria de', o verbo concorda com o substantivo partitivo ('pessoas'), que está no plural."
      },
      {
        text: "A palavra 'bastante' está usada de forma INCORRETA em:",
        options: ["Eles comeram bastante.", "Havia bastantes motivos para a briga.", "Elas pareciam bastantes felizes.", "Compramos bastantes doces."],
        answer: "Elas pareciam bastantes felizes.",
        explanation: "Quando 'bastante' modifica um adjetivo ('felizes'), ele é um advérbio (equivale a 'muito') e fica invariável. O correto é 'bastante felizes'."
      },
      {
        text: "'Um e outro amigo ________ presentes.'",
        options: ["estava", "estavam", "esteve", "estiveram"],
        answer: "estavam",
        explanation: "Apesar de haver preferência pelo singular em alguns contextos, o uso do plural com a expressão 'um e outro' é perfeitamente aceito e comum, especialmente se a ideia de conjunto for forte."
      },
      {
        text: "'Talheres, pratos, copos, tudo ________ quebrado.'",
        options: ["estava", "estavam", "estivera", "estiveram"],
        answer: "estava",
        explanation: "Quando uma enumeração é resumida por um pronome como 'tudo', 'nada', 'ninguém', o verbo concorda com esse pronome resumidor (no singular)."
      },
      {
        text: "'O povo ________ seus governantes.'",
        options: ["elegeu", "elegeram", "elegem", "elegiam"],
        answer: "elegeu",
        explanation: "A palavra 'povo', embora indique um coletivo, é um substantivo singular, exigindo o verbo no singular."
      },
      {
        text: "A concordância está correta em:",
        options: ["Deu três horas no relógio da sala.", "Soaram meio-dia no sino da igreja.", "Bateu uma hora quando cheguei.", "Faltava poucos minutos para o fim."],
        answer: "Bateu uma hora quando cheguei.",
        explanation: "Com os verbos 'dar', 'bater' e 'soar' indicando horas, o sujeito é o número de horas. Portanto, o verbo concorda com o numeral ('Uma hora bateu', 'Três horas deram')."
      },
      {
        text: "A frase 'Vossa Excelência ________ seu discurso.' deve ser completada com:",
        options: ["preparou", "preparastes", "preparaste", "preparamos"],
        answer: "preparou",
        explanation: "Pronomes de tratamento como 'Vossa Excelência' exigem o verbo na 3ª pessoa (singular ou plural, conforme o caso), assim como os pronomes possessivos ('seu', 'sua')."
      },
      {
        text: "'Água de melão é ________ para a saúde.'",
        options: ["bom", "boa", "bons", "boas"],
        answer: "bom",
        explanation: "Assim como em 'É proibido', a expressão 'É bom' fica invariável se o sujeito ('Água de melão') não estiver determinado por artigo."
      },
      {
        text: "Assinale a opção com erro:",
        options: ["Comida, diversão e arte compõem o show.", "Paciência e calma é necessário.", "Nem um nem outro candidato compareceu.", "Aconteceu fatos estranhos aqui."],
        answer: "Aconteceu fatos estranhos aqui.",
        explanation: "O sujeito da oração é 'fatos estranhos' (plural). O verbo 'acontecer' deve concordar com o sujeito. Correto: 'Aconteceram fatos estranhos aqui'."
      },
      {
        text: "'Menas' é uma palavra que:",
        options: ["Não existe na língua portuguesa.", "É a forma feminina de 'menos'.", "Deve ser usada antes de substantivos femininos.", "É uma gíria moderna."],
        answer: "Não existe na língua portuguesa.",
        explanation: "A palavra 'menos' é um advérbio e, portanto, invariável. A forma 'menas' é um erro gramatical comum, mas não faz parte da norma culta."
      },
      {
        text: "Qual das frases está gramaticalmente correta?",
        options: ["Eu e tu iremos ao cinema.", "Eu e ele irá ao cinema.", "Mim e tu iremos ao cinema.", "Eu e você irá ao cinema."],
        answer: "Eu e tu iremos ao cinema.",
        explanation: "Quando o sujeito composto inclui 'eu', o verbo vai para a 1ª pessoa do plural ('nós'). 'Mim' não pode ser sujeito. 'Eu e você' pede o verbo na 3ª do plural (irão) ou 1ª do plural (iremos), dependendo da formalidade."
      },
    ]
  },
  regencia: {
    title: "Regência e Crase",
    icon: "Target",
    questions: [
      {
        text: "Assinale a opção em que a regência do verbo 'assistir' está INCORRETA, considerando a norma-padrão.",
        options: ["O médico assistiu o paciente com dedicação.", "Eu assisti ao jogo no estádio.", "Este é um direito que assiste a todos os cidadãos.", "Nós assistimos o filme que você recomendou."],
        answer: "Nós assistimos o filme que você recomendou.",
        explanation: "No sentido de 'ver' ou 'presenciar', o verbo 'assistir' é transitivo indireto e exige a preposição 'a'. O correto seria: 'Nós assistimos AO filme que você recomendou'."
      },
      {
        text: "A frase 'Prefiro mais Português do que Matemática' apresenta um desvio da norma culta em relação à regência. Qual a forma correta?",
        options: ["Prefiro Português a Matemática.", "Prefiro Português do que Matemática.", "Prefiro muito mais Português que Matemática.", "A frase original está correta."],
        answer: "Prefiro Português a Matemática.",
        explanation: "O verbo 'preferir' é transitivo direto e indireto. A estrutura correta é 'preferir uma coisa A outra', sem o uso de 'mais' ou 'do que'."
      },
      {
        text: "A regência do verbo 'implicar' está correta em:",
        options: ["Sua atitude implicará em demissão.", "Ser aprovado implica em muito estudo.", "A desobediência implicará sérias consequências.", "Isso implica com a necessidade de mais verbas."],
        answer: "A desobediência implicará sérias consequências.",
        explanation: "No sentido de 'acarretar', 'ter como consequência', o verbo 'implicar' é transitivo direto, não exigindo a preposição 'em'."
      },
      {
        text: "Complete a frase: 'Eu me esqueci ________ nome dele.'",
        options: ["o", "do", "no", "pelo"],
        answer: "do",
        explanation: "Os verbos 'esquecer' e 'lembrar', quando pronominais ('esquecer-se', 'lembrar-se'), exigem a preposição 'de'. Se não forem pronominais, são transitivos diretos ('Eu esqueci o nome dele')."
      },
      {
        text: "Assinale a alternativa com a regência correta:",
        options: ["Obdeça o regulamento.", "Todos obedeceram ao sinal.", "Eu obedeço meus pais.", "Devemos obedecer as leis."],
        answer: "Todos obedeceram ao sinal.",
        explanation: "O verbo 'obedecer' (e seu antônimo 'desobedecer') é transitivo indireto e rege a preposição 'a'."
      },
      {
        text: "O verbo 'visar' está com a regência INCORRETA em:",
        options: ["O atirador visou o alvo com precisão.", "Ele visava a uma posição de destaque na empresa.", "O passaporte foi visado pelo cônsul.", "Ele visa uma vida melhor."],
        answer: "Ele visa uma vida melhor.",
        explanation: "No sentido de 'almejar', 'desejar', o verbo 'visar' é transitivo indireto com a preposição 'a'. O correto seria 'Ele visa A uma vida melhor'."
      },
      {
        text: "Complete: 'Aquele filme, eu já assisti ________ ele cinco vezes.'",
        options: ["a", "-", "em", "com"],
        answer: "a",
        explanation: "No sentido de 'ver', 'assistir' exige a preposição 'a'. O pronome oblíquo correto seria 'a ele'."
      },
      {
        text: "'Aspiramos ________ ar puro da montanha.' e 'Aspiramos ________ vaga na universidade.' As lacunas são preenchidas, respectivamente, por:",
        options: ["o / à", "ao / o", "o / ao", "ao / ao"],
        answer: "o / à",
        explanation: "No sentido de 'respirar', 'aspirar' é transitivo direto ('aspirar o ar'). No sentido de 'almejar', é transitivo indireto com preposição 'a'. Como 'vaga' é um substantivo feminino que admite artigo, ocorre a crase: 'aspirar à vaga' (a + a vaga)."
      },
      {
        text: "A regência nominal está INCORRETA em:",
        options: ["Ele é perito de crimes digitais.", "Tenho aversão por mentiras.", "Estou ansioso para vê-la.", "Sua atitude é compatível com seus ideais."],
        answer: "Ele é perito de crimes digitais.",
        explanation: "A regência correta para o nome 'perito' é com a preposição 'em'. Correto: 'Ele é perito em crimes digitais'."
      },
      {
        text: "Marque a frase em que o uso da crase está INCORRETO:",
        options: ["Refiro-me àquela aluna.", "Fomos à França no ano passado.", "Ele escreve à lápis.", "A reunião será às 15h."],
        answer: "Ele escreve à lápis.",
        explanation: "Não se usa crase antes de palavras masculinas como 'lápis', a menos que a expressão 'à moda de' esteja subentendida, o que não é o caso."
      },
      {
        text: "'Chegamos ________ São Paulo para a conferência.' Complete a lacuna:",
        options: ["a", "em", "na", "à"],
        answer: "a",
        explanation: "Verbos de movimento como 'chegar' e 'ir' pedem a preposição 'a' para indicar destino ('Vou a algum lugar'). O uso de 'em' ('Cheguei em São Paulo') é muito comum na linguagem coloquial, mas a norma culta prefere 'a'."
      },
      {
        text: "A regência do verbo 'pagar' está correta em:",
        options: ["Paguei o médico.", "Paguei ao médico.", "Paguei a conta.", "Todas estão corretas."],
        answer: "Todas estão corretas.",
        explanation: "O verbo 'pagar' (e 'perdoar') tem dupla regência. É transitivo direto para 'coisa' ('pagar a conta') e transitivo indireto para 'pessoa' ('pagar ao médico'). A forma 'pagar o médico', embora comum, é evitada na norma culta mais estrita, mas o conjunto das opções leva a 'todas' como a mais plausível, considerando a aceitação gradual de certos usos."
      },
      {
        text: "Qual frase está de acordo com a norma-padrão?",
        options: ["Eu lhe vi ontem na rua.", "Eu o vi ontem na rua.", "Eu vi ele ontem na rua.", "Vi-lhe ontem na rua."],
        answer: "Eu o vi ontem na rua.",
        explanation: "O verbo 'ver' é transitivo direto (VTD). O pronome oblíquo correspondente à 3ª pessoa (ele/ela) para a função de objeto direto é 'o' ou 'a'. O pronome 'lhe' é usado para objeto indireto. A forma 'Eu vi ele' é comum na linguagem coloquial, mas inadequada na norma-padrão para essa função."
      },
      {
        text: "Complete: 'A informação ________ que me referi está no relatório.'",
        options: ["a", "à", "de", "que"],
        answer: "a",
        explanation: "Quem se refere, refere-se A algo. A preposição 'a' é exigida pela regência do verbo 'referir'. A frase completa seria 'A informação a que me referi...'"
      },
      {
        text: "Regência nominal INCORRETA:",
        options: ["Ele tem horror de baratas.", "Sou grato por sua ajuda.", "Este livro é preferível a aquele.", "Sua proposta é passível a críticas."],
        answer: "Sua proposta é passível a críticas.",
        explanation: "O nome 'passível' rege a preposição 'de'. Correto: 'passível de críticas'."
      },
      {
        text: "Assinale a frase com erro de regência verbal:",
        options: ["Lembrei o nome do filme.", "Lembrei-me do nome do filme.", "Esqueci-me o compromisso.", "Esqueci o compromisso."],
        answer: "Esqueci-me o compromisso.",
        explanation: "O verbo 'esquecer', quando pronominal ('esquecer-se'), exige a preposição 'de'. O correto seria 'Esqueci-me do compromisso'."
      },
      {
        text: "A regência do verbo 'namorar' na norma culta é:",
        options: ["Transitivo direto (namorar alguém).", "Transitivo indireto com 'a' (namorar a alguém).", "Transitivo indireto com 'com' (namorar com alguém).", "Intransitivo."],
        answer: "Transitivo direto (namorar alguém).",
        explanation: "Embora o uso de 'namorar com' seja extremamente comum na fala, a norma gramatical considera o verbo 'namorar' como transitivo direto: 'João namora Maria'."
      },
      {
        text: "'Ele reside ________ rua das Flores.' A preposição correta é:",
        options: ["na", "à", "em a", "a"],
        answer: "na",
        explanation: "O verbo 'residir', assim como 'morar', rege a preposição 'em'. A contração de 'em + a' resulta em 'na'."
      },
      {
        text: "Qual o erro na frase 'O filme que gostei já saiu de cartaz'?",
        options: ["Concordância", "Pontuação", "Regência", "Não há erro."],
        answer: "Regência",
        explanation: "Quem gosta, gosta DE algo. O verbo 'gostar' rege a preposição 'de'. Correto: 'O filme DE que gostei...'"
      },
      {
        text: "Complete: 'A peça ________ assistimos foi ótima.'",
        options: ["que", "a que", "de que", "na qual"],
        answer: "a que",
        explanation: "Verbo 'assistir' no sentido de 'ver' rege a preposição 'a'. Portanto, 'assistimos A quê? À peça'. O pronome relativo precisa ser antecedido pela preposição: 'a que'."
      },
      {
        text: "A regência está correta em:",
        options: ["Ele custou para aceitar a verdade.", "A verdade custou a ele.", "Custou-me entender a matéria.", "Eu custei a acreditar."],
        answer: "Custou-me entender a matéria.",
        explanation: "O verbo 'custar' no sentido de 'ser difícil' tem como sujeito a coisa que é difícil ('entender a matéria') e como objeto indireto quem sente a dificuldade ('me'). As outras formas são populares, mas fora da norma culta."
      },
      {
        text: "Qual frase está correta?",
        options: ["O cargo que aspiro é de gerente.", "Aspiro o cargo de gerente.", "Aspiro ao cargo de gerente.", "Aspiro no cargo de gerente."],
        answer: "Aspiro ao cargo de gerente.",
        explanation: "No sentido de 'almejar', 'desejar', o verbo 'aspirar' é transitivo indireto e exige a preposição 'a'."
      },
      {
        text: "Assinale a frase com erro de crase:",
        options: ["Entreguei o relatório à diretora.", "Ele chegou à noite.", "Fomos à uma bela cidade.", "Vou à Bahia nas férias."],
        answer: "Fomos à uma bela cidade.",
        explanation: "O erro está em 'Fomos à uma bela cidade.', pois não se usa crase antes de artigos indefinidos ('um', 'uma'). As outras opções estão corretas."
      },
      {
        text: "A regência nominal está correta em:",
        options: ["Ele é bacharel em direito.", "Tenho muito amor para com meus filhos.", "Ele mostrou devoção à família.", "Todas as anteriores."],
        answer: "Todas as anteriores.",
        explanation: "Todas as regências nominais estão corretas: 'bacharel em', 'amor para com' e 'devoção a'. As três opções demonstram o uso correto das preposições exigidas pelos nomes."
      },
      {
        text: "'Ele simpatiza ________ as ideias do grupo.'",
        options: ["com", "de", "a", "por"],
        answer: "com",
        explanation: "O verbo 'simpatizar' (e 'antipatizar') é transitivo indireto e rege a preposição 'com'."
      },
      {
        text: "A regência do verbo 'proceder' está INCORRETA em:",
        options: ["O juiz procedeu ao julgamento.", "As informações não procedem.", "Procedemos de uma família humilde.", "A polícia procedeu a investigação."],
        answer: "A polícia procedeu a investigação.",
        explanation: "No sentido de 'dar início a', 'realizar', o verbo 'proceder' rege a preposição 'a'. O correto seria 'procedeu à investigação'. 'Não procedem' (não têm fundamento) e 'procedemos de' (origem) estão corretos."
      },
      {
        text: "Qual o uso correto da crase?",
        options: ["Fui a Portugal.", "Fui à Portugal dos meus avós.", "Ele se referiu à ela.", "Começou a chover."],
        answer: "Fui à Portugal dos meus avós.",
        explanation: "Normalmente não há crase antes de 'Portugal' ('Vou a Portugal, volto de Portugal'). Contudo, quando o nome do lugar é especificado, o uso do artigo 'a' se torna obrigatório, permitindo a crase."
      },
      {
        text: "Complete: 'O respeito ________ é fundamental.'",
        options: ["ao próximo", "o próximo", "pelo próximo", "A e C estão corretas"],
        answer: "A e C estão corretas",
        explanation: "O nome 'respeito' pode reger tanto a preposição 'a' quanto a preposição 'por'. Ambas as formas, 'respeito ao próximo' e 'respeito pelo próximo', estão corretas."
      },
    ]
  },
  figuras_linguagem: {
    title: "Efeitos de Estilo (Figuras/Léxico)",
    icon: "MessageSquareQuote",
    questions: [
      {
        text: "Na frase 'Os sinos da igreja chamavam as almas para a missa', qual figura de linguagem está presente?",
        options: ["Metáfora", "Hipérbole", "Personificação (ou Prosopopeia)", "Eufemismo"],
        answer: "Personificação (ou Prosopopeia)",
        explanation: "Personificação é a atribuição de características ou ações humanas a seres inanimados ou irracionais. Sinos não podem 'chamar', essa é uma ação humana."
      },
      {
        text: "Identifique a figura de linguagem na expressão: 'Ele é um leão na defesa de seus ideais.'",
        options: ["Comparação", "Metáfora", "Metonímia", "Ironia"],
        answer: "Metáfora",
        explanation: "É uma metáfora, pois há uma comparação implícita (sem o conectivo 'como') entre a força/bravura da pessoa e a de um leão."
      },
      {
        text: "Na frase 'Chorei rios de lágrimas', encontramos uma:",
        options: ["Metáfora", "Hipérbole", "Antítese", "Comparação"],
        answer: "Hipérbole",
        explanation: "A hipérbole é a figura do exagero intencional para dar ênfase a uma ideia. Ninguém chora literalmente 'rios'."
      },
      {
        text: "'Ele partiu desta para melhor' é um exemplo de:",
        options: ["Ironia", "Eufemismo", "Disfemismo", "Paradoxo"],
        answer: "Eufemismo",
        explanation: "O eufemismo é utilizado para suavizar uma notícia ou expressão desagradável. 'Partiu desta para melhor' é uma forma branda de dizer 'morreu'."
      },
      {
        text: "'Li Machado de Assis a tarde toda.' Nesta frase, ocorre uma:",
        options: ["Metáfora", "Personificação", "Metonímia", "Sinestesia"],
        answer: "Metonímia",
        explanation: "Metonímia é a substituição de um termo por outro com o qual tem uma relação de proximidade. Aqui, troca-se a obra pelo autor ('Li a obra de Machado de Assis')."
      },
      {
        text: "'O amor é fogo que arde sem se ver; / É ferida que dói e não se sente'. Nestes versos de Camões, a figura de linguagem que estrutura o pensamento é o:",
        options: ["Paradoxo", "Pleonasmo", "Eufemismo", "Hipérbole"],
        answer: "Paradoxo",
        explanation: "Paradoxo é a união de duas ideias contraditórias em um mesmo pensamento, que fogem à lógica comum (como algo pode doer e não ser sentido?). Difere da antítese, que são apenas termos opostos."
      },
      {
        text: "Em 'A vida é como uma novela', temos uma:",
        options: ["Metáfora", "Comparação", "Alegoria", "Antítese"],
        answer: "Comparação",
        explanation: "É uma comparação porque utiliza um conectivo ('como') para aproximar dois termos ('vida' e 'novela'). Se o conectivo fosse omitido ('A vida é uma novela'), seria uma metáfora."
      },
      {
        text: "A expressão 'um cheiro doce e aveludado' apresenta qual figura?",
        options: ["Metonímia", "Gradação", "Sinestesia", "Assonância"],
        answer: "Sinestesia",
        explanation: "A sinestesia consiste na mistura de sensações percebidas por diferentes órgãos dos sentidos (olfato - 'cheiro', paladar - 'doce', tato - 'aveludado')."
      },
      {
        text: "Em 'O rato roeu a roupa do rei de Roma', a repetição do som /r/ caracteriza uma:",
        options: ["Assonância", "Aliteração", "Anáfora", "Paronomásia"],
        answer: "Aliteração",
        explanation: "Aliteração é a repetição de sons consonantais para criar um efeito rítmico ou sonoro."
      },
      {
        text: "Já na frase 'A Ana ama a banana', a repetição do som vocálico /a/ é uma:",
        options: ["Assonância", "Aliteração", "Anáfora", "Hipérbole"],
        answer: "Assonância",
        explanation: "Assonância é a repetição de sons vocálicos."
      },
      {
        text: "Em 'Que rapaz inteligente!', dito a alguém que só comete erros, configura:",
        options: ["Elogio", "Sarcasmo", "Ironia", "B e C estão corretas"],
        answer: "B e C estão corretas",
        explanation: "A ironia é dizer o contrário do que se pensa. Quando essa ironia tem a intenção de zombar ou ofender, ela pode ser chamada de sarcasmo."
      },
      {
        text: "'Onde estás que não respondes? / Em que mundo, em qu'estrela tu t'escondes / Embuçado nos céus?'. A repetição da estrutura no início dos versos é uma:",
        options: ["Anáfora", "Epífora", "Pleonasmo", "Elipse"],
        answer: "Anáfora",
        explanation: "Anáfora é a repetição de uma ou mais palavras no início de versos, orações ou períodos."
      },
      {
        text: "A frase 'Ele subiu para cima' é um exemplo de:",
        options: ["Pleonasmo vicioso", "Hipérbole", "Elipse", "Zeugma"],
        answer: "Pleonasmo vicioso",
        explanation: "Pleonasmo é uma repetição de ideias. Quando essa repetição é desnecessária e não tem valor expressivo (como em 'subir para cima' ou 'entrar para dentro'), é considerado um vício de linguagem."
      },
      {
        text: "Qual figura de linguagem ocorre em 'O homem ficou sem teto'?",
        options: ["Metáfora", "Hipérbole", "Metonímia", "Comparação"],
        answer: "Metonímia",
        explanation: "Ocorre a troca da parte ('teto') pelo todo ('casa'). A pessoa não ficou apenas sem o teto, mas sem a moradia inteira."
      },
      {
        text: "A frase 'O ódio e o amor andam de mãos dadas' contém uma:",
        options: ["Antítese", "Gradação", "Sinédoque", "Ironia"],
        answer: "Antítese",
        explanation: "A antítese consiste na aproximação de palavras ou ideias de sentidos opostos ('ódio' e 'amor')."
      },
       {
        text: "Em 'A sala, em silêncio, apenas ouvia', qual figura está presente?",
        options: ["Metáfora", "Personificação", "Hipérbole", "Gradação"],
        answer: "Personificação",
        explanation: "Atribui-se a um local ('a sala') a capacidade humana de ouvir, o que caracteriza a personificação ou prosopopeia."
      },
      {
        text: "'Primeiro, ele gritou; depois, berrou; em seguida, urrou!' é um exemplo de:",
        options: ["Antítese", "Gradação", "Eufemismo", "Paradoxo"],
        answer: "Gradação",
        explanation: "Gradação (ou clímax) é uma sequência de palavras ou ideias que intensificam um sentido, seja de forma crescente ou decrescente."
      },
      {
        text: "A omissão de um termo facilmente identificável pelo contexto, como em 'Na sala, apenas quatro ou cinco convidados', omitindo o verbo 'havia', chama-se:",
        options: ["Zeugma", "Pleonasmo", "Assíndeto", "Elipse"],
        answer: "Elipse",
        explanation: "Elipse é a omissão de um termo que não foi mencionado antes, mas que é subentendido pelo contexto."
      },
      {
        text: "E quando o termo omitido já apareceu antes na oração, como em 'Ele prefere cinema; eu, teatro' (omitindo 'prefiro')?",
        options: ["Elipse", "Anáfora", "Zeugma", "Silepse"],
        answer: "Zeugma",
        explanation: "Zeugma é um tipo específico de elipse em que o termo omitido já foi expresso anteriormente no texto."
      },
      {
        text: "A frase 'Todos os paulistanos somos barulhentos' apresenta uma:",
        options: ["Silepse de gênero", "Silepse de número", "Silepse de pessoa", "Não há figura de linguagem."],
        answer: "Silepse de pessoa",
        explanation: "Silepse é a concordância com a ideia, não com o termo. 'Todos os paulistanos' (3ª pessoa) leva o verbo para a 1ª pessoa do plural ('somos') porque o falante se inclui no grupo."
      },
      {
        text: "Em 'Comprei um bombril para arear as panelas', o uso da marca pelo produto é um caso de:",
        options: ["Metáfora", "Comparação", "Metonímia", "Catacrese"],
        answer: "Metonímia",
        explanation: "É um tipo de metonímia em que se usa o nome da marca (Bombril) para se referir ao produto (lã de aço)."
      },
      {
        text: "A 'perna da mesa' ou o 'braço da cadeira' são exemplos de:",
        options: ["Personificação", "Catacrese", "Sinestesia", "Apóstrofe"],
        answer: "Catacrese",
        explanation: "Catacrese é o emprego de uma palavra fora de seu sentido original por falta de um termo mais específico. Como não há um nome para a 'perna' da mesa, usamos um termo por empréstimo."
      },
      {
        text: "'Ó céus, ó vida, ó azar!' A invocação de seres ou coisas é chamada de:",
        options: ["Hipérbole", "Apóstrofe", "Gradação", "Elipse"],
        answer: "Apóstrofe",
        explanation: "Apóstrofe é a interpelação ou invocação de uma pessoa ou coisa, real ou imaginária, presente ou ausente."
      },
      {
        text: "Qual figura de linguagem encontramos em 'A terrível doçura do seu olhar'?",
        options: ["Antítese", "Paradoxo", "Oxímoro", "B e C estão corretas"],
        answer: "B e C estão corretas",
        explanation: "Oxímoro é uma forma de paradoxo que une dois termos contraditórios em uma mesma expressão, criando uma nova imagem (doçura terrível). Todo oxímoro é um paradoxo."
      },
      {
        text: "'O bonde passa cheio de pernas: pernas brancas, pretas, amarelas.' (Carlos Drummond de Andrade). Temos aqui:",
        options: ["Metáfora", "Metonímia (Sinédoque)", "Comparação", "Eufemismo"],
        answer: "Metonímia (Sinédoque)",
        explanation: "Sinédoque é um tipo de metonímia que consiste em tomar a parte ('pernas') pelo todo ('pessoas')."
      },
      {
        text: "A construção 'Ele, de fato, não mentiu' contém um:",
        options: ["Pleonasmo", "Hipérbato", "Anacoluto", "Polissíndeto"],
        answer: "Pleonasmo",
        explanation: "Neste caso, é um pleonasmo de reforço, onde 'de fato' enfatiza a veracidade da afirmação, sem ser necessariamente um erro."
      },
      {
        text: "A inversão da ordem natural dos termos na oração, como em 'Ouviram do Ipiranga as margens plácidas', é um:",
        options: ["Hipérbato", "Anacoluto", "Assíndeto", "Pleonasmo"],
        answer: "Hipérbato",
        explanation: "Hipérbato é a inversão da ordem direta da frase (sujeito-verbo-complemento) para fins de estilo ou ênfase. A ordem direta seria 'As margens plácidas ouviram...'"
      },
      {
        text: "Na frase 'E chora, e ri, e soluça, e grita', a repetição da conjunção 'e' é um:",
        options: ["Assíndeto", "Polissíndeto", "Anáfora", "Epífora"],
        answer: "Polissíndeto",
        explanation: "Polissíndeto é a repetição enfática de uma conjunção coordenativa (geralmente 'e', 'ou', 'nem')."
      },
    ]
  },
  sintaxe: {
    title: "Estrutura do Período e Sintaxe",
    icon: "BrainCircuit",
    questions: [
      {
        text: "Na oração 'A cidade, cercada por montanhas, parecia um presépio.', o termo 'cercada por montanhas' exerce a função sintática de:",
        options: ["Aposto explicativo", "Oração subordinada adjetiva restritiva", "Adjunto adnominal", "Oração subordinada adjetiva explicativa reduzida de particípio"],
        answer: "Oração subordinada adjetiva explicativa reduzida de particípio",
        explanation: "O termo, isolado por vírgulas, explica uma característica do substantivo 'cidade'. Sua forma desenvolvida seria 'que era cercada por montanhas', caracterizando uma oração adjetiva explicativa."
      },
      {
        text: "Qual das frases abaixo utiliza a vírgula de forma INCORRETA?",
        options: ["O candidato, muito nervoso, respondeu às perguntas.", "Gosto de ler, de escrever, de desenhar e de ouvir música.", "Os alunos, que se esforçam, geralmente são aprovados.", "A prova será aplicada em Santa Maria, 20 de outubro de 2024."],
        answer: "Os alunos, que se esforçam, geralmente são aprovados.",
        explanation: "A oração 'que se esforçam' é restritiva, ou seja, especifica QUAIS alunos são aprovados (apenas os que se esforçam). Orações subordinadas adjetivas restritivas não devem ser separadas por vírgulas. Sem vírgulas, ela restringe; com vírgulas, ela explica (dando a entender que TODOS os alunos se esforçam)."
      },
      {
        text: "Em 'Precisa-se de vendedores', o 'se' é classificado como:",
        options: ["Partícula apassivadora", "Índice de indeterminação do sujeito", "Pronome reflexivo", "Conjunção condicional"],
        answer: "Índice de indeterminação do sujeito",
        explanation: "O 'se' indetermina o sujeito quando acompanha verbos que não são transitivos diretos (como 'precisar de'). O sujeito é, portanto, indeterminado."
      },
      {
        text: "Já em 'Alugam-se casas', o 'se' é:",
        options: ["Partícula apassivadora", "Índice de indeterminação do sujeito", "Objeto direto", "Conjunção integrante"],
        answer: "Partícula apassivadora",
        explanation: "Aqui, o 'se' apassiva o verbo. A frase na voz ativa seria 'Casas são alugadas'. O sujeito da oração é 'casas'."
      },
      {
        text: "Na frase 'O amor de mãe é incomparável', o termo 'de mãe' é:",
        options: ["Adjunto adnominal", "Complemento nominal", "Aposto", "Agente da passiva"],
        answer: "Adjunto adnominal",
        explanation: "O termo 'de mãe' caracteriza o substantivo concreto 'amor' e tem valor de posse (amor que a mãe tem), funcionando como adjunto adnominal. Se 'amor' fosse abstrato no contexto (amor à mãe), seria complemento nominal."
      },
      {
        text: "Em 'Tenho necessidade de ajuda', o termo 'de ajuda' funciona como:",
        options: ["Adjunto adnominal", "Complemento nominal", "Objeto indireto", "Adjunto adverbial"],
        answer: "Complemento nominal",
        explanation: "O termo 'de ajuda' completa o sentido do substantivo abstrato 'necessidade'. É alvo da necessidade, configurando um complemento nominal."
      },
      {
        text: "Assinale a alternativa em que a vírgula foi usada para isolar um aposto:",
        options: ["Quando ele chegou, todos se calaram.", "Maria, venha cá!", "Machado de Assis, o maior escritor brasileiro, nasceu no Rio de Janeiro.", "Comprei pão, queijo, presunto e leite."],
        answer: "Machado de Assis, o maior escritor brasileiro, nasceu no Rio de Janeiro.",
        explanation: "O termo 'o maior escritor brasileiro' é um aposto explicativo, pois explica quem foi Machado de Assis."
      },
      {
        text: "Na mesma frase da questão anterior, 'Machado de Assis' é o:",
        options: ["Sujeito simples", "Vocativo", "Predicativo do sujeito", "Objeto direto"],
        answer: "Sujeito simples",
        explanation: "O núcleo do sujeito que pratica a ação de 'nascer' é 'Machado de Assis'."
      },
      {
        text: "Em 'Pedro, o carteiro, entregou a encomenda.' O sujeito é:",
        options: ["Pedro, o carteiro", "Pedro", "o carteiro", "Oculto"],
        answer: "Pedro",
        explanation: "O núcleo do sujeito é 'Pedro'. O termo 'o carteiro' é um aposto explicativo."
      },
      {
        text: "A oração 'É importante que você estude' é classificada como:",
        options: ["Subordinada Substantiva Objetiva Direta", "Subordinada Substantiva Subjetiva", "Subordinada Adverbial Condicional", "Coordenada Sindética Explicativa"],
        answer: "Subordinada Substantiva Subjetiva",
        explanation: "A oração 'que você estude' funciona como sujeito da oração principal. Podemos inverter: 'Que você estude é importante.'."
      },
      {
        text: "Na frase 'Não sei se ele virá', a oração 'se ele virá' é:",
        options: ["Subordinada Substantiva Objetiva Direta", "Subordinada Adverbial Condicional", "Subordinada Substantiva Completiva Nominal", "Coordenada Sindética Alternativa"],
        answer: "Subordinada Substantiva Objetiva Direta",
        explanation: "Quem não sabe, não sabe ALGO. A oração 'se ele virá' funciona como objeto direto do verbo 'saber'."
      },
      {
        text: "O uso do ponto e vírgula (;) é adequado para:",
        options: ["Separar sujeito de predicado.", "Indicar uma pergunta direta.", "Separar itens de uma enumeração longa ou orações coordenadas extensas.", "Iniciar uma citação."],
        answer: "Separar itens de uma enumeração longa ou orações coordenadas extensas.",
        explanation: "O ponto e vírgula indica uma pausa mais forte que a vírgula, mas menor que o ponto final. É ideal para organizar listas ou separar orações que já contêm vírgulas internas."
      },
      {
        text: "Em 'Os jogadores, cansados, deixaram o campo.' O termo 'cansados' é:",
        options: ["Adjunto adnominal", "Predicativo do objeto", "Aposto", "Predicativo do sujeito"],
        answer: "Predicativo do sujeito",
        explanation: "'Cansados' é uma característica do sujeito ('Os jogadores') que é mediada pelo verbo de ligação implícito ('estavam cansados'). Como está deslocado e entre vírgulas, mantém a função."
      },
      {
        text: "A frase 'Choveu muito ontem' possui:",
        options: ["Sujeito simples", "Sujeito oculto", "Sujeito indeterminado", "Oração sem sujeito"],
        answer: "Oração sem sujeito",
        explanation: "Verbos que indicam fenômenos da natureza, como 'chover', 'ventar', 'nevar', formam orações sem sujeito."
      },
      {
        text: "Qual o tipo de predicado em 'Os alunos continuam ansiosos'?",
        options: ["Predicado verbal", "Predicado nominal", "Predicado verbo-nominal", "Predicado adverbial"],
        answer: "Predicado nominal",
        explanation: "O predicado nominal é formado por um verbo de ligação ('continuam') e um predicativo do sujeito ('ansiosos'). O núcleo do predicado é o nome (adjetivo 'ansiosos')."
      },
      {
        text: "E em 'Os alunos chegaram ansiosos'?",
        options: ["Predicado verbal", "Predicado nominal", "Predicado verbo-nominal", "Predicado nominal-adverbial"],
        answer: "Predicado verbo-nominal",
        explanation: "Temos um verbo de ação ('chegaram') como núcleo verbal e um predicativo do sujeito ('ansiosos') como núcleo nominal, indicando o modo como chegaram. Portanto, há dois núcleos."
      },
      {
        text: "Em 'Todos consideraram a prova fácil', o termo 'fácil' é:",
        options: ["Adjunto adnominal", "Predicativo do sujeito", "Predicativo do objeto", "Objeto direto"],
        answer: "Predicativo do objeto",
        explanation: "'Fácil' é uma característica atribuída ao objeto direto ('a prova') pelo verbo 'considerar'. Portanto, é um predicativo do objeto."
      },
      {
        text: "A vírgula é obrigatória para separar:",
        options: ["O sujeito do verbo.", "O verbo do objeto.", "O vocativo do resto da frase.", "O adjunto adnominal do nome."],
        answer: "O vocativo do resto da frase.",
        explanation: "O vocativo, que é um chamamento ou interpelação, deve ser sempre isolado por vírgulas. Ex: 'Amigos, vamos celebrar!'"
      },
      {
        text: "A oração 'Quando o sol nasceu, os pássaros cantaram' contém uma oração subordinada:",
        options: ["Adverbial Causal", "Adverbial Temporal", "Adverbial Final", "Adjetiva Restritiva"],
        answer: "Adverbial Temporal",
        explanation: "A oração iniciada por 'Quando' indica o momento, o tempo em que a ação da oração principal ('os pássaros cantaram') ocorreu."
      },
      {
        text: "'Estude, pois a prova será difícil.' A conjunção 'pois' introduz uma oração coordenada sindética:",
        options: ["Aditiva", "Adversativa", "Conclusiva", "Explicativa"],
        answer: "Explicativa",
        explanation: "Quando 'pois' vem depois do verbo e explica o motivo ou a razão de uma ordem ou pedido anterior, ele é explicativo."
      },
      {
        text: "'Ele estudou muito, logo, foi aprovado.' O 'logo' introduz uma ideia de:",
        options: ["Causa", "Condição", "Conclusão", "Oposição"],
        answer: "Conclusão",
        explanation: "'Logo', assim como 'portanto' e 'por isso', é uma conjunção conclusiva, indicando o resultado lógico do que foi dito antes."
      },
      {
        text: "Qual das orações NÃO usa a crase corretamente?",
        options: ["Fui àquela festa ontem.", "Ele se dedica à leitura.", "Agradeço à todos pela presença.", "As aulas vão de segunda à sexta."],
        answer: "Agradeço à todos pela presença.",
        explanation: "Não se usa crase antes de pronomes indefinidos como 'todos'."
      },
      {
        text: "O termo destacado em 'A casa de Pedro é grande' é um:",
        options: ["Adjunto adnominal", "Complemento nominal", "Aposto", "Sujeito"],
        answer: "Adjunto adnominal",
        explanation: "O termo 'de Pedro' especifica a qual casa nos referimos e tem valor de posse, sendo, portanto, um adjunto adnominal do substantivo concreto 'casa'."
      },
      {
        text: "Em 'A esperança, que é a última que morre, animava os náufragos', a oração destacada é:",
        options: ["Subordinada Adjetiva Restritiva", "Subordinada Adjetiva Explicativa", "Subordinada Substantiva Apositiva", "Coordenada Sindética Explicativa"],
        answer: "Subordinada Adjetiva Explicativa",
        explanation: "Isolada por vírgulas, a oração adiciona uma informação extra sobre o antecedente 'A esperança', sem restringir seu sentido. É uma característica universal da esperança, não de uma específica."
      },
      {
        text: "Qual o sujeito da oração 'Venderam a casa da esquina'?",
        options: ["A casa da esquina", "Oculto", "Indeterminado", "Inexistente"],
        answer: "Indeterminado",
        explanation: "O verbo está na 3ª pessoa do plural sem um referente claro no texto. Não se sabe quem vendeu, portanto, o sujeito é indeterminado."
      },
      {
        text: "A função sintática da palavra 'que' em 'O homem que trabalha vence' é:",
        options: ["Conjunção integrante", "Pronome relativo (sujeito)", "Conjunção consecutiva", "Partícula expletiva"],
        answer: "Pronome relativo (sujeito)",
        explanation: "O 'que' retoma 'O homem' e funciona como sujeito do verbo 'trabalha'. Pode ser substituído por 'o qual'."
      },
      {
        text: "A pontuação está correta em:",
        options: ["Ele comprou, o livro que eu indiquei.", "Embora estivesse doente, foi trabalhar.", "O menino, corria pela rua.", "Pedro meu amigo, chegou."],
        answer: "Embora estivesse doente, foi trabalhar.",
        explanation: "A vírgula separa corretamente a oração subordinada adverbial deslocada ('Embora estivesse doente') da oração principal."
      },
      {
        text: "Em 'Os atletas da seleção brasileira jogaram bem', o núcleo do sujeito é:",
        options: ["atletas", "seleção", "brasileira", "seleção brasileira"],
        answer: "atletas",
        explanation: "O núcleo do sujeito é o substantivo principal em torno do qual os outros termos (adjuntos) se organizam. Quem jogou? Os atletas."
      },
    ]
  },
  colocacao_pronominal: {
    title: "Colocação Pronominal",
    icon: "Shuffle",
    questions: [
        {
            text: "Assinale a alternativa em que a colocação do pronome oblíquo átono está INCORRETA:",
            options: [
              "Não me fales sobre isso.",
              "Em se tratando de estudo, ele é exemplar.",
              "Far-lhe-ei uma visita amanhã.",
              "Eu darei-te um presente."
            ],
            answer: "Eu darei-te um presente.",
            explanation: "Com verbos no futuro do presente, não se usa ênclise (pronome depois do verbo). O correto seria a mesóclise ('Dar-te-ei') ou a próclise, se houvesse um fator de atração ('Eu te darei')."
        },
        {
            text: "A próclise (pronome antes do verbo) é obrigatória em qual das frases abaixo?",
            options: [
                "Os alunos encontraram-se no pátio.",
                "Aqui se fala português.",
                "Me disseram que a prova foi adiada.",
                "Desejo que te recuperes logo."
            ],
            answer: "Desejo que te recuperes logo.",
            explanation: "As conjunções subordinativas, como 'que', são fatores de atração que exigem a próclise."
        },
        {
            text: "Qual frase justifica a próclise pelo mesmo motivo que 'Nunca nos enganamos'?",
            options: [
                "Quem me chamou?",
                "Deus o abençoe.",
                "Nada me incomoda.",
                "Ele se machucou."
            ],
            answer: "Nada me incomoda.",
            explanation: "Tanto 'nunca' quanto 'nada' são palavras de sentido negativo, que funcionam como fator de atração para o pronome, tornando a próclise obrigatória."
        },
        {
            text: "A ênclise (pronome depois do verbo) é a colocação padrão. Em qual alternativa ela foi usada de forma INCORRETA?",
            options: [
                "Entregaram-me o pacote.",
                "Vi-o na rua ontem.",
                "Quando avistou-me, ele sorriu.",
                "Faça-o entrar, por favor."
            ],
            answer: "Quando avistou-me, ele sorriu.",
            explanation: "Advérbios, como 'quando', atraem o pronome para antes do verbo (próclise). O correto seria 'Quando me avistou, ele sorriu'."
        },
        {
            text: "A mesóclise (pronome no meio do verbo) está corretamente aplicada em:",
            options: [
                "Eu contarei-lhe tudo.",
                "Ajudar-te-ia se pudesse.",
                "Sempre dir-se-á a verdade.",
                "Ele havia preparado-se."
            ],
            answer: "Ajudar-te-ia se pudesse.",
            explanation: "A mesóclise é usada com verbos no futuro do pretérito (como 'ajudaria') ou futuro do presente, desde que não haja fator de próclise. 'Contarei-lhe' (próclise obrigatória: 'Eu lhe contarei'), 'Sempre se dirá' (próclise obrigatória), 'Havia se preparado' (não se usa mesóclise em locuções verbais)."
        },
        {
            text: "Em 'Todos se retiraram da sala'. A colocação do pronome é:",
            options: [
                "Próclise obrigatória",
                "Próclise facultativa",
                "Ênclise obrigatória",
                "Incorreta"
            ],
            answer: "Próclise obrigatória",
            explanation: "Pronomes indefinidos como 'todos', 'alguém', 'ninguém' são fatores de atração que obrigam a próclise."
        },
        {
            text: "Marque a frase que apresenta um erro de colocação pronominal:",
            options: [
                "Dei-lhe o recado.",
                "Não o quero aqui.",
                "Recusou-se a participar.",
                "Me empresta o lápis?"
            ],
            answer: "Me empresta o lápis?",
            explanation: "De acordo com a norma culta, não se deve iniciar períodos com pronome oblíquo átono. O correto seria a ênclise: 'Empresta-me o lápis?'."
        },
        {
            text: "'Deus te pague!' Nesta frase, a próclise é justificada por ser uma oração:",
            options: [
                "Negativa",
                "Optativa (que exprime desejo)",
                "Interrogativa",
                "Subordinada"
            ],
            answer: "Optativa (que exprime desejo)",
            explanation: "Frases que exprimem desejo (optativas) são um dos casos em que a próclise é usada. 'Deus' funciona como um sujeito que atrai o pronome."
        },
        {
            text: "A colocação pronominal está correta em:",
            options: [
                "Encontrei-a no parque.",
                "Jamais enganei-te.",
                "O livro que emprestei-lhe era ótimo.",
                "Irei-me embora amanhã."
            ],
            answer: "Encontrei-a no parque.",
            explanation: "Na ausência de fator de atração e com o verbo no início da oração (neste caso, infinitivo pessoal), a ênclise é a norma. As outras estão erradas: 'Jamais te enganei' (advérbio atrai), 'que lhe emprestei' (pronome relativo atrai), 'Ir-me-ei' (mesóclise) ou 'Eu me irei' (próclise)."
        },
        {
            text: "Em 'Os meninos, que se comportaram, ganharam doces', o 'se' está em próclise devido:",
            options: [
                "Ao sujeito no plural",
                "À conjunção 'que' (pronome relativo)",
                "Ao verbo no pretérito",
                "À vírgula"
            ],
            answer: "À conjunção 'que' (pronome relativo)",
            explanation: "Pronomes relativos (que, qual, cujo, etc.) são fortes fatores de atração, exigindo a próclise."
        },
        {
          text: "'Se não me engano, ele chegará hoje.' A colocação pronominal está:",
          options: ["Correta, pois 'se' atrai o pronome.", "Incorreta, deveria ser 'não engano-me'.", "Incorreta, deveria ser 'se não engano-me'.", "Correta, pois 'não' atrai o pronome."],
          answer: "Correta, pois 'não' atrai o pronome.",
          explanation: "Palavras negativas como 'não', 'nunca', 'jamais' são fatores de próclise, puxando o pronome para antes do verbo."
        },
        {
          text: "Em qual alternativa a ênclise é obrigatória?",
          options: ["Quando nos vimos, foi uma festa.", "O assunto que me interessa é este.", "A matéria, explicou-a o professor com calma.", "Ele não se conteve."],
          answer: "A matéria, explicou-a o professor com calma.",
          explanation: "Quando a frase se inicia com o verbo no infinitivo ou no imperativo afirmativo, ou quando há uma pausa (vírgula) antes do verbo, a ênclise é a regra. 'Quando' e 'que' causam próclise, assim como 'não'."
        },
        {
          text: "A frase 'Ele tinha encontrado-se com ela' está correta?",
          options: ["Sim, a ênclise ao particípio é comum.", "Não, o correto é 'tinha se encontrado'.", "Não, o correto é 'se tinha encontrado'.", "Sim, pois não há fator de próclise."],
          answer: "Não, o correto é 'tinha se encontrado'.",
          explanation: "Não se deve usar ênclise com o verbo no particípio. Em locuções verbais com particípio, o pronome deve vir depois do verbo auxiliar ('tinha se encontrado') ou antes da locução se houver fator de atração ('Ele não se tinha encontrado')."
        },
        {
          text: "Assinale a opção em que a mesóclise seria aplicável:",
          options: ["Se puder, (ajudar).", "Eu não (falar) com ele.", "Nós (encontrar) no futuro.", "Talvez eu (lembrar) do nome."],
          answer: "Nós (encontrar) no futuro.",
          explanation: "A mesóclise ('encontrar-nos-emos') é usada com verbos no futuro do presente ou futuro do pretérito, desde que não haja palavra atrativa. 'Se' e 'não' e 'talvez' são fatores de próclise."
        },
        {
          text: "'Alguém nos contou a verdade'. A próclise é obrigatória porque:",
          options: ["O verbo está no passado.", "A frase é afirmativa.", "'Alguém' é um pronome indefinido.", "O sujeito está no singular."],
          answer: "'Alguém' é um pronome indefinido.",
          explanation: "Pronomes indefinidos (alguém, ninguém, tudo, todos, etc.) são palavras atrativas que exigem a colocação do pronome antes do verbo."
        },
        {
          text: "'Dize-me com quem andas e dir-te-ei quem és'. A colocação pronominal está:",
          options: ["Correta em ambos os casos.", "Incorreta em ambos os casos.", "Correta apenas no primeiro caso.", "Correta apenas no segundo caso."],
          answer: "Correta em ambos os casos.",
          explanation: "No primeiro caso, o verbo está no imperativo afirmativo, pedindo ênclise ('Dize-me'). No segundo caso, o verbo está no futuro do presente sem fator de atração, pedindo mesóclise ('dir-te-ei')."
        },
        {
          text: "A frase 'Onde você comprou-o?' está:",
          options: ["Correta.", "Incorreta, o certo é 'Onde você o comprou?'.", "Incorreta, o certo é 'Onde o você comprou?'.", "Incorreta, o certo é 'Onde comprou-lhe?'."],
          answer: "Incorreta, o certo é 'Onde você o comprou?'.",
          explanation: "Pronomes interrogativos como 'Onde' são palavras atrativas que exigem a próclise. O correto é colocar o pronome 'o' antes do verbo."
        },
        {
          text: "'...para não magoá-la'. A colocação do pronome está correta porque:",
          options: ["O verbo está no infinitivo.", "É uma frase negativa.", "O verbo está no gerúndio.", "É uma regra facultativa."],
          answer: "O verbo está no infinitivo.",
          explanation: "Com verbos no infinitivo, a ênclise é uma colocação natural e correta, especialmente após preposições como 'para'."
        },
        {
          text: "Qual das opções preenche a lacuna corretamente: 'Isto ________ refere ao nosso acordo.'?",
          options: ["se", "lhe", "nos", "te"],
          answer: "se",
          explanation: "O pronome demonstrativo 'isto' atrai o pronome oblíquo para antes do verbo (próclise). A forma correta é 'Isto se refere...'."
        },
        {
          text: "Assinale a frase com colocação pronominal INACEITÁVEL na norma culta:",
          options: ["Os alunos foram-se embora mais cedo.", "Os alunos se foram embora mais cedo.", "Foram-se embora os alunos mais cedo.", "Os alunos tinham ido-se embora mais cedo."],
          answer: "Os alunos tinham ido-se embora mais cedo.",
          explanation: "Jamais se usa pronome oblíquo átono após um verbo no particípio. O correto seria 'Os alunos tinham se ido...' ou 'Os alunos se tinham ido...'."
        },
        {
          text: "A frase 'Deixo-o à vontade' está correta. Qual seria a forma incorreta?",
          options: ["Eu o deixo à vontade.", "Deixo-lhe à vontade.", "Não o deixo à vontade.", "Deixo-o."],
          answer: "Deixo-lhe à vontade.",
          explanation: "O verbo 'deixar' no sentido de permitir que alguém fique é transitivo direto. O pronome correto para o objeto direto é 'o', e não 'lhe', que é para objeto indireto."
        },
        {
            text: "'Oxalá te recuperes rápido!' A próclise é utilizada devido a qual tipo de oração?",
            options: ["Exclamativa", "Subordinada", "Optativa", "Imperativa negativa"],
            answer: "Optativa",
            explanation: "Orações optativas, que exprimem desejo, são um caso clássico de próclise na língua portuguesa."
        },
        {
            text: "Em locuções verbais como 'Vou fazer o trabalho', qual seria a colocação correta do pronome 'o'?",
            options: ["Vou-o fazer.", "Vou fazê-lo.", "Vou o fazer.", "Fazê-lo vou."],
            answer: "Vou fazê-lo.",
            explanation: "Em locuções verbais com o verbo principal no infinitivo, o pronome pode ser colocado após ele (ênclise ao infinitivo). No português do Brasil, a forma 'Vou fazê-lo' é a mais comum e preferida pela norma culta. A forma 'Vou-o fazer' é mais comum em Portugal."
        },
        {
            text: "'Ele queixou-se do barulho'. A ênclise está correta porque:",
            options: ["O verbo está no início da oração.", "Não há palavra atrativa antes do verbo.", "O verbo é pronominal.", "Todas as alternativas estão corretas."],
            answer: "Todas as alternativas estão corretas.",
            explanation: "A ênclise é a regra geral quando não há fator de próclise. O verbo 'queixar-se' é pronominal, e como a frase inicia com o sujeito 'Ele' (que não atrai), a ênclise é a colocação padrão."
        },
        {
            text: "Qual a única frase INCORRETA?",
            options: [
                "Nada me perturba.",
                "Falar-se-á sobre isso na reunião.",
                "Quem contou-te essa história?",
                "Contaram-me essa história."
            ],
            answer: "Quem contou-te essa história?",
            explanation: "A palavra interrogativa 'Quem' é um fator de próclise, tornando obrigatória a colocação do pronome antes do verbo. O correto é: 'Quem te contou essa história?'."
        },
        {
            text: "Em 'Faria-me um favor?', a colocação pronominal está correta. Trata-se de um caso de:",
            options: ["Próclise obrigatória.", "Ênclise por o verbo estar no futuro do pretérito.", "Mesóclise.", "Ênclise por não haver palavra atrativa."],
            answer: "Ênclise por não haver palavra atrativa.",
            explanation: "Como a frase se inicia com o verbo no futuro do pretérito, a mesóclise ('Far-me-ia') seria a forma mais culta. No entanto, em perguntas, a ênclise ao verbo no início da frase ('Faria-me') é amplamente aceita e considerada correta, pois não há fator de próclise."
        },
        {
            text: "A opção que justifica a próclise em 'Sempre se esforçou muito' é:",
            options: ["Pronome demonstrativo.", "Advérbio.", "Conjunção subordinativa.", "Oração optativa."],
            answer: "Advérbio.",
            explanation: "O advérbio 'sempre' é um fator de atração que exige a colocação do pronome antes do verbo."
        },
        {
            text: "Assinale a única alternativa correta quanto à colocação pronominal.",
            options: [
                "Não entregaram-me o documento.",
                "Diria-se que ele estava feliz.",
                "Lhe direi o que aconteceu.",
                "Talvez o encontremos lá."
            ],
            answer: "Talvez o encontremos lá.",
            explanation: "'Talvez' é um advérbio que exige próclise. As outras estão incorretas: 'Não me entregaram' (próclise); 'Dir-se-ia' (mesóclise); 'Dir-lhe-ei' ou 'Eu lhe direi' (mesóclise ou próclise)."
        },
        {
            text: "Na frase 'Estava arrumando-se quando o telefone tocou', o pronome foi colocado:",
            options: ["Antes do gerúndio (próclise).", "Depois do gerúndio (ênclise).", "No meio do verbo (mesóclise).", "De forma incorreta."],
            answer: "Depois do gerúndio (ênclise).",
            explanation: "Em locuções verbais com o verbo principal no gerúndio, é comum e correto colocar o pronome após ele (ênclise ao gerúndio), desde que não haja fator de próclise antes da locução."
        },
        {
            text: "'Ninguém falou-me sobre a mudança'. A frase contém um erro de colocação. Qual é a correção?",
            options: [
                "Ninguém me falou sobre a mudança.",
                "Falou-me ninguém sobre a mudança.",
                "Ninguém falou-me-á sobre a mudança.",
                "A frase está correta."
            ],
            answer: "Ninguém me falou sobre a mudança.",
            explanation: "O pronome indefinido 'ninguém' é uma palavra atrativa que exige a próclise. O pronome 'me' deve vir antes do verbo 'falou'."
        }
    ]
  }
};


// --- COMPONENTES ---

const ThemeSelector = ({ onSelectTheme }) => {
  const [numQuestions, setNumQuestions] = useState(10);

  const themeColors = {
    interpretacao: {
      bg: "bg-[#47c4f3]",
      hoverBg: "hover:bg-[#32a5d1]",
    },
    concordancia: {
      bg: "bg-[#875ec1]",
      hoverBg: "hover:bg-[#704f9f]",
    },
    sintaxe: {
      bg: "bg-[#ed4788]",
      hoverBg: "hover:bg-[#ca3e75]",
    },
    regencia: {
      bg: "bg-[#fdb82c]",
      hoverBg: "hover:bg-[#cc9524]",
    },
    figuras_linguagem: {
      bg: "bg-[#8ad5cc]",
      hoverBg: "hover:bg-[#74b1aa]",
    },
    colocacao_pronominal: {
      bg: "bg-[#2ecc71]", // Green
      hoverBg: "hover:bg-[#27ae60]",
    },
  };

  const icons = {
    BookOpen,
    CheckCircle,
    Target,
    BrainCircuit,
    MessageSquareQuote,
    Shuffle
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white">Simulado Colégio Militar</h1>
      <p className="mt-4 text-lg text-[#a09dc5]">Português - 1º Ano do Ensino Médio</p>

      <div className="my-8 bg-[#4a4674] p-4 rounded-lg max-w-sm mx-auto">
        <label htmlFor="num-questions" className="block text-white font-semibold mb-2">
          Número de Questões: <span className="text-[#8ad5cc] font-bold">{numQuestions}</span>
        </label>
        <input
            type="range"
            id="num-questions"
            min="5"
            max="30"
            step="1"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="w-full h-2 bg-[#39355f] rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <p className="text-xl font-semibold text-white mb-6">Escolha um tema para começar:</p>
      <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
        {Object.keys(quizData).map(key => {
          const theme = quizData[key];
          const Icon = icons[theme.icon];
          const colors = themeColors[key];
          return (
            <button
              key={key}
              onClick={() => onSelectTheme(key, numQuestions)}
              className={`group w-full flex items-center justify-start p-4 ${colors.bg} ${colors.hoverBg} rounded-xl shadow-lg hover:shadow-[#2a2846] transition-all duration-300 transform hover:scale-105`}
            >
              <Icon className="h-8 w-8 text-white mr-4" />
              <span className="font-bold text-lg text-white">{theme.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="mt-12">
        <a
          href="https://www.in.gov.br/en/web/dou/-/edital-n-1-de-28-de-agosto-de-2025-651996872"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#a09dc5] hover:text-white transition-colors"
        >
          <ExternalLink size={18} />
          Acessar edital do concurso (referência 2025)
        </a>
      </footer>
    </div>
  );
};

const Quiz = ({ questionSet, onFinish, onExitQuiz, themeKey }) => {
  const [questions, setQuestions] = useState(questionSet);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const isGeneratedQuiz = !quizData[themeKey];

  useEffect(() => {
    setQuestions(questionSet);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
  }, [questionSet]);

  if (questions.length === 0) {
    return (
        <div className="text-center text-white">
            <Loader className="animate-spin h-12 w-12 mx-auto" />
            <p className="mt-4">Carregando quiz...</p>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const quizTitle = isGeneratedQuiz ? "Questões Geradas por IA" : quizData[themeKey].title;

  const handleSelectAnswer = (option) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    if(selectedAnswer === currentQuestion.answer) {
        setScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
      if(currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
      } else {
          onFinish(score, totalQuestions);
      }
  }

  const getButtonClass = (option) => {
    if (!isAnswered) {
      if (selectedAnswer === option) {
        return 'bg-[#fdb82c] border-[#fdb82c] text-[#39355f] font-bold';
      }
      return 'bg-white hover:bg-gray-200 text-[#39355f] border-gray-300';
    }

    if (option === currentQuestion.answer) {
      return 'bg-[#8ad5cc] border-transparent text-[#39355f] font-bold';
    }
    if (option === selectedAnswer) {
      return 'bg-[#ed4788] border-transparent text-white';
    }

    return 'bg-white opacity-60 text-gray-500 border-gray-300';
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 bg-[#4a4674] rounded-2xl shadow-2xl relative">
      <button
        onClick={onExitQuiz}
        className="absolute top-4 right-4 text-[#a09dc5] hover:text-white transition-colors z-10"
        aria-label="Voltar ao menu principal"
      >
        <X size={28} />
      </button>

      <div className="mb-6">
        <p className="text-sm text-[#a09dc5] text-center md:text-left">
            {quizTitle} - Questão {currentQuestionIndex + 1} de {totalQuestions}
        </p>
        <div className="w-full bg-[#39355f] rounded-full h-2.5 mt-2">
            <div
                className="bg-[#ed4788] h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}>
            </div>
        </div>
      </div>

      <div className="bg-[#39355f] p-6 rounded-lg mb-6">
        <p className="text-lg text-white leading-relaxed whitespace-pre-wrap">{currentQuestion.text}</p>
      </div>

      <div className="flex flex-col space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(option)}
            disabled={isAnswered}
            className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${getButtonClass(option)}`}
          >
            <span className="font-semibold">{String.fromCharCode(65 + index)}) </span>{option}
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className="mt-6 p-4 rounded-lg bg-[#fdb82c] bg-opacity-30 border border-[#fdb82c]">
            <h4 className="font-bold text-[#fdb82c]">Justificativa:</h4>
            <p className="text-white mt-2">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        {!isAnswered ? (
             <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="flex items-center gap-2 px-8 py-3 bg-[#ed4788] text-white font-bold rounded-lg shadow-md hover:bg-[#ca3e75] transition-all disabled:bg-[#a09dc5] disabled:cursor-not-allowed"
            >
                Responder
            </button>
        ) : (
             <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-8 py-3 bg-[#47c4f3] text-white font-bold rounded-lg shadow-md hover:bg-[#32a5d1] transition-all"
            >
                {currentQuestionIndex < totalQuestions - 1 ? 'Próxima Questão' : 'Finalizar Quiz'}
                <ArrowRight size={20}/>
            </button>
        )}

      </div>
    </div>
  );
};

const Results = ({ score, totalQuestions, onRestart, onGenerateMore, isGenerating }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    let feedbackMessage;
    let feedbackColor;

    if (percentage >= 80) {
        feedbackMessage = "Excelente Desempenho! Você está no caminho certo para a aprovação!";
        feedbackColor = "text-[#8ad5cc]";
    } else if (percentage >= 50) {
        feedbackMessage = "Bom trabalho! Continue estudando para garantir um resultado ainda melhor.";
        feedbackColor = "text-[#fdb82c]";
    } else {
        feedbackMessage = "Não desanime! Revise os tópicos e tente novamente. A prática leva à perfeição.";
        feedbackColor = "text-[#ed4788]";
    }

    return (
        <div className="flex flex-col items-center text-center max-w-lg mx-auto p-8 bg-[#4a4674] rounded-2xl shadow-2xl">
            <Trophy className="w-24 h-24 text-[#fdb82c]" />
            <h2 className="text-4xl font-bold text-white mt-4">Quiz Finalizado!</h2>
            <p className="text-xl text-[#a09dc5] mt-4">Sua pontuação final foi:</p>
            <p className="text-6xl font-bold text-[#8ad5cc] my-4">{score} / {totalQuestions}</p>
            <p className={`text-xl font-semibold ${feedbackColor}`}>{feedbackMessage}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                    onClick={onRestart}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#39355f] text-white font-bold rounded-lg shadow-md hover:bg-[#2a2846] transition-all"
                >
                    <Home size={20} />
                    Voltar ao Início
                </button>
                <button
                    onClick={onGenerateMore}
                    disabled={isGenerating}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ed4788] text-white font-bold rounded-lg shadow-md hover:bg-[#ca3e75] transition-all disabled:bg-[#a09dc5] disabled:cursor-wait"
                >
                    {isGenerating ? (
                        <>
                            <Loader className="animate-spin" size={20}/>
                            Gerando...
                        </>
                    ) : (
                        <>
                            <Zap size={20} />
                            Gerar mais questões com IA
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

const Modal = ({ message, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
        <div className="bg-[#4a4674] rounded-lg shadow-xl p-6 max-w-sm w-full text-center border border-[#ed4788]">
            <h3 className="text-lg font-bold text-[#ed4788]">Ocorreu um Erro</h3>
            <p className="mt-2 text-sm text-white">{message}</p>
            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#ed4788] text-white rounded hover:bg-[#ca3e75] transition-colors"
            >
                Fechar
            </button>
        </div>
    </div>
);


// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [appState, setAppState] = useState('selecting'); // 'selecting', 'in_progress', 'finished'
  const [currentTheme, setCurrentTheme] = useState(null);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0 });
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const prepareQuestions = (questions, num) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, num);
    return selected.map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));
  };

  const handleSelectTheme = (themeKey, num) => {
    setCurrentTheme(themeKey);
    const allQuestions = quizData[themeKey]?.questions || [];
    setCurrentQuizQuestions(prepareQuestions(allQuestions, num));
    setAppState('in_progress');
  };

  const handleFinishQuiz = (score, total) => {
    setFinalScore({ score, total });
    setAppState('finished');
  };

  const handleRestart = () => {
      setAppState('selecting');
      setCurrentTheme(null);
      setCurrentQuizQuestions([]);
  };

  const handleGenerateMore = async () => {
    if (!currentTheme) return;
    setIsGenerating(true);
    setErrorMessage(null);

    const themeTitle = quizData[currentTheme].title;
    const prompt = `Você é um especialista em língua portuguesa e em concursos militares. Crie 5 novas questões de múltipla escolha sobre o tema '${themeTitle}', no nível do concurso de admissão ao 1º ano do Ensino Médio do Colégio Militar. Cada questão deve ter 4 opções. Inclua a resposta correta e uma justificativa clara e concisa. Retorne os dados exclusivamente no formato JSON, conforme o schema especificado. A resposta DEVE ser uma das opções listadas.`;

    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              text: { "type": "STRING" },
              options: {
                type: "ARRAY",
                items: { "type": "STRING" },
                minItems: 4,
                maxItems: 4
              },
              answer: { "type": "STRING" },
              explanation: { "type": "STRING" }
            },
            required: ["text", "options", "answer", "explanation"]
          }
        }
      }
    };

    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
            const parsedJson = JSON.parse(result.candidates[0].content.parts[0].text);
            if (Array.isArray(parsedJson) && parsedJson.length > 0) {
                 setCurrentQuizQuestions(prepareQuestions(parsedJson, parsedJson.length));
                 setAppState('in_progress');
            } else {
                throw new Error("A IA retornou um formato de dados inesperado.");
            }
        } else {
            console.error("Unexpected API response structure:", result);
            throw new Error("Não foi possível extrair as questões da resposta da IA.");
        }

    } catch (error) {
        console.error("Error generating questions:", error);
        setErrorMessage(`Não foi possível gerar novas questões. Por favor, tente novamente. Detalhe: ${error.message}`);
    } finally {
        setIsGenerating(false);
    }
  };

  const renderContent = () => {
    switch (appState) {
      case 'in_progress':
        return <Quiz questionSet={currentQuizQuestions} onFinish={handleFinishQuiz} onExitQuiz={handleRestart} themeKey={currentTheme} />;
      case 'finished':
        return <Results score={finalScore.score} totalQuestions={finalScore.total} onRestart={handleRestart} onGenerateMore={handleGenerateMore} isGenerating={isGenerating} />;
      case 'selecting':
      default:
        return <ThemeSelector onSelectTheme={handleSelectTheme} />;
    }
  };

  return (
    <main className="bg-[#39355f] min-h-screen w-full flex items-center justify-center p-4 font-sans">
        {errorMessage && <Modal message={errorMessage} onClose={() => setErrorMessage(null)} />}
        <div className="w-full">
            {renderContent()}
        </div>
    </main>
  );
}
