let questions = [
    {
        question: "Hi there! How are you today? Do you feel happy?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "That's amazing! :D",
        incorrectResponse: "I am sorry :("
    },
    {
        question: "Do you like coding?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Awesome!",
        incorrectResponse: "Give it time, you'll start to like it someday :)"
    },
    {
        question: "Do you prefer light color or dark colors or dogs?",
        options: {
            a: "Dark Colors",
            b: "Light Colors"
        },
        correctAnswer: "a",
        correctResponse: "Me too!  &#128049",
        incorrectResponse: "Yay! Light colors are very pretty &#128054"
    },

    {
        question: "Fall or spring?",
        options: {
            a: "Fall",
            b: "Spring"
        },
        correctAnswer: "a",
        correctResponse: "Great! There's a lot of stuff to do in the summer!",
        incorrectResponse: "Nice! Snow is very beautiful."
    }
];

let currentQuestionIndex = 0;

let chatContainer = document.getElementById("messages-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

document.addEventListener("DOMContentLoaded", function () {
    displayQuestion();
});

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    let optionsHTML = Object.keys(currentQuestion.options)
        .map(key => `<br><strong>${key}:</strong> ${currentQuestion.options[key]}`)
        .join('');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}${optionsHTML}`;

    chatContainer.appendChild(botResponse);
    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let userResponse = userInput.value.trim().toLowerCase();

    if (!userResponse) return;

    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];

    let botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot");
    botResponse.innerHTML = `<strong>Bot:</strong> `;

    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }

    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";

    displayQuestion();
    scrollChatContainerToBottom();
});
