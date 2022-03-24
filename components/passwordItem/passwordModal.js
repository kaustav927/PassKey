import {Fragment, useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import SignIn from './signIn';
import PasswordInfo from './passwordInfo';

const PasswordModal = (props) => {
    
    const [isSignedIn, setIsSignedIn] = useState(false);           //isSignedIn has the latest user authentication status 

    const informationPgeHandker = (signedIn) => {                  //isSignedIn gets the latest user authentication status from signIn component 
        setIsSignedIn(signedIn);
    }
    
    return(
        <Fragment>
            {!isSignedIn ? 
                <SignIn setSignedIn={informationPgeHandker}></SignIn>
                :
                <PasswordInfo currentPassword={props.currentPassword}/>
            }
        </Fragment>
    );
};

export default PasswordModal;

/**
 * This component shows allows the user to see the password information. 
 * User can access this component by clicking on specific password row in passwords table. Password information will be displayed in a modal.
 * By clicking each row, first sign in modal pops-up for security purposes and after authentication user can access the password information.
 */
