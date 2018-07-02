import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import st from './Video.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.location.state.id
        }
    }


    render() {
        return (
                <Grid container spacing={24} className={st.container}>
                    <Grid item xs={12}>
                        <video
                           src = {`https://www.youtube.com/watch?v=${this.state.videoId}`}
                           crossOrigin="use-credentials"
                        />


                        <Paper>
                            {this.state.videoId.length > 0 &&
                            <iframe  className={st.frame} src={`https://www.youtube.com/embed/${this.state.videoId}`}
                                    frameBorder="0" allowFullScreen/>
                            }
                        </Paper>
                    </Grid>
                </Grid>)


    }


}
