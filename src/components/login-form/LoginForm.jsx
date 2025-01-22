import styles from './LoginForm.module.css'
import Button from "@mui/material/Button";

const LoginForm = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <h1 className={styles.form__title}>Вход</h1>
                    <div className={styles["form__input-box"]}>
                        <input className={styles["form__input-field"]} type="text" placeholder={'Почта или имя пользователя'} required/>
                    </div>
                    <div className={styles["form__input-box"]}>
                        <input className={styles["form__input-field"]} type="text" placeholder={'Пароль'} required/>
                    </div>

                    <button type='submit'>Войти</button>

                    <div className={styles.form__register}>
                        <p>Первый раз здесь?</p><a href="">Регистрация</a>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default LoginForm;