# Passing Functions in Props

### Overview

Today you will be adding a feature to your `Gallery Of Horns` that allows the user to click on an image and display it as a modal.

### Feature #1: Display a Modal

#### Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

#### What are we going to implement?

Given that a user wants to view the details of the image  
When the user clicks on an individual image  
Then the image should render larger on the screen with the description displayed

#### How are we implementing it?

- Import the `data.json` file into your `App` component and send that data into the `Main` component
- Map over the JSON data in your `Main` component to render each beast
- Send a function into your `Main` component that allows the user to update state in the `App`
- Create a `SelectedBeast` component and include it in your `App`
- Use the state in the `App` to render an individual beast in a Modal in the `SelectedBeast` component using React Boothstrap

## Stretch Goal: Fuzzy search

#### Why are we implementing this feature?

- As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

#### What are we going to implement?

Given that a user wants to view specific images  
When the user enters a character into the search field  
Then only the images matching the current set of characters should be displayed on the screen

#### How are we implementing it?

- Create an input element to allow users to search for an image. It is up to you to decide if the user should be able to search by title, keyword, or both.
- Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.