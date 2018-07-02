import axios from 'axios';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Search from '../controls/Search/Search';
import Thumbnail from '../controls/Thumbnail/Thumbnail';


export default class Common extends Component {

    handleInput = (event) => {
        console.log(event.target.value);
        const apikey = 'AIzaSyAw3zkUJ1FuAFxMup3THuzep_dWFhkmluw';
        let search = event.target.value;
        const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=10&key=${apikey}&q=${search}&alt=json`;
        axios.get(url, {
            method: 'GET',
                mode: 'no-cors',
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
                credentials: 'same-origin',})
            .then(res => {
                this.setState({
                    videos: res.data.items,
                });
            });
    };

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={3}>
                <Paper style={{height: 55}}>
                <Search handleChange={this.handleInput}/>
                </Paper>
                </Grid>
                <Grid item xs={9}>
                <Thumbnail items={this.state.videos}/>
                </Grid>
            </Grid>)
    }


}
