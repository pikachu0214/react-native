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
function getTitle(title){
    if(title){
        return <h1> {title} </h1>;
    }
}

var template = (
  <div>
        {getTitle(app.title)}
        {(app.subtitle && <p> Subtitle: {app.subtitle} </p>)}
        <p>{app.options.length ? 'Here are your Options' : 'No options'}</p>
        <ol>
            <li>Item one</li> 
            <li>Item two</li>    
        </ol>        
 </div>
);

var user = {
    name: 'Mike',
    age: 36,
    location: 'Boston'
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'} </h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);