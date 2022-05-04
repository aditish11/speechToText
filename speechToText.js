const texts=document.querySelector('.texts');

window.SpeechRecognitionAlternative= window.SpeechRecognitionAlternative || window.webkitSpeechRecognition;

const recognition =new window.SpeechRecognitionAlternative();
recognition.interimResults=true;
//it will give real time result when we are talking

let p=document.createElement('p');
recognition.addEventListener('result' , (e) =>{
   const text=Array.from(e.results)
   .map((result) => result[0])
   .map((result) => result.transcript)
   .join( '');

   p.innerText=text;
   texts.appendChild(p);
   
   if(e.results[0].isFinal){
     p = document.createElement('p');
   }

   recognition.addEventListener('end', ()=>{
     recognition.start(); 
   })
  console.log(text);

})

recognition.start();


