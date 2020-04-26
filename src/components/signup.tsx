import React from 'react';
import {RootState} from '../store';
import {addNewSignupToUsersList} from '../store/signup/action';
import {UsersList} from '../store/signup/types';
import { Button, Form, Grid } from 'semantic-ui-react';
import {connect} from 'react-redux';

// declaring ISignupPageProps as my props
export interface ISignupPageProps {
    addNewSignupToUsersList: typeof addNewSignupToUsersList,
       userslist: UsersList []
}

export class SignupPage extends React.Component<ISignupPageProps>
{
    generateID = (): number => {
        let randomNumber: number = Math.floor(Math.random() * 1000);
        randomNumber += this.props.userslist.length;
        return randomNumber;
    }
 
// declaring the eventhandler and setting it to default
SignedUp = ( event: any ) => {
    event.preventDefault();

    // Handle retrieval of username form field value.
    const userField: HTMLInputElement | null = document.querySelector( '[name="username"]' );
    let userFieldValue: string = '';
    if ( userField !== null ) userFieldValue = userField.value;
    
    // Add new username to userslist.
    this.props.addNewSignupToUsersList( {
        id: this.generateID(),
        name: userFieldValue
    });
    // Handle retrieval of password form field value.
    const passField: HTMLInputElement | null = document.querySelector( '[name="password"]' );
    let passFieldValue: string = '';
    if ( passField !== null ) passFieldValue = passField.value;
   
    // Add new password to userslist..
    this.props.addNewSignupToUsersList( {
        id: this.generateID(),
        name: passFieldValue
    });

    // Handle retrieval of interests form field value.
    const intField: HTMLInputElement | null = document.querySelector( '[name="interests"]' );
    let intFieldValue: string = '';
    if ( intField !== null ) intFieldValue = intField.value;
    
    // Add new intersets to userslist.
    this.props.addNewSignupToUsersList( {
        id: this.generateID(),
        name: intFieldValue
    });

    // show alert on successfull signup
    alert("Welcome!!! You have successfully signed up."); 

    // Clear input fields and reset them to blank
    event.target.reset();
  }
   

render() {
    let {userslist}=this.props;
    console.log (userslist); // checking the console to ensure that new imputs are added 

    return (
<Grid centered>
  <Form onSubmit= {this.SignedUp}>
    <Form.Field>
        <br></br>
        <h1> Signup </h1>
        <br></br>
      <label>Username</label>
      <input name= 'username' placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type= 'password' placeholder='Password' name='password' />
    </Form.Field>
    <Form.Field>
      <label>Interests</label>
      <input name= 'interests' placeholder='Interests' />
    </Form.Field>
    <Button type='submit'>Signup</Button>
  </Form>
  </Grid>
    )
}
}

// Retrieve "userslist" from our "global" redux state.
const mapStateToProps = (state: RootState) => {
    return {
        userslist: state.signup.userslist
    }
}

// Connecting Redux and React
export default connect(
    mapStateToProps,
    { addNewSignupToUsersList}
)(SignupPage);