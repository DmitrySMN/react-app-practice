import styles from './Header.module.css'
import TheatersIcon from '@mui/icons-material/Theaters';
import Button from '@mui/material/Button';
import ModalWindow from "../modal/ModalWindow.jsx";
import { ReactTyped } from "react-typed";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    
    const headers = ['Фильмы', 'Афиша', 'Цены', 'Адрес', 'О нас'];


    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <a href="" className={styles.logo}>
                            <TheatersIcon />
                        </a>
                        <ul className={styles.navlist}>
                           {headers.map(h =>
                               <Typography sx={{padding: 0}}>
                                   <li className={styles.navlist__item}><a href="">{h}</a></li>
                               </Typography>
                           )}
                        </ul>
                        <div className={styles.login}>
                            <Link to='/login'>
                                <Button sx={{color: 'white'}} variant='outlined'>
                                    <Typography>Войти</Typography>
                                </Button>
                            </Link>
                        </div>
                    </nav>
                    <div className={styles.header__content}>
                        <Typography>
                            <h1 className={styles.header__title}>
                                <ReactTyped strings={["Все что вы хотели знать о кинемотографе"]} typeSpeed={40}/>
                            </h1>
                        </Typography>
                    <Button style={{
                            width: 150,
                            height:50
                        }} variant='contained'>Кнопка</Button>
                    </div>
                </div>   
            </header> 
               
        </>
    );
}


export default Header;