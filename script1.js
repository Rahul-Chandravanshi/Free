const emojis = ["🌋","🌋","🎮","🎮","📦","📦","🍩","🍩","💩","💩","🤠","🤠","💀","💀","👽","👽","🤡","🤡","👻","👻","🎃","🎃","🧠","🧠","🙊","🙊","🕷️","🕷️","💗","💗","🐠","🐠","🥪","🥪","🗽","🗽"];
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
		showConfirm('Congratulations !, You Win' + ' Time Left :  '+timer.textContent+ ' Moves : ' + step,'Next Level','level3.html')
		clearInterval(a);
	}
		}else {
			document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
		document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
		}
			}
	}, 300);
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
const startingMinutes = 4;
let time = startingMinutes*60;

let a = setInterval(updateCountdown,1000);
function updateCountdown(){
	const minutes = Math.floor(time/60);
	let seconds = time%60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	timer.textContent = `${minutes}:${seconds}`;time--;
	let stop = timer.textContent;
	if (stop == '0:00') {
		clearInterval(a);
		showConfirm('Game Over !, You lose ☹️','Restart','level2.html')
	}
};

//console.log();
let timer = document.createElement('div');
timer.classList.add('countdown');
	document.querySelector('.watch').appendChild(timer);
	let step = 0;
	function moves(){
		//step++;
		step = step + 1;
		//console.log(step);
		count.textContent = `Moves : ${step}`
	}
	let count = document.createElement('div');
	//count.classList.add('moves');
	document.querySelector('.moves').appendChild(count);