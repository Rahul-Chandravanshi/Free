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
		showConfirm('Congratulations !, You Win')
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

function showConfirm(message,callback){
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
	yesButton.textContent = 'Previous Level';
	buttonBox.appendChild(yesButton);
	yesButton.addEventListener('click',yesButtonClick);
	
	
	var noButton = document.createElement('button');
	noButton.classList.add('no-button');
	noButton.textContent = 'Home';
	buttonBox.appendChild(noButton);
	noButton.addEventListener('click',noButtonClick);
	
	function yesButtonClick(){
		window.location.href = 'index.html';
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