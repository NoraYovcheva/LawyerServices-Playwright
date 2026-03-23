# LawyerServices UI Automation (Playwright + JavaScript)

This repository contains an automated UI test suite for a private web application, LawyerServices. The tested website runs in a local development environment and cannot be publicly accessed. Only the automated UI framework and test code are included in this repository.

---

## Technologies Used
- JavaScript
- Playwright
- Page Object Model (POM) design pattern
- Cross-browser testing: Chrome, Safari (handled automatically by Playwright)

---

## Project Description
This test suite covers the key UI flows of the LawyerServices web application, including navigation, home page, footer, and user interactions.  

The framework follows a clean **Page Object Model (POM)** architecture, separating:
- **Pages**: UI elements and actions
- **Tests**: business logic verification
- **Base classes**: shared setup, utilities, waits

A total of 78 automated UI tests are included, covering both positive and negative scenarios. The suite supports cross-browser testing for consistent UI behavior across Chrome and Safari.

---

## Project Structure

/Pages

BasePage.js
DashboardPage.js
FooterPage.js
HomePage.js
LoginPage.js
NavBarPage.js
RegistrationPage.js

/Tests

dashboard.test.js
footer.tests.js
homepage.test.js
login.test.js
navBar.test.js
registration.test.js

README.md
playwright.config.js
package.json



---

## Covered Test Scenarios

### Authentication
- Valid login
- Invalid login
- Empty email
- Empty password
- Validation message checks

### Registration
- Successful registration with random email
- Invalid email formatting
- Password mismatch
- Missing required fields
- Already taken email

### Navigation (NavBar)
- Notary search navigation
- Lawyers search navigation
- For Lawyers page
- Login button
- Registration button

### Dashboard
- Welcome message
- Cards visibility
- Page load validation

### Home Page
- Home page loads correctly (title, subtitle, paragraph)
- City dropdown works correctly
- Activity dropdown works correctly
- Search button navigates to the correct results page

### Footer
- Footer visibility
- Footer sections displayed
- Join button navigation
- Basic link verification

---

## How to Run the Tests

### Requirements
- Node.js
- Visual Studio Code (optional)
- Chrome and Safari browsers (handled automatically by Playwright)

### Steps
1. Clone the repository
2. Open the project folder in VS Code
3. Start the local development server of the tested application
4. Install dependencies:
   ```bash
   npm install
   npx playwright test

---

## Notes

The web application under test is not publicly available.
It runs locally in development mode and cannot be accessed from the Internet.

## This repository showcases:

Automation skills
POM architecture
Test design
Code readability
Real-world UI testing techniques

### Author

Nora Yovcheva (QA Automation Engineer)
Selenium | C# | Playwright | QA | Manual Testing | Automation Frameworks