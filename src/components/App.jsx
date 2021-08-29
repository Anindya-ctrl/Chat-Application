import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';
import Login from './Login';
import { useAuth } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/App.css';

function App() {
    const { currentUser } = useAuth();

    return (
        <div className="app">
            {
                currentUser ? (
                    <Router>
                        <Sidebar />
        
                        <Switch>
                            <Route path="/room/:roomId" component={ Chat } />
                        </Switch>
                    </Router>
                ) : (
                    <Login />
                )
            }
        </div>
    );
}

export default App;
