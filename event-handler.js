function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


const grayButton = document.getElementById('make-gray-button');
grayButton.onclick = makeGray;

function makeGray(){
    document.body.style.backgroundColor = 'gray';
}

const blackButton = document.getElementById('make-black-button');
blackButton.onclick = function(){
    document.body.style.backgroundColor ='black';
}

// event listeners for button clicks 

const goldenrodButton = document.getElementById('make-goldenrod-button');
goldenrodButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});

// function makeGoldenrod(){
//     document.body.style.backgroundColor = 'goldenrod';
// }
