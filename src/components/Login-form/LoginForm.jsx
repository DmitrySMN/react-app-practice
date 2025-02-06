import styles from './LoginForm.module.css';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';

const LoginForm = () => {
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: 'onSubmit',
  });
  const [registration, setRegistration] = useState(false);
  const { store } = useContext(Context);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // const response = await axios.post(
    //   'http://localhost:3000/api/users/users',
    //   data,
    // );
    // console.log(response.data);
  };

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
            <h1 className={styles.form__title}>
              {registration ? 'Регистрация' : 'Вход'}
            </h1>
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

          {registration ? (
            <div className={styles['form__input-box']}>
              <input
                {...register('username')}
                className={styles['form__input-field']}
                type="text"
                placeholder={'Имя пользователя'}
                required
              />
            </div>
          ) : null}

          <div className={styles['form__input-box']}>
            <input
              {...register('password')}
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

          {registration ? (
            <button
              onClick={() =>
                store.register(
                  getValues('email'),
                  getValues('username'),
                  getValues('password'),
                )
              }
              className={styles.form__button}
              type="submit"
            >
              Зарегистрироваться
            </button>
          ) : (
            <button
              onClick={() => {
                try {
                  const user = store.login(getValues('email'), getValues('password'))
                  if (user) {
                    navigate('/');
                  } 
                } catch (e) {
                  alert('Неверный пароль');
                }
              
              }
              }
              className={styles.form__button}
              type="submit"
            >
              Войти
            </button>
          )}

          <div
            onClick={(event) => {
              event.preventDefault();
              setRegistration(!registration);
            }}
            className={styles.form__register}
          >
            <Typography>
              <p>
                {registration ? 'Уже есть аккаунт?' : 'Первый раз здесь?'}
                <a href="">{registration ? 'Войти' : 'Регистрация'}</a>
              </p>
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(LoginForm);
