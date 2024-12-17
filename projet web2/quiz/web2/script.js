const startBtn = document.querySelector('.start-btn');
const startBtnf = document.querySelector('.start-btnf')
const popupInfo = document.querySelector('.popup-info');
const popupInfof = document.querySelector('.popup-infof');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const continueBtnf = document.querySelector('.continue-btnf');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');



startBtn.onclick = () => {
    quizSection.classList.add('active');
    nextBtnf.classList.remove('active')
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1);
    headerScore();
}
startBtnf.onclick = () => {
    
    quizSection.classList.add('active');
    nextBtn.classList.remove('active')
    popupInfof.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestionsf(0);
    questionCounterf(1);
    headerScore();
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1);
    headerScoref();
}
continueBtnf.onclick = () => {
    quizSection.classList.add('active');
    popupInfof.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    const nextButton = quizSection.querySelector('.next-btn');
    // Locate and remove the button
    nextBtn.remove()
    if (nextButton) {
        console.log("Found next-btn:", nextButton); // Debug log
        nextButton.remove(); // Remove the button from the DOM
    } else {
        console.log("next-btn not found inside quizSection.");
    }

    showQuestionsf(0);
    questionCounterf(1);
    headerScore();
};


//tryAgainBtn.onclick = () => {
   // quizBox.classList.add('active');
   // nextBtn.classList.remove('active');
   // resultBox.classList.remove('active');
   // questionCount = 0;
   // questionNumb = 1;
  //  userScore = 0;
  //  showQuestions(questionCount);
  //  questionCounter(questionNumb);
  //  headerScore();
//}
goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    headerScore();
}
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
const nextBtn = document.querySelector('.next-btn');
const nextBtnf=document.querySelector('.next-btnf');
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1){
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active')
    }
    else{
       
       showResultBox();
    }
    
}
nextBtnf.onclick = () => {
    if (questionCount < questionsf.length - 1){
       questionCount++;
        showQuestionsf(questionCount);
        questionNumb++;
        questionCounterf(questionNumb);

        nextBtnf.classList.remove('active')
    }
    else{
        showResultBox();
    }
    
}
const optionList = document.querySelector('.option-list');

//getting questions and options from array  
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    const quizImage = document.querySelector(".quiz-image");
    const quizVedio = document.querySelector(".quiz-vedio");
    const quizAudio = document.querySelector(".quiz-audio");


    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;  
    if(questions[index].image.endsWith(".jpg") || questions[index].image.endsWith(".png")){
    quizImage.src = questions[index].image; // Ajouter l'image
    quizImage.style.display = "block";
   
    quizVedio.src ="";
    quizAudio.src ="";

}
    if(questions[index].image.endsWith(".mp4") ){
        quizVedio.src = questions[index].image; // Ajouter l'image
        quizVedio.style.display = "block";
        quizImage.src ="";
        quizAudio.src ="";}
        if(questions[index].image.endsWith(".mp3") ){
            quizAudio.src = questions[index].image; // Ajouter l'image
            quizAudio.style.display = "block";
            quizImage.src ="";
            quizVedio.src ="";}

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
     <div class="option"><span>${questions[index].options[1]}</span></div>
     <div class="option"><span>${questions[index].options[2]}</span></div>
     <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}
function showQuestionsf(index) {
    const questionText = document.querySelector('.question-text');
    const quizImage = document.querySelector(".quiz-image");
    const quizVedio = document.querySelector(".quiz-vedio");
    const quizAudio = document.querySelector(".quiz-audio");
    questionText.textContent = `${questionsf[index].numb}. ${questionsf[index].question}`;  
    if(questionsf[index].image.endsWith(".jpg") || questionsf[index].image.endsWith(".png")){
    quizImage.src = questionsf[index].image; // Ajouter l'image
    quizImage.style.display = "block";
    quizVedio.src ="";
    quizAudio.src ="";
}
    if(questionsf[index].image.endsWith(".mp4") ){
        quizVedio.src = questionsf[index].image; // Ajouter l'image
        quizVedio.style.display = "block";
        quizImage.src ="";
        quizAudio.src ="";}
        if(questionsf[index].image.endsWith(".mp3") ){
            quizAudio.src = questionsf[index].image; // Ajouter l'image
            quizAudio.style.display = "block";
            quizImage.src ="";
            quizVedio.src ="";}

    let optionTag = `<div class="option"><span>${questionsf[index].options[0]}</span></div>
     <div class="option"><span>${questionsf[index].options[1]}</span></div>
     <div class="option"><span>${questionsf[index].options[2]}</span></div>
     <div class="option"><span>${questionsf[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelectedf(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    if (userAnswer == correctAnswer) {
        
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        
        answer.classList.add('incorrect');
        // if answer incorrect autoselected correct answer
        for (let i = 0; i < allOptions; i++) {
           if (optionList.children[i].textContent == correctAnswer) {
               optionList.children[i].setAttribute('class', 'option correct');
           } 
        }
    }
    // if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function optionSelectedf(answerf) {
    let userAnswerf = answerf.textContent;
    let correctAnswer = questionsf[questionCount].answerf;
    let allOptions = optionList.children.length;
    if (userAnswerf == correctAnswer) {
        
        answerf.classList.add('correct');
        userScore += 1;
        headerScoref();
    }
    else {
        
        answerf.classList.add('incorrect');
        // if answer incorrect autoselected correct answer
        for (let i = 0; i < allOptions; i++) {
           if (optionList.children[i].textContent == correctAnswer) {
               optionList.children[i].setAttribute('class', 'option correct');
           } 
        }
    }
    // if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtnf.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`
}
function questionCounterf(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questionsf.length} Questions`
}
 function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
 }
 function headerScoref() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questionsf.length} `;
 }   
 function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        //console.log(progressStartValue);
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg )`
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
 }
 function showResultBoxf() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questionsf.length}`;
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questionsf.length) * 100;
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        //console.log(progressStartValue);
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg )`
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
 }
 