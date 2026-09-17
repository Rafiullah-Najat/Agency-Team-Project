# Agency-Team Project

A responsive agency/team landing page built with HTML, CSS, and JavaScript. The project includes a navigation bar, hero section, services, portfolio, company timeline, team members, client logos, contact form, and footer.
---

Demo: https://rafiullah-najat.github.io/Agency-Team-Project/

---
## ✨ Features
* Navigation Bar
* Fixed navigation bar
* Agency logo
* Navigation links
* Responsive hamburger menu
* Animated hamburger icon
* Smooth scrolling to sections
* Hero Section
* Full-width background image
* Welcome message
* Large heading
* Call-to-action button

📁 Project Structure
Agency-Team-project/
│
├── index.html
├── style.css
├── script.js
│
├── img/
│   ├── navbar-logo.svg
│   ├── header-bg.jpg
│   ├── map-image.png
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   ├── 5.jpg
│   ├── 6.jpg
│   ├── 1 (1).jpg
│   ├── 2 (1).jpg
│   ├── 3 (1).jpg
│   ├── 4 (1).jpg
│   ├── 1 (2).jpg
│   ├── 2 (2).jpg
│   ├── 3 (2).jpg
│   ├── microsoft.svg
│   ├── google.svg
│   ├── facebook.svg
│   └── ibm.svg
│
└── README.md

🚀 Getting Started
1. Clone the Repository
git clone <your-repository-url>

2. Open the Project

Navigate to the project directory:

cd Agency-Team-project

3. Run the Website

No build tools or dependencies are required.

Simply open:

index.html


in your web browser.

For a better development experience, you can use the Live Server extension in Visual Studio Code.

📱 Responsive Design

The website includes responsive breakpoints for different screen sizes:

Desktop

Tablet

Small tablet

Mobile

Small mobile devices

The navigation changes to a hamburger menu on smaller screens, while sections such as services, team members, clients, and the contact form adapt to smaller viewport sizes.

🎨 Design

The project primarily uses:

Yellow: #ffc800

Dark: #212529

Light background: #f8f9fa

Secondary text: #6c757d

The design uses a clean agency-style layout with rounded elements, large typography, image cards, and subtle hover transitions.

⚙️ JavaScript Functionality

The JavaScript currently handles:

Mobile Menu

Clicking the hamburger button toggles:

.active on the menu button

.open-menu on the navigation menu

Clicking a navigation link automatically closes the mobile menu.

Contact Form

The JavaScript is intended to display a thank-you message when the form fields are filled.

Note: There is currently a small selector issue in script.js. The textarea has the ID meassage, while the JavaScript searches for #message. These IDs should be made consistent for the form validation to work correctly.

For example, change:

id="meassage"


to:

id="message"

🔧 Possible Improvements

Future improvements could include:

Connect the contact form to a backend/email service

Add real social media links

Add functional Privacy Policy and Terms of Use pages

Improve accessibility with better alt text and ARIA labels

Add form error messages

Add loading states for form submission

Optimize images for faster loading

Add a favicon

Improve keyboard navigation

Add more sophisticated portfolio filtering

Use CSS variables for repeated colors and sizes

Add animations when sections enter the viewport

🧑‍💻 Author

Rafiullah Najat

This project was created as a front-end web development practice project.
