const Questions = [{
    id: 0,
    q: "Combien de tonnes de cO2 émet une voiture intermédiaire diésel (ex: Ford Fusion) sur 100 000km?",
    a: [{ text: "Environ 13", isCorrect: false },
        { text: "Environ 12", isCorrect: false },
        { text: "Environ 21", isCorrect: false },
        { text: "Environ 15", isCorrect: true }
    ], 
    textCorrect : "C'est vrai ! Sachez que 15 tonnes de cO2 équivaut à environ 8 670 520 km de TGV. Pensez-y lors de votre prochain long trajet.",
    textBadAnswer: "C'est faux ! Il s'agit de 15 tonnes. Sachez, par ailleurs, que 15 tonnes de cO2 équivaut à environ 8 670 520 km de TGV. Pensez-y lors de votre prochain long trajet.",
},
{
    id: 1,
    q: "En moyenne, combien de tonnes émet un vol aller-retour Paris-New York?",
    a: [{ text: "4 tonnes", isCorrect: false, isSelected: false },
        { text: "11 tonnes", isCorrect: false },
        { text: "6 tonne", isCorrect: false },
        { text: "1 tonne", isCorrect: true },
    ],
    textCorrect: "C'est tout à fait vrai ! Une tonne de cO2 est l'équivalent de 54 jours de chauffage au gaz. Aie?",
    textBadAnswer: "C'est faux, il s'agit d'une tonne. Une tonne de cO2 est l'équivalent de 54 jours de chauffage au gaz. Aie?"
},
{
    id: 2,
    q: "Combien de tonnes de cO2 émet la construction d'une batterie de voiture électrique?",
    a: [{ text: "Environ 2.5 tonnes", isCorrect: false },
        { text: "Environ 9.5 tonnes", isCorrect: false },
        { text: "Environ 17.5 tonnes", isCorrect: true },
        { text: "Environ 11 tonnes", isCorrect: false },
    ],
    textCorrect: "C'est vrai ! Plutôt énorme en vue des questions précédentes, n'est-ce pas? C'est l'équivalent d'environ 94 086 km en avion. Wow.",
    textBadAnswer: "Eh non, il s'agit de 17.5 tonnes en moyenne. Plutôt énorme en vue des questions précédentes, n'est-ce pas? Et c'est l'équivalent d'environ 132 575 758 litres d'eau du robinet !"
}
]

// Set start
var start = true;

// Iterate
function iterate(id) {
    const next = document.getElementById('next');
    const submit = document.getElementById('submit');

    if (id == 2) {
        next.classList.add('hide');
    }

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.style.backgroundColor = "var(--bs-light)";
op2.style.backgroundColor = "var(--bs-light)";
op3.style.backgroundColor = "var(--bs-light)";
op4.style.backgroundColor = "var(--bs-light)";

// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "var(--grey)";
    op2.style.backgroundColor = "var(--bs-light)";
    op3.style.backgroundColor = "var(--bs-light)";
    op4.style.backgroundColor = "var(--bs-light)";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "var(--bs-light)";
    op2.style.backgroundColor = "var(--grey)";
    op3.style.backgroundColor = "var(--bs-light)";
    op4.style.backgroundColor = "var(--bs-light)";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "var(--bs-light)";
    op2.style.backgroundColor = "var(--bs-light)";
    op3.style.backgroundColor = "var(--grey)";
    op4.style.backgroundColor = "var(--bs-light)";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "var(--bs-light)";
    op2.style.backgroundColor = "var(--bs-light)";
    op3.style.backgroundColor = "var(--bs-light)";
    op4.style.backgroundColor = "var(--grey)";
    selected = op4.value;
})

// Submit method
submit.addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = Questions[id].textCorrect;
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = Questions[id].textBadAnswer;
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id <= 2) {
    id++;
    iterate(id);
    console.log(id);
}
})