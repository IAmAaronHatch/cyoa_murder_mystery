

//  HTML CONTAINER ELEMENTS

const gameContainer = document.querySelector('.game-container');
const decisionContainer = document.querySelector('.dec-container');
const characterContainer = document.querySelector('.char-container');
const invContainer = document.querySelector('.inv-container');


// ***** LOGIN SECTION *****








let userName;

const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');
gameContainer.appendChild(inputContainer);

const userNameInput = document.createElement('input');
inputContainer.appendChild(userNameInput);
userNameInput.id = 'userNameInput';
userNameInput.placeholder = 'What is your name?';



const submitNameBtn = document.createElement('button');
submitNameBtn.innerText = 'Submit';
submitNameBtn.addEventListener('click', function () {
    if(!userNameInput.value){
        alert('Please enter a name');
    } else {
        userName = userNameInput.value;

        const displayName = document.createElement('h1');
        displayName.innerText = userName;
        characterContainer.prepend(displayName);

        userNameInput.style.display = 'none';
        submitNameBtn.style.display = 'none';

        const questionBox = document.querySelector('#question');
        questionBox.style.display = 'block';

        start();
    }
    

});
inputContainer.appendChild(submitNameBtn);













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
let game;

function start () {
    
    mainText = {
        text1: {
            dialogue: `It is a dark and stormy night. You, ${userName} look down at your invitation you had recently received.`,
            next: function () {
                game.text2.createDisplay(); 
                getInv();                               
            },
            createDisplay() {
                setQuestion.innerText = game.text1.dialogue;

                options.innerHTML = `<li onclick="game['text1'].next()"> > </li>`
            }
        },
        text2: {
            dialogue: `The invitation informed ${userName} of a dinner party being held tonight at the old manner. "I wonder who else is going to show up?", you question.`,
            next: function () {
                game.text3.createDisplay();
            },
            createDisplay() {
                setQuestion.innerText = game.text2.dialogue;

                options.innerHTML = `<li onclick="game['text2'].next()"> > </li>`
            }
        },
        text3: {
            dialogue: `You step out of the car. The rain is persistant, coming down in sheets. You glance upon the manner that looms straight ahead; a large mansion, beautifully crafted, with large windows with light pouring out to the darkness.`,
            next: function () {
                game.openDoor.createDisplay();
                addToInv('Car Keys');
                
            },
            createDisplay() {
                setQuestion.innerText = game.text3.dialogue;

                options.innerHTML = `<li onclick="game['text3'].next()"> > </li>`
            }
        },
        openDoorChoice: {
            dialogue: `You unfortunately didn't bring an umbrella, so you quickly run up to the front door. There is a letter in your pocket, the invitation given to you for this party. Do you knock on the door and give the letter to whomever answers, or do you open the front door?`,
            knock: function () {
                game.knockFD.createDisplay();
                removeInv('Invitation');                
            },
            open: function () {
                game.openFD.createDisplay();
            },
            createDisplay() {
                setQuestion.innerText = game.openDoor.dialogue;

                options.innerHTML = `<li onclick="game['openDoor'].knock()"> Knock on the door and give the invitation </li>
            <li onclick="game['openDoor'].open()"> Open the door </li>`;

                options.querySelectorAll('li');
            }
        },
        knockOnFrontDoor: {
            dialogue: `You knock on the door and take out the letter. A larger man answers the door, dressed in a well tailored butlers suit. "Good Evening ${userName}. Thank you for your participation tonight, please, do come in." and with that, the butler takes your invitation and coat, and leads you inside.`,
            askButlerDetails: function () {
                game.butlerDetails.createDisplay();
            },
            walkToOpenDoorOnLeft: function () {
                game.openDoorLeft.createDisplay();
            },
            createDisplay(){
                setQuestion.innerText = game.knockFD.dialogue;

                options.innerHTML = `<li onclick="game['knockFD'].askButlerDetails()"> Ask the Butler more about what the mysterious party is. </li>
                <li onclick="game['knockFD'].walkToOpenDoorOnLeft()"> Head straight for the open door on your left. </li>`;
                options.querySelectorAll('li');                
            }
        },
        openFrontDoor: {
            dialogue: `You open the front door, and step in. Down the main hallway, you see a startled man dressed in a butler uniform. "Hello, ${userName}, right? How are you this evening?". From his expression, you can clearly tell he disliked you letting yourself in.`,
            lieToButler: function(){
                game.lieToTheButler.createDisplay();
            },
            ignoreButler: function(){
                game.ignore.createDisplay();
            },
            createDisplay(){
                setQuestion.innerText = game.openFD.dialogue;

                options.innerHTML = `<li onclick="game['openFD'].lieToButler()"> Sorry sir, I had knocked and no one answered. </li><li onclick="game['openFD'].ignoreButler()"> Quickly walk past butler, without saying a word. </li>`
            }

        },
        // askTheButlerDetails: {

        // },
        

    }
    

    game = {
        inventory: ['Invitation'],
        text1: mainText.text1,
        text2: mainText.text2,
        text3: mainText.text3,
        openDoor: mainText.openDoorChoice,
        knockFD: mainText.knockOnFrontDoor,
        openFD: mainText.openFrontDoor,
        butlerDetails: mainText.askTheButlerDetails,
        openDoorLeft: mainText.walkToOpenDoorOnLeft,
        explainToButler: mainText.explainToButlerOpen,
        ignoreTheButler: mainText.ignoreButler,
        // lieToTheButler: mainText.lieToButler,

    };
    mainText.text1.createDisplay();

    function addToInv (item) {
        game.inventory.push(item);
        getInv();
    };
    function removeInv (item) {
        let gameInv = game.inventory;
        let index = gameInv.indexOf(item);
        if(index > -1) {
            gameInv.splice(index, 1);
        };
        getInv();
    };

    
    function getInv () {
        const invList = document.querySelector('#inv');
        invList.innerHTML = '';
        let gameInv = game.inventory;
        let gameInvLength = gameInv.length;
        
        for(let i = 0; i < gameInvLength; i++){
            let item = document.createElement('li');
            item.innerText = gameInv[i];
            invList.appendChild(item);
        };

        
    };



    
    
    
}





