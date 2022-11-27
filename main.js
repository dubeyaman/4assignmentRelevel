const votes=document.getElementsByClassName("vote")
const increment=document.getElementsByClassName('increment')

let count=0;

votes.addEventListener('click',()=>{
    count++;
    increment.innerHTML=count
})