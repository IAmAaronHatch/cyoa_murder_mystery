

const gameContainer = document.querySelector('.game-container');
const decisionContainer = document.querySelector('.dec-container');

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

let userName = 'Jeremy';

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
            game.text4.createDisplay();
        },
        createDisplay() {
            document.getElementById('question').innerText = game['text3'].dialogue;

            options.innerHTML = `<li onclick="game['text3'].next()"> > </li>`
        }
    },
    text4: {
        dialogue: `You unfortunately didn't bring an umbrella, so you quickly run up to the front door.`
    },
    openDoorChoice: {
        question: 'do you open the door?',
        yes: function () {
            alert('you picked yes');
            game.drinkPotion.createDisplay();
        },
        no: function () {
            alert('you picked no');
        },
        optionText: `<li onclick="game['openDoor'].yes()"> Yes      </li><li onclick="game['openDoor'].no()"> No            </li>`,
        createDisplay(optionText) {
            document.getElementById('question').innerText = game['openDoor'].question;

            options.innerHTML = mainText.openDoorChoice.optionText;

            options.querySelectorAll('li');
        }
    },
    potionChoice: {
        question: 'drink the potion?',
        yes: function () {
            alert('you picked yes');
        },
        no: function () {
            console.log('no');
        },
        createDisplay() {
            document.getElementById('question').innerText = game['drinkPotion'].question;

            options.innerHTML =
                `<li onclick="game['drinkPotion'].yes()"> Yes </li>
        <li onclick="game['drinkPotion'].no()"> No </li>`;

            options.querySelectorAll('li');
        }
    }
}


// array.push(obj);

const game = {
    inventory: [],
    text1: mainText.text1,
    text2: mainText.text2,
    openDoor: mainText.openDoorChoice,
    drinkPotion: mainText.potionChoice,
};


// on login, once you have finished login, to submit the input value into the user variable, call this function to start the text!
mainText.text1.createDisplay();

