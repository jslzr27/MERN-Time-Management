import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TextField from "@material-ui/core/TextField"
import AddActivity from '../AddActivity';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ListItemTask extends Component {
    render() {
        return (
            <ListItem id={this.props.id}>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt" onClick={this.props.delete}></i>
            </ListItemIcon>
            <ListItemText primary={this.props.primary} />
                <TextField
                id="outlined-number"
                label="Hours"
                name="hours"
                type="number"
                defaultValue="0"
                // onChange={this.props.getHours}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
                onChange={this.handleHours}
                />
        </ListItem>
        )
    }
}


class ScheduleList extends Component {
    state = {
        postItems: [
            {id: 1, primary: "Working"},
            {id: 2, primary: "Traveling"},
            {id: 3, primary: "Sleeping"},
            {id: 4, primary: "School"},
            {id: 5, primary: "Dining"},
            {id: 6, primary: "Exercising"},
            {id: 7, primary: "Entertainment"},
            {id: 8, primary: "Other"},            
        ],
        primary: "",
        id: "",
    }

    postID = this.state.postItems.id;


    deleteTask = (index) => {
        const copyPostItems = Object.assign([], this.state.postItems);
        copyPostItems.splice(index, 1);
        this.setState({
            postItems: copyPostItems
        })
    }

    render() {
        const { classes } = this.props;
        return (
        <div className={classes.root}>
        <List>
            {this.state.postItems.map((post, index) => {
                return (
                    <ListItemTask 
                        key={post.id}
                        id={post.id}
                        primary={post.primary}
                        delete={this.deleteTask.bind(this, index)}
                        // onChange={this.props.getHours}
                    />
                )
            } )}      
            <AddActivity />
        </List>
        </div>
        )
    }
}

ScheduleList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ScheduleList);