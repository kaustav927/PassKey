import Image from 'next/image';
import logoImage from '../../../img/logo.png';
import {Fragment} from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <div className={classes.header1}>
                <div className={classes.logo} ><Image width='100%' height='100%' src={logoImage}/></div>
            </div>
            <div className={classes.header2}></div>
        </Fragment>
    )
}

export default Header;

/**
 * This component renders the header of pages. 
 */