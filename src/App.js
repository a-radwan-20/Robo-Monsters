import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value});
    }

    render() {
            const fRob = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1> Robo Monsters </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={fRob} /> 
            </div>
        );
    }
}

export default App;