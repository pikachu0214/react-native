'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"
var app = {
    title: "Indecision App",
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
function getTitle(title) {
    if (title) {
        return React.createElement(
            'h1',
            null,
            ' ',
            title,
            ' '
        );
    }
}

var template = React.createElement(
    'div',
    null,
    getTitle(app.title),
    app.subtitle && React.createElement(
        'p',
        null,
        ' Subtitle: ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options.length ? 'Here are your Options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Mike',
    age: 36,
    location: 'Boston'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous',
        ' '
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age,
        ' '
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
