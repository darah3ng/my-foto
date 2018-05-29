import React, { Component } from 'react';
import './Jumbotron.css';
import Navbar from './Navbar';

class Jumbotron extends Component{
    render(){
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <Navbar/>
                    <div className="container">
                        <h1 className="display-3">{this.props.title}</h1>
                        <p className="lead">{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;