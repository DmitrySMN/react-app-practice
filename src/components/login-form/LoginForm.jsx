import styles from './LoginForm.module.css'
import {Typography} from "@mui/material";

const LoginForm = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <Typography>
                        <h1 className={styles.form__title}>Вход</h1>
                    </Typography>

                    <div className={styles["form__input-box"]}>
                        <input className={styles["form__input-field"]} type="text" placeholder={'Почта или имя пользователя'} required/>
                    </div>
                    <div className={styles["form__input-box"]}>
                        <input className={styles["form__input-field"]} type="password" placeholder={'Пароль'} required/>
                    </div>

                    <div className={styles.form__remember}>
                        <Typography>
                            <label htmlFor=""><input type="checkbox"/>Запомнить меня</label>
                        </Typography>
                        <a>
                            <Typography>Забыл пароль</Typography>
                        </a>
                    </div>

                    <button className={styles.form__button} type='submit'>Войти</button>

                    <div className={styles.form__register}>
                        <Typography>
                            <p>Первый раз здесь? <a href="">Регистрация</a></p>
                        </Typography>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default LoginForm;