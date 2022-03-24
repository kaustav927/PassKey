import Layout from '../components/layout/Layout';
import {paginate} from '../core/utils/paginate';
import PasswordRow from '../components/passwordItem/PasswordRow';
import classes from './PasswordsList.module.css';
import Pagination from '../components/pagination/index';
import {useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PasswordModal from '../components/passwordItem/passwordModal';
import EditModal from '../components/passwordItem/EditModal';
import Search from '../components/search';

//dummy passwords list
const dummyPassword = [
    {id: 1, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 2, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 3, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 4, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 5, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 6, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 7, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 8, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 9, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 10, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 11, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 12, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 13, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 14, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 15, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"}
]



const PasswordsList = () => {

    //dummy passwords list
    const [dummyPasswords,setDummyPasswords] = useState([
        {id: 1, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 2, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 3, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 4, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 5, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 6, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 7, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 8, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 9, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 10, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 11, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 12, name: "Facebook.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "yellow"},
    {id: 13, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "red"},
    {id: 14, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"},
    {id: 15, name: "Amazon.ca", password: "12345", description: "Lorem ipsum dolor sit", status: "active", passStrength: "green"}
    ]);

    //Setting pagination for password table**

    const [topMostPassIndex, setTopMostPassIndex] = useState(0);   //saves the index of top most password element on the page
    let pageSize = 6;                                              //number of password elements per page

    //getting the new index for first password element that should be displayed at top of the page  
    //(after user clicked on the right/left button)
    const topMostIndexHandler = (page) => { 
        setTopMostPassIndex(page);
    };

    //splits the part of data that is going to be displayed in the first page
    const firstPagePass = dummyPassword.slice(0, pageSize);

    //splits the part of data that is going to be displayed in the other pages
    const otherPagesPass = paginate(dummyPassword, topMostPassIndex, pageSize);


    //Setting password information modal**

    const [password, setPasswordId] = useState();
    const [isOpen, setOpen] = useState(false);

    const clickedPasswordItem = (currentPasswordId) => {
        setPasswordId(currentPasswordId);
        setOpen(true);
    }

    const closeModalHandler = () => {
        setOpen(false);
    }


    //Setting edit password modal** 

    const [openEdit, setEdit]=useState(false)

    const onEditClick = (id) => {
        console.log(id);
        setEdit(true)
    }
    const onEditClose = (id) => {
        console.log('close' ,id)
        setEdit(false)
    }
    const onEditSave = (id) => {
        console.log('save' ,id)
        var answer = window.confirm("Save data?");
        if (answer) {
            setEdit(false)
        }
        else {
            setEdit(true)
        }
    }
    const onDelete= (id) => {
        console.log('delete',id)
        setDummyPasswords(dummyPasswords.filter((pass) => pass.id !== id))
    }
    
    return(
        <Layout
        footerComponent={ <Pagination topMostIndexHandler={topMostIndexHandler} passwordsInfo={dummyPassword} pageSize={pageSize} address={'passwordsList'} topMostPassIndex={topMostPassIndex}/>}>
            {openEdit ? <EditModal isOpen={openEdit} onEditClose={onEditClose}/> :
            <><Search></Search>
            <ul className={classes.passwordTable}>  
                <li className={classes.header}>
                    <ul>
                        <li className={classes.passName}>Name<button></button></li>
                        <li className={classes.passDecription}>Description</li>
                        <li className={classes.passStatus}>Status</li>
                        <li className={classes.options}> . . . </li>
                    </ul>      
                </li> 
                   
                {(topMostPassIndex == 0) && (firstPagePass.map(listItem => 
                    <li key={listItem.id} className={classes.passwordItem} >
                        <PasswordRow passwordInfo={listItem} clickedPasswordItem={clickedPasswordItem} onEditClick={onEditClick} onEditSave={onEditSave} onDelete={onDelete}></PasswordRow>
                    </li>
                ))}
                {(0 < topMostPassIndex) && (topMostPassIndex < dummyPassword.length) && (otherPagesPass.map(listItem => 
                    <li key={listItem.id} className={classes.passwordItem}>
                        <PasswordRow passwordInfo={listItem} clickedPasswordItem={clickedPasswordItem} onEditClick={onEditClick} onEditSave={onEditSave} onDelete={onDelete}></PasswordRow>
                        </li>
                    ))}               
            </ul>
            </>
            }
            <Modal open={isOpen} onClose={closeModalHandler} currentPassword={password} portalClassName={classes.Modal} overlayClassName={classes.customModal} >
                <PasswordModal open={isOpen} onClose={closeModalHandler} currentPassword={password} className={classes.modal}></PasswordModal>
            </Modal>
            
        </Layout>
    );
};

export default PasswordsList;

