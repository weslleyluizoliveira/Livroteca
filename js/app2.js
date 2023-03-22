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
  title: ' Onde fostes primeiramente preparado para serdes Ma&ccedil;om?',
  options: [
      ' Numa sala contigua á loja. ',
      ' No seio de uma  loja de são joão justa, perfeita e regular. ',
      ' No meu cora&ccedil;ão. ',
      ' de A a NA. . ',
],
  answer: 2
},

 {
  title: ' Aonde foste preparado para serdes ma&ccedil;om? ?',
  options: [
      ' No meu cora&ccedil;ão . ',
      ' No seio de uma loja justa, perfeita e regular . ',
      ' Quando o sol estava em seu meridiano . ',
      ' Numa sala Conveniente e contígua á loja . ',
],
  answer: 3
},
 
 {
  title: ' Onde Foste feito Ma&ccedil;om? ?',
  options: [
      ' Numa sala Conveniente e contígua á loja . ',
      ' No seio de uma loja justa, perfeita e regular . ',
      ' Quando o sol estava em seu meridiano . ',
      ' No meu cora&ccedil;ão . ',
],
  answer: 1
},
 
 {
  title: ' Quando Foste Feito Maçom? ?',
  options: [
      ' Quando o sol nasceu . ',
      ' Quando o sol se pôs . ',
      ' Ao Meio dia . ',
      ' Quando o sol estava em seu meridiano . ',
],
  answer: 3
},
 
 {
  title: ' Neste Pais, as lojas franco-Maçonaria funcionam geralmente a noite. Que Explicação podeis dar a isto que, a primeira vista, parece um paradoxo? ?',
  options: [
      ' Sendo a maçonaria um sistema peculiar de moralidade, velado em simbolos e alegorias, os maçons se reunem apenas no escuro. . ',
      ' Girando constantemente a terra sobre o seu eixo em sua orbita ao redor do sol, e achando-se a Fr.M. universalmente espalhada sobre sua superficíe, evidentemente o sol estará sempre em seu meridiano em relação a Fr.M. . ',
      ' Porque a noite é mais fresco . ',
      ' nenhuma das alternativas. . ',
],
  answer: 2
},
 
 {
  title: ' Oque é a Fr.M.? ?',
  options: [
      ' É um sistema peculiar de moralidade, velado em alegorias e ilustrado por simbolos. . ',
      ' É um sistema peculiar de Bons homens com objetivo de tornar los  homens excelentes. . ',
      ' Um sistema peculiar de Homens Justos, honrados e livres.  ',
      ' Uma ceita . ',
],
  answer: 0
},
 
 {
  title: ' Quais os grandes principios que fundamenta a ordem? ?',
  options: [
      ' Homem justos, Honrados e livres. ',
      ' Homens de Maior idade, bom senso rigorosa moral.  ',
      ' SSn ,TTq e PP.  . ',
      ' Amor fraternal, a caridade e a verdade.  ',
],
  answer: 3
},
 
 {
  title: ' Quais são as pessoas diguinas e aptas para ser fitas Maçons? ?',
  options: [
      ' pessoas que fazem muita caridade e ajuda sempre o proximo.  ',
      ' Somente os homens ricos e empresarios de suçesso. ',
      ' Homem justos, honrados e livres, de maior idade, bom senso e rigorosa moral.',
      ' Homens casados e de boa reputação familiar. ',
],
  answer: 2
},
 
 {
  title: ' Como sabeis que sois Maçom? ?',
  options: [
      ' Por Sinais, toques e os pontos perfeitos de minha entrada. . ',
      ' por sinais, toques e palavras. ',
      ' Pela regularidade de minha iniciação, repetidas provas e provações, e a boa vontade de, em qualquer tempo, submeter-me a um exame, quando devidamente convidado. ',
      ' pelo meu certificado de aprendiz maçom. ',
			],
  answer: 2
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

