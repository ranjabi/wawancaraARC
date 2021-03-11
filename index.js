var cardBefore = document.getElementById('card-before');
var cardAfter = document.getElementById('card-after');
var cornerBox = document.getElementById('corner-box');
cardAfter.style.transform = 'rotateY(90deg)';
cardBefore.style.transition = 'all 1s';
cardAfter.style.transition = 'all 1s';


cardBefore.addEventListener('click',function(){
    cardBefore.style.transform = 'rotateY(90deg)';
    cardAfter.style.transform = 'rotateY(0deg)';
})

cardAfter.addEventListener('click',function(){
    cardBefore.style.transform = 'rotateY(0deg)';
    cardAfter.style.transform = 'rotateY(90deg)';
})
