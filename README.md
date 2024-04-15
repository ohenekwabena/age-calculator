# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![This a screenshot of the default state](./src/assets/screenshots/Screenshot%202024-01-12%20at%2012-54-49%20Age%20Calculator.png)

### Links

- Solution URL: [https://github.com/ohenekwabena/age-calculator]
- Live Site URL: [https://age-calculator-woad-ten.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/)

### What I learned

I really enjoyed working with styled-components. I am also glad for the errors and bugs I encountered lol (especially with my form validation logic)- no better way to learn.

```js (css with styled components and triggering animation on value change with styled component props - so amazing!)
<Value animate={valueAnimate}>{count}</Value>;

const Value = styled.span`
  color: var(--purple);
  display: inline-block;
  ${(props) =>
    props.animate &&
    css`
      animation: ${Bump} 1500ms ease-in 2;
    `}
`;
```

```js (function for animating number count)
useEffect(() => {
  if (value === undefined || isNaN(value)) {
    setCount("--");

    return;
  }

  const step = value > count ? 1 : -1;

  const interval = setInterval(() => {
    setValueAnimate(true);
    setCount((prevCount) => {
      const nextCount = prevCount + step;
      return (step > 0 && nextCount <= value) || (step < 0 && nextCount >= value) ? nextCount : value;
    });
  }, 40);
  setValueAnimate(false);
  return () => clearInterval(interval);
}, [value, count]);
```

### Continued development

I struggled a little with logic for form validation. I will hope to learn more about form validation.

Oo and styled-components. They are absolute;y amazing. Just the fact that it can be used with custom props makes it very exciting to work with

### Useful resources

- [Demystifying styled-components](https://www.joshwcomeau.com/react/demystifying-styled-components/) - Josh Comeau's insight into styled components has been most helpful.

- [Props from Child to Parent Component (Hack)](https://www.youtube.com/watch?v=UrpNtB61qyo) - Passing the form data from the Input Form component was a little tricky at first. I didn't want to use complex state management like context or redux. Using functional arguments to pass props is quite simple. Thank you Ania for the refresher.

## Author

- Frontend Mentor - [@ohenekwabena](https://www.frontendmentor.io/home)
- Twitter - [@OheneKwabs](https://twitter.com/OheneKwabs)
- LinkedIn - [](https://www.linkedin.com/in/jesse-adjei-asare-72256a29b/)

## Acknowledgments

Josh Comeau! What a mental motivation this guy is!.I recommend his news letters and courses. He is really great.

And finally a big thank you to frontend Mentor for the design and assist!
