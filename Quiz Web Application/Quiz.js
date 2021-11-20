// Buttons
let Quizbtn = document.getElementById('StartBtn');
let ContBtn = document.getElementById('my-btns');
let NextQuestion = document.getElementById('NextBtn');
let NextQuestion2 = document.getElementById('NextBtn2');
let NextQuestion3 = document.getElementById('NextBtn3');
let NextQuestion4 = document.getElementById('NextBtn4');
let NextQuestion5 = document.getElementById('NextBtn5');
// Rules
let Rules = document.getElementById('Rules');
//Question 1 info
let Que1Text = document.getElementById('que_text1');
let Que1opt = document.getElementById('option_list1');
//Question 2 info
let Que2Text = document.getElementById('que_text2');
let Que2opt = document.getElementById('option_list2');
//Question 3 info
let Que3Text = document.getElementById('que_text3');
let Que3opt = document.getElementById('option_list3');
//Question 4 info
let Que4Text = document.getElementById('que_text4');
let Que4opt = document.getElementById('option_list4');
//Question 5 info
let Que5Text = document.getElementById('que_text5');
let Que5opt = document.getElementById('option_list5');
//The Results

// Questions Variable storing the answers from users := 
let RightANS = 0;
   let WrongANS = 0;
   let RQ1 = 0;
   let WQ1 = 0;
   let RQ2 = 0;
   let WQ2 = 0;
   let RQ3 = 0;
   let WQ3 = 0;
   let RQ4 = 0;
   let WQ4 = 0;
   let RQ5 = 0;
   let WQ5 = 0;
   let Result;
  
// DataBase Of Pre-Stored Function. The pre-stored value are stored inside a object not ARRAY.
const QueDataBase = {
   Question1: {
      ans : 'Hyperlinks and Text Markup Language'
   },
   Question2: {
      ans: 'The World Wide Web Consortium'
   },
   Question3: {
      ans: 'Cascading Style Sheets'
   },
   Question4: {
      ans: '.Container'
   },
   Question5: {
      ans: '#This is a Comment'
   }
}


 function Quiz(event) {
  
    Quizbtn.style.display = 'none';
    Rules.style.display = 'block';
    ContBtn.style.display = 'block';
    event.preventDefault();
 }


// set time out for the rules which have to be displayed til 5 sec

// when i click on the contine btn i want the user to be redirected towards the q1
// then after wards the q ans will be stored with the users answers
// set up your own data base compare the db with the users db


function ClickedContinueBtn(event) {
   
   ContBtn.style.display = 'none';
   Rules.style.display = 'none';
   Que1Text.style.display = 'block';
   Que1opt.style.display = 'block';
   NextQuestion.style.display = 'block';
   event.preventDefault();
}

// Question 1
function NxT(event) {
   
   let Q1 = document.querySelector('input[name="quiz"]:checked').value;
  if( Q1 === QueDataBase.Question1.ans) {
     RQ1 = RightANS + 1;
     WQ1 = RightANS;

   
  }else {
   WQ1 = WrongANS + 1;
   RQ1 = RightANS;
   

  }
  Que1Text.style.display = 'none';
  Que1opt.style.display = 'none';
  Que2Text.style.display = 'block';
  Que2opt.style.display = 'block';
  NextQuestion.style.display = 'none';
  NextQuestion2.style.display = 'block';
  event.preventDefault();

}
// Question 2

function NxT2(event) {
   
   let Q2 = document.querySelector('input[name="quizz"]:checked').value;
  if( Q2 === QueDataBase.Question2.ans) {
   RQ2 = RQ1 + 1;
   WQ2 = WQ1;
   
}
else {
 WQ2 = WQ1 + 1;
 RQ2 = RQ1;


}
Que1Text.style.display = 'none';
Que1opt.style.display = 'none';
Que2Text.style.display = 'none';
Que2opt.style.display = 'none';
NextQuestion.style.display = 'none';
  NextQuestion2.style.display = 'none';
  NextQuestion3.style.display = 'block';
  Que3Text.style.display = 'block';
  Que3opt.style.display = 'block';
  event.preventDefault();
}

// Question 3

function NxT3(event) {
   
   let Q3 = document.querySelector('input[name="quizzz"]:checked').value;
  if( Q3 === QueDataBase.Question3.ans) {
   RQ3 = RQ2 + 1;
   WQ3 = WQ2;
   console.log(`You gave ${RQ3} correct`);
}
else {
 WQ3 = WQ2 + 1;
 RQ3 = RQ2;
 

}
Que1Text.style.display = 'none';
Que1opt.style.display = 'none';
Que2Text.style.display = 'none';
Que2opt.style.display = 'none';
NextQuestion.style.display = 'none';
  NextQuestion2.style.display = 'none';
  NextQuestion3.style.display = 'none';
  Que3Text.style.display = 'none';
  Que3opt.style.display = 'none';
  NextQuestion4.style.display = 'block';
  Que4Text.style.display = 'block';
  Que4opt.style.display = 'block';
  event.preventDefault();
}

// Question 4

function NxT4(event) {
   
   let Q4 = document.querySelector('input[name="quizzzz"]:checked').value;
  if( Q4 === QueDataBase.Question4.ans) {
   RQ4 = RQ3 + 1;
   WQ4 = WQ3;
   
}
else {
 WQ4 = WQ3 + 1;
 RQ4 = RQ3;


}
Que1Text.style.display = 'none';
Que1opt.style.display = 'none';
Que2Text.style.display = 'none';
Que2opt.style.display = 'none';
NextQuestion.style.display = 'none';
  NextQuestion2.style.display = 'none';
  NextQuestion3.style.display = 'none';
  Que3Text.style.display = 'none';
  Que3opt.style.display = 'none';
  NextQuestion4.style.display = 'none';
  Que4Text.style.display = 'none';
  Que4opt.style.display = 'none';
  NextQuestion5.style.display = 'block';
  Que5Text.style.display = 'block';
  Que5opt.style.display = 'block';
  event.preventDefault();
}

// Question 5
function NxT5(event) { 
   let Q5 = document.querySelector('input[name="quizzzzz"]:checked').value;
document.getElementById('results').innerText = `You did ${WQ5} Correct and ${WQ5} Wrong. Total Questions Number 5`;

  if( Q5 === QueDataBase.Question5.ans) {
   RQ5 = RQ4 + 1;
   WQ5 = WQ4;
   document.getElementById('results').innerText = `You Scored ${RQ5}/5`;

}

else {
 WQ5 = WQ4 + 1;
 RQ5 = RQ4;
 document.getElementById('results').innerText = `You Scored ${RQ5}/5`;
 

}
Que1Text.style.display = 'none';
Que1opt.style.display = 'none';
Que2Text.style.display = 'none';
Que2opt.style.display = 'none';
NextQuestion.style.display = 'none';
  NextQuestion2.style.display = 'none';
  NextQuestion3.style.display = 'none';
  Que3Text.style.display = 'none';
  Que3opt.style.display = 'none';
  NextQuestion4.style.display = 'none';
  Que4Text.style.display = 'none';
  Que4opt.style.display = 'none';
  NextQuestion5.style.display = 'none';
  Que5Text.style.display = 'none';
  Que5opt.style.display = 'none';
  
// Score.style.display = 'block';
  
 event.preventDefault();
 }





// console.log(RQ5)






