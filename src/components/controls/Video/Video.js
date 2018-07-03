import React, { Component } from 'react';
import st from './Video.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


export default class Video extends Component {

    cardStyle = {
        height: '400px'
    };
    buttonStyle = {
        paddingTop: '15px'

    };
    handleButtonNext = () => {
        if (this.state.id < this.props.location.state.ids.length-1) {
            this.setState({videoId: this.props.location.state.ids[this.state.id + 1].videoId, id: this.state.id + 1})
        } else {
            this.setState({
                videoId: this.props.location.state.ids[this.props.location.state.ids.length/this.props.location.state.ids.length-1].videoId,
                id: this.props.location.state.ids.length/this.props.location.state.ids.length-1
            })
        }
    };

    handleButtonPrev = () => {
        if (this.state.id > 0) {
            this.setState({videoId: this.props.location.state.ids[this.state.id - 1].videoId, id: this.state.id - 1})
        } else {
            this.setState({
                videoId: this.props.location.state.ids[this.props.location.state.ids.length - 1].videoId,
                id: this.props.location.state.ids.length - 1
            })
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.location.state.videoId,
            id: this.props.location.state.id
        }
    }

    render() {
        return (
            <div className={st.container}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Grid container
                              spacing={16}
                              alignItems="center"
                              direction="column"
                              justify="center"
                        >
                            <Paper xs={6} elevation={3} style={this.cardStyle}>
                                <iframe className={st.frame} src={`https://www.youtube.com/embed/${this.state.videoId}`}
                                        width={415} height={350} frameBorder="0" allowFullScreen/>
                                <Grid style={this.buttonStyle}
                                      container
                                      spacing={16}
                                      alignItems="center"
                                      direction="row"
                                      justify="center"
                                >
                                    <Button size="small"
                                            onClick={this.handleButtonPrev}>
                                        Prev
                                    </Button>
                                    <Button size="small" onClick={this.handleButtonNext}>
                                        Next
                                    </Button>
                                </Grid>
                            </Paper>

                        </Grid>
                    </Grid>
                </Grid>
            </div>)


    }


}
