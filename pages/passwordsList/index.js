import Layout from '../../components/layout/Layout';
import {paginate} from '../../core/utils/paginate';
import PasswordItem from '../../components/passwordItem/index';
import classes from './PasswordsList.module.css';
import Pagination from '../../components/pagination/index';
import {useState} from 'react';

//dummy passwords list
const dummy_passwords = [
    {id: 1, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 2, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 3, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 4, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 5, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 6, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 7, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 8, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 9, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 10, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 11, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 12, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 13, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 14, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 15, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"}
]

const PasswordsList = () => {

    const [topMostPassIndex, setTopMostPassIndex] = useState(0);   //saves the index of top most password element on the page
    let pageSize = 6;                                              //number of password elements per page

    //getting the new index for first password element that should be displayed at top of the page  
    //(after user clicked on the right/left button)
    const topMostIndexHandler = (page) => { 
        setTopMostPassIndex(page);
    };

    //splits the part of data that is going to be displayed in the first page
    const firstPagePass = dummy_passwords.slice(0, pageSize);

    //splits the part of data that is going to be displayed in the other pages
    const otherPagesPass = paginate(dummy_passwords, topMostPassIndex, pageSize);
    
    return(
        <Layout
        footerComponent={ <Pagination topMostIndexHandler={topMostIndexHandler} passwordsInfo={dummy_passwords} pageSize={pageSize} address={'passwordsList'} topMostPassIndex={topMostPassIndex}/>}>
            <ul className={classes.passwordTable}>  
                <li className={classes.header}>
                    <ul>
                        <li className={classes.passName}>Name<button></button></li>
                        <li className={classes.passDecription}>Description</li>
                        <li className={classes.passStatus}>Status</li>
                        <li className={classes.options}> . . . </li>
                    </ul>    
                </li>      
                {(topMostPassIndex == 0) && (firstPagePass.map(listItem => <li key={listItem.id} className={classes.program}><PasswordItem passwordInfo={listItem}></PasswordItem></li>))}
                {(0 < topMostPassIndex) && (topMostPassIndex < dummy_passwords.length) && (otherPagesPass.map(listItem => <li key={listItem.id} className={classes.program}><PasswordItem passwordInfo={listItem}></PasswordItem></li>))}             
            </ul>
           
        </Layout>
     
    );
};

export default PasswordsList;
/**
 * This component renders passwords list.
 * Only the first page elements are prerendered. The elements of other pages are 
 * being rendered whenever the user clicks on the relevant page number.
 * 
 */


/**
 * const PasswordsList = () => {

    const [currentPage, setCurrentPage] = useState(false);   //false: right false = left right, true: right true
    let pageSize = 6;            //number of password elements per page



    //getting the page number that user clicked on from Pagination and update currentPage state 
    const setPage = (page) => { 
        setCurrentPage(page);
        {page ? setCurrentPage(fa)
        console.log(page);
    };

    //split the part of data that is going to be displayed in the first page
    const firstPagePass = dummy_passwords.slice(0, pageSize);

    //split the part of data that is going to be displayed in other pages
    const otherPagesPass = paginate(dummy_passwords, currentPage, pageSize);
    
    
    
    return(
        <Layout
        footerComponent={ <Pagination setPage={setPage} passwordsInfo={dummy_passwords} pageSize={pageSize} address={'passwordsList'}/>}>
            <ul className={classes.passwordTable}>  
                <li className={classes.header}>
                    <ul>
                        <li className={classes.passName}>Name<button></button></li>
                        <li className={classes.passDecription}>Description</li>
                        <li className={classes.passStatus}>Status</li>
                        <li className={classes.options}> . . . </li>
                    </ul>    
                </li>                 
                {(((currentPage - 1)*pageSize) >= pageSize) && (otherPagesPass.map(listItem => <li key={listItem.id} className={classes.program}><PasswordItem passwordInfo={listItem}></PasswordItem></li>))}  
                {(((currentPage - 1)*pageSize) < pageSize) && (firstPagePass.map(listItem => <li key={listItem.id} className={classes.program}><PasswordItem passwordInfo={listItem}></PasswordItem></li>))}
            </ul>
           
        </Layout>
     
    );
};

export default PasswordsList;

/**
 * This component renders passwords list.
 * Only the first page elements are prerendered. The elements of other pages are 
 * being rendered whenever the user clicks on the relevant page number.
 * 
 */
 



/**
 * import Layout from '../../components/layout/Layout';
import {paginate} from '../../core/utils/paginate';
import PasswordItem from '../../components/passwordItem/index';
import classes from './PasswordsList.module.css';
import Pagination from '../../components/pagination/index';
import {useState} from 'react';

//dummy passwords list
const dummy_passwords = [
    {id: 1, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 2, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 3, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 4, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 5, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 6, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 7, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 8, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 9, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 10, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 11, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 12, name: "Facebook.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 13, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 14, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"},
    {id: 15, name: "Amazon.ca", description: "Lorem ipsum dolor sit", status: "active"}
]

const PasswordsList = () => {

    const [currentPage, setCurrentPage] = useState(0);
    let pageSize = 6;            //number of password elements per page

    //getting the page number that user clicked on from Pagination and update currentPage state 
    const setPage = (page) => { 
        setCurrentPage(page.target.innerText);
        console.log(page.target.innerText);
    };

    //split the part of data that is going to be displayed in the first page
    const firstPagePass = dummy_passwords.slice(0, pageSize);

    //split the part of data that is going to be displayed in other pages
    const otherPagesPass = paginate(dummy_passwords, currentPage, pageSize);
    
    
    
    return(
        <Layout
        footerComponent={ <Pagination setPage={setPage} passwordsInfo={dummy_passwords} pageSize={pageSize} address={'passwordsList'}/>}>
            <ul className={classes.passwordTable}>  
                <li className={classes.header}>
                    <ul>
                        <li className={classes.passName}>Name<button></button></li>
                        <li className={classes.passDecription}>Description</li>
                        <li className={classes.passStatus}>Status</li>
                        <li className={classes.options}> . . . </li>
                    </ul>    
                </li>                 
                {(((currentPage - 1)*pageSize) >= pageSize) && (otherPagesPass.map(listItem => <li key={listItem.id} className={classes.program}><PasswordItem passwordInfo={listItem}></PasswordItem></li>))}  
                {(((currentPage - 1)*pageSize) < pageSize) && (firstPagePass.map(listItem => <li key={listItem.id} className={classes.program}><PasswordItem passwordInfo={listItem}></PasswordItem></li>))}
            </ul>
           
        </Layout>
     
    );
};

export default PasswordsList;

/**
 * This component renders passwords list.
 * Only the first page elements are prerendered. The elements of other pages are 
 * being rendered whenever the user clicks on the relevant page number.
 * 
 */

 