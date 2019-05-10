import React, { Component, Fragment } from 'react';
import { Typography, Modal, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import "./style.css";

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


class LogActivity extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    } 

    handleSave = () => {
        alert("you saved")
    }

    render() {
        const { classes } = this.props;
        return (
        <Fragment>      
                <Button onClick={this.handleOpen} id="button">Log your activity</Button>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                >
                 <div style={getModalStyle()} className={classes.paper}>
                 <Typography variant="h6" id="modal-title">
                    Total Time
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                </Typography>
                <Button onClick={this.handleSave}>Save Activity</Button>
                 </div>
                </Modal>
        </Fragment> 
        )
    }
}

export default withStyles(styles)(LogActivity);
