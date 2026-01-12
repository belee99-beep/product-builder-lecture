const translations = {
    en: {
        recommendation: 'Click the button to get a dinner recommendation!',
        button: 'Recommend Dinner',
        h1: "Can't Decide on Dinner? Let Us Help!",
        formTitle: 'Contact Us',
        labelName: 'Name:',
        labelEmail: 'Email:',
        labelMessage: 'Message:',
        submitButton: 'Submit'
    },
    ko: {
        recommendation: '버튼을 눌러 저녁 메뉴를 추천 받으세요!',
        button: '저녁 메뉴 추천',
        h1: '저녁 메뉴를 정하기 힘드신가요? 저희가 도와드릴게요!',
        formTitle: '문의하기',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        submitButton: '제출'
    }
};

const menus = [
    { en: 'Pizza', ko: '피자' },
    { en: 'Sushi', ko: '스시' },
    { en: 'Pasta', ko: '파스타' },
    { en: 'Steak', ko: '스테이크' },
    { en: 'Salad', ko: '샐러드' },
    { en: 'Tacos', ko: '타코' },
    { en: 'Fried Chicken', ko: '치킨' },
    { en: 'Bibimbap', ko: '비빔밥' },
    { en: 'Ramen', ko: '라멘' },
    { en: 'Burrito', ko: '부리토' },
    { en: 'Hamburger', ko: '햄버거' },
    { en: 'Paella', ko: '파에야' },
    { en: 'Pho', ko: '쌀국수' },
    { en: 'Curry', ko: '카레' },
    { en: 'Lasagna', ko: '라자냐' },
    { en: 'Kimchi Stew', ko: '김치찌개' },
    { en: 'Soybean Paste Stew', ko: '된장찌개' },
    { en: 'Grilled Cheese', ko: '구운 치즈 샌드위치' },
    { en: 'Fish and Chips', ko: '피쉬 앤 칩스' },
    { en: 'Dumplings', ko: '만두' },
    { en: 'Spring Rolls', ko: '춘권' },
    { en: 'Pad Thai', ko: '팟타이' },
    { en: 'Meatloaf', ko: '미트로프' },
    { en: 'Chili', ko: '칠리' },
    { en: 'Gnocchi', ko: '뇨끼' },
    { en: 'Fajitas', ko: '파히타' },
    { en: 'Kebab', ko: '케밥' },
    { en: 'Jajangmyeon', ko: '짜장면' },
    { en: 'Tom Yum Goong', ko: '똠얌꿍' },
    { en: 'Moussaka', ko: '무사카' },
    { en: 'Peking Duck', ko: '북경 오리' },
    { en: 'Hot Pot', ko: '훠궈' },
    { en: 'Bulgogi', ko: '불고기' },
    { en: 'Tteokbokki', ko: '떡볶이' },
    { en: 'Mac and Cheese', ko: '맥앤치즈' },
    { en: 'Shepherd\'s Pie', ko: '셰퍼드 파이' },
    { en: 'Risotto', ko: '리조또' },
    { en: 'Goulash', ko: '굴라쉬' },
    { en: 'Ceviche', ko: '세비체' },
    { en: 'Borscht', ko: '보르쉬' }
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
        this.renderFormElements(this.lang);
    }

    renderFormElements(lang) {
        document.getElementById('contact-form-title').textContent = translations[lang].formTitle;
        document.getElementById('label-name').textContent = translations[lang].labelName;
        document.getElementById('label-email').textContent = translations[lang].labelEmail;
        document.getElementById('label-message').textContent = translations[lang].labelMessage;
        document.getElementById('submit-button').textContent = translations[lang].submitButton;
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
