class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'container');

        const numbersDiv = document.createElement('div');
        numbersDiv.setAttribute('class', 'numbers');

        const button = document.createElement('button');
        button.textContent = 'Generate Numbers';

        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .numbers {
                display: flex;
                margin-bottom: 20px;
            }
            .number {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--card-background, #fff);
                margin: 0 5px;
                font-size: 24px;
                font-weight: bold;
                color: var(--text-color, #333);
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            button {
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 5px;
                border: none;
                background-color: var(--button-background, #4CAF50);
                color: var(--button-text, white);
                cursor: pointer;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            }
            button:hover {
                filter: brightness(90%);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(numbersDiv);
        wrapper.appendChild(button);

        button.addEventListener('click', () => {
            this.generateNumbers(numbersDiv);
        });

        this.generateNumbers(numbersDiv);
    }

    generateNumbers(container) {
        container.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        Array.from(numbers).sort((a, b) => a - b).forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.setAttribute('class', 'number');
            numberDiv.textContent = number;
            this.setNumberColor(numberDiv, number);
            container.appendChild(numberDiv);
        });
    }

    setNumberColor(element, number) {
        let color;
        if (number <= 10) {
            color = '#fbc400'; // Yellow
        } else if (number <= 20) {
            color = '#69c8f2'; // Blue
        } else if (number <= 30) {
            color = '#ff7272'; // Red
        } else if (number <= 40) {
            color = '#aaa'; // Gray
        } else {
            color = '#b0d840'; // Green
        }
        element.style.backgroundColor = color;
    }
}

customElements.define('lotto-generator', LottoGenerator);

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

