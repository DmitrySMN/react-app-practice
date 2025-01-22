import styles from './Header.module.css'
import TheatersIcon from '@mui/icons-material/Theaters';
import Button from '@mui/material/Button';
import ModalWindow from "../modal/ModalWindow.jsx";
import { ReactTyped } from "react-typed";

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
                           <li className={styles.navlist__item}><a href="">{h}</a></li>)}
                        </ul>
                        <div className={styles.login}>
                            <ModalWindow />
                        </div>
                    </nav>
                    <div className={styles.header__content}>
                        <h1 className={styles.header__title}>
                            <ReactTyped strings={["Все что вы хотели знать о кинемотографе"]} typeSpeed={40}/>
                        </h1>
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