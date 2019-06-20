
// ***** LOGIN SECTION *****











let userName = 'Jeremy';

const gameContainer = document.querySelector('.game-container');
const decisionContainer = document.querySelector('.dec-container');


const userNameInput = document.createElement('input');
gameContainer.appendChild(userNameInput);

const testStartBtn = document.createElement('button');
testStartBtn.innerText = 'Fake Start';
testStartBtn.addEventListener('click', function () {
    mainText.text1.createDisplay();
});
gameContainer.appendChild(testStartBtn);













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


const mainText = {
    text1: {
        dialogue: `It is a dark and stormy night. You, ${userName} look down at your invitation you had recently recieved.`,
        next: function() {
            game.text2.createDisplay();
        },
        createDisplay(){
            document.getElementById('question').innerText = game['text1'].dialogue;

            options.innerHTML = `<li onclick="game['text1'].next()"> > </li>`
        }
    },
    text2: {
        dialogue: `The invitation informed ${userName} of a dinner party being held tonight. "I wonder who else is going to show up?", you question.`,
        next: function () {
            game.text3.createDisplay();
        },
        createDisplay() {
            document.getElementById('question').innerText = game['text2'].dialogue;

            options.innerHTML = `<li onclick="game['text2'].next()"> > </li>`
        }
    },
    text3: {
        dialogue: `You step out of the car. The rain is persistant, coming down in sheets. You glance upon the manner that looms infront ahead. A large mansion, beautifully crafter, large windows with light pouring out to the darkness.`,
        next: function () {
            game.openDoor.createDisplay();
        },
        createDisplay() {
            document.getElementById('question').innerText = game['text3'].dialogue;

            options.innerHTML = `<li onclick="game['text3'].next()"> > </li>`
        }
    },
    openDoorChoice: {
        question: `You unfortunately didn't bring an umbrella, so you quickly run up to the front door. Do you knock or do you open the front door?`,
        knock: function () {
            game.knockOnFrontDoor.createDisplay();
        },
        open: function () {
            game.openWithoutKnock.createDisplay();
        },
        optionText: `<li onclick="game['openDoor'].knock()"> Knock on the door </li>
        <li onclick="game['openDoor'].open()"> Open the door </li>`,
        createDisplay(optionText) {
            document.getElementById('question').innerText = game['openDoor'].question;

            options.innerHTML = mainText.openDoorChoice.optionText;

            options.querySelectorAll('li');
        }
    },
    
}


// array.push(obj);

const game = {
    inventory: [],
    text1: mainText.text1,
    text2: mainText.text2,
    text3: mainText.text3,
    openDoor: mainText.openDoorChoice,
};


// on login, once you have finished login, to submit the input value into the user variable, call this function to start the text!
// mainText.text1.createDisplay();













// ***** COLOR CHANGE BORDER ******









const blueBorder = document.createElement('div');
blueBorder.classList.add('blue-border');
const redBorder = document.createElement('div');
blueBorder.classList.add('red-border');

const greenBorder = document.createElement('div');
blueBorder.classList.add('green-border');


gameContainer.appendChild(blueBorder, redBorder, greenBorder);