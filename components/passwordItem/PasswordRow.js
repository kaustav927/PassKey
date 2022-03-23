import Link  from 'next/link';
import classes from './PasswordItem.module.css';
import Image from 'next/image';
import editImage from '../../img/edit.png';
import deleteImage from '../../img/delete.png';
import {useState} from 'react';


const PasswordRow = (props) => {
    const [isActive, setIsActive]= useState(true);
    
 
   const onDoubleClick = (id)=> {
    setIsActive(!isActive);
    console.log("double click",id,isActive);
  }

    return(
        <ul className={classes.passItem}>
            <li className={classes.checkBox}><input type="checkbox"></input></li>
            <li className={classes.passName}>{props.passwordInfo.name}</li>
            <li className={classes.passDecription}>{props.passwordInfo.description}</li>
            <li className="mr-12">
                <button className={`${isActive ? "bg-blue-500 rounded px-4 py-2 text-sm text-white" : "bg-red-500 text-xs rounded px-3.5 py-2 text-xs text-white"}`} onDoubleClick={()=>onDoubleClick(props.passwordInfo.id)}>
                         {<span>{isActive ? <span>Active</span> : <span>Inactive</span>}</span>}
                </button>
            </li>
            <li className={classes.editPass}>
                <Link className={classes.lin} href= '/passwordsList'>
                    <button onClick={()=>props.onEditClick(props.passwordInfo.id)}>
                        <Image 
                            src={editImage} 
                            imagewidth='35%' 
                            height='32%'
                            />
                    </button>
                </Link>
            </li>
            <li className={classes.deletePass}>
                <button onClick={()=>props.onDelete(props.passwordInfo.id)}>
                    <Image src={deleteImage} width='28%' height='28%' />    
                </button>
            </li>
            <li className={classes.options}> . . . </li>
        </ul>  
    );
}

export default PasswordRow;

/**
 * This component renders each password item in the passwords list/table.
**/
//<li className={classes.editPass}><Link className={classes.lin} href= '/home'><a><Image src={editImage} width='35%' height='32%' /></a></Link></li>
