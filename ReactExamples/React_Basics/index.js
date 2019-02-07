import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//------------------------------------------------------------------
// STATE EXAMPLE
//------------------------------------------------------------------
class Test extends React.Component {
    constructor(props) {
       super(props);    
       this.state = {
          header: "Header from state...",
          content: "Content from state..."
       }
    }
    render() {
       return (
          <div>
             <h1>{this.state.header}</h1>
             <h2>{this.state.content}</h2>
          </div>
       );
    }
 }

 ReactDOM.render(
    <Test />,
    document.getElementById('root')
);

//------------------------------------------------------------------
// TICK FUNCTION
//------------------------------------------------------------------
class Clock extends React.Component {
    constructor(props) {
        super(props); //mandatory calls parent constructor
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );
//------------------------------------------------------------------
//------------------------------------------------------------------

//------------------------------------------------------------------
// COMPONENTS AND PROPS
//------------------------------------------------------------------
// function Welcome(props) {
//     return <h1>Hello, {props.name} {props.lname}</h1>;
//   }
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} {this.props.lname}</h1>;
    }
}

const element = <Welcome name="Sara" lname="Walker" />;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
//----------------------------------------------------------------
//----------------------------------------------------------------

// const user = {
//     firstName: 'Andre',
//     lastName: 'R'
// };

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const element = (
//     <h1 id="teste">
//         Hello, {formatName(user)}!
//     </h1>
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
