const question1 = {
	question: 'Вопрос какой-то',
	correctAnswer: 'a'
};1

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

/*let qs = ['Question1','Question2','Question3','Question4'];
let num = 0;

function buildQuiz(qs){
	num++;
	let question = document.getElementById('question');
	if(num <= qs.length){
		num = 0;
	}
	question.innerHTML = qs[num];
}

buildQuiz(qs);*/


buildQuiz =(q) => {
	
    q.forEach((item) =>{ 
    	let questions = document.getElementById('question');
    	question.innerHTML+=item.question
    }) 
}

buildQuiz(q);


q.forEach((item) => {
	if(item.correctAnswer==='c'){
		console.log('Верно!')
	} else {console.log('Не верно!'+'Правильный ответ:'+item.correctAnswer)}
})

let score = 0;

function showResults() {

q.forEach((item) => {
	if(item.correctAnswer==='c'){
		score++
	} console.log(score)
})

}

showResults();

let result = document.getElementById('result');
result.innerHTML = ('Всего верных ответов:' + score);

