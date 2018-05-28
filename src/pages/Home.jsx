import React, { Component } from 'react';

import FlickrImages from '../components/Flickr-Images';

class Homepage extends Component{
    render(){
        return (
            <div className="container">
                <FlickrImages/>
            </div>
        );
    }
}

export default Homepage;