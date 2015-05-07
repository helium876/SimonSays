//Authur: Agyei Masters
//Let it be known that I wrote this while having a serious headache
//logic might be way off or on super point

/*
 1 2 3 4 
 ---------------
 1 = red
 2 = yellow
 3 = blue
 4 = green
 ---------------
 computer stores number into array
 ----------------------------------
 DOM plays out number sequence
 ----------------------------------

 as user plays the sequence check for each input if it matches the array
 ------------------------------------------------------------------------

*/
function gen_number(){
	var ran = Math.floor((Math.random()*4)+1);
	return ran;
}

//var moves = 0;
var player = [];
var simon = [];


function player_opt(num){
	return num;
}

function start (){
		simon = new gen_number();
		console.log(simon);
		for (var i = 0; i < simon.length; i++) {
			SimonSays(simon[i]);
		};
		for (var i = 0; i < simon.length+1; i++) {
			player = new player_opt();
			if (player[i] != simon[i])
			{
				//Play Buzzer Sound!
				return false;
				break;
			};
		}
	}


function SimonSays (num) {
	if (num === 1) 
	{
		var play_color = getElementById('tag_yellow');
		var play_color = play_color.active;
		play(num);
	};
	if (num === 2) 
	{
		var play_color = getElementById('tag_red');
		var play_color = play_color.active;
		play(num);
	};
	if (num === 3) 
	{
		var play_color = getElementById('tag_blue');
		var play_color = play_color.active;
		play(num);
	};	
	if (num === 4) 
	{
		var play_color = getElementById('tag_green');
		var play_color = play_color.active;
		play(num);
	};
}

function play (num) {
	switch(num){
		case 1 : var audio = document.getElementById('audio1');
		if (audio.paused) 
		{
			audio.play();
		}
		break;

		case 2 : var audio = document.getElementById('audio2');
		if (audio.paused) 
		{
			audio.play();
		}
		break;

		case 3 : var audio = document.getElementById('audio3');
		if (audio.paused) 
		{
			audio.play();
		}
		break;

		case 4 : var audio = document.getElementById('audio4');
		if (audio.paused) 
		{
			audio.play();
		}
		break;

		default : var audio = document.getElementById('audio5');
		if (audio.paused) 
		{
			audio.play();
		}
		break;
	};
	//if (audio.paused) {
	//	audio.play();
	//}
	//else
	//{
	//	audio.currentTime = 0;
	//}
}

//player = player_opt();