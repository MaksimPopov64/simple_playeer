import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



class Thumbnail extends Component {
    render() {
        return (
            <div>
                <List style={{ width: 400 }}>
                    <ListItem
                        innerDivStyle={{ paddingLeft: 80 }}
                        leftAvatar={
                            <img style={{ height: '100%', margin: -16 }} src="https://zartnerds.files.wordpress.com/2015/10/thumbnail.png" />
                        }
                        primaryText="Some Title"
                        secondaryText="That's a good looking thumbnail"
                    />
                </List>
            </div>
        );
    }

}


