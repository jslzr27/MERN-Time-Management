import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Modal, Grid, TextField, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
         <ListItem button onClick={this.handleOpen}>
            <ListItemIcon>
              <i className="fas fa-plus"></i>
            </ListItemIcon>
            <ListItemText>
              Add Activity
            </ListItemText>
          </ListItem> 
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
                <Grid>
                  <Typography id="modal-title" color="textSecondary">
                    Enter your Activity
                  </Typography>
                  <TextField
                    id="standard-name"
                    label="Add Title"
                    className="textField"
                    margin="normal"
                  />
                  <Button id="button" className="primary">Save</Button>
                </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AddActivity = withStyles(styles)(SimpleModal);

export default AddActivity;