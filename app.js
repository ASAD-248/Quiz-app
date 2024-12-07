
var mainPage = document.getElementById('SectionMainpage')
var LoginForm = document.getElementById('LoginForm')
var SignUp = document.getElementById('SignUp')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var loginEmail = document.getElementById('loginEmail')
var loginPassword = document.getElementById('loginPassword')





function SectionDisplay(){

    mainPage.classList.add('d-none')
    LoginForm.classList.remove('d-none')
}


function SectionDisplay2(){

    mainPage.classList.add('d-none')
    SignUp.classList.remove('d-none')

}


function displayLogin(){

    var uservalue = document.getElementById('userName')
    localStorage.setItem("userName", uservalue)

    signupEmail.value
    signupPassword.value

   
    if ( !signupEmail.value && !signupPassword.value){

        Swal.fire({
            icon: "error",
            title: "Empty Field !",
          });
    }
    else{
    SignUp.classList.add('d-none')
    LoginForm.classList.remove('d-none')
    }

}



function loginNewpage(){

   
    loginEmail.value
    loginPassword.value


    if(  loginEmail !='' && loginPassword != '' && signupEmail.value === loginEmail.value && signupPassword.value === loginPassword.value ){
        
        window.location = 'home.html';
    }


    else{
        Swal.fire({
            icon: "error",
            title: "Invalid Credientials",
            text: "Your password or email is wrong",
          });
    }

}

function QuizPage(){

    window.location = 'questions.html'
}

var htmlQuiz = [
    {
      question: "What does API stand for?",
      option1: "Application Programming Interface",
      option2: "Advanced Programming Integration",
      option3: "Automated Protocol Interaction",
      option4: "Application Process Integration",
      answer: "Application Programming Interface",
    },
    {
      question: "Which HTTP method is used to retrieve data?",
      option1: "POST",
      option2: "GET",
      option3: "PUT",
      option4: "DELETE",
      answer: "GET",
    },
    // {
    //   question: "Which programming language is primarily used for backend development?",
    //   option1: "HTML",
    //   option2: "CSS",
    //   option3: "JavaScript",
    //   option4: "Node.js",
    //   answer: "Node.js",
    // },
    // {
    //   question: "What is the purpose of a database in web development?",
    //   option1: "To host a website",
    //   option2: "To manage and store data",
    //   option3: "To style web pages",
    //   option4: "To create animations",
    //   answer: "To manage and store data",
    // },
    // {
    //   question: "Which of the following is a frontend framework?",
    //   option1: "Django",
    //   option2: "Laravel",
    //   option3: "React",
    //   option4: "Flask",
    //   answer: "React",
    // },

   
  ];
   
  
  var question = document.getElementById("question");

//   LABELS
  var label1 = document.getElementById("label1");
  var label2 = document.getElementById("label2");
  var label3 = document.getElementById("label3");
  var label4 = document.getElementById("label4");
  var label5 = document.getElementById("label5");


//   OPTIONS
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var option4 = document.getElementById("option4");
  var option5 = document.getElementById("option5");

  var quizOptions = document.getElementsByClassName('quizOption')

  // var quizOptions = document.getElementsByName("quizOption");
  // var quizWindow = document.getElementById('quizWindow')
  // var resultWindow = document.getElementById('resultWindow')
  // var announcement = document.getElementById('announce')
  // var percentageSpace = document.getElementById('percentageShow')
  // var totalQuestions = document.getElementById('totalQue')
  // var correctQuestion = document.getElementById('correctQue')

  
  var questionCount = 0;
  var score = 0;

function next(){

  for(var i=0; i < quizOptions.length ; i++){
      if(quizOptions[i].checked){
        console.log(quizOptions[i].value)
      }
      if(quizOptions[i].value === htmlQuiz[questionCount].answer){
        score++
        questionCount++
        console.log(score,questionCount)
      }
  }


  console.log(questionCount);
}

  // function renderQuestion() {
  //   // question
  //   question.innerHTML = htmlQuiz[questionCount].question;
  //   // labels , that shows in DOM
  //   label1.innerHTML = htmlQuiz[questionCount].option1;
  //   label2.innerHTML = htmlQuiz[questionCount].option2;
  //   label3.innerHTML = htmlQuiz[questionCount].option3;
  //   label4.innerHTML = htmlQuiz[questionCount].option4;
  //   label5.innerHTML = htmlQuiz[questionCount].option5;
  //   // Radio Values
  //   option1.value = htmlQuiz[questionCount].option1;
  //   option2.value = htmlQuiz[questionCount].option2;
  //   option3.value = htmlQuiz[questionCount].option3;
  //   option4.value = htmlQuiz[questionCount].option4;
  //   option5.value = htmlQuiz[questionCount].option5;

  // }
  // function deSelect() {
  //   for (var i = 0; i < quizOptions.length; i++) {
  //     quizOptions[i].checked = false;
  //   }
  // }


  // function next() {
  //   var radioChecked = false;
  //   for (var i = 0; i < quizOptions.length; i++) {
  //     // If value is checked
  //     if (quizOptions[i].checked) {
  //       radioChecked = true;
  //       // so check that selected option is equal to answer so increment the score
  //       if (quizOptions[i].value === htmlQuiz[questionCount].answer) {
  //         score++;
  //       }
  //     }
  //   }
  //   // if no option selected ( if block )
  //   if (!radioChecked) {
  //     Swal.fire({
  //       title: "No Option Selected",
  //       text: "Please Select Any Option",
  //       icon: "error",
  //     });
  //   } else {
  //     // radio checked = true
  //     if (questionCount < htmlQuiz.length - 1) {
  //       questionCount++;
  //       deSelect();
  //       renderQuestion();
  //     } else {
  //        showResult()
  //     }
  //   }
  // }
  // function showResult() {
  //     quizWindow.style.display = 'none'
  //     resultWindow.style.display = 'block'
  //     var percentage = Math.round(score / htmlQuiz.length * 100)
  //     var resultStatus = ''
  //     if(percentage < 70) {
  //         resultStatus = ' You are Failed ! Better Luck Next Time'
  //         announcement.className = 'redText'
  //     } else {
  //         resultStatus = 'Congratulations ! You are Passed'
  //         announcement.className = 'greenText'
  //     }
  //     announcement.innerHTML = resultStatus
  //     totalQuestions.innerHTML = htmlQuiz.length
  //     correctQuestion.innerHTML = score 
  //     percentageSpace.innerHTML = `Your Percentage is ${percentage} %`
  // }


  // window.onload = renderQuestion();