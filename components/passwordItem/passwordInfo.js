import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Image from "next/image";
import clipboard from "../../img/clipboard.png";
import classes from "./passwordInfo.module.css";        

const PasswordInfo = (props) => {

    return (
        <dl className="row pt-4 ml-5 pl-5 pb-0">
            <dl className="row pt-5 pb-5 mb-0 ml-5 border border-secondary rounded">
                
                <dt className="col-sm-3 mb-4"> Password Name: </dt>
                <dd className="col-sm-9 w-50 h-8 mr-1 mb-4 border border-secondary rounded"> {props.currentPassword.name} </dd>

                <dt className="col-sm-3 mb-4">Password Description: </dt>
                <dd className="col-sm-9 h-20 w-50 mr-1 mb-4 border border-secondary rounded">
                    <p>{props.currentPassword.description}</p>
                </dd>
                
                <dt className="col-sm-3"> Password: </dt>
                <dd className={`col-sm-9 h-8 border border-secondary rounded ${classes.passwordInput}`}> {props.currentPassword.password} </dd>
                
                <CopyToClipboard text={props.currentPassword.password}>
                    <button className={`bi bi-clipboard ${classes.clipboardButton}`}><Image src={clipboard} width="20px" height="25px"/></button>
                </CopyToClipboard>
            </dl>
        </dl>
    );
};

export default PasswordInfo;

/**
 * This component provides the password information to the user including password,  
 * description and name. User cannot access this component if he/she does not sign in.
 * npm install --save react-copy-to-clipboard
 */