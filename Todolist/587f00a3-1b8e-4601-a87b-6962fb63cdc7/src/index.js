function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        alert(`Welcome, ${username}!`);
    } else {
        alert('Please enter a username.');
    }
}

function displayWelcomeMessage() {
    const savedUsername = localStorage.getItem('username');
    const welcomeMessage = document.getElementById('welcome-message');

    if (savedUsername) {
        welcomeMessage.textContent = `Welcome back, ${savedUsername}!`;
    } else {
        welcomeMessage.textContent = '';
    }
}

window.onload = function () {
    displayWelcomeMessage();
};

const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg'
];

let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 30000);
changeBackground();

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoItems = document.getElementById('todo-items');
    todoItems.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.appendChild(createDeleteButton(index));
        todoItems.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const newTodo = todoInput.value;
    if (newTodo) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        loadTodos();
    }
}

function createDeleteButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = function () {
        deleteTodo(index);
    };
    return button;
}

function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    loadTodos();
}

window.onload = function () {
    displayWelcomeMessage();
    loadTodos();
};

function showWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherDiv = document.getElementById('weather');
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            weatherDiv.textContent = `Location: ${data.name}, Temp: ${data.main.temp}°C, ${data.weather[0].description}`;
        })
        .catch(error => {
            weatherDiv.textContent = 'Unable to retrieve weather data';
        });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather, () => {
            document.getElementById('weather').textContent = 'Geolocation is not supported or permission denied';
        });
    } else {
        document.getElementById('weather').textContent = 'Geolocation is not supported by this browser';
    }
}

getLocation();
