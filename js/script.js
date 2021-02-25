const question1 = {
	question: 'Вопрос какой-то',
	answer1:'b',
	answer2:'c',
	answer3:'d',
	correctAnswer: 'a'
};

const question2 = {
	question:'Другой вопрос',
	answer1:'f',
	answer2:'g',
	answer3:'h',
	correctAnswer: 'b'
};

const question3 = {
	question:'Ещё вопрос',
	answer1:'s',
	answer2:'m',
	answer3:'n',
	correctAnswer: 'c'
};

const question4 = {
	question:'Ещё вопрос',
	answer1:'t',
	answer2:'y',
	answer3:'u',
	correctAnswer: 'd'
};

let q = [question1,question2,question3,question4];
let num = 0;

buildQuiz =(q) => {
	num ++
	
    q.forEach((item,num) =>{ 
    	let questions = document.getElementById('question');
    	let anwers = document.getElementById ('answer');

         if (num <= q.length) {
         	num = 0;
         }
    	question.innerHTML+= ` ${item.question}`
    	answer.innerHTML+= item.answer1 + item.answer2 + item.answer3 + item.correctAnswer+item.answer4
       
    }) 
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

q.forEach((item) => {
	if(item.correctAnswer==='c'){
		score++
	} 
	console.log(score);
})

}

