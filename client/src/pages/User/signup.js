import React, { Component, ReactPropTypes } from 'react';
// import UserForm from "./UserForm";
import "./style.css";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Signup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values, handleChange } = this.props;
        const expression = /\S+@\S+/
        expression.test(String('my-email@test.com').toLowerCase());
        return(
            <div className="userForm">
                User Form
                <FormControl>
                    <TextField
                        name="first-name"
                        id="standard-with-placeholder first"
                        label="Your First Name"
                        placeholder="First Name"
                        className="field"
                        margin="normal"
                        // onChange={handleChange("firstName")}
                        // defaultValue={values.firstName}
                    />
                     <TextField
                        name="last-name"
                        id="standard-with-placeholder last"
                        label="Your Last Name"
                        placeholder="Last Name"
                        className="field"
                        margin="normal"
                        // onChange={handleChange("lastName")}
                        // defaultValue={values.lastName}
                    />
                    <TextField
                        name="email"
                        id="standard-with-placeholder email"
                        label="Email address"
                        placeholder="email@website.com"
                        className="field"
                        type="email"
                        margin="normal"
                        // onChange={handleChange("email")}
                        // defaultValue={values.email}
                    />
                    <TextField
                        name="password"
                        id="standard-password-input"
                        label="Password"
                        className="field"
                        type="password"
                        margin="normal"
                        // onChange={handleChange("password")}
                        // defaultValue={values.password}
                    />
                    <Button      onClick={this.continue}>
                        Finish Signing Up
                    </Button>
                </FormControl>
            </div>
        )
    }
}



// export default class SignUp extends Component {
//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     }

//     render(){
//         const { values, handleChange } = this.props;
//         const expression = /\S+@\S+/
//         expression.test(String('my-email@test.com').toLowerCase());
//         return(
//             <React.Fragment>
//                 <Navbar />
//                 User Form
//                 <FormControl>
//                     <TextField
//                         name="first-name"
//                         id="standard-with-placeholder"
//                         label="Your First Name"
//                         placeholder="First Name"
//                         className="field"
//                         margin="normal"
//                         // onChange={handleChange("firstName")}
//                         // defaultValue={values.firstName}
//                     />
//                      <TextField
//                         name="last-name"
//                         id="standard-with-placeholder"
//                         label="Your Last Name"
//                         placeholder="Last Name"
//                         className="field"
//                         margin="normal"
//                         // onChange={handleChange("lastName")}
//                         // defaultValue={values.lastName}
//                     />
//                     <TextField
//                         name="email"
//                         id="standard-with-placeholder email"
//                         label="Email address"
//                         placeholder="email@website.com"
//                         className="field"
//                         type="email"
//                         margin="normal"
//                         // onChange={handleChange("email")}
//                         // defaultValue={values.email}
//                     />
//                     <TextField
//                         name="password"
//                         id="standard-password-input"
//                         label="Password"
//                         className="field"
//                         type="password"
//                         margin="normal"
//                         // onChange={handleChange("password")}
//                         // defaultValue={values.password}
//                     />
//                     <Button variant="contained" color="primary" onClick={this.continue}>
//                         Finish Signing Up
//                     </Button>
//                 </FormControl>
//                 <Footer />
//             </React.Fragment>
//         )
//     }
// }

// class User extends Component {
//     render(){
//         return(
//             <div>
//                 <Navbar />
//                 User Form
//                 <FormControl>
//                     <TextField
//                         name="name"
//                         id="standard-with-placeholder"
//                         label="Your Name"
//                         placeholder="Name"
//                         className="field"
//                         margin="normal"
//                     />
//                     <TextField
//                         name="email"
//                         id="standard-with-placeholder"
//                         label="Email address"
//                         placeholder="email@website.com"
//                         className="field"
//                         margin="normal"
//                     />
//                     <TextField
//                         name="password"
//                         id="standard-password-input"
//                         label="Password"
//                         className="field"
//                         type="password"
//                         margin="normal"
//                     />
//                      <TextField
//                         name="password2"
//                         id="standard-password-input"
//                         label="Confirm password"
//                         className="field"
//                         type="password"
//                         margin="normal"
//                     />  
//                 </FormControl>
//                 <Footer />
//             </div>
//         )
//     }
// }

// export default User;