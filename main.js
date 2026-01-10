const translations = {
    en: {
        recommendation: 'Click the button to get a dinner recommendation!',
        button: 'Recommend Dinner',
        h1: 'Dinner Menu Recommendation',
    },
    ko: {
        recommendation: '버튼을 눌러 저녁 메뉴를 추천 받으세요!',
        button: '저녁 메뉴 추천',
        h1: '저녁 메뉴 추천',
    }
};

const menus = [
    {
        en: 'Pizza',
        ko: '피자',
    },
    {
        en: 'Sushi',
        ko: '스시',
    },
    {
        en: 'Pasta',
        ko: '파스타',
    },
    {
        en: 'Steak',
        ko: '스테이크',
    },
    {
        en: 'Salad',
        ko: '샐러드',
    },
    {
        en: 'Tacos',
        ko: '타코',
    },
    {
        en: 'Fried Chicken',
        ko: '치킨',
    },
    {
        en: 'Bibimbap',
        ko: '비빔밥',
    }
];

class DinnerRecommender extends HTMLElement {
    constructor() {
        super();
        this.lang = 'en';
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'container');

        const menuDisplay = document.createElement('div');
        menuDisplay.setAttribute('class', 'menu-display');

        const menuName = document.createElement('p');
        menuName.setAttribute('class', 'menu-name');

        const button = document.createElement('button');

        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .menu-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 300px;
                min-height: 100px;
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
        menuDisplay.appendChild(menuName);
        wrapper.appendChild(button);

        this.menuDisplay = menuDisplay;
        this.menuName = menuName;
        this.button = button;

        button.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * menus.length);
            const selectedMenu = menus[randomIndex];
            this.menuName.textContent = selectedMenu[this.lang];
        });
    }

    connectedCallback() {
        this.lang = document.documentElement.lang || 'en';
        this.render();
    }

    render() {
        this.menuName.textContent = translations[this.lang].recommendation;
        this.button.textContent = translations[this.lang].button;
        document.querySelector('h1').textContent = translations[this.lang].h1;
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

const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    document.documentElement.lang = newLang;
    document.querySelectorAll('dinner-recommender').forEach(el => {
        el.lang = newLang;
        el.render();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    document.documentElement.lang = 'en';
});
