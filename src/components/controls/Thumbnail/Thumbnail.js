import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import ListItemText from '@material-ui/core/ListItemText';


export default class Thumbnail extends Component {
    getVideosId = (videos) => {
        return videos.map((item, id) => {
            let obj = {id: id, videoId: item.id.videoId};
            return obj;
        });
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {items} = this.props;
        const ids = this.getVideosId(items);
        console.log(items);
        return (
            <div>
                {items.length > 0 &&
                <List style={{paddingTop: 0}}>
                    {items.map(item =>
                        <Link to={{
                            pathname: `/video/${item.id.videoId}`,
                            state: {
                                id: item.id.videoId,
                                ids: ids,
                                cardDesc: 'Description'
                            }
                        }} style={{textDecoration: 'none'}}>
                            <Paper>
                            <ListItem value={item}>
                                <img src={item.snippet.thumbnails.default.url}/>
                                <ListItemText primary={item.snippet.title} secondary={item.snippet.description}/>
                            </ListItem>
                            </Paper>
                        </Link>)}
                </List>}
            </div>
        );
    }

}


