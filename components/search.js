
import "bootstrap/dist/css/bootstrap.css";
import classes from './search.module.css';
import Image from 'next/image';
import searchImage from '../img/search.png';

const Search = () => {

    return(
        <form class={`form-inline border border-secondary ${classes.searchFrame}`}>
            <input class={`form-control mr-sm-2 w-20 ${classes.searchInput}`} type="search" placeholder="Search" aria-label="Search"/>
            <button class= {`btn my-2 my-sm-0 ${classes.searchBtn}`} type="submit"><Image src={searchImage} width="20px" height="20px"/></button>
          
        </form>
    );
};

export default Search;