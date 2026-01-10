class DinnerRecommender extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'container');

        const menuDisplay = document.createElement('div');
        menuDisplay.setAttribute('class', 'menu-display');
        menuDisplay.textContent = 'Click the button to get a dinner recommendation!';

        const button = document.createElement('button');
        button.textContent = 'Recommend Dinner';

        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .menu-display {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 300px;
                height: 100px;
                border-radius: 10px;
                background-color: var(--card-background, #fff);
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: bold;
                color: var(--text-color, #333);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                text-align: center;
                padding: 20px;
            }
            button {
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 8px;
                border: none;
                background-color: var(--button-background, #4CAF50);
                color: var(--button-text, white);
                cursor: pointer;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                transition: transform 0.2s;
            }
            button:hover {
                transform: scale(1.05);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(menuDisplay);
        wrapper.appendChild(button);

        const menus = ['Pizza', 'Sushi', 'Pasta', 'Steak', 'Salad', 'Tacos', 'Fried Chicken', 'Bibimbap'];

        button.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * menus.length);
            menuDisplay.textContent = menus[randomIndex];
        });
    }
}

customElements.define('dinner-recommender', DinnerRecommender);

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    themeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

function applyTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        body.classList.add('dark-mode');
    }
    themeToggle.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

themeToggle.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', applyTheme);
