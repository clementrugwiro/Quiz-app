const quizData =[
    {
        question:"hello what is your name",
        a:"here",
        b:"here1",
        c:"here1",
        d:"here1",
        correct:"a"
    },
    {
        question:"hello what is your age",
        a:"here2",
        b:"here2",
        c:"here2",
        d:"here2",
        correct:"b"
    },
    {
        question:"hello what is your city",
        a:"here3",
        b:"here3",
        c:"here3",
        d:"here3",
        correct:"c"
    },
    {
        question:"hello what is your car",
        a:"here4",
        b:"here4",
        c:"here4",
        d:"here4",
        correct:"d"
    }

]


const report = document.getElementById("head")
const answerEls = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const button = document.getElementById("btn")

let currentQuiz = 0
let marks=0

loadQuiz()
console.log(answerEls)
console.log(quizData.length)
function loadQuiz(){
    deselect()
    const QuizData = quizData[currentQuiz]

    question.innerHTML=QuizData.question
    a_text.innerHTML=QuizData.a
    b_text.innerHTML=QuizData.b
    c_text.innerHTML=QuizData.c
    d_text.innerHTML=QuizData.d

    return false
}

function deselect(){
    answerEls.forEach(answerEl =>  answerEl.checked=false)
}

function getselected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id
            
        }
    })
    return answer
}

button.addEventListener('click',() =>{
  
    const answer= getselected()
    
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            marks++;
        }
        currentQuiz++;
        
        if(currentQuiz< quizData.length){
            loadQuiz()
            console.log("got here")
        }
        else{
            report.innerHTML=`<h2>you answered${marks}/4</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})