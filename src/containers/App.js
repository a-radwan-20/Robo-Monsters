import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){ 
        fetch('https://jsonplaceholder.typicode.com/users')
        //fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }
    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;
            const fRob = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1> Robo Monsters </h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={fRob} /> 
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;