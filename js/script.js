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
	question:'Ещё вопрос',
	answer1:'t',
	answer2:'y',
	answer3:'u',
	answer4: 'd'
};

let q = [question1,question2,question3,question4];
let questions = document.getElementById('question');
let answers = document.getElementById ('answer');
let num = 0;

num++

buildQuiz =(q) => {
	
    if (num = q.length) {
        num = 0;
    }
    question.innerHTML= q[num].question ;

    for (let i=0; i<4; i++) {
    	const input = document.createElement('İnput');
    	input.type ='radio';
        input.innerHTML = q[num][`answer(i+1)`];
    	answers.appendChild(input);
    }       
}

buildQuiz(q);

let numSlide = 0 ;
let newNumSlide = 0;

const nextButton = document.getElementById('next');

nextButton.addEventListener('click',() => {
	event.preventDefault();
	newNumSlide=numSlide+1;
	showSlide();
});

const previosButton = document.getElementById('previos');

previosButton.addEventListener('click',() => {
	event.preventDefault();
	newNumSlide=numSlide-1; 
	showSlide();
});

function showSlide() {
	numSlide=newNumSlide;
	console.log(newNumSlide);
}

showSlide();

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click',() => {
	event.preventDefault();
    showResults();
    let result = document.getElementById('result');
    result.innerHTML = ('Всего верных ответов:' + score);
});

let score = 0;

function showResults() {
	let correctAnswer1 = question1.answer3;
	let correctAnswer2 = question2.answer4;
	let correctAnswer3 = question3.answer1;
	let correctAnswer4 = question4.answer2;

    for ( let i=0;i<4;i++) {
	    if(`input[question(i+1).answer(i+1)]:checked`==='correctAnswer(i+1)') {
		    score++
	    } 
	console.log(score);
    }
}

