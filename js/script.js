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

const arr = [question1,question2];

arr.forEach((item) => {
	console.log(item.correctAnswer);
})

arr.unshift(question3);

arr.forEach((item) => {
	if(item.correctAnswer === 'c') {
		console.log(item.correctAnswer);
	}
})

const question4 = {
	question:'Ещё вопрос',
	correctAnswer: '4'
};

newArr = [question1,question2,question3,question4];

console.log(newArr);