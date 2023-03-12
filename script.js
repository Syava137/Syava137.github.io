let labelsForRadioBtns = document.querySelectorAll('.answerForCode')
let questionTitle = document.querySelector('.question') 
let btnSend = document.querySelector('.btnSend')
let progress = document.querySelector('progress')
let inputs = document.querySelectorAll('input')
let points = 0



const questions = [
    {
        numQuestion:'1.', // Номер вопроса
        question:'Что такое логарифмическое уравнение?', //Вопрос
        answers:['это уравнение, в котором отсутствуют неизвестные переменные', 'это уравнение, в котором неизвестные переменные находятся внутри логарифмов', 'это уравнение, в котором неизвестные переменные представлены в виде логарифмов'], //Ответы
        correctAnswer:'2', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
        //Количество вариантов ответов
    },
    {
        numQuestion:'2.', // Номер вопроса
        question:'Действие, которое является обратным логарифмированию по некоторому основанию, - это …', //Вопрос
        answers:['аддитивность', 'потенцирование', 'тривиальность'], //Ответы
        correctAnswer:'2', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'3.', // Номер вопроса
        question:'Что такое логарифм?', //Вопрос
        answers:['не знаю', 'да', 'нет','хорошо'], //Ответы
        correctAnswer:'1', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'', //Тип для инпута
    },
    {
        numQuestion:'4.', // Номер вопроса
        question:'Что такое логарифм?', //Вопрос
        answers:['не знаю', 'да', 'нет','хорошо'], //Ответы
        correctAnswer:'1', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'', //Тип для инпута
    },
    {
        numQuestion:'5.', // Номер вопроса
        question:'Что такое логарифм?', //Вопрос
        answers:['не знаю', 'да', 'нет','хорошо'], //Ответы
        correctAnswer:'1', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'', //Тип для инпута
    },
]

progress.max = questions.length
progress.value = 0

let q = 0

let answ = ()=>{
    if (q<questions.length){
        questionTitle.textContent = questions[q].numQuestion+questions[q].question
        labelsForRadioBtns.forEach((v, i)=>{
            v.textContent = questions[q].answers[i]
        })
        q++
    }
}

answ()

let answer = ""

let forClick = ()=>{
    //Нужно сделать проверку выбрано ли что-то
    //Потом выбрано ли правильное 
    //Начислить очки
    //Всего вопросов и сколько сделать отметить в прогрессе
    // После последнего вопроса показать сколько правильно в процентах и оценку

    inputs.forEach((v, i)=>{
        if (v.checked){
           answer = v.value
        }
    })

    if (answer == questions[q-1].correctAnswer){
        points++
        console.log(questions[q-1].correctAnswer,'Ответ: '+answer)
    }

    answ()

    //Можно сделать если прогресс полный то конец вопросов
    progress.value += 1
    
    if (progress.value == progress.max){
        console.log('Вы прошли тест')
        console.log('Количество баллов: '+points)



        let ocenka = points/questions.length*100

        if (ocenka <30){
            ocenka = 2
        }else if (ocenka < 70){
            ocenka = 3
        }else if (ocenka <90){
            ocenka = 4
        }else{
            ocenka = 5
        }

        console.log('Оценка: '+ocenka)



        btnSend.removeEventListener('click', forClick)
    }
}

btnSend.addEventListener('click', forClick)


