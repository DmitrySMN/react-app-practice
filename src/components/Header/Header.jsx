import styles from './Header.module.css'
import TheatersIcon from '@mui/icons-material/Theaters';
import Button from '@mui/material/Button';
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
                                <Button sx={{color: 'white', margin: 0}} variant='outlined'>
                                    <Typography>Войти</Typography>
                                </Button>
                            </Link>
                        </div>
                    </nav>
                    <div className={styles.header__content}>
                        <Typography variant='h3'>
                            <p className={styles.header__title}>
                                <ReactTyped strings={["Все что вы хотели знать о кинемотографе"]} typeSpeed={40}/>
                            </p>
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