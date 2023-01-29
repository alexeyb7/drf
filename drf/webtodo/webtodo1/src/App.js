import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        'user': []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/Users/')
            .then(responce => {
                const user = responce.data
                    this.setState(
                        {
                            'user': user
                        }

                    )
            }
            ).catch(error => console.log(error))


    }

    render(){
        return(
        <div>
            <UserList user={this.state.user} />
        </div>
        )
    }
}

export default App;
