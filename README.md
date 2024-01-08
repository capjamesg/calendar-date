# calendar-date

<img width="88" alt="Screenshot 2024-01-08 at 18 57 41" src="https://github.com/capjamesg/calendar-date/assets/37276661/b0e94164-375c-4856-a981-814398b6d0e7">

A web component to show calendar dates on your website.

## Use the Component on Your Website

To use the component on your website, first copy the `calendar-date.js` file onto your website.

Add references to this file in the `<head>` tag of the page on which you want to use the component:

```html
<script src="calendar-date.js" defer></script>
```

Create a new `<template>` tag on your web page and add the following code:

```html
<template id="calendar-styles">
  <style>
      .date-container {
        border: 1px solid red;
        display: inline-block;
        max-width: 100%;
        min-width: 75px;
        text-align: center;
        border-radius: 5px;
    }
    .date-month {
        padding: 5px;
        color: white;
        background-color: red;
    }
    .date-day {
        font-size: 2rem;
        font-weight: bold;
        padding: 5px;
    }
  </style>
</template>
```

Adjust the styles as necessary.

Then, add the `<calendar-date>` component to your website:

```html
<calendar-date month="March" day="31"></calendar-date>
```

The component will appear on your website.

## License

This project is licensed under a [Creative Commons Zero](LICENSE) license.
