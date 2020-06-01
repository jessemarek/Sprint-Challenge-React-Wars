# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    *React JS is a component based library. We can keep our code DRY by using small specialized components to be used over and over in our code. React also solves the problem of expensive DOM manipulation by creating a virtual DOM, making changes, comparing the virtual DOM to the actual DOM and then only updating what is different to the actual DOM. It also helps create an environment with less potential problems by keeping track of interactions via state hooks.*

1. Describe component state.

    *State is an object that acts similar to a JS variable declared inside a function. It stores data the component needs to know to do something. For example, this data could be a string of text that component displays to the screen or the URL to an img src.*

1. Describe props.

    *Props are slices of state that we can pass as data from one component to another. Props are read only. The process of passing props is referred to as prop drilling.*

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    *Side Effects are callbacks that are synched to run when with every render of the app, when specific states change, or only with when a component is mounted*
