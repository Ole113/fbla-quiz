Strong text means they haven't been added yet.

## Introduction:
    - Reusable UI components
    - Single-page applications, can update the page without reloading
    - When new components are rendered only that node is updated not the whole page.
    - Make it so the know about Reacts Virtual DOM and the advantages of that. 
    - Components are small and simple for reusability, and that makes it easier to debug and maintain.

## Demonstration flowed in a logical sequence; statements were well organized
    - Make sure to include the key words for every point in presentation.
    - Go from home page, quiz page, qa page.
    
## Reports allow user to customize and analyze information, Generate a printable report on quiz results
    - **Let users change data graph to pie chart, bar chart, etc...**
    - **Use localstorage to save the result of each quiz. The user can customize the graph to show their average scores over x amount of time.**
    - **ALLOW PRINTABLE REPORT**

## Program results update dynamically and are error free
    - Quiz questions are added dynamically.
    - Pages load dynamically.
    - Quiz results are dynamically loaded.

## Program use also includes an intelligent feature such as an interactive Q&A, Interface contains no spelling errors, has interactive help menu, and has no navigation errors, All data entry must be validated with appropriate user notifications and error messages including the use of required fields.
    - Navbar to easily navigate around website along with footer links.
    - Right side of navbar has a interactive help menu.
    - All quiz fields are required fields that have appropriate user notifications if fields are empty and quiz is submitted.
    - **NEED INTERACTIVE Q&A**

## Program sequence is logical, error free, and incorporates if-then sequences
    - **If** the home link has been clicked on **then** render home page...
    - **If** the user has clicked on button **then** scroll to points.
    - **If** the user has clicked the button to add more quiz questions **then** add another quiz question.
    - remove quiz question, change quiz type... 

## Program incorporates at least one if-then sequence that saves the user steps, Program does not contain unnecessary steps or complexity
    -  Program is split into components which increases the reusability and decreases the complexity because all of the code is not a jumbled mess.
    - If the user clicks on the learn more butotn then it scrolls to the points. Saves the user from having to scroll to them. This is not a very good example. Think of something better.

## Data storage includes dynamic backup feature, Data storage is clear, and storage is secure 
    - Data is stored in MySQL database.
    - The CRON tab updates the backup file every 3 hours.
    - The database config file is in the .gitignore and the database password is very secure(use a random password generator).

## Identifiers exhibit an advanced knowledge of programming and are accurate in all instances
    - Snack case for constants
    - Pascal case for classes
    - Camel case for variables
    - Private methods have _ before them.

## Program documentation invites use of advanced features
    - Open source, users can modify it any way they want.
    - Users can download the source and add custom questions
