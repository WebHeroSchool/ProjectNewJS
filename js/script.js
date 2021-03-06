const slides = document.getElementById ('slides');

const question1 = {
	question: 'Вопрос какой-то',
	answer1:'b',
	answer2:'c',
	answer3:'d',
	answer4: 'a'
};

const question2 = {
	question:'Другой вопрос',
	answer1:'f',
	answer2:'g',
	answer3:'h',
	answer4: 'b'
};

const question3 = {
	question:'Ещё вопрос',
	answer1:'s',
	answer2:'m',
	answer3:'n',
	answer4: 'c'
};

const question4 = {
	question:'Ещё один вопрос',
	answer1:'t',
	answer2:'y',
	answer3:'u',
	answer4: 'd'
};

let q = [question1,question2,question3,question4];

let questions = document.getElementById('question'); 

let answers1 = document.getElementById ('answer1');
let answers2 = document.getElementById ('answer2');
let answers3 = document.getElementById ('answer3');
let answers4 = document.getElementById ('answer4');


let num = 0;


let userAnswer = [0,0,0,0];


const chooseButton1 = document.getElementById('choose1');
const chooseButton2 = document.getElementById('choose2');
const chooseButton3 = document.getElementById('choose3');
const chooseButton4 = document.getElementById('choose4');

let button = [chooseButton1,chooseButton2,chooseButton3,chooseButton4];

const nextButton = document.getElementById('next');
const previosButton = document.getElementById('previos');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');

nextButton.style.display = 'none';
previosButton.style.display = 'none';
chooseButton1.style.display = 'none';
chooseButton2.style.display = 'none';
chooseButton3.style.display = 'none';
chooseButton4.style.display = 'none';
submitButton.style.display = 'none';

startButton.addEventListener('click',() => {
	event.preventDefault();
	startGame();
})

let form = document.querySelector('.form');
let name = form.elements['name'];

form.addEventListener('submit',(event) => {
    console.log(name.value);
    let regex =/^[A-Z]{1}[a-z]{2,10}$/;
    name.classList.remove('error'); 

    if (!regex.test(name.value)){
    	event.preventDefault();
    	console.log('error');
    	name.classList.add('error');

    	let error = document.createElement('div');
    	error.className = 'error_block';
    	error.style.color = 'red';
    	error.innerHTML = 'Укажите имя правильно';
    	name.parentElement.insertBefore(error,name);
    }
})



function startGame() {

    form.style.display = 'none';
    startButton.style.display = 'none';
	nextButton.style.display = 'block';
    previosButton.style.display = 'block';
    chooseButton1.style.display = 'block';
    chooseButton2.style.display = 'block';
    chooseButton3.style.display = 'block';
    chooseButton4.style.display = 'block';
    submitButton.style.display = 'block';


chooseButton1.addEventListener('click',() => {
	event.preventDefault();
	userAnswer[num] = q[num].answer1;

	if (userAnswer[num] === correctAnswer[num]) {
        answer1.style.color = 'Lightgreen';
	    } else {
	    	answer1.style.color = 'red';
	};

	noneButton()
});



chooseButton2.addEventListener('click',() => {
	event.preventDefault();
	userAnswer[num] = q[num].answer2;

	if (userAnswer[num] === correctAnswer[num]) {
        answer2.style.color = 'Lightgreen';
	    } else {
	    	answer2.style.color = 'red';
	};

	noneButton();
});



chooseButton3.addEventListener('click',() => {
	event.preventDefault();
	userAnswer[num] = q[num].answer3;
	 
    if (userAnswer[num] === correctAnswer[num]) {
        answer3.style.color = 'Lightgreen';
	    } else {
	    	answer3.style.color = 'red';
	};

	noneButton();	
});



chooseButton4.addEventListener('click',() => {
	event.preventDefault();
	userAnswer[num] = q[num].answer4;
	
    if (userAnswer[num] === correctAnswer[num]) {
        answer4.style.color = 'Lightgreen';
	    } else {
	    	answer4.style.color = 'red';
	};

	noneButton();
});

buildQuiz =(q) => {   
    if (num === q.length) {
        num = 0;
    };

    questions.innerHTML = q[num].question;
    answers1.innerHTML = q[num].answer1;
    answers2.innerHTML = q[num].answer2; 
    answers3.innerHTML = q[num].answer3;
    answers4.innerHTML = q[num].answer4;
};

let numSlide = 0 ;
let newNumSlide = 0;



nextButton.addEventListener('click',() => {
	event.preventDefault();
	num++;
	newNumSlide=numSlide+1;
	showSlide();
	onButton();

});



previosButton.addEventListener('click',() => {
	event.preventDefault();
	newNumSlide=numSlide-1;
	num--; 
	showSlide();
	noneButton();
});



function showSlide() {
    numSlide=newNumSlide;

	if (numSlide === 0) {
		previosButton.style.display = 'none';
	} else {
		previosButton.style.display = 'block';
	};

    if (numSlide ===  q.length -1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
    	nextButton.style.display = 'block';
    	submitButton.style.display = 'none';
    }

	buildQuiz(q);
}
showSlide();

submitButton.addEventListener('click',() => {
	event.preventDefault();
    showResults();    
});

let correctAnswer1 = question1.answer3;
let correctAnswer2 = question2.answer4;
let correctAnswer3 = question3.answer1;
let correctAnswer4 = question4.answer2;

let correctAnswer = [correctAnswer1,correctAnswer2,correctAnswer3,correctAnswer4];

let score = 0;

function checkResults() {   
   for (num=0;num<4;num++) {
	    if (userAnswer[num] === correctAnswer[num]) {
		    score++ ;
		console.log(userAnswer);
		console.log(correctAnswer) ;  
	    }
    }
};

function showResults() {
	checkResults();
	let result = document.getElementById('result');
    result.innerHTML = ('Всего верных ответов:' + score);
    
};

function noneButton() {
	console.log(button);

	button.forEach((item) => {
		item.setAttribute('disabled',true);
		console.log(item);
	})
};

function onButton() {
	button.forEach((item) => {
		item.removeAttribute('disabled',true);
	}) 

	answer1.style.color =  'black' ;
	answer2.style.color =  'black' ;
	answer3.style.color =  'black' ;
	answers4.style.color =  'black' ;
};

};

