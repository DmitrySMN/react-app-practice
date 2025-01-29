import styles from './LoginForm.module.css';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm({ mode: 'onchange' });
  const onSubmit = (data) => {};

  const emailError = formState.errors['email']?.message;

  return (
    <div className={styles.hhh}>
      <div className={styles.back}>
        <Link to="/">
          <button className={styles.back__button}>
            <ArrowBackIcon />
          </button>
        </Link>
      </div>

      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Typography>
            <h1 className={styles.form__title}>Вход</h1>
          </Typography>

          <div className={styles['form__input-box']}>
            <input
              {...register('email', {
                required: true,
                maxLength: 55,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Неверный формат почты',
                },
              })}
              className={styles['form__input-field']}
              placeholder={'Почта'}
              type="email"
            />
          </div>
          {emailError && <p>{emailError}</p>}
          <div className={styles['form__input-box']}>
            <input
              className={styles['form__input-field']}
              type="password"
              placeholder={'Пароль'}
              required
            />
          </div>

          <div className={styles.form__remember}>
            <Typography>
              <label htmlFor="">
                <input type="checkbox" />
                Запомнить меня
              </label>
            </Typography>
            <a>
              <Typography>Забыл пароль</Typography>
            </a>
          </div>

          <button className={styles.form__button} type="submit">
            Войти
          </button>

          <div className={styles.form__register}>
            <Typography>
              <p>
                Первый раз здесь? <a href="">Регистрация</a>
              </p>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
