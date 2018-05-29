import React, { Component } from 'react';
import FlickrImages from '../components/Flickr-Images';
import Jumbotron from '../components/Jumbotron';
import './Home.css';

class Homepage extends Component{
    render(){
        return (
            <div className="mainHomepage">
                <Jumbotron title="Welcome!" subtitle="You can find my best photo collection here." />
                <FlickrImages/>
            </div>
        );
    }
}

export default Homepage;