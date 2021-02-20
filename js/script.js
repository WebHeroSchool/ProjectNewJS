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

const q = [question1,question2,question3,question4];

buildQuiz =(q) => {
	let questions = document.getElementById('question');
	
    q.forEach((item) =>{ 
    	questions.innerHTML=item.question
    })	
    
}

buildQuiz(q);


/*q.forEach((item) => {
	if(item.correctAnswer==='c'){
		console.log('Верно!')
	} else {console.log('Не верно!'+'Правильный ответ:'+item.correctAnswer)}
})
*/
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
result.innerHTML = 'Всего верных ответов:' + score;

