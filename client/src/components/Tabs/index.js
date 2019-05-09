import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "inherit",
    border: 0,
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  tabsRoot: {
    borderBottom: '1px solid #000000',
    textAlign: 'center',

  },
  tabsIndicator: {
    backgroundColor: '#8bea43',
  },
  tabRoot: {
    textTransform: 'initial',
    textAlign: 'center',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#8eba43',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#000000',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#000000',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class MenuTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
        <Router>
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Home"
            href="/"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Sign Up"
            href="/signup"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Dashboard"
            href="/dashboard"
          />
          </Router>
        </Tabs>
      </Paper>
    );
  }
}

MenuTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuTabs);