// import classes from '../style/MainHeader.module.css';
import { GoHistory } from "react-icons/go";
import { IoMdBeer } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { BsCardList } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from '../style/MainHeader.module.css'

function MainHeader(){
    return (
        <header className={ classes.header }>
            <Link to='/'>
                <h1 className={classes.logo}>
                    <IoMdBeer />
                    To Drink
                </h1>
            </Link>
            <p><Link to='/' className={classes.button}><FaHome />Home</Link></p>
            <p><Link to='/placelist' className={classes.button}><BsCardList />List</Link></p>
            <p><Link to='/history' className={classes.button}>
                    <GoHistory />
                    History
                </Link></p>
            <p><Link to='/about' className={classes.button}>About me <ImProfile /></Link></p>
        </header>
    );
}

export default MainHeader;