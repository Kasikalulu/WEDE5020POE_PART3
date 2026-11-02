# Mabopane Local Football Association (MABLFA) Website

**Student Name:** Christophe Cishugi  
**Student Number:** ST10538383  
**Module:** WEDE5020 - Web Development (Introduction)  
**Project:** Portfolio of Evidence (PoE)

---

## 1. Project Overview
This project is a responsive, interactive website for the **Mabopane Local Football Association (MABLFA)**. The website serves as a digital hub for the local football community, providing players, fans, and stakeholders with easy access to league tables, match fixtures, historical information, and media. 

The site features a modern dark theme with antique gold accents, designed to look professional while maintaining excellent readability and user experience.

---

## 2. Website Goals and Objectives
*   **Improve Grassroots Exposure:** Provide a professional platform for local football to be recognized.
*   **Accessibility:** Ensure the site is fully responsive and accessible on desktop, tablet, and mobile devices.
*   **User Engagement:** Allow users to easily view league standings, browse the gallery, and contact the association.
*   **Digital Presence:** Establish a dedicated online space for the MABLFA to share news and updates.

---

## 3. Key Features and Functionality
*   **Responsive Design:** Fluid layouts using percentages and media queries (breakpoints at 960px and 480px) to ensure the site looks great on all devices.
*   **Interactive Sign-In Modal:** A JavaScript-driven pop-up modal accessible from the top right of every page.
*   **Dynamic Gallery Lightbox:** Clicking an image in the gallery opens a larger, full-screen version with a dark overlay.
*   **League Table Search:** A JavaScript search filter that allows users to type a team name and instantly filter the league table.
*   **Form Validation:** JavaScript validation on both the `enquiry.html` and `contact.html` forms to check for empty fields, valid email formats, and 10-digit phone numbers before showing a success message.
*   **Embedded Google Maps:** A fully interactive map on the contact page showing the Mabopane location.

---

## 4. Sitemap
The website consists of 7 interlinked pages, all sharing the same consistent header, navigation, and footer:

*   `index.html` (Home)
*   `gallery.html` (Photo Gallery)
*   `about.html` (About Us & Mission)
*   `leaguetable.html` (League Standings & Fixtures)
*   `history.html` (Organization History & The Football Pyramid)
*   `enquiry.html` (Volunteer/Sponsor Enquiry Form)
*   `contact.html` (Contact Details & Map)

---

## 5. Live Website Link
You can view the live, deployed version of this website here:
**[INSERT YOUR LIVE LINK HERE]** *(e.g., https://yourusername.github.io/mablfa-website/)*

---

## 6. Changelog (Part 1, 2, and 3)

### Part 1: Building the Foundation
*   Created the initial HTML structure for all pages.
*   Implemented semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<footer>`).
*   Added text content, images, and organized the file/folder structure (CSS, JS, Images).

### Part 2: Designing the Visuals
*   Created an external stylesheet (`Style.css`) and linked it to all pages.
*   Implemented a CSS Reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`).
*   Applied a dark theme with gold accents and serif/sans-serif typography.
*   Utilized `float` layouts to create the 4-column card grid on the homepage and the two-column layout on the league page.
*   Added link pseudo-classes (`:hover`, `:focus`, `:active`) for better user interaction.
*   Implemented responsive media queries at `960px` (tablet) and `480px` (mobile) to stack columns and resize fonts.
*   Added embedded and inline CSS to specific pages for targeted styling.

### Part 3: Enhancing Functionality and SEO
*   **JavaScript Integration:** Moved all scripts to an external `script.js` file for better organization.
*   **Modals:** Created a JavaScript-driven Sign-In modal popup that works across all pages.
*   **Gallery Lightbox:** Added a JavaScript lightbox feature so gallery images expand when clicked.
*   **Dynamic Search:** Added a live search filter to the League Table so users can search for specific teams.
*   **Form Validation:** Added client-side JavaScript validation to the Contact and Enquiry forms (checking for valid emails and 10-digit phone numbers).
*   **SEO:** Added meta descriptions, meta keywords, and title tags to all HTML pages. Added `robots.txt` and `sitemap.xml` to the root folder.
*   **Deployment:** Configured the site for live hosting.

---

## 7. AI Disclosure
I acknowledge the use of **ChatGPT (OpenAI, 2026)** as a coding assistant to help debug HTML/CSS layouts, generate JavaScript functionality (modals, lightboxes, and form validation), and assist with optimizing the responsive design. 

All AI-generated code was reviewed, tested, and understood by me before being implemented. The AI was used as a learning tool to explain concepts from the WEDE5020 module (such as the CSS box model and DOM manipulation) and to ensure the code adhered to best practices.

---

## 8. References

MDN Web Docs. (2026). *CSS: Cascading Style Sheets* [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 02 November 2026).

MDN Web Docs. (2026). *Using media queries* [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries (Accessed: 02 November 2026).

OpenAI. (2026). *ChatGPT assistance for WEDE5020 HTML, CSS, and JavaScript development* [AI-generated content]. Generated on various dates in 2026.

The Independent Institute of Education. (2026). *WEDE5020 Web Development (Introduction): Portfolio of Evidence (PoE) Assessment Brief* [Module Documentation]. The IIE.

The Independent Institute of Education. (2026). *WEDE5020 Web Development (Introduction): Week 5 Slides – Introduction to CSS* [Module Slides]. The IIE.

The Independent Institute of Education. (2026). *WEDE5020 Web Development (Introduction): Week 6 Slides – CSS Decoration, Typography, and Selectors* [Module Slides]. The IIE.

The Independent Institute of Education. (2026). *WEDE5020 Web Development (Introduction): Week 7 Slides – Responsive Web Design* [Module Slides]. The IIE.

W3Schools. (2026). *CSS Responsive Web Design* [Online]. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed: 02 November 2026).

W3Schools. (2026). *JavaScript Tutorial* [Online]. Available at: https://www.w3schools.com/js/ (Accessed: 02 November 2026).

---

*All sources referenced using the Harvard referencing style adapted for The IIE, as required by the WEDE5020 module guidelines.*
