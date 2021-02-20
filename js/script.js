let num = '0';

let score;

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

buildQuiz = q => {
	for(let i=0; i<q.length; i++) {
		console.log(q[i]);
	}
}

buildQuiz(q)

q.forEach((item) => {
	if(item.correctAnswer==='c'){
		console.log('Верно!')
	} else {console.log('Не верно!'+'Правильный ответ:'+item.correctAnswer)}
})

