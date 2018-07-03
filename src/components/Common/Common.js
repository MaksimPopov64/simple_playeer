import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { httpClient } from '../../client/HttpClient';
import Search from '../controls/Search/Search';
import Thumbnail from '../controls/Thumbnail/Thumbnail';


export default class Common extends Component {

    handleInput = (event) => {
        let search = event.target.value;
        httpClient.getData(search)
            .then(res => {
                this.setState({
                    videos: res,
                });
            });
    };
    paperStyle = {
        height: "55px",
        minWidth: "200px",
        maxWidth: "300px",
        paddingRight: "10px"
    };

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={3}>
                    <Paper style={this.paperStyle}>
                            <Search placeholder="Search..." style={{width: "100px"}} handleChange={this.handleInput}/>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Thumbnail items={this.state.videos}/>
                </Grid>
            </Grid>)
    }


}
