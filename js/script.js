const question1 = {
	question: 'Вопрос какой-то',
	correctAnswer: 'a'
};

const question2 = {
	question:'Другой вопрос',
	correctAnswer: 'b'
};

const question3 = {
	question:'Ещё вопрос',
	correctAnswer: 'c'
};

const question4 = {
	question:'Ещё вопрос',
	correctAnswer: 'd'
};

let q = [question1,question2,question3,question4];
let questions = document.getElementById('question');

buildQuiz =(q) => {
	
    q.forEach((item) =>{ 
    	let questions = document.getElementById('question');
    	question.innerHTML+= ` ${item.question}`
    }) 
}

buildQuiz(q);

let numSlide = 0 ;

function showSlide() {
	console.log(numSlide);
}

const nextButton = document.getElementById('next');

nextButton.addEventListener('click',() => {
	event.preventDefault();
	showSlide(numSlide+1);
});

const previosButton = document.getElementById('previos');

previosButton.addEventListener('click',() => {
	event.preventDefault();
	showSlide(numSlide-1); 
});

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

