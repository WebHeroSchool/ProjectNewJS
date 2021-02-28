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

let answers1 = document.getElementById ('answer1');
let answers2 = document.getElementById ('answer2');
let answers3 = document.getElementById ('answer3');
let answers4 = document.getElementById ('answer4');

let userAnser;

let num = 0;

num++

const chooseButton1 = document.getElementById('choose1');

chooseButton1.addEventListener('click',() => {
	event.preventDefault();
	 userAnser = q[num].answer1;
});

const chooseButton2 = document.getElementById('choose2');

chooseButton2.addEventListener('click',() => {
	event.preventDefault();
	 userAnser = q[num].answer2;
});

const chooseButton3 = document.getElementById('choose3');

chooseButton3.addEventListener('click',() => {
	event.preventDefault();
	 userAnser = q[num].answer3;
});

const chooseButton4 = document.getElementById('choose4');

chooseButton4.addEventListener('click',() => {
	event.preventDefault();
	 userAnser = q[num].answer4;
});



buildQuiz =(q) => {
	
    if (num = q.length) {
        num = 0;
    }
    questions.innerHTML= q[num].question;
    answers1.innerHTML = q[num].answer1;
    answers2.innerHTML = q[num].answer2; 
    answers3.innerHTML = q[num].answer3;
    answers4.innerHTML = q[num].answer4;
}

buildQuiz(q);


    /*const input1 = document.createElement('input1')

    input1.type = 'radio';
    input1.innerHTML = q[num].answer1;
    answers1.appendChild(input1);

    const input2 = document.createElement('input2')

    input2.type = 'radio';
    input2.innerHTML = q[num].answer2;
    answers2.appendChild(input2);

    const input3 = document.createElement('input3')

    input3.type = 'radio';
    input3.innerHTML = q[num].answer3;
    answers3.appendChild(input3);

    const input4 = document.createElement('input4')

    input4.type = 'radio';
    input4.innerHTML = q[num].answer4;
    answers4.appendChild(input4);
*/
  /*  for (let i=0; i<4; i++) {
    	const input = document.createElement('İnput');
    	input.type ='radio';
        input.innerHTML = q[num][`answer${i+1}`];
    	answers.appendChild(input);
    }       */


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
		if (userAnser = [`correctAnswer${i+1}`] )
			score++
	}

}	
/*    for ( let i=0;i<4;i++) {
	    if(`input[question${i+1}][answer${i+1}]:checked` === '[`correctAnswer${i+1}`]') {
		    score++

	    } 
console.log(`input[question${i+1}][answer${i+1}]:checked`);
console.log(`correctAnswer${i+1}`);
	console.log(score);
    }*/


