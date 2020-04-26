import React from 'react';
import { RootState } from '../store';
import { addNewSignupToUsersList } from '../store/signup/action';
import { UsersList } from '../store/signup/types';
import { Button, Form, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

// declaring ISignupPageProps as my props
export interface ISignupPageProps {
  addNewSignupToUsersList: typeof addNewSignupToUsersList,
  userslist: UsersList[]
}

export class SignupPage extends React.Component<ISignupPageProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor(Math.random() * 1000);
    randomNumber += this.props.userslist.length;
    return randomNumber;
  }

  // declaring the eventhandler and setting it to default
  SignedUp = (event: any) => {
    event.preventDefault();

    // Handle retrieval of username form field value.
    const userField: HTMLInputElement | null = document.querySelector('[name="username"]');
    const passField: HTMLInputElement | null = document.querySelector('[name="password"]');
    const intField: HTMLInputElement | null = document.querySelector('[name="interests"]');

    let userFieldValue: string = '';
    let intFieldValue: string = '';
    let passFieldValue: string = '';

    if (userField !== null) userFieldValue = userField.value;
    if (intField !== null) intFieldValue = intField.value;
    if (passField !== null) passFieldValue = passField.value;

    let checker = this.props.userslist.filter(user => user.name.toLowerCase() === userFieldValue.toLowerCase());
    
    if (checker.length === 0){      
      this.props.addNewSignupToUsersList({
        id: this.generateID(),
        name: userFieldValue,
        password: passFieldValue,
        interests: intFieldValue
      });
      // show alert on successfull signup
      alert("Welcome!!! You have successfully signed up."); 
    } else {
      alert('Username name is already existing!!!')
    }

    // Clear input fields and reset them to blank
    event.target.reset();
  }


  render() {

    console.log(this.props.userslist.length); // checking the console to ensure that new imputs are added 

    return (
      <Grid centered>
        <Form onSubmit={this.SignedUp}>
          <Form.Field>
            <br></br>
            <h1> Signup </h1>
            <br></br>
            <label>Username</label>
            <input name='username' placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' name='password' />
          </Form.Field>
          <Form.Field>
            <label>Interests</label>
            <input name='interests' placeholder='Interests' />
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
  { addNewSignupToUsersList }
)(SignupPage);