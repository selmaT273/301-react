## Lab 02

This lab builds on lab01 and so the code for this can be found in that project folder, reflected on a lab02 branch. 

## Overview

By the end of this week, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

Today focuses on using React State and Props. Your goal is to use the JSON file provided to display the title, image and description of each horned beast in your application.

### Feature #1: Display images

#### Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the photo gallery should display all of the images in the gallery

#### How are we implementing it?

- The `Main` component should pass props for the title, image and description to each `HornedBeast` component. You will find this information in the provided JSON file.

### Feature #2: Allow users to vote for their favorite beast

#### Why are we implementing this feature?

- As a user, I want to be able to interact with the site and pick my favorite beast.

#### What are we going to implement?

Given that a user clicks on an image, the number of "favorites" displayed on that image will increase by one.

#### How are we implementing it?

- Create state inside of the `HornedBeast` component that keeps track of the number of times an image was clicked.

- Put a heart in each horned beast with the number of times it was "favorited" next to it.

### Feature 3: Bootstrap

#### Why are we implementing this feature?

- As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the images are displayed on the screen  
Then each image should be rendered in a visually pleasing way  
The images should be displayed in columns, as screen width allows

#### How are we implementing it?

- Bring in the `react-bootstrap` library and use it to style your application making sure that it is responsive.

### Stretch Goal: Add Interaction

#### Why are we implementing this feature?

- As a user, I want to be able to interact with each item on the page.

#### What are we going to implement?

Given that a user clicks on an item other than the horned beasts, such as the title of the page or the footer, the information and styles should change.

#### How are we implementing it?

- When the user clicks on elements such as the header, footer or title of page, make something change using state.
- You can update the words, change the styles or add something new. Be creative.
