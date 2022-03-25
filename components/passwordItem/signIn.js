import {Fragment} from 'react';
import {useState, useRef} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Link  from 'next/link';
import classes from './signIn.module.css';

const SignIn = (props) => {
    const loggedIn = false;
    const [user, setUser] = useState(loggedIn ? false : true);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const switchAuthModeHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const userObj = {enteredEmail, enteredPassword};

        //const user = await someFunction(userObj);
        setUser(true);
        props.setSignedIn(user);
    }

    return(
        <Fragment>
            <form className={`row pl-5 m-b-0 ${classes.signIn}`}>
                <dl className="row mt-4 pb-0 border border-secondary rounded">
                
                    <div className={`mb-3 ${classes.inputArea}`}>
                        <label htmlFor="exampleDropdownFormEmail" className="form-label"> Email </label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" ref={emailInputRef}></input>
                    </div>
                
                    <div className={`mb-3 ${classes.inputArea}`}>
                        <label htmlFor="exampleDropdownFormPassword" className="form-label"> Password </label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password" ref={passwordInputRef}></input>
                    </div>
                
                    <button type='submit' className={`btn mb-3 h-9 btn-primary btn-sm w-10 ${classes.btnStyle}`} onClick={switchAuthModeHandler}>
                        <Link href="/passwordsList" class="btn btn-primary btn-sm w-10"> Sign in </Link>
                    </button>
                </dl>
            </form>
        </Fragment>
    );
};

export default SignIn;

/**
 * This component renders the signin modale in the passwords page. This modal will be displayed after user clickes
 * on the specific password row in password table
 */