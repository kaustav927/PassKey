import Image from 'next/image';
import logoImage from '../../../img/logo.png';
import userImage from '../../../img/user.png';
import {Fragment} from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <div className={classes.header1}>
                <div className={classes.userIcon} >
                    <Image className={classes.userimage} width='40%' height='40%' src={userImage}/>
                    Username
                </div>
            </div>
            <div className={classes.header2}></div>
        </Fragment>
    )
}

export default Header;

/**
 * This component renders the header of pages. 
 */