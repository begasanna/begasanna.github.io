'use strict';

var subtitle = "Тест по программированию";
var questions=[
{
    text: "Какой тег отвечает за перенос строки:",
    answers: ["ol",
          "hr",
          "br"],
    correctAnswer: 2
},
{
    text: "Как разместить блок с заданной шириной по центру:",
    answers: ["float: auto;",
          "margin: 0 auto;",
          "text-align: center;"],
    correctAnswer: 1
},
{
    text: "Какой параметр задает жирность шрифта:",
    answers: ["font-size;",
          "font-bold;",
          "font-weight;"],
    correctAnswer: 2
}
];

 localStorage.setItem('test',JSON.stringify(questions)); //обратила в строку и отправила в хранилище
 var myTest = localStorage.getItem('test'); // достала из хранилища

var objTest = JSON.parse(myTest); // распарсила

var yourAns = new Array;
var score = 0;
function Engine(question, answer) {yourAns[question]=answer;} // сопоставила вопросы и ответы


function Score(){     // создала текст для модального окна


   var answerText = " ";
   for (var i = 0; i < yourAns.length; ++i){
    var num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    if(yourAns[i]!=objTest[i].correctAnswer){
        answerText=answerText+"\n    Правильный ответ: " +
        objTest[i].answers[objTest[i].correctAnswer] + "\n";
      }
        else{
        answerText=answerText+": Верно! \n";
        ++score;
        }
       }
   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

var element = document.createElement('div'); // создала блок для наполения модального окна
element.id = 'box';
element.innerHTML = answerText; // вывела содержимое в модальное окно
var modalContent = document.querySelector('.modal_content');
modalContent.appendChild(element);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}

function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
        }
}
