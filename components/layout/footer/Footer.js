import classes from './Footer.module.css';

const Footer = props => {

    return (
        <div className = {classes.footer}> {props.children} </div>
    )
}

export default Footer;