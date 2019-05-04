import React, { Component, Fragment } from 'react';
import { Typography, Modal, Button, Paper } from '@material-ui/core';
import "./style.css";


export default class LogActivity extends Component {
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
        return (
        <Fragment>      
                <Button onClick={this.handleOpen}>Log your activity</Button>
                    <Modal
                     aria-labelledby="simple-modal-title"
                     aria-describedby="simple-modal-description"
                     open={this.state.open}
                     onClose={this.handleClose}
                     >
                        <Paper className="modal">
                            <Typography variant="h6" id="modal-title">
                            Total Time
                            </Typography>
                            <Typography variant="subtitle1" id="simple-modal-description">
                            2 Hours
                            </Typography>
                            <Button onClick={this.handleSave}>Save Activity</Button>
                        </Paper>
                    </Modal>
                
        </Fragment> 
        )
    }
}
