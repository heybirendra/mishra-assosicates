# KK Mishra & Associates - Legal Advocates Website

This project is the official website for **KK Mishra & Associates**, a distinguished legal firm providing expert legal services across Bihar and Jharkhand. The firm is led by Advocates **Kamal Kishore Mishra** and **Jitendra Kumar Mishra**, offering representation in Session Courts, District Courts, and High Courts.

## Project Overview

The website serves as a digital portfolio and contact point for the firm, showcasing their expertise, experience, and successful case history. It is designed to be professional, responsive, and user-friendly.

### Key Features

*   **Responsive Functionality**: Fully responsive design that works seamlessly on mobile, tablet, and desktop devices.
*   **Dynamic Home Page**:
    *   **Hero Section**: engaging introduction with call-to-action buttons.
    *   **About Section**: Highlights the firm's experience with animated statistics counters.
    *   **Advocate Profiles**: Brief introductions linking to detailed profile pages.
    *   **Notable Cases**: A showcase of significant legal victories.
*   **Dedicated Advocate Pages**: detailed profiles for both Kamal K. Mishra and Jitendra K. Mishra, outlining their qualifications and experience.
*   **Practice Areas**: Information on specializations like Criminal Defense, Civil Litigation, Property Disputes, Family Law, etc.
*   **Interactive Contact Form**: A functional contact form integrated with **EmailJS** for direct inquiries.
*   **Modern UI/UX**: Features smooth scrolling, scroll-triggered reveal animations, and a clean, professional aesthetic.

## File Structure

*   `index.html`: The main landing page of the website.
*   `kamal-mishra.html`: Detailed profile page for Advocate Kamal Kishore Mishra.
*   `jitendra-mishra.html`: Detailed profile page for Advocate Jitendra Kumar Mishra.
*   `contact.html`: Dedicated contact page with the inquiry form.
*   `styles.css`: Global stylesheet containing all design variables and styles.
*   `script.js`: Main JavaScript file handling UI interactions (mobile menu, animations, scrolling).
*   `contact-validation.js`: Handles contact form validation and EmailJS integration.
*   `load-footer.js`: Utility script to dynamically load the footer across pages.
*   `EMAILJS_SETUP.md`: Documentation for configuring the contact form backend.

## functionality & Setup

1.  **Opening the Site**: content can be viewed simply by opening `index.html` in any modern web browser. No server-side installation is strictly necessary for viewing static content.
2.  **Contact Form**: The contact form relies on **EmailJS**.
    *   Refer to `EMAILJS_SETUP.md` for detailed instructions on how to configure your EmailJS account and update the API keys in the code to make the form functional.

## Technologies Used

*   **HTML5**: Semantic structure.
*   **CSS3**: Custom styling with CSS variables for consistent theming.
*   **JavaScript (ES6+)**: DOM manipulation, animations, and form handling.
*   **EmailJS**: Third-party service for sending emails directly from the browser.

## Customization

To update content:
-   **Text/Images**: Modify the respective `.html` files (`index.html`, etc.).
-   **Styles**: Edit `styles.css` to change colors, fonts, or layout.
-   **Functionality**: Edit `script.js` for UI behavior or `contact-validation.js` for form logic.

---
*Developed for KK Mishra & Associates.*
