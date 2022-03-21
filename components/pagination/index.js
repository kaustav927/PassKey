import _ from 'lodash';
import Link from 'next/link';
import classes from './Pagination.module.css';

const Pagination = (props) => {

    //we get the page number of the link that user is clicked on it and send it to 
    //any component that imports Pagination component. 
    const leftButtonHandler = () => {
        {props.topMostPassIndex - props.pageSize >= 0 ? props.topMostIndexHandler(props.topMostPassIndex - props.pageSize) : 0}
    }

    const rightButtonHandler = () => {
        {props.topMostPassIndex + props.pageSize < props.passwordsInfo.length ? props.topMostIndexHandler(props.topMostPassIndex + props.pageSize) : props.topMostPassIndex}
    }
    
    //calculating first and last password items that are rendered on the page
    let firstPass = props.topMostPassIndex + 1;
    let lastpass;
    {props.topMostPassIndex + props.pageSize < props.passwordsInfo.length ? (lastpass = props.topMostPassIndex + props.pageSize) : (lastpass = props.topMostPassIndex + (props.passwordsInfo.length - props.topMostPassIndex))}
    
    
    return (
        <ul className={classes.pageList}>
                <li className={classes.activePass}>Active passwords</li>
                <li className={classes.rows}>{'Rows per page  ' + props.pageSize}</li>
                <li className={classes.passItems}> {firstPass + ' - ' + lastpass + '  of  ' + props.passwordsInfo.length}</li>
                <li className={classes.leftButton}>
                    <Link href={`/${props.address}`} ><a onClick={leftButtonHandler}> {'<'} </a></Link>
                </li>
                <li className={classes.rightButton}>
                    <Link href={`/${props.address}`} ><a onClick={rightButtonHandler}> {'>'} </a></Link>
                </li>
        </ul>

    );
}

export default Pagination;

/**
 * This component renders the page numbers for passwords list.
 */


/**
 * import _ from 'lodash';
import Link from 'next/link';
import classes from './Pagination.module.css';

const Pagination = (props) => {

    const numberOfPages = Math.ceil(props.passwordsInfo.length/props.pageSize);
    //if whole data can be displayed in one page, we will not show the paging option to the user
    if(numberOfPages === 1){
        return null;
    }

    const pageNumbers = _.range(1, numberOfPages+1);

    //we get the page number of the link that user is clicked on it and send it to 
    //any component that imports Pagination component. 
    const selectedPageHandler = (event) => {
        props.setPage(event);
    }

    return (
        <ul className={classes.pageList}>
            {pageNumbers.map( pageNumber => (
                <li key={pageNumber}>
                    <Link href={`/${props.address}`} onClick={selectedPageHandler}><a>{pageNumber}</a></Link>
                </li>
            ))}
        </ul>

    );
}

export default Pagination;

/**
 * This component renders the page numbers for passwords list.
 */
 