const questionContainer = document.querySelector('.quiz')
const questionTitle = document.querySelector('.question-title')
const questionOptionsContainer = document.querySelector('.question-options')
const questionCurrent = document.querySelector('.current-question')
const questionRemainingSeconds = document.querySelector('.question-remaining span')

const scoreContainer = document.querySelector('.score')
const scoreText = document.querySelector('.score-main span')
const scoreBigText = document.querySelector('.score-main')
const scoreCongrats = document.querySelector('.score-congrats')
const scoreButton = document.querySelector('.score-button')
const homeButton = document.querySelector('.home')

let questions = [
    {
        title: 'Onde fostes primeiramente preparado para ser Maçom?',
        options: [
            'No meu Coração.',
            'Em uma Loja Justa e Perfeita',
            'Onde Se reune 7 ou mais Irmãos',
            'Na potencia Glemb'
        ],
        answer: 0
    },
    {
        title: 'Onde em seguida?',
        options: [
            'New Orleans Pelicans',
            'Num belo Templo',
            'Numa sala conveniente e contigua á Loja.',
            'Chicago Bulls'
        ],
        answer: 2
    },
    {
        title: 'Descrevei a maneira pela qual fostes preparado?',
        options: [
            
            'Numa sala Conveniente e contígua á loja',
			'Fui Despojado de meus metais e vendaram-me os olhos; desnudaram-me o braço direito, e...',
            'Ao Meio dia',
            'Porque a noite é mais fresco'
        ],
        answer: 1
    },
    {
        title: 'Onde fostes feito Maçom?',
        options: [
            'Stephen Curry',            
            'Giannis Antetokounmpo',
			'No seio de uma Loja Justa, Perfeita e Regular.',
            'Kawhi Leonard',
        ],
        answer: 2
    },
	{
        title: 'E Quando?',
        options: [
            'Quando o Sol estava em seu meridiano.',            
            'Varios Irmãos',
			'Ao Meio dia',
            'Quando o sol nasceu',
        ],
        answer: 0
    },
	{
        title: 'Neste País, as Lojas de Franco-Maçonaria funcionam geralmente á noite. Que explicação podereis dar a isto, que, á primeira vista, parece um paradoxo?',
        options: [
            'Stephen Curry',            
            'Varios Irmãos',
			'Um sistema peculiar de Homens Justos, honrados e livres.',
            'Girando constantemente a Terra sobre o seu eixo em sua ôrbita ao redor do Sol, e achando-se a Fr.M. universalmente espalhada sobre sua superfície, evidentemente o Sol está sempre em seu meridiano em relação á Fr.M..',
        ],
        answer: 3
    },
	{
        title: 'O que é a Fr.M.?',
        options: [
            'nenhuma das alternativas.',            
            'Varios Irmãos',
			'Um Maçom',
            'É um sistema peculiar de moralidade, velado em alegorias e ilustrado por símbolos.',
        ],
        answer: 3
    },
	{
        title: 'Indicai os grandes principios em que se fundamenta a Ordem?',
        options: [
            'Justiça, paz e Amor.',
			'O Amor Fraternal, a Caridade e a Verdade.',            
            'Varios Irmãos',
			'Um Maçom',
            
        ],
        answer: 1
    },
	{
        title: 'Quais são as pessoas dignas e aptas para serem feitas Maçons?',
        options: [
            'Homens casados e de boa reputação familiar.',            
            'Apenas por indicação.',
			'Somente os homens ricos e empresarios de suçesso.',
            'Homens justos, honrados e livres; de maior idade, bom senso e rigorosa moral.',
        ],
        answer: 3
    },
	{
        title: 'Como sabeis que sois Maçom?',
        options: [
            'Pelas Amizade, Ser digno e fiel a Ordem.',            
            'Vestimentas e Adornos Simbológicos',			
            'Pela regulariedade de minha Iniciação, repetidas provas e provações, e a boa vontade de, em qualquer tempo, submeter-me a um exame, quando devidamente convidado.',
			'pessoas que fazem muita caridade e ajuda sempre o proximo.',
        ],
        answer: 2
    },
	{
        title: 'Como provais aos outros serdes Maçom?',
        options: [
            'Por Sinais, Toques e os Passos Perfeitos de minha Entrada.',
			'Amor fraternal, a caridade e a verdade',            
            'Varios Irmãos',
			'Vestimentas e Adornos Simbológicos',
            
        ],
        answer: 0
    }
	
]

let currentQuestion = 0
let currentScore = 0

const showScore = score => { 
    let counter = 0
    let timer = setInterval(() => {
        counter++
        if (counter === score) {
            clearInterval(timer)
            return
        }

        scoreText.textContent = `${counter + 1}%`
    }, 10);
}

const endQuiz = () => {
    questionContainer.style.display = 'none'
    scoreContainer.style.display = 'flex'

    if (currentScore === 0) {
        scoreCongrats.textContent = 'Valeu pela tentativa!'
        scoreBigText.textContent = `Você não acertou nenhuma questão. Tente denovo =)`
        return
    }

    showScore(currentScore)
}

const getOptionsTemplate = options => {
    let optionsTemplate = ''
    options.forEach((option, index) => {
        optionsTemplate += `<div data-answer="${index}" class="option">${option}</div>`
    })

    return optionsTemplate
}
//
//let meuFloat = 10.00;

const setUserScore = (answer, userAnswer) => {	 
    if (answer === userAnswer) {
        currentScore += 10.00 //meuFloat  //Valor das respostas Certas
    }
}

const resetQuiz = () => {
    currentQuestion = 0
    currentScore = 0
    showQuestion()
    questionContainer.style.display = 'block'
}





const showQuestion = () => {
    if (questions[currentQuestion]) {
        const question = questions[currentQuestion]
        const { title, options, answer } = question

        scoreContainer.style.display = 'none'
        
        questionCurrent.textContent = `Questão ${currentQuestion + 1} de ${questions.length}`
        questionTitle.innerHTML = title
        questionOptionsContainer.innerHTML = getOptionsTemplate(options)

        let counter = 30 // Tempo do formulario
        let timer = setInterval(() => {
            counter--
            questionRemainingSeconds.textContent = `Faltam ${counter} segundos para o tempo acabar`
    
            if (counter === 0) {
                clearInterval(timer)
                currentQuestion++
                showQuestion()
            }
        }, 1000);

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', event => {
                const userAnswer = Number(event.target.dataset.answer)

                setUserScore(answer, userAnswer)
                currentQuestion++
                showQuestion()
                clearInterval(timer)
            })
        })
    } else {
        endQuiz()
    }
}

showQuestion()

scoreButton.addEventListener('click', resetQuiz)

