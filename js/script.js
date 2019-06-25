

//  HTML CONTAINER ELEMENTS

const gameContainer = document.querySelector('.game-container');
const decisionContainer = document.querySelector('.dec-container');
const characterContainer = document.querySelector('.char-container');
const invContainer = document.querySelector('.inv-container');


// ***** LOGIN SECTION *****








let userName;


const userNameInput = document.createElement('input');
gameContainer.appendChild(userNameInput);


const submitNameBtn = document.createElement('button');
submitNameBtn.innerText = 'Submit Name';
submitNameBtn.addEventListener('click', function () {
    userName = userNameInput.value;

    const displayName = document.createElement('h2');
    displayName.innerText = userName;
    characterContainer.prepend(displayName);

    userNameInput.style.display = 'none';
    submitNameBtn.style.display = 'none';

    start();

});
gameContainer.appendChild(submitNameBtn);













// ***** GAME CODE *****








// create div/id for displaying the question on the screen
const setQuestion = document.createElement('div');
setQuestion.id = 'question';
gameContainer.appendChild(setQuestion);

// create ul/id for displaying the different options for the user
const setOptions = document.createElement('ul');
setOptions.id = 'options';
decisionContainer.appendChild(setOptions);


// selecting all of the options
const options = document.querySelector('#options');

// to keep track of choices?
const array = [];

// let currentQuestion = 'openDoor';

let mainText;

function start () {

    
    mainText = {
        text1: {
            dialogue: `It is a dark and stormy night. You, ${userName} look down at your invitation you had recently recieved.`,
            next: function () {
                game.text2.createDisplay();
            },
            createDisplay() {
                document.getElementById('question').innerText = game.text1.dialogue;

                options.innerHTML = `<li onclick="game['text1'].next()"> > </li>`
            }
        },
        text2: {
            dialogue: `The invitation informed ${userName} of a dinner party being held tonight. "I wonder who else is going to show up?", you question.`,
            next: function () {
                game.text3.createDisplay();
            },
            createDisplay() {
                document.getElementById('question').innerText = game.text2.dialogue;

                options.innerHTML = `<li onclick="game['text2'].next()"> > </li>`
            }
        },
        text3: {
            dialogue: `You step out of the car. The rain is persistant, coming down in sheets. You glance upon the manner that looms infront ahead. A large mansion, beautifully crafter, large windows with light pouring out to the darkness.`,
            next: function () {
                game.openDoor.createDisplay();
            },
            createDisplay() {
                document.getElementById('question').innerText = game.text3.dialogue;

                options.innerHTML = `<li onclick="game['text3'].next()"> > </li>`
            }
        },
        openDoorChoice: {
            dialogue: `You unfortunately didn't bring an umbrella, so you quickly run up to the front door. There is a letter on the ground. Do you knock on the door and pick up the letter or do you open the front door?`,
            knock: function () {
                game.knockFD.createDisplay();
            },
            open: function () {
                game.openFD.createDisplay();
            },
            createDisplay(optionText) {
                document.getElementById('question').innerText = game.openDoor.dialogue;

                options.innerHTML = `<li onclick="game['openDoor'].knock()"> Knock on the door and pick up letter </li>
            <li onclick="game['openDoor'].open()"> Open the door </li>`;

                options.querySelectorAll('li');
            }
        },
        knockOnFrontDoor: {
            dialogue: `You knock on the door and pick up the letter`,
            pickUpLetter: function () {
                game.enterFD.createDisplay();
                document.getElementById('inv');

            }
        }

    }


    const game = {
        inventory: [],
        text1: mainText.text1,
        text2: mainText.text2,
        text3: mainText.text3,
        openDoor: mainText.openDoorChoice,
        knockFD: mainText.knockOnFrontDoor,
        openFD: mainText.openFrontDoor
    };
    mainText.text1.createDisplay();
    
    
}












// ***** COLOR CHANGE BORDER ******









const blueBorder = document.createElement('div');
blueBorder.classList.add('blue-border-btn');
blueBorder.addEventListener('click', function () {
    let bs = 'lightblue 4px solid'
    gameContainer.style.border = bs;
    decisionContainer.style.border = bs;
});

const redBorder = document.createElement('div');
redBorder.classList.add('red-border-btn');
redBorder.addEventListener('click', function () {
    let bs = 'lightcoral 4px solid';
    gameContainer.style.border = bs;
    decisionContainer.style.border = bs;
});

const greenBorder = document.createElement('div');
greenBorder.classList.add('green-border-btn');
greenBorder.addEventListener('click', function () {
    let bs = 'lightgreen 4px solid';

    gameContainer.style.border = bs;
    decisionContainer.style.border = bs;
});

characterContainer.appendChild(blueBorder);
characterContainer.appendChild(greenBorder);
characterContainer.appendChild(redBorder);
