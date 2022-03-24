import {Fragment} from 'react';
import Menu from './menu/Menu';
import Header from './header/Header';
import Footer from './footer/Footer';
import classes from './layout.module.css';
import React, { useEffect,useState } from "react";
import Router from 'next/router'

const Layout = ({children,footerComponent, headerComponent}) => {

    /**useEffect(() => {
        const {pathname} = Router;
        if(pathname == '/' ){
            Router.push('/home')
        }
      },[]);**/

    return (
        <div className = {classes.frame}>                                         
            <div className={classes.content}>
               <Header>{headerComponent}</Header>                                 
                <main className={classes.mainFrame}> {children} </main>
                <Footer>{footerComponent}</Footer>
            </div>                                                                
            <Menu/>
        </div>
    )
}

export default Layout;

/**
 * This page provides the layout of the application pages including header, footer and menu.
 */