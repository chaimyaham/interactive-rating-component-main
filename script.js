
let rating=document.getElementsByClassName('numOfStars')
let submit =document.getElementById('submit')
let ratingState=document.querySelector('.rating-state')
let thankyouState=document.querySelector('.thankyou-state')
let result=document.getElementById('add')


 for(i=0;i<rating.length;i++){
     let p=rating[i]
     p.addEventListener('focus',(e)=>{
         numOfStars=e.target.innerText;
         return numOfStars;

     })
     submit.addEventListener('click',()=>{
         if(numOfStars){
             ratingState.style.display="none";
             thankyouState.style.display="flex";
             result.innerHTML="&nbsp"+numOfStars+"&nbsp";
         }
     })
   
 }
 
