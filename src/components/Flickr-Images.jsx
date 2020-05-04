import React, { Component } from 'react';
import Axios from 'axios';
import './Flickr-Images.css';


const API_KEY = process.env.REACT_APP_API_KEY;
const USER_ID = process.env.REACT_APP_USER_ID;
const URL = "https://api.flickr.com/services/rest/" +
            `?method=flickr.photos.search&api_key=${API_KEY}` +
            `&user_id=${USER_ID}&format=json&nojsoncallback=1`;


function CreatePhoto(props) {
    const urlStaticImage = `https://farm${props.farmID}.staticflickr.com/${props.serverID}/${props.ID}_${props.secret}.jpg`;
    const urlImage = `https://www.flickr.com/photos/${USER_ID}/${props.ID}`;
    return (
        <a href={urlImage}>
            <img src={urlStaticImage} title="Click me" alt={props.title}/>
        </a>
    );
}

function PhotoList({ photos }) {
    return(
        <div>
            {photos.map(photo => {
                return (
                    /*
                    * text-center: to center the heading
                    * d-incline-block: enable this to add mb-3 (margin-bottom: 3)
                    */
                    <div className="text-center d-inline-block col-sm-6 mb-3 border-bottom photolist">
                        <CreatePhoto
                            key={photo.secret}
                            farmID={photo.farm}
                            serverID={photo.server}
                            ID={photo.id}
                            secret={photo.secret}
                            title={photo.title}
                        />
                        <h3>{photo.title}</h3>
                        {/* <p> You can add description here. </p> */}
                    </div>
                )}
            )}
        </div>
    );
}

class FlickrImages extends Component {
    constructor(props){
        super(props);
        this.state = {
            photos: [],
            isLoading: true
        };
    }

    componentWillMount(){
        Axios.get(URL)
            .then((res) => res.data.photos.photo)
            .then((resPhotos) => this.setState({ photos: resPhotos, isLoading: false }))
            .catch((err) => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <PhotoList photos={this.state.photos} />
            </div>
        );
    }
}

export default FlickrImages;