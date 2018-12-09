import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';

class App extends Component {

  // handleClick = () => {
  //   console.log('hello')
  //   this.props.changeExampleMessage()
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
      { /* <img src={logo} className="App-logo" alt="logo" /> */ }
            <NavBar />
          </div>
        </header>
        {/* <h3> { this.props.exampleMessage }</h3>
        <button onClick={this.handleClick}> Click me </button> */}
      </div>
    );
  };
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     exampleMessage: state.exampleState.exampleMessage
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeExampleMessage: () => { dispatch(changeExampleMessage()) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
