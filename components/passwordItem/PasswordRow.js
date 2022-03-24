import Link  from 'next/link';
import classes from './passwordRow.module.css';
import Image from 'next/image';
import editImage from '../../img/edit.png';
import deleteImage from '../../img/delete.png';
import {useState} from 'react';

const PasswordRow = (props) => {
   
    const [isActive, setIsactive] = useState(true);              
                                                                 
    const statueHandler = () => {
        isActive ? setIsactive(false) : setIsactive(true);
    }

    const clickedPasswordHandler = () => {
        props.clickedPasswordItem(props.passwordInfo);
    }

    return(
        
        <ul className={classes.passItem}>

            <li className={classes.passwordStrength} data-toggle="tooltip" data-placement="bottom" title="password strength" style={{ background: `${props.passwordInfo.passStrength}`}}> </li>
            <li className={classes.passName}>
                <button className={classes.frame} onClick={clickedPasswordHandler}>{props.passwordInfo.name}</button>
            </li>

            <li className={classes.passDecription}>
                <button className={classes.frame} onClick={clickedPasswordHandler}>{props.passwordInfo.description}</button>
            </li>


            <li className={classes.passStatus} onClick={statueHandler} style={{ background: isActive ? "rgb(10, 101, 255)" : "red"}}>{ isActive ? "Active" : "Inactive"}</li>
            
            <li className={classes.editPass}>
                <Link className={classes.lin} href= '/passwordsList'>
                    <button onClick={()=> props.onEditClick(props.passwordInfo.id)}>
                        <Image src={editImage} width='33%' height='29%' />
                    </button>
                </Link>
            </li>

            <li className={classes.deletePass}>
                <button onClick={()=>props.onDelete(props.passwordInfo.id)}>
                    <Image src={deleteImage} width='27%' height='27%' />
                </button>
            </li>

            <li className={classes.options}> . . . </li>
        </ul>  
        
    );
}

export default PasswordRow;

/**
 * This component renders each password item in the passwords list/table.
 */