let on;

const emojis = ["🤑","🤑","🤕","🤕","😍","😍","🤥","🤥","🔥","🔥","🤫","🤫","🦋","🦋","💖","💖"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (var i = 0; i < emojis.length; i++) {
	let box = document.createElement('div')
	box.className = 'item';
	box.innerHTML = shuf_emojis[i];
	
	box.onclick = function (){
		this.classList.add('boxOpen')
		setTimeout(function() {
if (document.querySelectorAll('.boxOpen').length > 1) {
	if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
		document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
		document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')
		
		document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
		document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
		
	if (document.querySelectorAll('.boxMatch').length == emojis.length) {
		//alert('Congratulations !, You Win');
		showConfirm('Congratulations !, You Win','Next Level','level2.html')
		clearInterval(a);
	}
		}else {
			document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
		document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
		}
			}
	}, 400);
}
	
	document.querySelector('.game').appendChild(box);
};

function showConfirm(message,callback,send){
	var confirmBox = document.createElement('div');
	confirmBox.classList.add('confirm-box');
	
	var messageBox = document.createElement('div');
	messageBox.classList.add('message-box');
	messageBox.textContent = message;
	confirmBox.appendChild(messageBox);
	
	var stage = document.createElement('div');
	stage.classList.add('stage');
stage.textContent = ' Time Left :  '+timer.textContent + " "+ ' Moves : ' + step;
	messageBox.appendChild(stage);
	
	
	var buttonBox = document.createElement('div');
	buttonBox.classList.add('button-box');
	messageBox.appendChild(buttonBox);
	
	var yesButton = document.createElement('button');
	yesButton.classList.add('yes-button');
	yesButton.textContent = callback;
	buttonBox.appendChild(yesButton);
	yesButton.addEventListener('click',yesButtonClick);
	
	
	var noButton = document.createElement('button');
	noButton.classList.add('no-button');
	noButton.textContent = 'Home';
	buttonBox.appendChild(noButton);
	noButton.addEventListener('click',noButtonClick);
	
	function yesButtonClick(){
		window.location.href = send;
		removeConfirmBox();
	}
	function noButtonClick(){
		console.log('No button');
		removeConfirmBox();
	}
	
	function removeConfirmBox(){
		document.body.removeChild(confirmBox);
	}
	
	document.body.appendChild(confirmBox);
};
//showConfirm('Congratulations !, You Win');

let a;
let timer;
	var h;
	const availableTime = ['Select ',2,5,10];
	var startingMinutes;
	function setMin(text){
		var selectBox = document.createElement('div');
	selectBox.classList.add('select-box');
	var minBox = document.createElement('div');
	minBox.classList.add('min-box');
	minBox.textContent = text;
	selectBox.appendChild(minBox);
	var optionBox = document.createElement('div');
	optionBox.classList.add('option-box');
	minBox.appendChild(optionBox);
	
	var option = document.createElement('select');
	option.classList.add('select-option');
	//yesButton.textContent = callback;
	optionBox.appendChild(option);
	optionBox.addEventListener('change',removeSelectBox);
	
	

	

	for (var i = 0; i < availableTime.length; i++) {
		 h = document.createElement('option');
		h.value = availableTime[i];
h.classList.add('options');
		h.innerHTML = availableTime[i] + ' Min';
		option.appendChild(h);
		//console.log(i);

	}
	
	optionBox.addEventListener('change',ok)
	function ok(){
		console.log('&');

	
	
	startingMinutes = option.value;
let time = startingMinutes*60;

 a = setInterval(updateCountdown,1000);
function updateCountdown(){
	const minutes = Math.floor(time/60);
	let seconds = time%60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	timer.textContent = `${minutes}:${seconds}`;time--;
	let stop = timer.textContent;
	if (stop == '0:00') {
		clearInterval(a);
		showConfirm('Game Over !, You lose ☹️','Restart','index.html')
	}
on = minutes + ((seconds/60)-(1/60));
};
	};
 timer = document.createElement('div');
timer.classList.add('countdown');
	document.querySelector('.watch').appendChild(timer);
	
	
	
		function removeSelectBox(){
		document.body.removeChild(selectBox);
	}
	

		document.body.appendChild(selectBox);
	};
	setMin('Set Time Out');
	let step = 0;
	function moves(){
		step = step + 1;
		count.textContent = `Moves : ${step}`
	};
	let count = document.createElement('div');
	document.querySelector('.moves').appendChild(count);
	
// export let timeLeft = timer.textContent;

	function pauseTime(){
		clearInterval(a);
		
		var resumeBox = document.createElement('div');
	resumeBox.classList.add('resume-box');
	var titleBox = document.createElement('div');
	titleBox.classList.add('title-box');
	titleBox.textContent = 'RESUME';
	resumeBox.appendChild(titleBox);
	var pressBox = document.createElement('div');
	pressBox.classList.add('press-box');
	titleBox.appendChild(pressBox);
	
	var stage = document.createElement('div');
	stage.classList.add('stage');
stage.textContent = ' Time Left :  '+timer.textContent + " "+ ' Moves : ' + step;
	pressBox.appendChild(stage);
	
	
	var press = document.createElement('button');
	press.classList.add('press-button');
press.textContent = '▶️';
	pressBox.appendChild(press);
	press.addEventListener('click',removeSelectBox)
	
	function removeSelectBox(){
		document.body.removeChild(resumeBox);
		startingMinutes = on;
let time = startingMinutes*60;

 a = setInterval(updateCountdown,1000);
function updateCountdown(){
	const minutes = Math.floor(time/60);
	let seconds = time%60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	timer.textContent = `${minutes}:${seconds}`;time--;
	let stop = timer.textContent;
	if (stop == '0:00') {
		clearInterval(a);
		showConfirm('Game Over !, You lose ☹️','Restart','index.html')
	}
on = minutes + ((seconds/60)-(1/60));
};
	}
	
	
	document.body.appendChild(resumeBox);
	};
	
	let pauseButton = document.createElement('button');
document.querySelector('.pause').appendChild(pauseButton);
pauseButton.textContent = '⏸️';
pauseButton.onclick = pauseTime;
pauseButton.classList.add('pause-button');;