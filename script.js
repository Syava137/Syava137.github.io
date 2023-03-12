
let question_form = document.querySelector('.question-form')

let btnSend = document.querySelector('.btnSend')
let progress = document.querySelector('progress')

let form = document.querySelector('.toChange')
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
        question:'В каких случаях можно убрать логарифмы из уравнения?', //Вопрос
        answers:['если в левой и правой частях уравнения одинаковые основания ', 'если в левой и правой частях уравнения разные степени', 'если в левой и правой частях уравнения имеются одинаковые степени'], //Ответы
        correctAnswer:'1', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'4.', // Номер вопроса
        question:'Какой логарифм называется натуральным?', //Вопрос
        answers:['логарифм по основанию е = 2,71', 'логарифм в основании которого лежит натуральное число', 'логарифм который равен натуральному числу'], //Ответы
        correctAnswer:'1', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'5.', // Номер вопроса
        question:'Логарифм, основание которого равно 10 называется…', //Вопрос
        answers:[], //Ответы
        correctAnswer:'десятичным', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'input', //Тип для инпута
    },
    {
        numQuestion:'6.', // Номер вопроса
        question:'Найдите число А по его логарифму: loga A = 3loga 2 - 2loga 3 + loga 0,125', //Вопрос
        answers:['9', '1/9', '0,9'], //Ответы
        correctAnswer:'2', //Правильный ответ
        resource:'img/7question.png', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'7.', // Номер вопроса
        question:'Сравните выражения: log9 80 и log7 50', //Вопрос
        answers:['log9 80 = log7 50', 'log9 80 < log7 50', 'log9 80 > log7 50'], //Ответы
        correctAnswer:'2', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'8.', // Номер вопроса
        question:'Какое понятие соответствует соотношению: loga b = x <=> a^x = b', //Вопрос
        answers:['основное логарифмическое тождество', 'логарифмическая функция', 'определение логарифма'], //Ответы
        correctAnswer:'3', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'9.', // Номер вопроса
        question:'При каких значениях x и y верно равенство: lg(-x*y)=lg(-x)+lg y', //Вопрос
        answers:['x>0, y>0', 'x>0, y<0', 'x<0,y>0'], //Ответы
        correctAnswer:'3', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'10.', // Номер вопроса
        question:'Преобразуйте логарифмическое выражение log3 18 / 2+log3 2', //Вопрос
        answers:['2', '1', '9'], //Ответы
        correctAnswer:'2', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'11.', // Номер вопроса
        question:'Вычислите 5^(2log5 7)', //Вопрос
        answers:[], //Ответы
        correctAnswer:'49', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'input', //Тип для инпута
    },
    {
        numQuestion:'12.', // Номер вопроса
        question:'Вычислите log5 128 * log2 1/125', //Вопрос
        answers:[], //Ответы
        correctAnswer:'-21', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'input', //Тип для инпута
    },
    {
        numQuestion:'13.', // Номер вопроса
        question:'Выберите правильный ответ log(корень 3) 243', //Вопрос
        answers:['5', '10/3', '10'], //Ответы
        correctAnswer:'3', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'14.', // Номер вопроса
        question:'Укажите промежуток, которому принадлежит значение выражения log7 9,8 + log7 12/35 + log7 12', //Вопрос
        answers:['(-1 ; 1)', '[15/98 ; 43/98]', '(35/15 ; 40/13)'], //Ответы
        correctAnswer:'3', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'radio', //Тип для инпута
    },
    {
        numQuestion:'15.', // Номер вопроса
        question:'Вычислите log2 (x-5) = 3', //Вопрос
        answers:[], //Ответы
        correctAnswer:'13', //Правильный ответ
        resource:'', //Рисунок или что-то такое
        typeForInput:'input', //Тип для инпута
    },
]



progress.max = questions.length
progress.value = 0

let q = 0

let img = document.querySelector('img')


let answ = ()=>{
    let questionTitle = document.querySelector('.question') 
    let labelsForRadioBtns = document.querySelectorAll('.answerForCode')
    if (q<questions.length){
        questionTitle.textContent = questions[q].numQuestion+questions[q].question
        labelsForRadioBtns.forEach((v, i)=>{
            v.textContent = questions[q].answers[i]
        })
        q++
    }
}

let checkInput = () =>{
    if (questions[q].typeForInput == "radio"){
        form.innerHTML = ""
        questions[q].answers.forEach((v, i)=>{
            let divWithRadioAndLabel = document.createElement('div')
            divWithRadioAndLabel.classList.add('answer')
            let radioBtnForDiv = document.createElement('input')
            radioBtnForDiv.setAttribute('type', 'radio')
            radioBtnForDiv.setAttribute('name', 'answer')
            let labelForRadioBtn = document.createElement('label')
            labelForRadioBtn.classList.add('answerForCode')
            radioBtnForDiv.setAttribute('id', `answer${i+1}`)
            radioBtnForDiv.setAttribute('value', i+1)
            labelForRadioBtn.setAttribute('for',`answer${i+1}`)
            divWithRadioAndLabel.append(radioBtnForDiv)
            divWithRadioAndLabel.append(labelForRadioBtn)
            form.append(divWithRadioAndLabel)
        })
    }else if (questions[q].typeForInput == "input"){
        form.innerHTML = "<div class='question'></div> <div class='answer'><input type='text' class='itsInput' placeholder='Введите ответ'></div>"
    }   //Сделать другую проверку если инпут то по функции клик это если радио то по клик другое
}

let checkProgress = ()=>{
    progress.value += 1
    
    if (progress.value == progress.max){

        let ocenka = points/questions.length*100

        if (ocenka <50){
            ocenka = 2
        }else if (ocenka < 70){
            ocenka = 3
        }else if (ocenka <84){
            ocenka = 4
        }else{
            ocenka = 5
        }

        btnSend.removeEventListener('click', forClick)

        question_form.innerHTML = `<div>Вы прошли тест</div> <div>Ваше количество баллов:${points} </div><div>Ваша оценка: ${ocenka}</div><div class='btnRestart'>Пройти заново</div>`
        let btnRestart = document.querySelector('.btnRestart')
        btnRestart.addEventListener('click', ()=>{
            location.reload()
        })
    }
}

let ansIfInp = () => {
    answer = document.querySelector('input').value.toString()
    if (answer == questions[q-1].correctAnswer){
        points++
    }

    answer = ""
}

let ansIfRadio = () => {
    let inputs = document.querySelectorAll('input')
    inputs.forEach((v, i)=>{
        if (v.checked){
           answer = v.value
           v.checked = false
        }
    })

    if (answer == questions[q-1].correctAnswer){
        points++
    }

    answer = ""
}

checkInput()
answ()




//Сделать проверку на инпут или радио




let answer = ""

let forClick = ()=>{
    //Нужно сделать проверку выбрано ли что-то
    //Потом выбрано ли правильное 
    //Начислить очки
    //Всего вопросов и сколько сделать отметить в прогрессе
    // После последнего вопроса показать сколько правильно в процентах и оценку

    //img.setAttribute('src', questions[q].resource)
   

    if (questions[q-1].typeForInput == 'input'){
        ansIfInp()
    }else if (questions[q-1].typeForInput == 'radio'){
        ansIfRadio()
    }

    checkProgress()

    if (q<questions.length){
        checkInput()
        answ()
    }


    //Можно сделать если прогресс полный то конец вопросов
    
}

btnSend.addEventListener('click', forClick)


