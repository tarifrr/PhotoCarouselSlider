
var handle = setInterval(play,3000);

function start(){
	handle = setInterval(play,3000);
}
			
function pause(){
	
	clearInterval(handle);
	document.getElementById('pause').src = "images/play.png"; 
	document.getElementById('pause').removeEventListener('click',pause);
	document.getElementById('pause').addEventListener('click',start);
}	

function play(){
	document.getElementById('pause').removeEventListener('click',start);
	document.getElementById('pause').src = "images/pause.png"; 
	document.getElementById('pause').addEventListener('click',pause);


	var images = document.querySelectorAll('img');
				
	var i = 0;

	for(var j = 0; j < images.length; j++){
		if(images[j].value == "1"){
			i = j;
			break;
		}		

	}

	i++;

	if(i == images.length){
		i = 0;
		images[images.length-1].style = "opacity: 0;"
		images[images.length-1].value = "0";
	}	


	if(i!=0){
		images[i-1].style = "opacity: 0;";
		images[i-1].value = "0";
	}



	images[i].style = "opacity: 1;";
	images[i].value = "1";

	}


		