// ****** CHARACTER SELECT *******

// characterContainer








// ***** COLOR CHANGE BORDER ******






const femaleImg = document.createElement('div');
characterContainer.appendChild(femaleImg);
femaleImg.innerText = 'female';

const maleImg = document.createElement('div');
characterContainer.appendChild(maleImg);
maleImg.innerText = 'male';


femaleImg.addEventListener('click', function(){
    maleImg.style.display = 'none';
});
maleImg.addEventListener('click', function(){
    femaleImg.style.display = 'none';
});







// const optionsLi = document.setOptions.querySelectorAll('li');

const borderContainer = document.createElement('div');
borderContainer.classList.add('borderContainer');
characterContainer.appendChild(borderContainer);

const boxShadowBorder = document.createElement('div');
boxShadowBorder.classList.add('boxshadow-btn');
boxShadowBorder.addEventListener('click', function(){
    let bshadow = '0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee';
    let bs = '1px dashed #ddd';
    gameContainer.style.boxShadow = bshadow;
    gameContainer.style.border = bs;
    setQuestion.style.boxShadow = bshadow;    
    setQuestion.style.border = bs;    
    
})

const blueBorder = document.createElement('div');
blueBorder.classList.add('blue-border-btn');
blueBorder.addEventListener('click', function () {
    let bs = '4px solid lightblue';
    
    gameContainer.style.border = bs;
    setQuestion.style.border = bs;
});

const redBorder = document.createElement('div');
redBorder.classList.add('red-border-btn');
redBorder.addEventListener('click', function () {
    let bs = 'lightcoral 4px solid';
    gameContainer.style.border = bs;
    setQuestion.style.border = bs;
    
});

const greenBorder = document.createElement('div');
greenBorder.classList.add('green-border-btn');
greenBorder.addEventListener('click', function () {
    let bs = 'lightgreen 4px solid';

    gameContainer.style.border = bs;
    setQuestion.style.border = bs;
});

borderContainer.appendChild(blueBorder);
borderContainer.appendChild(greenBorder);
borderContainer.appendChild(redBorder);
borderContainer.appendChild(boxShadowBorder);
