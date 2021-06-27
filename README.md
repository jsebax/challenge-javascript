# FooCamp - Challenge JavaScript

In this challenge you will add some interactions to a page using JavaScript. The base project is about a **Pokedex** page that displays the list of the first 151 Pokemon.

![Tablet Screenshot](/screenshots/tablet.png?raw=true)

## Tech Stack

This project is built using the following technologies:

- HTML5
- CSS3
- JavaScript
- PokéAPI

## Folder Structure

The project has the following folder structure:

```
.
├── assets (logos, images, etc)
├── screenshots
├── src
│   ├── api
│   │   └── index.js
│   ├── dom
│   │   └── index.js
│   ├── utils
│   │   └── index.js
│   └── main.js
├── index.html
├── styles.css
└── README.md
```

### HTML

The HTML has a simple structure using semantic tags and BEM naming convention for the classes.

Pay attention to the classes and IDs used for the elements as they are key to interact with them from JavaScript.

Note there is an empty `<div>` with an id `app` at the bottom of the HTML. This `<div>` is used to inject the elements dynamically from JavaScript using the data retrieved from the API.

```html
<div class="container" id="app"></div>
```

In order to use JavaScript modules and be able to separate the code in different JS files, the `<script>` tag needs a value of `module` for the attribute `type`.

```html
<script type="module" src="src/main.js"></script>
```

### CSS

The `styles.css` file is composed by all the page styles. There are some global styles at the beginning of the file, followed by the component styles used in the app.

- CSS Grid was used for the alignment of the card components in the page. You can see more information about this layout [here](https://css-tricks.com/snippets/css/complete-guide-grid/).

- BEM was used for the naming convention of the CSS classes.

- The breakpoints used for the responsive design are:
	- Small: 0px - 719px
	- Medium: 720px - 959px
	- Large: 961px and up

### JS

In the `src` folder you can find the JavaScript files used in the project.

The entry point of the application is the `main.js` file. In this file there is a function where the main functionalities of the application are called.

At the beginning of the file you can see the functions used are being imported from other files using the `import` statement.

#### API

In the `api` folder, you can find a `index.js` file where there are some useful functions to retrieve the information from the API.

The main function is `getPokemonList` which gets the information of the first 151 Pokemon.

- Id: The Pokemon id in the directory
- Name: The Pokemon name
- Image: The image to display of the Pokemon
- Types: A list of types of the Pokemon (e.g. Grass, Poison, Electric, etc.)

The API used for this project is _PokéAPI_. You can find the official documentation [here](https://pokeapi.co/).

### DOM

In the `dom` folder, there are some functions used to inject elements to the HTML DOM.

There are two main functions used here to create and add elements to the page.

- `createPokemonList`: Creates a `ul` element and, using the API data for the Pokemon, go through the list and create an `li` element for each item with its respective CSS class and data. At the end it appends the `ul` to a given DOM element passed as a parameter to the function.

- `createDropdownTypes`: This function creates an `option` element for each Pokemon type (Grass, Electric, etc.) retrieved from the API. Each `option` is appended to a given DOM element passed as a parameter to the function.

### Utils

In the `utils` folder, you can create utility functions that can be used in the application to perform specific logic.

- `leadingZeros`: This function add an amount of `zeros` to a number depending on its digits. If the numbers has one digit it adds two `zeros` at the beginning; if it has two digits it adds one `zero`; otherwise it returns the original number. For example, the number `14` becomes `014`. This is used to display the Pokemon id in the format `#001`, `#002`, etc.

## The Challenge

The challenge consists in adding two functionalities to the page.

1. **Change page theme:** When clicking on the toggle button in the top right corner in the header, the page should change to the corresponding theme (light or dark).
The steps to develop this functionality are:
	- Determine which DOM element you need to _listen_ to. Use a class selector or an id to get the element in JavaScript.
	- Add an event listener to the element. Which event type you need to listen to?
	- There is a CSS class called `.dark` you need to add to an DOM element. Which DOM element?
	- Depending on the checkbox value (true or false) add or remove the CSS class from the DOM element

![Dark Theme](/screenshots/dark-theme.png?raw=true)

2. **Filter the cards by Pokemon type:** In the page header there is a dropdown with the different types of Pokemon retrieved from the API. The functionality you need to add is, when selecting an option from the dropdown, display only the Pokemon that has that selected type, and hide the others.
The steps to develop this functionality are:
	- Determine which DOM element you need to _listen_ to. Use a class selector or an id to get the element in JavaScript.
	- Add an event listener to the element. Which event type you need to listen to?
	- Get the value of the option selected in the dropdown
	- Get the card items from the HTML using the corresponding CSS selector (_hint:_ `.card-list__item`)
	- Go through the array of items, and retrieve the attribute called `data-types` which has the types of the Pokemon in a string format like `grass,poison`. How to get an attribute from a DOM element?
	- Determine if the item needs to be hidden or visible
	- Add or remove the CSS class called `.hide` to display or hide the element
	- If the option `All` is selected in the dropdown, you need to display all the cards

![Filter by Type](/screenshots/filter.png?raw=true)

### Where to start?

In the `main.js` file there is an empty function called `addListeners`. This is where you put the code for the two functionalities you need to develop.

```javascript
const addListeners = () => {
// Code goes here
}
```

### Pull Request

In order for us to review your solution, you need to create a Pull Request (PR) with the following specifications.

- Create your branch based off `develop` branch
- The branch name must follow this convention: `feature/name-lastname-functionality-challenge-js`. Where you replace `name` and `lastname` with yours, and `functionality` with the functionality you developed (e.g `theme`, `filter`, or both). Example, `feature/jhon-doe-theme-challenge-js`
- When creating a PR, you will see that there is a template you must follow in order to keep the convention defined in the repository. The title of the PR should be your branch name. Remember to add the teachers as reviewers.
- Add your name and lastname in the Author section
- Add a description explaining what you did in this branch
- Add screenshots with the work you did
- You can create a PR per functionality. It means, you can create a PR including the light/dark theme functionality, and then create another branch where you can develop the other functionality

![PR Template](/screenshots/pr-template.png?raw=true)

## Resources

- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- BEM: http://getbem.com/introduction/
- PokéAPI: https://pokeapi.co/
- DOM manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#core_interfaces_in_the_dom
- Add CSS class: https://www.w3schools.com/howto/howto_js_add_class.asp
- Remove CSS class: https://www.w3schools.com/howto/howto_js_remove_class.asp
- Toggle CSS class: https://www.w3schools.com/howto/howto_js_toggle_class.asp
- DOM Event listeners: https://www.w3schools.com/js/js_htmldom_eventlistener.asp