// script.js
const quizForm = document.getElementById('quiz-form');
const resultsContainer = document.getElementById('results');
const scoreContainer = document.getElementById('score');
const justificationsContainer = document.getElementById('justifications');

const correctAnswers = {
  q1: 'c',
  q2: 'a',
  q3: 'a',
  q4: 'd',
  q5: 'c',
  q6: 'b',
  q7: 'e',
  q8: 'b',
  q9: 'b',
  q10: 'b',
  q11: 'b',
  q12: 'b',
  q13: 'b',
  q14: 'c',
  q15: 'b'
};

const justifications = {
  q1: {
    a: "Incorreto. Amônia é tóxica e excretada por animais aquáticos.",
    b: "Incorreto. Ureia é menos tóxica que a amônia e excretada por mamíferos.",
    c: "Correto! O ácido úrico é o menos tóxico e menos solúvel em água, sendo excretado por aves, répteis e alguns insetos.",
    d: "Incorreto. A creatinina é um produto do metabolismo muscular, excretado na urina.",
    e: "Incorreto. A alantoína é um produto da degradação do ácido úrico, excretado por alguns mamíferos."
  },
  q2: {
    a: "Correto! O túbulo contorcido proximal é o principal local de reabsorção de água, glicose, aminoácidos e íons.",
    b: "Incorreto. A seta número 1 geralmente indica a arteríola aferente, que leva sangue para o glomérulo.",
    c: "Incorreto. A absorção de água e outras substâncias ocorre principalmente no túbulo contorcido proximal.",
    d: "Incorreto. A seta número 4 geralmente indica a cápsula de Bowman, que envolve o glomérulo.",
    e: "Incorreto. A alça de Henle é responsável pela reabsorção de água e concentração da urina, mas não é o principal local de reabsorção."
  },
  q3: {
    a: "Correto! A filtração glomerular, a reabsorção tubular e a secreção tubular são os três processos básicos na formação da urina.",
    b: "Incorreto. Digestão, absorção e excreção são processos relacionados ao sistema digestório, não ao urinário.",
    c: "Incorreto. Ventilação, perfusão e difusão são processos relacionados ao sistema respiratório, não ao urinário.",
    d: "Incorreto. Síntese, armazenamento e liberação de hormônios são funções do sistema endócrino.",
    e: "Incorreto. Transporte, metabolismo e excreção de nutrientes são processos que ocorrem em vários sistemas, incluindo o digestório e o urinário."
  },
  q4: {
    a: "Incorreto. A Cápsula de Bowman coleta o filtrado glomerular.",
    b: "Incorreto. O glomérulo é responsável pela filtração do sangue.",
    c: "Incorreto. A alça de Henle participa da concentração da urina.",
    d: "Correto! Os túbulos renais são responsáveis pela reabsorção de água e outras substâncias do filtrado glomerular de volta para a corrente sanguínea.",
    e: "Incorreto. A uretra é o canal que conduz a urina da bexiga para o exterior do corpo."
  },
  q5: {
    a: "Incorreto. O ADH diminui a excreção de água na urina, promovendo a reabsorção de água nos túbulos renais.",
    b: "Incorreto. O ADH aumenta a reabsorção de água nos rins, concentrando a urina e conservando água no corpo.",
    c: "Correto! O ADH, ou hormônio antidiurético, atua nos rins para aumentar a reabsorção de água, concentrando a urina e conservando água no corpo.",
    d: "Incorreto. A estimulação da sede é primariamente regulada pelo centro da sede no hipotálamo, que responde a alterações na osmolaridade do sangue.",
    e: "Incorreto. A regulação da pressão arterial é um processo complexo que envolve vários sistemas, incluindo o sistema renina-angiotensina-aldosterona."
  },
  q6: {
    a: "Incorreto. O TSH (hormônio estimulante da tireoide) estimula a tireoide a produzir hormônios tireoidianos.",
    b: "Correto! O ACTH (hormônio adrenocorticotrófico) estimula o córtex adrenal a produzir cortisol, um hormônio importante na resposta ao estresse e na regulação do metabolismo.",
    c: "Incorreto. O GH (hormônio do crescimento) estimula o crescimento e o desenvolvimento de vários tecidos.",
    d: "Incorreto. O FSH (hormônio folículo-estimulante) estimula o desenvolvimento dos folículos ovarianos nas fêmeas e a produção de espermatozoides nos machos.",
    e: "Incorreto. O LH (hormônio luteinizante) induz a ovulação nas fêmeas e a produção de testosterona nos machos."
  },
  q7: {
    a: "Correto. Os hormônios T3 e T4, produzidos pela tireoide, são essenciais para o metabolismo, crescimento e desenvolvimento.",
    b: "Correto. O TSH, produzido pela adeno-hipófise, estimula a tireoide a produzir T3 e T4.",
    c: "Correto. O hipotireoidismo é caracterizado pela produção insuficiente de hormônios tireoidianos.",
    d: "Correto. O hipertireoidismo é caracterizado pela produção excessiva de hormônios tireoidianos.",
    e: "Incorreto. A superprodução dos hormônios da tireoide causa hipertireoidismo, enquanto a subprodução causa hipotireoidismo."
  },
  q8: {
    a: "Incorreto. A proximidade dos testículos ao corpo aumentaria a temperatura testicular, o que é prejudicial para a produção de espermatozoides.",
    b: "Correto! O músculo cremaster, localizado no cordão espermático, contrai para elevar os testículos em direção ao corpo quando a temperatura externa é fria e relaxa para baixá-los quando a temperatura externa é quente, ajudando a manter a temperatura testicular ideal para a espermatogênese.",
    c: "Incorreto. Os testículos são altamente vascularizados, recebendo um suprimento sanguíneo abundante que é essencial para a termorregulação e a produção de espermatozoides.",
    d: "Incorreto. A produção de testosterona é importante para a espermatogênese, mas não está diretamente envolvida na termorregulação testicular.",
    e: "Incorreto. A espessura da pele escrotal é importante para a proteção dos testículos, mas não é o principal fator na termorregulação."
  },
  q9: {
    a: "Incorreto. O FSH (hormônio folículo-estimulante) estimula o desenvolvimento dos folículos ovarianos, mas não induz a ovulação diretamente.",
    b: "Correto! O LH (hormônio luteinizante) é responsável por induzir a ovulação, o processo de liberação do óvulo maduro do folículo ovariano.",
    c: "Incorreto. A progesterona é produzida pelo corpo lúteo após a ovulação e prepara o útero para a implantação do embrião.",
    d: "Incorreto. O estrogênio é produzido pelos folículos ovarianos em desenvolvimento e estimula o crescimento do endométrio.",
    e: "Incorreto. A prolactina é produzida pela adeno-hipófise e estimula a produção de leite pelas glândulas mamárias."
  },
  q10: {
    a: "Incorreto. O rompimento do folículo maduro é induzido pelo LH, não pelo FSH.",
    b: "Correto! O FSH (hormônio folículo-estimulante) estimula o crescimento e desenvolvimento dos folículos ovarianos, que contêm os óvulos.",
    c: "Incorreto. A formação do corpo lúteo é estimulada pelo LH após a ovulação.",
    d: "Incorreto. O FSH estimula a produção de estrogênio pelos folículos ovarianos.",
    e: "Incorreto. A progesterona é produzida pelo corpo lúteo após a ovulação."
  },
  q11: {
    a: "Incorreto. O ELISA pode ser usado para detectar antígenos, mas o ensaio imunoenzimático indireto é especificamente projetado para detectar anticorpos.",
    b: "Correto! O ensaio imunoenzimático indireto (ELISA) é usado para detectar anticorpos no soro do paciente, geralmente para diagnosticar infecções ou doenças autoimunes.",
    c: "Incorreto. O cultivo de microrganismos em meio de cultura é uma técnica de microbiologia, não relacionada ao ELISA.",
    d: "Incorreto. A análise da composição química do sangue é realizada por outros métodos laboratoriais, como hemograma e testes bioquímicos.",
    e: "Incorreto. A quantificação de hormônios no sangue é realizada por ensaios hormonais específicos, como radioimunoensaio (RIA) e quimioluminescência."
  },
  q12: {
    a: "Incorreto. Os espermatozoides são produzidos nos túbulos seminíferos dos testículos.",
    b: "Correto! O epidídimo é uma estrutura longa e enovelada localizada na parte posterior do testículo, onde os espermatozoides são armazenados e maturados, adquirindo motilidade e capacidade de fertilização.",
    c: "Incorreto. Os ductos deferentes transportam os espermatozoides do epidídimo para a uretra durante a ejaculação.",
    d: "Incorreto. A testosterona é produzida pelas células de Leydig, localizadas nos testículos, entre os túbulos seminíferos.",
    e: "Incorreto. As glândulas acessórias, como a próstata e as vesículas seminais, são responsáveis por secretar fluidos que compõem o sêmen."
  },
  q13: {
    a: "Incorreto. O ADH (hormônio antidiurético) atua nos rins para regular o equilíbrio hídrico.",
    b: "Correto! A ocitocina, produzida pela neuro-hipófise, estimula a contração do útero durante o parto e a ejeção do leite durante a amamentação.",
    c: "Incorreto. A prolactina, produzida pela adeno-hipófise, estimula a produção de leite pelas glândulas mamárias.",
    d: "Incorreto. O GH (hormônio do crescimento) é produzido pela adeno-hipófise e estimula o crescimento e o desenvolvimento de vários tecidos.",
    e: "Incorreto. O TSH (hormônio estimulante da tireoide) é produzido pela adeno-hipófise e estimula a tireoide a produzir hormônios tireoidianos."
  },
  q14: {
    a: "Incorreto. Um feedback positivo amplifica a resposta a um estímulo, levando a um ciclo de aumento contínuo.",
    b: "Incorreto. Um feedback negativo não inverte a resposta, mas a regula, trazendo o sistema de volta ao equilíbrio.",
    c: "Correto! Um feedback negativo é um mecanismo de regulação em que a resposta a um estímulo reduz ou interrompe o estímulo inicial, mantendo a homeostase.",
    d: "Incorreto. Um feedback negativo altera a resposta a um estímulo, reduzindo-a ou interrompendo-a.",
    e: "Incorreto. Um feedback positivo acelera a resposta a um estímulo."
  },
  q15: {
    a: "Incorreto. A secretina é produzida no duodeno e estimula a secreção de bicarbonato pelo pâncreas.",
    b: "Correto! A gastrina é produzida no estômago e estimula a secreção de suco gástrico, que contém ácido clorídrico e enzimas digestivas.",
    c: "Incorreto. A colecistoquinina é produzida no duodeno e estimula a contração da vesícula biliar e a liberação de enzimas pancreáticas.",
    d: "Incorreto. A pepsina é uma enzima digestiva que atua no estômago, mas não é um hormônio.",
    e: "Incorreto. A tripsina é uma enzima digestiva produzida pelo pâncreas e atua no intestino delgado."
  }
};

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = 0;
  const userAnswers = {};

  for (const element of quizForm.elements) {
    if (element.type === 'radio' && element.checked) {
      userAnswers[element.name] = element.value;
    }
  }

  justificationsContainer.innerHTML = '';

  for (const question in correctAnswers) {
    const userAnswer = userAnswers[question];
    const isCorrect = userAnswer === correctAnswers[question];

    if (isCorrect) {
      score++;
    }

    const justification = justifications[question][userAnswer];
    const justificationElement = document.createElement('p');
    justificationElement.innerHTML = `<strong>Questão ${parseInt(question.substring(1))}:</strong> ${justification}`;
    justificationsContainer.appendChild(justificationElement);
  }

  resultsContainer.style.display = 'block';
  scoreContainer.textContent = `Você acertou ${score} de ${Object.keys(correctAnswers).length} questões.`;
});