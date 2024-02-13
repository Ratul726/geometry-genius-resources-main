const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;
// 
function makeyellow (){
    document.body.style.backgroundColor = 'yellow'
}
// 
function makeBlue (){
    document.body.style.backgroundColor = 'blue';
}

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function (){
    document.body.style.backgroundColor = 'purple';
}
// 
const makePink = document.getElementById('make-pink');
       // console.log(makePink.innerText);
       makePink.addEventListener('click',pinkColor)

       function pinkColor(){
        document.body.style.backgroundColor = 'pink'
       }

    //    
    const makeGreenButton = document.getElementById('make-green')
    makeGreenButton.addEventListener('click' , function maleGreen (){
        document.body.style.backgroundColor = 'green';
    })

// final Option


document.getElementById('make-tomato').addEventListener('click',function(){
    document.body.style.backgroundColor = 'tomato'
})

