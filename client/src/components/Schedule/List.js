import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TextField from "@material-ui/core/TextField"

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Results(props) {
    let { result } = this.props;
    return (
        <div id="result">
            <p>{result}</p>
        </div>
    )
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

// let totalHours = () => {
//     let arr = document.getElementById("outlined-number");
//     var tot = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(parseInt(arr[i].value)) tot += parseInt(arr[i].value);
//     }
// }

function ScheduleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Working" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            onChange={this.props.getHours}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Going To School" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Sleeping" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Conmuting" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Dining" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Exercising" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Entertainment" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
        />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <i className="fas fa-edit"></i> 
            <i className="far fa-trash-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Other" />
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            defaultValue="0"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal"
            variant="outlined"
            />
        </ListItem>
        <ListItem button>
            <ListItemText>
            <i className="fas fa-plus"></i> Add Activity
            </ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

ScheduleList.propTypes = {
  classes: PropTypes.object.isRequired,
};



// totalHours();
// console.log(totalHours);
export default withStyles(styles)(ScheduleList);