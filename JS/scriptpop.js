let npopup=document.getElementById('namepopup'),
 	npopupTogle=document.getElementById('nameBtn'),
 	npopupClose=document.querySelector('.nameClose');
 	npopupTogle.onclick=function(){
 		npopup.style.display='block';
 	};
 	npopupClose.onclick=function(){
 		npopup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==npopup){
 			npopup.style.display="none";
 		}
 	};

let popup=document.getElementById('mypopup'),
 	popupTogle=document.getElementById('yBtn'),
 	popupClose=document.querySelector('.close');
 	popupTogle.onclick=function(){
 		popup.style.display='block';
 	};
 	popupClose.onclick=function(){
 		popup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==popup){
 			popup.style.display="none";
 		}
 	};

let spopup=document.getElementById('secondpopup'),
 	spopupTogle=document.getElementById('secondBtn'),
 	spopupClose=document.querySelector('.secondClose');
 	spopupTogle.onclick=function(){
 		spopup.style.display='block';
 	};
 	spopupClose.onclick=function(){
 		spopup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==spopup){
 			spopup.style.display="none";
 		}
 	};

let tpopup=document.getElementById('thirdpopup'),
 	tpopupTogle=document.getElementById('thirdBtn'),
 	tpopupClose=document.querySelector('.thirdClose');
 	tpopupTogle.onclick=function(){
 		tpopup.style.display='block';
 	};
 	tpopupClose.onclick=function(){
 		tpopup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==tpopup){
 			tpopup.style.display="none";
 		}
 	};

	 let fpopup=document.getElementById('fourthpopup'),
 	fpopupTogle=document.getElementById('fourthBtn'),
 	fpopupClose=document.querySelector('.fourthСlose');
 	fpopupTogle.onclick=function(){
 		fpopup.style.display='block';
 	};
 	fpopupClose.onclick=function(){
 		fpopup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==fpopup){
 			fpopup.style.display="none";
 		}
 	};

	 let fifpopup=document.getElementById('fifthpopup'),
 	fifpopupTogle=document.getElementById('fifthBtn'),
 	fifpopupClose=document.querySelector('.fifthClose');
 	fifpopupTogle.onclick=function(){
		fifpopup.style.display='block';
 	};
 	fifpopupClose.onclick=function(){
		fifpopup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==fifpopup){
			fifpopup.style.display="none";
 		}
 	};
