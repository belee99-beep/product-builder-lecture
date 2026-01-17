const translations = {
    en: {
        recommendation: 'Click the button to get a dinner recommendation!',
        button: 'Recommend Dinner',
        h1: "Can't Decide on Dinner? Let Us Help!",
        formTitle: 'Contact Us',
        labelName: 'Name:',
        labelEmail: 'Email:',
        labelMessage: 'Message:',
        submitButton: 'Submit',
        allCategories: 'All',
        quickEasy: 'Quick & Easy',
        healthy: 'Healthy',
        vegetarian: 'Vegetarian',
        comfortFood: 'Comfort Food',
        exotic: 'Exotic'
    },
    ko: {
        recommendation: '버튼을 눌러 저녁 메뉴를 추천 받으세요!',
        button: '저녁 메뉴 추천',
        h1: '저녁 메뉴를 정하기 힘드신가요? 저희가 도와드릴게요!',
        formTitle: '문의하기',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        submitButton: '제출',
        allCategories: '전체',
        quickEasy: '간편식',
        healthy: '건강식',
        vegetarian: '채식',
        comfortFood: '위안을 주는 음식',
        exotic: '이국적인'
    }
};

const menus = [
    {
        en: { name: 'Pizza', description: 'A classic favorite, perfect for any night of the week.' },
        ko: { name: '피자', description: '일주일 중 어느 날 밤에도 완벽한 클래식한 인기 메뉴입니다.' },
        category: 'comfortFood',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Sushi', description: 'Fresh, flavorful, and a healthy choice for a light dinner.' },
        ko: { name: '스시', description: '신선하고 풍미가 좋으며 가벼운 저녁 식사로 건강한 선택입니다.' },
        category: 'healthy',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Pasta', description: 'A versatile dish that can be customized with your favorite sauce and toppings.' },
        ko: { name: '파스타', description: '좋아하는 소스와 토핑으로 맞춤 설정할 수 있는 다용도 요리입니다.' },
        category: 'comfortFood',
        image: 'https://images.unsplash.com/photo-1579684385127-6f7a6e7c0b92?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Steak', description: 'A hearty and satisfying meal, perfect for a special occasion.' },
        ko: { name: '스테이크', description: '특별한 날에 완벽한 풍성하고 만족스러운 식사입니다.' },
        category: 'comfortFood',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6b5743b89?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Salad', description: 'A light and refreshing option, packed with vitamins and nutrients.' },
        ko: { name: '샐러드', description: '비타민과 영양소가 풍부한 가볍고 상쾌한 옵션입니다.' },
        category: 'healthy',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Tacos', description: 'A fun and flavorful meal that everyone will love.' },
        ko: { name: '타코', description: '모두가 좋아할 재미있고 맛있는 식사입니다.' },
        category: 'quickEasy',
        image: 'https://images.unsplash.com/photo-1565299589934-754f154116d4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Fried Chicken', description: 'Crispy, juicy, and a classic comfort food.' },
        ko: { name: '치킨', description: '바삭하고 육즙이 풍부한 클래식한 위안을 주는 음식입니다.' },
        category: 'comfortFood',
        image: 'https://images.unsplash.com/photo-1569058242252-623df4609e74?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Bibimbap', description: 'A Korean rice dish with a variety of vegetables and meat.' },
        ko: { name: '비빔밥', description: '다양한 야채와 고기가 들어간 한국의 밥 요리입니다.' },
        category: 'healthy',
        image: 'https://images.unsplash.com/photo-1584279141432-099a4db5d433?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Ramen', description: 'A Japanese noodle soup, perfect for a cold day.' },
        ko: { name: '라멘', description: '추운 날에 딱 맞는 일본식 국수입니다.' },
        category: 'comfortFood',
        image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Burrito', description: 'A delicious and filling meal, all wrapped up in a tortilla.' },
        ko: { name: '부리토', description: '토르티야에 싸인 맛있고 든든한 식사입니다.' },
        category: 'quickEasy',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Pho', description: 'A Vietnamese noodle soup with a flavorful broth.' },
        ko: { name: '쌀국수', description: '맛있는 국물이 있는 베트남 국수입니다.' },
        category: 'exotic',
        image: 'https://images.unsplash.com/photo-1585238342070-5221247078e3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        en: { name: 'Pad Thai', description: 'A popular Thai stir-fried noodle dish.' },
        ko: { name: '팟타이', description: '인기 있는 태국 볶음 국수 요리입니다.' },
        category: 'exotic',
        image: 'https://images.unsplash.com/photo-1569720193802-1c6c39a8a7c2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

class DinnerRecommender extends HTMLElement {
    constructor() {
        super();
        this.lang = 'en';
        this.category = 'all';
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'container');

        const categoryFilters = document.createElement('div');
        categoryFilters.setAttribute('class', 'category-filters');

        const menuDisplay = document.createElement('div');
        menuDisplay.setAttribute('class', 'menu-display');

        const menuImage = document.createElement('img');
        menuImage.setAttribute('class', 'menu-image');

        const menuName = document.createElement('p');
        menuName.setAttribute('class', 'menu-name');

        const menuDescription = document.createElement('p');
        menuDescription.setAttribute('class', 'menu-description');

