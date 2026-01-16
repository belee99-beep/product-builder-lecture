# Dinner Menu Recommender

This project is a web-based dinner menu recommendation site. It helps users decide what to have for dinner by providing random meal suggestions.

## Features

- **Categorized Recommendations:** Users can get dinner recommendations based on categories such as 'Quick & Easy', 'Healthy', 'Vegetarian', 'Comfort Food', and 'Exotic'.
- **Recipe Details:** Each recommendation comes with a name, a short description, and an image of the dish.
- **Multi-language Support:** The user interface supports both English and Korean.
- **Dark/Light Mode:** Users can toggle between dark and light themes for better viewing comfort.
- **About Page:** Provides information about the mission and team behind the project.
- **Contact Page:** A dedicated page with a contact form for user feedback and inquiries.
- **Privacy Policy Page:** A detailed privacy policy to inform users about data handling practices.

## Technology Stack

- HTML
- CSS
- JavaScript (Web Components)

## Plan to Address AdSense Rejection

The following changes were made to address the "low-value content" issue and improve the user experience:

1.  **Enriched Content:**
    -   Expanded the dinner menu database with more diverse options.
    -   Added descriptions and images to each menu item to provide more value.
    -   Introduced categories to make the recommendations more relevant to the user.
    -   Created detailed recipe pages (`recipe-pasta.html`, `recipe-salad.html`, `recipe-stew.html`) with ingredients and step-by-step instructions to provide substantial, high-value content.

2.  **Improved Site Structure:**
    -   Created an **About Us** page (`about.html`) to build trust and share the story behind the project.
    -   Created a dedicated **Contact** page (`contact.html`) for user inquiries.
    -   Improved the **Privacy Policy** page (`privacy.html`) with more detailed information.
    -   The "Featured Recipes" section on `index.html` now links to the new detailed recipe pages.

3.  **Enhanced User Interface:**
    -   Redesigned the main page (`index.html`) to feature the improved recommender and added sections for "Featured Recipes" and an "About Us" teaser.
    -   Updated the navigation and footer to include links to the new pages.
    -   Improved the styling (`style.css`) to create a more professional and visually appealing layout.
    -   Added specific styles to `style.css` for the recipe cards and detailed recipe pages to ensure a cohesive and professional look.

4.  **Updated JavaScript (`main.js`):**
    -   The `DinnerRecommender` web component was updated to handle categorized recommendations and display recipe details (image and description).
    -   The translation capabilities were extended to support the new UI elements.