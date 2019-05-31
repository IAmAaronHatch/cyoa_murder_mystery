// a = act , s = scene , t = text

// const i = 0;
// const speed = 50;

var i = 0;
var speed = 50;

// // SCRIPT
const a1s1t1 = 'Hello World, this is the first prompt';
// const a1s1t2 = 'This is the continuation prompt that follows, so number two';

const write_a1s1t1 = () => {
    if (i < a1s1t1.length) {
        document.getElementById("introPrompt-1").innerHTML += a1s1t1.charAt(i);
        i++;
        setTimeout(write_a1s1t1, speed);
    }
}
// const write_a1s1t2 = () => {
//     if (i < a1s1t2.length) {
//         document.getElementById("introPrompt-2").innerHTML += a1s1t2.charAt(i);
//         i++;
//         setTimeout(write_a1s1t2, speed);
//     }
// }