        const button = document.createElement('button');

        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .category-filters {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 20px;
            }
            .category-filters button {
                padding: 10px 20px;
                margin: 5px;
                font-size: 16px;
                border-radius: 8px;
                border: 1px solid var(--button-background, #4CAF50);
                background-color: transparent;
                color: var(--button-background, #4CAF50);
                cursor: pointer;
                transition: background-color 0.2s, color 0.2s;
            }
            .category-filters button.active,
            .category-filters button:hover {
                background-color: var(--button-background, #4CAF50);
                color: var(--button-text, white);
            }
            .menu-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                max-width: 400px;
                min-height: 200px;
                border-radius: 10px;
                background-color: var(--card-background, #fff);
                margin-bottom: 20px;
                color: var(--text-color, #333);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                text-align: center;
                padding: 20px;
                box-sizing: border-box;
            }
            .menu-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 15px;
                display: none; /* Hidden by default */
            }
            .menu-name {
                font-size: 28px;
                font-weight: bold;
                margin: 0;
            }
            .menu-description {
                font-size: 16px;
                margin-top: 10px;
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
        wrapper.appendChild(categoryFilters);
        wrapper.appendChild(menuDisplay);
        menuDisplay.appendChild(menuImage);
        menuDisplay.appendChild(menuName);
        menuDisplay.appendChild(menuDescription);
        wrapper.appendChild(button);

        this.menuImage = menuImage;
        this.menuName = menuName;
        this.menuDescription = menuDescription;
        this.button = button;
        this.categoryFilters = categoryFilters;

        button.addEventListener('click', () => {
            const filteredMenus = this.category === 'all'
                ? menus
                : menus.filter(menu => menu.category === this.category);
            const randomIndex = Math.floor(Math.random() * filteredMenus.length);
            const selectedMenu = filteredMenus[randomIndex];
            this.menuName.textContent = selectedMenu[this.lang].name;
            this.menuDescription.textContent = selectedMenu[this.lang].description;
            this.menuImage.src = selectedMenu.image;
            this.menuImage.style.display = 'block';
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
        // Check if the form elements exist before rendering
        if (document.getElementById('contact-form-title')) {
            this.renderFormElements(this.lang);
        }
        this.renderCategoryFilters();
    }

    renderFormElements(lang) {
        document.getElementById('contact-form-title').textContent = translations[lang].formTitle;
        document.getElementById('label-name').textContent = translations[lang].labelName;
        document.getElementById('label-email').textContent = translations[lang].labelEmail;
        document.getElementById('label-message').textContent = translations[lang].labelMessage;
        document.getElementById('submit-button').textContent = translations[lang].submitButton;
    }

    renderCategoryFilters() {
        this.categoryFilters.innerHTML = '';
        const categories = ['all', 'quickEasy', 'healthy', 'vegetarian', 'comfortFood', 'exotic'];
        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = translations[this.lang][`${category.charAt(0).toLowerCase() + category.slice(1)}`];
            button.dataset.category = category;
            if (category === this.category) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                this.category = category;
                this.renderCategoryFilters();
            });
            this.categoryFilters.appendChild(button);
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

const langToggle = document.getElementById('lang-toggle');

function updateNavigationLinks() {
    const currentLang = document.documentElement.lang;
    const navLinks = document.querySelectorAll('nav ul li a, footer a'); // Select all navigation and footer links

    navLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (!href) return; // Skip if href is null or empty

        // Store original href if not already stored
        if (!link.dataset.originalHref) {
            link.dataset.originalHref = href;
        } else {
            href = link.dataset.originalHref; // Use original href for toggling
        }

        let newHref = href;
        if (currentLang === 'ko') {
            // Convert English pages to Korean pages, but only if they are not already Korean
            if (!href.includes('_ko.html') && href !== 'index.html') { // index.html is the base Korean page
                newHref = href.replace('.html', '_ko.html');
            } else if (href === 'index.html') {
                newHref = 'index.html'; // index.html is considered the default Korean homepage
            }
        } else { // currentLang is 'en'
            // Convert Korean pages back to English pages
            if (href.includes('_ko.html')) {
                newHref = href.replace('_ko.html', '.html');
            }
        }
        link.setAttribute('href', newHref);

        // Update link text for basic navigation items
        // This part needs careful handling if the text is not directly translatable or part of component
        // For simplicity, I'll update the text for known links
        if (link.textContent === 'Home' && currentLang === 'ko') link.textContent = '홈';
        else if (link.textContent === '홈' && currentLang === 'en') link.textContent = 'Home';
        
        if (link.textContent === 'About' && currentLang === 'ko') link.textContent = '소개';
        else if (link.textContent === '소개' && currentLang === 'en') link.textContent = 'About';

        if (link.textContent === 'Contact' && currentLang === 'ko') link.textContent = '문의';
        else if (link.textContent === '문의' && currentLang === 'en') link.textContent = 'Contact';

        if (link.textContent === 'Privacy Policy' && currentLang === 'ko') link.textContent = '개인정보처리방침';
        else if (link.textContent === '개인정보처리방침' && currentLang === 'en') link.textContent = 'Privacy Policy';
    });
}


langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ko' ? 'en' : 'ko';
    document.documentElement.lang = newLang; // Update the document lang attribute

    // Update Web Component languages
    document.querySelectorAll('dinner-recommender').forEach(el => {
        el.lang = newLang;
        el.render();
    });
    
    // Update static navigation links
    updateNavigationLinks();
});

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    // Set initial language based on the document.documentElement.lang (which should be 'ko' now)
    // and then update navigation links based on this initial language
    updateNavigationLinks(); 
});
