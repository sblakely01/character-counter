# Character Counter App

This is a solution to an academic assignment to build a character counter app that has a text input and displays real-time stats.

## Table of Contents

- [Overview](#overview)
 - [Screenshot](#screenshot)
 - [Reflection](#reflection)
 - [Features](#features)
 - [Built-with](#built-with)
- [Author](#author)

## Overview

### Screenshot

![](./src/assets/Screenshot%202025-10-30%20221529.png)

### Reflection

1. How did you handle state updates when the text changed?

When the text is changed in the textarea, I used an event that updates a prop passed down from the parent App component. The App component can then also pass data including the updated text to other child components like the Character Counter component and the Stats Display component.

2. What considerations did you make when calculating reading time?

When calculating reading time, I had to look up what was considered an average, which is how I got the number 200 words per minute. I used this static variable to calculate the reading time after I had calculated the word count. For the word count, I also had to account for white space in the textarea to make sure it wasn't being counted.

3. How did you ensure the UI remained responsive during rapid text input?

I made sure the UI remained responsive by using React hooks like useEffect and useState to keep the UI updated. I used state for the text input areas, the stats, and the colors that change so that all changes are done in a timely manner as the text is input.

4. What challenges did you face when implementing the statistics calculations?

For the statistics calculation, I did face an initial challenge in finding the regex I needed to get it to work. I also mistakenly put my calculations in a function in the App component at first and had to migrate all of them to the Character Counter component later and change the flow of data through my app to compensate for this. 

### Features

#### Updating Word Count:

- React states are used when the input event is triggered on the textarea to update the word count statistic
- Word count is calculated on update as well as character count using regex

#### Customizable Goals:

- Minimum Word Count Goal and Maximum Word Count Goal can be set using input fields and change color based on if you have met the goals or not

#### Reading Time Calculation:

- Reading time is calculated in minutes as text is entered into the textarea using a static variable set at 200 words per minute

### Built with

- HTML5
- TypeScript
- TailwindCSS [TailWindCSS](https://tailwindcss.com/docs/)

## Author

- Website - [Stephanye Blakely](https://www.stephanyeblakely.com)
- LinkedIn - [Stephanye-Blakely](https://www.linkedIn.com/in/stephanye-blakely)
