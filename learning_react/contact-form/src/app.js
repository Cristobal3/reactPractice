import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppBar from 'material-ui/AppBar';


const AppBarExampleIcon = () => (
    <AppBar
      title="Navigation"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  );

class App extends Component {
    constructor(){
        super();
        this.state = {
          name: ''
        };
    
    }
    update_name (event) {
        this.setState({name: event.target.value});
      }
    handleSubmit(event) {
        console.log('submitted: ' + this.state.name);
        event.preventDefault();
    }
    render() {
        return (
          <form onSubmit={event => this.handleSubmit(event)}>
            <label>Your Name?</label>
            <input type="text" value={this.state.name}
            onChange={event => this.update_name(event)}/>
            <button type="submit">Submit</button>
          </form>
        );
      }  
}
export default App;