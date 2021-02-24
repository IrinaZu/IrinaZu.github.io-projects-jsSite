document.getElementById('localStorage').innerHTML = localStorage.getItem('1'); 
function hi(){
    var input=document.getElementById('Name').value;
    //var html ="Привет "+input;
    //document.getElementById('result').innerHTML = html;  
    console.log(input);
    if(input.length!=0){
        if(document.getElementById('Name').validity.patternMismatch==false){
            alert("Привет "+input+"!");
            localStorage.setItem('1',input);
        }
        
    }
    
    
    //var testForm = document.getElementById('nameForm'); 
    //testForm.onsubmit = function(event) { event.preventDefault();} 
}

document.getElementById('say').addEventListener('click', hi);
//1
function calculate(){
    var x1=document.getElementById('base').value;
    var x2=document.getElementById('height').value;
    var html =x1*x2*0.5;
    if(x1.length!=0&&x2.length!=0){
        if(document.getElementById('base').validity.patternMismatch==false&&document.getElementById('height').validity.patternMismatch==false){
            document.getElementById('square').innerHTML = html; 
        }
         
    }
    
    var testForm = document.getElementById('treugolnik'); 
    testForm.onsubmit = function(event) { event.preventDefault();} 

}
document.getElementById('count').addEventListener('click', calculate);
//2
function comparator(){
    var x1=document.getElementById('first').value;
    var x2=document.getElementById('second').value;
    if(x1.length==x2.length){
      var html =true;  
    }
    else var html =false; 
    if(x1.length!=0&&x2.length!=0){
        if(document.getElementById('first').validity.patternMismatch==false&&document.getElementById('second').validity.patternMismatch==false){
            document.getElementById('outecome').innerHTML = html;  
        }
        
    }
   
    var testForm = document.getElementById('stringForm'); 
    testForm.onsubmit = function(event) { event.preventDefault();} 
} 
document.getElementById('compare').addEventListener('click', comparator);

//3


function search(){
    var array=[];
    var x1=document.getElementById('a').value;
    for(let i of x1.split(' ')){
        array.push(i);
    }
    
    
    for (let index = 0; index < 5; index++) {
        array[index]=Number.parseInt(array[index]);
        
    }

    var max_of_array = Math.max.apply(Math, array);
    var min_of_array = Math.min.apply(Math, array);
   
        if(document.getElementById('a').validity.patternMismatch==false){
            document.getElementById('max').innerHTML = max_of_array;  
            document.getElementById('min').innerHTML = min_of_array; 
        }
 
    

    var testForm = document.getElementById('maxminForm'); 
    testForm.onsubmit = function(event) { event.preventDefault();} 

    
} 

document.getElementById('maxMin').addEventListener('click', search);

//pop up 6
/*let Spopup=document.getElementById('sixthpopup'),
 	SpopupTogle=document.getElementById('sixthBtn');
 	//SpopupClose=document.querySelector('.sixthClose');
 	SpopupTogle.onclick=function(){
       // SpopupAnimation.style.display='block';
 		Spopup.style.display='block';
		Date=new Date();
		Year=Date.getFullYear();
		Month=Date.getMonth();
		Day=Date.getDate();
		var html=Day+"."+Month+"."+Year;
		document.getElementById('date').innerHTML = html;  
        document.getElementById('user').innerHTML =localStorage.getItem('1'); 
 	};
 	Spopup.onclick=function(){
 		Spopup.style.display='none';
 	};
 	window.onclick=function(e){
 		if(e.target==Spopup){
 			Spopup.style.display="none";
 		}
 	};*/

    let Spopup=document.getElementById('sixthpopup');
 	let SpopupAnimation=document.querySelector('.D');
 	function six(){
       // SpopupAnimation.style.display='block';
       
       SpopupAnimation.style.display='none';
 		Spopup.style.display='block';
		Date=new Date();
		Year=Date.getFullYear();
		Month=Date.getMonth();
		Day=Date.getDate();
		var html=Day+"."+Month+"."+Year;
		document.getElementById('date').innerHTML = html;  
        document.getElementById('user').innerHTML =localStorage.getItem('1'); 
 	};
 	Spopup.onclick=function(){
 		Spopup.style.display='none';
        SpopupAnimation.style.display='block';
        setTimeout(animeagain, 9000);
 	};
 	window.onclick=function(e){
 		if(e.target==Spopup){
 			Spopup.style.display="none";
 		}
    };

    function animeagain(){
        SpopupAnimation.style.display='none';
    }
    function animation() {
        SpopupAnimation.style.display='block';
        setTimeout(six, 9000);
      }
    document.getElementById('sixthBtn').addEventListener('click', animation);    



//test
//4

let count=0;
let flag="yes";
function R(){
    document.getElementById('otpr').disabled = true;

    const form = document.forms.demo;
    const checked = form.querySelector('input[name=q1]:checked');
    const checked_2 = form.querySelector('input[name=q2]:checked');
    const checked_3 = form.querySelector('input[name=q3]:checked');
    const checked_4 = form.querySelector('input[name=q4]:checked');
    const checked_5 = form.querySelector('input[name=q5]:checked');
    // log out the value from the :checked radio
    let radixs=document.querySelectorAll('input:checked');
    let i=0;
    for(let input of radixs){
        if(input.value=="1"){
            ++count;
            var razpricee = document.getElementsByClassName('first')[i];
            razpricee.style.color="#59d8ae";
        }else{
            var razpricee = document.getElementsByClassName('first')[i];
            razpricee.style.color="#ff0000";
        }
        ++i;
    }
}
document.getElementById('otpr').addEventListener('click', R);


let button=document.querySelector('#otpr');

button.addEventListener('click',function(){
   
    let inputs=document.querySelectorAll('#test input');
        let rightAnswers=["3","true","var","click","html"];
        let i=0;
        for(let input of inputs){
            if(input.validity.patternMismatch==false){
                if(input.value==rightAnswers[i]){
                    input.classList.add('correct');
                    ++count;
                }else if(input.value.length==0){
                    flag="no";
                }
                else{
                    input.classList.add('incorrect');
                }
                ++i;
            }
        }
        if(flag=="yes"){
            document.getElementById('RESULT').innerHTML = count; 
        }
            
        
        

        var testForm = document.getElementById('testForm'); 
        testForm.onsubmit = function(event) { event.preventDefault();} 
});

let reset=document.querySelector('#breakdown');

reset.addEventListener('click',function(){
    window.location.reload();
    document.getElementById('otpr').disabled = false;
    for(let y=0;y<5;y++){
            var razpricee = document.getElementsByClassName('first')[y];
            razpricee.style.color="#000000";

    }
    count=0;
    let inputs=document.querySelectorAll('#test input');
        for(let input of inputs){
                input.classList.add('simple');
        }
    
    document.getElementById('RESULT').innerHTML = " ";



});

//5
