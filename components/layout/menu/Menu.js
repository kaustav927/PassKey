import classes from './Menu.module.css';
import {Fragment} from 'react';
import { useState } from "react";
import Link  from 'next/link';

const Menu = () => {
    //this variable shows the state of the sidebar (if it is collapsed or not).
    const [showSidebar, setShowSidebar] = useState(false);

    //This function changes the state of sidebar whenever the user clicks the button to close/open it 
    const ShowMenuHandler = () => {
        showSidebar ? setShowSidebar(false) : setShowSidebar(true);
    };

    return(
        <Fragment>
            <div className={classes.sidebar}
            style={{ right: showSidebar ? "82%" : "100%", transition: "1s" }}>
            
                <button className = {classes.button} onClick={ShowMenuHandler}> {'>>'} </button>
           
                <div className={classes.menuItems}>
                    <Link href="/" >
                        Home
                    </Link>
                    <Link href="/passwordsList" >
                        Passwords
                    </Link>
                    <Link  href="/addKey" >
                        Add Key
                    </Link>
                    <Link href="/generateKey" >
                        Generate Key
                    </Link>
                    <Link href="/backup">
                        Backup
                    </Link>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                    <Link href="/settings" >
                        Settings
                    </Link>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Menu;

/**
 * This component renders the slidebar and enables the user to navigate between the pages.
 */