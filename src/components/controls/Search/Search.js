import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 285,
    },

});

class Search extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { classes, handleChange } = this.props;
        return <TextField
            type="search"
            onChange={e => handleChange(e)}
            className={classes.textField}
            margin="normal"
        />
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
