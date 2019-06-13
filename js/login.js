let userName = '';

const openingText = `Welcome to your adventure. You are currently in the land of 'Yorsgard'. Adventurer, what is your name?`;

function create (type, text) {
    const element = document.createElement(type);
    document.body.appendChild(element);
    
    if (text) {
        element.innerText = text;
    };
    return element;
    
};

const welcomeText = create('p', openingText);
const nameButton = create('button', 'Name?');

nameButton.addEventListener('click', function(){
    const inputName = create('input');
    const confirmName = create('button', 'Submit');

    confirmName.addEventListener('click', function(){
        userName = inputName.value;
    });
});

