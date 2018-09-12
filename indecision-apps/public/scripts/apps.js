'use strict';

console.log('app.js is up and running again');
// JSX - Javascript XML

var user = {
    title: 'Movie',
    subtitle: 'Infinity War',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.title
    ),
    user.subtitle && React.createElement(
        'p',
        null,
        user.subtitle
    ),
    React.createElement(
        'p',
        null,
        user.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Infinity War Part 1'
        ),
        React.createElement(
            'li',
            null,
            'Infinity War Part 2'
        )
    )
);

var user = {
    name: 'Mike',
    age: 29,
    location: 'Hyvinkää Finland'
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
};

var userName = 'Mike';
var userAge = 26;
var userLocation = 'Philadelphia';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
