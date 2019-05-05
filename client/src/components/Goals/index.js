import React, { Component, Fragment } from "react";
import { Button, Modal, Typography, Paper } from "@material-ui/core";
import "./style.css";

export default class GoalPage extends Component {
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
        alert("you have a goal")
    }

    render() {
        return (
        <Fragment>      
                <Button onClick={this.handleOpen}>What is your goal</Button>
                    <Modal
                     aria-labelledby="simple-modal-title"
                     aria-describedby="simple-modal-description"
                     open={this.state.open}
                     onClose={this.handleClose}
                     >
                        <Paper className="modal">
                            <Typography variant="h6" id="modal-title">
                            Type a goal
                            </Typography>
                            <Typography variant="subtitle1" id="simple-modal-description">
                            2 Hours per day
                            </Typography>
                            <Button onClick={this.handleSave}>Save Goal</Button>
                        </Paper>
                    </Modal>
                
        </Fragment> 
        )
    }
}
