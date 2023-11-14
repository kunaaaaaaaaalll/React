const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React!');

const nestedDOM = React.createElement('div', {id: 'parent'},
React.createElement('div', {id: 'child'},[
React.createElement('h1', {}, "i'm in a nested tags"), React.createElement('h2', {}, "i'm in a h2 tag")]));
    // if(heading.props.id === 'heading')
    //     heading.props.children = 'i updated the DOM';
    console.log(nestedDOM);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestedDOM);
