import React, { Component } from 'react';


export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.location.state.id
        }
    }

    render() {
        return (
            <div>
                {this.state.videoId.length > 0 &&
                <iframe src={`https://www.youtube.com/embed/${this.state.videoId}`}/>
                }
            </div>
        )
    }


}
