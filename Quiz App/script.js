const question = [
    {
        "que": "which of the following is a markup language?",
        "a":"HTML",
        "b":"CSS",
        "c":"javaScript",
        "d":"PHP",
        "Correct": "a"
    },
    {
        "que": "what does HTML stands for ?",
        "a":"Hyper Tag Markup Language",
        "b":"Hyper Text Markup Language",
        "c":"Hyperlinks Text Mark Language",
        "d":"Hyperlinking Text Marking Language",
        "Correct": "b"
    },
    {
        "que":"The web is based on",
        "a":"Images",
        "b":"Text",
        "c":"Information",
        "d":"HTML",
        "Correct":"d"
    }
]

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const data = question[index]
const queBox = document.getElementById("queBox") 
const option = document.querySelectorAll(".option")
const loadQuestion = ()=>{

    if(index === total){
        return endQuiz()
    }
    reset();
    const data = question[index]
    queBox.innerText = `${index+1}) ${data.que}`;
    option[0].nextElementSibling.innerText=data.a;
    option[1].nextElementSibling.innerText=data.b;
    option[2].nextElementSibling.innerText=data.c;
    option[3].nextElementSibling.innerText=data.d;

    
}


const submit = document.querySelector(".btn")

submit.addEventListener("click",()=>{
    const data = question[index]
    
    const ans = ()=>{
        let answer;
        option.forEach(
            (input)=>{
                if(input.checked){
                    answer = input.value;
                }
            }
            )
            return answer;
        }
        // console.log(ans(),data.Correct);
        if(ans() === data.Correct){
            right++;
        }else{
            wrong++;
        }
        index++;
        loadQuestion();
    })
    
const reset = ()=>{
    option.forEach(
        (input)=>{
            input.checked=false
            } 
    )}


const endQuiz=()=>{
    document.getElementById("box").innerHTML= `
    <div style="text-align:center">
    <h3> Thank you for playing the Quiz !! </h3>
    <h2> ${right}/${total} are Correct...</h2>
    </div>`
}


loadQuestion();
